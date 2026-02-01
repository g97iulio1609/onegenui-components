// src/skills.ts
var skillsRegistry = {};
function registerSkill(componentName, content) {
  skillsRegistry[componentName] = content;
}
function getAllSkills() {
  return { ...skillsRegistry };
}
var COMPONENT_ARRAY_PROPS = {
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
  CanvasBlock: "content.content"
};
var NESTED_PATHS = {
  Kanban: [
    '- Kanban (Column): {"op":"add","path":"/elements/KEY/props/columns/-","value":{...}}',
    '- Kanban (Card in Column): {"op":"add","path":"/elements/KEY/props/columns/COL_INDEX/cards/-","value":{...}}'
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
    '- Canvas (Callout): {"op":"add","path":"/elements/KEY/props/content/content/-","value":{"type":"callout","attrs":{"variant":"info","title":"Note"},"content":[{"type":"paragraph","content":[{"type":"text","text":"..."}]}]}}'
  ]
};
function generateJSONLPaths() {
  const lines = ["COMPONENT ITEM UPDATES:"];
  const processedComponents = /* @__PURE__ */ new Set();
  for (const [componentName, propName] of Object.entries(
    COMPONENT_ARRAY_PROPS
  )) {
    if (NESTED_PATHS[componentName]) continue;
    lines.push(
      `- ${componentName}: {"op":"add","path":"/elements/KEY/props/${propName}/-","value":{...}}`
    );
    processedComponents.add(componentName);
  }
  for (const [componentName, paths] of Object.entries(NESTED_PATHS)) {
    lines.push(...paths);
    processedComponents.add(componentName);
  }
  return lines.join("\n");
}
export {
  generateJSONLPaths,
  getAllSkills,
  registerSkill,
  skillsRegistry
};
//# sourceMappingURL=skills.mjs.map