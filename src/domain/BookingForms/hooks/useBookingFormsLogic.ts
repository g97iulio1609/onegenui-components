/**
 * useBookingFormsLogic - Custom hook for booking form state management
 * Separates business logic from presentation
 */

import { useState, useCallback, useMemo } from "react";
import type {
  BookingType,
  BookingMode,
  FlightFormData,
  HotelFormData,
  BookingFormsValidationPort,
  BookingFormsStatePort,
  ValidationResult,
} from "../ports";

export interface UseBookingFormsLogicOptions {
  initialType?: BookingType;
  mode?: BookingMode;
}

export interface UseBookingFormsLogicReturn {
  // State
  activeTab: BookingType;
  flightForm: FlightFormData;
  hotelForm: HotelFormData;
  flightValidation: ValidationResult | null;
  hotelValidation: ValidationResult | null;

  // Derived
  actionLabel: string;
  promoText: string;
  isFlightFormValid: boolean;
  isHotelFormValid: boolean;

  // Actions
  setActiveTab: (tab: BookingType) => void;
  updateFlightField: <K extends keyof FlightFormData>(
    field: K,
    value: FlightFormData[K],
  ) => void;
  updateHotelField: <K extends keyof HotelFormData>(
    field: K,
    value: HotelFormData[K],
  ) => void;
  validateFlight: () => ValidationResult;
  validateHotel: () => ValidationResult;
  resetFlightForm: () => void;
  resetHotelForm: () => void;
}

export function useBookingFormsLogic(
  validationAdapter: BookingFormsValidationPort,
  stateAdapter: BookingFormsStatePort,
  options: UseBookingFormsLogicOptions,
): UseBookingFormsLogicReturn {
  const { initialType = "flight", mode = "create" } = options;

  // Tab state
  const [activeTab, setActiveTab] = useState<BookingType>(initialType);

  // Form state
  const [flightForm, setFlightForm] = useState<FlightFormData>(() =>
    stateAdapter.getDefaultFlightForm(),
  );
  const [hotelForm, setHotelForm] = useState<HotelFormData>(() =>
    stateAdapter.getDefaultHotelForm(),
  );

  // Validation state
  const [flightValidation, setFlightValidation] =
    useState<ValidationResult | null>(null);
  const [hotelValidation, setHotelValidation] =
    useState<ValidationResult | null>(null);

  // Derived values
  const actionLabel = stateAdapter.getActionLabel(mode);
  const promoText = stateAdapter.getPromoText(activeTab);

  const isFlightFormValid = useMemo(
    () => validationAdapter.validateFlightForm(flightForm).isValid,
    [validationAdapter, flightForm],
  );

  const isHotelFormValid = useMemo(
    () => validationAdapter.validateHotelForm(hotelForm).isValid,
    [validationAdapter, hotelForm],
  );

  // Actions
  const updateFlightField = useCallback(
    <K extends keyof FlightFormData>(field: K, value: FlightFormData[K]) => {
      setFlightForm((prev) =>
        stateAdapter.updateFlightField(prev, field, value),
      );
      setFlightValidation(null);
    },
    [stateAdapter],
  );

  const updateHotelField = useCallback(
    <K extends keyof HotelFormData>(field: K, value: HotelFormData[K]) => {
      setHotelForm((prev) => stateAdapter.updateHotelField(prev, field, value));
      setHotelValidation(null);
    },
    [stateAdapter],
  );

  const validateFlight = useCallback(() => {
    const result = validationAdapter.validateFlightForm(flightForm);
    setFlightValidation(result);
    return result;
  }, [validationAdapter, flightForm]);

  const validateHotel = useCallback(() => {
    const result = validationAdapter.validateHotelForm(hotelForm);
    setHotelValidation(result);
    return result;
  }, [validationAdapter, hotelForm]);

  const resetFlightForm = useCallback(() => {
    setFlightForm(stateAdapter.getDefaultFlightForm());
    setFlightValidation(null);
  }, [stateAdapter]);

  const resetHotelForm = useCallback(() => {
    setHotelForm(stateAdapter.getDefaultHotelForm());
    setHotelValidation(null);
  }, [stateAdapter]);

  return {
    // State
    activeTab,
    flightForm,
    hotelForm,
    flightValidation,
    hotelValidation,

    // Derived
    actionLabel,
    promoText,
    isFlightFormValid,
    isHotelFormValid,

    // Actions
    setActiveTab,
    updateFlightField,
    updateHotelField,
    validateFlight,
    validateHotel,
    resetFlightForm,
    resetHotelForm,
  };
}
