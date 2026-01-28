/**
 * useKanbanState - Custom hook for Kanban state management
 */
import { useState, useMemo, useCallback } from "react";
import type { KanbanPort, KanbanColumn, DisplayColumn } from "../ports";

export interface UseKanbanStateOptions {
  initialColumns: KanbanColumn[];
  lock: boolean;
}

export interface UseKanbanStateReturn {
  displayColumns: DisplayColumn[];
  itemMoves: Record<string, string>;
  subItemCompletions: Record<string, Record<string, boolean>>;
  moveItem: (itemId: string, targetColId: string) => void;
  toggleSubItem: (itemId: string, subItemId: string) => void;
  isSubItemCompleted: (itemId: string, subItemId: string) => boolean;
}

export function useKanbanState(
  adapter: KanbanPort,
  options: UseKanbanStateOptions,
): UseKanbanStateReturn {
  const { initialColumns, lock } = options;

  const [itemMoves, setItemMoves] = useState<Record<string, string>>({});
  const [subItemCompletions, setSubItemCompletions] = useState<
    Record<string, Record<string, boolean>>
  >({});

  const displayColumns = useMemo(
    () => adapter.buildDisplayColumns(initialColumns, itemMoves),
    [adapter, initialColumns, itemMoves],
  );

  const moveItem = useCallback(
    (itemId: string, targetColId: string) => {
      if (lock) return;
      setItemMoves((prev) => ({ ...prev, [itemId]: targetColId }));
    },
    [lock],
  );

  const toggleSubItem = useCallback(
    (itemId: string, subItemId: string) => {
      if (lock) return;
      setSubItemCompletions((prev) => {
        const itemCompletions = prev[itemId] || {};
        const current = itemCompletions[subItemId] ?? false;
        return {
          ...prev,
          [itemId]: { ...itemCompletions, [subItemId]: !current },
        };
      });
    },
    [lock],
  );

  const isSubItemCompleted = useCallback(
    (itemId: string, subItemId: string) => {
      return subItemCompletions[itemId]?.[subItemId] ?? false;
    },
    [subItemCompletions],
  );

  return {
    displayColumns,
    itemMoves,
    subItemCompletions,
    moveItem,
    toggleSubItem,
    isSubItemCompleted,
  };
}
