/**
 * BookingForms component
 */
export { BookingForms } from "./component";
export {
  BookingFormsPropsSchema,
  BookingFormsDefinition,
  type BookingFormsProps,
} from "./schema";

// Hexagonal architecture exports
export type {
  BookingType,
  BookingMode,
  FlightFormData,
  HotelFormData,
  BookingFormData,
  ValidationResult,
  BookingFormsValidationPort,
  BookingFormsStatePort,
} from "./ports";

export {
  createBookingFormsValidationAdapter,
  createBookingFormsStateAdapter,
  getBookingFormsValidationAdapter,
  getBookingFormsStateAdapter,
} from "./adapters";

export {
  useBookingFormsLogic,
  type UseBookingFormsLogicOptions,
  type UseBookingFormsLogicReturn,
} from "./hooks";
