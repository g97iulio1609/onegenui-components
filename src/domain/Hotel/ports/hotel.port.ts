/**
 * Hotel Port - Interface for hotel operations
 * Defines the contract for room selection, pricing, and display
 */

import type { HotelProps } from "../schema";

export type HotelStatus = "Available" | "Booked" | "Sold Out" | "Reserved";

export type StatusVariantType = "info" | "success" | "error" | "neutral";

export interface HotelData {
  id: string;
  name: string;
  rating?: number;
  address?: string;
  dates?: {
    checkIn: string;
    checkOut: string;
  };
  price?: {
    amount: number;
    currency: string;
    perNight?: boolean;
  };
  image?: string;
  amenities?: string[];
  status?: HotelStatus;
  roomType?: string;
  guests?: number;
  bookingUrl?: string;
}

/**
 * Hotel operations port
 */
export interface HotelPort {
  /**
   * Map hotel status to display variant
   */
  getStatusVariant(status: HotelStatus): StatusVariantType;

  /**
   * Calculate total nights between check-in and check-out
   */
  calculateNights(checkIn: string, checkOut: string): number;

  /**
   * Calculate total price for a stay
   */
  calculateTotalPrice(
    pricePerNight: number,
    checkIn: string,
    checkOut: string,
  ): number;

  /**
   * Format amenities for display (first N items)
   */
  formatAmenities(amenities: string[], limit: number): string[];

  /**
   * Check if hotel is bookable
   */
  isBookable(status?: HotelStatus): boolean;
}

/**
 * Hotel selection state port
 */
export interface HotelStatePort {
  /**
   * Toggle hotel selection
   */
  toggleSelection(
    selections: Record<string, boolean>,
    hotelId: string,
  ): Record<string, boolean>;

  /**
   * Get selected hotel IDs
   */
  getSelectedIds(selections: Record<string, boolean>): string[];

  /**
   * Filter hotels by status
   */
  filterByStatus(hotels: HotelData[], status?: HotelStatus): HotelData[];

  /**
   * Sort hotels by price (ascending or descending)
   */
  sortByPrice(hotels: HotelData[], ascending: boolean): HotelData[];
}
