"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { getTimingConfig } from "./utils";
import { SupplementCard } from "./supplement-card";
import type { SupplementItem, ScheduledDose } from "../schema";

export interface TimingGroupProps {
  timing: string;
  items: { supplement: SupplementItem; dose?: ScheduledDose }[];
  onToggle: (suppId: string, doseId?: string) => void;
  onSkip: (suppId: string, doseId?: string) => void;
  lock: boolean;
  elementKey: string;
}

export const TimingGroup = memo(function TimingGroup({
  timing,
  items,
  onToggle,
  onSkip,
  lock,
  elementKey,
}: TimingGroupProps) {
  const config = getTimingConfig(timing);
  const Icon = config.icon;
  const takenCount = items.filter((i) => i.dose?.taken).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      {/* Timing Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={14} className={config.color} />
          <span className="text-sm font-bold text-white">{config.label}</span>
        </div>
        <div className="text-xs font-mono text-white/40">
          {takenCount}/{items.length}
        </div>
      </div>

      {/* Supplements */}
      <div className="flex flex-col gap-2">
        {items.map(({ supplement, dose }) => (
          <SupplementCard
            key={supplement.id}
            supplement={supplement}
            dose={dose}
            onToggle={onToggle}
            onSkip={onSkip}
            lock={lock}
            elementKey={elementKey}
          />
        ))}
      </div>
    </motion.div>
  );
});
