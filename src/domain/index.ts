/**
 * domain components
 */
export {
  Workout,
  WorkoutPropsSchema,
  WorkoutDefinition,
  type WorkoutProps,
} from "./Workout";

export {
  Nutrition,
  NutritionPropsSchema,
  NutritionDefinition,
  type NutritionProps,
} from "./Nutrition";

export {
  Flight,
  FlightPropsSchema,
  FlightDefinition,
  type FlightProps,
} from "./Flight";

export {
  Hotel,
  HotelPropsSchema,
  HotelDefinition,
  type HotelProps,
} from "./Hotel";

export { Trip, TripPropsSchema, TripDefinition, type TripProps } from "./Trip";

export {
  BookingForms,
  BookingFormsPropsSchema,
  BookingFormsDefinition,
  type BookingFormsProps,
} from "./BookingForms";

export {
  Kanban,
  KanbanPropsSchema,
  KanbanDefinition,
  type KanbanProps,
} from "./Kanban";

export {
  TodoList,
  TodoListPropsSchema,
  TodoListDefinition,
  type TodoListProps,
} from "./TodoList";

export {
  RoutineScheduler,
  RoutineSchedulerPropsSchema,
  RoutineSchedulerDefinition,
  timeBlockSchema,
  dayScheduleSchema,
  type RoutineSchedulerProps,
  type TimeBlock,
  type DaySchedule,
} from "./RoutineScheduler";

export {
  SupplementTracker,
  SupplementTrackerPropsSchema,
  SupplementTrackerDefinition,
  supplementItemSchema,
  scheduledDoseSchema,
  dailySupplementScheduleSchema,
  type SupplementTrackerProps,
  type SupplementItem,
  type ScheduledDose,
  type DailySupplementSchedule,
} from "./SupplementTracker";

export {
  Calendar,
  CalendarPropsSchema,
  CalendarDefinition,
  calendarEventSchema,
  type CalendarProps,
  type CalendarEvent,
} from "./Calendar";

export {
  Diary,
  DiaryPropsSchema,
  DiaryDefinition,
  diaryEntrySchema,
  type DiaryProps,
  type DiaryEntry,
} from "./Diary";

export {
  ResearchReport,
  type ResearchReportProps,
  type Source,
  type ReportSection,
} from "./research";

export {
  DocumentIndex,
  DocumentIndexPropsSchema,
  DocumentIndexDefinition,
  DocumentIndexNodeSchema,
  type DocumentIndexProps,
  type DocumentIndexNode,
} from "./DocumentIndex";

export {
  SourceCitation,
  SourceCitationPropsSchema,
  SourceCitationDefinition,
  CitationSchema,
  type SourceCitationProps,
  type Citation,
} from "./SourceCitation";

// Vectorless Components
export {
  TreeSearchVisualizer,
  type TreeSearchVisualizerProps,
} from "./TreeSearchVisualizer";

export {
  PreferencePanel,
  type PreferencePanelProps,
  type DomainTemplateInfo,
} from "./PreferencePanel";

export {
  MultiDocumentExplorer,
  type MultiDocumentExplorerProps,
  type DocumentResult,
  type CrossDocRelation,
} from "./MultiDocumentExplorer";
