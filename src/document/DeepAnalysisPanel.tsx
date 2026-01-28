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
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 18 }}>{node.title}</h3>
        <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
          Pages {node.pageStart}-{node.pageEnd}
        </div>
      </div>

      {/* Summary */}
      <div style={{ padding: 16, borderBottom: "1px solid #e0e0e0" }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: "#1976d2" }}>
          Summary
        </h4>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
          {node.summary || "No summary available"}
        </p>
        {node.detailedSummary && (
          <p
            style={{
              margin: "12px 0 0 0",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#555",
            }}
          >
            {node.detailedSummary}
          </p>
        )}
      </div>

      {/* Key Points */}
      {node.keyPoints.length > 0 && (
        <div style={{ padding: 16, borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: "#1976d2" }}>
            Key Points
          </h4>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {node.keyPoints.map((point, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 4 }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Keywords */}
      {node.keywords.length > 0 && (
        <div style={{ padding: 16, borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: "#1976d2" }}>
            Keywords
          </h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {node.keywords.map((keyword, i) => (
              <span
                key={i}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#e3f2fd",
                  borderRadius: 4,
                  fontSize: 12,
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quotes */}
      {nodeQuotes.length > 0 && (
        <div style={{ padding: 16, borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: "#1976d2" }}>
            Notable Quotes
          </h4>
          {nodeQuotes.map((quote) => (
            <div
              key={quote.id}
              onClick={() => onQuoteClick?.(quote)}
              style={{
                padding: 12,
                backgroundColor: "#fafafa",
                borderLeft: "3px solid #1976d2",
                marginBottom: 8,
                cursor: onQuoteClick ? "pointer" : "default",
              }}
            >
              <p style={{ margin: 0, fontSize: 14, fontStyle: "italic" }}>
                "{quote.text}"
              </p>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
                Page {quote.pageNumber} - {quote.significance}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Metrics */}
      {node.metrics && (
        <div style={{ padding: 16 }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: "#1976d2" }}>
            Metrics
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                {node.metrics.wordCount}
              </div>
              <div style={{ fontSize: 11, color: "#666" }}>Words</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                {node.metrics.readingTimeMinutes}m
              </div>
              <div style={{ fontSize: 11, color: "#666" }}>Reading Time</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {node.metrics.complexity}
              </div>
              <div style={{ fontSize: 11, color: "#666" }}>Complexity</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
