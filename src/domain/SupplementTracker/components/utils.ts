import type { LucideIcon } from "lucide-react";
import { Clock, Sun, Moon, Utensils, Dumbbell } from "lucide-react";
import type { SupplementItem, ScheduledDose } from "../schema";

// --- Types ---

export interface TimingConfig {
  icon: LucideIcon;
  label: string;
  color: string;
}

// --- Constants ---

const DEFAULT_TIMING_CONFIG: TimingConfig = {
  icon: Clock,
  label: "Anytime",
  color: "text-white/60",
};

export const TIMING_CONFIG: Record<string, TimingConfig> = {
  morning: { icon: Sun, label: "Morning", color: "text-amber-400" },
  pre_meal: { icon: Utensils, label: "Before Meal", color: "text-orange-400" },
  with_meal: { icon: Utensils, label: "With Meal", color: "text-green-400" },
  post_meal: { icon: Utensils, label: "After Meal", color: "text-teal-400" },
  pre_workout: { icon: Dumbbell, label: "Pre-Workout", color: "text-rose-400" },
  post_workout: {
    icon: Dumbbell,
    label: "Post-Workout",
    color: "text-emerald-400",
  },
  evening: { icon: Moon, label: "Evening", color: "text-indigo-400" },
  bedtime: { icon: Moon, label: "Bedtime", color: "text-violet-400" },
};

export const CATEGORY_COLORS: Record<string, string> = {
  vitamin: "bg-amber-500/20 border-amber-500/30 text-amber-300",
  mineral: "bg-slate-500/20 border-slate-500/30 text-slate-300",
  amino_acid: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  herb: "bg-green-500/20 border-green-500/30 text-green-300",
  probiotic: "bg-cyan-500/20 border-cyan-500/30 text-cyan-300",
  omega: "bg-sky-500/20 border-sky-500/30 text-sky-300",
  protein: "bg-rose-500/20 border-rose-500/30 text-rose-300",
  pre_workout: "bg-red-500/20 border-red-500/30 text-red-300",
  post_workout: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
  medication: "bg-purple-500/20 border-purple-500/30 text-purple-300",
  other: "bg-zinc-500/20 border-zinc-500/30 text-zinc-300",
};

export const TIMING_ORDER = [
  "morning",
  "pre_meal",
  "with_meal",
  "post_meal",
  "pre_workout",
  "post_workout",
  "evening",
  "bedtime",
];

// --- Helpers ---

export function getTimingConfig(timing: string): TimingConfig {
  return TIMING_CONFIG[timing] ?? DEFAULT_TIMING_CONFIG;
}

export function groupByTiming(
  supplements: SupplementItem[],
  doses: ScheduledDose[],
): Map<string, { supplement: SupplementItem; dose?: ScheduledDose }[]> {
  const groups = new Map<
    string,
    { supplement: SupplementItem; dose?: ScheduledDose }[]
  >();

  for (const supp of supplements) {
    const timing = supp.timing || "morning";
    if (!groups.has(timing)) groups.set(timing, []);
    const dose = doses.find((d) => d.supplementId === supp.id);
    groups.get(timing)!.push({ supplement: supp, dose });
  }

  return groups;
}
