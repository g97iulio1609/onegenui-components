"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RoundTripCard,
  SingleFlightCard,
  type FlightData,
  type FlightTrip,
} from "./components";
import { getFlightAdapter, getFlightStateAdapter } from "./adapters";
import { useFlightLogic } from "./hooks";

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: "-0.625rem" },
  visible: { opacity: 1, y: 0 },
};

export const Flight = memo(function Flight({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    flights,
    trips,
    lock = false,
  } = element.props as {
    title?: string | null;
    flights?: FlightData[] | null;
    trips?: FlightTrip[] | null;
    lock?: boolean;
  };

  const flightAdapter = getFlightAdapter();
  const stateAdapter = getFlightStateAdapter();

  const { displayTrips, getTripKey, isRoundTrip } = useFlightLogic(
    flightAdapter,
    stateAdapter,
    { trips, flights, lock },
  );

  const totalPrice = useMemo(() => {
    return displayTrips.reduce((sum, trip) => {
      const outPrice = trip.outbound?.price?.amount || 0;
      const retPrice = trip.return?.price?.amount || 0;
      return sum + outPrice + retPrice;
    }, 0);
  }, [displayTrips]);

  const currency = displayTrips[0]?.outbound?.price?.currency || "EUR";

  useDomainAutoSave("flight", element.key, {
    title,
    trips: displayTrips,
    status: "search",
    totalPrice: totalPrice > 0 ? totalPrice : null,
    currency,
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 sm:gap-6 w-full"
    >
      {title && (
        <motion.h3
          variants={headerVariants}
          className="m-0 text-lg sm:text-xl font-bold text-foreground tracking-tight flex items-center gap-2"
        >
          <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
          {title}
        </motion.h3>
      )}

      <AnimatePresence mode="popLayout">
        {displayTrips.map((trip, i) => {
          const itemKey = getTripKey(trip, i);

          if (isRoundTrip(trip)) {
            return (
              <RoundTripCard
                key={itemKey}
                trip={trip}
                index={i}
                elementKey={element.key}
                lock={lock}
              />
            );
          }

          return (
            <SingleFlightCard
              key={itemKey}
              flight={trip.outbound}
              index={i}
              elementKey={element.key}
              lock={lock}
            />
          );
        })}
      </AnimatePresence>

      {children}
    </motion.div>
  );
});
