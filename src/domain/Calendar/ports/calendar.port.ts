/**
 * Calendar Port - Interface for calendar operations
 * Defines the contract for calendar calculations and formatting
 */

import type { CalendarEvent } from "../schema";

/**
 * Calendar operations port
 */
export interface CalendarPort {
  /**
   * Get all days in a specific month
   */
  getDaysInMonth(year: number, month: number): Date[];

  /**
   * Get calendar grid with leading/trailing nulls for proper alignment
   */
  getCalendarDays(
    year: number,
    month: number,
    firstDayOfWeek: number,
  ): (Date | null)[];

  /**
   * Check if two dates are the same day
   */
  isSameDay(d1: Date, d2: Date): boolean;

  /**
   * Format time from ISO string
   */
  formatTime(isoString: string): string;

  /**
   * Group events by date string (YYYY-MM-DD)
   */
  groupEventsByDate(events: CalendarEvent[]): Map<string, CalendarEvent[]>;

  /**
   * Get date string in YYYY-MM-DD format
   */
  toDateString(date: Date): string;
}

/**
 * Event state management port
 */
export interface CalendarStatePort {
  /**
   * Navigate to next/previous month
   */
  navigateMonth(current: Date, direction: -1 | 1): Date;

  /**
   * Merge local edits with base events
   */
  mergeEdits(
    events: CalendarEvent[],
    edits: Record<string, Partial<CalendarEvent>>,
  ): CalendarEvent[];

  /**
   * Toggle event completion
   */
  toggleEventCompletion(
    edits: Record<string, Partial<CalendarEvent>>,
    eventId: string,
    currentCompleted: boolean,
  ): Record<string, Partial<CalendarEvent>>;
}
