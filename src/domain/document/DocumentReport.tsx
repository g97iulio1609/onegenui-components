"use client";

import { memo, useState } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { FileText, ChevronDown, ChevronRight, BookOpen, Users, Quote, Lightbulb, Clock } from "lucide-react";
import type { DocumentReportProps, DocReportSection } from "./schema";

// Section component
const SectionItem = memo(function SectionItem({
  section,
  depth = 0,
}: {
  section: DocReportSection;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = section.children && section.children.length > 0;

  return (
    <div className={`${depth > 0 ? "ml-3 sm:ml-4 border-l border-white/5 pl-3 sm:pl-4" : ""}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left py-2 sm:py-3 flex items-start gap-2 hover:bg-white/5 rounded-lg px-2 -mx-2 transition-colors"
      >
        {hasChildren ? (
          expanded ? <ChevronDown className="w-4 h-4 mt-0.5 text-zinc-500" /> : <ChevronRight className="w-4 h-4 mt-0.5 text-zinc-500" />
        ) : (
          <div className="w-4" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-medium text-white text-sm sm:text-base">{section.title}</span>
            <span className="text-xs text-zinc-500">p.{section.pageStart}-{section.pageEnd}</span>
          </div>
          {!expanded && section.summary && (
            <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{section.summary}</p>
          )}
        </div>
      </button>

      {expanded && (
        <div className="pb-3 space-y-3">
          {section.summary && (
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6">{section.summary}</p>
          )}

          {section.keyPoints.length > 0 && (
            <div className="pl-6">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Key Points</div>
              <ul className="space-y-1">
                {section.keyPoints.map((point, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 flex gap-2">
                    <span className="text-sky-400">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.entities.length > 0 && (
            <div className="pl-6 flex flex-wrap gap-1.5">
              {section.entities.slice(0, 8).map((e, i) => (
                <span key={i} className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-white/5">
                  {e.value}
                </span>
              ))}
            </div>
          )}

          {section.quotes.length > 0 && (
            <div className="pl-6 space-y-2">
              {section.quotes.slice(0, 2).map((q, i) => (
                <blockquote key={i} className="text-xs italic text-zinc-400 border-l-2 border-amber-500/50 pl-3">
                  "{q.text}"
                  {q.speaker && <span className="text-zinc-500 not-italic ml-2">- {q.speaker}</span>}
                </blockquote>
              ))}
            </div>
          )}

          {hasChildren && section.children!.map((child) => (
            <SectionItem key={child.id} section={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
});

// Semantic Panel component
const SemanticPanel = memo(function SemanticPanel({ overlay }: { overlay: DocumentReportProps["semanticOverlay"] }) {
  const [tab, setTab] = useState<"entities" | "insights" | "quotes" | "timeline">("entities");

  return (
    <div className="rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden">
      <div className="flex border-b border-white/5 overflow-x-auto">
        {[
          { key: "entities", icon: Users, label: "Entities" },
          { key: "insights", icon: Lightbulb, label: "Insights" },
          { key: "quotes", icon: Quote, label: "Quotes" },
          ...(overlay.timeline?.length ? [{ key: "timeline", icon: Clock, label: "Timeline" }] : []),
        ].map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setTab(key as typeof tab)}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap transition-colors ${
              tab === key ? "text-sky-400 border-b-2 border-sky-400 bg-sky-400/5" : "text-zinc-400 hover:text-zinc-300"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      <div className="p-3 sm:p-4 max-h-64 overflow-y-auto">
        {tab === "entities" && (
          <div className="flex flex-wrap gap-2">
            {(overlay.topEntities ?? []).slice(0, 20).map((e) => (
              <div key={e.id} className="px-2.5 py-1.5 bg-zinc-800/50 rounded-lg border border-white/5">
                <div className="text-xs sm:text-sm text-white">{e.value}</div>
                <div className="text-[0.625rem] text-zinc-500 capitalize">{e.type} - {e.occurrenceCount}x</div>
              </div>
            ))}
          </div>
        )}

        {tab === "insights" && (
          <ul className="space-y-2">
            {(overlay.keyInsights ?? []).map((insight, i) => (
              <li key={i} className="flex gap-2 text-xs sm:text-sm text-zinc-300">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                {insight}
              </li>
            ))}
          </ul>
        )}

        {tab === "quotes" && (
          <div className="space-y-3">
            {(overlay.globalQuotes ?? []).slice(0, 5).map((q, i) => (
              <blockquote key={i} className="text-xs sm:text-sm italic text-zinc-300 border-l-2 border-amber-500/50 pl-3">
                "{q.text}"
                {q.speaker && <span className="text-zinc-500 not-italic ml-2">- {q.speaker}</span>}
              </blockquote>
            ))}
          </div>
        )}

        {tab === "timeline" && overlay.timeline && (
          <div className="space-y-2">
            {overlay.timeline.map((evt, i) => (
              <div key={i} className="flex gap-3 text-xs sm:text-sm">
                <span className="text-sky-400 font-mono shrink-0">{evt.date}</span>
                <span className="text-zinc-300">{evt.event}</span>
                <span className="text-zinc-500 ml-auto">p.{evt.pageRef}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

// Main component
export const DocumentReport = memo(function DocumentReport({ element, children }: ComponentRenderProps) {
  const props = element.props as DocumentReportProps;
  const { title, description, totalPages, filename, sections = [], semanticOverlay, sources = [] } = props;

  if (!title && !description && sections.length === 0) {
    return (
      <div className="p-4 sm:p-8 text-center text-zinc-500">
        <FileText className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
        <p className="text-sm">No document content</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Card */}
      <div className="rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-white/5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{title}</h2>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <BookOpen className="w-4 h-4" />
              <span>{totalPages} pages</span>
            </div>
          </div>
          {filename && <p className="text-xs text-zinc-500 mb-3">{filename}</p>}
          <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm lg:text-[15px]">{description}</p>
        </div>

        {/* Sections */}
        <div className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Document Structure</h3>
          <div className="space-y-1">
            {sections.map((section, idx) => (
              <SectionItem key={`${section.id}-${idx}`} section={section} />
            ))}
          </div>
        </div>
      </div>

      {/* Semantic Overlay Panel */}
      {semanticOverlay && ((semanticOverlay.topEntities?.length ?? 0) > 0 || (semanticOverlay.keyInsights?.length ?? 0) > 0) && (
        <SemanticPanel overlay={semanticOverlay} />
      )}

      {/* Sources */}
      {sources.length > 0 && (
        <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-3 sm:p-4">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">{sources.length} Sections</h4>
          <div className="flex flex-wrap gap-1.5">
            {sources.slice(0, 15).map((s) => (
              <span key={s.id} className="px-2 py-1 text-xs text-zinc-400 bg-zinc-800/50 rounded">
                {s.title} (p.{s.pageNumber})
              </span>
            ))}
          </div>
        </div>
      )}

      {children}
    </div>
  );
});

export default DocumentReport;
