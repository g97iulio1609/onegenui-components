import { z } from "zod";
import { kanbanColumnSchema } from "../../utils/shared-schemas";

/**
 * Kanban component schema definition
 */
export const KanbanPropsSchema = z.object({
  title: z.string().nullable(),
  columns: z
    .array(kanbanColumnSchema)
    .min(1)
    .describe("Columns (REQUIRED, min 1)"),
  lock: z.boolean().nullable(),
});

/** Type inference for Kanban props */
export type KanbanProps = z.infer<typeof KanbanPropsSchema>;

/**
 * Kanban component definition for catalog registration
 */
export const KanbanDefinition = {
  name: "Kanban" as const,
  props: KanbanPropsSchema,
  description: "Kanban board with columns and drag-and-drop tasks.",
  hasChildren: true,
};
