"use client";

import { memo, useMemo } from "react";
import type { Entity, Relation } from "@onegenui/vectorless";

export interface KnowledgeGraphProps {
  entities: Entity[];
  relations: Relation[];
  width?: number;
  height?: number;
  onEntityClick?: (entity: Entity) => void;
}

interface GraphNode {
  id: string;
  label: string;
  type: string;
  x: number;
  y: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
}

export const KnowledgeGraph = memo(function KnowledgeGraph({
  entities,
  relations,
  width = 600,
  height = 400,
  onEntityClick,
}: KnowledgeGraphProps) {
  const { nodes, edges } = useMemo(() => {
    // Create nodes from entities (top 30)
    const topEntities = entities.slice(0, 30);
    const graphNodes: GraphNode[] = topEntities.map((entity, i) => {
      const angle = (i / topEntities.length) * 2 * Math.PI;
      const radius = Math.min(width, height) * 0.35;
      return {
        id: entity.id,
        label: entity.value.slice(0, 20),
        type: entity.type,
        x: width / 2 + radius * Math.cos(angle),
        y: height / 2 + radius * Math.sin(angle),
      };
    });

    // Create edges from relations
    const graphEdges: GraphEdge[] = relations
      .filter(
        (r) =>
          graphNodes.some((n) => n.id === r.sourceNodeId) &&
          graphNodes.some((n) => n.id === r.targetNodeId),
      )
      .map((r) => ({
        source: r.sourceNodeId,
        target: r.targetNodeId,
        type: r.type,
      }));

    return { nodes: graphNodes, edges: graphEdges };
  }, [entities, relations, width, height]);

  const typeColors: Record<string, string> = {
    person: "#4caf50",
    organization: "#2196f3",
    place: "#ff9800",
    date: "#9c27b0",
    concept: "#f44336",
    event: "#00bcd4",
    number: "#795548",
    term: "#607d8b",
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          fontWeight: 600,
        }}
      >
        Knowledge Graph
      </div>
      <svg width={width} height={height} style={{ display: "block" }}>
        {/* Edges */}
        {edges.map((edge, i) => {
          const sourceNode = nodes.find((n) => n.id === edge.source);
          const targetNode = nodes.find((n) => n.id === edge.target);
          if (!sourceNode || !targetNode) return null;
          return (
            <line
              key={i}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="#ccc"
              strokeWidth={1}
            />
          );
        })}
        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y})`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              const entity = entities.find((e) => e.id === node.id);
              if (entity) onEntityClick?.(entity);
            }}
          >
            <circle
              r={20}
              fill={typeColors[node.type] || "#999"}
              stroke="white"
              strokeWidth={2}
            />
            <text y={30} textAnchor="middle" fontSize={10} fill="#333">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      {/* Legend */}
      <div
        style={{
          padding: "8px 16px",
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 12,
        }}
      >
        {Object.entries(typeColors).map(([type, color]) => (
          <div
            key={type}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
