"use client";

import { memo, useState, useMemo } from "react";
import type { Entity } from "@onegenui/vectorless";

export interface EntityExplorerProps {
  entities: Entity[];
  onEntityClick?: (entity: Entity) => void;
  filterTypes?: string[];
}

const typeColors: Record<string, string> = {
  person: "emerald",
  organization: "sky",
  place: "amber",
  date: "purple",
  concept: "rose",
  event: "cyan",
  number: "stone",
  term: "slate",
};

const typeColorClasses: Record<string, { bg: string; text: string; dot: string }> = {
  person: { bg: "bg-emerald-500", text: "text-emerald-400", dot: "bg-emerald-500" },
  organization: { bg: "bg-sky-500", text: "text-sky-400", dot: "bg-sky-500" },
  place: { bg: "bg-amber-500", text: "text-amber-400", dot: "bg-amber-500" },
  date: { bg: "bg-purple-500", text: "text-purple-400", dot: "bg-purple-500" },
  concept: { bg: "bg-rose-500", text: "text-rose-400", dot: "bg-rose-500" },
  event: { bg: "bg-cyan-500", text: "text-cyan-400", dot: "bg-cyan-500" },
  number: { bg: "bg-stone-500", text: "text-stone-400", dot: "bg-stone-500" },
  term: { bg: "bg-slate-500", text: "text-slate-400", dot: "bg-slate-500" },
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
    <div className="font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm">
      <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white">
        Entities ({filteredEntities.length})
      </div>

      {/* Search & Filter */}
      <div className="p-2.5 sm:p-4 border-b border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          type="text"
          placeholder="Search entities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 min-w-0 px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0"
        />
        <select
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value || null)}
          className="px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0"
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
      <div className="px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 flex gap-1.5 sm:gap-2 flex-wrap">
        {types.map((type) => {
          const count = entities.filter((e) => e.type === type).length;
          const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
          return (
            <button
              key={type}
              onClick={() =>
                setSelectedType((prev) => (prev === type ? null : type))
              }
              className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border-none text-[0.625rem] sm:text-xs cursor-pointer flex items-center gap-1 sm:gap-1.5 transition-colors touch-manipulation min-h-[1.75rem] ${
                selectedType === type
                  ? `${colors.bg} text-white`
                  : "bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${colors.dot}`} />
              {type} ({count})
            </button>
          );
        })}
      </div>

      {/* Entity list */}
      <div className="max-h-[280px] sm:max-h-[400px] overflow-y-auto touch-pan-y">
        {Object.entries(groupedEntities).map(([type, typeEntities]) => {
          const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
          return (
            <div key={type}>
              <div className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 text-[0.625rem] sm:text-xs font-medium uppercase sticky top-0 ${colors.text}`}>
                {type}
              </div>
              {typeEntities.map((entity) => (
                <div
                  key={entity.id}
                  onClick={() => onEntityClick?.(entity)}
                  className={`px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 flex justify-between items-center gap-2 ${
                    onEntityClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-xs sm:text-sm text-white truncate">
                      {entity.value}
                    </div>
                    {entity.normalized && entity.normalized !== entity.value && (
                      <div className="text-[0.625rem] sm:text-xs text-zinc-500 truncate">
                        {entity.normalized}
                      </div>
                    )}
                  </div>
                  <div className="text-[0.625rem] sm:text-xs text-zinc-600 shrink-0">
                    {entity.occurrences.length} occ
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
});
