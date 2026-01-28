import { z } from "zod";

const flightDetailsSchema = z.object({
  code: z.string(),
  city: z.string(),
  time: z.string(),
  date: z.string().optional(),
  terminal: z.string().optional(),
});

const flightSchema = z.object({
  id: z.string().describe("Unique ID (REQUIRED)"),
  airline: z.string(),
  flightNumber: z.string(),
  departure: flightDetailsSchema,
  arrival: flightDetailsSchema,
  duration: z.string().describe("Flight duration (e.g. '7h 30m') - REQUIRED"),
  price: z
    .object({
      amount: z.number().describe("Price amount"),
      currency: z.string().default("EUR").describe("Currency code"),
    })
    .optional()
    .describe("Flight price"),
  bookingUrl: z.string().url().optional().describe("Deep link to booking page"),
  status: z
    .enum(["On Time", "Delayed", "Cancelled", "Boarding", "Departed"])
    .nullable()
    .optional(),
  gate: z.string().nullable().optional(),
  seat: z.string().nullable().optional(),
  class: z.string().nullable().optional(),
  foundBy: z.string().nullable().optional(),
});

const tripSchema = z.object({
  outbound: flightSchema.describe("Outbound flight details"),
  return: flightSchema
    .optional()
    .describe("Return flight details (for round trips)"),
  totalPrice: z
    .object({
      amount: z.number(),
      currency: z.string().default("EUR"),
    })
    .optional()
    .describe("Total price for round trip"),
  bookingUrl: z.string().url().optional().describe("Combined booking URL"),
});

export const FlightPropsSchema = z.object({
  title: z.string().nullable().optional(),
  flights: z
    .array(flightSchema)
    .optional()
    .describe(
      "List of individual flights (will be auto-paired into round trips if possible)",
    ),
  trips: z
    .array(tripSchema)
    .optional()
    .describe("Pre-defined round trips with outbound and return flights"),
  lock: z.boolean().nullable().optional(),
});

export type FlightProps = z.infer<typeof FlightPropsSchema>;

export const FlightDefinition = {
  name: "Flight" as const,
  props: FlightPropsSchema,
  description:
    "Flight details card with boarding pass style. Supports both individual flights and round trips. " +
    "When flights array is provided, it will automatically pair matching routes into round trips. " +
    "Alternatively, use trips array for explicit round trip definitions.",
  hasChildren: true,
};
