/**
 * Workout Port - Interface for workout operations
 * Defines the contract for exercise and set management
 */

import type { ExerciseItem, WorkoutSet } from "../types";

/**
 * Workout operations port
 */
export interface WorkoutPort {
  /**
   * Find an exercise item by ID in a nested structure
   */
  findExerciseById(items: ExerciseItem[], id: string): ExerciseItem | undefined;

  /**
   * Merge local edits with base items recursively
   */
  mergeEdits(
    items: ExerciseItem[],
    edits: Record<string, ExerciseItem>,
  ): ExerciseItem[];

  /**
   * Create a new workout set based on the last set in the series
   */
  createNewSet(currentSeries: WorkoutSet[]): WorkoutSet;

  /**
   * Remove a set and renumber remaining sets
   */
  removeSetAndRenumber(series: WorkoutSet[], seriesId: string): WorkoutSet[];
}

/**
 * Workout state management port
 */
export interface WorkoutStatePort {
  /**
   * Update a field on an exercise
   */
  updateExerciseField(
    edits: Record<string, ExerciseItem>,
    exercise: ExerciseItem,
    field: keyof ExerciseItem,
    value: unknown,
  ): Record<string, ExerciseItem>;

  /**
   * Update a field on a specific set within an exercise
   */
  updateSetField(
    edits: Record<string, ExerciseItem>,
    exercise: ExerciseItem,
    seriesId: string,
    field: keyof WorkoutSet,
    value: unknown,
  ): Record<string, ExerciseItem>;

  /**
   * Add a new set to an exercise
   */
  addSetToExercise(
    edits: Record<string, ExerciseItem>,
    exercise: ExerciseItem,
    newSet: WorkoutSet,
  ): Record<string, ExerciseItem>;

  /**
   * Remove a set from an exercise
   */
  removeSetFromExercise(
    edits: Record<string, ExerciseItem>,
    exercise: ExerciseItem,
    updatedSeries: WorkoutSet[],
  ): Record<string, ExerciseItem>;
}
