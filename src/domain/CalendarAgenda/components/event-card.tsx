import { memo } from "react";
import { MapPin, Video, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CalendarEventItem } from "./utils";

interface EventCardProps {
  event: CalendarEventItem;
  onSelect: (e: CalendarEventItem) => void;
  elementKey: string;
}

export const EventCard = memo(function EventCard({
  event,
  onSelect,
  elementKey,
}: EventCardProps) {
  const eventColor = event.color || "var(--primary)";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01, x: 4 }}
      onClick={() => onSelect(event)}
      data-selectable-item
      data-element-key={elementKey}
      data-item-id={event.id}
      className="group relative pl-4 pr-4 py-4 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-white/10 cursor-pointer transition-all mb-3 overflow-hidden"
      style={{ "--accent": eventColor } as React.CSSProperties}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="flex flex-col gap-1 min-w-[70px]">
          <span className="text-xs font-bold text-white/50 font-mono">
            {new Date(event.start).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
          {event.end && (
            <span className="text-[10px] font-medium text-white/30 font-mono">
              {new Date(event.end).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-foreground leading-tight mb-1 group-hover:text-white transition-colors">
            {event.title}
          </h4>
          {event.location && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <MapPin size={10} className="text-white/40" />
              <span className="truncate">{event.location}</span>
            </div>
          )}
          {event.meetingLink && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold border border-[var(--accent)]/20 mt-1">
              <Video size={10} /> Video Call
            </div>
          )}
        </div>

        <ChevronRight
          size={16}
          className="text-white/20 group-hover:text-white/60 self-center"
        />
      </div>
    </motion.div>
  );
});
