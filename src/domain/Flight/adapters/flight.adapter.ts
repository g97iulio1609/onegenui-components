/**
 * Flight Adapter - Implementation of FlightPort
 * Pure functions for flight operations
 */

import type { FlightPort, FlightStatePort } from "../ports";
import type { FlightData, FlightTrip } from "../components/types";

/**
 * Create a flight adapter with flight operations
 */
export function createFlightAdapter(): FlightPort {
  return {
    pairFlightsIntoTrips(flights: FlightData[]): FlightTrip[] {
      const trips: FlightTrip[] = [];
      const used = new Set<string>();

      for (const flight of flights) {
        if (used.has(flight.id)) continue;

        const returnFlight = flights.find((f) => {
          if (used.has(f.id) || f.id === flight.id) return false;
          return (
            f.departure.code === flight.arrival.code &&
            f.arrival.code === flight.departure.code
          );
        });

        if (returnFlight) {
          used.add(flight.id);
          used.add(returnFlight.id);

          const totalPrice = flight.price
            ? { amount: flight.price.amount, currency: flight.price.currency }
            : undefined;

          trips.push({
            outbound: flight,
            return: returnFlight,
            totalPrice,
            bookingUrl: flight.bookingUrl,
          });
        } else {
          used.add(flight.id);
          trips.push({ outbound: flight });
        }
      }

      return trips;
    },

    formatPrice(amount: number, currency: string): string {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency,
      }).format(amount);
    },

    getTripKey(trip: FlightTrip, index: number): string {
      return trip.outbound.id || `trip-${index}`;
    },

    isRoundTrip(trip: FlightTrip): boolean {
      return !!trip.return;
    },
  };
}

/**
 * Create a flight state adapter for state management
 */
export function createFlightStateAdapter(): FlightStatePort {
  return {
    computeDisplayTrips(
      trips: FlightTrip[] | null | undefined,
      flights: FlightData[] | null | undefined,
      pairFn: (flights: FlightData[]) => FlightTrip[],
    ): FlightTrip[] {
      const hasTrips = trips && trips.length > 0;
      const hasFlights = flights && flights.length > 0;

      if (hasTrips) return trips;
      if (hasFlights) return pairFn(flights);
      return [];
    },
  };
}

// Singleton instances for convenience
let flightAdapterInstance: FlightPort | null = null;
let stateAdapterInstance: FlightStatePort | null = null;

export function getFlightAdapter(): FlightPort {
  if (!flightAdapterInstance) {
    flightAdapterInstance = createFlightAdapter();
  }
  return flightAdapterInstance;
}

export function getFlightStateAdapter(): FlightStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createFlightStateAdapter();
  }
  return stateAdapterInstance;
}
