/**
 * Nutrition types and utilities
 */

export type MealItem = {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories?: number;
  grams?: number;
  consumed?: boolean;
  alternatives?: Array<{
    id: string;
    name: string;
    protein: number;
    carbs: number;
    fats: number;
    calories?: number;
    grams?: number;
    reason?: string;
  }>;
};

export type Meal = {
  id: string;
  name: string;
  items: MealItem[];
  source?: string;
  conflict?: string;
  alternatives?: Array<{
    id: string;
    name: string;
    items: MealItem[];
    reason?: string;
  }>;
};

export const MACRO_TARGETS = { p: 180, c: 250, f: 70, cal: 2400 };
