"use client";

import { memo } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { SelectableItem } from "@onegenui/react";
import { PerforatedDivider } from "../../../utils/shared-components";
import { WorkoutExerciseCard } from "./WorkoutExerciseCard";
import type { ExerciseItem, WorkoutSet } from "../types";

interface ExerciseItemCardProps {
  item: ExerciseItem;
  elementKey: string;
  isExpanded: boolean;
  isLocked: boolean;
  onToggleExpand: (id: string) => void;
  onUpdateExercise: (id: string, field: keyof ExerciseItem, value: ExerciseItem[keyof ExerciseItem]) => void;
  onUpdateSeries: (
    exerciseId: string,
    seriesId: string,
    field: keyof WorkoutSet,
    value: WorkoutSet[keyof WorkoutSet],
  ) => void;
  onAddSet: (exerciseId: string) => void;
  onRemoveSet: (exerciseId: string, seriesId: string) => void;
}

export const ExerciseItemCard = memo(function ExerciseItemCard({
  item,
  elementKey,
  isExpanded,
  isLocked,
  onToggleExpand,
  onUpdateExercise,
  onUpdateSeries,
  onAddSet,
  onRemoveSet,
}: ExerciseItemCardProps) {
  const series = item.series || [];
  const completedSets = series.filter((s) => s.completed).length;
  const totalSets = series.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      key={item.id}
    >
      <SelectableItem
        elementKey={elementKey}
        itemId={item.id}
        className={cn(
          "group relative overflow-hidden rounded-2xl border transition-all duration-300 isolate",
          isExpanded
            ? "bg-zinc-900/80 border-white/20 shadow-2xl"
            : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10",
        )}
      >
        <div
          className={cn(
            "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
            isExpanded
              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
              : "bg-white/5",
          )}
        />

        <div
          onClick={() => onToggleExpand(item.id)}
          className="p-4 flex items-center gap-4 cursor-pointer relative z-20"
        >
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-all duration-300",
              isExpanded
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-300",
            )}
          >
            {item.name[0]}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-base font-bold text-white tracking-tight leading-tight group-hover:text-emerald-50 transition-colors">
              {item.name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono text-muted-foreground">
                {completedSets}/{totalSets} DONE
              </span>
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="text-xs font-mono text-muted-foreground">
                LAST: {series[series.length - 1]?.weight || "-"} KG
              </span>
            </div>
          </div>

          <div
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-lg transition-transform duration-300",
              isExpanded
                ? "bg-white/10 rotate-180 text-white"
                : "text-zinc-500",
            )}
          >
            <ChevronDown size={14} />
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="relative z-0"
            >
              <PerforatedDivider />

              <div className="p-4 pt-6 bg-black/20">
                <WorkoutExerciseCard
                  exercise={item}
                  lock={isLocked}
                  onUpdateExercise={(field, val) =>
                    onUpdateExercise(item.id, field, val)
                  }
                  onUpdateSeries={(sId, field, val) =>
                    onUpdateSeries(item.id, sId, field, val)
                  }
                  onAddSet={() => onAddSet(item.id)}
                  onRemoveSet={(sId) => onRemoveSet(item.id, sId)}
                  isExpanded={true}
                  onToggleExpand={() => {}}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SelectableItem>
    </motion.div>
  );
});

interface SupersetGroupProps {
  item: ExerciseItem;
  elementKey: string;
  expandedIds: Set<string>;
  isLocked: boolean;
  onToggleExpand: (id: string) => void;
  onUpdateExercise: (id: string, field: keyof ExerciseItem, value: ExerciseItem[keyof ExerciseItem]) => void;
  onUpdateSeries: (
    exerciseId: string,
    seriesId: string,
    field: keyof WorkoutSet,
    value: WorkoutSet[keyof WorkoutSet],
  ) => void;
  onAddSet: (exerciseId: string) => void;
  onRemoveSet: (exerciseId: string, seriesId: string) => void;
}

export const SupersetGroup = memo(function SupersetGroup({
  item,
  elementKey,
  expandedIds,
  isLocked,
  onToggleExpand,
  onUpdateExercise,
  onUpdateSeries,
  onAddSet,
  onRemoveSet,
}: SupersetGroupProps) {
  return (
    <div className="mb-6 relative pl-4 border-l border-dashed border-white/10">
      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600" />
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-zinc-900 border border-white/10 px-2 py-0.5 rounded">
          Superset
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {item.items?.map((sub) => (
          <ExerciseItemCard
            key={sub.id}
            item={sub}
            elementKey={elementKey}
            isExpanded={expandedIds.has(sub.id)}
            isLocked={isLocked}
            onToggleExpand={onToggleExpand}
            onUpdateExercise={onUpdateExercise}
            onUpdateSeries={onUpdateSeries}
            onAddSet={onAddSet}
            onRemoveSet={onRemoveSet}
          />
        ))}
      </div>
    </div>
  );
});
