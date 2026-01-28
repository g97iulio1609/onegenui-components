"use client";

import { useState, useCallback, useMemo } from "react";
import type { KnowledgeNode } from "@onegenui/vectorless";

export interface UseDocumentExplorerOptions {
  initialTree?: KnowledgeNode | null;
  onNodeSelect?: (node: KnowledgeNode) => void;
}

export interface UseDocumentExplorerReturn {
  tree: KnowledgeNode | null;
  setTree: (tree: KnowledgeNode | null) => void;
  selectedNode: KnowledgeNode | null;
  expandedNodes: Set<string>;
  selectNode: (node: KnowledgeNode) => void;
  toggleNode: (nodeId: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
  searchNodes: (query: string) => KnowledgeNode[];
  getNodePath: (nodeId: string) => KnowledgeNode[];
}

function collectAllNodeIds(node: KnowledgeNode, ids: Set<string>): void {
  ids.add(node.id);
  if (node.children) {
    for (const child of node.children) {
      collectAllNodeIds(child, ids);
    }
  }
}

function findNode(node: KnowledgeNode, id: string): KnowledgeNode | undefined {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return undefined;
}

function findPath(
  node: KnowledgeNode,
  targetId: string,
  path: KnowledgeNode[] = [],
): KnowledgeNode[] | null {
  const newPath = [...path, node];
  if (node.id === targetId) return newPath;
  if (node.children) {
    for (const child of node.children) {
      const result = findPath(child, targetId, newPath);
      if (result) return result;
    }
  }
  return null;
}

function searchTree(
  node: KnowledgeNode,
  query: string,
  results: KnowledgeNode[] = [],
): KnowledgeNode[] {
  const q = query.toLowerCase();
  if (
    node.title.toLowerCase().includes(q) ||
    node.summary?.toLowerCase().includes(q) ||
    node.rawText?.toLowerCase().includes(q)
  ) {
    results.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      searchTree(child, query, results);
    }
  }
  return results;
}

export function useDocumentExplorer(
  options: UseDocumentExplorerOptions = {},
): UseDocumentExplorerReturn {
  const [tree, setTree] = useState<KnowledgeNode | null>(
    options.initialTree ?? null,
  );
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const selectNode = useCallback(
    (node: KnowledgeNode) => {
      setSelectedNode(node);
      options.onNodeSelect?.(node);
    },
    [options],
  );

  const toggleNode = useCallback((nodeId: string) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    if (!tree) return;
    const ids = new Set<string>();
    collectAllNodeIds(tree, ids);
    setExpandedNodes(ids);
  }, [tree]);

  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set());
  }, []);

  const searchNodes = useCallback(
    (query: string) => {
      if (!tree || !query) return [];
      return searchTree(tree, query);
    },
    [tree],
  );

  const getNodePath = useCallback(
    (nodeId: string) => {
      if (!tree) return [];
      return findPath(tree, nodeId) ?? [];
    },
    [tree],
  );

  return {
    tree,
    setTree,
    selectedNode,
    expandedNodes,
    selectNode,
    toggleNode,
    expandAll,
    collapseAll,
    searchNodes,
    getNodePath,
  };
}
