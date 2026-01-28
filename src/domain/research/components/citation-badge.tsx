"use client";

import { memo } from "react";
import type { Source } from "./types";

interface CitationBadgeProps {
  id: string;
  source?: Source;
}

export const CitationBadge = memo(function CitationBadge({
  id,
  source,
}: CitationBadgeProps) {
  if (!source) return <sup className="text-sky-400">[{id}]</sup>;

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 px-1 py-0.5 mx-0.5 text-[10px] font-medium bg-sky-500/20 text-sky-400 rounded hover:bg-sky-500/30 transition-colors cursor-pointer"
    >
      {source.favicon && (
        <img src={source.favicon} alt="" className="w-3 h-3 rounded-sm" />
      )}
      <span>{source.domain || id}</span>
    </a>
  );
});

/**
 * Render content with citation badges replacing [1], [2], etc.
 */
export function renderContentWithCitations(
  content: string,
  sources: Source[],
  renderText?: (
    text: string,
    options?: { inline?: boolean },
  ) => React.ReactNode,
): React.ReactNode[] {
  const parts = content.split(/(\[\d+\])/g);

  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (match) {
      const sourceId = match[1];
      const source = sources.find((s) => s.id === sourceId);
      return <CitationBadge key={i} id={sourceId!} source={source} />;
    }
    if (renderText) {
      return <span key={i}>{renderText(part, { inline: true })}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}
