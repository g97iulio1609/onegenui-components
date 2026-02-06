"use client";

import { memo, useState, useCallback } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import {
  FileText,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Hash,
  ExternalLink,
  Tag,
  Users,
  Quote,
  Star,
  Link2,
  Lightbulb,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import type { DocumentIndexProps, DocumentIndexNode } from "./schema";

interface TreeNodeProps {
  node: DocumentIndexNode;
  depth: number;
  accentColor?: string;
  onNodeClick?: (node: DocumentIndexNode) => void;
}

const TreeNodeItem = memo(function TreeNodeItem({
  node,
  depth,
  accentColor,
  onNodeClick,
}: TreeNodeProps) {
  const [expanded, setExpanded] = useState(depth > 0);
  const [showDetails, setShowDetails] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggle = useCallback(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);

  const handleNodeClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowDetails((prev) => !prev);
      if (!expanded) setExpanded(true);
      onNodeClick?.(node);
    },
    [onNodeClick, node, expanded],
  );

  const pageRange =
    node.startPage === node.endPage
      ? `p. ${node.startPage}`
      : `pp. ${node.startPage}-${node.endPage}`;

  const hasMetadata =
    node.entityCount || node.quoteCount || node.importance !== undefined;
  const hasTags = node.tags && node.tags.length > 0;
  const hasKeyPoints = node.keyPoints && node.keyPoints.length > 0;
  const hasRelated = node.relatedNodes && node.relatedNodes.length > 0;

  return (
    <div className="select-none">
      <div
        onClick={toggle}
        className={cn(
          "flex items-start gap-1.5 sm:gap-2 py-1.5 px-1.5 sm:px-2 rounded-md transition-colors group touch-manipulation",
          hasChildren && "cursor-pointer hover:bg-white/5",
          depth === 0 && "font-semibold",
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {hasChildren ? (
          <span className="mt-0.5 shrink-0 text-muted-foreground">
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        ) : (
          <span className="mt-0.5 shrink-0 w-4" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span
              className={cn(
                "text-xs sm:text-sm truncate",
                depth === 0 ? "text-foreground" : "text-foreground/80",
              )}
            >
              {node.title}
            </span>
            <span
              className="text-[0.5rem] sm:text-[0.625rem] px-1 sm:px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground shrink-0"
              style={accentColor ? { backgroundColor: `${accentColor}20` } : {}}
            >
              {pageRange}
            </span>
            {node.importance !== undefined && node.importance >= 0.7 && (
              <Star
                className="h-3 w-3 text-amber-400 shrink-0"
                fill="currentColor"
              />
            )}
            {hasMetadata && (
              <span className="flex items-center gap-1 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground">
                {node.entityCount ? (
                  <span className="flex items-center gap-0.5">
                    <Users className="h-2.5 w-2.5" />
                    {node.entityCount}
                  </span>
                ) : null}
                {node.quoteCount ? (
                  <span className="flex items-center gap-0.5">
                    <Quote className="h-2.5 w-2.5" />
                    {node.quoteCount}
                  </span>
                ) : null}
              </span>
            )}
            {onNodeClick && (
              <button
                onClick={handleNodeClick}
                className={cn(
                  "transition-opacity p-0.5 rounded hover:bg-white/10",
                  showDetails
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                )}
                title={showDetails ? "Hide details" : "View section details"}
              >
                {showDetails ? (
                  <ChevronDown
                    className="h-3 w-3"
                    style={{ color: accentColor }}
                  />
                ) : (
                  <ExternalLink
                    className="h-3 w-3"
                    style={{ color: accentColor }}
                  />
                )}
              </button>
            )}
          </div>

          {/* Tags row */}
          {hasTags && expanded && (
            <div className="flex flex-wrap items-center gap-1 mt-1">
              <Tag className="h-2.5 w-2.5 text-muted-foreground" />
              {node.tags!.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.5rem] sm:text-[0.625rem] px-1.5 py-0.5 rounded-full bg-white/5 text-muted-foreground"
                  style={accentColor ? { borderColor: `${accentColor}30`, borderWidth: 1 } : {}}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Summary */}
          {node.summary && expanded && (
            <p
              className={cn(
                "text-xs text-muted-foreground mt-1",
                !showDetails && "line-clamp-2",
              )}
            >
              {node.summary}
            </p>
          )}

          {/* Key points (shown when details expanded) */}
          {showDetails && hasKeyPoints && (
            <div className="mt-1.5 space-y-0.5">
              {node.keyPoints!.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground"
                >
                  <Lightbulb className="h-3 w-3 shrink-0 mt-0.5 text-amber-400/70" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* Related nodes (shown when details expanded) */}
          {showDetails && hasRelated && (
            <div className="flex items-center gap-1 mt-1 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground">
              <Link2 className="h-2.5 w-2.5" />
              <span>Related: {node.relatedNodes!.join(", ")}</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {node.children!.map((child, index) => (
              <TreeNodeItem
                key={child.nodeId || index}
                node={child}
                depth={depth + 1}
                accentColor={accentColor}
                onNodeClick={onNodeClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export const DocumentIndex = memo(function DocumentIndex({
  element,
  onAction,
}: ComponentRenderProps) {
  const {
    title,
    description,
    pageCount,
    nodes,
    accentColor = "#3b82f6",
    collapsed: initialCollapsed = false,
  } = element.props as DocumentIndexProps;

  const [collapsed, setCollapsed] = useState(initialCollapsed);

  const handleNodeClick = useCallback(
    (node: DocumentIndexNode) => {
      onAction?.({
        name: "view_section",
        params: {
          elementKey: element.key,
          nodeId: node.nodeId,
          title: node.title,
          startPage: node.startPage,
          endPage: node.endPage,
          summary: node.summary,
        },
      });
    },
    [onAction, element.key],
  );

  // Count total nodes recursively
  const countNodes = (nodes: DocumentIndexNode[]): number =>
    nodes.reduce(
      (acc, n) => acc + 1 + (n.children ? countNodes(n.children) : 0),
      0,
    );
  const totalNodes = nodes ? countNodes(nodes) : 0;

  return (
    <div className="rounded-lg sm:rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors gap-2 sm:gap-3 touch-manipulation"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: accentColor }} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground truncate">{title}</h3>
            {description && (
              <p className="text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1 max-w-md">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 pl-10 sm:pl-0">
          <div className="flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground">
            <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{pageCount} pages</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground">
            <Hash className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{totalNodes} sections</span>
          </div>
          {collapsed ? (
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" />
          )}
        </div>
      </div>

      {/* Tree Content */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-2 sm:p-3">
              {nodes && nodes.length > 0 ? (
                nodes.map((node, index) => (
                  <TreeNodeItem
                    key={node.nodeId || index}
                    node={node}
                    depth={0}
                    accentColor={accentColor}
                    onNodeClick={handleNodeClick}
                  />
                ))
              ) : (
                <p className="text-xs sm:text-sm text-muted-foreground text-center py-3 sm:py-4">
                  No sections found
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
