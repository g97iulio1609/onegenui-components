"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

interface MacroMetricProps {
  label: string;
  value: number;
  max: number;
  color: string;
}

export const MacroMetric = memo(function MacroMetric({
  label,
  value,
  max,
  color,
}: MacroMetricProps) {
  const percentage = Math.min(100, (value / max) * 100);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between">
        <span>{label}</span>
        <span className="font-mono text-white/50">{Math.round(value)}g</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  );
});
