"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import type { RoutineSchedulerProps } from "./schema";
import { DayColumn, CATEGORY_CONFIG } from "./components";
import {
  getRoutineSchedulerAdapter,
  getRoutineSchedulerStateAdapter,
} from "./adapters";
import { useRoutineSchedulerLogic } from "./hooks";

// --- Main Component ---

export const RoutineScheduler = memo(function RoutineScheduler({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    view = "day",
    selectedDate: initialSelectedDate,
    days: initialDays,
    timeRange,
    granularity = "30min",
    lock = false,
    showCategories,
  } = element.props as RoutineSchedulerProps;

  const adapter = getRoutineSchedulerAdapter();
  const stateAdapter = getRoutineSchedulerStateAdapter();

  const {
    currentView,
    selectedDate,
    visibleDays,
    timeSlots,
    slotHeight,
    dayStart,
    todayStr,
    setCurrentView,
    setSelectedDate,
    navigateDate,
    handleToggleBlock,
    displayDays,
  } = useRoutineSchedulerLogic(element.key, adapter, stateAdapter, {
    initialDate: initialSelectedDate ?? undefined,
    initialView: view === "timeline" ? "day" : view,
    initialDays: initialDays || [],
    timeRange: timeRange ?? undefined,
    granularity,
    showCategories: showCategories ?? undefined,
    lock: lock ?? false,
  });

  // Note: useDomainAutoSave removed - useElementState handles syncing

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
          <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white">
            {title || "Routine"}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* View Toggle */}
          <div className="flex rounded-lg border border-white/10 overflow-hidden">
            {(["day", "week"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setCurrentView(v)}
                className={cn(
                  "px-2 sm:px-3 py-1 sm:py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors touch-manipulation",
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
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              onClick={() => navigateDate(-1)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedDate(todayStr)}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors touch-manipulation"
            >
              Today
            </button>
            <button
              onClick={() => navigateDate(1)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Date Display */}
      <div className="text-xs sm:text-sm text-white/50 font-mono">
        {currentView === "day"
          ? new Date(selectedDate).toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : `Week of ${new Date(visibleDays[0]?.date ?? selectedDate).toLocaleDateString(undefined, { month: "short", day: "numeric" })}`}
      </div>

      {/* Schedule Grid */}
      <div className="bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden">
        <div className="flex">
          {/* Time Labels */}
          <div className="w-10 sm:w-14 flex-shrink-0 border-r border-white/5">
            {currentView === "week" && (
              <div className="h-[3rem] sm:h-[3.75rem] border-b border-white/5" />
            )}
            {timeSlots.map((slot, i) => (
              <div
                key={slot}
                className="relative border-b border-white/5 text-[0.5rem] sm:text-[0.625rem] font-mono text-white/30"
                style={{ height: `${slotHeight}px` }}
              >
                <span className="absolute -top-2 left-1 sm:left-2">{slot}</span>
              </div>
            ))}
          </div>

          {/* Day Columns */}
          <div className="flex-1 flex overflow-x-auto touch-pan-x">
            <AnimatePresence mode="wait">
              {visibleDays.length === 0 ? (
                <div className="flex-1 py-8 sm:py-12">
                  <EmptyState
                    icon={<Calendar className="w-8 h-8 sm:w-10 sm:h-10" />}
                    message="No schedule"
                  />
                </div>
              ) : (
                visibleDays.map((day) => (
                  <DayColumn
                    key={day.date}
                    day={day}
                    blocks={day.blocks}
                    timeSlots={timeSlots}
                    granularity={granularity}
                    dayStart={dayStart}
                    slotHeight={slotHeight}
                    onToggle={handleToggleBlock}
                    lock={!!lock}
                    elementKey={element.key}
                    isToday={day.date === todayStr}
                    showHeader={currentView === "week"}
                  />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => {
          const Icon = config.icon;
          return (
            <div
              key={key}
              className="flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-white/50"
            >
              <Icon className="w-3 h-3" />
              <span className="capitalize">{key}</span>
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
});
