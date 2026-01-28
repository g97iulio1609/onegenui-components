"use client";

import { memo } from "react";
import { cn } from "../../../utils/cn";
import type { TimeBlock, DaySchedule } from "../schema";
import { DAYS_SHORT, getBlockTop, getBlockHeight } from "./utils";
import { TimeBlockCard } from "./time-block-card";

export const DayColumn = memo(function DayColumn({
  day,
  blocks,
  timeSlots,
  granularity,
  dayStart,
  slotHeight,
  onToggle,
  lock,
  elementKey,
  isToday,
  showHeader,
}: {
  day: DaySchedule;
  blocks: TimeBlock[];
  timeSlots: string[];
  granularity: "15min" | "30min" | "1hr";
  dayStart: string;
  slotHeight: number;
  onToggle: (id: string) => void;
  lock: boolean;
  elementKey: string;
  isToday: boolean;
  showHeader: boolean;
}) {
  const date = new Date(day.date);
  const dayNum = date.getDate();
  const dayName = DAYS_SHORT[date.getDay()];

  return (
    <div className="flex-1 min-w-[140px] relative">
      {showHeader && (
        <div
          className={cn(
            "sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-sm border-b border-white/5 p-2 text-center",
            isToday && "bg-indigo-500/10 border-indigo-500/20",
          )}
        >
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
            {dayName}
          </div>
          <div
            className={cn(
              "text-lg font-bold",
              isToday ? "text-indigo-400" : "text-white",
            )}
          >
            {dayNum}
          </div>
        </div>
      )}

      <div
        className="relative"
        style={{ height: `${timeSlots.length * slotHeight}px` }}
      >
        {timeSlots.map((slot, i) => (
          <div
            key={slot}
            className="absolute left-0 right-0 border-b border-white/5"
            style={{ top: `${i * slotHeight}px`, height: `${slotHeight}px` }}
          />
        ))}

        {blocks.map((block) => {
          const topSlot = getBlockTop(block.startTime, dayStart, granularity);
          const heightSlots = getBlockHeight(
            block.startTime,
            block.endTime,
            granularity,
          );

          return (
            <div
              key={block.id}
              style={{ top: `${topSlot * slotHeight}px` }}
              className="absolute left-0 right-0"
            >
              <TimeBlockCard
                block={block}
                onToggle={onToggle}
                lock={lock}
                elementKey={elementKey}
                slotHeight={slotHeight}
                slots={heightSlots}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
