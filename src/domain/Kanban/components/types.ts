import type { StatusVariant } from "../../../utils/shared-components";

export type KanbanItem = {
  id: string;
  title: string;
  description?: string | null;
  assignee?: string | null;
  priority?: "low" | "medium" | "high" | null;
  dueDate?: string | null;
  tags?: string[] | null;
  subItems?: KanbanItem[] | null;
};

export type KanbanColumn = {
  id: string;
  title: string;
  color?: string | null;
  items?: KanbanItem[] | null;
};

export type DisplayColumn = {
  id: string;
  title: string;
  color?: string | null;
  items: KanbanItem[];
};

export const PRIORITY_TO_VARIANT: Record<string, StatusVariant> = {
  high: "error",
  medium: "warning",
  low: "success",
};
