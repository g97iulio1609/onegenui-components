import { z } from "zod";

/**
 * Hotel data schema for a single hotel
 */
const HotelDataSchema = z.object({
  id: z.string().describe("Unique identifier for the hotel"),
  name: z.string().describe("Hotel name"),
  rating: z.number().optional().describe("Hotel rating (e.g., 4.5)"),
  address: z.string().optional().describe("Hotel address"),
  dates: z
    .object({
      checkIn: z.string().describe("Check-in date (ISO format)"),
      checkOut: z.string().describe("Check-out date (ISO format)"),
    })
    .optional()
    .describe("Booking dates"),
  price: z
    .object({
      amount: z.number().describe("Price amount"),
      currency: z.string().describe("Currency code (e.g., EUR, USD)"),
      perNight: z.boolean().optional().describe("Whether price is per night"),
    })
    .optional()
    .describe("Price information"),
  image: z
    .string()
    .optional()
    .describe(
      "URL to hotel image - ALWAYS include when available from web search",
    ),
  amenities: z.array(z.string()).optional().describe("List of amenities"),
  status: z
    .enum(["Available", "Booked", "Sold Out", "Reserved"])
    .optional()
    .describe("Booking status"),
  roomType: z
    .string()
    .optional()
    .describe("Type of room (e.g., Double, Suite)"),
  guests: z.number().optional().describe("Number of guests"),
  bookingUrl: z
    .string()
    .optional()
    .describe("URL to the hotel booking page - ALWAYS include when available"),
});

/**
 * Hotel component schema definition
 */
export const HotelPropsSchema = z.object({
  title: z.string().optional().describe("Section title for the hotel list"),
  hotels: z
    .array(HotelDataSchema)
    .optional()
    .describe("Array of hotels to display"),
  layout: z
    .enum(["list", "card"])
    .optional()
    .describe("Display layout: 'list' (default) or 'card'"),
});

/** Type inference for Hotel props */
export type HotelProps = z.infer<typeof HotelPropsSchema>;

/**
 * Hotel component definition for catalog registration
 */
export const HotelDefinition = {
  name: "Hotel" as const,
  props: HotelPropsSchema,
  description:
    "Display hotel listings with images, ratings, prices, and booking links",
  hasChildren: true,
};
