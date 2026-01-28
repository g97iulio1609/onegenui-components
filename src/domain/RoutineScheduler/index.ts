export { RoutineScheduler } from "./component";
export {
  RoutineSchedulerPropsSchema,
  RoutineSchedulerDefinition,
  timeBlockSchema,
  dayScheduleSchema,
  type RoutineSchedulerProps,
  type TimeBlock,
  type DaySchedule,
} from "./schema";

// Hexagonal architecture exports
export type { RoutineSchedulerPort, RoutineSchedulerStatePort } from "./ports";
export {
  createRoutineSchedulerAdapter,
  createRoutineSchedulerStateAdapter,
  getRoutineSchedulerAdapter,
  getRoutineSchedulerStateAdapter,
} from "./adapters";
export {
  useRoutineSchedulerLogic,
  type UseRoutineSchedulerLogicOptions,
  type UseRoutineSchedulerLogicReturn,
} from "./hooks";
