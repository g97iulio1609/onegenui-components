import { z } from "zod";

/**
 * BookingForms component schema definition
 */
export const BookingFormsPropsSchema = z.object({});

/** Type inference for BookingForms props */
export type BookingFormsProps = z.infer<typeof BookingFormsPropsSchema>;

/**
 * BookingForms component definition for catalog registration
 */
export const BookingFormsDefinition = {
  name: "BookingForms" as const,
  props: BookingFormsPropsSchema,
  description: "BookingForms component",
  hasChildren: true,
};
