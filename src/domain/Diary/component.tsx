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
  } = useDiaryLogic(diaryAdapter, stateAdapter, {
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
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          {title || "Diary"}
        </h3>

        {view === "single" && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateDate(-1)}
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
              onClick={() => navigateDate(1)}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5"
            >
              <ChevronRight size={16} />
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
              icon={<BookOpen className="w-10 h-10" />}
              message="No entry for this day"
            />
          )
        ) : (
          <div className="flex flex-col gap-3">
            {sortedEntries.length === 0 ? (
              <EmptyState
                icon={<BookOpen className="w-10 h-10" />}
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
