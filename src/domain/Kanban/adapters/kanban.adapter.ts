/**
 * Kanban Adapter - Implementation of KanbanPort
 */
import type {
  KanbanPort,
  KanbanDragPort,
  KanbanColumn,
  DisplayColumn,
} from "../ports";

export function createKanbanAdapter(): KanbanPort {
  return {
    buildDisplayColumns(
      columns: KanbanColumn[],
      itemMoves: Record<string, string>,
    ): DisplayColumn[] {
      const colMap = new Map<string, DisplayColumn>();

      columns.forEach((col) => {
        colMap.set(col.id, {
          id: col.id,
          title: col.title,
          color: col.color,
          items: [],
        });
      });

      columns.forEach((col) => {
        (col.items || []).forEach((item) => {
          const targetColId = itemMoves[item.id] || col.id;
          const targetCol = colMap.get(targetColId);
          if (targetCol) {
            targetCol.items.push(item);
          }
        });
      });

      return Array.from(colMap.values());
    },

    getTotalItemCount(columns: DisplayColumn[]): number {
      return columns.reduce((sum, col) => sum + col.items.length, 0);
    },
  };
}

export function createKanbanDragAdapter(): KanbanDragPort {
  return {
    isValidDrop(fromColId: string, targetColId: string): boolean {
      return fromColId !== targetColId;
    },
  };
}

// Singleton instances
let kanbanAdapter: KanbanPort | null = null;
let kanbanDragAdapter: KanbanDragPort | null = null;

export function getKanbanAdapter(): KanbanPort {
  if (!kanbanAdapter) {
    kanbanAdapter = createKanbanAdapter();
  }
  return kanbanAdapter;
}

export function getKanbanDragAdapter(): KanbanDragPort {
  if (!kanbanDragAdapter) {
    kanbanDragAdapter = createKanbanDragAdapter();
  }
  return kanbanDragAdapter;
}
