"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/definitions.ts
var definitions_exports = {};
__export(definitions_exports, {
  AlertDefinition: () => import_definitions.AlertDefinition,
  AudioDefinition: () => import_definitions.AudioDefinition,
  BadgeDefinition: () => import_definitions.BadgeDefinition,
  BookingFormsDefinition: () => BookingFormsDefinition,
  BrowserActionDefinition: () => import_definitions.BrowserActionDefinition,
  ButtonDefinition: () => import_definitions.ButtonDefinition,
  CalendarAgendaDefinition: () => CalendarAgendaDefinition,
  CalendarDefinition: () => CalendarDefinition,
  CardDefinition: () => import_definitions.CardDefinition,
  CodeBlockDefinition: () => import_definitions.CodeBlockDefinition,
  DatePickerDefinition: () => import_definitions.DatePickerDefinition,
  DiaryDefinition: () => DiaryDefinition,
  DividerDefinition: () => import_definitions.DividerDefinition,
  DocumentDefinition: () => import_definitions.DocumentDefinition,
  DocumentIndexDefinition: () => DocumentIndexDefinition,
  DriveFileDefinition: () => import_definitions.DriveFileDefinition,
  DriveFileListDefinition: () => import_definitions.DriveFileListDefinition,
  EmailDefinition: () => EmailDefinition,
  EmptyDefinition: () => import_definitions.EmptyDefinition,
  FlightDefinition: () => FlightDefinition,
  GalleryDefinition: () => import_definitions.GalleryDefinition,
  GridDefinition: () => import_definitions.GridDefinition,
  HeadingDefinition: () => import_definitions.HeadingDefinition,
  HotelDefinition: () => HotelDefinition,
  ImageDefinition: () => import_definitions.ImageDefinition,
  KanbanDefinition: () => KanbanDefinition,
  ListDefinition: () => import_definitions.ListDefinition,
  MessageDefinition: () => MessageDefinition,
  MetricDefinition: () => import_definitions.MetricDefinition,
  NutritionDefinition: () => NutritionDefinition,
  RoutineSchedulerDefinition: () => RoutineSchedulerDefinition,
  SearchResultsDefinition: () => import_definitions.SearchResultsDefinition,
  SelectDefinition: () => import_definitions.SelectDefinition,
  SourceCitationDefinition: () => SourceCitationDefinition,
  StackDefinition: () => import_definitions.StackDefinition,
  SupplementTrackerDefinition: () => SupplementTrackerDefinition,
  TableDefinition: () => import_definitions.TableDefinition,
  TextDefinition: () => import_definitions.TextDefinition,
  TextFieldDefinition: () => import_definitions.TextFieldDefinition,
  TimelineDefinition: () => import_definitions.TimelineDefinition,
  TodoListDefinition: () => TodoListDefinition,
  TripDefinition: () => TripDefinition,
  VideoDefinition: () => import_definitions.VideoDefinition,
  WeatherDefinition: () => import_definitions.WeatherDefinition,
  WorkoutDefinition: () => WorkoutDefinition,
  exerciseSchema: () => import_schemas.exerciseSchema
});
module.exports = __toCommonJS(definitions_exports);
var import_definitions = require("@onegenui/ui/definitions");

// src/communication/Message/schema.ts
var import_zod = require("zod");

// src/utils/shared-schemas.ts
var import_schemas = require("@onegenui/schemas");

// src/communication/Message/schema.ts
var MessagePropsSchema = import_zod.z.object({
  title: import_zod.z.string().nullable(),
  messages: import_zod.z.array(import_schemas.messageItemSchema),
  participants: import_zod.z.array(import_schemas.participantSchema).nullable(),
  activeAgents: import_zod.z.array(import_zod.z.string()).nullable().describe("IDs of agents currently typing"),
  lock: import_zod.z.boolean().nullable()
});
var MessageDefinition = {
  name: "Message",
  props: MessagePropsSchema,
  description: "Chat interface for multi-agent conversations.",
  hasChildren: true
};

// src/communication/Email/schema.ts
var import_zod2 = require("zod");
var EmailPropsSchema = import_zod2.z.object({
  title: import_zod2.z.string().nullable().describe("Inbox title"),
  description: import_zod2.z.string().nullable().describe("Inbox description"),
  emails: import_zod2.z.array(import_schemas.emailItemSchema).describe("List of emails"),
  lock: import_zod2.z.boolean().nullable().describe("Lock delete/archive actions")
});
var EmailDefinition = {
  name: "Email",
  props: EmailPropsSchema,
  description: "Email inbox viewer with list and detail views.",
  hasChildren: true
};

