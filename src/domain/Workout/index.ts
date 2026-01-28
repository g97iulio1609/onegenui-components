/**
 * Workout component
 */
export { Workout } from "./component";
export {
  WorkoutPropsSchema,
  WorkoutDefinition,
  type WorkoutProps,
} from "./schema";

// Hexagonal architecture exports
export type { WorkoutPort, WorkoutStatePort } from "./ports";
export {
  createWorkoutAdapter,
  createWorkoutStateAdapter,
  getWorkoutAdapter,
  getWorkoutStateAdapter,
} from "./adapters";
export {
  useWorkoutLogic,
  type UseWorkoutLogicOptions,
  type UseWorkoutLogicReturn,
} from "./hooks";
