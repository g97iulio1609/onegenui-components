"use client";

import { memo, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { FileText, ChevronDown, BookOpen } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import type { SourceCitationProps, Citation } from "./schema";

/**
 * Compact SourceCitation component - similar style to web sources
 * Shows citations as small, discrete items that expand on demand
 */
export const SourceCitation = memo(function SourceCitation({
  element,
}: ComponentRenderProps) {
  const {
    title,
    citations = [],
    collapsed: initialCollapsed = true,
    accentColor = "#3b82f6",
  } = element.props as SourceCitationProps;

  const [expanded, setExpanded] = useState(!initialCollapsed);
  const visibleCitations = expanded ? citations : citations.slice(0, 4);

  if (citations.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      {/* Compact header */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div className="flex -space-x-1">
          {citations.slice(0, 3).map((c, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-zinc-900 flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <FileText size={10} style={{ color: accentColor }} />
            </div>
          ))}
        </div>
        <span className="font-medium">{citations.length} sources</span>
        <span className="text-muted-foreground/60">·</span>
        <span className="text-muted-foreground/60 truncate max-w-32">
          {title}
        </span>
      </div>

      {/* Compact citation list */}
      <div className="flex flex-col gap-1">
        {visibleCitations.map((citation, idx) => (
          <CompactCitation
            key={citation.id || idx}
            citation={citation}
            index={idx}
            accentColor={accentColor}
          />
        ))}
      </div>

      {/* Show all button */}
      {citations.length > 4 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-1 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
        >
          {expanded ? "Mostra meno" : `Mostra tutte (${citations.length})`}
          <ChevronDown
            size={14}
            className={cn("transition-transform", expanded && "rotate-180")}
          />
        </button>
      )}
    </div>
  );
});

const CompactCitation = memo(function CompactCitation({
  citation,
  index,
  accentColor,
}: {
  citation: Citation;
  index: number;
  accentColor: string;
}) {
  const [showExcerpt, setShowExcerpt] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group"
    >
      <button
        onClick={() => setShowExcerpt(!showExcerpt)}
        className="w-full flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all text-left"
      >
        {/* Citation number badge */}
        <span
          className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-medium"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          {citation.id}
        </span>

        <div className="flex-1 min-w-0">
          {/* Section title */}
          <div className="text-xs font-medium text-foreground/80 line-clamp-1 leading-tight">
            {citation.sectionTitle || citation.text?.slice(0, 50) || "Source"}
          </div>
          {/* Page number */}
          <div className="flex items-center gap-1 mt-0.5">
            <BookOpen size={10} className="text-muted-foreground/50" />
            <span className="text-[10px] text-muted-foreground/60">
              p. {citation.pageNumber}
            </span>
          </div>
        </div>

        <ChevronDown
          size={12}
          className={cn(
            "shrink-0 text-muted-foreground/40 transition-transform",
            showExcerpt && "rotate-180",
          )}
        />
      </button>

      {/* Expandable excerpt */}
      {showExcerpt && citation.text && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="ml-7 mt-1 mb-2 p-2 rounded-lg bg-white/[0.02] border-l-2"
          style={{ borderColor: accentColor }}
        >
          <p className="text-xs text-foreground/70 italic leading-relaxed">
            "{citation.text}"
          </p>
        </motion.div>
      )}
    </motion.div>
  );
});
