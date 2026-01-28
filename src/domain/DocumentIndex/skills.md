# DocumentIndex

Use DocumentIndex to display the hierarchical structure of a document when Vectorless/smart parsing is enabled.

## When to use

- When a PDF or document has been processed with smart parsing (Vectorless)
- The document structure is provided in `DOCUMENT STRUCTURE` section of the context
- User wants to see the table of contents or document outline

## Props

- `title`: Document title
- `description`: Brief document description
- `pageCount`: Total number of pages
- `nodes`: Array of section nodes with:
  - `title`: Section title
  - `nodeId`: Unique identifier (use format like `section-1`, `section-1-1`)
  - `startPage`: Starting page number
  - `endPage`: Ending page number
  - `summary`: Optional section summary
  - `children`: Optional nested subsections

## Example

When document structure shows:
```
1) Introduction (p.1-3)
2) Methods (p.4-10)
   2.1) Data Collection (p.4-6)
   2.2) Analysis (p.7-10)
3) Results (p.11-20)
```

Generate:
```json
{
  "type": "DocumentIndex",
  "props": {
    "title": "Research Paper",
    "description": "Scientific study on...",
    "pageCount": 25,
    "nodes": [
      {"title": "Introduction", "nodeId": "s1", "startPage": 1, "endPage": 3},
      {"title": "Methods", "nodeId": "s2", "startPage": 4, "endPage": 10, "children": [
        {"title": "Data Collection", "nodeId": "s2-1", "startPage": 4, "endPage": 6},
        {"title": "Analysis", "nodeId": "s2-2", "startPage": 7, "endPage": 10}
      ]},
      {"title": "Results", "nodeId": "s3", "startPage": 11, "endPage": 20}
    ]
  }
}
```

## Best practices

- Always include DocumentIndex at the start of analysis for multi-section documents
- Extract structure from `DOCUMENT STRUCTURE` in context
- Include summaries when available from `RELEVANT SECTIONS`
- Use consistent nodeId format for hierarchy
