"use client";

import { memo, useMemo, useState, useCallback } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Utensils, Flame, Target } from "lucide-react";
import { calculateCalories } from "../../utils/format-utils";
import { EmptyState } from "../../utils/shared-components";
import { motion } from "framer-motion";
import {
  type Meal,
  MACRO_TARGETS,
  MacroMetric,
  MealTicket,
} from "./components";

// --- Main Component ---

export const Nutrition = memo(function Nutrition({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    meals: initialMeals,
    lock = false,
  } = element.props as {
    title?: string | null;
    meals?: Meal[] | null;
    lock?: boolean;
  };

  const [localEdits, setLocalEdits] = useState<
    Record<string, Record<string, { consumed?: boolean }>>
  >({});

  const displayMeals = useMemo(() => {
    return (initialMeals || []).map((meal) => {
      const mealEdits = localEdits[meal.id] || {};
      return {
        ...meal,
        items: meal.items.map((item) => {
          const itemEdit = mealEdits[item.id];
          if (itemEdit) return { ...item, ...itemEdit };
          return item;
        }),
      };
    });
  }, [initialMeals, localEdits]);

  useDomainAutoSave("meal", element.key, {
    type: "meal_plan",
    foods: displayMeals.flatMap((m) => m.items),
    meals: displayMeals,
    date: new Date().toISOString(),
  });

  const toggleConsumed = useCallback(
    (mealId: string, itemId: string) => {
      if (lock) return;
      setLocalEdits((prev) => {
        const m = prev[mealId] || {};
        const itemVal = !displayMeals
          .find((x) => x.id === mealId)
          ?.items.find((y) => y.id === itemId)?.consumed;
        return { ...prev, [mealId]: { ...m, [itemId]: { consumed: itemVal } } };
      });
    },
    [lock, displayMeals],
  );

  const stats = useMemo(() => {
    let p = 0,
      c = 0,
      f = 0,
      cal = 0;
    displayMeals.forEach((m) =>
      m.items.forEach((i) => {
        const iCal =
          i.calories ?? calculateCalories(i.protein, i.carbs, i.fats);
        p += i.protein;
        c += i.carbs;
        f += i.fats;
        cal += iCal;
      }),
    );
    return { p, c, f, cal };
  }, [displayMeals]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      {title && (
        <h3 className="m-0 text-xl font-bold font-sans tracking-tight flex items-center gap-3">
          <Flame className="w-5 h-5 text-orange-500" />
          {title}
        </h3>
      )}

      {/* Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl bg-zinc-900 border border-white/10 shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <Target size={80} strokeWidth={1} />
        </div>

        <div className="flex justify-between items-end mb-6 relative z-10">
          <div>
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
              Daily Target
            </div>
            <div className="text-3xl font-black text-white leading-none">
              {Math.round(stats.cal)}
              <span className="text-sm font-medium text-white/40 ml-1">
                / {MACRO_TARGETS.cal} kcal
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 relative z-10">
          <MacroMetric
            label="Protein"
            value={stats.p}
            max={MACRO_TARGETS.p}
            color="bg-indigo-500"
          />
          <MacroMetric
            label="Carbs"
            value={stats.c}
            max={MACRO_TARGETS.c}
            color="bg-amber-500"
          />
          <MacroMetric
            label="Fats"
            value={stats.f}
            max={MACRO_TARGETS.f}
            color="bg-rose-500"
          />
        </div>
      </motion.div>

      {/* Meals List */}
      <div className="flex flex-col gap-4">
        {displayMeals.length === 0 ? (
          <EmptyState
            icon={<Utensils className="w-10 h-10" />}
            message="Empty Plan"
          />
        ) : (
          displayMeals.map((meal, i) => (
            <MealTicket
              key={meal.id}
              meal={meal}
              index={i}
              onToggleItem={toggleConsumed}
              lock={!!lock}
              elementKey={element.key}
            />
          ))
        )}
      </div>

      {children}
    </div>
  );
});
