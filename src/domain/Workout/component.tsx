"use client";

import { memo, useMemo } from "react";
import { Lock, Unlock, Activity, BicepsFlexed } from "lucide-react";
import { cn } from "../../utils/cn";
import { ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { WorkoutProps } from "./schema";
import { EmptyState } from "../../utils/shared-components";
import { SessionTimer } from "./components/session-timer";
import {
  ExerciseItemCard,
  SupersetGroup,
} from "./components/exercise-item-card";
import { getWorkoutAdapter, getWorkoutStateAdapter, ensureSeriesGeneratedDeep } from "./adapters";
import { useWorkoutLogic } from "./hooks";

export const Workout = memo(function Workout({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    items,
    exercises,
    lock: initialLock = false,
  } = element.props as WorkoutProps;

  const resolvedItems = useMemo(() => {
    const raw = items || exercises || [];
    const arr = Array.isArray(raw) ? raw : [];
    // Convert sets/reps to series array for rendering
    return ensureSeriesGeneratedDeep(arr);
  }, [items, exercises]);

  const workoutAdapter = getWorkoutAdapter();
  const stateAdapter = getWorkoutStateAdapter();

  // useWorkoutLogic now uses useElementState internally
  // State is automatically synced to Zustand -> Tree -> Supabase
  const {
    displayItems,
    expandedIds,
    isLocked,
    toggleExpand,
    toggleLock,
    updateExercise,
    updateSeries,
    addSet,
    removeSet,
  } = useWorkoutLogic(workoutAdapter, stateAdapter, {
    initialItems: resolvedItems,
    lock: initialLock,
    elementKey: element.key,
  });

  // Domain auto-save to separate workout table (for queries/analytics)
  useDomainAutoSave("workout", element.key, {
    title,
    date: new Date().toISOString(),
    items: displayItems,
    status: "active",
  });

  return (
    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {title && (
          <h3 className="m-0 text-base sm:text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2 sm:gap-3">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            {title}
          </h3>
        )}
        <div className="flex items-center gap-2 sm:gap-3">
          <SessionTimer />
          <button
            onClick={toggleLock}
            className={cn(
              "h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg border transition-colors touch-manipulation",
              isLocked
                ? "bg-red-500/10 border-red-500/20 text-red-500"
                : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white",
            )}
          >
            {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {displayItems.length === 0 ? (
          <EmptyState
            icon={<BicepsFlexed className="w-10 h-10 sm:w-12 sm:h-12" />}
            message="No exercises programmed"
          />
        ) : (
          displayItems.map((item) =>
            item.items && item.items.length > 0 ? (
              <SupersetGroup
                key={item.id}
                item={item}
                elementKey={element.key}
                expandedIds={expandedIds}
                isLocked={isLocked}
                onToggleExpand={toggleExpand}
                onUpdateExercise={updateExercise}
                onUpdateSeries={updateSeries}
                onAddSet={addSet}
                onRemoveSet={removeSet}
              />
            ) : (
              <ExerciseItemCard
                key={item.id}
                item={item}
                elementKey={element.key}
                isExpanded={expandedIds.has(item.id)}
                isLocked={isLocked}
                onToggleExpand={toggleExpand}
                onUpdateExercise={updateExercise}
                onUpdateSeries={updateSeries}
                onAddSet={addSet}
                onRemoveSet={removeSet}
              />
            ),
          )
        )}
      </div>

      {children}
    </div>
  );
});
