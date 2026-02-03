# TodoList

## Purpose

Interactive task list component with checkable items, priority badges, time indicators, and nested sub-items. Supports auto-save and status tracking with animated transitions.

## When to Use

- Task management interfaces
- Project todo lists
- Daily planner views
- Checklists with priorities
- Nested task hierarchies
- Progress tracking

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | List title/heading |
| items | TodoItem[] | No | Array of todo items |

### TodoItem Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique item identifier |
| text | string | Yes | Task description text |
| time | string | No | Time indicator (e.g., "2:00 PM", "Due tomorrow") |
| priority | "high" \| "medium" \| "low" | No | Task priority level |
| status | "pending" \| "in-progress" \| "done" | No | Task completion status |
| subItems | TodoItem[] | No | Nested sub-tasks |

### Priority Styles

| Priority | Color |
|----------|-------|
| high | Red (error) |
| medium | Amber (warning) |
| low | Green (success) |

## AI Generation Rules

1. **Always include id and text** for each item
2. **Use meaningful ids** for task tracking
3. **Set appropriate priority** based on urgency
4. **Use status** to reflect current state
5. **Add time** for scheduled or due tasks
6. **Use subItems** for breaking down complex tasks
7. **Keep text concise** but descriptive

## Examples

### Basic Todo List

```json
{
  "type": "TodoList",
  "props": {
    "title": "Today's Tasks",
    "items": [
      {
        "id": "task-1",
        "text": "Review pull requests",
        "priority": "high",
        "status": "pending"
      },
      {
        "id": "task-2",
        "text": "Update documentation",
        "priority": "medium",
        "status": "pending"
      },
      {
        "id": "task-3",
        "text": "Team standup meeting",
        "priority": "low",
        "status": "done",
        "time": "9:00 AM"
      }
    ]
  }
}
```

### Todo List with Sub-Items

```json
{
  "type": "TodoList",
  "props": {
    "title": "Project Tasks",
    "items": [
      {
        "id": "project-1",
        "text": "Complete feature implementation",
        "priority": "high",
        "status": "in-progress",
        "subItems": [
          {
            "id": "sub-1",
            "text": "Write unit tests",
            "status": "done"
          },
          {
            "id": "sub-2",
            "text": "Add error handling",
            "status": "pending"
          },
          {
            "id": "sub-3",
            "text": "Update API docs",
            "status": "pending"
          }
        ]
      }
    ]
  }
}
```

### Scheduled Tasks

```json
{
  "type": "TodoList",
  "props": {
    "title": "Schedule",
    "items": [
      {
        "id": "schedule-1",
        "text": "Client call",
        "time": "10:00 AM",
        "priority": "high",
        "status": "pending"
      },
      {
        "id": "schedule-2",
        "text": "Lunch break",
        "time": "12:30 PM",
        "status": "pending"
      },
      {
        "id": "schedule-3",
        "text": "Code review session",
        "time": "3:00 PM",
        "priority": "medium",
        "status": "pending"
      }
    ]
  }
}
```

### Mixed Status List

```json
{
  "type": "TodoList",
  "props": {
    "title": "Sprint Progress",
    "items": [
      {
        "id": "sprint-1",
        "text": "Setup development environment",
        "status": "done"
      },
      {
        "id": "sprint-2",
        "text": "Implement authentication",
        "status": "in-progress",
        "priority": "high"
      },
      {
        "id": "sprint-3",
        "text": "Deploy to staging",
        "status": "pending",
        "priority": "medium"
      }
    ]
  }
}
```

## Streaming Strategy

1. Emit TodoList with title first
2. Add items progressively as they are defined
3. Sub-items can be added after parent items
4. Status updates are handled by user interactions

## Critical Notes

- **Empty state** displays a friendly message with "Add First Task" button
- **Items are clickable** - clicking toggles the done status
- **Completion counter** shows in header (X/Y Done)
- **Auto-save** is enabled for persistence
- Sub-items are visually indented with left border
- Touch-optimized with larger tap targets on mobile
- Animated transitions for item state changes
- Reduced motion support for accessibility
