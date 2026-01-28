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
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          padding: 16,
          textAlign: "center",
          color: "#666",
        }}
      >
        No citations found in document
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          fontWeight: 600,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Citations</span>
        <span style={{ color: "#666", fontWeight: 400 }}>
          {citations.length} total
        </span>
      </div>

      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        {Object.entries(byType).map(([type, typeCitations]) => (
          <div key={type}>
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: "#fafafa",
                fontWeight: 500,
                fontSize: 12,
                textTransform: "uppercase",
                color: "#666",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              {type} ({typeCitations.length})
            </div>
            {typeCitations.map((citation) => (
              <div
                key={citation.id}
                onClick={() => onCitationClick?.(citation)}
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #f0f0f0",
                  cursor: onCitationClick ? "pointer" : "default",
                  display: "flex",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    backgroundColor: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    color: "#1976d2",
                    flexShrink: 0,
                  }}
                >
                  {typeIcons[citation.type] || "?"}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {citation.title && (
                    <div style={{ fontWeight: 500, fontSize: 14 }}>
                      {citation.title}
                    </div>
                  )}
                  {citation.authors && citation.authors.length > 0 && (
                    <div style={{ fontSize: 13, color: "#555" }}>
                      {citation.authors.join(", ")}
                    </div>
                  )}
                  {citation.year && (
                    <span style={{ fontSize: 12, color: "#666" }}>
                      ({citation.year})
                    </span>
                  )}
                  <div
                    style={{
                      fontSize: 12,
                      color: "#888",
                      marginTop: 4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {citation.text}
                  </div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 4 }}>
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
