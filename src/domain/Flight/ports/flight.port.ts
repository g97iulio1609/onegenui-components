/**
 * Flight Port - Interface for flight operations
 * Defines the contract for flight pairing and formatting
 */

import type { FlightData, FlightTrip } from "../components/types";

/**
 * Flight operations port
 */
export interface FlightPort {
  /**
   * Pair individual flights into round trips based on matching routes
   */
  pairFlightsIntoTrips(flights: FlightData[]): FlightTrip[];

  /**
   * Format price for display
   */
  formatPrice(amount: number, currency: string): string;

  /**
   * Generate a unique key for a trip
   */
  getTripKey(trip: FlightTrip, index: number): string;

  /**
   * Check if a trip is a round trip
   */
  isRoundTrip(trip: FlightTrip): boolean;
}

/**
 * Flight state management port
 */
export interface FlightStatePort {
  /**
   * Compute display trips from props
   */
  computeDisplayTrips(
    trips: FlightTrip[] | null | undefined,
    flights: FlightData[] | null | undefined,
    pairFn: (flights: FlightData[]) => FlightTrip[],
  ): FlightTrip[];
}
