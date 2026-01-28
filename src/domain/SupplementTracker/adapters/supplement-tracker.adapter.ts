/**
 * SupplementTracker Adapter - Implementation of SupplementTrackerPort
 * Pure functions for supplement tracking operations
 */

import type { SupplementTrackerPort, SupplementStatePort } from "../ports";
import type { SupplementItem, ScheduledDose } from "../schema";

/**
 * Create a supplement tracker adapter with tracking operations
 */
export function createSupplementTrackerAdapter(): SupplementTrackerPort {
  return {
    getTodayDate(): string {
      return new Date().toISOString().split("T")[0]!;
    },

    formatDisplayDate(dateStr: string): string {
      return new Date(dateStr).toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    },

    groupByTiming(
      supplements: SupplementItem[],
      doses: ScheduledDose[],
    ): Map<string, { supplement: SupplementItem; dose?: ScheduledDose }[]> {
      const groups = new Map<
        string,
        { supplement: SupplementItem; dose?: ScheduledDose }[]
      >();

      for (const supp of supplements) {
        const timing = supp.timing || "morning";
        if (!groups.has(timing)) groups.set(timing, []);
        const dose = doses.find((d) => d.supplementId === supp.id);
        groups.get(timing)!.push({ supplement: supp, dose });
      }

      return groups;
    },

    calculateStats(supplements: SupplementItem[], doses: ScheduledDose[]) {
      const total = supplements.length;
      const taken = doses.filter((d) => d.taken).length;
      const skipped = doses.filter((d) => d.skipped).length;
      return { total, taken, skipped, remaining: total - taken - skipped };
    },
  };
}

/**
 * Create a supplement state adapter for state management
 */
export function createSupplementStateAdapter(): SupplementStatePort {
  return {
    mergeEdits(
      doses: ScheduledDose[],
      edits: Record<string, Partial<ScheduledDose>>,
    ): ScheduledDose[] {
      return doses.map((dose) => {
        const edit = edits[dose.id];
        return edit ? { ...dose, ...edit } : dose;
      });
    },

    toggleDose(
      edits: Record<string, Partial<ScheduledDose>>,
      doseId: string,
      currentTaken: boolean,
    ): Record<string, Partial<ScheduledDose>> {
      return {
        ...edits,
        [doseId]: {
          taken: !currentTaken,
          takenAt: !currentTaken ? new Date().toISOString() : null,
          skipped: false,
        },
      };
    },

    skipDose(
      edits: Record<string, Partial<ScheduledDose>>,
      doseId: string,
    ): Record<string, Partial<ScheduledDose>> {
      return {
        ...edits,
        [doseId]: { skipped: true, taken: false },
      };
    },
  };
}

// Singleton instances for convenience
let trackerAdapterInstance: SupplementTrackerPort | null = null;
let stateAdapterInstance: SupplementStatePort | null = null;

export function getSupplementTrackerAdapter(): SupplementTrackerPort {
  if (!trackerAdapterInstance) {
    trackerAdapterInstance = createSupplementTrackerAdapter();
  }
  return trackerAdapterInstance;
}

export function getSupplementStateAdapter(): SupplementStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createSupplementStateAdapter();
  }
  return stateAdapterInstance;
}
