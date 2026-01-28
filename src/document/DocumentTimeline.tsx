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
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: 16,
          textAlign: "center",
          color: "#666",
        }}
      >
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
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          fontWeight: 600,
        }}
      >
        Document Timeline
      </div>
      <div style={{ padding: 16, position: "relative", minHeight: 100 }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            height: 4,
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
          }}
        />
        {/* Events */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 60,
          }}
        >
          {events.slice(0, 10).map((event, i) => {
            const position =
              yearRange > 0 ? ((event.year - minYear) / yearRange) * 100 : 50;
            return (
              <div
                key={event.entity.id}
                style={{
                  position: "absolute",
                  left: `calc(${position}% + 10px)`,
                  top: 40,
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => onEntityClick?.(event.entity)}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                    margin: "0 auto 8px",
                    border: "3px solid white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                />
                <div style={{ fontSize: 12, fontWeight: 600 }}>
                  {event.year}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#666",
                    maxWidth: 80,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {event.entity.value.slice(0, 15)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          padding: "8px 16px",
          borderTop: "1px solid #e0e0e0",
          fontSize: 12,
          color: "#666",
        }}
      >
        {events.length} date/event entities found
      </div>
    </div>
  );
});
