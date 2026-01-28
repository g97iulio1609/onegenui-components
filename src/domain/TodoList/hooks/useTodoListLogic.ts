/**
 * useTodoListLogic - Custom hook for TodoList state management
 */
import { useState, useCallback, useEffect, useMemo } from "react";
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
  adapter: TodoListPort,
  options: UseTodoListLogicOptions,
): UseTodoListLogicReturn {
  const { initialItems } = options;
  const [items, setItems] = useState<TodoItem[]>(initialItems);

  // Sync with prop changes
  useEffect(() => {
    if (initialItems) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const toggleItem = useCallback(
    (id: string) => {
      setItems((prev) => adapter.toggleItemStatus(prev, id));
    },
    [adapter],
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
