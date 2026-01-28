/**
 * useCalendarLogic - Custom hook for calendar state management
 * Separates business logic from presentation
 */

import { useState, useMemo, useCallback } from "react";
import type { CalendarPort, CalendarStatePort } from "../ports";
import type { CalendarEvent, CalendarView } from "../schema";

export interface UseCalendarLogicOptions {
  initialDate?: string;
  initialView?: CalendarView;
  initialEvents?: CalendarEvent[];
  firstDayOfWeek?: number;
  lock?: boolean;
}

export interface UseCalendarLogicReturn {
  // State
  currentView: CalendarView;
  selectedDate: Date;
  displayEvents: CalendarEvent[];
  calendarDays: (Date | null)[];
  eventsByDate: Map<string, CalendarEvent[]>;
  selectedDayEvents: CalendarEvent[];

  // Derived
  currentMonth: number;
  currentYear: number;
  todayStr: string;
  selectedDateStr: string;

  // Actions
  setCurrentView: (view: CalendarView) => void;
  setSelectedDate: (date: Date) => void;
  navigateMonth: (direction: -1 | 1) => void;
  goToToday: () => void;
  handleToggleEvent: (eventId: string) => void;
}

export function useCalendarLogic(
  calendarAdapter: CalendarPort,
  stateAdapter: CalendarStatePort,
  options: UseCalendarLogicOptions,
): UseCalendarLogicReturn {
  const {
    initialDate,
    initialView = "month",
    initialEvents = [],
    firstDayOfWeek = 1,
    lock = false,
  } = options;

  // Local edits state
  const [localEdits, setLocalEdits] = useState<
    Record<string, Partial<CalendarEvent>>
  >({});

  // View state
  const [currentView, setCurrentView] = useState<CalendarView>(initialView);

  // Selected date state
  const [selectedDate, setSelectedDate] = useState(() => {
    if (initialDate) return new Date(initialDate);
    return new Date();
  });

  // Derived: merge events with local edits
  const displayEvents = useMemo(
    () => stateAdapter.mergeEdits(initialEvents, localEdits),
    [stateAdapter, initialEvents, localEdits],
  );

  // Derived: current month/year
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  // Derived: calendar grid
  const calendarDays = useMemo(
    () =>
      calendarAdapter.getCalendarDays(
        currentYear,
        currentMonth,
        firstDayOfWeek,
      ),
    [calendarAdapter, currentYear, currentMonth, firstDayOfWeek],
  );

  // Derived: events grouped by date
  const eventsByDate = useMemo(
    () => calendarAdapter.groupEventsByDate(displayEvents),
    [calendarAdapter, displayEvents],
  );

  // Derived: date strings
  const todayStr = calendarAdapter.toDateString(new Date());
  const selectedDateStr = calendarAdapter.toDateString(selectedDate);

  // Derived: events for selected day
  const selectedDayEvents = useMemo(
    () => eventsByDate.get(selectedDateStr) || [],
    [eventsByDate, selectedDateStr],
  );

  // Actions
  const navigateMonth = useCallback(
    (direction: -1 | 1) => {
      setSelectedDate((prev) => stateAdapter.navigateMonth(prev, direction));
    },
    [stateAdapter],
  );

  const goToToday = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const handleToggleEvent = useCallback(
    (eventId: string) => {
      if (lock) return;

      const event = displayEvents.find((e) => e.id === eventId);
      if (!event) return;

      setLocalEdits((prev) =>
        stateAdapter.toggleEventCompletion(
          prev,
          eventId,
          event.completed ?? false,
        ),
      );
    },
    [lock, displayEvents, stateAdapter],
  );

  return {
    // State
    currentView,
    selectedDate,
    displayEvents,
    calendarDays,
    eventsByDate,
    selectedDayEvents,

    // Derived
    currentMonth,
    currentYear,
    todayStr,
    selectedDateStr,

    // Actions
    setCurrentView,
    setSelectedDate,
    navigateMonth,
    goToToday,
    handleToggleEvent,
  };
}
