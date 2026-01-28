/**
 * Flight component
 */
export { Flight } from "./component";
export {
  FlightPropsSchema,
  FlightDefinition,
  type FlightProps,
} from "./schema";

// Hexagonal architecture exports
export type { FlightPort, FlightStatePort } from "./ports";
export {
  createFlightAdapter,
  createFlightStateAdapter,
  getFlightAdapter,
  getFlightStateAdapter,
} from "./adapters";
export {
  useFlightLogic,
  type UseFlightLogicOptions,
  type UseFlightLogicReturn,
} from "./hooks";
