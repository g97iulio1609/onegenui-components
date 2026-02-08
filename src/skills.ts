/**
 * Skills Module
 *
 * Provides utilities for loading skills and generating patch path references.
 */

// Re-export registry for use by consumers
export const skillsRegistry: Record<string, string> = {};

/**
 * Register a skill manually
 */
export function registerSkill(componentName: string, content: string): void {
  skillsRegistry[componentName] = content;
}

/**
 * Get all registered skills
 */
export function getAllSkills(): Record<string, string> {
  return { ...skillsRegistry };
}

/**
 * Map of component names to append paths for array-like props.
 */
const COMPONENT_ARRAY_PROPS: Record<string, string> = {
  // Data Display
  List: "items",
  TodoList: "items",
  Timeline: "events",
  Table: "rows",

  // Communication
  Message: "messages",
  Email: "emails",

  // Domain
  Workout: "items",
  Nutrition: "meals",
  Flight: "flights",
  Hotel: "hotels",
  Trip: "trips",
  Kanban: "columns",

  // Canvas/Editor - content is Tiptap document with content array
  Canvas: "content.content",
  CanvasBlock: "content.content",
};

/**
 * Special nested append paths for components with complex structures.
 */
const NESTED_PATHS: Record<string, string[]> = {
  Kanban: [
    "- Kanban column append: /elements/KEY/props/columns/-",
    "- Kanban card append: /elements/KEY/props/columns/COL_INDEX/cards/-",
  ],
  // Canvas uses Tiptap node appends on the document content array
  Canvas: [
    "- Canvas node append: /elements/KEY/props/content/content/-",
    "- Canvas table row append: /elements/KEY/props/content/content/TABLE_INDEX/content/-",
  ],
};

/**
 * Generate patch path guidance for component item updates.
 *
 * Historical function name kept for compatibility with existing imports.
 */
export function generateJSONLPaths(): string {
  const lines: string[] = [
    "STRUCTURED UI PATCH PATHS (emit_ui_patch):",
    "- Use emit_ui_patch tool; do not output raw JSONL patch lines.",
    "- For /elements/<key> patches, patch.value must be a JSON object (never a stringified JSON string).",
    "- Preserve existing UI: append child keys using /elements/<container>/children/- and avoid resetting children arrays.",
    "- Use per-response unique element keys (e.g. suffix with timestamp/UUID) unless intentionally updating an existing element.",
    "",
    "ARRAY APPEND PATHS:",
  ];
  const processedComponents = new Set<string>();

  for (const [componentName, propName] of Object.entries(
    COMPONENT_ARRAY_PROPS,
  )) {
    // Skip if this component has nested paths (handled separately)
    if (NESTED_PATHS[componentName]) continue;

    lines.push(`- ${componentName} item append: /elements/KEY/props/${propName}/-`);
    processedComponents.add(componentName);
  }

  lines.push("", "NESTED APPEND PATHS:");
  for (const [componentName, paths] of Object.entries(NESTED_PATHS)) {
    lines.push(`- ${componentName}:`);
    lines.push(...paths.map((path) => `  ${path}`));
    processedComponents.add(componentName);
  }

  return lines.join("\n");
}
