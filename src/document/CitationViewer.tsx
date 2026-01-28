"use client";

import { memo } from "react";
import type { Citation } from "@onegenui/vectorless";

export interface CitationViewerProps {
  citations: Citation[];
  onCitationClick?: (citation: Citation) => void;
}

const typeIcons: Record<string, string> = {
  book: "B",
  article: "A",
  web: "W",
  report: "R",
  thesis: "T",
  other: "O",
};

export const CitationViewer = memo(function CitationViewer({
  citations,
  onCitationClick,
}: CitationViewerProps) {
  // Group citations by type
  const byType = citations.reduce(
    (acc, c) => {
      const type = c.type ?? "other";
      if (!acc[type]) acc[type] = [];
      acc[type].push(c);
      return acc;
    },
    {} as Record<string, Citation[]>,
  );

  if (citations.length === 0) {
    return (
      <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm">
        No citations found in document
      </div>
    );
  }

  return (
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold flex justify-between items-center text-sm sm:text-base">
        <span className="text-white">Citations</span>
        <span className="text-zinc-400 font-normal text-xs sm:text-sm">
          {citations.length} total
        </span>
      </div>

      <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto touch-pan-y">
        {Object.entries(byType).map(([type, typeCitations]) => (
          <div key={type}>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 font-medium text-[0.625rem] sm:text-xs uppercase text-zinc-500 border-b border-white/5">
              {type} ({typeCitations.length})
            </div>
            {typeCitations.map((citation) => (
              <div
                key={citation.id}
                onClick={() => onCitationClick?.(citation)}
                className={`p-3 sm:p-4 border-b border-white/5 flex gap-2.5 sm:gap-3 ${onCitationClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""}`}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-sky-500/10 flex items-center justify-center font-semibold text-sky-400 shrink-0 text-xs sm:text-sm">
                  {typeIcons[citation.type] || "?"}
                </div>
                <div className="flex-1 min-w-0">
                  {citation.title && (
                    <div className="font-medium text-xs sm:text-sm text-white">
                      {citation.title}
                    </div>
                  )}
                  {citation.authors && citation.authors.length > 0 && (
                    <div className="text-[0.625rem] sm:text-xs text-zinc-400 mt-0.5">
                      {citation.authors.join(", ")}
                    </div>
                  )}
                  {citation.year && (
                    <span className="text-[0.625rem] sm:text-xs text-zinc-500 ml-1">
                      ({citation.year})
                    </span>
                  )}
                  <div className="text-[0.625rem] sm:text-xs text-zinc-500 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {citation.text}
                  </div>
                  <div className="text-[0.5rem] sm:text-[0.625rem] text-zinc-600 mt-1">
                    Page {citation.pageNumber}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