// src/domain/CalendarAgenda/schema.ts
var import_zod3 = require("zod");
var CalendarAgendaSchema = import_zod3.z.object({
  title: import_zod3.z.string().optional().nullable().describe("Title for the calendar agenda"),
  description: import_zod3.z.string().optional().nullable().describe("Description or subtitle"),
  view: import_zod3.z.enum(["day", "week", "agenda"]).optional().default("agenda").describe("View mode: day, week, or agenda (list)"),
  selectedDate: import_zod3.z.string().optional().describe("Selected date in ISO 8601 format"),
  events: import_zod3.z.array(
    import_zod3.z.object({
      id: import_zod3.z.string().describe("Unique event identifier"),
      title: import_zod3.z.string().describe("Event title"),
      description: import_zod3.z.string().optional().nullable().describe("Event description"),
      location: import_zod3.z.string().optional().nullable().describe("Event location"),
      start: import_zod3.z.string().describe("Start date/time in ISO 8601 format"),
      end: import_zod3.z.string().optional().nullable().describe("End date/time in ISO 8601 format"),
      allDay: import_zod3.z.boolean().optional().describe("Whether this is an all-day event"),
      attendees: import_zod3.z.array(
        import_zod3.z.object({
          email: import_zod3.z.string().describe("Attendee email"),
          name: import_zod3.z.string().optional().describe("Attendee display name"),
          responseStatus: import_zod3.z.enum(["accepted", "declined", "tentative", "needsAction"]).optional().describe("RSVP status")
        })
      ).optional().nullable().describe("List of event attendees"),
      meetingLink: import_zod3.z.string().optional().nullable().describe("Video meeting URL (Google Meet, Zoom, etc.)"),
      color: import_zod3.z.string().optional().nullable().describe("Event color (hex code)")
    })
  ).optional().nullable().describe("List of calendar events to display")
});
var CalendarAgendaDefinition = {
  name: "CalendarAgenda",
  props: CalendarAgendaSchema,
  description: "Displays a list of Google Calendar events with day/week/agenda views and event details.",
  hasChildren: false
};

// src/domain/Workout/schema.ts
var import_zod4 = require("zod");
var WorkoutPropsSchema = import_zod4.z.object({
  title: import_zod4.z.string().nullable(),
  items: import_zod4.z.array(import_schemas.exerciseSchema).min(1).describe("List of exercises/activities (REQUIRED, min 1)"),
  lock: import_zod4.z.boolean().nullable(),
  exercises: import_zod4.z.array(import_schemas.exerciseSchema).nullable().optional()
});
var WorkoutDefinition = {
  name: "Workout",
  props: WorkoutPropsSchema,
  description: "Workout logger with exercises, sets, reps, and agent suggestions.",
  hasChildren: true
};

