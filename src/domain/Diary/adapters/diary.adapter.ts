/**
 * Diary Adapter - Implementation of DiaryPort
 * Pure functions for diary operations
 */

import type { DiaryPort, DiaryStatePort } from "../ports";
import type { DiaryEntry } from "../schema";

/**
 * Create a diary adapter with date operations
 */
export function createDiaryAdapter(): DiaryPort {
  return {
    getTodayString(): string {
      return new Date().toISOString().split("T")[0]!;
    },

    parseDate(dateStr: string): Date {
      return new Date(dateStr);
    },

    navigateDate(current: string, direction: -1 | 1): string {
      const date = new Date(current);
      date.setDate(date.getDate() + direction);
      return date.toISOString().split("T")[0]!;
    },

    sortEntriesByDate(entries: DiaryEntry[]): DiaryEntry[] {
      return [...entries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    },

    findEntryByDate(
      entries: DiaryEntry[],
      date: string,
    ): DiaryEntry | undefined {
      return entries.find((e) => e.date === date);
    },

    formatDisplayDate(dateStr: string): string {
      const date = new Date(dateStr);
      return date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  };
}

/**
 * Create a diary state adapter for state management
 */
export function createDiaryStateAdapter(): DiaryStatePort {
  return {
    mergeEdits(
      entries: DiaryEntry[],
      edits: Record<string, Partial<DiaryEntry>>,
    ): DiaryEntry[] {
      return entries.map((entry) => {
        const edit = edits[entry.id];
        return edit ? { ...entry, ...edit } : entry;
      });
    },

    toggleGoal(
      edits: Record<string, Partial<DiaryEntry>>,
      entry: DiaryEntry,
      goalId: string,
    ): Record<string, Partial<DiaryEntry>> {
      if (!entry.goals) return edits;

      const updatedGoals = entry.goals.map((g) =>
        g.id === goalId ? { ...g, completed: !g.completed } : g,
      );

      return {
        ...edits,
        [entry.id]: { goals: updatedGoals },
      };
    },
  };
}

// Singleton instances for convenience
let diaryAdapterInstance: DiaryPort | null = null;
let stateAdapterInstance: DiaryStatePort | null = null;

export function getDiaryAdapter(): DiaryPort {
  if (!diaryAdapterInstance) {
    diaryAdapterInstance = createDiaryAdapter();
  }
  return diaryAdapterInstance;
}

export function getDiaryStateAdapter(): DiaryStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createDiaryStateAdapter();
  }
  return stateAdapterInstance;
}
