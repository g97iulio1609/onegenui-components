"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";
import { calculateCalories } from "../../../utils/format-utils";
import { PerforatedDivider } from "../../../utils/shared-components";
import type { Meal } from "./types";

interface MealTicketProps {
  meal: Meal;
  onToggleItem: (mealId: string, itemId: string) => void;
  lock: boolean;
  index: number;
  elementKey: string;
}

export const MealTicket = memo(function MealTicket({
  meal,
  onToggleItem,
  lock,
  index,
  elementKey,
}: MealTicketProps) {
  const totalCal = meal.items.reduce(
    (acc, i) =>
      acc + (i.calories || calculateCalories(i.protein, i.carbs, i.fats)),
    0,
  );
  const consumedCount = meal.items.filter((i) => i.consumed).length;
  const isFullyConsumed =
    consumedCount === meal.items.length && meal.items.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
      data-selectable-item
      data-element-key={elementKey}
      data-item-id={meal.id}
    >
      <div
        className={cn(
          "rounded-2xl border bg-zinc-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
          isFullyConsumed
            ? "border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_-10px_rgba(16,185,129,0.2)]"
            : "border-white/10 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-xl",
        )}
      >
        {/* Side Accent */}
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-1 transition-colors",
            isFullyConsumed
              ? "bg-emerald-500"
              : "bg-white/10 group-hover:bg-amber-500",
          )}
        />

        <div className="p-5 pl-7">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 font-mono">
                Meal 0{index + 1}
              </div>
              <h4
                className={cn(
                  "text-lg font-bold tracking-tight",
                  isFullyConsumed ? "text-emerald-100" : "text-foreground",
                )}
              >
                {meal.name}
              </h4>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-white tabular-nums leading-none">
                {Math.round(totalCal)}
              </div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase mt-0.5">
                kcal
              </div>
            </div>
          </div>

          <PerforatedDivider className="my-4" />

          {/* Items List */}
          <div className="flex flex-col gap-2 relative z-10">
            {meal.items.map((item) => {
              const itemCal =
                item.calories ||
                calculateCalories(item.protein, item.carbs, item.fats);

              return (
                <div
                  key={item.id}
                  onClick={() => !lock && onToggleItem(meal.id, item.id)}
                  className={cn(
                    "flex items-center justify-between p-2 -mx-2 rounded-lg transition-colors cursor-pointer group/item",
                    item.consumed ? "opacity-50" : "hover:bg-white/5",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                        item.consumed
                          ? "bg-emerald-500 border-emerald-500"
                          : "border-white/20 group-hover/item:border-white/40",
                      )}
                    >
                      {item.consumed && (
                        <Check size={10} className="text-black stroke-[4]" />
                      )}
                    </div>
                    <div>
                      <div
                        className={cn(
                          "text-sm font-medium leading-none",
                          item.consumed && "line-through",
                        )}
                      >
                        {item.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                        {item.grams ? `${item.grams}g • ` : ""}
                        {Math.round(item.protein)}P {Math.round(item.carbs)}C{" "}
                        {Math.round(item.fats)}F
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-white/60">
                    {itemCal}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
