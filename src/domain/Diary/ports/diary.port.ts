/**
 * Diary Port - Interface for diary operations
 * Defines the contract for diary calculations and state management
 */

import type { DiaryEntry } from "../schema";

/**
 * Goal within a diary entry
 */
export interface DiaryGoal {
  id: string;
  text: string;
  completed?: boolean | null;
}

/**
 * Diary operations port
 */
export interface DiaryPort {
  /**
   * Get today's date string in YYYY-MM-DD format
   */
  getTodayString(): string;

  /**
   * Convert a date string to Date object
   */
  parseDate(dateStr: string): Date;

  /**
   * Navigate to next/previous day
   */
  navigateDate(current: string, direction: -1 | 1): string;

  /**
   * Sort entries by date (newest first)
   */
  sortEntriesByDate(entries: DiaryEntry[]): DiaryEntry[];

  /**
   * Find entry by date
   */
  findEntryByDate(entries: DiaryEntry[], date: string): DiaryEntry | undefined;

  /**
   * Format date for display
   */
  formatDisplayDate(dateStr: string): string;
}

/**
 * Diary state management port
 */
export interface DiaryStatePort {
  /**
   * Merge local edits with base entries
   */
  mergeEdits(
    entries: DiaryEntry[],
    edits: Record<string, Partial<DiaryEntry>>,
  ): DiaryEntry[];

  /**
   * Toggle goal completion within an entry
   */
  toggleGoal(
    edits: Record<string, Partial<DiaryEntry>>,
    entry: DiaryEntry,
    goalId: string,
  ): Record<string, Partial<DiaryEntry>>;
}
