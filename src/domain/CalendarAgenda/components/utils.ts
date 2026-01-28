import type { StatusVariant } from "../../../utils/shared-components";

export const RESPONSE_TO_VARIANT: Record<string, StatusVariant> = {
  accepted: "success",
  declined: "error",
  tentative: "warning",
  needsAction: "neutral",
};

export interface CalendarEventItem {
  id: string;
  title: string;
  description?: string | null;
  location?: string | null;
  start: string;
  end?: string | null;
  allDay?: boolean;
  attendees?: Array<{
    email: string;
    name?: string;
    responseStatus?: string;
  }> | null;
  meetingLink?: string | null;
  color?: string | null;
}

export function formatEventTime(
  start: string,
  end?: string | null,
  allDay?: boolean,
): string {
  if (allDay) return "All day";
  try {
    const startDate = new Date(start);
    const startTime = startDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (end) {
      const endDate = new Date(end);
      const endTime = endDate.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${startTime} - ${endTime}`;
    }
    return startTime;
  } catch {
    return start;
  }
}

export function formatDateHeader(date: Date): { label: string; sub: string } {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isToday = date.toDateString() === today.toDateString();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();

  return {
    label: isToday
      ? "Today"
      : isTomorrow
        ? "Tomorrow"
        : date.toLocaleDateString(undefined, { weekday: "long" }),
    sub: date.toLocaleDateString(undefined, { day: "numeric", month: "short" }),
  };
}

export function groupEventsByDate(
  events: CalendarEventItem[],
): Map<string, CalendarEventItem[]> {
  const grouped = new Map<string, CalendarEventItem[]>();
  const sorted = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  );

  for (const event of sorted) {
    const date = new Date(event.start).toDateString();
    const existing = grouped.get(date) || [];
    existing.push(event);
    grouped.set(date, existing);
  }
  return grouped;
}
