/**
 * RoutineScheduler Adapter - Implementation of RoutineSchedulerPort
 * Pure functions for schedule calculations
 */

import type { RoutineSchedulerPort, RoutineSchedulerStatePort } from "../ports";
import type { TimeBlock, DaySchedule } from "../schema";

/**
 * Create a routine scheduler adapter for time grid operations
 */
export function createRoutineSchedulerAdapter(): RoutineSchedulerPort {
  return {
    generateTimeSlots(
      start: string,
      end: string,
      granularity: "15min" | "30min" | "1hr",
    ): string[] {
      const slots: string[] = [];
      const slotMinutes =
        granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      let current = this.parseTime(start);
      const endMin = this.parseTime(end);

      while (current <= endMin) {
        const hours = Math.floor(current / 60);
        const mins = current % 60;
        slots.push(
          `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`,
        );
        current += slotMinutes;
      }
      return slots;
    },

    parseTime(time: string): number {
      const parts = time.split(":").map(Number);
      const hours = parts[0] ?? 0;
      const minutes = parts[1] ?? 0;
      return hours * 60 + minutes;
    },

    getBlockTop(
      startTime: string,
      dayStart: string,
      granularity: "15min" | "30min" | "1hr",
    ): number {
      const diff = this.parseTime(startTime) - this.parseTime(dayStart);
      const slotMinutes =
        granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      return Math.max(0, Math.round(diff / slotMinutes));
    },

    getBlockHeight(
      startTime: string,
      endTime: string,
      granularity: "15min" | "30min" | "1hr",
    ): number {
      const duration = this.parseTime(endTime) - this.parseTime(startTime);
      const slotMinutes =
        granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      return Math.max(1, Math.round(duration / slotMinutes));
    },

    getSlotHeight(granularity: "15min" | "30min" | "1hr"): number {
      return granularity === "15min" ? 24 : granularity === "30min" ? 36 : 48;
    },

    formatDate(date: string, format: "full" | "short"): string {
      const d = new Date(date);
      if (format === "full") {
        return d.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      return d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      });
    },

    getTodayString(): string {
      return new Date().toISOString().split("T")[0]!;
    },
  };
}

/**
 * Create a routine scheduler state adapter for state management
 */
export function createRoutineSchedulerStateAdapter(): RoutineSchedulerStatePort {
  return {
    mergeEdits(
      days: DaySchedule[],
      edits: Record<string, Partial<TimeBlock>>,
    ): DaySchedule[] {
      return days.map((day) => ({
        ...day,
        blocks: day.blocks.map((block) => {
          const edit = edits[block.id];
          return edit ? { ...block, ...edit } : block;
        }),
      }));
    },

    filterByCategories(
      days: DaySchedule[],
      categories: string[] | null | undefined,
    ): DaySchedule[] {
      if (!categories || categories.length === 0) return days;
      return days.map((day) => ({
        ...day,
        blocks: day.blocks.filter((b) =>
          categories.includes(b.category as string),
        ),
      }));
    },

    toggleBlockCompletion(
      edits: Record<string, Partial<TimeBlock>>,
      blockId: string,
      currentCompleted: boolean,
    ): Record<string, Partial<TimeBlock>> {
      return {
        ...edits,
        [blockId]: { completed: !currentCompleted },
      };
    },

    navigateDate(
      currentDate: string,
      direction: -1 | 1,
      view: "day" | "week",
    ): string {
      const date = new Date(currentDate);
      date.setDate(
        date.getDate() + (view === "week" ? 7 * direction : direction),
      );
      return date.toISOString().split("T")[0]!;
    },

    getVisibleDays(
      days: DaySchedule[],
      selectedDate: string,
      view: "day" | "week",
    ): DaySchedule[] {
      if (view === "day") {
        return days.filter((d) => d.date === selectedDate);
      }
      const selected = new Date(selectedDate);
      const weekStart = new Date(selected);
      weekStart.setDate(selected.getDate() - selected.getDay());

      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateStr = date.toISOString().split("T")[0]!;
        const existingDay = days.find((d) => d.date === dateStr);
        return existingDay ?? { date: dateStr, blocks: [] };
      });
    },
  };
}

// Singleton instances for convenience
let schedulerAdapterInstance: RoutineSchedulerPort | null = null;
let stateAdapterInstance: RoutineSchedulerStatePort | null = null;

export function getRoutineSchedulerAdapter(): RoutineSchedulerPort {
  if (!schedulerAdapterInstance) {
    schedulerAdapterInstance = createRoutineSchedulerAdapter();
  }
  return schedulerAdapterInstance;
}

export function getRoutineSchedulerStateAdapter(): RoutineSchedulerStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createRoutineSchedulerStateAdapter();
  }
  return stateAdapterInstance;
}
