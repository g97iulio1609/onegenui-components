/**
 * useTodoListLogic - Custom hook for TodoList state management
 */
import { useCallback, useMemo } from "react";
import { useElementState } from "@onegenui/react";
import type { TodoListPort, TodoItem } from "../ports";

export interface UseTodoListLogicOptions {
  initialItems: TodoItem[];
}

export interface UseTodoListLogicReturn {
  items: TodoItem[];
  completedCount: number;
  totalCount: number;
  toggleItem: (id: string) => void;
}

export function useTodoListLogic(
  elementKey: string,
  adapter: TodoListPort,
  options: UseTodoListLogicOptions,
): UseTodoListLogicReturn {
  const { initialItems } = options;
  const [state, updateState] = useElementState(elementKey, { items: initialItems });

  const items = state.items as TodoItem[];

  const toggleItem = useCallback(
    (id: string) => {
      updateState({ items: adapter.toggleItemStatus(items, id) });
    },
    [adapter, items, updateState],
  );

  const completedCount = useMemo(
    () => adapter.countCompleted(items),
    [adapter, items],
  );

  const totalCount = useMemo(() => adapter.countTotal(items), [adapter, items]);

  return {
    items,
    completedCount,
    totalCount,
    toggleItem,
  };
}
