import { memo } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import { StatusBadge } from "../../../utils/shared-components";
import type { KanbanItem } from "./types";
import { PRIORITY_TO_VARIANT } from "./types";
import { SubItemsList } from "./sub-items-list";

interface KanbanCardProps {
  item: KanbanItem;
  elementKey: string;
  colId: string;
  lock: boolean;
  isDragging: boolean;
  onDragStart: (e: React.DragEvent, item: KanbanItem, colId: string) => void;
  onDragEnd: (e: React.DragEvent) => void;
  isSubItemCompleted: (itemId: string, subItemId: string) => boolean;
  toggleSubItem: (itemId: string, subItemId: string) => void;
}

export const KanbanCard = memo(function KanbanCard({
  item,
  elementKey,
  colId,
  lock,
  isDragging,
  onDragStart,
  onDragEnd,
  isSubItemCompleted,
  toggleSubItem,
}: KanbanCardProps) {
  return (
    <div
      draggable={!lock}
      onDragStart={(e) => onDragStart(e, item, colId)}
      onDragEnd={onDragEnd}
      data-selectable-item
      data-element-key={elementKey}
      data-item-id={item.id}
    >
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "group relative bg-card/40 hover:bg-card/60 p-3.5 rounded-xl border border-white/5 transition-all shadow-sm hover:shadow-lg hover:border-white/10",
          !lock && "cursor-grab active:cursor-grabbing hover:-translate-y-0.5",
          isDragging && "opacity-50",
        )}
      >
        {!lock && (
          <div
            data-interactive
            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing"
          >
            <GripVertical size={14} />
          </div>
        )}

        <div
          className={cn(
            "text-sm font-medium text-foreground leading-snug",
            !lock && "pl-5 group-hover:pl-5",
          )}
        >
          {item.title}
        </div>

        {item.description && (
          <div
            className={cn(
              "text-xs text-muted-foreground mt-1 line-clamp-2",
              !lock && "pl-5 group-hover:pl-5",
            )}
          >
            {item.description}
          </div>
        )}

        <SubItemsList
          item={item}
          lock={lock}
          isSubItemCompleted={isSubItemCompleted}
          toggleSubItem={toggleSubItem}
        />

        <div className="flex justify-between items-center pt-3 mt-2 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5 items-center">
            {item.priority && (
              <StatusBadge
                label={item.priority}
                variant={PRIORITY_TO_VARIANT[item.priority] || "neutral"}
              />
            )}
            {(item.tags || []).map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-white/5 text-muted-foreground px-2 py-0.5 rounded border border-white/5 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {item.assignee && (
            <div
              title={item.assignee}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md border border-white/10"
            >
              {item.assignee.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
});
