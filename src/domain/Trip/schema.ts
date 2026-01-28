import { z } from "zod";

/**
 * Trip component schema definition
 */
export const TripPropsSchema = z.object({});

/** Type inference for Trip props */
export type TripProps = z.infer<typeof TripPropsSchema>;

/**
 * Trip component definition for catalog registration
 */
export const TripDefinition = {
  name: "Trip" as const,
  props: TripPropsSchema,
  description: "Trip component",
  hasChildren: true,
};
