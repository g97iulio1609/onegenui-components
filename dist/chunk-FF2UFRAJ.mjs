// src/utils/shared-schemas.ts
import {
  chartDatumSchema,
  listItemSchema,
  timelineItemSchema,
  toDoItemSchema,
  tableRowSchema,
  mindMapNodeSchema,
  graphNodeSchema,
  graphEdgeSchema,
  kanbanItemSchema,
  kanbanColumnSchema,
  ganttTaskSchema,
  emailItemSchema,
  workoutSetSchema,
  exerciseSchema,
  mealItemSchema,
  mealSchema,
  messageItemSchema,
  participantSchema
} from "@onegenui/schemas";

// src/communication/Message/schema.ts
import { z } from "zod";
var MessagePropsSchema = z.object({
  title: z.string().nullable(),
  messages: z.array(messageItemSchema),
  participants: z.array(participantSchema).nullable(),
  activeAgents: z.array(z.string()).nullable().describe("IDs of agents currently typing"),
  lock: z.boolean().nullable()
});
var MessageDefinition = {
  name: "Message",
  props: MessagePropsSchema,
  description: "Chat interface for multi-agent conversations.",
  hasChildren: true
};

// src/communication/Email/schema.ts
import { z as z2 } from "zod";
var EmailPropsSchema = z2.object({
  title: z2.string().nullable().describe("Inbox title"),
  description: z2.string().nullable().describe("Inbox description"),
  emails: z2.array(emailItemSchema).describe("List of emails"),
  lock: z2.boolean().nullable().describe("Lock delete/archive actions")
});
var EmailDefinition = {
  name: "Email",
  props: EmailPropsSchema,
  description: "Email inbox viewer with list and detail views.",
  hasChildren: true
};

