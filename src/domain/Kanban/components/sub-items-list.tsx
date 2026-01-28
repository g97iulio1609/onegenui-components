import { memo } from "react";
import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";
import type { KanbanItem } from "./types";

interface SubItemsListProps {
  item: KanbanItem;
  lock: boolean;
  isSubItemCompleted: (itemId: string, subItemId: string) => boolean;
  toggleSubItem: (itemId: string, subItemId: string) => void;
}

export const SubItemsList = memo(function SubItemsList({
  item,
  lock,
  isSubItemCompleted,
  toggleSubItem,
}: SubItemsListProps) {
  if (!item.subItems || item.subItems.length === 0) return null;

  return (
    <div className="mt-3 flex flex-col gap-2 p-2 rounded-lg bg-black/20 border border-white/5">
      {item.subItems.map((subItem) => {
        const completed = isSubItemCompleted(item.id, subItem.id);
        return (
          <div
            key={subItem.id}
            className={cn(
              "flex items-center gap-2.5 text-xs transition-all",
              completed
                ? "text-muted-foreground line-through opacity-60"
                : "text-foreground",
            )}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleSubItem(item.id, subItem.id);
              }}
              data-interactive
              className={cn(
                "w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center cursor-pointer transition-colors shrink-0",
                completed
                  ? "bg-emerald-500 border-emerald-500 text-black"
                  : "border-muted-foreground/40 hover:border-primary/60 bg-transparent",
                lock && "pointer-events-none opacity-50",
              )}
            >
              {completed && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <Check size={8} strokeWidth={4} />
                </motion.div>
              )}
            </div>
            <span className="truncate">{subItem.title}</span>
          </div>
        );
      })}
    </div>
  );
});
