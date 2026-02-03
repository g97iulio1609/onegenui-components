/**
 * useSupplementTrackerLogic - Custom hook for supplement tracker state management
 * Separates business logic from presentation
 */

import { useState, useMemo, useCallback } from "react";
import { useElementState } from "@onegenui/react";
import type {
  SupplementTrackerPort,
  SupplementStatePort,
  SupplementStats,
} from "../ports";
import type {
  SupplementItem,
  ScheduledDose,
  DailySupplementSchedule,
} from "../schema";

interface LocalEditsState extends Record<string, unknown> {
  localEdits: Record<string, Partial<ScheduledDose>>;
}

export interface UseSupplementTrackerLogicOptions {
  initialSupplements?: SupplementItem[] | null;
  initialSchedule?: DailySupplementSchedule[] | null;
  initialSelectedDate?: string | null;
  lock?: boolean | null;
}

export interface UseSupplementTrackerLogicReturn {
  // State
  selectedDate: string;
  supplements: SupplementItem[];
  displayDoses: ScheduledDose[];
  groupedByTiming: Map<
    string,
    { supplement: SupplementItem; dose?: ScheduledDose }[]
  >;
  stats: SupplementStats;

  // Derived
  formattedDate: string;

  // Actions
  handleToggle: (suppId: string, doseId?: string) => void;
  handleSkip: (suppId: string, doseId?: string) => void;
}

export function useSupplementTrackerLogic(
  elementKey: string,
  trackerAdapter: SupplementTrackerPort,
  stateAdapter: SupplementStatePort,
  options: UseSupplementTrackerLogicOptions,
): UseSupplementTrackerLogicReturn {
  const {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock: rawLock,
  } = options;

  const lock = rawLock ?? false;

  // Local edits state (syncs to AI via Zustand)
  const [editsState, setEditsState] = useElementState<LocalEditsState>(
    elementKey,
    { localEdits: {} },
  );
  const localEdits = editsState.localEdits;

  // Selected date state
  const [selectedDate] = useState<string>(
    initialSelectedDate ?? trackerAdapter.getTodayDate(),
  );

  // Memoized supplements
  const supplements = useMemo(
    () => initialSupplements || [],
    [initialSupplements],
  );

  // Memoized schedule
  const schedule = useMemo(() => initialSchedule || [], [initialSchedule]);

  // Get today's schedule
  const todaySchedule = useMemo(() => {
    return schedule.find((s) => s.date === selectedDate);
  }, [schedule, selectedDate]);

  // Merge doses with local edits
  const displayDoses = useMemo(() => {
    const doses = todaySchedule?.doses || [];
    return stateAdapter.mergeEdits(doses, localEdits);
  }, [stateAdapter, todaySchedule, localEdits]);

  // Group by timing
  const groupedByTiming = useMemo(() => {
    return trackerAdapter.groupByTiming(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);

  // Calculate stats
  const stats = useMemo(() => {
    return trackerAdapter.calculateStats(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);

  // Format date for display
  const formattedDate = useMemo(() => {
    return trackerAdapter.formatDisplayDate(selectedDate);
  }, [trackerAdapter, selectedDate]);

  // Toggle dose taken
  const handleToggle = useCallback(
    (suppId: string, doseId?: string) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      const current = displayDoses.find((d) => d.id === key);
      const isTaken = current?.taken ?? false;
      setEditsState({
        localEdits: stateAdapter.toggleDose(localEdits, key, isTaken),
      });
    },
    [lock, displayDoses, stateAdapter, localEdits, setEditsState],
  );

  // Skip dose
  const handleSkip = useCallback(
    (suppId: string, doseId?: string) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      setEditsState({
        localEdits: stateAdapter.skipDose(localEdits, key),
      });
    },
    [lock, stateAdapter, localEdits, setEditsState],
  );

  return {
    // State
    selectedDate,
    supplements,
    displayDoses,
    groupedByTiming,
    stats,

    // Derived
    formattedDate,

    // Actions
    handleToggle,
    handleSkip,
  };
}
