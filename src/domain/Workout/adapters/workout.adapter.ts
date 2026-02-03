/**
 * Workout Adapter - Implementation of WorkoutPort
 * Pure functions for workout operations
 */

import type { WorkoutPort, WorkoutStatePort } from "../ports";
import type { ExerciseItem, WorkoutSet } from "../types";
import { v4 as uuidv4 } from "uuid";

/**
 * Generate series from sets/reps if not already present
 */
function ensureSeriesGenerated(exercise: ExerciseItem): ExerciseItem {
  if (exercise.series?.length) return exercise;
  if (typeof exercise.sets === "number" && exercise.sets > 0) {
    const generatedSeries: WorkoutSet[] = Array.from(
      { length: exercise.sets },
      (_, i) => ({
        id: `gen-${exercise.id}-${i}`,
        setNumber: i + 1,
        reps: exercise.reps ?? null,
        weight: exercise.weight ?? null,
        rpe: exercise.rpe ?? null,
        completed: false,
        type: "normal" as const,
      }),
    );
    return { ...exercise, series: generatedSeries };
  }
  return exercise;
}

/**
 * Recursively ensure all exercises have series generated from sets/reps
 */
export function ensureSeriesGeneratedDeep(items: ExerciseItem[]): ExerciseItem[] {
  return items.map((item) => {
    const withSeries = ensureSeriesGenerated(item);
    if (withSeries.items && withSeries.items.length > 0) {
      return {
        ...withSeries,
        items: ensureSeriesGeneratedDeep(withSeries.items),
      };
    }
    return withSeries;
  });
}

/**
 * Create a workout adapter with exercise operations
 */
export function createWorkoutAdapter(): WorkoutPort {
  return {
    findExerciseById(
      items: ExerciseItem[],
      id: string,
    ): ExerciseItem | undefined {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.items) {
          const found = this.findExerciseById(item.items, id);
          if (found) return found;
        }
      }
      return undefined;
    },

    mergeEdits(
      items: ExerciseItem[],
      edits: Record<string, ExerciseItem>,
    ): ExerciseItem[] {
      return items.map((item) => {
        const edit = edits[item.id];
        const base = edit ? { ...item, ...edit } : item;
        // Ensure series is generated for exercises without explicit series
        const withSeries = ensureSeriesGenerated(base);
        if (withSeries.items) {
          return {
            ...withSeries,
            items: this.mergeEdits(withSeries.items, edits),
          };
        }
        return withSeries;
      });
    },

    createNewSet(currentSeries: WorkoutSet[]): WorkoutSet {
      const lastSet = currentSeries[currentSeries.length - 1];
      return {
        id: uuidv4(),
        setNumber: currentSeries.length + 1,
        weight: lastSet?.weight ?? null,
        reps: lastSet?.reps ?? null,
        rpe: null,
        completed: false,
        type: "normal",
      };
    },

    removeSetAndRenumber(series: WorkoutSet[], seriesId: string): WorkoutSet[] {
      return series
        .filter((s) => s.id !== seriesId)
        .map((s, idx) => ({ ...s, setNumber: idx + 1 }));
    },
  };
}

/**
 * Create a workout state adapter for state management
 */
export function createWorkoutStateAdapter(): WorkoutStatePort {
  return {
    updateExerciseField(
      edits: Record<string, ExerciseItem>,
      exercise: ExerciseItem,
      field: keyof ExerciseItem,
      value: unknown,
    ): Record<string, ExerciseItem> {
      return {
        ...edits,
        [exercise.id]: { ...exercise, [field]: value },
      };
    },

    updateSetField(
      edits: Record<string, ExerciseItem>,
      exercise: ExerciseItem,
      seriesId: string,
      field: keyof WorkoutSet,
      value: unknown,
    ): Record<string, ExerciseItem> {
      const nextSeries = (exercise.series || []).map((s) =>
        s.id === seriesId ? { ...s, [field]: value } : s,
      );
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: nextSeries },
      };
    },

    addSetToExercise(
      edits: Record<string, ExerciseItem>,
      exercise: ExerciseItem,
      newSet: WorkoutSet,
    ): Record<string, ExerciseItem> {
      const currentSeries = exercise.series || [];
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: [...currentSeries, newSet] },
      };
    },

    removeSetFromExercise(
      edits: Record<string, ExerciseItem>,
      exercise: ExerciseItem,
      updatedSeries: WorkoutSet[],
    ): Record<string, ExerciseItem> {
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: updatedSeries },
      };
    },
  };
}

// Singleton instances
let workoutAdapterInstance: WorkoutPort | null = null;
let stateAdapterInstance: WorkoutStatePort | null = null;

export function getWorkoutAdapter(): WorkoutPort {
  if (!workoutAdapterInstance) {
    workoutAdapterInstance = createWorkoutAdapter();
  }
  return workoutAdapterInstance;
}

export function getWorkoutStateAdapter(): WorkoutStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createWorkoutStateAdapter();
  }
  return stateAdapterInstance;
}
