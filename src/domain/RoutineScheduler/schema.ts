import { z } from "zod";

/**
 * Time block schema for granular scheduling
 */
export const timeBlockSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  title: z.string().describe("Block title"),
  description: z.string().nullable().optional(),
  startTime: z.string().describe("Start time in HH:mm format"),
  endTime: z.string().describe("End time in HH:mm format"),
  category: z
    .enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "rest",
      "sleep",
      "personal",
      "other",
    ])
    .describe("Activity category for color coding and integration"),
  priority: z.enum(["high", "medium", "low"]).nullable().optional(),
  completed: z.boolean().nullable().optional(),
  recurring: z
    .object({
      pattern: z.enum(["daily", "weekly", "custom"]),
      daysOfWeek: z
        .array(z.number().min(0).max(6))
        .nullable()
        .optional()
        .describe("0=Sunday, 6=Saturday"),
    })
    .nullable()
    .optional(),
  linkedEntityId: z
    .string()
    .nullable()
    .optional()
    .describe("ID of linked workout, meal, or supplement"),
  linkedEntityType: z
    .enum(["workout", "meal", "supplement", "calendar_event"])
    .nullable()
    .optional(),
  notes: z.string().nullable().optional(),
  color: z.string().nullable().optional().describe("Custom color override"),
});

export type TimeBlock = z.infer<typeof timeBlockSchema>;

/**
 * Day schedule containing time blocks
 */
export const dayScheduleSchema = z.object({
  date: z.string().describe("Date in YYYY-MM-DD format"),
  dayOfWeek: z
    .number()
    .min(0)
    .max(6)
    .optional()
    .describe("0=Sunday, 6=Saturday"),
  blocks: z.array(timeBlockSchema).describe("Time blocks for this day"),
  notes: z.string().nullable().optional(),
});

export type DaySchedule = z.infer<typeof dayScheduleSchema>;

/**
 * RoutineScheduler component props schema
 */
export const RoutineSchedulerPropsSchema = z.object({
  title: z.string().nullable().optional(),
  view: z
    .enum(["day", "week", "timeline"])
    .default("day")
    .describe("Display mode: day view, week view, or timeline"),
  selectedDate: z
    .string()
    .nullable()
    .optional()
    .describe("Selected date in YYYY-MM-DD format"),
  days: z
    .array(dayScheduleSchema)
    .describe("Array of day schedules (REQUIRED)"),
  timeRange: z
    .object({
      start: z.string().default("06:00").describe("Day start time HH:mm"),
      end: z.string().default("22:00").describe("Day end time HH:mm"),
    })
    .nullable()
    .optional(),
  granularity: z
    .enum(["15min", "30min", "1hr"])
    .default("30min")
    .describe("Time slot granularity"),
  lock: z.boolean().nullable().optional(),
  showCategories: z
    .array(
      z.enum([
        "workout",
        "meal",
        "supplement",
        "work",
        "rest",
        "sleep",
        "personal",
        "other",
      ]),
    )
    .nullable()
    .optional()
    .describe("Filter visible categories"),
});

export type RoutineSchedulerProps = z.infer<typeof RoutineSchedulerPropsSchema>;

/**
 * RoutineScheduler component definition for catalog registration
 */
export const RoutineSchedulerDefinition = {
  name: "RoutineScheduler" as const,
  props: RoutineSchedulerPropsSchema,
  description:
    "Ultra-powerful granular routine and schedule organizer with day/week views, recurring events, and integration with workouts, meals, and supplements.",
  hasChildren: true,
};
