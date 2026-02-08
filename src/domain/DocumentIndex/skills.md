# DocumentIndex

Use DocumentIndex to display the hierarchical structure of a document when Vectorless/smart parsing is enabled. This is the PRIMARY component for document analysis — always generate it FIRST.

## Structured Emission Contract

- When using `emit_ui_patch`, `patch.value` for `/elements/<key>` MUST be a JSON object, never a stringified JSON string.
- If the UI tree already exists, do not reset existing containers with `children: []`.
- To preserve previous turns, append new components with `/elements/<container>/children/-` instead of replacing the container node.
- Use a unique key for each new DocumentIndex instance (for example `doc-index-<timestamp>`); do not reuse an old key for a new turn.

## When to use

- ALWAYS when a PDF or document has been analyzed with smart parsing (Vectorless)
- The tree structure is provided in `DOCUMENT INDEX TREE` section of the context as JSON
- The context also contains `DOCUMENT DEEP ANALYSIS` with entities, timeline, relations, and quotes — use this data to enrich each node

## Props

- `title`: Document title (from the tree data)
- `description`: Document description or summary
- `pageCount`: Total number of pages
- `nodes`: Array of section nodes (recursive). Each node has:
  - `title`: Section title (REQUIRED)
  - `nodeId`: Unique identifier (REQUIRED — use the IDs from the tree data)
  - `startPage`: Starting page number (REQUIRED)
  - `endPage`: Ending page number (REQUIRED)
  - `summary`: Section summary — write a DETAILED 2-3 sentence summary for EVERY node
  - `keyPoints`: Array of key points extracted from the section (2-5 per node)
  - `tags`: Thematic tags (e.g., ["methodology", "data analysis", "statistics"])
  - `entityCount`: Count of entities mentioned in this section
  - `quoteCount`: Count of notable quotes in this section
  - `importance`: Score from 0 to 1 (1 = most important). High-importance nodes show a star icon
  - `relatedNodes`: Array of nodeIds that are thematically related to this section
  - `children`: Nested subsections (same structure, recursive)

## Granularity Rules

- Include ALL nodes from the tree — do NOT skip or simplify
- Every node MUST have a `summary` — never leave it empty
- Add `keyPoints` to every node with at least 2 points
- Add `tags` that reflect the section's themes
- Set `importance` based on section content relevance (0.8-1.0 for core sections, 0.3-0.5 for appendices)
- Cross-reference `relatedNodes` between thematically connected sections
- Count entities and quotes from the DOCUMENT DEEP ANALYSIS data per section

## Example

When `DOCUMENT INDEX TREE` provides:
```json
{
  "Title": "Research Paper",
  "PageCount": 150,
  "Nodes": [
    {"title": "Introduction", "nodeId": "s1", "startPage": 1, "endPage": 10, "summary": "Overview...", "children": [
      {"title": "Background", "nodeId": "s1-1", "startPage": 1, "endPage": 5},
      {"title": "Objectives", "nodeId": "s1-2", "startPage": 6, "endPage": 10}
    ]},
    {"title": "Methods", "nodeId": "s2", "startPage": 11, "endPage": 50}
  ]
}
```

Generate a FULLY ENRICHED DocumentIndex:
```json
{
  "type": "DocumentIndex",
  "props": {
    "title": "Research Paper",
    "description": "Comprehensive study covering methodology, findings, and implications across 150 pages",
    "pageCount": 150,
    "nodes": [
      {
        "title": "Introduction",
        "nodeId": "s1",
        "startPage": 1,
        "endPage": 10,
        "summary": "Establishes the research context, reviews existing literature, and defines the study's primary objectives and hypotheses. Sets the foundation for the methodological approach.",
        "keyPoints": ["Identifies gap in existing research", "Defines 3 research questions", "Reviews 15 key prior studies"],
        "tags": ["introduction", "literature review", "research questions"],
        "entityCount": 8,
        "quoteCount": 2,
        "importance": 0.7,
        "relatedNodes": ["s2"],
        "children": [
          {
            "title": "Background",
            "nodeId": "s1-1",
            "startPage": 1,
            "endPage": 5,
            "summary": "Reviews the historical context and prior work in the field, identifying key limitations that motivate this study.",
            "keyPoints": ["Historical evolution of the field", "Key limitations of prior approaches"],
            "tags": ["background", "literature"],
            "entityCount": 5,
            "importance": 0.5,
            "relatedNodes": ["s1-2"]
          },
          {
            "title": "Objectives",
            "nodeId": "s1-2",
            "startPage": 6,
            "endPage": 10,
            "summary": "Formally states research objectives, hypotheses, and the expected contributions of this work.",
            "keyPoints": ["3 primary objectives defined", "Hypotheses clearly stated"],
            "tags": ["objectives", "hypotheses"],
            "importance": 0.8,
            "relatedNodes": ["s1-1", "s2"]
          }
        ]
      },
      {
        "title": "Methods",
        "nodeId": "s2",
        "startPage": 11,
        "endPage": 50,
        "summary": "Detailed description of the experimental methodology, data collection procedures, and analytical framework used throughout the study.",
        "keyPoints": ["Mixed-methods approach", "Sample size of 500 participants", "Statistical analysis with p<0.05"],
        "tags": ["methodology", "data collection", "experimental design"],
        "entityCount": 12,
        "quoteCount": 0,
        "importance": 0.9,
        "relatedNodes": ["s1"]
      }
    ]
  }
}
```

## Best practices

- ALWAYS generate DocumentIndex as the FIRST component in document analysis
- Copy the tree structure from `DOCUMENT INDEX TREE` and ENRICH every node with metadata
- Write summaries that are informative and specific (not generic like "This section covers...")
- Use data from `ENTITIES`, `TIMELINE`, `KEY QUOTES` sections to populate entityCount, quoteCount
- Set importance higher for sections with more entities, quotes, or key findings
- Link related nodes across the tree (e.g., methods → results, introduction → conclusion)
- Do NOT generate `SourceCitation` in this step when citations are already emitted by backend events
