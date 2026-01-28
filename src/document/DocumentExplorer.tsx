"use client";

import { memo, useState, useCallback } from "react";
import type { KnowledgeNode } from "@onegenui/vectorless";

export interface DocumentExplorerProps {
  tree: KnowledgeNode;
  onNodeSelect?: (node: KnowledgeNode) => void;
  selectedNodeId?: string;
  expandedByDefault?: boolean;
}

interface TreeNodeProps {
  node: KnowledgeNode;
  depth: number;
  onSelect: (node: KnowledgeNode) => void;
  selectedId?: string;
  expanded: Set<string>;
  onToggle: (id: string) => void;
}

const TreeNodeItem = memo(function TreeNodeItem({
  node,
  depth,
  onSelect,
  selectedId,
  expanded,
  onToggle,
}: TreeNodeProps) {
  const isExpanded = expanded.has(node.id);
  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: depth * 16 }}>
      <div
        onClick={() => onSelect(node)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: 6,
          backgroundColor: isSelected ? "#e3f2fd" : "transparent",
          borderLeft: isSelected
            ? "3px solid #1976d2"
            : "3px solid transparent",
        }}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: 12,
            }}
          >
            {isExpanded ? "v" : ">"}
          </button>
        )}
        {!hasChildren && <span style={{ width: 12 }} />}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 14 }}>{node.title}</div>
          <div style={{ fontSize: 12, color: "#666" }}>
            p{node.pageStart}-{node.pageEnd}
          </div>
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              onSelect={onSelect}
              selectedId={selectedId}
              expanded={expanded}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export const DocumentExplorer = memo(function DocumentExplorer({
  tree,
  onNodeSelect,
  selectedNodeId,
  expandedByDefault = true,
}: DocumentExplorerProps) {
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    if (!expandedByDefault) return new Set();
    const ids = new Set<string>();
    const collect = (node: KnowledgeNode) => {
      ids.add(node.id);
      node.children?.forEach(collect);
    };
    collect(tree);
    return ids;
  });

  const handleToggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleSelect = useCallback(
    (node: KnowledgeNode) => {
      onNodeSelect?.(node);
    },
    [onNodeSelect],
  );

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
        Document Structure
      </div>
      <div style={{ padding: 8, maxHeight: 500, overflowY: "auto" }}>
        <TreeNodeItem
          node={tree}
          depth={0}
          onSelect={handleSelect}
          selectedId={selectedNodeId}
          expanded={expanded}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
});
