import { z } from "zod";

/**
 * Calendar event schema
 */
export const calendarEventSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  title: z.string().describe("Event title"),
  description: z.string().nullable().optional(),
  start: z.string().describe("Start datetime in ISO 8601 format"),
  end: z
    .string()
    .nullable()
    .optional()
    .describe("End datetime in ISO 8601 format"),
  allDay: z.boolean().nullable().optional(),
  location: z.string().nullable().optional(),
  color: z.string().nullable().optional().describe("Event color (hex)"),
  category: z
    .enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "personal",
      "health",
      "social",
      "travel",
      "reminder",
      "other",
    ])
    .nullable()
    .optional(),
  recurring: z
    .object({
      pattern: z.enum(["daily", "weekly", "monthly", "yearly"]),
      interval: z.number().optional().describe("Repeat every N days/weeks/etc"),
      endDate: z.string().nullable().optional(),
      daysOfWeek: z.array(z.number().min(0).max(6)).nullable().optional(),
    })
    .nullable()
    .optional(),
  reminders: z
    .array(
      z.object({
        type: z.enum(["notification", "email"]),
        minutes: z.number().describe("Minutes before event"),
      }),
    )
    .nullable()
    .optional(),
  linkedEntityId: z.string().nullable().optional(),
  linkedEntityType: z
    .enum(["workout", "meal", "supplement", "routine", "diary", "task"])
    .nullable()
    .optional(),
  status: z.enum(["confirmed", "tentative", "cancelled"]).nullable().optional(),
  completed: z.boolean().nullable().optional(),
  priority: z.enum(["high", "medium", "low"]).nullable().optional(),
  tags: z.array(z.string()).nullable().optional(),
  attendees: z
    .array(
      z.object({
        name: z.string(),
        email: z.string().nullable().optional(),
        status: z
          .enum(["accepted", "declined", "tentative", "pending"])
          .nullable()
          .optional(),
      }),
    )
    .nullable()
    .optional(),
  notes: z.string().nullable().optional(),
});

export type CalendarEvent = z.infer<typeof calendarEventSchema>;

// View type for calendar display modes
export type CalendarView = "month" | "week" | "day" | "agenda" | "year";

/**
 * Calendar component props schema
 */
export const CalendarPropsSchema = z.object({
  title: z.string().nullable().optional(),
  view: z
    .enum(["month", "week", "day", "agenda", "year"])
    .default("month")
    .describe("Calendar view mode"),
  selectedDate: z
    .string()
    .nullable()
    .optional()
    .describe("Selected date in YYYY-MM-DD format"),
  events: z.array(calendarEventSchema).describe("Array of calendar events"),
  showWeekNumbers: z.boolean().nullable().optional(),
  firstDayOfWeek: z
    .number()
    .min(0)
    .max(6)
    .default(1)
    .describe("0=Sunday, 1=Monday"),
  highlightToday: z.boolean().default(true),
  showMiniCalendar: z
    .boolean()
    .nullable()
    .optional()
    .describe("Show mini calendar sidebar"),
  showCategories: z
    .array(
      z.enum([
        "workout",
        "meal",
        "supplement",
        "work",
        "personal",
        "health",
        "social",
        "travel",
        "reminder",
        "other",
      ]),
    )
    .nullable()
    .optional()
    .describe("Filter visible categories"),
  enableQuickAdd: z
    .boolean()
    .nullable()
    .optional()
    .describe("Enable quick event creation"),
  workingHours: z
    .object({
      start: z.string().default("09:00"),
      end: z.string().default("17:00"),
    })
    .nullable()
    .optional(),
  lock: z.boolean().nullable().optional(),
});

export type CalendarProps = z.infer<typeof CalendarPropsSchema>;

/**
 * Calendar component definition for catalog registration
 */
export const CalendarDefinition = {
  name: "Calendar" as const,
  props: CalendarPropsSchema,
  description:
    "Ultra-powerful calendar component with month/week/day/agenda views, event management, recurring events, and integration with workouts, meals, supplements, and diary entries.",
  hasChildren: true,
};
