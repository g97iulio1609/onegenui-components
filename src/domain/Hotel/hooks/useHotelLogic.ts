/**
 * useHotelLogic - Custom hook for hotel state management
 * Separates business logic from presentation
 */

import { useState, useMemo, useCallback } from "react";
import { useElementState } from "@onegenui/react";
import type {
  HotelPort,
  HotelStatePort,
  HotelData,
  HotelStatus,
} from "../ports";

interface HotelElementState extends Record<string, unknown> {
  selections: Record<string, boolean>;
}

export interface UseHotelLogicOptions {
  initialHotels: HotelData[];
  lock?: boolean;
}

export interface UseHotelLogicReturn {
  // State
  hotels: HotelData[];
  selections: Record<string, boolean>;
  filterStatus: HotelStatus | undefined;
  sortAscending: boolean;

  // Derived
  filteredHotels: HotelData[];
  selectedIds: string[];
  selectedCount: number;

  // Actions
  toggleSelection: (hotelId: string) => void;
  setFilterStatus: (status: HotelStatus | undefined) => void;
  toggleSortOrder: () => void;
  clearSelections: () => void;

  // Utilities
  getStatusVariant: HotelPort["getStatusVariant"];
  isBookable: HotelPort["isBookable"];
  calculateNights: HotelPort["calculateNights"];
  calculateTotalPrice: HotelPort["calculateTotalPrice"];
}

export function useHotelLogic(
  elementKey: string,
  hotelAdapter: HotelPort,
  stateAdapter: HotelStatePort,
  options: UseHotelLogicOptions,
): UseHotelLogicReturn {
  const { initialHotels, lock = false } = options;

  // Selection state (persisted via Zustand)
  const [elementState, updateElementState] = useElementState<HotelElementState>(
    elementKey,
    { selections: {} },
  );
  const { selections } = elementState;

  // Filter state
  const [filterStatus, setFilterStatus] = useState<HotelStatus | undefined>(
    undefined,
  );

  // Sort state
  const [sortAscending, setSortAscending] = useState(true);

  // Derived: filtered and sorted hotels
  const filteredHotels = useMemo(() => {
    const filtered = stateAdapter.filterByStatus(initialHotels, filterStatus);
    return stateAdapter.sortByPrice(filtered, sortAscending);
  }, [stateAdapter, initialHotels, filterStatus, sortAscending]);

  // Derived: selected IDs
  const selectedIds = useMemo(
    () => stateAdapter.getSelectedIds(selections),
    [stateAdapter, selections],
  );

  const selectedCount = selectedIds.length;

  // Actions
  const toggleSelection = useCallback(
    (hotelId: string) => {
      if (lock) return;
      updateElementState({
        selections: stateAdapter.toggleSelection(selections, hotelId),
      });
    },
    [lock, stateAdapter, selections, updateElementState],
  );

  const toggleSortOrder = useCallback(() => {
    setSortAscending((prev) => !prev);
  }, []);

  const clearSelections = useCallback(() => {
    if (lock) return;
    updateElementState({ selections: {} });
  }, [lock, updateElementState]);

  return {
    // State
    hotels: initialHotels,
    selections,
    filterStatus,
    sortAscending,

    // Derived
    filteredHotels,
    selectedIds,
    selectedCount,

    // Actions
    toggleSelection,
    setFilterStatus,
    toggleSortOrder,
    clearSelections,

    // Utilities from adapter
    getStatusVariant: hotelAdapter.getStatusVariant.bind(hotelAdapter),
    isBookable: hotelAdapter.isBookable.bind(hotelAdapter),
    calculateNights: hotelAdapter.calculateNights.bind(hotelAdapter),
    calculateTotalPrice: hotelAdapter.calculateTotalPrice.bind(hotelAdapter),
  };
}
