"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Plane, Hotel, MapPin, Calendar, Wallet } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import type { TripProps } from "./schema";
import { formatCurrency } from "../../utils/format-utils";
import { StatusBadge, type StatusVariant } from "../../utils/shared-components";

// --- Types ---

type TripData = {
  id: string;
  title: string;
  dates?: {
    start: string;
    end: string;
  };
  destination?: string;
  status: "Upcoming" | "Completed" | "Draft" | "Cancelled";
  totalCost?: {
    amount: number;
    currency: string;
  };
  stats?: {
    flights: number;
    hotels: number;
    activities: number;
  };
  imageUrl?: string;
};

// Map trip status to badge variant
const STATUS_TO_VARIANT: Record<string, StatusVariant> = {
  Upcoming: "info",
  Completed: "success",
  Draft: "warning",
  Cancelled: "error",
};

export const Trip = memo(function Trip({
  element,
  children,
}: ComponentRenderProps) {
  const { title, trips, activeTripId } = element.props as {
    title?: string | null;
    trips?: TripData[] | null;
    activeTripId?: string | null;
  };

  const activeTrip = useMemo(
    () => trips?.find((t) => t.id === activeTripId),
    [trips, activeTripId],
  );

  // Auto-save trip data to database when it changes
  useDomainAutoSave(
    "trip",
    element.key,
    activeTrip
      ? {
          name: activeTrip.title,
          destinations: [activeTrip.destination],
          startDate: activeTrip.dates?.start,
          endDate: activeTrip.dates?.end,
          status: activeTrip.status?.toLowerCase() || "planning",
          budget: activeTrip.totalCost?.amount,
          currency: activeTrip.totalCost?.currency,
        }
      : null,
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
          {title || "My Trips"}
        </h2>
      </div>

      {/* Trip Selector / Cards */}
      {trips && trips.length > 0 && (
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-none snap-x snap-mandatory perspective-[1000px]">
          {trips.map((trip, index) => {
            const isActive = activeTripId === trip.id;

            return (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-selectable-item
                data-element-key={element.key}
                data-item-id={trip.id}
                className={cn(
                  "min-w-[280px] h-[180px] p-5 rounded-3xl cursor-pointer relative overflow-hidden group snap-center transition-all duration-500 border",
                  isActive
                    ? "border-primary/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] scale-100"
                    : "border-white/5 hover:border-white/20 bg-black/40 hover:bg-black/60 scale-[0.98] hover:scale-[1.0]",
                )}
              >
                {/* Background Image / Gradient */}
                <div className="absolute inset-0 z-0">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                      isActive
                        ? "from-indigo-600/20 to-purple-600/20 opacity-100"
                        : "from-zinc-900 to-black opacity-100",
                    )}
                  />
                  {/* Placeholder for future Image integration */}
                  {trip.imageUrl && (
                    <img
                      src={trip.imageUrl}
                      alt=""
                      className="w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5 text-white/90 font-bold tracking-tight bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                      <MapPin size={12} className="text-indigo-400" />
                      <span className="text-xs uppercase whitespace-nowrap">
                        {trip.destination || "Unknown"}
                      </span>
                    </div>
                    <StatusBadge
                      label={trip.status}
                      variant={STATUS_TO_VARIANT[trip.status] || "neutral"}
                    />
                  </div>

                  <div className="space-y-1">
                    <h4
                      className={cn(
                        "text-xl font-bold leading-tight transition-colors",
                        isActive ? "text-white" : "text-zinc-200",
                      )}
                    >
                      {trip.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-medium text-white/50">
                      <Calendar size={12} />
                      {trip.dates?.start
                        ? new Date(trip.dates.start).toLocaleDateString(
                            undefined,
                            { month: "short", day: "numeric" },
                          )
                        : "TBD"}
                      {" - "}
                      {trip.dates?.end
                        ? new Date(trip.dates.end).toLocaleDateString(
                            undefined,
                            { month: "short", day: "numeric" },
                          )
                        : "TBD"}
                    </div>
                  </div>

                  {/* Stats Strip */}
                  <div className="pt-4 mt-auto border-t border-white/10 flex items-center gap-4 text-xs font-medium text-white/60">
                    {trip.stats?.flights ? (
                      <span className="flex items-center gap-1">
                        <Plane size={12} className="text-sky-400" />{" "}
                        {trip.stats.flights} Flights
                      </span>
                    ) : null}
                    {trip.stats?.hotels ? (
                      <span className="flex items-center gap-1">
                        <Hotel size={12} className="text-amber-400" />{" "}
                        {trip.stats.hotels} Hotels
                      </span>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Trip Details & Children */}
      <AnimatePresence mode="wait">
        {activeTripId && (
          <motion.div
            key={activeTripId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Total Budget Overview if Available */}
            {activeTrip?.totalCost && (
              <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Total Budget
                    </div>
                    <div className="text-2xl font-bold tracking-tight font-mono">
                      {formatCurrency(
                        activeTrip.totalCost.amount,
                        activeTrip.totalCost.currency,
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full">
                  Estimated
                </div>
              </div>
            )}

            {/* Itinerary Container */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-white/10 space-y-8">
              {/* Render Children (Flights, Hotels, Activities) */}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
