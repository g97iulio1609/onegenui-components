/**
 * BookingForms Adapter - Implementation of BookingForms ports
 * Pure functions for form validation and state management
 */

import type {
  BookingFormsValidationPort,
  BookingFormsStatePort,
  FlightFormData,
  HotelFormData,
  ValidationResult,
  BookingMode,
  BookingType,
} from "../ports";

/**
 * Create a validation adapter for booking forms
 */
export function createBookingFormsValidationAdapter(): BookingFormsValidationPort {
  return {
    validateFlightForm(data: FlightFormData): ValidationResult {
      const errors: Record<string, string> = {};

      if (!data.from || !this.isValidAirportCode(data.from)) {
        errors.from = "Valid airport code required";
      }
      if (!data.to || !this.isValidAirportCode(data.to)) {
        errors.to = "Valid airport code required";
      }
      if (data.from && data.to && data.from === data.to) {
        errors.to = "Destination must differ from origin";
      }
      if (!data.date) {
        errors.date = "Date required";
      }
      if (data.passengers < 1) {
        errors.passengers = "At least 1 passenger required";
      }

      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      };
    },

    validateHotelForm(data: HotelFormData): ValidationResult {
      const errors: Record<string, string> = {};

      if (!data.destination || data.destination.trim().length < 2) {
        errors.destination = "Destination required";
      }
      if (!data.checkIn) {
        errors.checkIn = "Check-in date required";
      }
      if (!data.checkOut) {
        errors.checkOut = "Check-out date required";
      }
      if (data.checkIn && data.checkOut && data.checkIn >= data.checkOut) {
        errors.checkOut = "Check-out must be after check-in";
      }
      if (data.guests < 1) {
        errors.guests = "At least 1 guest required";
      }

      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      };
    },

    isValidAirportCode(code: string): boolean {
      return /^[A-Z]{3}$/i.test(code.trim());
    },
  };
}

/**
 * Create a state adapter for booking forms
 */
export function createBookingFormsStateAdapter(): BookingFormsStatePort {
  return {
    getDefaultFlightForm(): FlightFormData {
      return {
        from: "",
        fromCity: "",
        to: "",
        toCity: "",
        date: null,
        passengers: 1,
      };
    },

    getDefaultHotelForm(): HotelFormData {
      return {
        destination: "",
        checkIn: null,
        checkOut: null,
        guests: 1,
      };
    },

    updateFlightField<K extends keyof FlightFormData>(
      form: FlightFormData,
      field: K,
      value: FlightFormData[K],
    ): FlightFormData {
      return { ...form, [field]: value };
    },

    updateHotelField<K extends keyof HotelFormData>(
      form: HotelFormData,
      field: K,
      value: HotelFormData[K],
    ): HotelFormData {
      return { ...form, [field]: value };
    },

    getActionLabel(mode: BookingMode): string {
      return mode === "create" ? "Search" : "Update";
    },

    getPromoText(type: BookingType): string {
      return type === "flight"
        ? "Best price guaranteed"
        : "Free cancellation available";
    },
  };
}

// Singleton instances for convenience
let validationAdapterInstance: BookingFormsValidationPort | null = null;
let stateAdapterInstance: BookingFormsStatePort | null = null;

export function getBookingFormsValidationAdapter(): BookingFormsValidationPort {
  if (!validationAdapterInstance) {
    validationAdapterInstance = createBookingFormsValidationAdapter();
  }
  return validationAdapterInstance;
}

export function getBookingFormsStateAdapter(): BookingFormsStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createBookingFormsStateAdapter();
  }
  return stateAdapterInstance;
}
