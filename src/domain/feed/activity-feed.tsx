"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { cn } from "../../utils/cn";
import {
  MessageSquare,
  Heart,
  Share2,
  MoreHorizontal,
  Activity,
} from "lucide-react";
import { EmptyState } from "../../utils/shared-components";

type FeedItem = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    handle?: string;
  };
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
  timestamp: string;
};

export type ActivityFeedProps = {
  items?: FeedItem[];
};

export const ActivityFeed = memo(function ActivityFeed({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const render =
    renderText ?? ((content: string | null | undefined) => content);
  const { items = [] } = element.props as ActivityFeedProps;

  if (!items || items.length === 0) {
    return (
      <EmptyState
        icon={<Activity className="w-10 h-10" />}
        message="No activity"
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group relative pl-8 pb-8 last:pb-0"
          data-selectable-item
          data-element-key={element.key}
          data-item-id={item.id}
        >
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-10 bottom-0 w-px bg-white/10 group-last:hidden" />

          {/* Avatar Node */}
          <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 overflow-hidden ring-4 ring-zinc-950 z-10 transition-transform group-hover:scale-110">
            {item.user.avatar ? (
              <img
                src={item.user.avatar}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-500 uppercase">
                {item.user.name[0]}
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
              <div className="w-2 h-2 rounded-full border border-white/20" />
            </div>

            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-tight">
                    {item.user.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    @
                    {item.user.handle ||
                      item.user.name.toLowerCase().replace(" ", "")}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-zinc-600 mt-1 uppercase tracking-wide flex items-center gap-1.5">
                  <span>Logged</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  {item.timestamp}
                </div>
              </div>
              <button className="text-zinc-600 hover:text-white transition-colors p-1 rounded hover:bg-white/5">
                <MoreHorizontal size={14} />
              </button>
            </div>

            <div className="text-sm text-zinc-300 leading-relaxed mb-4">
              {render(item.content, { inline: true })}
            </div>

            {item.image && (
              <div className="rounded-xl overflow-hidden border border-white/10 mb-4 bg-zinc-950 min-h-[150px] relative group/image">
                <img
                  src={item.image}
                  className="w-full h-auto object-cover max-h-[300px] transition-transform duration-700 group-hover/image:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none" />
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-6 border-t border-dashed border-white/10 pt-3 mt-2">
              <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-rose-400 transition-colors group/action py-1 px-2 rounded hover:bg-white/5 -ml-2">
                <Heart
                  size={14}
                  className="group-hover/action:scale-110 transition-transform"
                />
                {item.likes || 0}
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-sky-400 transition-colors group/action py-1 px-2 rounded hover:bg-white/5">
                <MessageSquare
                  size={14}
                  className="group-hover/action:scale-110 transition-transform"
                />
                {item.comments || 0}
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-emerald-400 transition-colors ml-auto py-1 px-2 rounded hover:bg-white/5 -mr-2">
                <Share2 size={14} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      {children}
    </div>
  );
});
