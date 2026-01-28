/**
 * SupplementTracker Port - Interface for supplement tracking operations
 * Defines the contract for supplement scheduling and tracking
 */

import type { SupplementItem, ScheduledDose } from "../schema";

/**
 * Supplement operations port
 */
export interface SupplementTrackerPort {
  /**
   * Get the current date in YYYY-MM-DD format
   */
  getTodayDate(): string;

  /**
   * Format date for display
   */
  formatDisplayDate(dateStr: string): string;

  /**
   * Group supplements by timing
   */
  groupByTiming(
    supplements: SupplementItem[],
    doses: ScheduledDose[],
  ): Map<string, { supplement: SupplementItem; dose?: ScheduledDose }[]>;

  /**
   * Calculate statistics from supplements and doses
   */
  calculateStats(
    supplements: SupplementItem[],
    doses: ScheduledDose[],
  ): SupplementStats;
}

/**
 * Supplement state management port
 */
export interface SupplementStatePort {
  /**
   * Merge local edits with base doses
   */
  mergeEdits(
    doses: ScheduledDose[],
    edits: Record<string, Partial<ScheduledDose>>,
  ): ScheduledDose[];

  /**
   * Toggle dose taken status
   */
  toggleDose(
    edits: Record<string, Partial<ScheduledDose>>,
    doseId: string,
    currentTaken: boolean,
  ): Record<string, Partial<ScheduledDose>>;

  /**
   * Skip a dose
   */
  skipDose(
    edits: Record<string, Partial<ScheduledDose>>,
    doseId: string,
  ): Record<string, Partial<ScheduledDose>>;
}

/**
 * Statistics for supplement tracking
 */
export interface SupplementStats {
  total: number;
  taken: number;
  skipped: number;
  remaining: number;
}
