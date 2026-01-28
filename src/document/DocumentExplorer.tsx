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
    <div style={{ marginLeft: `${depth * 0.75}rem` }}>
      <div
        onClick={() => onSelect(node)}
        className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 cursor-pointer rounded-md sm:rounded-lg touch-manipulation ${
          isSelected 
            ? "bg-sky-500/10 border-l-2 sm:border-l-3 border-sky-500" 
            : "border-l-2 sm:border-l-3 border-transparent hover:bg-white/5"
        }`}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            className="border-0 bg-transparent cursor-pointer p-1 text-[0.625rem] sm:text-xs text-zinc-400 hover:text-white touch-manipulation min-h-[1.75rem] min-w-[1.75rem] flex items-center justify-center"
          >
            {isExpanded ? "v" : ">"}
          </button>
        )}
        {!hasChildren && <span className="w-3 sm:w-4" />}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-xs sm:text-sm text-white truncate">{node.title}</div>
          <div className="text-[0.625rem] sm:text-xs text-zinc-500">
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
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white">
        Document Structure
      </div>
      <div className="p-1.5 sm:p-2 max-h-[350px] sm:max-h-[500px] overflow-y-auto touch-pan-y">
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
