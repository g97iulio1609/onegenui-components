"use client";

import { memo } from "react";
import type { KnowledgeNode, Quote } from "@onegenui/vectorless";

export interface DeepAnalysisPanelProps {
  node: KnowledgeNode;
  quotes?: Quote[];
  onQuoteClick?: (quote: Quote) => void;
}

export const DeepAnalysisPanel = memo(function DeepAnalysisPanel({
  node,
  quotes = [],
  onQuoteClick,
}: DeepAnalysisPanelProps) {
  const nodeQuotes = quotes.filter((q) => q.nodeId === node.id);

  return (
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      {/* Header */}
      <div className="p-3 sm:p-4 bg-zinc-800/50 border-b border-white/10">
        <h3 className="m-0 text-base sm:text-lg font-semibold text-white">{node.title}</h3>
        <div className="text-[0.625rem] sm:text-xs text-zinc-500 mt-1">
          Pages {node.pageStart}-{node.pageEnd}
        </div>
      </div>

      {/* Summary */}
      <div className="p-3 sm:p-4 border-b border-white/10">
        <h4 className="m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400">
          Summary
        </h4>
        <p className="m-0 text-xs sm:text-sm leading-relaxed text-zinc-300">
          {node.summary || "No summary available"}
        </p>
        {node.detailedSummary && (
          <p className="mt-2 sm:mt-3 m-0 text-xs sm:text-sm leading-relaxed text-zinc-400">
            {node.detailedSummary}
          </p>
        )}
      </div>

      {/* Key Points */}
      {node.keyPoints.length > 0 && (
        <div className="p-3 sm:p-4 border-b border-white/10">
          <h4 className="m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400">
            Key Points
          </h4>
          <ul className="m-0 pl-4 sm:pl-5 space-y-1">
            {node.keyPoints.map((point, i) => (
              <li key={i} className="text-xs sm:text-sm text-zinc-300">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Keywords */}
      {node.keywords.length > 0 && (
        <div className="p-3 sm:p-4 border-b border-white/10">
          <h4 className="m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400">
            Keywords
          </h4>
          <div className="flex gap-1.5 sm:gap-2 flex-wrap">
            {node.keywords.map((keyword, i) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:py-1 bg-sky-500/10 rounded text-[0.625rem] sm:text-xs text-sky-300 border border-sky-500/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quotes */}
      {nodeQuotes.length > 0 && (
        <div className="p-3 sm:p-4 border-b border-white/10">
          <h4 className="m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400">
            Notable Quotes
          </h4>
          <div className="space-y-2">
            {nodeQuotes.map((quote) => (
              <div
                key={quote.id}
                onClick={() => onQuoteClick?.(quote)}
                className={`p-2.5 sm:p-3 bg-zinc-800/30 border-l-2 sm:border-l-3 border-sky-500 rounded-r ${onQuoteClick ? "cursor-pointer hover:bg-zinc-800/50 touch-manipulation" : ""}`}
              >
                <p className="m-0 text-xs sm:text-sm italic text-zinc-300">
                  "{quote.text}"
                </p>
                <div className="text-[0.625rem] sm:text-xs text-zinc-500 mt-1.5">
                  Page {quote.pageNumber} - {quote.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metrics */}
      {node.metrics && (
        <div className="p-3 sm:p-4">
          <h4 className="m-0 mb-2 text-xs sm:text-sm font-medium text-sky-400">
            Metrics
          </h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg">
              <div className="text-base sm:text-xl font-semibold text-white">
                {node.metrics.wordCount}
              </div>
              <div className="text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase">Words</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg">
              <div className="text-base sm:text-xl font-semibold text-white">
                {node.metrics.readingTimeMinutes}m
              </div>
              <div className="text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase">Reading Time</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg">
              <div className="text-base sm:text-xl font-semibold capitalize text-white">
                {node.metrics.complexity}
              </div>
              <div className="text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase">Complexity</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
