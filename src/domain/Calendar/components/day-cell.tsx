"use client";

import { memo } from "react";
import { cn } from "../../../utils/cn";
import type { CalendarEvent } from "../schema";
import { EventCard } from "./event-card";

export const DayCell = memo(function DayCell({
  date,
  events,
  isToday,
  isSelected,
  onClick,
  onToggleEvent,
  lock,
  elementKey,
}: {
  date: Date | null;
  events: CalendarEvent[];
  isToday: boolean;
  isSelected: boolean;
  onClick: (date: Date) => void;
  onToggleEvent: (id: string) => void;
  lock: boolean;
  elementKey: string;
}) {
  if (!date) {
    return <div className="min-h-[100px] bg-zinc-950/30" />;
  }

  const maxVisibleEvents = 3;
  const visibleEvents = events.slice(0, maxVisibleEvents);
  const hiddenCount = events.length - maxVisibleEvents;

  return (
    <div
      className={cn(
        "min-h-[100px] p-1.5 border-b border-r border-white/5 cursor-pointer transition-colors",
        isSelected && "bg-indigo-500/10",
        isToday && "bg-emerald-500/5",
      )}
      onClick={() => onClick(date)}
    >
      <div
        className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium mb-1",
          isToday && "bg-emerald-500 text-black font-bold",
          isSelected && !isToday && "bg-indigo-500/30 text-indigo-300",
          !isToday && !isSelected && "text-white/60 hover:bg-white/5",
        )}
      >
        {date.getDate()}
      </div>
      <div className="flex flex-col gap-0.5">
        {visibleEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            compact
            onToggle={onToggleEvent}
            lock={lock}
            elementKey={elementKey}
          />
        ))}
        {hiddenCount > 0 && (
          <div className="text-[10px] text-white/30 pl-1.5">
            +{hiddenCount} more
          </div>
        )}
      </div>
    </div>
  );
});
