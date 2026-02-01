/**
 * Skills Module
 *
 * Provides utilities for loading skills and generating JSONL path patterns.
 * Uses safe definitions (no React) to ensure compatibility with build tools.
 */

// Use safe definitions (no React) via namespace import
import * as ComponentDefinitions from "./definitions";

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
 * Map of component names to their JSONL array prop path patterns.
 * Used to generate TREE_CONTEXT_APPENDIX for the AI prompt.
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
 * Special nested paths for components with complex structures
 */
const NESTED_PATHS: Record<string, string[]> = {
  Kanban: [
    '- Kanban (Column): {"op":"add","path":"/elements/KEY/props/columns/-","value":{...}}',
    '- Kanban (Card in Column): {"op":"add","path":"/elements/KEY/props/columns/COL_INDEX/cards/-","value":{...}}',
  ],
  // Canvas uses standard JSON Patch to add nodes to document content array
  Canvas: [
    '- Canvas (Paragraph): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"paragraph","content":[{"type":"text","text":"..."}]}}',
    '- Canvas (Heading): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"..."}]}}',
    '- Canvas (Table): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableHeader","content":[{"type":"paragraph","content":[{"type":"text","text":"Header"}]}]}]}]}}',
    '- Canvas (CodeBlock): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"codeBlock","attrs":{"language":"typescript"},"content":[{"type":"text","text":"const x = 1;"}]}}',
    '- Canvas (BulletList): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"bulletList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Item"}]}]}]}}',
    '- Canvas (Diagram): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"diagram","attrs":{"code":"graph TD\\n  A-->B","diagramType":"flowchart"}}}',
    '- Canvas (Math): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"mathBlock","attrs":{"latex":"E = mc^2"}}}',
    '- Canvas (Callout): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"callout","attrs":{"variant":"info","title":"Note"},"content":[{"type":"paragraph","content":[{"type":"text","text":"..."}]}]}}',
  ],
};

/**
 * Generate JSONL path patterns for component item updates.
 * This replaces the hardcoded TREE_CONTEXT_APPENDIX in route.ts.
 */
export function generateJSONLPaths(): string {
  const lines: string[] = ["COMPONENT ITEM UPDATES:"];
  const processedComponents = new Set<string>();

  for (const [componentName, propName] of Object.entries(
    COMPONENT_ARRAY_PROPS,
  )) {
    // Skip if this component has nested paths (handled separately)
    if (NESTED_PATHS[componentName]) continue;

    lines.push(
      `- ${componentName}: {"op":"add","path":"/elements/KEY/props/${propName}/-","value":{...}}`,
    );
    processedComponents.add(componentName);
  }

  // Add nested path patterns
  for (const [componentName, paths] of Object.entries(NESTED_PATHS)) {
    lines.push(...paths);
    processedComponents.add(componentName);
  }

  return lines.join("\n");
}
