/**
 * useWorkoutLogic - Custom hook for workout state management
 * Separates business logic from presentation
 */

import { useState, useMemo, useCallback, useEffect } from "react";
import type { WorkoutPort, WorkoutStatePort } from "../ports";
import type { ExerciseItem, WorkoutSet } from "../types";

export interface UseWorkoutLogicOptions {
  initialItems: ExerciseItem[];
  lock?: boolean | null;
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
  const { initialItems, lock: initialLock = false } = options;

  const [edits, setEdits] = useState<Record<string, ExerciseItem>>({});
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isLocked, setIsLocked] = useState(!!initialLock);

  // Auto-expand first exercise on mount
  useEffect(() => {
    if (initialItems.length > 0 && initialItems[0]?.id) {
      setExpandedIds(new Set([initialItems[0].id]));
    }
  }, [initialItems]);

  // Merge edits with base items
  const displayItems = useMemo(
    () => workoutAdapter.mergeEdits(initialItems, edits),
    [workoutAdapter, initialItems, edits],
  );

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleLock = useCallback(() => {
    setIsLocked((prev) => !prev);
  }, []);

  const updateExercise = useCallback(
    (id: string, field: keyof ExerciseItem, value: unknown) => {
      if (isLocked) return;

      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(displayItems, id);
        if (!exercise) return prev;
        return stateAdapter.updateExerciseField(prev, exercise, field, value);
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems],
  );

  const updateSeries = useCallback(
    (
      exerciseId: string,
      seriesId: string,
      field: keyof WorkoutSet,
      value: unknown,
    ) => {
      if (isLocked) return;

      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId,
        );
        if (!exercise) return prev;
        return stateAdapter.updateSetField(
          prev,
          exercise,
          seriesId,
          field,
          value,
        );
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems],
  );

  const addSet = useCallback(
    (exerciseId: string) => {
      if (isLocked) return;

      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId,
        );
        if (!exercise) return prev;
        const newSet = workoutAdapter.createNewSet(exercise.series || []);
        return stateAdapter.addSetToExercise(prev, exercise, newSet);
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems],
  );

  const removeSet = useCallback(
    (exerciseId: string, seriesId: string) => {
      if (isLocked) return;

      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId,
        );
        if (!exercise) return prev;
        const updatedSeries = workoutAdapter.removeSetAndRenumber(
          exercise.series || [],
          seriesId,
        );
        return stateAdapter.removeSetFromExercise(
          prev,
          exercise,
          updatedSeries,
        );
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems],
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
