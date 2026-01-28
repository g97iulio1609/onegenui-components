/**
 * Kanban Port - Interface for kanban operations
 */
import type { KanbanItem, KanbanColumn, DisplayColumn } from "../components";

export interface KanbanPort {
  /**
   * Build display columns from initial columns with item moves applied
   */
  buildDisplayColumns(
    columns: KanbanColumn[],
    itemMoves: Record<string, string>,
  ): DisplayColumn[];

  /**
   * Get total item count across all columns
   */
  getTotalItemCount(columns: DisplayColumn[]): number;
}

export interface KanbanDragPort {
  /**
   * Check if drop is valid (different column)
   */
  isValidDrop(fromColId: string, targetColId: string): boolean;
}

export type { KanbanItem, KanbanColumn, DisplayColumn };
