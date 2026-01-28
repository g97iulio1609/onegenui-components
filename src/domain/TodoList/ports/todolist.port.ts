/**
 * TodoList Port - Interface for todo operations
 */

export interface TodoItem {
  id: string;
  text: string;
  time?: string | null;
  priority?: "high" | "medium" | "low" | null;
  status?: "pending" | "in-progress" | "done" | null;
  subItems?: TodoItem[] | null;
}

export interface TodoListPort {
  /**
   * Toggle item status between done/pending (recursive)
   */
  toggleItemStatus(items: TodoItem[], id: string): TodoItem[];

  /**
   * Count completed items
   */
  countCompleted(items: TodoItem[]): number;

  /**
   * Count total items (including nested)
   */
  countTotal(items: TodoItem[]): number;

  /**
   * Flatten items for search/filter
   */
  flattenItems(items: TodoItem[]): TodoItem[];
}
