/**
 * Shared hooks for domain components
 * Extracted patterns for streaming, selection, and error handling
 */

import { useMemo, useCallback, useState } from "react";

// --- useComponentStreaming ---

interface StreamingState<T> {
  data: T;
  isComplete: boolean;
  hasPartialData: boolean;
}

interface UseComponentStreamingOptions<T> {
  initialData: T | undefined | null;
  defaultValue: T;
  isValidData?: (data: T) => boolean;
}

/**
 * Hook for handling streaming data in components
 * Provides safe defaults and streaming state detection
 */
export function useComponentStreaming<T>({
  initialData,
  defaultValue,
  isValidData,
}: UseComponentStreamingOptions<T>): StreamingState<T> {
  const data = useMemo(() => {
    if (initialData === undefined || initialData === null) {
      return defaultValue;
    }
    return initialData;
  }, [initialData, defaultValue]);

  const hasPartialData = useMemo(() => {
    if (initialData === undefined || initialData === null) {
      return false;
    }
    if (isValidData) {
      return !isValidData(initialData);
    }
    // Default: arrays with some items are partial
    if (Array.isArray(initialData)) {
      return initialData.length > 0;
    }
    return true;
  }, [initialData, isValidData]);

  const isComplete = useMemo(() => {
    if (initialData === undefined || initialData === null) {
      return false;
    }
    if (isValidData) {
      return isValidData(initialData);
    }
    return true;
  }, [initialData, isValidData]);

  return { data, isComplete, hasPartialData };
}

// --- useComponentSelection ---

interface SelectionItem {
  id: string;
  [key: string]: unknown;
}

interface UseComponentSelectionOptions<T extends SelectionItem> {
  items: T[];
  elementKey: string;
  onSelect?: (item: T) => void;
}

/**
 * Hook for handling item selection in components
 * Integrates with the global selection context
 */
export function useComponentSelection<T extends SelectionItem>({
  items,
  elementKey,
  onSelect,
}: UseComponentSelectionOptions<T>) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = useMemo(() => {
    if (!selectedId) return null;
    return items.find((item) => item.id === selectedId) || null;
  }, [items, selectedId]);

  const handleSelect = useCallback(
    (item: T) => {
      setSelectedId(item.id);
      onSelect?.(item);
    },
    [onSelect],
  );

  const clearSelection = useCallback(() => {
    setSelectedId(null);
  }, []);

  const getSelectableProps = useCallback(
    (item: T) => ({
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": item.id,
      onClick: () => handleSelect(item),
    }),
    [elementKey, handleSelect],
  );

  return {
    selectedId,
    selectedItem,
    handleSelect,
    clearSelection,
    getSelectableProps,
  };
}

// --- useComponentError ---

interface ComponentError {
  type: "validation" | "runtime" | "data";
  message: string;
  details?: unknown;
}

interface UseComponentErrorOptions {
  componentName: string;
  onError?: (error: ComponentError) => void;
}

/**
 * Hook for consistent error handling in components
 */
export function useComponentError({
  componentName,
  onError,
}: UseComponentErrorOptions) {
  const [error, setError] = useState<ComponentError | null>(null);

  const setValidationError = useCallback(
    (message: string, details?: unknown) => {
      const err: ComponentError = {
        type: "validation",
        message,
        details,
      };
      console.warn(`[${componentName}] Validation error:`, message, details);
      setError(err);
      onError?.(err);
    },
    [componentName, onError],
  );

  const setRuntimeError = useCallback(
    (message: string, details?: unknown) => {
      const err: ComponentError = {
        type: "runtime",
        message,
        details,
      };
      console.error(`[${componentName}] Runtime error:`, message, details);
      setError(err);
      onError?.(err);
    },
    [componentName, onError],
  );

  const setDataError = useCallback(
    (message: string, details?: unknown) => {
      const err: ComponentError = {
        type: "data",
        message,
        details,
      };
      console.warn(`[${componentName}] Data error:`, message, details);
      setError(err);
      onError?.(err);
    },
    [componentName, onError],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    setValidationError,
    setRuntimeError,
    setDataError,
    clearError,
    hasError: error !== null,
  };
}

// --- useLockMode ---

/**
 * Hook for handling lock/edit mode in components
 */
export function useLockMode(lock: boolean | undefined) {
  const isLocked = lock ?? false;

  const guardedAction = useCallback(
    <T extends (...args: unknown[]) => unknown>(action: T) => {
      return ((...args: Parameters<T>) => {
        if (isLocked) return;
        return action(...args);
      }) as T;
    },
    [isLocked],
  );

  return {
    isLocked,
    guardedAction,
  };
}
