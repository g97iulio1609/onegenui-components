"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export interface ProgressDashboardProps {
  stats: {
    total: number;
    taken: number;
    skipped: number;
    remaining: number;
  };
}

export const ProgressDashboard = memo(function ProgressDashboard({
  stats,
}: ProgressDashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-2xl bg-zinc-900 border border-white/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            Today's Progress
          </div>
          <div className="text-2xl font-black text-white">
            {stats.taken}
            <span className="text-sm font-medium text-white/40 ml-1">
              / {stats.total}
            </span>
          </div>
        </div>
        {stats.remaining > 0 && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <AlertCircle size={14} className="text-amber-400" />
            <span className="text-xs font-bold text-amber-400">
              {stats.remaining} remaining
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(stats.taken / stats.total) * 100}%` }}
          className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full"
        />
      </div>
    </motion.div>
  );
});
