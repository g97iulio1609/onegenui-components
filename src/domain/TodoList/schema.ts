import { z } from "zod";

/**
 * TodoList component schema definition
 */
export const TodoListPropsSchema = z.object({});

/** Type inference for TodoList props */
export type TodoListProps = z.infer<typeof TodoListPropsSchema>;

/**
 * TodoList component definition for catalog registration
 */
export const TodoListDefinition = {
  name: "TodoList" as const,
  props: TodoListPropsSchema,
  description: "TodoList component",
  hasChildren: true,
};
