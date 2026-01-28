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
  Kanban: "columns"
  // Visualization
};
var NESTED_PATHS = {
  Kanban: [
    '- Kanban (Column): {"op":"add","path":"/elements/KEY/props/columns/-","value":{...}}',
    '- Kanban (Card in Column): {"op":"add","path":"/elements/KEY/props/columns/COL_INDEX/cards/-","value":{...}}'
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