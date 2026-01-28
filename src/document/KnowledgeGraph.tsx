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
    person: "#10b981",
    organization: "#0ea5e9",
    place: "#f59e0b",
    date: "#a855f7",
    concept: "#f43f5e",
    event: "#06b6d4",
    number: "#78716c",
    term: "#64748b",
  };

  return (
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white">
        Knowledge Graph
      </div>
      
      {/* Simplified mobile view: list of connections */}
      <div className="block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y">
        <div className="space-y-2">
          {nodes.slice(0, 15).map((node) => {
            const nodeEdges = edges.filter(e => e.source === node.id || e.target === node.id);
            return (
              <div
                key={node.id}
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-800/30 cursor-pointer touch-manipulation"
                onClick={() => {
                  const entity = entities.find((e) => e.id === node.id);
                  if (entity) onEntityClick?.(entity);
                }}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: typeColors[node.type] || "#999" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white truncate">{node.label}</div>
                  <div className="text-[0.5rem] text-zinc-500">{node.type} • {nodeEdges.length} connections</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: SVG graph */}
      <div className="hidden sm:block overflow-x-auto touch-pan-x">
        <svg width={width} height={height} className="block min-w-full">
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
                stroke="#444"
                strokeWidth={1}
              />
            );
          })}
          {/* Nodes */}
          {nodes.map((node) => (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              className="cursor-pointer"
              onClick={() => {
                const entity = entities.find((e) => e.id === node.id);
                if (entity) onEntityClick?.(entity);
              }}
            >
              <circle
                r={20}
                fill={typeColors[node.type] || "#999"}
                stroke="#18181b"
                strokeWidth={2}
              />
              <text y={30} textAnchor="middle" fontSize={10} fill="#a1a1aa">
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="px-2.5 sm:px-4 py-2 sm:py-2.5 border-t border-white/10 flex gap-2 sm:gap-4 flex-wrap text-[0.5rem] sm:text-xs">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1 sm:gap-1.5">
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-zinc-400">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
