"use client";

import { memo } from "react";
import { SelectableItem } from "@onegenui/react";
import { Pill, Check, X, Utensils } from "lucide-react";
import { cn } from "../../../utils/cn";
import { CATEGORY_COLORS } from "./utils";
import type { SupplementItem, ScheduledDose } from "../schema";

export interface SupplementCardProps {
  supplement: SupplementItem;
  dose?: ScheduledDose;
  onToggle: (suppId: string, doseId?: string) => void;
  onSkip: (suppId: string, doseId?: string) => void;
  lock: boolean;
  elementKey: string;
}

export const SupplementCard = memo(function SupplementCard({
  supplement,
  dose,
  onToggle,
  onSkip,
  lock,
  elementKey,
}: SupplementCardProps) {
  const isTaken = dose?.taken ?? false;
  const isSkipped = dose?.skipped ?? false;
  const categoryStyle =
    CATEGORY_COLORS[supplement.category] || CATEGORY_COLORS.other;

  return (
    <SelectableItem
      elementKey={elementKey}
      itemId={supplement.id}
      className={cn(
        "group relative p-3 rounded-xl border transition-all duration-200",
        isTaken
          ? "bg-emerald-500/10 border-emerald-500/20"
          : isSkipped
            ? "bg-zinc-800/50 border-zinc-700/50 opacity-50"
            : "bg-zinc-900/60 border-white/10 hover:border-white/20",
      )}
    >
      <div className="flex items-center gap-3">
        {/* Toggle Button */}
        <button
          onClick={() => !lock && onToggle(supplement.id, dose?.id)}
          disabled={lock}
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
            isTaken
              ? "bg-emerald-500 text-black"
              : "bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20",
          )}
        >
          {isTaken ? <Check size={16} strokeWidth={3} /> : <Pill size={14} />}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-sm font-semibold",
                isTaken && "line-through opacity-70",
                isSkipped && "line-through",
              )}
            >
              {supplement.name}
            </span>
            <span
              className={cn(
                "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                categoryStyle,
              )}
            >
              {supplement.category.replace("_", " ")}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-xs text-white/50">
            <span className="font-mono">{supplement.dosage}</span>
            {supplement.withFood && (
              <span className="flex items-center gap-1">
                <Utensils size={10} /> with food
              </span>
            )}
            {supplement.brand && <span>({supplement.brand})</span>}
          </div>
        </div>

        {/* Skip Button */}
        {!isTaken && !isSkipped && !lock && (
          <button
            onClick={() => onSkip(supplement.id, dose?.id)}
            className="w-6 h-6 rounded flex items-center justify-center text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <X size={12} />
          </button>
        )}

        {/* Time */}
        {dose?.scheduledTime && (
          <div className="text-[10px] font-mono text-white/30">
            {dose.scheduledTime}
          </div>
        )}
      </div>

      {supplement.notes && (
        <div className="mt-2 text-xs text-white/40 pl-11">
          {supplement.notes}
        </div>
      )}
    </SelectableItem>
  );
});
