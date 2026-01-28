/**
 * RoutineScheduler Port - Interface for time grid operations
 * Defines the contract for schedule calculations and state management
 */

import type { TimeBlock, DaySchedule } from "../schema";

/**
 * Time grid operations port
 */
export interface RoutineSchedulerPort {
  /**
   * Generate time slots for the grid
   */
  generateTimeSlots(
    start: string,
    end: string,
    granularity: "15min" | "30min" | "1hr",
  ): string[];

  /**
   * Parse time string to minutes
   */
  parseTime(time: string): number;

  /**
   * Get block top position in grid
   */
  getBlockTop(
    startTime: string,
    dayStart: string,
    granularity: "15min" | "30min" | "1hr",
  ): number;

  /**
   * Get block height in grid slots
   */
  getBlockHeight(
    startTime: string,
    endTime: string,
    granularity: "15min" | "30min" | "1hr",
  ): number;

  /**
   * Get slot height in pixels based on granularity
   */
  getSlotHeight(granularity: "15min" | "30min" | "1hr"): number;

  /**
   * Format date for display
   */
  formatDate(date: string, format: "full" | "short"): string;

  /**
   * Get today's date string in YYYY-MM-DD format
   */
  getTodayString(): string;
}

/**
 * Schedule state management port
 */
export interface RoutineSchedulerStatePort {
  /**
   * Merge local edits with day schedules
   */
  mergeEdits(
    days: DaySchedule[],
    edits: Record<string, Partial<TimeBlock>>,
  ): DaySchedule[];

  /**
   * Filter days by categories
   */
  filterByCategories(
    days: DaySchedule[],
    categories: string[] | null | undefined,
  ): DaySchedule[];

  /**
   * Toggle block completion
   */
  toggleBlockCompletion(
    edits: Record<string, Partial<TimeBlock>>,
    blockId: string,
    currentCompleted: boolean,
  ): Record<string, Partial<TimeBlock>>;

  /**
   * Navigate date by direction
   */
  navigateDate(
    currentDate: string,
    direction: -1 | 1,
    view: "day" | "week",
  ): string;

  /**
   * Get visible days for current view
   */
  getVisibleDays(
    days: DaySchedule[],
    selectedDate: string,
    view: "day" | "week",
  ): DaySchedule[];
}
