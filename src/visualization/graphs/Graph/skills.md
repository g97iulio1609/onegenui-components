# Graph

## Purpose

Interactive force-directed graph visualization component for displaying node and edge relationships. Supports pan, zoom, node dragging, and selection with physics-based layout simulation.

## When to Use

- Network visualizations
- Relationship diagrams
- Knowledge graphs
- Dependency graphs
- Social network displays
- Entity relationship diagrams
- Concept mapping

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Graph title displayed in top-left |
| nodes | GraphNode[] | No | Array of node objects |
| edges | GraphEdge[] | No | Array of edge connections |
| layout | "force" \| "radial" \| "grid" | No | Layout algorithm (default: "force") |
| showLabels | boolean | No | Show node labels |
| showEdgeLabels | boolean | No | Show edge labels |
| allowPanZoom | boolean | No | Enable pan and zoom controls |
| width | number | No | Graph width in pixels |
| height | number | No | Graph height in pixels |
| lock | boolean | No | Lock node positions |

### GraphNode Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique node identifier |
| label | string | Yes | Node display label |
| description | string | No | Node description/tooltip |
| group | string | No | Group for coloring/clustering |
| type | string | No | Node type classification |
| color | string | No | Custom node color |
| size | number | No | Node size multiplier |
| icon | string | No | Icon name for node |

### GraphEdge Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | No | Unique edge identifier |
| source | string | Yes* | Source node ID |
| target | string | Yes* | Target node ID |
| from | string | Yes* | Alternative to source |
| to | string | Yes* | Alternative to target |
| label | string | No | Edge label text |
| weight | number | No | Edge weight/strength |
| directed | boolean | No | Show arrow for direction |
| color | string | No | Custom edge color |

*Either `source`/`target` or `from`/`to` pair must be provided.

## AI Generation Rules

1. **Always include id and label** for each node
2. **Use source/target or from/to** for edges (not both)
3. **Reference valid node IDs** in edges
4. **Set height** for optimal visualization
5. **Use groups** for color-coded clustering
6. **Add title** for context
7. **Keep graph size reasonable** (10-50 nodes optimal)

## Examples

### Simple Network Graph

```json
{
  "type": "Graph",
  "props": {
    "title": "Team Structure",
    "height": 400,
    "nodes": [
      { "id": "ceo", "label": "CEO", "group": "executive" },
      { "id": "cto", "label": "CTO", "group": "executive" },
      { "id": "dev1", "label": "Developer 1", "group": "engineering" },
      { "id": "dev2", "label": "Developer 2", "group": "engineering" },
      { "id": "des1", "label": "Designer", "group": "design" }
    ],
    "edges": [
      { "source": "ceo", "target": "cto" },
      { "source": "cto", "target": "dev1" },
      { "source": "cto", "target": "dev2" },
      { "source": "ceo", "target": "des1" }
    ]
  }
}
```

### Dependency Graph

```json
{
  "type": "Graph",
  "props": {
    "title": "Package Dependencies",
    "height": 500,
    "nodes": [
      { "id": "app", "label": "App", "group": "main" },
      { "id": "react", "label": "React", "group": "framework" },
      { "id": "zustand", "label": "Zustand", "group": "state" },
      { "id": "zod", "label": "Zod", "group": "validation" },
      { "id": "framer", "label": "Framer Motion", "group": "animation" }
    ],
    "edges": [
      { "source": "app", "target": "react", "label": "uses" },
      { "source": "app", "target": "zustand", "label": "uses" },
      { "source": "app", "target": "zod", "label": "uses" },
      { "source": "app", "target": "framer", "label": "uses" },
      { "source": "zustand", "target": "react", "label": "peer" }
    ]
  }
}
```

### Knowledge Graph

```json
{
  "type": "Graph",
  "props": {
    "title": "Concept Map",
    "height": 450,
    "nodes": [
      { "id": "ml", "label": "Machine Learning", "group": "ai" },
      { "id": "dl", "label": "Deep Learning", "group": "ai" },
      { "id": "nn", "label": "Neural Networks", "group": "technique" },
      { "id": "cnn", "label": "CNN", "group": "technique" },
      { "id": "rnn", "label": "RNN", "group": "technique" },
      { "id": "nlp", "label": "NLP", "group": "application" },
      { "id": "cv", "label": "Computer Vision", "group": "application" }
    ],
    "edges": [
      { "source": "ml", "target": "dl", "label": "includes" },
      { "source": "dl", "target": "nn", "label": "based on" },
      { "source": "nn", "target": "cnn" },
      { "source": "nn", "target": "rnn" },
      { "source": "cnn", "target": "cv", "label": "used in" },
      { "source": "rnn", "target": "nlp", "label": "used in" }
    ]
  }
}
```

### Relationship Diagram

```json
{
  "type": "Graph",
  "props": {
    "title": "Entity Relationships",
    "height": 350,
    "nodes": [
      { "id": "user", "label": "User", "type": "entity" },
      { "id": "order", "label": "Order", "type": "entity" },
      { "id": "product", "label": "Product", "type": "entity" },
      { "id": "category", "label": "Category", "type": "entity" }
    ],
    "edges": [
      { "source": "user", "target": "order", "label": "places" },
      { "source": "order", "target": "product", "label": "contains" },
      { "source": "product", "target": "category", "label": "belongs to" }
    ]
  }
}
```

## Streaming Strategy

1. Emit Graph with title and dimensions first
2. Add nodes progressively as they are identified
3. Add edges after related nodes exist
4. Physics simulation runs automatically

## Critical Notes

- **Force-directed layout** uses physics simulation for automatic positioning
- **Nodes are draggable** - drag to reposition, physics continues
- **Pan and zoom** - scroll to zoom, drag background to pan
- **Selection support** - click nodes to select
- **Minimum height 200px** is enforced for visibility
- **Node sizes auto-adjust** based on label length
- Physics simulation runs for MAX_ITERATIONS then stops (performance)
- Edge arrows shown when `directed: true`
