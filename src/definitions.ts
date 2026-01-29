/**
 * Component Definitions Export
 *
 * This file exports ONLY the component definitions (Zod schemas + metadata)
 * WITHOUT the React components. This enables importing definitions in
 * server-side code or build tools without React bundling issues.
 */

// Primitives Definitions (from @onegenui/ui/definitions - server-safe)
export {
  // Layout
  CardDefinition,
  GridDefinition,
  StackDefinition,
  DividerDefinition,

  // Typography
  HeadingDefinition,
  TextDefinition,
  CodeBlockDefinition,
  DocumentDefinition,

  // Status
  BadgeDefinition,
  AlertDefinition,
  EmptyDefinition,
  BrowserActionDefinition,

  // Forms
  ButtonDefinition,
  TextFieldDefinition,
  SelectDefinition,
  DatePickerDefinition,

  // Data Display
  MetricDefinition,
  TableDefinition,
  ListDefinition,
  TimelineDefinition,
  SearchResultsDefinition,
  DriveFileDefinition,
  DriveFileListDefinition,
  WeatherDefinition,

  // Media
  AudioDefinition,
  VideoDefinition,
  ImageDefinition,
  GalleryDefinition,
} from "@onegenui/ui/definitions";

// Communication (Local in components)
export { MessageDefinition } from "./communication/Message/schema";
export { EmailDefinition } from "./communication/Email/schema";

// Domain (Local in components)
export { CalendarAgendaDefinition } from "./domain/CalendarAgenda/schema";
export { WorkoutDefinition } from "./domain/Workout/schema";
export { NutritionDefinition } from "./domain/Nutrition/schema";
export { FlightDefinition } from "./domain/Flight/schema";
export { HotelDefinition } from "./domain/Hotel/schema";
export { TripDefinition } from "./domain/Trip/schema";
export { BookingFormsDefinition } from "./domain/BookingForms/schema";
export { KanbanDefinition } from "./domain/Kanban/schema";
export { TodoListDefinition } from "./domain/TodoList/schema";
export { RoutineSchedulerDefinition } from "./domain/RoutineScheduler/schema";
export { SupplementTrackerDefinition } from "./domain/SupplementTracker/schema";
export { CalendarDefinition } from "./domain/Calendar/schema";
export { DiaryDefinition } from "./domain/Diary/schema";
export { DocumentIndexDefinition } from "./domain/DocumentIndex/schema";
export { SourceCitationDefinition } from "./domain/SourceCitation/schema";

// Visualization (formerly @onegenui/viz)
export { ChartDefinition } from "./visualization/charts/Chart/schema";
export { StockChartDefinition } from "./visualization/charts/StockChart/schema";
export { GraphDefinition } from "./visualization/graphs/Graph/schema";
export { MindMapDefinition } from "./visualization/graphs/MindMap/schema";
export { GanttDefinition } from "./visualization/graphs/Gantt/schema";

// Shared Schemas
export { exerciseSchema } from "./utils/shared-schemas";
