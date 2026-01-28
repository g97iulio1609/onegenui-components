/**
 * useFlightLogic - Custom hook for flight state management
 * Separates business logic from presentation
 */

import { useMemo } from "react";
import type { FlightPort, FlightStatePort } from "../ports";
import type { FlightData, FlightTrip } from "../components/types";

export interface UseFlightLogicOptions {
  trips?: FlightTrip[] | null;
  flights?: FlightData[] | null;
  lock?: boolean;
}

export interface UseFlightLogicReturn {
  displayTrips: FlightTrip[];
  hasContent: boolean;
  getTripKey: (trip: FlightTrip, index: number) => string;
  isRoundTrip: (trip: FlightTrip) => boolean;
}

export function useFlightLogic(
  flightAdapter: FlightPort,
  stateAdapter: FlightStatePort,
  options: UseFlightLogicOptions,
): UseFlightLogicReturn {
  const { trips, flights, lock = false } = options;

  const displayTrips = useMemo(
    () =>
      stateAdapter.computeDisplayTrips(
        trips,
        flights,
        flightAdapter.pairFlightsIntoTrips.bind(flightAdapter),
      ),
    [stateAdapter, flightAdapter, trips, flights],
  );

  const hasContent = displayTrips.length > 0;

  return {
    displayTrips,
    hasContent,
    getTripKey: flightAdapter.getTripKey.bind(flightAdapter),
    isRoundTrip: flightAdapter.isRoundTrip.bind(flightAdapter),
  };
}
