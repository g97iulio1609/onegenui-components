import {
  Smile,
  Meh,
  Frown,
  Dumbbell,
  Utensils,
  Pill,
  Calendar,
  Link,
} from "lucide-react";

export type MoodConfig = { icon: typeof Smile; color: string; label: string };

export const DEFAULT_MOOD_CONFIG: MoodConfig = {
  icon: Meh,
  color: "text-zinc-400 bg-zinc-500/20",
  label: "Unknown",
};

export const MOOD_CONFIG: Record<string, MoodConfig> = {
  great: {
    icon: Smile,
    color: "text-emerald-400 bg-emerald-500/20",
    label: "Great",
  },
  good: { icon: Smile, color: "text-green-400 bg-green-500/20", label: "Good" },
  neutral: {
    icon: Meh,
    color: "text-amber-400 bg-amber-500/20",
    label: "Neutral",
  },
  bad: { icon: Frown, color: "text-orange-400 bg-orange-500/20", label: "Bad" },
  terrible: {
    icon: Frown,
    color: "text-rose-400 bg-rose-500/20",
    label: "Terrible",
  },
};

export function getMoodConfig(mood: string | null | undefined): MoodConfig {
  return MOOD_CONFIG[mood ?? "neutral"] ?? DEFAULT_MOOD_CONFIG;
}

export const ENTITY_ICONS: Record<string, typeof Dumbbell> = {
  workout: Dumbbell,
  meal: Utensils,
  supplement: Pill,
  calendar_event: Calendar,
  routine: Calendar,
};

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}
