"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { cn } from "../../utils/cn";
import { ArrowUpRight, Clock, Calendar, FileText } from "lucide-react";
import { formatDateShort } from "../../utils/format-utils";
import { EmptyState } from "../../utils/shared-components";

type Article = {
  id?: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  date?: string;
  readTime?: string;
  category?: string;
  url?: string;
};

export type ArticleCardProps = {
  article?: Article;
};

export const ArticleCard = memo(function ArticleCard({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const render =
    renderText ?? ((content: string | null | undefined) => content);
  const { article } = element.props as ArticleCardProps;

  if (!article) {
    return (
      <EmptyState
        icon={<FileText className="w-10 h-10" />}
        message="No article"
      />
    );
  }

  return (
    <div className="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500 z-10" />

      <div className="flex flex-col sm:flex-row h-full">
        {/* Image Section */}
        <div className="sm:w-1/3 min-h-[200px] relative overflow-hidden bg-zinc-800">
          {article.coverImage ? (
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <img
                src={article.coverImage}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                No Cover
              </span>
            </div>
          )}
          {article.category && (
            <div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
              {article.category}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-3">
            {article.date && (
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(article.date).toLocaleDateString()}
              </div>
            )}
            {article.readTime && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {article.readTime}
                </div>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-sky-300 transition-colors">
            {article.title}
          </h3>

          {article.excerpt && (
            <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6 flex-1">
              {render(article.excerpt, { inline: true })}
            </p>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-dashed border-white/10 mt-auto">
            {article.author && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                  {article.author.avatar && <img src={article.author.avatar} />}
                </div>
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">
                  {article.author.name}
                </span>
              </div>
            )}

            <div className="relative overflow-hidden w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
});
