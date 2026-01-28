import {
  Calendar,
  Clock,
  Dumbbell,
  Utensils,
  Pill,
  Briefcase,
  Moon,
  Coffee,
  User,
  MoreHorizontal,
} from "lucide-react";

// --- Types ---

export type CategoryConfig = {
  icon: typeof Calendar;
  color: string;
  bg: string;
};

// --- Constants ---

export const DEFAULT_CATEGORY_CONFIG: CategoryConfig = {
  icon: MoreHorizontal,
  color: "text-zinc-400",
  bg: "bg-zinc-500/10 border-zinc-500/20",
};

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  workout: {
    icon: Dumbbell,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  meal: {
    icon: Utensils,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  supplement: {
    icon: Pill,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  work: {
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  rest: {
    icon: Coffee,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  sleep: {
    icon: Moon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  personal: {
    icon: User,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  other: {
    icon: MoreHorizontal,
    color: "text-zinc-400",
    bg: "bg-zinc-500/10 border-zinc-500/20",
  },
};

export const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// --- Helpers ---

export function getCategoryConfig(
  category: string | null | undefined,
): CategoryConfig {
  return CATEGORY_CONFIG[category ?? "other"] ?? DEFAULT_CATEGORY_CONFIG;
}

export function parseTime(time: string): number {
  const parts = time.split(":").map(Number);
  const hours = parts[0] ?? 0;
  const minutes = parts[1] ?? 0;
  return hours * 60 + minutes;
}

export function formatTimeRange(start: string, end: string): string {
  return `${start} - ${end}`;
}

export function getBlockHeight(
  startTime: string,
  endTime: string,
  granularity: "15min" | "30min" | "1hr",
): number {
  const duration = parseTime(endTime) - parseTime(startTime);
  const slotMinutes =
    granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
  return Math.max(1, Math.round(duration / slotMinutes));
}

export function getBlockTop(
  startTime: string,
  dayStart: string,
  granularity: "15min" | "30min" | "1hr",
): number {
  const diff = parseTime(startTime) - parseTime(dayStart);
  const slotMinutes =
    granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
  return Math.max(0, Math.round(diff / slotMinutes));
}

export function generateTimeSlots(
  start: string,
  end: string,
  granularity: "15min" | "30min" | "1hr",
): string[] {
  const slots: string[] = [];
  const slotMinutes =
    granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
  let current = parseTime(start);
  const endMin = parseTime(end);

  while (current <= endMin) {
    const hours = Math.floor(current / 60);
    const mins = current % 60;
    slots.push(
      `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`,
    );
    current += slotMinutes;
  }
  return slots;
}
