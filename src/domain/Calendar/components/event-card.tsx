"use client";

import { memo } from "react";
import { Clock, MapPin } from "lucide-react";
import { cn } from "../../../utils/cn";
import { SelectableItem } from "@onegenui/react";
import type { CalendarEvent } from "../schema";
import { getCategoryConfig, formatTime } from "./utils";

export const EventDot = memo(function EventDot({
  event,
}: {
  event: CalendarEvent;
}) {
  const config = getCategoryConfig(event.category);
  return (
    <div
      className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", config.color)}
      title={event.title}
    />
  );
});

export const EventCard = memo(function EventCard({
  event,
  compact,
  onToggle,
  lock,
  elementKey,
}: {
  event: CalendarEvent;
  compact?: boolean;
  onToggle: (id: string) => void;
  lock: boolean;
  elementKey: string;
}) {
  const config = getCategoryConfig(event.category);
  const Icon = config.icon;

  if (compact) {
    return (
      <div
        className={cn(
          "text-[10px] px-1.5 py-0.5 rounded truncate cursor-pointer transition-opacity",
          config.color,
          "text-white font-medium",
          event.completed && "opacity-50 line-through",
        )}
        onClick={() => !lock && onToggle(event.id)}
        title={event.title}
      >
        {event.title}
      </div>
    );
  }

  return (
    <SelectableItem
      elementKey={elementKey}
      itemId={event.id}
      className={cn(
        "p-3 rounded-xl border transition-all cursor-pointer group",
        event.completed
          ? "bg-zinc-800/50 border-zinc-700/50 opacity-60"
          : "bg-zinc-900/60 border-white/10 hover:border-white/20",
      )}
    >
      <div
        className="flex items-start gap-3"
        onClick={() => !lock && onToggle(event.id)}
      >
        <div
          className={cn("w-1 h-full min-h-[40px] rounded-full", config.color)}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Icon size={12} className="text-white/40" />
            <span
              className={cn(
                "text-sm font-semibold text-white truncate",
                event.completed && "line-through",
              )}
            >
              {event.title}
            </span>
            {event.priority === "high" && (
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            )}
          </div>
          <div className="flex items-center gap-3 mt-1 text-xs text-white/40">
            {!event.allDay && (
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {formatTime(event.start)}
                {event.end && ` - ${formatTime(event.end)}`}
              </span>
            )}
            {event.allDay && <span>All day</span>}
            {event.location && (
              <span className="flex items-center gap-1 truncate">
                <MapPin size={10} />
                {event.location}
              </span>
            )}
          </div>
          {event.description && (
            <div className="text-xs text-white/30 mt-1 line-clamp-2">
              {event.description}
            </div>
          )}
        </div>
      </div>
    </SelectableItem>
  );
});
