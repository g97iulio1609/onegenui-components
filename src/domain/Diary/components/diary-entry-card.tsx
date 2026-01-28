import { memo } from "react";
import { SelectableItem } from "@onegenui/react";
import { Heart, Star, Target, Link, Tag } from "lucide-react";
import type { DiaryEntry } from "../schema";
import { PerforatedDivider } from "../../../utils/shared-components";
import {
  MoodBadge,
  EnergyBar,
  SleepInfo,
  GoalItem,
  LinkedEntityBadge,
} from "./sub-components";
import { formatDate, formatShortDate } from "./utils";

export const DiaryEntryCard = memo(function DiaryEntryCard({
  entry,
  onToggleGoal,
  lock,
  elementKey,
  compact,
  showMoodTracker,
  showEnergyTracker,
  showGratitude,
  showLinkedEntities,
}: {
  entry: DiaryEntry;
  onToggleGoal: (entryId: string, goalId: string) => void;
  lock: boolean;
  elementKey: string;
  compact?: boolean;
  showMoodTracker: boolean;
  showEnergyTracker: boolean;
  showGratitude: boolean;
  showLinkedEntities: boolean;
}) {
  if (compact) {
    return (
      <SelectableItem
        elementKey={elementKey}
        itemId={entry.id}
        className="p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:border-white/20 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm font-mono text-white/40">
              {formatShortDate(entry.date)}
            </div>
            {entry.mood && <MoodBadge mood={entry.mood} />}
          </div>
          {entry.title && (
            <div className="text-sm font-medium text-white truncate">
              {entry.title}
            </div>
          )}
        </div>
      </SelectableItem>
    );
  }

  return (
    <SelectableItem
      elementKey={elementKey}
      itemId={entry.id}
      className="p-5 rounded-2xl border border-white/10 bg-zinc-900/60"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs font-mono text-white/40 mb-1">
            {formatDate(entry.date)}
          </div>
          {entry.title && (
            <h4 className="text-lg font-bold text-white">{entry.title}</h4>
          )}
        </div>
        <div className="flex items-center gap-2">
          {entry.mood && showMoodTracker && <MoodBadge mood={entry.mood} />}
          {entry.sleep && <SleepInfo sleep={entry.sleep} />}
        </div>
      </div>

      {/* Energy */}
      {entry.energy && showEnergyTracker && (
        <div className="mb-4">
          <EnergyBar level={entry.energy} />
        </div>
      )}

      {/* Content */}
      {entry.content && (
        <div className="prose prose-invert prose-sm max-w-none mb-4 text-white/80">
          {entry.content}
        </div>
      )}

      <PerforatedDivider className="my-4" />

      {/* Gratitude */}
      {showGratitude && entry.gratitude && entry.gratitude.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart size={14} className="text-rose-400" />
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
              Gratitude
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {entry.gratitude.map((item, i) => (
              <div
                key={i}
                className="px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      {entry.highlights && entry.highlights.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Star size={14} className="text-amber-400" />
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
              Highlights
            </span>
          </div>
          <ul className="space-y-1">
            {entry.highlights.map((item, i) => (
              <li
                key={i}
                className="text-sm text-white/70 flex items-start gap-2"
              >
                <span className="text-amber-400">*</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Goals */}
      {entry.goals && entry.goals.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target size={14} className="text-emerald-400" />
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
              Daily Goals
            </span>
          </div>
          <div className="space-y-1">
            {entry.goals.map((goal) => (
              <GoalItem
                key={goal.id}
                goal={goal}
                onToggle={(goalId) => onToggleGoal(entry.id, goalId)}
                lock={lock}
              />
            ))}
          </div>
        </div>
      )}

      {/* Linked Entities */}
      {showLinkedEntities &&
        entry.linkedEntities &&
        entry.linkedEntities.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Link size={14} className="text-indigo-400" />
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                Related
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.linkedEntities.map((entity, i) => (
                <LinkedEntityBadge key={i} entity={entity} />
              ))}
            </div>
          </div>
        )}

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Tag size={12} className="text-white/30" />
          {entry.tags.map((tag, i) => (
            <span key={i} className="text-xs text-white/40">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </SelectableItem>
  );
});
