/**
 * BookingForms Port - Interface for form validation and state
 * Defines the contract for booking form operations
 */

export type BookingType = "flight" | "hotel";
export type BookingMode = "create" | "edit";

export interface FlightFormData {
  from: string;
  fromCity: string;
  to: string;
  toCity: string;
  date: string | null;
  passengers: number;
}

export interface HotelFormData {
  destination: string;
  checkIn: string | null;
  checkOut: string | null;
  guests: number;
}

export type BookingFormData = FlightFormData | HotelFormData;

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Form validation port
 */
export interface BookingFormsValidationPort {
  /**
   * Validate flight form data
   */
  validateFlightForm(data: FlightFormData): ValidationResult;

  /**
   * Validate hotel form data
   */
  validateHotelForm(data: HotelFormData): ValidationResult;

  /**
   * Check if airport code is valid format
   */
  isValidAirportCode(code: string): boolean;
}

/**
 * Form state management port
 */
export interface BookingFormsStatePort {
  /**
   * Get default flight form data
   */
  getDefaultFlightForm(): FlightFormData;

  /**
   * Get default hotel form data
   */
  getDefaultHotelForm(): HotelFormData;

  /**
   * Update flight form field
   */
  updateFlightField<K extends keyof FlightFormData>(
    form: FlightFormData,
    field: K,
    value: FlightFormData[K],
  ): FlightFormData;

  /**
   * Update hotel form field
   */
  updateHotelField<K extends keyof HotelFormData>(
    form: HotelFormData,
    field: K,
    value: HotelFormData[K],
  ): HotelFormData;

  /**
   * Get action button label based on mode
   */
  getActionLabel(mode: BookingMode): string;

  /**
   * Get promo text based on booking type
   */
  getPromoText(type: BookingType): string;
}
