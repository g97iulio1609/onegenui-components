/**
 * Kanban component
 */
export { Kanban } from "./component";
export {
  KanbanPropsSchema,
  KanbanDefinition,
  type KanbanProps,
} from "./schema";

// Hexagonal architecture exports
export type {
  KanbanPort,
  KanbanDragPort,
  KanbanItem,
  KanbanColumn,
  DisplayColumn,
} from "./ports";
export {
  createKanbanAdapter,
  createKanbanDragAdapter,
  getKanbanAdapter,
  getKanbanDragAdapter,
} from "./adapters";
export {
  useKanbanDrag,
  useKanbanState,
  type DragState,
  type UseKanbanDragOptions,
  type UseKanbanDragReturn,
  type UseKanbanStateOptions,
  type UseKanbanStateReturn,
} from "./hooks";
