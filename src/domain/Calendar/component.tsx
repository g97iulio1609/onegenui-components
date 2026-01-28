"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import type { CalendarProps } from "./schema";
import {
  EventCard,
  DayCell,
  DAYS_SHORT,
  MONTHS,
  CATEGORY_CONFIG,
} from "./components";
import { getCalendarAdapter, getCalendarStateAdapter } from "./adapters";
import { useCalendarLogic } from "./hooks";

// --- Main Component ---

export const Calendar = memo(function Calendar({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    view: initialView = "month",
    selectedDate: initialSelectedDate,
    events: initialEvents,
    firstDayOfWeek = 1,
    highlightToday = true,
    lock: rawLock = false,
  } = element.props as CalendarProps;

  const lock = rawLock ?? false;

  // Get adapters
  const calendarAdapter = useMemo(() => getCalendarAdapter(), []);
  const stateAdapter = useMemo(() => getCalendarStateAdapter(), []);

  // Use custom hook for all logic
  const {
    currentView,
    selectedDate,
    displayEvents,
    calendarDays,
    eventsByDate,
    selectedDayEvents,
    currentMonth,
    currentYear,
    todayStr,
    selectedDateStr,
    setCurrentView,
    setSelectedDate,
    navigateMonth,
    goToToday,
    handleToggleEvent,
  } = useCalendarLogic(calendarAdapter, stateAdapter, {
    initialDate: initialSelectedDate ?? undefined,
    initialView,
    initialEvents,
    firstDayOfWeek,
    lock,
  });

  // AutoSave
  useDomainAutoSave("calendar", element.key, {
    type: "calendar",
    events: displayEvents,
    selectedDate: selectedDateStr,
    view: currentView,
  });

  // Ordered days for display
  const orderedDays = useMemo(() => {
    const days = [...DAYS_SHORT];
    const shifted = days.splice(0, firstDayOfWeek);
    return [...days, ...shifted];
  }, [firstDayOfWeek]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-5 h-5 text-indigo-500" />
          <h3 className="text-xl font-bold tracking-tight text-white">
            {title || "Calendar"}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* View Toggle */}
          <div className="flex rounded-lg border border-white/10 overflow-hidden">
            {(["month", "agenda"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setCurrentView(v)}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors",
                  currentView === v
                    ? "bg-indigo-500/20 text-indigo-400"
                    : "text-white/40 hover:text-white/60",
                )}
              >
                {v}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateMonth(-1)}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold text-white/60 hover:text-white hover:bg-white/5"
            >
              Today
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Month/Year Display */}
      <div className="text-lg font-bold text-white">
        {MONTHS[currentMonth]} {currentYear}
      </div>

      {currentView === "month" ? (
        /* Month View */
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-white/10">
            {orderedDays.map((day) => (
              <div
                key={day}
                className="py-2 text-center text-xs font-bold text-white/40 uppercase tracking-wider"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {calendarDays.map((date, i) => {
              const dateStr = date?.toISOString().split("T")[0] || "";
              const dayEvents = eventsByDate.get(dateStr) || [];
              const isToday = highlightToday && dateStr === todayStr;
              const isSelected = dateStr === selectedDateStr;

              return (
                <DayCell
                  key={i}
                  date={date}
                  events={dayEvents}
                  isToday={isToday}
                  isSelected={isSelected}
                  onClick={(d) => setSelectedDate(d)}
                  onToggleEvent={handleToggleEvent}
                  lock={lock}
                  elementKey={element.key}
                />
              );
            })}
          </div>
        </div>
      ) : (
        /* Agenda View */
        <div className="flex flex-col gap-3">
          {selectedDayEvents.length === 0 ? (
            <EmptyState
              icon={<CalendarIcon className="w-10 h-10" />}
              message="No events"
            />
          ) : (
            <AnimatePresence mode="popLayout">
              {selectedDayEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <EventCard
                    event={event}
                    onToggle={handleToggleEvent}
                    lock={lock}
                    elementKey={element.key}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      )}

      {/* Category Legend */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(CATEGORY_CONFIG)
          .slice(0, 6)
          .map(([key, config]) => (
            <div
              key={key}
              className="flex items-center gap-1.5 text-xs text-white/50"
            >
              <div className={cn("w-2 h-2 rounded-full", config.color)} />
              <span className="capitalize">{key}</span>
            </div>
          ))}
      </div>

      {children}
    </div>
  );
});
