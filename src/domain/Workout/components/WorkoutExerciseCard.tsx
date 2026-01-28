import { memo } from "react";
import {
  Dumbbell,
  Plus,
  ChevronDown,
  Activity,
  Flame,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";
import { cn } from "../../../utils/cn";
import { ExerciseItem, WorkoutSet } from "../types";
import { WorkoutSetRow } from "./WorkoutSetRow";
import {
  ProgressRing,
  CardioDetails,
  getExerciseGradient,
} from "./exercise-parts";

interface WorkoutExerciseCardProps {
  exercise: ExerciseItem;
  lock: boolean;
  onUpdateExercise: (field: keyof ExerciseItem, value: any) => void;
  onUpdateSeries: (
    seriesId: string,
    field: keyof WorkoutSet,
    value: any,
  ) => void;
  onAddSet: () => void;
  onRemoveSet: (seriesId: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

// Get icon based on exercise type
const getExerciseIcon = (type?: string) => {
  switch (type) {
    case "cardio":
      return <Activity size={18} />;
    case "warmup":
      return <Flame size={18} />;
    default:
      return <Dumbbell size={18} />;
  }
};

export const WorkoutExerciseCard = memo(
  ({
    exercise,
    lock,
    onUpdateExercise,
    onUpdateSeries,
    onAddSet,
    onRemoveSet,
    isExpanded,
    onToggleExpand,
  }: WorkoutExerciseCardProps) => {
    // Series are now generated in the adapter via mergeEdits
    const series = exercise.series || [];

    const completedSets = series.filter((s) => s.completed).length;
    const totalSets = series.length;
    const progress = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
    const hasProgress = totalSets > 0;
    const isCardio = exercise.type === "cardio";

    return (
      <div
        className={cn(
          "group/card relative rounded-2xl overflow-hidden mb-3 transition-all duration-300",
          "bg-gradient-to-br from-white/[0.08] to-white/[0.02]",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.2)]",
          "hover:border-white/15 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3)]",
          "backdrop-blur-xl",
          isExpanded && "ring-1 ring-white/5",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" />

        {/* Header */}
        <div
          className="relative p-4 flex items-center gap-4 cursor-pointer select-none"
          onClick={onToggleExpand}
        >
          <div className="relative">
            {!isCardio && hasProgress && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ProgressRing progress={progress} size={48} />
              </div>
            )}
            <div
              className={cn(
                "relative z-10 p-2.5 rounded-xl shadow-lg ring-1 transition-transform duration-300 group-hover/card:scale-105 bg-gradient-to-br",
                getExerciseGradient(exercise.type),
              )}
            >
              {getExerciseIcon(exercise.type)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-bold text-white truncate pr-2 group-hover/card:text-blue-100 transition-colors">
              {exercise.name}
            </h3>
            <div className="text-xs text-white/40 flex items-center gap-2 mt-1 flex-wrap">
              {isCardio ? (
                <>
                  {exercise.duration && (
                    <span className="flex items-center gap-1 bg-violet-500/15 text-violet-300 px-2 py-0.5 rounded-full font-medium">
                      <Clock size={10} />
                      {exercise.duration}
                    </span>
                  )}
                  {exercise.intensity && (
                    <span className="flex items-center gap-1 bg-rose-500/15 text-rose-300 px-2 py-0.5 rounded-full font-medium capitalize">
                      <Flame size={10} />
                      {exercise.intensity}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <span className="font-semibold text-white/60">
                    {completedSets}/{totalSets} done
                  </span>
                  {hasProgress && (
                    <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {Math.round(progress)}%
                    </span>
                  )}
                  {exercise.reps && (
                    <span className="bg-white/5 px-2 py-0.5 rounded-full text-[10px] font-bold text-white/50">
                      {exercise.reps} reps
                    </span>
                  )}
                  {exercise.rpe && (
                    <span className="flex items-center gap-1 bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      <Target size={9} />
                      RPE {exercise.rpe}
                    </span>
                  )}
                </>
              )}
              {exercise.notes && !isExpanded && (
                <span className="text-white/30 text-[10px] italic truncate max-w-[120px]">
                  {exercise.notes}
                </span>
              )}
            </div>
          </div>

          <div
            className={cn(
              "p-2 rounded-lg transition-all duration-300",
              "text-white/20 group-hover/card:text-white/50",
              isExpanded && "bg-white/5 text-white/40",
            )}
          >
            <ChevronDown
              size={18}
              className={cn(
                "transition-transform duration-300",
                !isExpanded && "-rotate-90",
              )}
            />
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-4 pb-4 pt-0 border-t border-white/5">
            {(exercise.rationale || exercise.notes) && (
              <div className="mt-4 mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border-l-2 border-blue-500 rounded-r-lg">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-blue-300/60 mb-1">
                  <TrendingUp size={10} />
                  {exercise.rationale ? "Coach Notes" : "Notes"}
                </div>
                <p className="text-sm text-blue-200/80">
                  {exercise.rationale || exercise.notes}
                </p>
              </div>
            )}

            {isCardio ? (
              <div className="mt-4">
                <CardioDetails
                  duration={exercise.duration}
                  intensity={exercise.intensity}
                  notes={!exercise.rationale ? exercise.notes : undefined}
                />
              </div>
            ) : (
              <>
                {series.length > 0 && (
                  <div className="grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 mt-4 mb-2 px-2 text-[9px] uppercase font-bold text-white/25 tracking-[0.15em] text-center">
                    <span>Set</span>
                    <span>Weight</span>
                    <span>Reps</span>
                    <span>RPE</span>
                    <span>Done</span>
                    <span></span>
                  </div>
                )}
                <div className="space-y-1.5">
                  {series.map((set, idx) => (
                    <WorkoutSetRow
                      key={set.id || idx}
                      set={set}
                      index={idx}
                      lock={lock}
                      onUpdate={(field, val) =>
                        onUpdateSeries(set.id, field, val)
                      }
                      onRemove={() => onRemoveSet(set.id)}
                    />
                  ))}
                </div>
                {!lock && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddSet();
                    }}
                    className={cn(
                      "mt-4 w-full py-3 flex items-center justify-center gap-2 rounded-xl",
                      "border-2 border-dashed border-white/10",
                      "text-sm font-semibold text-white/30",
                      "transition-all duration-300",
                      "hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10",
                      "active:scale-[0.98]",
                      "group/add",
                    )}
                  >
                    <Plus
                      size={16}
                      className="transition-transform duration-300 group-hover/add:rotate-90"
                    />
                    Add Set
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
);
