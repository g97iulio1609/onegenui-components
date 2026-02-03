/**
 * useWorkoutLogic - Custom hook for workout state management
 * 
 * Uses useElementState for centralized state management.
 * All state modifications are automatically synced to:
 * 1. Zustand store (immediate)
 * 2. UI tree (debounced)
 * 3. Supabase via chat persistence (automatic)
 */

import { useState, useMemo, useCallback, useEffect } from "react";
import { useElementState } from "@onegenui/react";
import type { WorkoutPort, WorkoutStatePort } from "../ports";
import type { ExerciseItem, WorkoutSet } from "../types";

export interface UseWorkoutLogicOptions {
  initialItems: ExerciseItem[];
  lock?: boolean | null;
  elementKey: string;
}

/** State stored in Zustand via useElementState */
interface WorkoutElementState extends Record<string, unknown> {
  items: ExerciseItem[];
  isLocked: boolean;
}

export interface UseWorkoutLogicReturn {
  // State
  displayItems: ExerciseItem[];
  expandedIds: Set<string>;
  isLocked: boolean;

  // Actions
  toggleExpand: (id: string) => void;
  toggleLock: () => void;
  updateExercise: (
    id: string,
    field: keyof ExerciseItem,
    value: unknown,
  ) => void;
  updateSeries: (
    exerciseId: string,
    seriesId: string,
    field: keyof WorkoutSet,
    value: unknown,
  ) => void;
  addSet: (exerciseId: string) => void;
  removeSet: (exerciseId: string, seriesId: string) => void;
}

export function useWorkoutLogic(
  workoutAdapter: WorkoutPort,
  stateAdapter: WorkoutStatePort,
  options: UseWorkoutLogicOptions,
): UseWorkoutLogicReturn {
  const { initialItems, lock: initialLock = false, elementKey } = options;

  // Centralized state via Zustand - synced to tree and Supabase
  const [state, updateState] = useElementState<WorkoutElementState>(
    elementKey,
    {
      items: initialItems,
      isLocked: !!initialLock,
    },
  );

  // Local UI state (not synced - just for expand/collapse)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Auto-expand first exercise on mount
  useEffect(() => {
    if (initialItems.length > 0 && initialItems[0]?.id) {
      setExpandedIds(new Set([initialItems[0].id]));
    }
  }, [initialItems]);

  // displayItems comes from centralized state
  const displayItems = state.items;
  const isLocked = state.isLocked;

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleLock = useCallback(() => {
    updateState({ isLocked: !isLocked });
  }, [isLocked, updateState]);

  const updateExercise = useCallback(
    (id: string, field: keyof ExerciseItem, value: unknown) => {
      if (isLocked) return;

      const exercise = workoutAdapter.findExerciseById(displayItems, id);
      if (!exercise) return;
      
      // Create updated items using adapter
      const edits = stateAdapter.updateExerciseField({}, exercise, field, value);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState],
  );

  const updateSeries = useCallback(
    (
      exerciseId: string,
      seriesId: string,
      field: keyof WorkoutSet,
      value: unknown,
    ) => {
      if (isLocked) return;

      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      
      // Create updated items using adapter
      const edits = stateAdapter.updateSetField({}, exercise, seriesId, field, value);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState],
  );

  const addSet = useCallback(
    (exerciseId: string) => {
      if (isLocked) return;

      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      
      const newSet = workoutAdapter.createNewSet(exercise.series || []);
      const edits = stateAdapter.addSetToExercise({}, exercise, newSet);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState],
  );

  const removeSet = useCallback(
    (exerciseId: string, seriesId: string) => {
      if (isLocked) return;

      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      
      const updatedSeries = workoutAdapter.removeSetAndRenumber(
        exercise.series || [],
        seriesId,
      );
      const edits = stateAdapter.removeSetFromExercise({}, exercise, updatedSeries);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState],
  );

  return {
    displayItems,
    expandedIds,
    isLocked,
    toggleExpand,
    toggleLock,
    updateExercise,
    updateSeries,
    addSet,
    removeSet,
  };
}
