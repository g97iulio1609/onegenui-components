/**
 * useBookingFormsLogic - Custom hook for booking form state management
 * Separates business logic from presentation
 * Uses useElementState for AI-synced state
 */

import { useState, useCallback, useMemo } from "react";
import { useElementState } from "@onegenui/react";
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

interface BookingFormsState extends Record<string, unknown> {
  activeTab: BookingType;
  flightForm: FlightFormData;
  hotelForm: HotelFormData;
}

export function useBookingFormsLogic(
  elementKey: string,
  validationAdapter: BookingFormsValidationPort,
  stateAdapter: BookingFormsStatePort,
  options: UseBookingFormsLogicOptions,
): UseBookingFormsLogicReturn {
  const { initialType = "flight", mode = "create" } = options;

  // AI-synced state via useElementState
  const [state, updateState] = useElementState<BookingFormsState>(elementKey, {
    activeTab: initialType,
    flightForm: stateAdapter.getDefaultFlightForm(),
    hotelForm: stateAdapter.getDefaultHotelForm(),
  });

  const { activeTab, flightForm, hotelForm } = state;

  // UI-only validation state (not synced to AI)
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
  const setActiveTab = useCallback(
    (tab: BookingType) => {
      updateState({ activeTab: tab });
    },
    [updateState],
  );

  const updateFlightField = useCallback(
    <K extends keyof FlightFormData>(field: K, value: FlightFormData[K]) => {
      const updated = stateAdapter.updateFlightField(flightForm, field, value);
      updateState({ flightForm: updated });
      setFlightValidation(null);
    },
    [stateAdapter, flightForm, updateState],
  );

  const updateHotelField = useCallback(
    <K extends keyof HotelFormData>(field: K, value: HotelFormData[K]) => {
      const updated = stateAdapter.updateHotelField(hotelForm, field, value);
      updateState({ hotelForm: updated });
      setHotelValidation(null);
    },
    [stateAdapter, hotelForm, updateState],
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
    updateState({ flightForm: stateAdapter.getDefaultFlightForm() });
    setFlightValidation(null);
  }, [stateAdapter, updateState]);

  const resetHotelForm = useCallback(() => {
    updateState({ hotelForm: stateAdapter.getDefaultHotelForm() });
    setHotelValidation(null);
  }, [stateAdapter, updateState]);

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
