"use client";

import { memo, useState, useMemo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import {
  type CalendarEventItem,
  formatDateHeader,
  groupEventsByDate,
  EventCard,
  EventDetailView,
} from "./components";

export const CalendarAgenda = memo(function CalendarAgenda({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    events: initialEvents,
    selectedDate,
  } = element.props as {
    title?: string | null;
    events?: CalendarEventItem[] | null;
    selectedDate?: string;
  };

  const [selectedEvent, setSelectedEvent] = useState<CalendarEventItem | null>(
    null,
  );
  const events = initialEvents || [];
  const groupedEvents = useMemo(() => groupEventsByDate(events), [events]);
  const currentDate = selectedDate ? new Date(selectedDate) : new Date();

  return (
    <div className="flex flex-col h-[600px] w-full bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden isolate">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {selectedEvent ? (
          <EventDetailView
            key="detail"
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >
            <div className="p-6 pb-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                  {title || "Agenda"}
                </h2>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                  <CalendarIcon className="text-white/60" size={20} />
                </div>
              </div>

              <div className="text-sm font-bold text-indigo-400 uppercase tracking-widest pl-1 mb-2">
                {currentDate.toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar">
              {events.length === 0 ? (
                <EmptyState
                  icon={<CalendarIcon className="w-10 h-10" />}
                  message="No upcoming events"
                />
              ) : (
                <div className="space-y-8">
                  {Array.from(groupedEvents.entries()).map(
                    ([dateStr, dayEvents]) => {
                      const { label, sub } = formatDateHeader(
                        new Date(dateStr),
                      );
                      return (
                        <div key={dateStr} className="relative pl-4">
                          <div className="flex items-baseline gap-3 mb-4 sticky top-0 bg-zinc-950/80 backdrop-blur-xl py-2 z-10 -ml-4 pl-4 border-b border-white/5 w-[calc(100%+32px)]">
                            <span className="text-xl font-bold text-white">
                              {label}
                            </span>
                            <span className="text-sm font-medium text-white/40">
                              {sub}
                            </span>
                          </div>

                          <div className="absolute left-0 top-10 bottom-0 w-px bg-white/10" />

                          <div className="space-y-3">
                            {dayEvents.map((event) => (
                              <EventCard
                                key={event.id}
                                event={event}
                                onSelect={setSelectedEvent}
                                elementKey={element.key}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
});
