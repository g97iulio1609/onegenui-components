"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Check, Clock, Plus, Sparkles } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { StatusBadge, type StatusVariant } from "../../utils/shared-components";
import { getTodoListAdapter } from "./adapters";
import { useTodoListLogic } from "./hooks";
import type { TodoItem } from "./ports";

// Map priority to shared badge variant
const PRIORITY_TO_VARIANT: Record<string, StatusVariant> = {
  high: "error",
  medium: "warning",
  low: "success",
};

export const TodoList = memo(function TodoList({
  element,
  children,
}: ComponentRenderProps) {
  const { title, items: initialItems } = element.props as {
    title?: string | null;
    items?: TodoItem[] | null;
  };

  // Use adapter and hook for logic
  const adapter = useMemo(() => getTodoListAdapter(), []);
  const { items, completedCount, totalCount, toggleItem } = useTodoListLogic(
    adapter,
    { initialItems: initialItems || [] },
  );

  // Auto-save task list data to database
  useDomainAutoSave("task", element.key, {
    title: title || "Todo List",
    items: items.map((item) => ({
      id: item.id,
      title: item.text,
      status: item.status || "pending",
      priority: item.priority || "medium",
      time: item.time,
      subItems: item.subItems?.map((sub) => ({
        id: sub.id,
        title: sub.text,
        status: sub.status || "pending",
        priority: sub.priority,
      })),
    })),
  });

  const renderItems = (itemsToRender: TodoItem[], depth = 0) => (
    <div className="flex flex-col gap-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {itemsToRender.map((item, i) => {
          return (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              key={item.id}
              className="flex flex-col gap-2"
            >
              <div
                data-selectable-item
                data-element-key={element.key}
                data-item-id={item.id}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "group relative flex items-center gap-4 py-3.5 px-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden isolate",
                  item.status === "done"
                    ? "bg-white/[0.02] border-white/5 opacity-60"
                    : "glass-panel bg-card/60 hover:bg-card/80 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5",
                  depth > 0 && "ml-6 border-l-2 border-l-white/10",
                )}
              >
                {depth === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                )}

                {/* Custom Checkbox */}
                <div
                  data-checkbox
                  data-interactive
                  className={cn(
                    "w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 shadow-sm relative overflow-hidden",
                    item.status === "done"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                      : "border-white/20 bg-black/20 group-hover:border-indigo-400/50",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  <AnimatePresence>
                    {item.status === "done" && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <Check
                          size={14}
                          strokeWidth={3.5}
                          className="text-white drop-shadow-sm"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-[15px] font-medium transition-all duration-300 truncate",
                      item.status === "done"
                        ? "text-muted-foreground line-through decoration-white/20 decoration-2"
                        : "text-foreground group-hover:text-white",
                    )}
                  >
                    {item.text}
                  </span>

                  {item.time && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
                      <Clock
                        size={11}
                        className={
                          item.status === "done"
                            ? "opacity-50"
                            : "text-indigo-400"
                        }
                      />
                      {item.time}
                    </div>
                  )}
                </div>

                {/* Priority Badge */}
                {item.priority && (
                  <StatusBadge
                    label={item.priority}
                    variant={PRIORITY_TO_VARIANT[item.priority] || "neutral"}
                  />
                )}
              </div>

              {item.subItems &&
                item.subItems.length > 0 &&
                renderItems(item.subItems, depth + 1)}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  if (!items || items.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950 p-10 flex flex-col items-center justify-center text-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-50" />
        {title && (
          <h3 className="relative z-10 m-0 mb-2 text-xl font-bold text-foreground">
            {title}
          </h3>
        )}
        <div className="relative z-10 flex flex-col items-center gap-3 text-muted-foreground mt-4">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <Sparkles className="text-indigo-400 opacity-60" size={24} />
          </div>
          <p className="text-sm font-medium">No tasks yet</p>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-xs font-bold text-foreground transition-all">
            <Plus size={14} /> Add First Task
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      {/* Header */}
      {title && (
        <div className="flex items-center justify-between px-2">
          <h3 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="text-xs font-bold text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              {completedCount}/{totalCount} Done
            </div>
          </div>
        </div>
      )}

      {renderItems(items)}
      {children}
    </div>
  );
});
