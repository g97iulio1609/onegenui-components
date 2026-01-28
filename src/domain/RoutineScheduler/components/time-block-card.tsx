"use client";

import { memo } from "react";
import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import type { TimeBlock } from "../schema";
import { getCategoryConfig, formatTimeRange } from "./utils";

export const TimeBlockCard = memo(function TimeBlockCard({
  block,
  onToggle,
  lock,
  elementKey,
  slotHeight,
  slots,
}: {
  block: TimeBlock;
  onToggle: (id: string) => void;
  lock: boolean;
  elementKey: string;
  slotHeight: number;
  slots: number;
}) {
  const config = getCategoryConfig(block.category);
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ height: `${slots * slotHeight}px`, minHeight: "44px" }}
      data-selectable-item
      data-element-key={elementKey}
      data-item-id={block.id}
      className={cn(
        "absolute left-14 right-2 rounded-xl border p-2 overflow-hidden cursor-pointer transition-all group",
        config.bg,
        block.completed && "opacity-60",
      )}
      onClick={() => !lock && onToggle(block.id)}
    >
      <div className="flex items-start gap-2 h-full">
        <div
          className={cn(
            "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0",
            block.completed ? "bg-emerald-500" : "bg-white/10",
          )}
        >
          {block.completed ? (
            <Check size={12} className="text-black" />
          ) : (
            <Icon size={12} className={config.color} />
          )}
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
          <div
            className={cn(
              "text-sm font-semibold text-white truncate",
              block.completed && "line-through opacity-70",
            )}
          >
            {block.title}
          </div>
          <div className="text-[10px] text-white/50 font-mono mt-0.5">
            {formatTimeRange(block.startTime, block.endTime)}
          </div>
          {block.description && slots > 2 && (
            <div className="text-xs text-white/40 mt-1 line-clamp-2">
              {block.description}
            </div>
          )}
        </div>
        {block.priority === "high" && (
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
        )}
      </div>
    </motion.div>
  );
});
