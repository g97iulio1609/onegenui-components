# Kanban

## Purpose

Task board with columns representing workflow stages and draggable task cards.

## When to Use

- Project management and task tracking
- Workflow visualization (To Do, In Progress, Done)
- Sprint/agile boards
- Any columnar task organization

## Props Reference

| Prop    | Type    | Required | Description           |
| ------- | ------- | -------- | --------------------- |
| title   | string  | No       | Board title           |
| columns | array   | Yes      | Board columns (min 1) |
| lock    | boolean | No       | Lock editing          |

### Column Structure

```typescript
{
  id: string;         // Unique ID (REQUIRED)
  title: string;      // Column header (REQUIRED)
  color?: string;     // Column accent color
  items?: KanbanItem[];// Tasks in this column
}
```

### KanbanItem Structure

```typescript
{
  id: string;          // Unique ID (REQUIRED)
  title: string;       // Task title (REQUIRED)
  description?: string;// Task details
  assignee?: string;   // Assigned person
  priority?: "low" | "medium" | "high";
  dueDate?: string;    // Due date
  tags?: string[];     // Labels/tags
}
```

## AI Generation Rules

1. ALWAYS use Kanban for task boards with columns/stages
2. Define 2-5 columns representing workflow stages
3. Each column and item MUST have id and title
4. Distribute tasks across columns realistically
5. Include priority and assignee for actionable boards

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/kanban1","value":{"key":"kanban1","type":"Kanban","props":{"title":"Sprint Board","columns":[]},"children":[]}}
{"op":"add","path":"/elements/kanban1/props/columns/-","value":{"id":"c1","title":"To Do","items":[]}}
{"op":"add","path":"/elements/kanban1/props/columns/-","value":{"id":"c2","title":"In Progress","items":[]}}
{"op":"add","path":"/elements/kanban1/props/columns/-","value":{"id":"c3","title":"Done","items":[]}}
{"op":"add","path":"/elements/kanban1/props/columns/0/items/-","value":{"id":"t1","title":"Design homepage","priority":"high"}}
{"op":"add","path":"/elements/kanban1/props/columns/1/items/-","value":{"id":"t2","title":"Implement auth","assignee":"John"}}
```

## Examples

```json
{
  "type": "Kanban",
  "props": {
    "title": "Product Development",
    "columns": [
      {
        "id": "backlog",
        "title": "Backlog",
        "items": [
          { "id": "t1", "title": "Research competitors", "priority": "medium" },
          { "id": "t2", "title": "User interviews", "priority": "high" }
        ]
      },
      {
        "id": "progress",
        "title": "In Progress",
        "color": "#3b82f6",
        "items": [
          {
            "id": "t3",
            "title": "Design system",
            "assignee": "Sarah",
            "priority": "high"
          }
        ]
      },
      {
        "id": "review",
        "title": "Review",
        "color": "#f59e0b",
        "items": [
          { "id": "t4", "title": "API documentation", "assignee": "Mike" }
        ]
      },
      {
        "id": "done",
        "title": "Done",
        "color": "#10b981",
        "items": [{ "id": "t5", "title": "Project setup", "assignee": "John" }]
      }
    ]
  }
}
```

## Structured Emission Contract

- For `/elements/<key>` patches, `patch.value` must be a raw JSON object (never a quoted/stringified JSON string).
- If the current tree already has a container/root, do not recreate or reset it with `children: []`.
- Preserve existing UI by appending new component keys via `/elements/<container>/children/-`.
