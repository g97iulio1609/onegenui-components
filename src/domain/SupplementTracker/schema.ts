import { z } from "zod";

/**
 * Individual supplement/medication item
 */
export const supplementItemSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  name: z.string().describe("Supplement or medication name"),
  dosage: z.string().describe("Dosage amount (e.g., '500mg', '2 capsules')"),
  unit: z
    .enum([
      "mg",
      "g",
      "mcg",
      "IU",
      "ml",
      "capsules",
      "tablets",
      "drops",
      "other",
    ])
    .default("mg"),
  category: z
    .enum([
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
      "other",
    ])
    .describe("Supplement category"),
  timing: z
    .enum([
      "morning",
      "pre_meal",
      "with_meal",
      "post_meal",
      "pre_workout",
      "post_workout",
      "evening",
      "bedtime",
    ])
    .describe("When to take"),
  frequency: z
    .enum(["daily", "twice_daily", "weekly", "as_needed", "custom"])
    .default("daily"),
  withFood: z
    .boolean()
    .nullable()
    .optional()
    .describe("Should be taken with food"),
  notes: z.string().nullable().optional(),
  brand: z.string().nullable().optional(),
  stack: z
    .string()
    .nullable()
    .optional()
    .describe("Stack name if part of a supplement stack"),
});

export type SupplementItem = z.infer<typeof supplementItemSchema>;

/**
 * Scheduled dose for tracking consumption
 */
export const scheduledDoseSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  supplementId: z.string().describe("Reference to supplement item"),
  scheduledTime: z.string().describe("Scheduled time in HH:mm format"),
  taken: z.boolean().default(false),
  takenAt: z
    .string()
    .nullable()
    .optional()
    .describe("Actual time taken in ISO format"),
  skipped: z.boolean().nullable().optional(),
  skipReason: z.string().nullable().optional(),
});

export type ScheduledDose = z.infer<typeof scheduledDoseSchema>;

/**
 * Daily supplement schedule
 */
export const dailySupplementScheduleSchema = z.object({
  date: z.string().describe("Date in YYYY-MM-DD format"),
  doses: z.array(scheduledDoseSchema),
  notes: z.string().nullable().optional(),
});

export type DailySupplementSchedule = z.infer<
  typeof dailySupplementScheduleSchema
>;

/**
 * SupplementTracker component props schema
 */
export const SupplementTrackerPropsSchema = z.object({
  title: z.string().nullable().optional(),
  supplements: z
    .array(supplementItemSchema)
    .describe("List of supplements/medications (REQUIRED)"),
  schedule: z
    .array(dailySupplementScheduleSchema)
    .nullable()
    .optional()
    .describe("Daily schedules with doses"),
  selectedDate: z
    .string()
    .nullable()
    .optional()
    .describe("Selected date in YYYY-MM-DD format"),
  view: z
    .enum(["daily", "weekly", "inventory"])
    .default("daily")
    .describe("View mode"),
  showStacks: z
    .boolean()
    .nullable()
    .optional()
    .describe("Group by supplement stacks"),
  lock: z.boolean().nullable().optional(),
});

export type SupplementTrackerProps = z.infer<
  typeof SupplementTrackerPropsSchema
>;

/**
 * SupplementTracker component definition for catalog registration
 */
export const SupplementTrackerDefinition = {
  name: "SupplementTracker" as const,
  props: SupplementTrackerPropsSchema,
  description:
    "Ultra-powerful supplement and medication tracker with daily/weekly scheduling, timing optimization, and integration with meals and workouts.",
  hasChildren: true,
};
