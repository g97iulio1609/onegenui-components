"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import type { DiaryProps } from "./schema";
import { DiaryEntryCard } from "./components";
import { getDiaryAdapter, getDiaryStateAdapter } from "./adapters";
import { useDiaryLogic } from "./hooks";

export const Diary = memo(function Diary({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    entries: initialEntries,
    selectedDate: initialSelectedDate,
    view = "single",
    showMoodTracker = true,
    showEnergyTracker = true,
    showGratitude = true,
    showLinkedEntities = true,
    lock: rawLock = false,
  } = element.props as DiaryProps;

  const lock = rawLock ?? false;

  // Get adapters
  const diaryAdapter = useMemo(() => getDiaryAdapter(), []);
  const stateAdapter = useMemo(() => getDiaryStateAdapter(), []);

  // Use custom hook for all logic
  const {
    selectedDate,
    displayEntries,
    selectedEntry,
    sortedEntries,
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleGoal,
  } = useDiaryLogic(element.key, diaryAdapter, stateAdapter, {
    initialEntries,
    initialSelectedDate,
    view,
    lock,
  });

  // AutoSave
  useDomainAutoSave("diary", element.key, {
    type: "diary",
    entries: displayEntries,
    selectedDate,
  });

  return (
    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight flex items-center gap-2 sm:gap-3">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
          {title || "Diary"}
        </h3>

        {view === "single" && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateDate(-1)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToToday}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 touch-manipulation"
            >
              Today
            </button>
            <button
              onClick={() => navigateDate(1)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {view === "single" ? (
          selectedEntry ? (
            <motion.div
              key={selectedEntry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DiaryEntryCard
                entry={selectedEntry}
                onToggleGoal={handleToggleGoal}
                lock={lock}
                elementKey={element.key}
                showMoodTracker={showMoodTracker}
                showEnergyTracker={showEnergyTracker}
                showGratitude={showGratitude}
                showLinkedEntities={showLinkedEntities}
              />
            </motion.div>
          ) : (
            <EmptyState
              icon={<BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />}
              message="No entry for this day"
            />
          )
        ) : (
          <div className="flex flex-col gap-2 sm:gap-3">
            {sortedEntries.length === 0 ? (
              <EmptyState
                icon={<BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />}
                message="No diary entries"
              />
            ) : (
              sortedEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <DiaryEntryCard
                    entry={entry}
                    onToggleGoal={handleToggleGoal}
                    lock={lock}
                    elementKey={element.key}
                    compact={view === "timeline"}
                    showMoodTracker={showMoodTracker}
                    showEnergyTracker={showEnergyTracker}
                    showGratitude={showGratitude}
                    showLinkedEntities={showLinkedEntities}
                  />
                </motion.div>
              ))
            )}
          </div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
});
