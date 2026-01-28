import { z } from "zod";
import { exerciseSchema } from "../../utils/shared-schemas";

/**
 * Workout component schema definition
 */
export const WorkoutPropsSchema = z.object({
  title: z.string().nullable(),
  items: z
    .array(exerciseSchema)
    .min(1)
    .describe("List of exercises/activities (REQUIRED, min 1)"),
  lock: z.boolean().nullable(),
  exercises: z.array(exerciseSchema).nullable().optional(),
});

/** Type inference for Workout props */
export type WorkoutProps = z.infer<typeof WorkoutPropsSchema>;

/**
 * Workout component definition for catalog registration
 */
export const WorkoutDefinition = {
  name: "Workout" as const,
  props: WorkoutPropsSchema,
  description:
    "Workout logger with exercises, sets, reps, and agent suggestions.",
  hasChildren: true,
};
