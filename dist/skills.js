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
  Kanban: "columns",
  // Canvas/Editor - content is Tiptap document with content array
  Canvas: "content.content",
  CanvasBlock: "content.content"
};
var NESTED_PATHS = {
  Kanban: [
    "- Kanban column append: /elements/KEY/props/columns/-",
    "- Kanban card append: /elements/KEY/props/columns/COL_INDEX/cards/-"
  ],
  // Canvas uses Tiptap node appends on the document content array
  Canvas: [
    "- Canvas node append: /elements/KEY/props/content/content/-",
    "- Canvas table row append: /elements/KEY/props/content/content/TABLE_INDEX/content/-"
  ]
};
function generateJSONLPaths() {
  const lines = [
    "STRUCTURED UI PATCH PATHS (emit_ui_patch):",
    "- Use emit_ui_patch tool; do not output raw JSONL patch lines.",
    "- For /elements/<key> patches, patch.value must be a JSON object (never a stringified JSON string).",
    "- Preserve existing UI: append child keys using /elements/<container>/children/- and avoid resetting children arrays.",
    "- Use per-response unique element keys (e.g. suffix with timestamp/UUID) unless intentionally updating an existing element.",
    "",
    "ARRAY APPEND PATHS:"
  ];
  const processedComponents = /* @__PURE__ */ new Set();
  for (const [componentName, propName] of Object.entries(
    COMPONENT_ARRAY_PROPS
  )) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateJSONLPaths,
  getAllSkills,
  registerSkill,
  skillsRegistry
});
//# sourceMappingURL=skills.js.map