import {
  Calendar as CalendarIcon,
  Dumbbell,
  Utensils,
  Pill,
  Briefcase,
  Heart,
  Users,
  Plane,
  Bell,
  MoreHorizontal,
} from "lucide-react";

// --- Types ---

export type CategoryConfig = { icon: typeof CalendarIcon; color: string };

// --- Constants ---

export const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  workout: { icon: Dumbbell, color: "bg-emerald-500" },
  meal: { icon: Utensils, color: "bg-amber-500" },
  supplement: { icon: Pill, color: "bg-violet-500" },
  work: { icon: Briefcase, color: "bg-blue-500" },
  personal: { icon: Heart, color: "bg-pink-500" },
  health: { icon: Heart, color: "bg-red-500" },
  social: { icon: Users, color: "bg-cyan-500" },
  travel: { icon: Plane, color: "bg-indigo-500" },
  reminder: { icon: Bell, color: "bg-orange-500" },
  other: { icon: MoreHorizontal, color: "bg-zinc-500" },
};

export const DEFAULT_CATEGORY_CONFIG: CategoryConfig = {
  icon: MoreHorizontal,
  color: "bg-zinc-500",
};

// --- Helpers ---

export function getCategoryConfig(
  category: string | null | undefined,
): CategoryConfig {
  return CATEGORY_CONFIG[category ?? "other"] ?? DEFAULT_CATEGORY_CONFIG;
}

export function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getCalendarDays(
  year: number,
  month: number,
  firstDayOfWeek: number,
): (Date | null)[] {
  const days = getDaysInMonth(year, month);
  const firstDate = days[0];
  if (!firstDate) return [];
  const firstDay = firstDate.getDay();
  const leadingDays = (firstDay - firstDayOfWeek + 7) % 7;

  const calendar: (Date | null)[] = [];
  for (let i = 0; i < leadingDays; i++) {
    calendar.push(null);
  }
  calendar.push(...days);

  while (calendar.length % 7 !== 0) {
    calendar.push(null);
  }

  return calendar;
}

export function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