// src/domain/CalendarAgenda/schema.ts
import { z as z3 } from "zod";
var CalendarAgendaSchema = z3.object({
  title: z3.string().optional().nullable().describe("Title for the calendar agenda"),
  description: z3.string().optional().nullable().describe("Description or subtitle"),
  view: z3.enum(["day", "week", "agenda"]).optional().default("agenda").describe("View mode: day, week, or agenda (list)"),
  selectedDate: z3.string().optional().describe("Selected date in ISO 8601 format"),
  events: z3.array(
    z3.object({
      id: z3.string().describe("Unique event identifier"),
      title: z3.string().describe("Event title"),
      description: z3.string().optional().nullable().describe("Event description"),
      location: z3.string().optional().nullable().describe("Event location"),
      start: z3.string().describe("Start date/time in ISO 8601 format"),
      end: z3.string().optional().nullable().describe("End date/time in ISO 8601 format"),
      allDay: z3.boolean().optional().describe("Whether this is an all-day event"),
      attendees: z3.array(
        z3.object({
          email: z3.string().describe("Attendee email"),
          name: z3.string().optional().describe("Attendee display name"),
          responseStatus: z3.enum(["accepted", "declined", "tentative", "needsAction"]).optional().describe("RSVP status")
        })
      ).optional().nullable().describe("List of event attendees"),
      meetingLink: z3.string().optional().nullable().describe("Video meeting URL (Google Meet, Zoom, etc.)"),
      color: z3.string().optional().nullable().describe("Event color (hex code)")
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
import { z as z4 } from "zod";
var WorkoutPropsSchema = z4.object({
  title: z4.string().nullable(),
  items: z4.array(exerciseSchema).min(1).describe("List of exercises/activities (REQUIRED, min 1)"),
  lock: z4.boolean().nullable(),
  exercises: z4.array(exerciseSchema).nullable().optional()
});
var WorkoutDefinition = {
  name: "Workout",
  props: WorkoutPropsSchema,
  description: "Workout logger with exercises, sets, reps, and agent suggestions.",
  hasChildren: true
};

// src/domain/Nutrition/schema.ts
import { z as z5 } from "zod";
var mealItemSchema2 = z5.object({
  id: z5.string().describe("Unique identifier (REQUIRED)"),
  name: z5.string().describe("Food name"),
  protein: z5.number().describe("Protein in grams"),
  carbs: z5.number().describe("Carbs in grams"),
  fats: z5.number().describe("Fats in grams"),
  calories: z5.number().nullable().optional(),
  grams: z5.number().nullable().optional(),
  consumed: z5.boolean().nullable().optional(),
  alternatives: z5.array(
    z5.object({
      id: z5.string().describe("Alternative food id"),
      name: z5.string().describe("Alternative food name"),
      protein: z5.number().describe("Protein in grams"),
      carbs: z5.number().describe("Carbs in grams"),
      fats: z5.number().describe("Fats in grams"),
      calories: z5.number().nullable().optional(),
      grams: z5.number().nullable().optional(),
      reason: z5.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative foods for this item")
});
var mealSchema2 = z5.object({
  id: z5.string().describe("Unique identifier (REQUIRED)"),
  name: z5.string().describe("Meal name"),
  items: z5.array(mealItemSchema2).describe("Foods for this meal"),
  alternatives: z5.array(
    z5.object({
      id: z5.string().describe("Alternative meal id"),
      name: z5.string().describe("Alternative meal name"),
      items: z5.array(mealItemSchema2).describe("Alternative meal items"),
      reason: z5.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative meals")
});
var dailyTargetsSchema = z5.object({
  calories: z5.number().nullable().optional(),
  protein: z5.number().nullable().optional(),
  carbs: z5.number().nullable().optional(),
  fats: z5.number().nullable().optional()
}).nullable().optional();
var NutritionPropsSchema = z5.object({
  title: z5.string().nullable().optional(),
  meals: z5.array(mealSchema2).describe("Meals with items (REQUIRED)"),
  dailyTargets: dailyTargetsSchema,
  lock: z5.boolean().nullable().optional()
});
var NutritionDefinition = {
  name: "Nutrition",
  props: NutritionPropsSchema,
  description: "Advanced nutrition plan with meal items, macro targets, and AI-generated alternatives for foods and meals.",
  hasChildren: true
};

// src/domain/Flight/schema.ts
import { z as z6 } from "zod";
var flightDetailsSchema = z6.object({
  code: z6.string(),
  city: z6.string(),
  time: z6.string(),
  date: z6.string().optional(),
  terminal: z6.string().optional()
});
var flightSchema = z6.object({
  id: z6.string().describe("Unique ID (REQUIRED)"),
  airline: z6.string(),
  flightNumber: z6.string(),
  departure: flightDetailsSchema,
  arrival: flightDetailsSchema,
  duration: z6.string().describe("Flight duration (e.g. '7h 30m') - REQUIRED"),
  price: z6.object({
    amount: z6.number().describe("Price amount"),
    currency: z6.string().default("EUR").describe("Currency code")
  }).optional().describe("Flight price"),
  bookingUrl: z6.string().url().optional().describe("Deep link to booking page"),
  status: z6.enum(["On Time", "Delayed", "Cancelled", "Boarding", "Departed"]).nullable().optional(),
  gate: z6.string().nullable().optional(),
  seat: z6.string().nullable().optional(),
  class: z6.string().nullable().optional(),
  foundBy: z6.string().nullable().optional()
});
var tripSchema = z6.object({
  outbound: flightSchema.describe("Outbound flight details"),
  return: flightSchema.optional().describe("Return flight details (for round trips)"),
  totalPrice: z6.object({
    amount: z6.number(),
    currency: z6.string().default("EUR")
  }).optional().describe("Total price for round trip"),
  bookingUrl: z6.string().url().optional().describe("Combined booking URL")
});
var FlightPropsSchema = z6.object({
  title: z6.string().nullable().optional(),
  flights: z6.array(flightSchema).optional().describe(
    "List of individual flights (will be auto-paired into round trips if possible)"
  ),
  trips: z6.array(tripSchema).optional().describe("Pre-defined round trips with outbound and return flights"),
  lock: z6.boolean().nullable().optional()
});
var FlightDefinition = {
  name: "Flight",
  props: FlightPropsSchema,
  description: "Flight details card with boarding pass style. Supports both individual flights and round trips. When flights array is provided, it will automatically pair matching routes into round trips. Alternatively, use trips array for explicit round trip definitions.",
  hasChildren: true
};

// src/domain/Hotel/schema.ts
import { z as z7 } from "zod";
var HotelDataSchema = z7.object({
  id: z7.string().describe("Unique identifier for the hotel"),
  name: z7.string().describe("Hotel name"),
  rating: z7.number().optional().describe("Hotel rating (e.g., 4.5)"),
  address: z7.string().optional().describe("Hotel address"),
  dates: z7.object({
    checkIn: z7.string().describe("Check-in date (ISO format)"),
    checkOut: z7.string().describe("Check-out date (ISO format)")
  }).optional().describe("Booking dates"),
  price: z7.object({
    amount: z7.number().describe("Price amount"),
    currency: z7.string().describe("Currency code (e.g., EUR, USD)"),
    perNight: z7.boolean().optional().describe("Whether price is per night")
  }).optional().describe("Price information"),
  image: z7.string().optional().describe(
    "URL to hotel image - ALWAYS include when available from web search"
  ),
  amenities: z7.array(z7.string()).optional().describe("List of amenities"),
  status: z7.enum(["Available", "Booked", "Sold Out", "Reserved"]).optional().describe("Booking status"),
  roomType: z7.string().optional().describe("Type of room (e.g., Double, Suite)"),
  guests: z7.number().optional().describe("Number of guests"),
  bookingUrl: z7.string().optional().describe("URL to the hotel booking page - ALWAYS include when available")
});
var HotelPropsSchema = z7.object({
  title: z7.string().optional().describe("Section title for the hotel list"),
  hotels: z7.array(HotelDataSchema).optional().describe("Array of hotels to display"),
  layout: z7.enum(["list", "card"]).optional().describe("Display layout: 'list' (default) or 'card'")
});
var HotelDefinition = {
  name: "Hotel",
  props: HotelPropsSchema,
  description: "Display hotel listings with images, ratings, prices, and booking links",
  hasChildren: true
};

// src/domain/Trip/schema.ts
import { z as z8 } from "zod";
var TripPropsSchema = z8.object({});
var TripDefinition = {
  name: "Trip",
  props: TripPropsSchema,
  description: "Trip component",
  hasChildren: true
};

// src/domain/BookingForms/schema.ts
import { z as z9 } from "zod";
var BookingFormsPropsSchema = z9.object({});
var BookingFormsDefinition = {
  name: "BookingForms",
  props: BookingFormsPropsSchema,
  description: "BookingForms component",
  hasChildren: true
};

// src/domain/Kanban/schema.ts
import { z as z10 } from "zod";
var KanbanPropsSchema = z10.object({
  title: z10.string().nullable(),
  columns: z10.array(kanbanColumnSchema).min(1).describe("Columns (REQUIRED, min 1)"),
  lock: z10.boolean().nullable()
});
var KanbanDefinition = {
  name: "Kanban",
  props: KanbanPropsSchema,
  description: "Kanban board with columns and drag-and-drop tasks.",
  hasChildren: true
};

// src/domain/TodoList/schema.ts
import { z as z11 } from "zod";
var TodoListPropsSchema = z11.object({});
var TodoListDefinition = {
  name: "TodoList",
  props: TodoListPropsSchema,
  description: "TodoList component",
  hasChildren: true
};

// src/domain/RoutineScheduler/schema.ts
import { z as z12 } from "zod";
var timeBlockSchema = z12.object({
  id: z12.string().describe("Unique identifier (REQUIRED)"),
  title: z12.string().describe("Block title"),
  description: z12.string().nullable().optional(),
  startTime: z12.string().describe("Start time in HH:mm format"),
  endTime: z12.string().describe("End time in HH:mm format"),
  category: z12.enum([
    "workout",
    "meal",
    "supplement",
    "work",
    "rest",
    "sleep",
    "personal",
    "other"
  ]).describe("Activity category for color coding and integration"),
  priority: z12.enum(["high", "medium", "low"]).nullable().optional(),
  completed: z12.boolean().nullable().optional(),
  recurring: z12.object({
    pattern: z12.enum(["daily", "weekly", "custom"]),
    daysOfWeek: z12.array(z12.number().min(0).max(6)).nullable().optional().describe("0=Sunday, 6=Saturday")
  }).nullable().optional(),
  linkedEntityId: z12.string().nullable().optional().describe("ID of linked workout, meal, or supplement"),
  linkedEntityType: z12.enum(["workout", "meal", "supplement", "calendar_event"]).nullable().optional(),
  notes: z12.string().nullable().optional(),
  color: z12.string().nullable().optional().describe("Custom color override")
});
var dayScheduleSchema = z12.object({
  date: z12.string().describe("Date in YYYY-MM-DD format"),
  dayOfWeek: z12.number().min(0).max(6).optional().describe("0=Sunday, 6=Saturday"),
  blocks: z12.array(timeBlockSchema).describe("Time blocks for this day"),
  notes: z12.string().nullable().optional()
});
var RoutineSchedulerPropsSchema = z12.object({
  title: z12.string().nullable().optional(),
  view: z12.enum(["day", "week", "timeline"]).default("day").describe("Display mode: day view, week view, or timeline"),
  selectedDate: z12.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  days: z12.array(dayScheduleSchema).describe("Array of day schedules (REQUIRED)"),
  timeRange: z12.object({
    start: z12.string().default("06:00").describe("Day start time HH:mm"),
    end: z12.string().default("22:00").describe("Day end time HH:mm")
  }).nullable().optional(),
  granularity: z12.enum(["15min", "30min", "1hr"]).default("30min").describe("Time slot granularity"),
  lock: z12.boolean().nullable().optional(),
  showCategories: z12.array(
    z12.enum([
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
import { z as z13 } from "zod";
var supplementItemSchema = z13.object({
  id: z13.string().describe("Unique identifier (REQUIRED)"),
  name: z13.string().describe("Supplement or medication name"),
  dosage: z13.string().describe("Dosage amount (e.g., '500mg', '2 capsules')"),
  unit: z13.enum([
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
  category: z13.enum([
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
  timing: z13.enum([
    "morning",
    "pre_meal",
    "with_meal",
    "post_meal",
    "pre_workout",
    "post_workout",
    "evening",
    "bedtime"
  ]).describe("When to take"),
  frequency: z13.enum(["daily", "twice_daily", "weekly", "as_needed", "custom"]).default("daily"),
  withFood: z13.boolean().nullable().optional().describe("Should be taken with food"),
  notes: z13.string().nullable().optional(),
  brand: z13.string().nullable().optional(),
  stack: z13.string().nullable().optional().describe("Stack name if part of a supplement stack")
});
var scheduledDoseSchema = z13.object({
  id: z13.string().describe("Unique identifier (REQUIRED)"),
  supplementId: z13.string().describe("Reference to supplement item"),
  scheduledTime: z13.string().describe("Scheduled time in HH:mm format"),
  taken: z13.boolean().default(false),
  takenAt: z13.string().nullable().optional().describe("Actual time taken in ISO format"),
  skipped: z13.boolean().nullable().optional(),
  skipReason: z13.string().nullable().optional()
});
var dailySupplementScheduleSchema = z13.object({
  date: z13.string().describe("Date in YYYY-MM-DD format"),
  doses: z13.array(scheduledDoseSchema),
  notes: z13.string().nullable().optional()
});
var SupplementTrackerPropsSchema = z13.object({
  title: z13.string().nullable().optional(),
  supplements: z13.array(supplementItemSchema).describe("List of supplements/medications (REQUIRED)"),
  schedule: z13.array(dailySupplementScheduleSchema).nullable().optional().describe("Daily schedules with doses"),
  selectedDate: z13.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: z13.enum(["daily", "weekly", "inventory"]).default("daily").describe("View mode"),
  showStacks: z13.boolean().nullable().optional().describe("Group by supplement stacks"),
  lock: z13.boolean().nullable().optional()
});
var SupplementTrackerDefinition = {
  name: "SupplementTracker",
  props: SupplementTrackerPropsSchema,
  description: "Ultra-powerful supplement and medication tracker with daily/weekly scheduling, timing optimization, and integration with meals and workouts.",
  hasChildren: true
};

// src/domain/Calendar/schema.ts
import { z as z14 } from "zod";
var calendarEventSchema = z14.object({
  id: z14.string().describe("Unique identifier (REQUIRED)"),
  title: z14.string().describe("Event title"),
  description: z14.string().nullable().optional(),
  start: z14.string().describe("Start datetime in ISO 8601 format"),
  end: z14.string().nullable().optional().describe("End datetime in ISO 8601 format"),
  allDay: z14.boolean().nullable().optional(),
  location: z14.string().nullable().optional(),
  color: z14.string().nullable().optional().describe("Event color (hex)"),
  category: z14.enum([
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
  recurring: z14.object({
    pattern: z14.enum(["daily", "weekly", "monthly", "yearly"]),
    interval: z14.number().optional().describe("Repeat every N days/weeks/etc"),
    endDate: z14.string().nullable().optional(),
    daysOfWeek: z14.array(z14.number().min(0).max(6)).nullable().optional()
  }).nullable().optional(),
  reminders: z14.array(
    z14.object({
      type: z14.enum(["notification", "email"]),
      minutes: z14.number().describe("Minutes before event")
    })
  ).nullable().optional(),
  linkedEntityId: z14.string().nullable().optional(),
  linkedEntityType: z14.enum(["workout", "meal", "supplement", "routine", "diary", "task"]).nullable().optional(),
  status: z14.enum(["confirmed", "tentative", "cancelled"]).nullable().optional(),
  completed: z14.boolean().nullable().optional(),
  priority: z14.enum(["high", "medium", "low"]).nullable().optional(),
  tags: z14.array(z14.string()).nullable().optional(),
  attendees: z14.array(
    z14.object({
      name: z14.string(),
      email: z14.string().nullable().optional(),
      status: z14.enum(["accepted", "declined", "tentative", "pending"]).nullable().optional()
    })
  ).nullable().optional(),
  notes: z14.string().nullable().optional()
});
var CalendarPropsSchema = z14.object({
  title: z14.string().nullable().optional(),
  view: z14.enum(["month", "week", "day", "agenda", "year"]).default("month").describe("Calendar view mode"),
  selectedDate: z14.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  events: z14.array(calendarEventSchema).describe("Array of calendar events"),
  showWeekNumbers: z14.boolean().nullable().optional(),
  firstDayOfWeek: z14.number().min(0).max(6).default(1).describe("0=Sunday, 1=Monday"),
  highlightToday: z14.boolean().default(true),
  showMiniCalendar: z14.boolean().nullable().optional().describe("Show mini calendar sidebar"),
  showCategories: z14.array(
    z14.enum([
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
  enableQuickAdd: z14.boolean().nullable().optional().describe("Enable quick event creation"),
  workingHours: z14.object({
    start: z14.string().default("09:00"),
    end: z14.string().default("17:00")
  }).nullable().optional(),
  lock: z14.boolean().nullable().optional()
});
var CalendarDefinition = {
  name: "Calendar",
  props: CalendarPropsSchema,
  description: "Ultra-powerful calendar component with month/week/day/agenda views, event management, recurring events, and integration with workouts, meals, supplements, and diary entries.",
  hasChildren: true
};

// src/domain/Diary/schema.ts
import { z as z15 } from "zod";
var diaryEntrySchema = z15.object({
  id: z15.string().describe("Unique identifier (REQUIRED)"),
  date: z15.string().describe("Entry date in YYYY-MM-DD format"),
  title: z15.string().nullable().optional().describe("Optional entry title"),
  content: z15.string().describe("Main diary content (markdown supported)"),
  mood: z15.enum(["great", "good", "neutral", "bad", "terrible"]).nullable().optional().describe("Overall mood for the day"),
  energy: z15.number().min(1).max(10).nullable().optional().describe("Energy level 1-10"),
  sleep: z15.object({
    hours: z15.number().nullable().optional(),
    quality: z15.enum(["great", "good", "fair", "poor"]).nullable().optional()
  }).nullable().optional(),
  gratitude: z15.array(z15.string()).nullable().optional().describe("Things to be grateful for"),
  highlights: z15.array(z15.string()).nullable().optional().describe("Day highlights"),
  challenges: z15.array(z15.string()).nullable().optional().describe("Challenges faced"),
  goals: z15.array(
    z15.object({
      id: z15.string(),
      text: z15.string(),
      completed: z15.boolean().nullable().optional()
    })
  ).nullable().optional().describe("Daily goals"),
  tags: z15.array(z15.string()).nullable().optional(),
  linkedEntities: z15.array(
    z15.object({
      type: z15.enum([
        "workout",
        "meal",
        "supplement",
        "calendar_event",
        "routine"
      ]),
      id: z15.string(),
      label: z15.string().nullable().optional()
    })
  ).nullable().optional().describe("Related items from other domains"),
  weather: z15.object({
    condition: z15.string().nullable().optional(),
    temperature: z15.number().nullable().optional()
  }).nullable().optional(),
  location: z15.string().nullable().optional(),
  photos: z15.array(z15.string()).nullable().optional().describe("Photo URLs"),
  private: z15.boolean().nullable().optional().describe("Mark as private entry"),
  createdAt: z15.string().nullable().optional(),
  updatedAt: z15.string().nullable().optional()
});
var DiaryPropsSchema = z15.object({
  title: z15.string().nullable().optional(),
  entries: z15.array(diaryEntrySchema).describe("Array of diary entries"),
  selectedDate: z15.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: z15.enum(["single", "timeline", "calendar"]).default("single").describe("View mode: single entry, timeline, or calendar overview"),
  showMoodTracker: z15.boolean().default(true),
  showEnergyTracker: z15.boolean().default(true),
  showGratitude: z15.boolean().default(true),
  showLinkedEntities: z15.boolean().default(true).describe("Show linked workouts, meals, etc."),
  enableSearch: z15.boolean().nullable().optional(),
  lock: z15.boolean().nullable().optional()
});
var DiaryDefinition = {
  name: "Diary",
  props: DiaryPropsSchema,
  description: "Personal diary and journal component with mood tracking, energy levels, gratitude, goals, and integration with workouts, meals, and calendar events.",
  hasChildren: true
};

// src/domain/DocumentIndex/schema.ts
import { z as z16 } from "zod";
var DocumentIndexNodeSchema = z16.lazy(
  () => z16.object({
    title: z16.string().describe("Section title"),
    nodeId: z16.string().describe("Unique node identifier"),
    startPage: z16.number().int().min(1).describe("Starting page number"),
    endPage: z16.number().int().min(1).describe("Ending page number"),
    summary: z16.string().optional().describe("Section summary"),
    children: z16.array(DocumentIndexNodeSchema).optional().describe("Nested sections")
  })
);
var DocumentIndexPropsSchema = z16.object({
  title: z16.string().describe("Document title"),
  description: z16.string().optional().describe("Document description"),
  pageCount: z16.number().int().min(1).describe("Total number of pages"),
  nodes: z16.array(DocumentIndexNodeSchema).describe("Top-level sections"),
  accentColor: z16.string().optional().describe("Accent color for styling"),
  collapsed: z16.boolean().optional().default(false).describe("Start collapsed")
});
var DocumentIndexDefinition = {
  props: DocumentIndexPropsSchema,
  description: "Document index with hierarchical navigation. Shows document structure with expandable sections, page numbers, and summaries. Use for PDF or document analysis results."
};

// src/domain/SourceCitation/schema.ts
import { z as z17 } from "zod";
var CitationSchema = z17.object({
  id: z17.string().describe("Unique citation identifier"),
  nodeId: z17.string().describe("Reference to the source node"),
  text: z17.string().describe("The cited text"),
  pageNumber: z17.number().int().min(1).describe("Page number of the citation"),
  sectionTitle: z17.string().describe("Section title containing the citation"),
  confidence: z17.enum(["high", "medium", "low"]).optional().describe("Confidence level")
});
var SourceCitationPropsSchema = z17.object({
  title: z17.string().describe("Document title"),
  description: z17.string().optional().describe("Brief description"),
  citations: z17.array(CitationSchema).describe("List of citations"),
  showPageNumbers: z17.boolean().optional().default(true),
  collapsed: z17.boolean().optional().default(false),
  accentColor: z17.string().optional().describe("Accent color for styling")
  // Note: onCitationClick is a runtime callback, not part of schema validation
});
var SourceCitationDefinition = {
  props: SourceCitationPropsSchema,
  description: "Source citations with page references. Shows cited text with links to source pages. Use after document analysis to show where information comes from."
};

export {
  exerciseSchema,
  MessagePropsSchema,
  MessageDefinition,
  EmailPropsSchema,
  EmailDefinition,
  CalendarAgendaSchema,
  CalendarAgendaDefinition,
  WorkoutPropsSchema,
  WorkoutDefinition,
  NutritionPropsSchema,
  NutritionDefinition,
  FlightPropsSchema,
  FlightDefinition,
  HotelPropsSchema,
  HotelDefinition,
  TripPropsSchema,
  TripDefinition,
  BookingFormsPropsSchema,
  BookingFormsDefinition,
  KanbanPropsSchema,
  KanbanDefinition,
  TodoListPropsSchema,
  TodoListDefinition,
  RoutineSchedulerPropsSchema,
  RoutineSchedulerDefinition,
  SupplementTrackerPropsSchema,
  SupplementTrackerDefinition,
  CalendarPropsSchema,
  CalendarDefinition,
  DiaryPropsSchema,
  DiaryDefinition,
  DocumentIndexPropsSchema,
  DocumentIndexDefinition,
  SourceCitationPropsSchema,
  SourceCitationDefinition
};
//# sourceMappingURL=chunk-FF2UFRAJ.mjs.map