"use client";

import { memo } from "react";
import { ExternalLink, Globe } from "lucide-react";
import type { Source } from "./types";

interface SourceCardProps {
  source: Source;
}

export const SourceCard = memo(function SourceCard({
  source,
}: SourceCardProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-sky-500/30 hover:bg-zinc-800 transition-all"
    >
      <div className="w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center flex-shrink-0">
        {source.favicon ? (
          <img src={source.favicon} alt="" className="w-5 h-5 rounded" />
        ) : (
          <Globe className="w-4 h-4 text-zinc-400" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white truncate group-hover:text-sky-300 transition-colors">
          {source.title}
        </div>
        <div className="text-xs text-zinc-500 truncate">{source.domain}</div>
      </div>
      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors flex-shrink-0" />
    </a>
  );
});
