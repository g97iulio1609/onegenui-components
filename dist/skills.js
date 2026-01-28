"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/skills.ts
var skills_exports = {};
__export(skills_exports, {
  generateJSONLPaths: () => generateJSONLPaths,
  getAllSkills: () => getAllSkills,
  registerSkill: () => registerSkill,
  skillsRegistry: () => skillsRegistry
});
module.exports = __toCommonJS(skills_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateJSONLPaths,
  getAllSkills,
  registerSkill,
  skillsRegistry
});
//# sourceMappingURL=skills.js.map