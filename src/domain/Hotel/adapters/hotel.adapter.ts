/**
 * Hotel Adapter - Implementation of HotelPort
 * Pure functions for hotel operations
 */

import type {
  HotelPort,
  HotelStatePort,
  HotelData,
  HotelStatus,
  StatusVariantType,
} from "../ports";

const STATUS_VARIANT_MAP: Record<HotelStatus, StatusVariantType> = {
  Available: "info",
  Booked: "success",
  Reserved: "success",
  "Sold Out": "error",
};

/**
 * Create a hotel adapter with hotel operations
 */
export function createHotelAdapter(): HotelPort {
  return {
    getStatusVariant(status: HotelStatus): StatusVariantType {
      return STATUS_VARIANT_MAP[status] || "neutral";
    },

    calculateNights(checkIn: string, checkOut: string): number {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end.getTime() - start.getTime();
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },

    calculateTotalPrice(
      pricePerNight: number,
      checkIn: string,
      checkOut: string,
    ): number {
      const nights = this.calculateNights(checkIn, checkOut);
      return pricePerNight * Math.max(1, nights);
    },

    formatAmenities(amenities: string[], limit: number): string[] {
      return amenities.slice(0, limit);
    },

    isBookable(status?: HotelStatus): boolean {
      if (!status) return true;
      return status === "Available";
    },
  };
}

/**
 * Create a hotel state adapter for selection management
 */
export function createHotelStateAdapter(): HotelStatePort {
  return {
    toggleSelection(
      selections: Record<string, boolean>,
      hotelId: string,
    ): Record<string, boolean> {
      const current = selections[hotelId] ?? false;
      return { ...selections, [hotelId]: !current };
    },

    getSelectedIds(selections: Record<string, boolean>): string[] {
      return Object.entries(selections)
        .filter(([, selected]) => selected)
        .map(([id]) => id);
    },

    filterByStatus(hotels: HotelData[], status?: HotelStatus): HotelData[] {
      if (!status) return hotels;
      return hotels.filter((hotel) => hotel.status === status);
    },

    sortByPrice(hotels: HotelData[], ascending: boolean): HotelData[] {
      return [...hotels].sort((a, b) => {
        const priceA = a.price?.amount ?? 0;
        const priceB = b.price?.amount ?? 0;
        return ascending ? priceA - priceB : priceB - priceA;
      });
    },
  };
}

// Singleton instances for convenience
let hotelAdapterInstance: HotelPort | null = null;
let stateAdapterInstance: HotelStatePort | null = null;

export function getHotelAdapter(): HotelPort {
  if (!hotelAdapterInstance) {
    hotelAdapterInstance = createHotelAdapter();
  }
  return hotelAdapterInstance;
}

export function getHotelStateAdapter(): HotelStatePort {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createHotelStateAdapter();
  }
  return stateAdapterInstance;
}
