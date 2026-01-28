import { memo } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Video,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { StatusBadge } from "../../../utils/shared-components";
import type { CalendarEventItem } from "./utils";
import { formatEventTime, RESPONSE_TO_VARIANT } from "./utils";

interface EventDetailViewProps {
  event: CalendarEventItem;
  onBack: () => void;
}

export const EventDetailView = memo(function EventDetailView({
  event,
  onBack,
}: EventDetailViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex-1 overflow-auto flex flex-col h-full bg-zinc-950/50"
    >
      <div className="p-4 border-b border-white/10 flex items-center gap-2">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="text-sm font-bold text-white/40 uppercase tracking-widest">
          Event Details
        </span>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex gap-5 mb-8">
          <div
            className="w-1.5 rounded-full shadow-[0_0_15px_var(--accent)]"
            style={
              {
                backgroundColor: event.color || "var(--primary)",
                "--accent": event.color || "var(--primary)",
              } as React.CSSProperties
            }
          />
          <div>
            <h1 className="text-3xl font-black text-white leading-tight mb-2">
              {event.title}
            </h1>
            <div className="flex items-center gap-2 text-lg text-white/60">
              <CalendarIcon size={18} />
              {new Date(event.start).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-white/40 uppercase">
                  Time
                </div>
                <div className="font-semibold text-white">
                  {formatEventTime(event.start, event.end, event.allDay)}
                </div>
              </div>
            </div>

            {event.location && (
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase">
                    Location
                  </div>
                  <div className="font-semibold text-white">
                    {event.location}
                  </div>
                </div>
              </div>
            )}
          </div>

          {event.meetingLink && (
            <a
              href={event.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/20"
            >
              <Video size={18} /> Join Meeting
            </a>
          )}

          {event.description && (
            <div>
              <div className="text-sm font-bold text-white/50 mb-3 uppercase tracking-wider">
                About
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 text-white/80 leading-relaxed whitespace-pre-wrap">
                {event.description}
              </div>
            </div>
          )}

          {event.attendees && event.attendees.length > 0 && (
            <div>
              <div className="text-sm font-bold text-white/50 mb-3 uppercase tracking-wider">
                Attendees
              </div>
              <div className="flex flex-col gap-2">
                {event.attendees.map((attendee, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                      {(attendee.name || attendee.email)
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">
                        {attendee.name || attendee.email}
                      </div>
                      {attendee.name && (
                        <div className="text-xs text-white/40">
                          {attendee.email}
                        </div>
                      )}
                    </div>
                    {attendee.responseStatus && (
                      <StatusBadge
                        label={attendee.responseStatus}
                        variant={
                          RESPONSE_TO_VARIANT[attendee.responseStatus] ||
                          "neutral"
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});
