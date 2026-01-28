/**
 * Hotel component
 */
export { Hotel } from "./component";
export { HotelPropsSchema, HotelDefinition, type HotelProps } from "./schema";

// Hexagonal architecture exports
export type {
  HotelPort,
  HotelStatePort,
  HotelData,
  HotelStatus,
  StatusVariantType,
} from "./ports";
export {
  createHotelAdapter,
  createHotelStateAdapter,
  getHotelAdapter,
  getHotelStateAdapter,
} from "./adapters";
export {
  useHotelLogic,
  type UseHotelLogicOptions,
  type UseHotelLogicReturn,
} from "./hooks";
