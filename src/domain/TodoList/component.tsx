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

const PRIORITY_TO_VARIANT: Record<string, StatusVariant> = {
  high: "error",
  medium: "warning",
  low: "success",
};

/** Animation variants */
const itemVariants = {
  hidden: { opacity: 0, y: "0.625rem", scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const checkVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: { scale: 1, rotate: 0 },
  exit: { scale: 0, rotate: 45 },
};

export const TodoList = memo(function TodoList({
  element,
  children,
}: ComponentRenderProps) {
  const { title, items: initialItems } = element.props as {
    title?: string | null;
    items?: TodoItem[] | null;
  };

  const adapter = useMemo(() => getTodoListAdapter(), []);
  const { items, completedCount, totalCount, toggleItem } = useTodoListLogic(
    element.key,
    adapter,
    { initialItems: initialItems || [] },
  );

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
    <div className="flex flex-col gap-2 sm:gap-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {itemsToRender.map((item, i) => {
          return (
            <motion.div
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, delay: i * 0.05 }}
              key={item.id}
              className="flex flex-col gap-1.5 sm:gap-2"
            >
              <div
                data-selectable-item
                data-element-key={element.key}
                data-item-id={item.id}
                onClick={() => toggleItem(item.id)}
                className={cn(
                  "group relative flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden isolate touch-manipulation",
                  item.status === "done"
                    ? "bg-white/[0.02] border-white/5 opacity-60"
                    : "glass-panel bg-card/60 hover:bg-card/80 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 active:scale-[0.98]",
                  depth > 0 && "ml-4 sm:ml-6 border-l-2 border-l-white/10",
                )}
              >
                {depth === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                )}

                {/* Custom Checkbox - larger touch target on mobile */}
                <div
                  data-checkbox
                  data-interactive
                  className={cn(
                    "w-6 h-6 sm:w-6 sm:h-6 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 shadow-sm relative overflow-hidden min-w-[1.5rem]",
                    item.status === "done"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_0_0.75rem_rgba(99,102,241,0.4)]"
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
                        variants={checkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <Check
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white drop-shadow-sm"
                          strokeWidth={3.5}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-sm sm:text-[0.9375rem] font-medium transition-all duration-300 truncate",
                      item.status === "done"
                        ? "text-muted-foreground line-through decoration-white/20 decoration-2"
                        : "text-foreground group-hover:text-white",
                    )}
                  >
                    {item.text}
                  </span>

                  {item.time && (
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-muted-foreground/80">
                      <Clock
                        className={cn(
                          "w-2.5 h-2.5 sm:w-3 sm:h-3",
                          item.status === "done"
                            ? "opacity-50"
                            : "text-indigo-400",
                        )}
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-xl sm:rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 sm:p-10 flex flex-col items-center justify-center text-center group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-50" />
        {title && (
          <h3 className="relative z-10 m-0 mb-2 text-lg sm:text-xl font-bold text-foreground">
            {title}
          </h3>
        )}
        <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 text-muted-foreground mt-3 sm:mt-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <Sparkles className="text-indigo-400 opacity-60 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="text-xs sm:text-sm font-medium">No tasks yet</p>
          <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-[0.625rem] sm:text-xs font-bold text-foreground transition-all min-h-[2.5rem] touch-manipulation">
            <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Add First Task
          </button>
        </div>
        {children}
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 sm:gap-6">
      {/* Header */}
      {title && (
        <div className="flex items-center justify-between gap-2 px-1 sm:px-2">
          <h3 className="text-xl sm:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <div className="text-[0.625rem] sm:text-xs font-bold text-muted-foreground bg-white/5 px-2 sm:px-2.5 py-1 rounded-full border border-white/5">
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
