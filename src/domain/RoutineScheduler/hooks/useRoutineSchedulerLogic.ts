/**
 * useRoutineSchedulerLogic - Custom hook for routine scheduler state management
 * Separates business logic from presentation
 */

import { useMemo, useCallback } from "react";
import { useElementState } from "@onegenui/react";
import type { RoutineSchedulerPort, RoutineSchedulerStatePort } from "../ports";
import type { TimeBlock, DaySchedule } from "../schema";

interface RoutineSchedulerState extends Record<string, unknown> {
  localEdits: Record<string, Partial<TimeBlock>>;
  currentView: "day" | "week";
  selectedDate: string;
}

export interface UseRoutineSchedulerLogicOptions {
  initialDate?: string;
  initialView?: "day" | "week";
  initialDays?: DaySchedule[];
  timeRange?: { start: string; end: string };
  granularity?: "15min" | "30min" | "1hr";
  showCategories?: string[];
  lock?: boolean;
}

export interface UseRoutineSchedulerLogicReturn {
  // State
  currentView: "day" | "week";
  selectedDate: string;
  visibleDays: DaySchedule[];
  timeSlots: string[];

  // Derived
  slotHeight: number;
  dayStart: string;
  dayEnd: string;
  todayStr: string;

  // Actions
  setCurrentView: (view: "day" | "week") => void;
  setSelectedDate: (date: string) => void;
  navigateDate: (direction: -1 | 1) => void;
  goToToday: () => void;
  handleToggleBlock: (blockId: string) => void;

  // For auto-save
  displayDays: DaySchedule[];
}

export function useRoutineSchedulerLogic(
  elementKey: string,
  adapter: RoutineSchedulerPort,
  stateAdapter: RoutineSchedulerStatePort,
  options: UseRoutineSchedulerLogicOptions,
): UseRoutineSchedulerLogicReturn {
  const {
    initialDate,
    initialView = "day",
    initialDays = [],
    timeRange,
    granularity = "30min",
    showCategories,
    lock = false,
  } = options;

  // AI-synced state via Zustand
  const [state, updateState] = useElementState<RoutineSchedulerState>(
    elementKey,
    {
      localEdits: {},
      currentView: initialView,
      selectedDate: initialDate ?? adapter.getTodayString(),
    },
  );

  const { localEdits, currentView, selectedDate } = state;

  // Time range
  const dayStart = timeRange?.start || "06:00";
  const dayEnd = timeRange?.end || "22:00";

  // Derived: today string
  const todayStr = adapter.getTodayString();

  // Derived: slot height
  const slotHeight = adapter.getSlotHeight(granularity);

  // Derived: time slots
  const timeSlots = useMemo(
    () => adapter.generateTimeSlots(dayStart, dayEnd, granularity),
    [adapter, dayStart, dayEnd, granularity],
  );

  // Derived: merge edits with days
  const displayDays = useMemo(
    () => stateAdapter.mergeEdits(initialDays, localEdits),
    [stateAdapter, initialDays, localEdits],
  );

  // Derived: filter by categories
  const filteredDays = useMemo(
    () => stateAdapter.filterByCategories(displayDays, showCategories),
    [stateAdapter, displayDays, showCategories],
  );

  // Derived: visible days for current view
  const visibleDays = useMemo(
    () => stateAdapter.getVisibleDays(filteredDays, selectedDate, currentView),
    [stateAdapter, filteredDays, selectedDate, currentView],
  );

  // Actions
  const setCurrentView = useCallback(
    (view: "day" | "week") => {
      updateState({ currentView: view });
    },
    [updateState],
  );

  const setSelectedDate = useCallback(
    (date: string) => {
      updateState({ selectedDate: date });
    },
    [updateState],
  );

  const navigateDate = useCallback(
    (direction: -1 | 1) => {
      const newDate = stateAdapter.navigateDate(
        selectedDate,
        direction,
        currentView,
      );
      updateState({ selectedDate: newDate });
    },
    [stateAdapter, currentView, selectedDate, updateState],
  );

  const goToToday = useCallback(() => {
    updateState({ selectedDate: adapter.getTodayString() });
  }, [adapter, updateState]);

  const handleToggleBlock = useCallback(
    (blockId: string) => {
      if (lock) return;

      const allBlocks = displayDays.flatMap((d) => d.blocks);
      const block = allBlocks.find((b) => b.id === blockId);
      if (!block) return;

      const newEdits = stateAdapter.toggleBlockCompletion(
        localEdits,
        blockId,
        block.completed ?? false,
      );
      updateState({ localEdits: newEdits });
    },
    [lock, displayDays, stateAdapter, localEdits, updateState],
  );

  return {
    // State
    currentView,
    selectedDate,
    visibleDays,
    timeSlots,

    // Derived
    slotHeight,
    dayStart,
    dayEnd,
    todayStr,

    // Actions
    setCurrentView,
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleBlock,

    // For auto-save
    displayDays,
  };
}
