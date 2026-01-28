import { z } from "zod";

/**
 * Food item schema with AI alternatives
 */
export const mealItemSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  name: z.string().describe("Food name"),
  protein: z.number().describe("Protein in grams"),
  carbs: z.number().describe("Carbs in grams"),
  fats: z.number().describe("Fats in grams"),
  calories: z.number().nullable().optional(),
  grams: z.number().nullable().optional(),
  consumed: z.boolean().nullable().optional(),
  alternatives: z
    .array(
      z.object({
        id: z.string().describe("Alternative food id"),
        name: z.string().describe("Alternative food name"),
        protein: z.number().describe("Protein in grams"),
        carbs: z.number().describe("Carbs in grams"),
        fats: z.number().describe("Fats in grams"),
        calories: z.number().nullable().optional(),
        grams: z.number().nullable().optional(),
        reason: z
          .string()
          .nullable()
          .optional()
          .describe("Why it's a good swap"),
      }),
    )
    .nullable()
    .optional()
    .describe("AI-suggested alternative foods for this item"),
});

export const mealSchema = z.object({
  id: z.string().describe("Unique identifier (REQUIRED)"),
  name: z.string().describe("Meal name"),
  items: z.array(mealItemSchema).describe("Foods for this meal"),
  alternatives: z
    .array(
      z.object({
        id: z.string().describe("Alternative meal id"),
        name: z.string().describe("Alternative meal name"),
        items: z.array(mealItemSchema).describe("Alternative meal items"),
        reason: z
          .string()
          .nullable()
          .optional()
          .describe("Why it's a good swap"),
      }),
    )
    .nullable()
    .optional()
    .describe("AI-suggested alternative meals"),
});

export const dailyTargetsSchema = z
  .object({
    calories: z.number().nullable().optional(),
    protein: z.number().nullable().optional(),
    carbs: z.number().nullable().optional(),
    fats: z.number().nullable().optional(),
  })
  .nullable()
  .optional();

/**
 * Nutrition component schema definition
 */
export const NutritionPropsSchema = z.object({
  title: z.string().nullable().optional(),
  meals: z.array(mealSchema).describe("Meals with items (REQUIRED)"),
  dailyTargets: dailyTargetsSchema,
  lock: z.boolean().nullable().optional(),
});

/** Type inference for Nutrition props */
export type NutritionProps = z.infer<typeof NutritionPropsSchema>;

/**
 * Nutrition component definition for catalog registration
 */
export const NutritionDefinition = {
  name: "Nutrition" as const,
  props: NutritionPropsSchema,
  description:
    "Advanced nutrition plan with meal items, macro targets, and AI-generated alternatives for foods and meals.",
  hasChildren: true,
};
