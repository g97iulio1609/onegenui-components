/**
 * Shared utilities for domain components
 */

// Utility functions
export { cn } from "./cn";
export {
  resolveArrayProp,
  resolveValueProp,
  resolveString,
} from "./data-utils";
export {
  formatCurrency,
  formatDuration,
  formatDurationMinutes,
  formatTimeMMSS,
  formatDateShort,
  formatDateRange,
  formatCompactNumber,
  truncate,
} from "./format-utils";
export {
  getStatusTone,
  getProgressPercent,
  buildStatusLabel,
  getAccentColor,
} from "./media-utils";

// Shared UI components
export {
  StatusBadge,
  ProgressBar,
  EmptyState,
  SectionHeader,
  CardContainer,
  AccentBar,
  PerforatedDivider,
  InfoPill,
  ErrorState,
  Skeleton,
  SkeletonText,
  SkeletonCard,
  LoadingState,
  LoadingIndicator,
  type StatusVariant,
} from "./shared-components";

// Error handling
export {
  ComponentErrorBoundary,
  withErrorBoundary,
} from "./component-error-boundary";

// Shared hooks
export {
  useComponentStreaming,
  useComponentSelection,
  useComponentError,
  useLockMode,
} from "./component-hooks";

// Shared schemas
export * from "./shared-schemas";
