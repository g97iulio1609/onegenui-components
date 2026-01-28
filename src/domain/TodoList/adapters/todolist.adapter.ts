/**
 * TodoList Adapter - Implementation of TodoListPort
 */
import type { TodoListPort, TodoItem } from "../ports";

export function createTodoListAdapter(): TodoListPort {
  return {
    toggleItemStatus(items: TodoItem[], id: string): TodoItem[] {
      return items.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === "done" ? "pending" : "done";
          return { ...item, status: nextStatus };
        }
        if (item.subItems && item.subItems.length > 0) {
          return {
            ...item,
            subItems: this.toggleItemStatus(item.subItems, id),
          };
        }
        return item;
      });
    },

    countCompleted(items: TodoItem[]): number {
      let count = 0;
      for (const item of items) {
        if (item.status === "done") count++;
        if (item.subItems) {
          count += this.countCompleted(item.subItems);
        }
      }
      return count;
    },

    countTotal(items: TodoItem[]): number {
      let count = items.length;
      for (const item of items) {
        if (item.subItems) {
          count += this.countTotal(item.subItems);
        }
      }
      return count;
    },

    flattenItems(items: TodoItem[]): TodoItem[] {
      const result: TodoItem[] = [];
      for (const item of items) {
        result.push(item);
        if (item.subItems) {
          result.push(...this.flattenItems(item.subItems));
        }
      }
      return result;
    },
  };
}

// Singleton instance
let todoListAdapter: TodoListPort | null = null;

export function getTodoListAdapter(): TodoListPort {
  if (!todoListAdapter) {
    todoListAdapter = createTodoListAdapter();
  }
  return todoListAdapter;
}
