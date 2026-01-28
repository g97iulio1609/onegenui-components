import { z } from "zod";

/**
 * Diary entry schema
 */
export const diaryEntrySchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  date: z.string().describe("Entry date in YYYY-MM-DD format"),
  title: z.string().nullable().optional().describe("Optional entry title"),
  content: z.string().describe("Main diary content (markdown supported)"),
  mood: z
    .enum(["great", "good", "neutral", "bad", "terrible"])
    .nullable()
    .optional()
    .describe("Overall mood for the day"),
  energy: z
    .number()
    .min(1)
    .max(10)
    .nullable()
    .optional()
    .describe("Energy level 1-10"),
  sleep: z
    .object({
      hours: z.number().nullable().optional(),
      quality: z.enum(["great", "good", "fair", "poor"]).nullable().optional(),
    })
    .nullable()
    .optional(),
  gratitude: z
    .array(z.string())
    .nullable()
    .optional()
    .describe("Things to be grateful for"),
  highlights: z
    .array(z.string())
    .nullable()
    .optional()
    .describe("Day highlights"),
  challenges: z
    .array(z.string())
    .nullable()
    .optional()
    .describe("Challenges faced"),
  goals: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
        completed: z.boolean().nullable().optional(),
      }),
    )
    .nullable()
    .optional()
    .describe("Daily goals"),
  tags: z.array(z.string()).nullable().optional(),
  linkedEntities: z
    .array(
      z.object({
        type: z.enum([
          "workout",
          "meal",
          "supplement",
          "calendar_event",
          "routine",
        ]),
        id: z.string(),
        label: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional()
    .describe("Related items from other domains"),
  weather: z
    .object({
      condition: z.string().nullable().optional(),
      temperature: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  location: z.string().nullable().optional(),
  photos: z.array(z.string()).nullable().optional().describe("Photo URLs"),
  private: z.boolean().nullable().optional().describe("Mark as private entry"),
  createdAt: z.string().nullable().optional(),
  updatedAt: z.string().nullable().optional(),
});

export type DiaryEntry = z.infer<typeof diaryEntrySchema>;

/**
 * Diary component props schema
 */
export const DiaryPropsSchema = z.object({
  title: z.string().nullable().optional(),
  entries: z.array(diaryEntrySchema).describe("Array of diary entries"),
  selectedDate: z
    .string()
    .nullable()
    .optional()
    .describe("Selected date in YYYY-MM-DD format"),
  view: z
    .enum(["single", "timeline", "calendar"])
    .default("single")
    .describe("View mode: single entry, timeline, or calendar overview"),
  showMoodTracker: z.boolean().default(true),
  showEnergyTracker: z.boolean().default(true),
  showGratitude: z.boolean().default(true),
  showLinkedEntities: z
    .boolean()
    .default(true)
    .describe("Show linked workouts, meals, etc."),
  enableSearch: z.boolean().nullable().optional(),
  lock: z.boolean().nullable().optional(),
});

export type DiaryProps = z.infer<typeof DiaryPropsSchema>;

/**
 * Diary component definition for catalog registration
 */
export const DiaryDefinition = {
  name: "Diary" as const,
  props: DiaryPropsSchema,
  description:
    "Personal diary and journal component with mood tracking, energy levels, gratitude, goals, and integration with workouts, meals, and calendar events.",
  hasChildren: true,
};
