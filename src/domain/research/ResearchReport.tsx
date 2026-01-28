"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { FileText } from "lucide-react";
import {
  type Source,
  type ReportSection,
  type ResearchReportProps,
  renderContentWithCitations,
  SourceCard,
  ReportSectionComponent,
} from "./components";

// Re-export types for convenience
export type { Source, ReportSection, ResearchReportProps };

// =============================================================================
// Main Component
// =============================================================================

export const ResearchReport = memo(function ResearchReport({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const render =
    renderText ?? ((content: string | null | undefined) => content);
  const props = element.props as ResearchReportProps;
  const {
    title,
    summary,
    sections = [],
    sources = [],
    relatedQueries = [],
    searchQuery,
    totalResults,
  } = props;

  if (!title && !summary && sections.length === 0) {
    return (
      <div className="p-8 text-center text-zinc-500">
        <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>No report content</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Report Card */}
      <div className="rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

          {/* Summary with citations */}
          <div className="text-zinc-300 leading-relaxed text-[15px]">
            {renderContentWithCitations(summary, sources, render)}
          </div>
        </div>

        {/* Sections */}
        <div className="p-6 space-y-8">
          {sections.map((section, i) => (
            <ReportSectionComponent
              key={i}
              section={section}
              sources={sources}
              renderText={render}
            />
          ))}
        </div>

        {/* Related Queries */}
        {relatedQueries.length > 0 && (
          <div className="px-6 pb-6">
            <div className="flex flex-wrap gap-2">
              {relatedQueries.map((query, i) => (
                <button
                  key={i}
                  className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-800/50 rounded-full border border-white/5 hover:border-sky-500/30 hover:text-sky-300 transition-all"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sources Panel */}
      {sources.length > 0 && (
        <div className="rounded-2xl bg-zinc-900/40 border border-white/5 p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              {sources.length} Sources
            </h4>
            {totalResults && totalResults > sources.length && (
              <span className="text-xs text-zinc-500">
                da {totalResults} risultati totali
              </span>
            )}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {sources.map((source) => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
      )}

      {children}
    </div>
  );
});

export default ResearchReport;
