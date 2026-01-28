/**
 * useKanbanDrag - Custom hook for Kanban drag and drop logic
 */
import { useState, useCallback, useRef } from "react";
import type { KanbanItem, KanbanDragPort } from "../ports";

export interface DragState {
  item: KanbanItem;
  fromColId: string;
}

export interface UseKanbanDragOptions {
  lock: boolean;
  onMoveItem: (itemId: string, targetColId: string) => void;
}

export interface UseKanbanDragReturn {
  draggedItem: DragState | null;
  dropTarget: string | null;
  handleDragStart: (
    e: React.DragEvent,
    item: KanbanItem,
    fromColId: string,
  ) => void;
  handleDragEnd: (e: React.DragEvent) => void;
  handleDragEnter: (e: React.DragEvent, colId: string) => void;
  handleDragLeave: (e: React.DragEvent, colId: string) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, targetColId: string) => void;
}

export function useKanbanDrag(
  adapter: KanbanDragPort,
  options: UseKanbanDragOptions,
): UseKanbanDragReturn {
  const { lock, onMoveItem } = options;

  const [draggedItem, setDraggedItem] = useState<DragState | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const dragCounter = useRef<Record<string, number>>({});

  const handleDragStart = useCallback(
    (e: React.DragEvent, item: KanbanItem, fromColId: string) => {
      if (lock) {
        e.preventDefault();
        return;
      }
      e.stopPropagation();
      setDraggedItem({ item, fromColId });
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("application/x-kanban-item", item.id);
      e.dataTransfer.setData("text/plain", item.id);
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.opacity = "0.5";
      }
    },
    [lock],
  );

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    e.stopPropagation();
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "1";
    }
    setDraggedItem(null);
    setDropTarget(null);
    dragCounter.current = {};
  }, []);

  const handleDragEnter = useCallback(
    (e: React.DragEvent, colId: string) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current[colId] = (dragCounter.current[colId] || 0) + 1;
      if (draggedItem && adapter.isValidDrop(draggedItem.fromColId, colId)) {
        setDropTarget(colId);
      }
    },
    [adapter, draggedItem],
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent, colId: string) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current[colId] = (dragCounter.current[colId] || 1) - 1;
      if (dragCounter.current[colId] <= 0) {
        dragCounter.current[colId] = 0;
        if (dropTarget === colId) {
          setDropTarget(null);
        }
      }
    },
    [dropTarget],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    if (e.dataTransfer.types.includes("application/x-kanban-item")) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetColId: string) => {
      if (!e.dataTransfer.types.includes("application/x-kanban-item")) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (
        draggedItem &&
        adapter.isValidDrop(draggedItem.fromColId, targetColId)
      ) {
        onMoveItem(draggedItem.item.id, targetColId);
      }
      setDraggedItem(null);
      setDropTarget(null);
      dragCounter.current = {};
    },
    [adapter, draggedItem, onMoveItem],
  );

  return {
    draggedItem,
    dropTarget,
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
}
