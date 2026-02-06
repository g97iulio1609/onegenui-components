/**
 * @onegenui/components
 *
 * Standard UI component library for json-render framework.
 * Auto-generated exports with domain organization.
 */

import type { ComponentType } from "react";

// ============================================================================
// Primitives Re-exports (from @onegenui/ui)
// ============================================================================
export * from "@onegenui/ui";

// ============================================================================
// Shared Components
// ============================================================================
export { EmptyState, LoadingIndicator } from "./utils";

// ============================================================================
// Domain Components Exports
// ============================================================================

export {
  CalendarAgenda,
  CalendarAgendaSchema,
  CalendarAgendaDefinition,
  type CalendarAgendaProps,
} from "./domain/CalendarAgenda";

export {
  Workout,
  WorkoutPropsSchema,
  WorkoutDefinition,
  type WorkoutProps,
} from "./domain/Workout";
export {
  Nutrition,
  NutritionPropsSchema,
  NutritionDefinition,
  type NutritionProps,
} from "./domain/Nutrition";
export {
  Flight,
  FlightPropsSchema,
  FlightDefinition,
  type FlightProps,
} from "./domain/Flight";
export {
  Hotel,
  HotelPropsSchema,
  HotelDefinition,
  type HotelProps,
} from "./domain/Hotel";
export {
  Trip,
  TripPropsSchema,
  TripDefinition,
  type TripProps,
} from "./domain/Trip";
export {
  BookingForms,
  BookingFormsPropsSchema,
  BookingFormsDefinition,
  type BookingFormsProps,
} from "./domain/BookingForms";
export {
  ProfileCard,
  type ProfileCardProps,
} from "./domain/social/profile-card";
export {
  ActivityFeed,
  type ActivityFeedProps,
} from "./domain/feed/activity-feed";
export { Pricing, type PricingProps } from "./domain/commerce/pricing";
export {
  ArticleCard,
  type ArticleCardProps,
} from "./domain/content/article-card";
export {
  Kanban,
  KanbanPropsSchema,
  KanbanDefinition,
  type KanbanProps,
} from "./domain/Kanban";
export {
  TodoList,
  TodoListPropsSchema,
  TodoListDefinition,
  type TodoListProps,
} from "./domain/TodoList";

export {
  RoutineScheduler,
  RoutineSchedulerPropsSchema,
  RoutineSchedulerDefinition,
  type RoutineSchedulerProps,
} from "./domain/RoutineScheduler";

export {
  SupplementTracker,
  SupplementTrackerPropsSchema,
  SupplementTrackerDefinition,
  type SupplementTrackerProps,
} from "./domain/SupplementTracker";

export {
  Calendar,
  CalendarPropsSchema,
  CalendarDefinition,
  type CalendarProps,
} from "./domain/Calendar";

export {
  Diary,
  DiaryPropsSchema,
  DiaryDefinition,
  type DiaryProps,
} from "./domain/Diary";

export {
  ResearchReport,
  ResearchReportPropsSchema,
  ResearchReportDefinition,
  type ResearchReportProps,
  type Source as ResearchSource,
  type ReportSection,
} from "./domain/research";

// Document Analysis Components (Vectorless Integration)
export {
  DocumentIndex,
  DocumentIndexPropsSchema,
  DocumentIndexDefinition,
  type DocumentIndexProps,
} from "./domain/DocumentIndex";

export {
  SourceCitation,
  SourceCitationPropsSchema,
  SourceCitationDefinition,
  type SourceCitationProps,
} from "./domain/SourceCitation";

export {
  DocumentReport,
  DocumentReportPropsSchema,
  DocumentReportDefinition,
  type DocumentReportProps,
} from "./domain/document";

// ============================================================================
// Visualization Components (formerly @onegenui/viz)
// ============================================================================

export * from "./visualization";

// ============================================================================
// Component Registry
// ============================================================================

import {
  Card,
  Grid,
  Stack,
  Divider,
  Heading,
  Text,
  CodeBlock,
  Document,
  Badge,
  Alert,
  Empty,
  BrowserAction,
  Button,
  TextField,
  Select,
  DatePicker,
  Metric,
  Table,
  List,
  Timeline,
  SearchResults,
  DriveFile,
  DriveFileList,
  Weather,
  Audio,
  Video,
  Image,
  Gallery,
  // Definitions
  CardDefinition,
  GridDefinition,
  StackDefinition,
  DividerDefinition,
  HeadingDefinition,
  TextDefinition,
  CodeBlockDefinition,
  DocumentDefinition,
  BadgeDefinition,
  AlertDefinition,
  EmptyDefinition,
  BrowserActionDefinition,
  ButtonDefinition,
  TextFieldDefinition,
  SelectDefinition,
  DatePickerDefinition,
  MetricDefinition,
  TableDefinition,
  ListDefinition,
  TimelineDefinition,
  SearchResultsDefinition,
  DriveFileDefinition,
  DriveFileListDefinition,
  WeatherDefinition,
  AudioDefinition,
  VideoDefinition,
  ImageDefinition,
  GalleryDefinition,
} from "@onegenui/ui";

import { Message } from "./communication/Message";
import { Email } from "./communication/Email";
import { MessageDefinition } from "./communication/Message";
import { EmailDefinition } from "./communication/Email";

// Communication exports (these remained in components? check list_dir step 27)
// Step 27 showed "communication" folder. So they are still here.
export {
  Message,
  MessagePropsSchema,
  MessageDefinition,
  type MessageProps,
} from "./communication/Message";
export {
  Email,
  EmailPropsSchema,
  EmailDefinition,
  type EmailProps,
} from "./communication/Email";

