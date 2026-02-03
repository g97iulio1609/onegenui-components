/**
 * useFlightLogic - Custom hook for flight state management
 * Separates business logic from presentation
 */

import { useMemo } from "react";
import { useElementState } from "@onegenui/react";
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
  updateTrips: (trips: FlightTrip[]) => void;
}

export function useFlightLogic(
  elementKey: string,
  flightAdapter: FlightPort,
  stateAdapter: FlightStatePort,
  options: UseFlightLogicOptions,
): UseFlightLogicReturn {
  const { trips, flights, lock = false } = options;

  // Compute initial trips from props
  const computedTrips = useMemo(
    () =>
      stateAdapter.computeDisplayTrips(
        trips,
        flights,
        flightAdapter.pairFlightsIntoTrips.bind(flightAdapter),
      ),
    [stateAdapter, flightAdapter, trips, flights],
  );

  // Synced state for flight data (sent to AI)
  const [{ localTrips }, updateState] = useElementState(elementKey, {
    localTrips: null as FlightTrip[] | null,
  });

  // Use local edits if available, otherwise computed trips
  const displayTrips = localTrips ?? computedTrips;
  const hasContent = displayTrips.length > 0;

  const updateTrips = (newTrips: FlightTrip[]) => {
    if (lock) return;
    updateState({ localTrips: newTrips });
  };

  return {
    displayTrips,
    hasContent,
    getTripKey: flightAdapter.getTripKey.bind(flightAdapter),
    isRoundTrip: flightAdapter.isRoundTrip.bind(flightAdapter),
    updateTrips,
  };
}
