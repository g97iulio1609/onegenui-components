"use client";

import { memo } from "react";
import { Plane, Clock, ArrowRight, Calendar } from "lucide-react";
import { cn } from "../../../utils/cn";
import { StatusBadge } from "../../../utils/shared-components";
import { motion } from "framer-motion";
import type { FlightData } from "./types";
import { STATUS_VARIANT_MAP } from "./types";

export const FlightStatus = memo(function FlightStatus({
  status,
}: {
  status?: string;
}) {
  const config = status ? STATUS_VARIANT_MAP[status] : null;
  return (
    <StatusBadge
      label={status || "Scheduled"}
      variant={config?.variant || "neutral"}
      pulse={config?.pulse}
    />
  );
});

export const FlightSegment = memo(function FlightSegment({
  flight,
  label,
  isReturn = false,
  index = 0,
}: {
  flight: FlightData;
  label?: string;
  isReturn?: boolean;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isReturn ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="relative"
    >
      {label && (
        <div className="flex items-center gap-2 mb-4">
          <div
            className={cn(
              "info-pill",
              isReturn ? "bg-purple-500/10" : "bg-sky-500/10",
            )}
          >
            {isReturn ? (
              <ArrowRight className="w-2.5 h-2.5 rotate-180" />
            ) : (
              <ArrowRight className="w-2.5 h-2.5" />
            )}
            <span className={isReturn ? "text-purple-400" : "text-sky-400"}>
              {label}
            </span>
          </div>
          {flight.departure.date && (
            <div className="info-pill">
              <Calendar className="w-2.5 h-2.5" />
              {flight.departure.date}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-xl glass-surface flex items-center justify-center text-white/80 font-bold text-lg"
          >
            {flight.airline[0]}
          </motion.div>
          <div>
            <div className="font-bold text-foreground text-sm tracking-tight">
              {flight.airline}
            </div>
            <div className="text-mono-tech mt-0.5">{flight.flightNumber}</div>
          </div>
        </div>
        <FlightStatus status={flight.status} />
      </div>

      <div className="flex items-center justify-between relative">
        <div className="text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-display text-2xl sm:text-3xl"
          >
            {flight.departure.code}
          </motion.div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate">
            {flight.departure.city}
          </div>
          <div className="value-badge mt-1">{flight.departure.time}</div>
        </div>

        <div className="flex-1 px-4 sm:px-8 flex flex-col items-center justify-center relative">
          {flight.duration && (
            <div className="info-pill mb-2 z-10">
              <Clock className="w-2.5 h-2.5" />
              {flight.duration}
            </div>
          )}
          <div className="w-full h-0.5 bg-white/10 relative overflow-hidden">
            <motion.div
              className={cn(
                "absolute inset-y-0 left-0 w-1/2",
                isReturn
                  ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                  : "bg-gradient-to-r from-transparent via-sky-500 to-transparent",
              )}
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <Plane
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 stroke-1.5",
              isReturn
                ? "text-purple-400/50 -rotate-90"
                : "text-sky-400/50 rotate-90",
            )}
          />
        </div>

        <div className="text-right z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-display text-2xl sm:text-3xl"
          >
            {flight.arrival.code}
          </motion.div>
          <div className="text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate ml-auto">
            {flight.arrival.city}
          </div>
          <div className="value-badge mt-1">{flight.arrival.time}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-dashed border-white/5">
        {flight.departure.terminal && (
          <div>
            <div className="text-label mb-0.5">Terminal</div>
            <div className="text-sm font-semibold text-foreground">
              {flight.departure.terminal}
            </div>
          </div>
        )}
        {flight.gate && (
          <div>
            <div className="text-label mb-0.5">Gate</div>
            <div className="text-sm font-semibold text-foreground">
              {flight.gate}
            </div>
          </div>
        )}
        {flight.seat && (
          <div className="hidden sm:block">
            <div className="text-label mb-0.5">Seat</div>
            <div className="text-sm font-semibold text-foreground">
              {flight.seat}
            </div>
          </div>
        )}
        {flight.class && (
          <div className="hidden sm:block">
            <div className="text-label mb-0.5">Class</div>
            <div className="text-sm font-semibold text-foreground">
              {flight.class}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
});
