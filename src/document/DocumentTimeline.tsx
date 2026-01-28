"use client";

import { memo } from "react";
import type { Entity } from "@onegenui/vectorless";

export interface DocumentTimelineProps {
  entities: Entity[];
  onEntityClick?: (entity: Entity) => void;
}

interface TimelineEvent {
  entity: Entity;
  year: number;
  month?: number;
  day?: number;
}

function parseDate(value: string | undefined): number | null {
  if (!value) return null;
  // Try to extract year from various date formats
  const yearMatch = value.match(/\b(1[0-9]{3}|2[0-9]{3})\b/);
  if (yearMatch?.[1]) return parseInt(yearMatch[1], 10);
  return null;
}

export const DocumentTimeline = memo(function DocumentTimeline({
  entities,
  onEntityClick,
}: DocumentTimelineProps) {
  // Extract date entities and parse them
  const dateEntities = entities.filter(
    (e) => e.type === "date" || e.type === "event",
  );

  const events: TimelineEvent[] = dateEntities
    .map((entity) => {
      const year = parseDate(entity.value);
      if (!year) return null;
      return { entity, year };
    })
    .filter((e): e is TimelineEvent => e !== null)
    .sort((a, b) => a.year - b.year);

  if (events.length === 0) {
    return (
      <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm">
        No date entities found for timeline
      </div>
    );
  }

  const firstEvent = events[0];
  const lastEvent = events[events.length - 1];
  const minYear = firstEvent?.year ?? 0;
  const maxYear = lastEvent?.year ?? 0;
  const yearRange = Math.max(1, maxYear - minYear);

  return (
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white">
        Document Timeline
      </div>
      
      {/* Mobile: Vertical timeline */}
      <div className="block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y">
        <div className="relative pl-6 border-l-2 border-sky-500/30">
          {events.slice(0, 10).map((event) => (
            <div
              key={event.entity.id}
              className="relative mb-4 last:mb-0 cursor-pointer touch-manipulation"
              onClick={() => onEntityClick?.(event.entity)}
            >
              <div className="absolute -left-[1.625rem] top-0.5 w-3 h-3 rounded-full bg-sky-500 border-2 border-zinc-900 shadow" />
              <div className="text-xs font-semibold text-white">{event.year}</div>
              <div className="text-[0.625rem] text-zinc-400 truncate max-w-[12rem]">
                {event.entity.value.slice(0, 30)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal timeline */}
      <div className="hidden sm:block p-4 relative min-h-[6.25rem]">
        {/* Timeline line */}
        <div className="absolute top-[3.125rem] left-5 right-5 h-1 bg-zinc-700 rounded" />
        {/* Events */}
        <div className="flex justify-between pt-[3.75rem]">
          {events.slice(0, 10).map((event) => {
            const position =
              yearRange > 0 ? ((event.year - minYear) / yearRange) * 100 : 50;
            return (
              <div
                key={event.entity.id}
                style={{
                  position: "absolute",
                  left: `calc(${position}% + 0.625rem)`,
                  top: "2.5rem",
                  transform: "translateX(-50%)",
                }}
                className="text-center cursor-pointer touch-manipulation"
                onClick={() => onEntityClick?.(event.entity)}
              >
                <div className="w-4 h-4 rounded-full bg-sky-500 mx-auto mb-2 border-2 sm:border-3 border-zinc-900 shadow-md" />
                <div className="text-[0.625rem] sm:text-xs font-semibold text-white">
                  {event.year}
                </div>
                <div className="text-[0.5rem] sm:text-[0.625rem] text-zinc-500 max-w-[3.5rem] sm:max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  {event.entity.value.slice(0, 15)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="px-3 sm:px-4 py-1.5 sm:py-2 border-t border-white/10 text-[0.625rem] sm:text-xs text-zinc-500">
        {events.length} date/event entities found
      </div>
    </div>
  );
});
