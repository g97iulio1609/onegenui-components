/**
 * useDiaryLogic - Custom hook for diary state management
 * Separates business logic from presentation
 */

import { useState, useMemo, useCallback } from "react";
import type { DiaryPort, DiaryStatePort } from "../ports";
import type { DiaryEntry, DiaryProps } from "../schema";

export interface UseDiaryLogicOptions {
  initialEntries?: DiaryEntry[];
  initialSelectedDate?: string | null;
  view?: DiaryProps["view"];
  lock?: boolean;
}

export interface UseDiaryLogicReturn {
  // State
  selectedDate: string;
  displayEntries: DiaryEntry[];
  selectedEntry: DiaryEntry | undefined;
  sortedEntries: DiaryEntry[];

  // Actions
  setSelectedDate: (date: string) => void;
  navigateDate: (direction: -1 | 1) => void;
  goToToday: () => void;
  handleToggleGoal: (entryId: string, goalId: string) => void;
}

export function useDiaryLogic(
  diaryAdapter: DiaryPort,
  stateAdapter: DiaryStatePort,
  options: UseDiaryLogicOptions,
): UseDiaryLogicReturn {
  const { initialEntries = [], initialSelectedDate, lock = false } = options;

  // Local edits state
  const [localEdits, setLocalEdits] = useState<
    Record<string, Partial<DiaryEntry>>
  >({});

  // Selected date state
  const [selectedDate, setSelectedDate] = useState<string>(
    initialSelectedDate ?? diaryAdapter.getTodayString(),
  );

  // Derived: merge entries with local edits
  const displayEntries = useMemo(
    () => stateAdapter.mergeEdits(initialEntries, localEdits),
    [stateAdapter, initialEntries, localEdits],
  );

  // Derived: find selected entry
  const selectedEntry = useMemo(
    () => diaryAdapter.findEntryByDate(displayEntries, selectedDate),
    [diaryAdapter, displayEntries, selectedDate],
  );

  // Derived: sorted entries for timeline view
  const sortedEntries = useMemo(
    () => diaryAdapter.sortEntriesByDate(displayEntries),
    [diaryAdapter, displayEntries],
  );

  // Actions
  const navigateDate = useCallback(
    (direction: -1 | 1) => {
      setSelectedDate((prev) => diaryAdapter.navigateDate(prev, direction));
    },
    [diaryAdapter],
  );

  const goToToday = useCallback(() => {
    setSelectedDate(diaryAdapter.getTodayString());
  }, [diaryAdapter]);

  const handleToggleGoal = useCallback(
    (entryId: string, goalId: string) => {
      if (lock) return;

      const entry = displayEntries.find((e) => e.id === entryId);
      if (!entry || !entry.goals) return;

      setLocalEdits((prev) => stateAdapter.toggleGoal(prev, entry, goalId));
    },
    [lock, displayEntries, stateAdapter],
  );

  return {
    // State
    selectedDate,
    displayEntries,
    selectedEntry,
    sortedEntries,

    // Actions
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleGoal,
  };
}
