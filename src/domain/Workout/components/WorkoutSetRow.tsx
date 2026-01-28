import { Check, Trash2 } from "lucide-react";
import { cn } from "../../../utils/cn";
import { WorkoutSet } from "../types";

interface WorkoutSetRowProps {
  set: WorkoutSet;
  index: number;
  lock: boolean;
  onUpdate: (field: keyof WorkoutSet, value: any) => void;
  onRemove: () => void;
}

export const WorkoutSetRow = ({
  set,
  index,
  lock,
  onUpdate,
  onRemove,
}: WorkoutSetRowProps) => {
  const isCompleted = set.completed;

  return (
    <div
      className={cn(
        "group relative grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 items-center p-2.5 rounded-xl transition-all duration-300 border text-sm",
        isCompleted
          ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-green-500/5 border-emerald-500/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10",
      )}
    >
      {/* Completion glow effect */}
      {isCompleted && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
      )}

      {/* Set Number */}
      <div className="flex justify-center items-center relative z-10">
        <span
          className={cn(
            "w-6 h-6 flex items-center justify-center rounded-lg text-[11px] font-bold transition-all duration-300",
            isCompleted
              ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
              : "bg-white/5 text-white/50 border border-white/10",
          )}
        >
          {set.setNumber || index + 1}
        </span>
      </div>

      {/* Weight Input */}
      <div className="relative z-10">
        {lock ? (
          <div
            className={cn(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white",
            )}
          >
            {set.weight ?? <span className="text-white/15">—</span>}
          </div>
        ) : (
          <input
            type="number"
            value={set.weight ?? ""}
            onChange={(e) =>
              onUpdate(
                "weight",
                e.target.value === "" ? null : parseFloat(e.target.value),
              )
            }
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className={cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-100" : "text-white",
            )}
            placeholder="—"
          />
        )}
      </div>

      {/* Reps Input */}
      <div className="relative z-10">
        {lock ? (
          <div
            className={cn(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white",
            )}
          >
            {set.reps ?? <span className="text-white/15">—</span>}
          </div>
        ) : (
          <input
            type="number"
            value={set.reps ?? ""}
            onChange={(e) =>
              onUpdate(
                "reps",
                e.target.value === "" ? null : parseFloat(e.target.value),
              )
            }
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className={cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-100" : "text-white",
            )}
            placeholder="—"
          />
        )}
      </div>

      {/* RPE Input */}
      <div className="relative z-10">
        {lock ? (
          <div
            className={cn(
              "text-center font-mono font-bold py-1.5",
              isCompleted ? "text-emerald-200/70" : "text-white/60",
            )}
          >
            {set.rpe ?? <span className="text-white/15">—</span>}
          </div>
        ) : (
          <input
            type="number"
            value={set.rpe ?? ""}
            onChange={(e) =>
              onUpdate(
                "rpe",
                e.target.value === "" ? null : parseFloat(e.target.value),
              )
            }
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            className={cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-200/80" : "text-white/80",
            )}
            placeholder="—"
          />
        )}
      </div>

      {/* Complete Toggle */}
      <div className="flex justify-center relative z-10">
        <button
          onClick={() => !lock && onUpdate("completed", !isCompleted)}
          disabled={lock}
          className={cn(
            "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 border",
            isCompleted
              ? "bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400/50 text-white shadow-lg shadow-emerald-500/40 scale-105"
              : "bg-white/5 border-white/10 text-white/20 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105",
            lock && "cursor-not-allowed opacity-50",
          )}
        >
          {isCompleted ? (
            <Check size={14} strokeWidth={3} className="drop-shadow-sm" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-white/10" />
          )}
        </button>
      </div>

      {/* Delete Button - Only visible on hover if not locked */}
      <div className="relative z-10">
        {!lock && (
          <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
            <button
              onClick={onRemove}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-red-400/40 hover:text-red-400 hover:bg-red-500/15 transition-all duration-200 border border-transparent hover:border-red-500/20"
            >
              <Trash2 size={13} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
