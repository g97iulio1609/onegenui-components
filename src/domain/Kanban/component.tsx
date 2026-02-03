"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Plus, Layout } from "lucide-react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import { KanbanCard, type KanbanColumn } from "./components";
import { getKanbanAdapter, getKanbanDragAdapter } from "./adapters";
import { useKanbanState, useKanbanDrag } from "./hooks";

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const columnVariants = {
  hidden: { opacity: 0, x: "1rem" },
  visible: { opacity: 1, x: 0 },
};

export const Kanban = memo(function Kanban({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    columns: initialColumns,
    lock = false,
  } = element.props as {
    title?: string | null;
    columns?: KanbanColumn[] | null;
    lock?: boolean;
  };

  const adapter = useMemo(() => getKanbanAdapter(), []);
  const dragAdapter = useMemo(() => getKanbanDragAdapter(), []);

  const { displayColumns, moveItem, toggleSubItem, isSubItemCompleted } =
    useKanbanState(element.key, adapter, {
      initialColumns: initialColumns || [],
      lock,
    });

  const {
    draggedItem,
    dropTarget,
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useKanbanDrag(dragAdapter, { lock, onMoveItem: moveItem });

  useDomainAutoSave("project", element.key, {
    title: title || "Kanban Board",
    viewType: "kanban",
    status: "active",
    columns: displayColumns.map((col) => ({
      id: col.id,
      title: col.title,
      color: col.color,
      itemIds: col.items.map((item) => item.id),
    })),
    items: displayColumns.flatMap((col) =>
      col.items.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        columnId: col.id,
        tags: item.tags,
        assignee: item.assignee,
        priority: item.priority,
        dueDate: item.dueDate,
      })),
    ),
  });

  if (!displayColumns.length) {
    return (
      <div className="flex flex-col w-full min-h-[12.5rem]">
        {title && (
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground mb-4 sm:mb-6">
            {title}
          </h3>
        )}
        <EmptyState
          icon={<Layout className="w-8 h-8 sm:w-10 sm:h-10" />}
          message="No columns"
        />
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {title && (
        <div className="mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-3 sm:gap-4">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            {title}
          </h3>
          {!lock && (
            <button className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:py-1.5 rounded-full bg-primary text-primary-foreground text-[0.625rem] sm:text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform min-h-[2.75rem] sm:min-h-0 touch-manipulation">
              <Plus className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">NEW TASK</span>
              <span className="sm:hidden">ADD</span>
            </button>
          )}
        </div>
      )}

      {/* Mobile: vertical stack, Desktop: horizontal scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "flex flex-col gap-3 sm:gap-4",
          "sm:flex-row sm:overflow-x-auto sm:pb-4",
          "sm:snap-x sm:snap-mandatory",
          "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
        )}
      >
        {displayColumns.map((col) => (
          <motion.div
            key={col.id}
            variants={columnVariants}
            onDragEnter={(e) => handleDragEnter(e, col.id)}
            onDragLeave={(e) => handleDragLeave(e, col.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, col.id)}
            className={cn(
              // Mobile: full width, stacked
              "w-full",
              // Desktop: fixed width, side-by-side
              "sm:min-w-[17rem] sm:max-w-[20rem] sm:flex-shrink-0 sm:snap-start",
              // Common styles
              "flex flex-col min-h-[10rem] sm:min-h-[12.5rem]",
              "rounded-xl sm:rounded-2xl bg-zinc-900/40 backdrop-blur-md",
              "border border-white/5 relative overflow-hidden transition-all duration-200",
              dropTarget === col.id &&
                "border-primary/50 bg-primary/5 ring-2 ring-primary/30",
            )}
          >
            {/* Column color indicator */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: col.color || "var(--border)" }}
            />

            {/* Column header */}
            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-white/5 bg-white/[0.02]">
              <span className="font-bold text-xs sm:text-sm tracking-wide text-foreground">
                {col.title}
              </span>
              <span className="text-[0.5625rem] sm:text-[0.625rem] font-bold text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10">
                {col.items.length}
              </span>
            </div>

            {/* Column items */}
            <div className="flex flex-col gap-2 sm:gap-3 overflow-y-auto p-2 sm:p-3 flex-1 min-h-[5rem] sm:min-h-[6.25rem]">
              <AnimatePresence mode="popLayout">
                {col.items.map((item) => (
                  <KanbanCard
                    key={item.id}
                    item={item}
                    elementKey={element.key}
                    colId={col.id}
                    lock={lock}
                    isDragging={draggedItem?.item.id === item.id}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    isSubItemCompleted={isSubItemCompleted}
                    toggleSubItem={toggleSubItem}
                  />
                ))}
              </AnimatePresence>

              {col.items.length === 0 && (
                <div
                  className={cn(
                    "flex-1 min-h-[4rem] sm:min-h-[5rem] rounded-lg border-2 border-dashed border-white/10",
                    "flex items-center justify-center text-[0.625rem] sm:text-xs text-muted-foreground",
                    dropTarget === col.id && "border-primary/50 bg-primary/5",
                  )}
                >
                  {dropTarget === col.id ? "Drop here" : "No items"}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {children}
    </div>
  );
});
