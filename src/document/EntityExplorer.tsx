"use client";

import { memo, useState, useMemo } from "react";
import type { Entity } from "@onegenui/vectorless";

export interface EntityExplorerProps {
  entities: Entity[];
  onEntityClick?: (entity: Entity) => void;
  filterTypes?: string[];
}

const typeColors: Record<string, string> = {
  person: "#4caf50",
  organization: "#2196f3",
  place: "#ff9800",
  date: "#9c27b0",
  concept: "#f44336",
  event: "#00bcd4",
  number: "#795548",
  term: "#607d8b",
};

export const EntityExplorer = memo(function EntityExplorer({
  entities,
  onEntityClick,
  filterTypes,
}: EntityExplorerProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique types
  const types = useMemo(() => {
    const typeSet = new Set(entities.map((e) => e.type));
    return Array.from(typeSet).sort();
  }, [entities]);

  // Filter entities
  const filteredEntities = useMemo(() => {
    let result = entities;

    if (filterTypes && filterTypes.length > 0) {
      result = result.filter((e) => filterTypes.includes(e.type));
    }

    if (selectedType) {
      result = result.filter((e) => e.type === selectedType);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.value.toLowerCase().includes(query) ||
          e.normalized?.toLowerCase().includes(query),
      );
    }

    return result;
  }, [entities, filterTypes, selectedType, searchQuery]);

  // Group by type
  const groupedEntities = useMemo(() => {
    const groups: Record<string, Entity[]> = {};
    for (const entity of filteredEntities) {
      const type = entity.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(entity);
    }
    return groups;
  }, [filteredEntities]);

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
        }}
      >
        Entities ({filteredEntities.length})
      </div>

      {/* Search & Filter */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search entities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            minWidth: 150,
            padding: "6px 12px",
            border: "1px solid #ddd",
            borderRadius: 4,
            fontSize: 14,
          }}
        />
        <select
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value || null)}
          style={{
            padding: "6px 12px",
            border: "1px solid #ddd",
            borderRadius: 4,
            fontSize: 14,
          }}
        >
          <option value="">All types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Type badges */}
      <div
        style={{
          padding: "8px 16px",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {types.map((type) => {
          const count = entities.filter((e) => e.type === type).length;
          return (
            <button
              key={type}
              onClick={() =>
                setSelectedType((prev) => (prev === type ? null : type))
              }
              style={{
                padding: "4px 8px",
                borderRadius: 12,
                border: "none",
                backgroundColor:
                  selectedType === type ? typeColors[type] : "#e0e0e0",
                color: selectedType === type ? "white" : "#333",
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: typeColors[type] || "#999",
                }}
              />
              {type} ({count})
            </button>
          );
        })}
      </div>

      {/* Entity list */}
      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        {Object.entries(groupedEntities).map(([type, typeEntities]) => (
          <div key={type}>
            <div
              style={{
                padding: "6px 16px",
                backgroundColor: "#fafafa",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                color: typeColors[type] || "#666",
                position: "sticky",
                top: 0,
              }}
            >
              {type}
            </div>
            {typeEntities.map((entity) => (
              <div
                key={entity.id}
                onClick={() => onEntityClick?.(entity)}
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid #f0f0f0",
                  cursor: onEntityClick ? "pointer" : "default",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>
                    {entity.value}
                  </div>
                  {entity.normalized && entity.normalized !== entity.value && (
                    <div style={{ fontSize: 12, color: "#666" }}>
                      {entity.normalized}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 12, color: "#999" }}>
                  {entity.occurrences.length} occurrences
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
