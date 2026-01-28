export { Calendar } from "./component";
export {
  CalendarPropsSchema,
  CalendarDefinition,
  calendarEventSchema,
  type CalendarProps,
  type CalendarEvent,
} from "./schema";

// Hexagonal architecture exports
export type { CalendarPort, CalendarStatePort } from "./ports";
export {
  createCalendarAdapter,
  createCalendarStateAdapter,
  getCalendarAdapter,
  getCalendarStateAdapter,
} from "./adapters";
export {
  useCalendarLogic,
  type UseCalendarLogicOptions,
  type UseCalendarLogicReturn,
} from "./hooks";