// src/domain/Nutrition/schema.ts
var import_zod5 = require("zod");
var mealItemSchema2 = import_zod5.z.object({
  id: import_zod5.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod5.z.string().describe("Food name"),
  protein: import_zod5.z.number().describe("Protein in grams"),
  carbs: import_zod5.z.number().describe("Carbs in grams"),
  fats: import_zod5.z.number().describe("Fats in grams"),
  calories: import_zod5.z.number().nullable().optional(),
  grams: import_zod5.z.number().nullable().optional(),
  consumed: import_zod5.z.boolean().nullable().optional(),
  alternatives: import_zod5.z.array(
    import_zod5.z.object({
      id: import_zod5.z.string().describe("Alternative food id"),
      name: import_zod5.z.string().describe("Alternative food name"),
      protein: import_zod5.z.number().describe("Protein in grams"),
      carbs: import_zod5.z.number().describe("Carbs in grams"),
      fats: import_zod5.z.number().describe("Fats in grams"),
      calories: import_zod5.z.number().nullable().optional(),
      grams: import_zod5.z.number().nullable().optional(),
      reason: import_zod5.z.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative foods for this item")
});
var mealSchema2 = import_zod5.z.object({
  id: import_zod5.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod5.z.string().describe("Meal name"),
  items: import_zod5.z.array(mealItemSchema2).describe("Foods for this meal"),
  alternatives: import_zod5.z.array(
    import_zod5.z.object({
      id: import_zod5.z.string().describe("Alternative meal id"),
      name: import_zod5.z.string().describe("Alternative meal name"),
      items: import_zod5.z.array(mealItemSchema2).describe("Alternative meal items"),
      reason: import_zod5.z.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative meals")
});
var dailyTargetsSchema = import_zod5.z.object({
  calories: import_zod5.z.number().nullable().optional(),
  protein: import_zod5.z.number().nullable().optional(),
  carbs: import_zod5.z.number().nullable().optional(),
  fats: import_zod5.z.number().nullable().optional()
}).nullable().optional();
var NutritionPropsSchema = import_zod5.z.object({
  title: import_zod5.z.string().nullable().optional(),
  meals: import_zod5.z.array(mealSchema2).describe("Meals with items (REQUIRED)"),
  dailyTargets: dailyTargetsSchema,
  lock: import_zod5.z.boolean().nullable().optional()
});
var NutritionDefinition = {
  name: "Nutrition",
  props: NutritionPropsSchema,
  description: "Advanced nutrition plan with meal items, macro targets, and AI-generated alternatives for foods and meals.",
  hasChildren: true
};

// src/domain/Flight/schema.ts
var import_zod6 = require("zod");
var flightDetailsSchema = import_zod6.z.object({
  code: import_zod6.z.string(),
  city: import_zod6.z.string(),
  time: import_zod6.z.string(),
  date: import_zod6.z.string().optional(),
  terminal: import_zod6.z.string().optional()
});
var flightSchema = import_zod6.z.object({
  id: import_zod6.z.string().describe("Unique ID (REQUIRED)"),
  airline: import_zod6.z.string(),
  flightNumber: import_zod6.z.string(),
  departure: flightDetailsSchema,
  arrival: flightDetailsSchema,
  duration: import_zod6.z.string().describe("Flight duration (e.g. '7h 30m') - REQUIRED"),
  price: import_zod6.z.object({
    amount: import_zod6.z.number().describe("Price amount"),
    currency: import_zod6.z.string().default("EUR").describe("Currency code")
  }).optional().describe("Flight price"),
  bookingUrl: import_zod6.z.string().url().optional().describe("Deep link to booking page"),
  status: import_zod6.z.enum(["On Time", "Delayed", "Cancelled", "Boarding", "Departed"]).nullable().optional(),
  gate: import_zod6.z.string().nullable().optional(),
  seat: import_zod6.z.string().nullable().optional(),
  class: import_zod6.z.string().nullable().optional(),
  foundBy: import_zod6.z.string().nullable().optional()
});
var tripSchema = import_zod6.z.object({
  outbound: flightSchema.describe("Outbound flight details"),
  return: flightSchema.optional().describe("Return flight details (for round trips)"),
  totalPrice: import_zod6.z.object({
    amount: import_zod6.z.number(),
    currency: import_zod6.z.string().default("EUR")
  }).optional().describe("Total price for round trip"),
  bookingUrl: import_zod6.z.string().url().optional().describe("Combined booking URL")
});
var FlightPropsSchema = import_zod6.z.object({
  title: import_zod6.z.string().nullable().optional(),
  flights: import_zod6.z.array(flightSchema).optional().describe(
    "List of individual flights (will be auto-paired into round trips if possible)"
  ),
  trips: import_zod6.z.array(tripSchema).optional().describe("Pre-defined round trips with outbound and return flights"),
  lock: import_zod6.z.boolean().nullable().optional()
});
var FlightDefinition = {
  name: "Flight",
  props: FlightPropsSchema,
  description: "Flight details card with boarding pass style. Supports both individual flights and round trips. When flights array is provided, it will automatically pair matching routes into round trips. Alternatively, use trips array for explicit round trip definitions.",
  hasChildren: true
};

// src/domain/Hotel/schema.ts
var import_zod7 = require("zod");
var HotelDataSchema = import_zod7.z.object({
  id: import_zod7.z.string().describe("Unique identifier for the hotel"),
  name: import_zod7.z.string().describe("Hotel name"),
  rating: import_zod7.z.number().optional().describe("Hotel rating (e.g., 4.5)"),
  address: import_zod7.z.string().optional().describe("Hotel address"),
  dates: import_zod7.z.object({
    checkIn: import_zod7.z.string().describe("Check-in date (ISO format)"),
    checkOut: import_zod7.z.string().describe("Check-out date (ISO format)")
  }).optional().describe("Booking dates"),
  price: import_zod7.z.object({
    amount: import_zod7.z.number().describe("Price amount"),
    currency: import_zod7.z.string().describe("Currency code (e.g., EUR, USD)"),
    perNight: import_zod7.z.boolean().optional().describe("Whether price is per night")
  }).optional().describe("Price information"),
  image: import_zod7.z.string().optional().describe(
    "URL to hotel image - ALWAYS include when available from web search"
  ),
  amenities: import_zod7.z.array(import_zod7.z.string()).optional().describe("List of amenities"),
  status: import_zod7.z.enum(["Available", "Booked", "Sold Out", "Reserved"]).optional().describe("Booking status"),
  roomType: import_zod7.z.string().optional().describe("Type of room (e.g., Double, Suite)"),
  guests: import_zod7.z.number().optional().describe("Number of guests"),
  bookingUrl: import_zod7.z.string().optional().describe("URL to the hotel booking page - ALWAYS include when available")
});
var HotelPropsSchema = import_zod7.z.object({
  title: import_zod7.z.string().optional().describe("Section title for the hotel list"),
  hotels: import_zod7.z.array(HotelDataSchema).optional().describe("Array of hotels to display"),
  layout: import_zod7.z.enum(["list", "card"]).optional().describe("Display layout: 'list' (default) or 'card'")
});
var HotelDefinition = {
  name: "Hotel",
  props: HotelPropsSchema,
  description: "Display hotel listings with images, ratings, prices, and booking links",
  hasChildren: true
};

// src/domain/Trip/schema.ts
var import_zod8 = require("zod");
var TripPropsSchema = import_zod8.z.object({});
var TripDefinition = {
  name: "Trip",
  props: TripPropsSchema,
  description: "Trip component",
  hasChildren: true
};

// src/domain/BookingForms/schema.ts
var import_zod9 = require("zod");
var BookingFormsPropsSchema = import_zod9.z.object({});
var BookingFormsDefinition = {
  name: "BookingForms",
  props: BookingFormsPropsSchema,
  description: "BookingForms component",
  hasChildren: true
};

// src/domain/Kanban/schema.ts
var import_zod10 = require("zod");
var KanbanPropsSchema = import_zod10.z.object({
  title: import_zod10.z.string().nullable(),
  columns: import_zod10.z.array(import_schemas.kanbanColumnSchema).min(1).describe("Columns (REQUIRED, min 1)"),
  lock: import_zod10.z.boolean().nullable()
});
var KanbanDefinition = {
  name: "Kanban",
  props: KanbanPropsSchema,
  description: "Kanban board with columns and drag-and-drop tasks.",
  hasChildren: true
};

// src/domain/TodoList/schema.ts
var import_zod11 = require("zod");
var TodoListPropsSchema = import_zod11.z.object({});
var TodoListDefinition = {
  name: "TodoList",
  props: TodoListPropsSchema,
  description: "TodoList component",
  hasChildren: true
};

// src/domain/RoutineScheduler/schema.ts
var import_zod12 = require("zod");
var timeBlockSchema = import_zod12.z.object({
  id: import_zod12.z.string().describe("Unique identifier (REQUIRED)"),
  title: import_zod12.z.string().describe("Block title"),
  description: import_zod12.z.string().nullable().optional(),
  startTime: import_zod12.z.string().describe("Start time in HH:mm format"),
  endTime: import_zod12.z.string().describe("End time in HH:mm format"),
  category: import_zod12.z.enum([
    "workout",
    "meal",
    "supplement",
    "work",
    "rest",
    "sleep",
    "personal",
    "other"
  ]).describe("Activity category for color coding and integration"),
  priority: import_zod12.z.enum(["high", "medium", "low"]).nullable().optional(),
  completed: import_zod12.z.boolean().nullable().optional(),
  recurring: import_zod12.z.object({
    pattern: import_zod12.z.enum(["daily", "weekly", "custom"]),
    daysOfWeek: import_zod12.z.array(import_zod12.z.number().min(0).max(6)).nullable().optional().describe("0=Sunday, 6=Saturday")
  }).nullable().optional(),
  linkedEntityId: import_zod12.z.string().nullable().optional().describe("ID of linked workout, meal, or supplement"),
  linkedEntityType: import_zod12.z.enum(["workout", "meal", "supplement", "calendar_event"]).nullable().optional(),
  notes: import_zod12.z.string().nullable().optional(),
  color: import_zod12.z.string().nullable().optional().describe("Custom color override")
});
var dayScheduleSchema = import_zod12.z.object({
  date: import_zod12.z.string().describe("Date in YYYY-MM-DD format"),
  dayOfWeek: import_zod12.z.number().min(0).max(6).optional().describe("0=Sunday, 6=Saturday"),
  blocks: import_zod12.z.array(timeBlockSchema).describe("Time blocks for this day"),
  notes: import_zod12.z.string().nullable().optional()
});
var RoutineSchedulerPropsSchema = import_zod12.z.object({
  title: import_zod12.z.string().nullable().optional(),
  view: import_zod12.z.enum(["day", "week", "timeline"]).default("day").describe("Display mode: day view, week view, or timeline"),
  selectedDate: import_zod12.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  days: import_zod12.z.array(dayScheduleSchema).describe("Array of day schedules (REQUIRED)"),
  timeRange: import_zod12.z.object({
    start: import_zod12.z.string().default("06:00").describe("Day start time HH:mm"),
    end: import_zod12.z.string().default("22:00").describe("Day end time HH:mm")
  }).nullable().optional(),
  granularity: import_zod12.z.enum(["15min", "30min", "1hr"]).default("30min").describe("Time slot granularity"),
  lock: import_zod12.z.boolean().nullable().optional(),
  showCategories: import_zod12.z.array(
    import_zod12.z.enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "rest",
      "sleep",
      "personal",
      "other"
    ])
  ).nullable().optional().describe("Filter visible categories")
});
var RoutineSchedulerDefinition = {
  name: "RoutineScheduler",
  props: RoutineSchedulerPropsSchema,
  description: "Ultra-powerful granular routine and schedule organizer with day/week views, recurring events, and integration with workouts, meals, and supplements.",
  hasChildren: true
};

// src/domain/SupplementTracker/schema.ts
var import_zod13 = require("zod");
var supplementItemSchema = import_zod13.z.object({
  id: import_zod13.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod13.z.string().describe("Supplement or medication name"),
  dosage: import_zod13.z.string().describe("Dosage amount (e.g., '500mg', '2 capsules')"),
  unit: import_zod13.z.enum([
    "mg",
    "g",
    "mcg",
    "IU",
    "ml",
    "capsules",
    "tablets",
    "drops",
    "other"
  ]).default("mg"),
  category: import_zod13.z.enum([
    "vitamin",
    "mineral",
    "amino_acid",
    "herb",
    "probiotic",
    "omega",
    "protein",
    "pre_workout",
    "post_workout",
    "medication",
    "other"
  ]).describe("Supplement category"),
  timing: import_zod13.z.enum([
    "morning",
    "pre_meal",
    "with_meal",
    "post_meal",
    "pre_workout",
    "post_workout",
    "evening",
    "bedtime"
  ]).describe("When to take"),
  frequency: import_zod13.z.enum(["daily", "twice_daily", "weekly", "as_needed", "custom"]).default("daily"),
  withFood: import_zod13.z.boolean().nullable().optional().describe("Should be taken with food"),
  notes: import_zod13.z.string().nullable().optional(),
  brand: import_zod13.z.string().nullable().optional(),
  stack: import_zod13.z.string().nullable().optional().describe("Stack name if part of a supplement stack")
});
var scheduledDoseSchema = import_zod13.z.object({
  id: import_zod13.z.string().describe("Unique identifier (REQUIRED)"),
  supplementId: import_zod13.z.string().describe("Reference to supplement item"),
  scheduledTime: import_zod13.z.string().describe("Scheduled time in HH:mm format"),
  taken: import_zod13.z.boolean().default(false),
  takenAt: import_zod13.z.string().nullable().optional().describe("Actual time taken in ISO format"),
  skipped: import_zod13.z.boolean().nullable().optional(),
  skipReason: import_zod13.z.string().nullable().optional()
});
var dailySupplementScheduleSchema = import_zod13.z.object({
  date: import_zod13.z.string().describe("Date in YYYY-MM-DD format"),
  doses: import_zod13.z.array(scheduledDoseSchema),
  notes: import_zod13.z.string().nullable().optional()
});
var SupplementTrackerPropsSchema = import_zod13.z.object({
  title: import_zod13.z.string().nullable().optional(),
  supplements: import_zod13.z.array(supplementItemSchema).describe("List of supplements/medications (REQUIRED)"),
  schedule: import_zod13.z.array(dailySupplementScheduleSchema).nullable().optional().describe("Daily schedules with doses"),
  selectedDate: import_zod13.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: import_zod13.z.enum(["daily", "weekly", "inventory"]).default("daily").describe("View mode"),
  showStacks: import_zod13.z.boolean().nullable().optional().describe("Group by supplement stacks"),
  lock: import_zod13.z.boolean().nullable().optional()
});
var SupplementTrackerDefinition = {
  name: "SupplementTracker",
  props: SupplementTrackerPropsSchema,
  description: "Ultra-powerful supplement and medication tracker with daily/weekly scheduling, timing optimization, and integration with meals and workouts.",
  hasChildren: true
};

// src/domain/Calendar/schema.ts
var import_zod14 = require("zod");
var calendarEventSchema = import_zod14.z.object({
  id: import_zod14.z.string().describe("Unique identifier (REQUIRED)"),
  title: import_zod14.z.string().describe("Event title"),
  description: import_zod14.z.string().nullable().optional(),
  start: import_zod14.z.string().describe("Start datetime in ISO 8601 format"),
  end: import_zod14.z.string().nullable().optional().describe("End datetime in ISO 8601 format"),
  allDay: import_zod14.z.boolean().nullable().optional(),
  location: import_zod14.z.string().nullable().optional(),
  color: import_zod14.z.string().nullable().optional().describe("Event color (hex)"),
  category: import_zod14.z.enum([
    "workout",
    "meal",
    "supplement",
    "work",
    "personal",
    "health",
    "social",
    "travel",
    "reminder",
    "other"
  ]).nullable().optional(),
  recurring: import_zod14.z.object({
    pattern: import_zod14.z.enum(["daily", "weekly", "monthly", "yearly"]),
    interval: import_zod14.z.number().optional().describe("Repeat every N days/weeks/etc"),
    endDate: import_zod14.z.string().nullable().optional(),
    daysOfWeek: import_zod14.z.array(import_zod14.z.number().min(0).max(6)).nullable().optional()
  }).nullable().optional(),
  reminders: import_zod14.z.array(
    import_zod14.z.object({
      type: import_zod14.z.enum(["notification", "email"]),
      minutes: import_zod14.z.number().describe("Minutes before event")
    })
  ).nullable().optional(),
  linkedEntityId: import_zod14.z.string().nullable().optional(),
  linkedEntityType: import_zod14.z.enum(["workout", "meal", "supplement", "routine", "diary", "task"]).nullable().optional(),
  status: import_zod14.z.enum(["confirmed", "tentative", "cancelled"]).nullable().optional(),
  completed: import_zod14.z.boolean().nullable().optional(),
  priority: import_zod14.z.enum(["high", "medium", "low"]).nullable().optional(),
  tags: import_zod14.z.array(import_zod14.z.string()).nullable().optional(),
  attendees: import_zod14.z.array(
    import_zod14.z.object({
      name: import_zod14.z.string(),
      email: import_zod14.z.string().nullable().optional(),
      status: import_zod14.z.enum(["accepted", "declined", "tentative", "pending"]).nullable().optional()
    })
  ).nullable().optional(),
  notes: import_zod14.z.string().nullable().optional()
});
var CalendarPropsSchema = import_zod14.z.object({
  title: import_zod14.z.string().nullable().optional(),
  view: import_zod14.z.enum(["month", "week", "day", "agenda", "year"]).default("month").describe("Calendar view mode"),
  selectedDate: import_zod14.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  events: import_zod14.z.array(calendarEventSchema).describe("Array of calendar events"),
  showWeekNumbers: import_zod14.z.boolean().nullable().optional(),
  firstDayOfWeek: import_zod14.z.number().min(0).max(6).default(1).describe("0=Sunday, 1=Monday"),
  highlightToday: import_zod14.z.boolean().default(true),
  showMiniCalendar: import_zod14.z.boolean().nullable().optional().describe("Show mini calendar sidebar"),
  showCategories: import_zod14.z.array(
    import_zod14.z.enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "personal",
      "health",
      "social",
      "travel",
      "reminder",
      "other"
    ])
  ).nullable().optional().describe("Filter visible categories"),
  enableQuickAdd: import_zod14.z.boolean().nullable().optional().describe("Enable quick event creation"),
  workingHours: import_zod14.z.object({
    start: import_zod14.z.string().default("09:00"),
    end: import_zod14.z.string().default("17:00")
  }).nullable().optional(),
  lock: import_zod14.z.boolean().nullable().optional()
});
var CalendarDefinition = {
  name: "Calendar",
  props: CalendarPropsSchema,
  description: "Ultra-powerful calendar component with month/week/day/agenda views, event management, recurring events, and integration with workouts, meals, supplements, and diary entries.",
  hasChildren: true
};

// src/domain/Diary/schema.ts
var import_zod15 = require("zod");
var diaryEntrySchema = import_zod15.z.object({
  id: import_zod15.z.string().describe("Unique identifier (REQUIRED)"),
  date: import_zod15.z.string().describe("Entry date in YYYY-MM-DD format"),
  title: import_zod15.z.string().nullable().optional().describe("Optional entry title"),
  content: import_zod15.z.string().describe("Main diary content (markdown supported)"),
  mood: import_zod15.z.enum(["great", "good", "neutral", "bad", "terrible"]).nullable().optional().describe("Overall mood for the day"),
  energy: import_zod15.z.number().min(1).max(10).nullable().optional().describe("Energy level 1-10"),
  sleep: import_zod15.z.object({
    hours: import_zod15.z.number().nullable().optional(),
    quality: import_zod15.z.enum(["great", "good", "fair", "poor"]).nullable().optional()
  }).nullable().optional(),
  gratitude: import_zod15.z.array(import_zod15.z.string()).nullable().optional().describe("Things to be grateful for"),
  highlights: import_zod15.z.array(import_zod15.z.string()).nullable().optional().describe("Day highlights"),
  challenges: import_zod15.z.array(import_zod15.z.string()).nullable().optional().describe("Challenges faced"),
  goals: import_zod15.z.array(
    import_zod15.z.object({
      id: import_zod15.z.string(),
      text: import_zod15.z.string(),
      completed: import_zod15.z.boolean().nullable().optional()
    })
  ).nullable().optional().describe("Daily goals"),
  tags: import_zod15.z.array(import_zod15.z.string()).nullable().optional(),
  linkedEntities: import_zod15.z.array(
    import_zod15.z.object({
      type: import_zod15.z.enum([
        "workout",
        "meal",
        "supplement",
        "calendar_event",
        "routine"
      ]),
      id: import_zod15.z.string(),
      label: import_zod15.z.string().nullable().optional()
    })
  ).nullable().optional().describe("Related items from other domains"),
  weather: import_zod15.z.object({
    condition: import_zod15.z.string().nullable().optional(),
    temperature: import_zod15.z.number().nullable().optional()
  }).nullable().optional(),
  location: import_zod15.z.string().nullable().optional(),
  photos: import_zod15.z.array(import_zod15.z.string()).nullable().optional().describe("Photo URLs"),
  private: import_zod15.z.boolean().nullable().optional().describe("Mark as private entry"),
  createdAt: import_zod15.z.string().nullable().optional(),
  updatedAt: import_zod15.z.string().nullable().optional()
});
var DiaryPropsSchema = import_zod15.z.object({
  title: import_zod15.z.string().nullable().optional(),
  entries: import_zod15.z.array(diaryEntrySchema).describe("Array of diary entries"),
  selectedDate: import_zod15.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: import_zod15.z.enum(["single", "timeline", "calendar"]).default("single").describe("View mode: single entry, timeline, or calendar overview"),
  showMoodTracker: import_zod15.z.boolean().default(true),
  showEnergyTracker: import_zod15.z.boolean().default(true),
  showGratitude: import_zod15.z.boolean().default(true),
  showLinkedEntities: import_zod15.z.boolean().default(true).describe("Show linked workouts, meals, etc."),
  enableSearch: import_zod15.z.boolean().nullable().optional(),
  lock: import_zod15.z.boolean().nullable().optional()
});
var DiaryDefinition = {
  name: "Diary",
  props: DiaryPropsSchema,
  description: "Personal diary and journal component with mood tracking, energy levels, gratitude, goals, and integration with workouts, meals, and calendar events.",
  hasChildren: true
};

// src/domain/DocumentIndex/schema.ts
var import_zod16 = require("zod");
var DocumentIndexNodeSchema = import_zod16.z.lazy(
  () => import_zod16.z.object({
    title: import_zod16.z.string().describe("Section title"),
    nodeId: import_zod16.z.string().describe("Unique node identifier"),
    startPage: import_zod16.z.number().int().min(1).describe("Starting page number"),
    endPage: import_zod16.z.number().int().min(1).describe("Ending page number"),
    summary: import_zod16.z.string().optional().describe("Section summary"),
    children: import_zod16.z.array(DocumentIndexNodeSchema).optional().describe("Nested sections")
  })
);
var DocumentIndexPropsSchema = import_zod16.z.object({
  title: import_zod16.z.string().describe("Document title"),
  description: import_zod16.z.string().optional().describe("Document description"),
  pageCount: import_zod16.z.number().int().min(1).describe("Total number of pages"),
  nodes: import_zod16.z.array(DocumentIndexNodeSchema).describe("Top-level sections"),
  accentColor: import_zod16.z.string().optional().describe("Accent color for styling"),
  collapsed: import_zod16.z.boolean().optional().default(false).describe("Start collapsed")
});
var DocumentIndexDefinition = {
  props: DocumentIndexPropsSchema,
  description: "Document index with hierarchical navigation. Shows document structure with expandable sections, page numbers, and summaries. Use for PDF or document analysis results."
};

// src/domain/SourceCitation/schema.ts
var import_zod17 = require("zod");
var CitationSchema = import_zod17.z.object({
  id: import_zod17.z.string().describe("Unique citation identifier"),
  nodeId: import_zod17.z.string().describe("Reference to the source node"),
  text: import_zod17.z.string().describe("The cited text"),
  pageNumber: import_zod17.z.number().int().min(1).describe("Page number of the citation"),
  sectionTitle: import_zod17.z.string().describe("Section title containing the citation"),
  confidence: import_zod17.z.enum(["high", "medium", "low"]).optional().describe("Confidence level")
});
var SourceCitationPropsSchema = import_zod17.z.object({
  title: import_zod17.z.string().describe("Document title"),
  description: import_zod17.z.string().optional().describe("Brief description"),
  citations: import_zod17.z.array(CitationSchema).describe("List of citations"),
  showPageNumbers: import_zod17.z.boolean().optional().default(true),
  collapsed: import_zod17.z.boolean().optional().default(false),
  accentColor: import_zod17.z.string().optional().describe("Accent color for styling")
  // Note: onCitationClick is a runtime callback, not part of schema validation
});
var SourceCitationDefinition = {
  props: SourceCitationPropsSchema,
  description: "Source citations with page references. Shows cited text with links to source pages. Use after document analysis to show where information comes from."
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDefinition,
  AudioDefinition,
  BadgeDefinition,
  BookingFormsDefinition,
  BrowserActionDefinition,
  ButtonDefinition,
  CalendarAgendaDefinition,
  CalendarDefinition,
  CardDefinition,
  CodeBlockDefinition,
  DatePickerDefinition,
  DiaryDefinition,
  DividerDefinition,
  DocumentDefinition,
  DocumentIndexDefinition,
  DriveFileDefinition,
  DriveFileListDefinition,
  EmailDefinition,
  EmptyDefinition,
  FlightDefinition,
  GalleryDefinition,
  GridDefinition,
  HeadingDefinition,
  HotelDefinition,
  ImageDefinition,
  KanbanDefinition,
  ListDefinition,
  MessageDefinition,
  MetricDefinition,
  NutritionDefinition,
  RoutineSchedulerDefinition,
  SearchResultsDefinition,
  SelectDefinition,
  SourceCitationDefinition,
  StackDefinition,
  SupplementTrackerDefinition,
  TableDefinition,
  TextDefinition,
  TextFieldDefinition,
  TimelineDefinition,
  TodoListDefinition,
  TripDefinition,
  VideoDefinition,
  WeatherDefinition,
  WorkoutDefinition,
  exerciseSchema
});
//# sourceMappingURL=definitions.js.map