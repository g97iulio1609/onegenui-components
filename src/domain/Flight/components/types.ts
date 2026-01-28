import {
  StatusBadge,
  type StatusVariant,
} from "../../../utils/shared-components";

// --- Types ---

export type FlightData = {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    code: string;
    city: string;
    time: string;
    date?: string;
    terminal?: string;
  };
  arrival: {
    code: string;
    city: string;
    time: string;
    date?: string;
    terminal?: string;
  };
  gate?: string;
  seat?: string;
  class?: string;
  status?: "On Time" | "Delayed" | "Boarding" | "Departed" | "Cancelled";
  duration?: string;
  price?: {
    amount: number;
    currency: string;
  };
  bookingUrl?: string;
  stops?: number;
};

export type FlightTrip = {
  outbound: FlightData;
  return?: FlightData;
  totalPrice?: {
    amount: number;
    currency: string;
  };
  bookingUrl?: string;
};

// --- Constants ---

export const STATUS_VARIANT_MAP: Record<
  string,
  { variant: StatusVariant; pulse?: boolean }
> = {
  "On Time": { variant: "success" },
  Boarding: { variant: "info", pulse: true },
  Delayed: { variant: "warning" },
  Departed: { variant: "neutral" },
  Cancelled: { variant: "error" },
};

// --- Helpers ---

export function pairFlightsIntoTrips(flights: FlightData[]): FlightTrip[] {
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
}
