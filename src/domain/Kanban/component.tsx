"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Plus, Layout } from "lucide-react";
import { cn } from "../../utils/cn";
import { AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import { KanbanCard, type KanbanColumn } from "./components";
import { getKanbanAdapter, getKanbanDragAdapter } from "./adapters";
import { useKanbanState, useKanbanDrag } from "./hooks";

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

  // Use adapters
  const adapter = useMemo(() => getKanbanAdapter(), []);
  const dragAdapter = useMemo(() => getKanbanDragAdapter(), []);

  // Use state hook
  const { displayColumns, moveItem, toggleSubItem, isSubItemCompleted } =
    useKanbanState(adapter, {
      initialColumns: initialColumns || [],
      lock,
    });

  // Use drag hook
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
      <div className="flex flex-col w-full min-h-[200px]">
        {title && (
          <h3 className="text-2xl font-black tracking-tight text-foreground mb-6">
            {title}
          </h3>
        )}
        <EmptyState
          icon={<Layout className="w-10 h-10" />}
          message="No columns"
        />
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {title && (
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-2xl font-black tracking-tight text-foreground">
            {title}
          </h3>
          {!lock && (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <Plus size={14} />
              NEW TASK
            </button>
          )}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-6 min-h-[200px] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {displayColumns.map((col) => (
          <div
            key={col.id}
            onDragEnter={(e) => handleDragEnter(e, col.id)}
            onDragLeave={(e) => handleDragLeave(e, col.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, col.id)}
            className={cn(
              "min-w-full md:min-w-[300px] flex-shrink-0 snap-center md:snap-start flex flex-col min-h-[200px] rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 relative overflow-hidden transition-all duration-200",
              dropTarget === col.id &&
                "border-primary/50 bg-primary/5 ring-2 ring-primary/30",
            )}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: col.color || "var(--border)" }}
            />

            <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/[0.02]">
              <span className="font-bold text-sm tracking-wide text-foreground">
                {col.title}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {col.items.length}
              </span>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto p-3 flex-1 min-h-[100px]">
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
                    "flex-1 min-h-[80px] rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center text-xs text-muted-foreground",
                    dropTarget === col.id && "border-primary/50 bg-primary/5",
                  )}
                >
                  {dropTarget === col.id ? "Drop here" : "No items"}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
});
