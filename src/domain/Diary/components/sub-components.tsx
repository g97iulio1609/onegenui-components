import { memo } from "react";
import { Zap, Moon, Check, Link } from "lucide-react";
import { cn } from "../../../utils/cn";
import { getMoodConfig, ENTITY_ICONS } from "./utils";

export const MoodBadge = memo(function MoodBadge({ mood }: { mood: string }) {
  const config = getMoodConfig(mood);
  const Icon = config.icon;
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg",
        config.color,
      )}
    >
      <Icon size={14} />
      <span className="text-xs font-bold">{config.label}</span>
    </div>
  );
});

export const EnergyBar = memo(function EnergyBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2">
      <Zap size={14} className="text-amber-400" />
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all"
          style={{ width: `${level * 10}%` }}
        />
      </div>
      <span className="text-xs font-mono text-white/40">{level}/10</span>
    </div>
  );
});

export const SleepInfo = memo(function SleepInfo({
  sleep,
}: {
  sleep: { hours?: number | null; quality?: string | null };
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-white/50">
      <Moon size={12} className="text-indigo-400" />
      {sleep.hours && <span>{sleep.hours}h</span>}
      {sleep.quality && (
        <span
          className={cn(
            "px-1.5 py-0.5 rounded text-[10px] font-bold",
            sleep.quality === "great" && "bg-emerald-500/20 text-emerald-400",
            sleep.quality === "good" && "bg-green-500/20 text-green-400",
            sleep.quality === "fair" && "bg-amber-500/20 text-amber-400",
            sleep.quality === "poor" && "bg-rose-500/20 text-rose-400",
          )}
        >
          {sleep.quality}
        </span>
      )}
    </div>
  );
});

export const GoalItem = memo(function GoalItem({
  goal,
  onToggle,
  lock,
}: {
  goal: { id: string; text: string; completed?: boolean | null };
  onToggle: (id: string) => void;
  lock: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-2 rounded-lg transition-colors cursor-pointer",
        goal.completed ? "bg-emerald-500/10" : "bg-white/5 hover:bg-white/10",
      )}
      onClick={() => !lock && onToggle(goal.id)}
    >
      <div
        className={cn(
          "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
          goal.completed
            ? "bg-emerald-500 border-emerald-500"
            : "border-white/20",
        )}
      >
        {goal.completed && <Check size={10} className="text-black" />}
      </div>
      <span
        className={cn(
          "text-sm",
          goal.completed && "line-through text-white/40",
        )}
      >
        {goal.text}
      </span>
    </div>
  );
});

export const LinkedEntityBadge = memo(function LinkedEntityBadge({
  entity,
}: {
  entity: { type: string; id: string; label?: string | null };
}) {
  const Icon = ENTITY_ICONS[entity.type] || Link;
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
      <Icon size={12} className="text-white/40" />
      <span className="text-xs text-white/60">
        {entity.label || entity.type}
      </span>
    </div>
  );
});
