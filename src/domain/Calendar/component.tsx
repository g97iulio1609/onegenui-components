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

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
};

const eventVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" },
};

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

  const calendarAdapter = useMemo(() => getCalendarAdapter(), []);
  const stateAdapter = useMemo(() => getCalendarStateAdapter(), []);

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

  useDomainAutoSave("calendar", element.key, {
    type: "calendar",
    events: displayEvents,
    selectedDate: selectedDateStr,
    view: currentView,
  });

  const orderedDays = useMemo(() => {
    const days = [...DAYS_SHORT];
    const shifted = days.splice(0, firstDayOfWeek);
    return [...days, ...shifted];
  }, [firstDayOfWeek]);

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full">
      {/* Header - stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            {title || "Calendar"}
          </h3>
        </div>

        <div className="flex items-center gap-2 justify-between sm:justify-end">
          {/* View Toggle */}
          <div className="flex rounded-lg border border-white/10 overflow-hidden">
            {(["month", "agenda"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setCurrentView(v)}
                className={cn(
                  "px-2.5 sm:px-3 py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors min-h-[2.25rem] touch-manipulation",
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
              className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToToday}
              className="px-2 sm:px-3 py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 min-h-[2rem] touch-manipulation"
            >
              Today
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Month/Year Display */}
      <div className="text-base sm:text-lg font-bold text-foreground">
        {MONTHS[currentMonth]} {currentYear}
      </div>

      {currentView === "month" ? (
        /* Month View - responsive grid */
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Day Headers - abbreviated more on mobile */}
          <div className="grid grid-cols-7 border-b border-white/10">
            {orderedDays.map((day) => (
              <div
                key={day}
                className="py-1.5 sm:py-2 text-center text-[0.5625rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider"
              >
                <span className="sm:hidden">{day.charAt(0)}</span>
                <span className="hidden sm:inline">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-7"
          >
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
          </motion.div>
        </div>
      ) : (
        /* Agenda View */
        <div className="flex flex-col gap-2 sm:gap-3">
          {selectedDayEvents.length === 0 ? (
            <EmptyState
              icon={<CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
              message="No events"
            />
          ) : (
            <AnimatePresence mode="popLayout">
              {selectedDayEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={eventVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
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

      {/* Category Legend - scrollable on mobile */}
      <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-1">
        {Object.entries(CATEGORY_CONFIG)
          .slice(0, 6)
          .map(([key, config]) => (
            <div
              key={key}
              className="flex items-center gap-1 sm:gap-1.5 text-[0.5625rem] sm:text-xs text-white/50 whitespace-nowrap"
            >
              <div className={cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", config.color)} />
              <span className="capitalize">{key}</span>
            </div>
          ))}
      </div>

      {children}
    </div>
  );
});