import {
  CalendarAgenda,
  CalendarAgendaDefinition,
} from "./domain/CalendarAgenda";
import { Workout, WorkoutDefinition } from "./domain/Workout";
import { Nutrition, NutritionDefinition } from "./domain/Nutrition";
import { Flight, FlightDefinition } from "./domain/Flight";
import { Hotel, HotelDefinition } from "./domain/Hotel";
import { Trip, TripDefinition } from "./domain/Trip";
import { BookingForms, BookingFormsDefinition } from "./domain/BookingForms";
import { Kanban, KanbanDefinition } from "./domain/Kanban";
import { TodoList, TodoListDefinition } from "./domain/TodoList";
import {
  RoutineScheduler,
  RoutineSchedulerDefinition,
} from "./domain/RoutineScheduler";
import {
  SupplementTracker,
  SupplementTrackerDefinition,
} from "./domain/SupplementTracker";
import { Calendar, CalendarDefinition } from "./domain/Calendar";
import { Diary, DiaryDefinition } from "./domain/Diary";
import { ResearchReport, ResearchReportDefinition } from "./domain/research";
import { ProfileCard } from "./domain/social/profile-card";
import { ActivityFeed } from "./domain/feed/activity-feed";
import { Pricing } from "./domain/commerce/pricing";
import { ArticleCard } from "./domain/content/article-card";
import { DocumentIndex, DocumentIndexDefinition } from "./domain/DocumentIndex";
import {
  SourceCitation,
  SourceCitationDefinition,
} from "./domain/SourceCitation";
import { DocumentReport, DocumentReportDefinition } from "./domain/document";

// Visualization components
import {
  Chart,
  ChartDefinition,
  StockChart,
  StockChartDefinition,
  Graph,
  GraphDefinition,
  MindMap,
  MindMapDefinition,
  Gantt,
  GanttDefinition,
} from "./visualization";

/** Registry type for component lookup by name */
export type ComponentRegistry = Record<string, ComponentType<any>>;

/**
 * Component registry - auto-generated from all domains.
 * Use with Renderer to render UI trees.
 */
export const componentRegistry: ComponentRegistry = {
  Card,
  Grid,
  Stack,
  Divider,
  Heading,
  Text,
  CodeBlock,
  Document,
  Badge,
  Alert,
  Empty,
  BrowserAction,
  Button,
  TextField,
  Select,
  DatePicker,
  Metric,
  Table,
  List,
  Timeline,

  SearchResults,
  DriveFile,
  Weather,
  Audio,
  Video,
  Image,
  Gallery,

  Message,
  Email,
  CalendarAgenda,
  DriveFileList,
  Workout,
  Nutrition,
  Flight,
  Hotel,
  Trip,
  BookingForms,
  Kanban,
  ProfileCard,
  ActivityFeed,
  Pricing,
  ArticleCard,
  TodoList,
  RoutineScheduler,
  SupplementTracker,
  Calendar,
  Diary,
  ResearchReport,
  DocumentIndex,
  SourceCitation,
  DocumentReport,
  // Visualization
  Chart,
  StockChart,
  Graph,
  MindMap,
  Gantt,
};

/**
 * Component definitions - auto-generated from all domains.
 * Use with createCatalog() to build a catalog.
 */
export const componentDefinitions = {
  Card: CardDefinition,
  Grid: GridDefinition,
  Stack: StackDefinition,
  Divider: DividerDefinition,
  Heading: HeadingDefinition,
  Text: TextDefinition,
  CodeBlock: CodeBlockDefinition,
  Document: DocumentDefinition,
  Badge: BadgeDefinition,
  Alert: AlertDefinition,
  Empty: EmptyDefinition,
  BrowserAction: BrowserActionDefinition,
  Button: ButtonDefinition,
  TextField: TextFieldDefinition,
  Select: SelectDefinition,
  DatePicker: DatePickerDefinition,
  Metric: MetricDefinition,
  Table: TableDefinition,
  List: ListDefinition,
  Timeline: TimelineDefinition,

  SearchResults: SearchResultsDefinition,
  DriveFile: DriveFileDefinition,
  Weather: WeatherDefinition,
  Audio: AudioDefinition,
  Video: VideoDefinition,
  Image: ImageDefinition,
  Gallery: GalleryDefinition,

  Message: MessageDefinition,
  Email: EmailDefinition,

  CalendarAgenda: CalendarAgendaDefinition,
  DriveFileList: DriveFileListDefinition,
  Workout: WorkoutDefinition,
  Nutrition: NutritionDefinition,
  Flight: FlightDefinition,
  Hotel: HotelDefinition,
  Trip: TripDefinition,
  BookingForms: BookingFormsDefinition,
  Kanban: KanbanDefinition,
  TodoList: TodoListDefinition,
  RoutineScheduler: RoutineSchedulerDefinition,
  SupplementTracker: SupplementTrackerDefinition,
  Calendar: CalendarDefinition,
  Diary: DiaryDefinition,
  ResearchReport: ResearchReportDefinition,
  DocumentIndex: DocumentIndexDefinition,
  SourceCitation: SourceCitationDefinition,
  DocumentReport: DocumentReportDefinition,
  // Visualization
  Chart: ChartDefinition,
  StockChart: StockChartDefinition,
  Graph: GraphDefinition,
  MindMap: MindMapDefinition,
  Gantt: GanttDefinition,
};

// ============================================================================
// Helpers
// ============================================================================

/** Get list of all registered component names */
export const componentNames = Object.keys(componentRegistry);

/** Check if a component is registered */
export function hasComponent(name: string): boolean {
  return name in componentRegistry;
}

// ============================================================================
// Document Components (Vectorless Integration)
// ============================================================================

export * from "./document/index.js";

// ============================================================================
// Version
// ============================================================================

export const VERSION = "0.1.0";
