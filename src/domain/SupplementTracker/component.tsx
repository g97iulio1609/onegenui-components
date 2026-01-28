"use client";

import { memo, useMemo } from "react";
import { type ComponentRenderProps, useDomainAutoSave } from "@onegenui/react";
import { Pill, Package } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { EmptyState } from "../../utils/shared-components";
import { TimingGroup, ProgressDashboard, TIMING_ORDER } from "./components";
import type { SupplementTrackerProps } from "./schema";
import {
  getSupplementTrackerAdapter,
  getSupplementStateAdapter,
} from "./adapters";
import { useSupplementTrackerLogic } from "./hooks";

export const SupplementTracker = memo(function SupplementTracker({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    supplements: initialSupplements,
    schedule: initialSchedule,
    selectedDate: initialSelectedDate,
    lock: rawLock = false,
  } = element.props as SupplementTrackerProps;

  const lock = rawLock ?? false;

  // Get adapters
  const trackerAdapter = useMemo(() => getSupplementTrackerAdapter(), []);
  const stateAdapter = useMemo(() => getSupplementStateAdapter(), []);

  // Use custom hook for all logic
  const {
    selectedDate,
    supplements,
    displayDoses,
    groupedByTiming,
    stats,
    formattedDate,
    handleToggle,
    handleSkip,
  } = useSupplementTrackerLogic(trackerAdapter, stateAdapter, {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock,
  });

  // AutoSave
  useDomainAutoSave("supplement", element.key, {
    type: "supplement_schedule",
    supplements,
    schedule: [{ date: selectedDate, doses: displayDoses }],
  });

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
          <Pill className="w-5 h-5 text-violet-500" />
          {title || "Supplements"}
        </h3>
        <div className="text-xs font-mono text-white/40">{formattedDate}</div>
      </div>

      <ProgressDashboard stats={stats} />

      {/* Supplement Groups */}
      <div className="flex flex-col gap-6">
        {supplements.length === 0 ? (
          <EmptyState
            icon={<Package className="w-10 h-10" />}
            message="No supplements configured"
          />
        ) : (
          <AnimatePresence mode="popLayout">
            {TIMING_ORDER.map((timing) => {
              const items = groupedByTiming.get(timing);
              if (!items || items.length === 0) return null;
              return (
                <TimingGroup
                  key={timing}
                  timing={timing}
                  items={items}
                  onToggle={handleToggle}
                  onSkip={handleSkip}
                  lock={lock}
                  elementKey={element.key}
                />
              );
            })}
          </AnimatePresence>
        )}
      </div>

      {children}
    </div>
  );
});
