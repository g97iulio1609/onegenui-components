/**
 * WorkoutExerciseCard sub-components
 */

import { memo } from "react";
import { Clock, Flame } from "lucide-react";
import { cn } from "../../../utils/cn";

// Progress ring component for visual completion indicator
export const ProgressRing = memo(function ProgressRing({
  progress,
  size = 44,
}: {
  progress: number;
  size?: number;
}) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-white/5"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#progressGradient)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500 ease-out"
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#86efac" />
        </linearGradient>
      </defs>
    </svg>
  );
});

// Cardio details component
export const CardioDetails = memo(function CardioDetails({
  duration,
  intensity,
  notes,
}: {
  duration?: string | null;
  intensity?: string | null;
  notes?: string | null;
}) {
  const intensityColors: Record<string, string> = {
    low: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30",
    moderate:
      "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30",
    high: "from-rose-500/20 to-rose-600/10 text-rose-400 border-rose-500/30",
  };

  const getIntensityColor = (int?: string | null) => {
    if (!int) return intensityColors.moderate;
    const lower = int.toLowerCase();
    if (lower.includes("low") || lower.includes("easy"))
      return intensityColors.low;
    if (
      lower.includes("high") ||
      lower.includes("hard") ||
      lower.includes("intense")
    )
      return intensityColors.high;
    return intensityColors.moderate;
  };

  return (
    <div className="space-y-3">
      {/* Duration & Intensity Row */}
      <div className="flex gap-3">
        {duration && (
          <div className="flex-1 bg-gradient-to-br from-violet-500/15 to-violet-600/5 rounded-xl p-4 border border-violet-500/20">
            <div className="flex items-center gap-2 text-violet-300/60 text-[10px] uppercase tracking-widest font-bold mb-1">
              <Clock size={12} />
              Duration
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {duration}
            </div>
          </div>
        )}
        {intensity && (
          <div
            className={cn(
              "flex-1 bg-gradient-to-br rounded-xl p-4 border",
              getIntensityColor(intensity),
            )}
          >
            <div className="flex items-center gap-2 text-current/60 text-[10px] uppercase tracking-widest font-bold mb-1">
              <Flame size={12} />
              Intensity
            </div>
            <div className="text-lg font-bold text-current capitalize">
              {intensity}
            </div>
          </div>
        )}
      </div>

      {/* Notes */}
      {notes && (
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">
            Notes
          </div>
          <div className="text-sm text-white/70">{notes}</div>
        </div>
      )}
    </div>
  );
});

// Exercise type utilities
export const getExerciseIcon = (type?: string) => {
  switch (type) {
    case "cardio":
      return "activity";
    case "warmup":
      return "flame";
    default:
      return "dumbbell";
  }
};

export const getExerciseGradient = (type?: string) => {
  switch (type) {
    case "cardio":
      return "from-rose-500/25 to-pink-600/15 text-rose-400 ring-rose-500/20";
    case "warmup":
      return "from-amber-500/25 to-orange-600/15 text-amber-400 ring-amber-500/20";
    default:
      return "from-blue-500/25 to-indigo-600/15 text-blue-400 ring-blue-500/20";
  }
};
