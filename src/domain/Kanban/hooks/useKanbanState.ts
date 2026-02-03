/**
 * useKanbanState - Custom hook for Kanban state management
 */
import { useMemo, useCallback } from "react";
import { useElementState } from "@onegenui/react";
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

interface KanbanStateData extends Record<string, unknown> {
  itemMoves: Record<string, string>;
  subItemCompletions: Record<string, Record<string, boolean>>;
}

export function useKanbanState(
  elementKey: string,
  adapter: KanbanPort,
  options: UseKanbanStateOptions,
): UseKanbanStateReturn {
  const { initialColumns, lock } = options;

  const [state, updateState] = useElementState<KanbanStateData>(elementKey, {
    itemMoves: {},
    subItemCompletions: {},
  });

  const { itemMoves, subItemCompletions } = state;

  const displayColumns = useMemo(
    () => adapter.buildDisplayColumns(initialColumns, itemMoves),
    [adapter, initialColumns, itemMoves],
  );

  const moveItem = useCallback(
    (itemId: string, targetColId: string) => {
      if (lock) return;
      updateState({ itemMoves: { ...itemMoves, [itemId]: targetColId } });
    },
    [lock, itemMoves, updateState],
  );

  const toggleSubItem = useCallback(
    (itemId: string, subItemId: string) => {
      if (lock) return;
      const itemCompletions = subItemCompletions[itemId] || {};
      const current = itemCompletions[subItemId] ?? false;
      updateState({
        subItemCompletions: {
          ...subItemCompletions,
          [itemId]: { ...itemCompletions, [subItemId]: !current },
        },
      });
    },
    [lock, subItemCompletions, updateState],
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
