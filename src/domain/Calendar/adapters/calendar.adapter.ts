/**
 * Calendar Adapter - Implementation of CalendarPort
 * Pure functions for calendar calculations
 */

import type { CalendarPort, CalendarStatePort } from "../ports";
import type { CalendarEvent } from "../schema";

/**
 * Create a calendar adapter with date operations
 */
export function createCalendarAdapter(): CalendarPort {
  return {
    getDaysInMonth(year: number, month: number): Date[] {
      const days: Date[] = [];
      const date = new Date(year, month, 1);
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },

    getCalendarDays(
      year: number,
      month: number,
      firstDayOfWeek: number,
    ): (Date | null)[] {
      const days = this.getDaysInMonth(year, month);
      const firstDate = days[0];
      if (!firstDate) return [];

      const firstDay = firstDate.getDay();
      const leadingDays = (firstDay - firstDayOfWeek + 7) % 7;

      const calendar: (Date | null)[] = [];
      for (let i = 0; i < leadingDays; i++) {
        calendar.push(null);
      }
      calendar.push(...days);

      while (calendar.length % 7 !== 0) {
        calendar.push(null);
      }

      return calendar;
    },

    isSameDay(d1: Date, d2: Date): boolean {
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      );
    },

    formatTime(isoString: string): string {
      const date = new Date(isoString);
      return date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    groupEventsByDate(events: CalendarEvent[]): Map<string, CalendarEvent[]> {
      const map = new Map<string, CalendarEvent[]>();
      for (const event of events) {
        const dateKey = event.start.split("T")[0]!;
        if (!map.has(dateKey)) map.set(dateKey, []);
        map.get(dateKey)!.push(event);
      }
      return map;
    },

    toDateString(date: Date): string {
      return date.toISOString().split("T")[0]!;
    },
  };
}

/**
 * Create a calendar state adapter for state management
 */
export function createCalendarStateAdapter(): CalendarStatePort {
  return {
    navigateMonth(current: Date, direction: -1 | 1): Date {
      const next = new Date(current);
      next.setMonth(next.getMonth() + direction);
      return next;
    },

    mergeEdits(
      events: CalendarEvent[],
      edits: Record<string, Partial<CalendarEvent>>,
    ): CalendarEvent[] {
      return events.map((event) => {
        const edit = edits[event.id];
        return edit ? { ...event, ...edit } : event;
      });
    },

    toggleEventCompletion(
      edits: Record<string, Partial<CalendarEvent>>,
      eventId: string,
      currentCompleted: boolean,
    ): Record<string, Partial<CalendarEvent>> {
      return {
        ...edits,
        [eventId]: { completed: !currentCompleted },
      };
    },
  };
}

// Singleton instances for convenience
let calendarAdapterInstance: CalendarPort | null = null;
let stateAdapterInstance: CalendarStatePort | null = null;

export function getCalendarAdapter(): CalendarPort {
  if (!calendarAdapterInstance) {
    calendarAdapterInstance = createCalendarAdapter();
  }
  return calendarAdapterInstance;
}

export function getCalendarStateAdapter(): CalendarStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createCalendarStateAdapter();
  }
  return stateAdapterInstance;
}
