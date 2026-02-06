import {
  BookingFormsDefinition,
  BookingFormsPropsSchema,
  CalendarAgendaDefinition,
  CalendarAgendaSchema,
  CalendarDefinition,
  CalendarPropsSchema,
  ChartDefinition,
  ChartPropsSchema,
  DiaryDefinition,
  DiaryPropsSchema,
  DocumentIndexPropsSchema,
  DocumentReportDefinition,
  DocumentReportPropsSchema,
  EmailDefinition,
  EmailPropsSchema,
  FlightDefinition,
  FlightPropsSchema,
  GanttDefinition,
  GanttPropsSchema,
  GraphDefinition,
  GraphPropsSchema,
  HotelDefinition,
  HotelPropsSchema,
  KanbanDefinition,
  KanbanPropsSchema,
  MessageDefinition,
  MessagePropsSchema,
  MindMapDefinition,
  MindMapPropsSchema,
  NutritionDefinition,
  NutritionPropsSchema,
  ResearchReportDefinition,
  ResearchReportPropsSchema,
  RoutineSchedulerDefinition,
  RoutineSchedulerPropsSchema,
  SourceCitationPropsSchema,
  StockChartDefinition,
  StockChartPropsSchema,
  SupplementTrackerDefinition,
  SupplementTrackerPropsSchema,
  TodoListDefinition,
  TodoListPropsSchema,
  TripDefinition,
  TripPropsSchema,
  WorkoutDefinition,
  WorkoutPropsSchema
} from "./chunk-JVSKUXOT.mjs";

// src/index.ts
export * from "@onegenui/ui";

// src/utils/cn.ts
import { cn } from "@onegenui/utils";

// src/utils/data-utils.ts
import {
  resolveArrayProp,
  resolveValueProp,
  resolveString
} from "@onegenui/utils";

// src/utils/format-utils.ts
var CURRENCY_SYMBOLS = {
  EUR: "\u20AC",
  USD: "$",
  GBP: "\xA3",
  JPY: "\xA5",
  CHF: "CHF",
  CAD: "C$",
  AUD: "A$"
};
function formatCurrency(amount, currency) {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  return `${symbol}${amount.toLocaleString()}`;
}
function formatDateShort(date, options) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(void 0, {
    month: "short",
    day: "numeric",
    ...options
  });
}
function calculateCalories(protein, carbs, fats) {
  return Math.round(protein * 4 + carbs * 4 + fats * 9);
}

// src/utils/shared-components.tsx
import { memo } from "react";
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var STATUS_STYLES = {
  success: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20"
  },
  warning: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20"
  },
  error: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20"
  },
  info: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20"
  },
  neutral: {
    bg: "bg-zinc-500/10",
    text: "text-zinc-400",
    border: "border-zinc-500/20"
  }
};
var StatusBadge = memo(function StatusBadge2({
  label,
  variant = "neutral",
  pulse = false,
  className
}) {
  const styles = STATUS_STYLES[variant];
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      className: cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border",
        styles.bg,
        styles.text,
        styles.border,
        pulse && "animate-pulse",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-current" }),
        label
      ]
    }
  );
});
var ProgressBar = memo(function ProgressBar2({
  value,
  max,
  color = "bg-blue-500",
  showLabel = false,
  label,
  className
}) {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    (showLabel || label) && /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { children: label }),
      /* @__PURE__ */ jsx("span", { className: "font-mono text-white/50", children: Math.round(value) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${percentage}%` },
        transition: { duration: 0.8, ease: "easeOut" },
        className: cn("h-full rounded-full", color)
      }
    ) })
  ] });
});
var EmptyState = memo(function EmptyState2({
  icon,
  message,
  title,
  description,
  className
}) {
  const hasDetails = Boolean(title || description);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "py-20 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: cn("mb-4", hasDetails ? "opacity-60" : "opacity-20"), children: icon }),
        hasDetails ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-2", children: [
          title && /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: description })
        ] }) : message && /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: message })
      ]
    }
  );
});
var SectionHeader = memo(function SectionHeader2({
  title,
  icon,
  action,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-between", className), children: [
    /* @__PURE__ */ jsxs("h3", { className: "m-0 text-xl font-bold tracking-tight flex items-center gap-2", children: [
      icon,
      title
    ] }),
    action
  ] });
});
var CardContainer = memo(function CardContainer2({
  children,
  highlighted = false,
  className
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
        highlighted ? "bg-zinc-900/80 border-white/20 shadow-2xl" : "bg-zinc-900/40 border-white/10 hover:bg-zinc-900/60 hover:border-white/15",
        className
      ),
      children
    }
  );
});
var AccentBar = memo(function AccentBar2({
  active = false,
  gradient = "from-blue-500 to-purple-500",
  className
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
        active ? `bg-gradient-to-r ${gradient}` : "bg-white/5",
        className
      )
    }
  );
});
var PerforatedDivider = memo(function PerforatedDivider2({
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative h-px w-full", className), children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 border-t border-dashed border-white/10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-r border-white/10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-l border-white/10" })
  ] });
});
var InfoPill = memo(function InfoPill2({
  icon,
  children,
  variant = "default",
  className
}) {
  const variantStyles = {
    default: "bg-white/5 text-white/60",
    primary: "bg-sky-500/10 text-sky-400",
    secondary: "bg-purple-500/10 text-purple-400"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium",
        variantStyles[variant],
        className
      ),
      children: [
        icon,
        children
      ]
    }
  );
});
var ErrorState = memo(function ErrorState2({
  title = "Something went wrong",
  message,
  onRetry,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "py-12 flex flex-col items-center justify-center border border-rose-500/20 rounded-2xl bg-rose-950/20 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-rose-500 mb-3", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-10 h-10",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-rose-400 mb-1", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-rose-400/60 max-w-xs", children: message }),
        onRetry && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onRetry,
            className: "mt-4 px-4 py-1.5 text-xs font-medium bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 rounded-lg transition-colors",
            children: "Retry"
          }
        )
      ]
    }
  );
});
var Skeleton = memo(function Skeleton2({ className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse bg-white/5 rounded", className) });
});
var SkeletonText = memo(function SkeletonText2({
  lines = 1,
  className
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-2", className), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(
    Skeleton,
    {
      className: cn(
        "h-3 rounded",
        i === lines - 1 && lines > 1 ? "w-3/4" : "w-full"
      )
    },
    i
  )) });
});
var SkeletonCard = memo(function SkeletonCard2({
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "p-4 rounded-xl border border-white/5 bg-zinc-900/40 space-y-3",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" }),
        /* @__PURE__ */ jsx(SkeletonText, { lines: 2 }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16 rounded-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20 rounded-full" })
        ] })
      ]
    }
  );
});
var LoadingState = memo(function LoadingState2({
  message = "Loading...",
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "py-16 flex flex-col items-center justify-center text-muted-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin mb-4" }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: message })
      ]
    }
  );
});
var LoadingIndicator = memo(function LoadingIndicator2({
  message,
  className
}) {
  const label = message ?? "Loading";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": label,
      className: cn("flex items-center gap-2 text-muted-foreground", className),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "w-2 h-2 rounded-full bg-current",
            animate: { opacity: [0.2, 1, 0.2], y: [0, -4, 0] },
            transition: {
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }
          },
          i
        )) }),
        message && /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-mono tracking-widest opacity-60", children: message })
      ]
    }
  );
});

// src/utils/component-error-boundary.tsx
import { Component } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";

// src/utils/component-hooks.ts
import { useMemo, useCallback, useState } from "react";

// src/domain/CalendarAgenda/component.tsx
import { memo as memo4, useState as useState2, useMemo as useMemo2 } from "react";
import { Calendar as CalendarIcon2 } from "lucide-react";
import { motion as motion4, AnimatePresence } from "framer-motion";

// src/domain/CalendarAgenda/components/utils.ts
var RESPONSE_TO_VARIANT = {
  accepted: "success",
  declined: "error",
  tentative: "warning",
  needsAction: "neutral"
};
function formatEventTime(start, end, allDay) {
  if (allDay) return "All day";
  try {
    const startDate = new Date(start);
    const startTime = startDate.toLocaleTimeString(void 0, {
      hour: "2-digit",
      minute: "2-digit"
    });
    if (end) {
      const endDate = new Date(end);
      const endTime = endDate.toLocaleTimeString(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      return `${startTime} - ${endTime}`;
    }
    return startTime;
  } catch {
    return start;
  }
}
function formatDateHeader(date) {
  const today = /* @__PURE__ */ new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isToday = date.toDateString() === today.toDateString();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();
  return {
    label: isToday ? "Today" : isTomorrow ? "Tomorrow" : date.toLocaleDateString(void 0, { weekday: "long" }),
    sub: date.toLocaleDateString(void 0, { day: "numeric", month: "short" })
  };
}
function groupEventsByDate(events) {
  const grouped = /* @__PURE__ */ new Map();
  const sorted = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
  for (const event of sorted) {
    const date = new Date(event.start).toDateString();
    const existing = grouped.get(date) || [];
    existing.push(event);
    grouped.set(date, existing);
  }
  return grouped;
}

// src/domain/CalendarAgenda/components/event-card.tsx
import { memo as memo2 } from "react";
import { MapPin, Video, ChevronRight } from "lucide-react";
import { motion as motion2 } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var EventCard = memo2(function EventCard2({
  event,
  onSelect,
  elementKey
}) {
  const eventColor = event.color || "var(--primary)";
  return /* @__PURE__ */ jsxs2(
    motion2.div,
    {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      whileHover: { scale: 1.01, x: 4 },
      onClick: () => onSelect(event),
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": event.id,
      className: "group relative pl-4 pr-4 py-4 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-white/10 cursor-pointer transition-all mb-3 overflow-hidden",
      style: { "--accent": eventColor },
      children: [
        /* @__PURE__ */ jsx3("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]" }),
        /* @__PURE__ */ jsx3("div", { className: "absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" }),
        /* @__PURE__ */ jsxs2("div", { className: "flex items-start justify-between gap-4 relative z-10", children: [
          /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-1 min-w-[70px]", children: [
            /* @__PURE__ */ jsx3("span", { className: "text-xs font-bold text-white/50 font-mono", children: new Date(event.start).toLocaleTimeString(void 0, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }) }),
            event.end && /* @__PURE__ */ jsx3("span", { className: "text-[10px] font-medium text-white/30 font-mono", children: new Date(event.end).toLocaleTimeString(void 0, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }) })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx3("h4", { className: "text-base font-bold text-foreground leading-tight mb-1 group-hover:text-white transition-colors", children: event.title }),
            event.location && /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-1", children: [
              /* @__PURE__ */ jsx3(MapPin, { size: 10, className: "text-white/40" }),
              /* @__PURE__ */ jsx3("span", { className: "truncate", children: event.location })
            ] }),
            event.meetingLink && /* @__PURE__ */ jsxs2("div", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold border border-[var(--accent)]/20 mt-1", children: [
              /* @__PURE__ */ jsx3(Video, { size: 10 }),
              " Video Call"
            ] })
          ] }),
          /* @__PURE__ */ jsx3(
            ChevronRight,
            {
              size: 16,
              className: "text-white/20 group-hover:text-white/60 self-center"
            }
          )
        ] })
      ]
    }
  );
});

// src/domain/CalendarAgenda/components/event-detail.tsx
import { memo as memo3 } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin as MapPin2,
  Video as Video2,
  ArrowLeft
} from "lucide-react";
import { motion as motion3 } from "framer-motion";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var EventDetailView = memo3(function EventDetailView2({
  event,
  onBack
}) {
  return /* @__PURE__ */ jsxs3(
    motion3.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      className: "flex-1 overflow-auto flex flex-col h-full bg-zinc-950/50",
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "p-4 border-b border-white/10 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx4(
            "button",
            {
              onClick: onBack,
              className: "p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors",
              children: /* @__PURE__ */ jsx4(ArrowLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsx4("span", { className: "text-sm font-bold text-white/40 uppercase tracking-widest", children: "Event Details" })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs3("div", { className: "flex gap-5 mb-8", children: [
            /* @__PURE__ */ jsx4(
              "div",
              {
                className: "w-1.5 rounded-full shadow-[0_0_15px_var(--accent)]",
                style: {
                  backgroundColor: event.color || "var(--primary)",
                  "--accent": event.color || "var(--primary)"
                }
              }
            ),
            /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx4("h1", { className: "text-3xl font-black text-white leading-tight mb-2", children: event.title }),
              /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2 text-lg text-white/60", children: [
                /* @__PURE__ */ jsx4(CalendarIcon, { size: 18 }),
                new Date(event.start).toLocaleDateString(void 0, {
                  weekday: "long",
                  month: "long",
                  day: "numeric"
                })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs3("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx4("div", { className: "w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center", children: /* @__PURE__ */ jsx4(Clock, { size: 20 }) }),
                /* @__PURE__ */ jsxs3("div", { children: [
                  /* @__PURE__ */ jsx4("div", { className: "text-xs font-bold text-white/40 uppercase", children: "Time" }),
                  /* @__PURE__ */ jsx4("div", { className: "font-semibold text-white", children: formatEventTime(event.start, event.end, event.allDay) })
                ] })
              ] }),
              event.location && /* @__PURE__ */ jsxs3("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx4("div", { className: "w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ jsx4(MapPin2, { size: 20 }) }),
                /* @__PURE__ */ jsxs3("div", { children: [
                  /* @__PURE__ */ jsx4("div", { className: "text-xs font-bold text-white/40 uppercase", children: "Location" }),
                  /* @__PURE__ */ jsx4("div", { className: "font-semibold text-white", children: event.location })
                ] })
              ] })
            ] }),
            event.meetingLink && /* @__PURE__ */ jsxs3(
              "a",
              {
                href: event.meetingLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/20",
                children: [
                  /* @__PURE__ */ jsx4(Video2, { size: 18 }),
                  " Join Meeting"
                ]
              }
            ),
            event.description && /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx4("div", { className: "text-sm font-bold text-white/50 mb-3 uppercase tracking-wider", children: "About" }),
              /* @__PURE__ */ jsx4("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-5 text-white/80 leading-relaxed whitespace-pre-wrap", children: event.description })
            ] }),
            event.attendees && event.attendees.length > 0 && /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx4("div", { className: "text-sm font-bold text-white/50 mb-3 uppercase tracking-wider", children: "Attendees" }),
              /* @__PURE__ */ jsx4("div", { className: "flex flex-col gap-2", children: event.attendees.map((attendee, i) => /* @__PURE__ */ jsxs3(
                "div",
                {
                  className: "flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5",
                  children: [
                    /* @__PURE__ */ jsx4("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-white/10", children: (attendee.name || attendee.email).charAt(0).toUpperCase() }),
                    /* @__PURE__ */ jsxs3("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx4("div", { className: "text-sm font-bold text-white", children: attendee.name || attendee.email }),
                      attendee.name && /* @__PURE__ */ jsx4("div", { className: "text-xs text-white/40", children: attendee.email })
                    ] }),
                    attendee.responseStatus && /* @__PURE__ */ jsx4(
                      StatusBadge,
                      {
                        label: attendee.responseStatus,
                        variant: RESPONSE_TO_VARIANT[attendee.responseStatus] || "neutral"
                      }
                    )
                  ]
                },
                i
              )) })
            ] })
          ] })
        ] })
      ]
    }
  );
});

// src/domain/CalendarAgenda/component.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var CalendarAgenda = memo4(function CalendarAgenda2({
  element,
  children
}) {
  const {
    title,
    events: initialEvents,
    selectedDate
  } = element.props;
  const [selectedEvent, setSelectedEvent] = useState2(
    null
  );
  const events = initialEvents || [];
  const groupedEvents = useMemo2(() => groupEventsByDate(events), [events]);
  const currentDate = selectedDate ? new Date(selectedDate) : /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col h-[400px] sm:h-[500px] lg:h-[600px] w-full bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden isolate", children: [
    /* @__PURE__ */ jsx5("div", { className: "absolute top-0 right-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-indigo-600/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] pointer-events-none -z-10" }),
    /* @__PURE__ */ jsx5("div", { className: "absolute bottom-0 left-0 w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] bg-purple-600/5 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[90px] pointer-events-none -z-10" }),
    /* @__PURE__ */ jsx5(AnimatePresence, { mode: "wait", children: selectedEvent ? /* @__PURE__ */ jsx5(
      EventDetailView,
      {
        event: selectedEvent,
        onBack: () => setSelectedEvent(null)
      },
      "detail"
    ) : /* @__PURE__ */ jsxs4(
      motion4.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "flex flex-col h-full",
        children: [
          /* @__PURE__ */ jsxs4("div", { className: "p-4 sm:p-5 lg:p-6 pb-2", children: [
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between mb-4 sm:mb-5 lg:mb-6", children: [
              /* @__PURE__ */ jsx5("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50", children: title || "Agenda" }),
              /* @__PURE__ */ jsx5("div", { className: "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center", children: /* @__PURE__ */ jsx5(CalendarIcon2, { className: "text-white/60 w-4 h-4 sm:w-5 sm:h-5" }) })
            ] }),
            /* @__PURE__ */ jsx5("div", { className: "text-xs sm:text-sm font-bold text-indigo-400 uppercase tracking-widest pl-1 mb-1.5 sm:mb-2", children: currentDate.toLocaleDateString(void 0, {
              month: "long",
              year: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ jsx5("div", { className: "flex-1 overflow-y-auto px-3 sm:px-4 pb-4 sm:pb-6 custom-scrollbar touch-pan-y", children: events.length === 0 ? /* @__PURE__ */ jsx5(
            EmptyState,
            {
              icon: /* @__PURE__ */ jsx5(CalendarIcon2, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
              message: "No upcoming events"
            }
          ) : /* @__PURE__ */ jsx5("div", { className: "space-y-6 sm:space-y-8", children: Array.from(groupedEvents.entries()).map(
            ([dateStr, dayEvents]) => {
              const { label, sub } = formatDateHeader(
                new Date(dateStr)
              );
              return /* @__PURE__ */ jsxs4("div", { className: "relative pl-3 sm:pl-4", children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex items-baseline gap-2 sm:gap-3 mb-3 sm:mb-4 sticky top-0 bg-zinc-950/80 backdrop-blur-xl py-1.5 sm:py-2 z-10 -ml-3 sm:-ml-4 pl-3 sm:pl-4 border-b border-white/5 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)]", children: [
                  /* @__PURE__ */ jsx5("span", { className: "text-lg sm:text-xl font-bold text-white", children: label }),
                  /* @__PURE__ */ jsx5("span", { className: "text-xs sm:text-sm font-medium text-white/40", children: sub })
                ] }),
                /* @__PURE__ */ jsx5("div", { className: "absolute left-0 top-8 sm:top-10 bottom-0 w-px bg-white/10" }),
                /* @__PURE__ */ jsx5("div", { className: "space-y-2 sm:space-y-3", children: dayEvents.map((event) => /* @__PURE__ */ jsx5(
                  EventCard,
                  {
                    event,
                    onSelect: setSelectedEvent,
                    elementKey: element.key
                  },
                  event.id
                )) })
              ] }, dateStr);
            }
          ) }) })
        ]
      },
      "list"
    ) }),
    children
  ] });
});

// src/domain/Workout/component.tsx
import { memo as memo9, useMemo as useMemo4 } from "react";
import { Lock, Unlock, Activity as Activity2, BicepsFlexed } from "lucide-react";
import { useDomainAutoSave } from "@onegenui/react";

// src/domain/Workout/components/session-timer.tsx
import { memo as memo5, useState as useState3, useEffect } from "react";
import { Timer, Play, RotateCcw } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var SessionTimer = memo5(function SessionTimer2() {
  const [time, setTime] = useState3(0);
  const [isActive, setIsActive] = useState3(false);
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [isActive]);
  const formatTime2 = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-3 px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md", children: [
    /* @__PURE__ */ jsx6(
      Timer,
      {
        className: isActive ? "text-emerald-400 animate-pulse" : "text-zinc-500",
        size: 14
      }
    ),
    /* @__PURE__ */ jsx6("div", { className: "font-mono text-sm font-medium text-white tracking-widest tabular-nums", children: formatTime2(time) }),
    isActive ? /* @__PURE__ */ jsx6(
      "button",
      {
        onClick: () => setIsActive(false),
        className: "text-zinc-400 hover:text-white transition-colors",
        children: /* @__PURE__ */ jsx6("span", { className: "w-2 h-2 rounded-sm bg-current block" })
      }
    ) : /* @__PURE__ */ jsx6(
      "button",
      {
        onClick: () => setIsActive(true),
        className: "text-zinc-400 hover:text-white transition-colors",
        children: /* @__PURE__ */ jsx6(Play, { size: 10, fill: "currentColor" })
      }
    ),
    /* @__PURE__ */ jsx6(
      "button",
      {
        onClick: () => {
          setIsActive(false);
          setTime(0);
        },
        className: "text-zinc-600 hover:text-white transition-colors",
        children: /* @__PURE__ */ jsx6(RotateCcw, { size: 10 })
      }
    )
  ] });
});

// src/domain/Workout/components/exercise-item-card.tsx
import { memo as memo8 } from "react";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { motion as motion5, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { SelectableItem } from "@onegenui/react";

// src/domain/Workout/components/WorkoutExerciseCard.tsx
import { memo as memo7 } from "react";
import {
  Dumbbell,
  Plus,
  ChevronDown,
  Activity,
  Flame as Flame2,
  Target,
  Clock as Clock3,
  TrendingUp
} from "lucide-react";

// src/domain/Workout/components/WorkoutSetRow.tsx
import { Check, Trash2 } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var WorkoutSetRow = ({
  set,
  index,
  lock,
  onUpdate,
  onRemove
}) => {
  const isCompleted = set.completed;
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: cn(
        "group relative grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 items-center p-2.5 rounded-xl transition-all duration-300 border text-sm",
        isCompleted ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-green-500/5 border-emerald-500/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]" : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10"
      ),
      children: [
        isCompleted && /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsx7("div", { className: "flex justify-center items-center relative z-10", children: /* @__PURE__ */ jsx7(
          "span",
          {
            className: cn(
              "w-6 h-6 flex items-center justify-center rounded-lg text-[11px] font-bold transition-all duration-300",
              isCompleted ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 scale-105" : "bg-white/5 text-white/50 border border-white/10"
            ),
            children: set.setNumber || index + 1
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ jsx7(
          "div",
          {
            className: cn(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            children: set.weight ?? /* @__PURE__ */ jsx7("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ jsx7(
          "input",
          {
            type: "number",
            value: set.weight ?? "",
            onChange: (e) => onUpdate(
              "weight",
              e.target.value === "" ? null : parseFloat(e.target.value)
            ),
            onClick: (e) => e.stopPropagation(),
            onPointerDown: (e) => e.stopPropagation(),
            className: cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            placeholder: "\u2014"
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ jsx7(
          "div",
          {
            className: cn(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            children: set.reps ?? /* @__PURE__ */ jsx7("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ jsx7(
          "input",
          {
            type: "number",
            value: set.reps ?? "",
            onChange: (e) => onUpdate(
              "reps",
              e.target.value === "" ? null : parseFloat(e.target.value)
            ),
            onClick: (e) => e.stopPropagation(),
            onPointerDown: (e) => e.stopPropagation(),
            className: cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            placeholder: "\u2014"
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ jsx7(
          "div",
          {
            className: cn(
              "text-center font-mono font-bold py-1.5",
              isCompleted ? "text-emerald-200/70" : "text-white/60"
            ),
            children: set.rpe ?? /* @__PURE__ */ jsx7("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ jsx7(
          "input",
          {
            type: "number",
            value: set.rpe ?? "",
            onChange: (e) => onUpdate(
              "rpe",
              e.target.value === "" ? null : parseFloat(e.target.value)
            ),
            onClick: (e) => e.stopPropagation(),
            onPointerDown: (e) => e.stopPropagation(),
            className: cn(
              "w-full text-center font-mono font-bold outline-none rounded-lg py-1.5 px-2 transition-all duration-200",
              "bg-black/20 border border-transparent",
              "placeholder:text-white/10",
              "focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/20",
              "hover:bg-black/25",
              isCompleted ? "text-emerald-200/80" : "text-white/80"
            ),
            placeholder: "\u2014"
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "flex justify-center relative z-10", children: /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: () => !lock && onUpdate("completed", !isCompleted),
            disabled: lock,
            className: cn(
              "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 border",
              isCompleted ? "bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400/50 text-white shadow-lg shadow-emerald-500/40 scale-105" : "bg-white/5 border-white/10 text-white/20 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105",
              lock && "cursor-not-allowed opacity-50"
            ),
            children: isCompleted ? /* @__PURE__ */ jsx7(Check, { size: 14, strokeWidth: 3, className: "drop-shadow-sm" }) : /* @__PURE__ */ jsx7("div", { className: "w-2 h-2 rounded-full bg-white/10" })
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10", children: !lock && /* @__PURE__ */ jsx7("div", { className: "flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-200", children: /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: onRemove,
            className: "w-7 h-7 rounded-lg flex items-center justify-center text-red-400/40 hover:text-red-400 hover:bg-red-500/15 transition-all duration-200 border border-transparent hover:border-red-500/20",
            children: /* @__PURE__ */ jsx7(Trash2, { size: 13 })
          }
        ) }) })
      ]
    }
  );
};

// src/domain/Workout/components/exercise-parts.tsx
import { memo as memo6 } from "react";
import { Clock as Clock2, Flame } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var ProgressRing = memo6(function ProgressRing2({
  progress,
  size = 44
}) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - progress / 100 * circumference;
  return /* @__PURE__ */ jsxs7("svg", { width: size, height: size, className: "transform -rotate-90", children: [
    /* @__PURE__ */ jsx8(
      "circle",
      {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        className: "text-white/5"
      }
    ),
    /* @__PURE__ */ jsx8(
      "circle",
      {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        stroke: "url(#progressGradient)",
        strokeWidth,
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        strokeLinecap: "round",
        className: "transition-all duration-500 ease-out"
      }
    ),
    /* @__PURE__ */ jsx8("defs", { children: /* @__PURE__ */ jsxs7("linearGradient", { id: "progressGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
      /* @__PURE__ */ jsx8("stop", { offset: "0%", stopColor: "#22c55e" }),
      /* @__PURE__ */ jsx8("stop", { offset: "100%", stopColor: "#86efac" })
    ] }) })
  ] });
});
var CardioDetails = memo6(function CardioDetails2({
  duration,
  intensity,
  notes
}) {
  const intensityColors = {
    low: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30",
    moderate: "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30",
    high: "from-rose-500/20 to-rose-600/10 text-rose-400 border-rose-500/30"
  };
  const getIntensityColor = (int) => {
    if (!int) return intensityColors.moderate;
    const lower = int.toLowerCase();
    if (lower.includes("low") || lower.includes("easy"))
      return intensityColors.low;
    if (lower.includes("high") || lower.includes("hard") || lower.includes("intense"))
      return intensityColors.high;
    return intensityColors.moderate;
  };
  return /* @__PURE__ */ jsxs7("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex gap-3", children: [
      duration && /* @__PURE__ */ jsxs7("div", { className: "flex-1 bg-gradient-to-br from-violet-500/15 to-violet-600/5 rounded-xl p-4 border border-violet-500/20", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2 text-violet-300/60 text-[10px] uppercase tracking-widest font-bold mb-1", children: [
          /* @__PURE__ */ jsx8(Clock2, { size: 12 }),
          "Duration"
        ] }),
        /* @__PURE__ */ jsx8("div", { className: "text-2xl font-black text-white tracking-tight", children: duration })
      ] }),
      intensity && /* @__PURE__ */ jsxs7(
        "div",
        {
          className: cn(
            "flex-1 bg-gradient-to-br rounded-xl p-4 border",
            getIntensityColor(intensity)
          ),
          children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2 text-current/60 text-[10px] uppercase tracking-widest font-bold mb-1", children: [
              /* @__PURE__ */ jsx8(Flame, { size: 12 }),
              "Intensity"
            ] }),
            /* @__PURE__ */ jsx8("div", { className: "text-lg font-bold text-current capitalize", children: intensity })
          ]
        }
      )
    ] }),
    notes && /* @__PURE__ */ jsxs7("div", { className: "bg-white/5 rounded-xl p-3 border border-white/5", children: [
      /* @__PURE__ */ jsx8("div", { className: "text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1", children: "Notes" }),
      /* @__PURE__ */ jsx8("div", { className: "text-sm text-white/70", children: notes })
    ] })
  ] });
});
var getExerciseGradient = (type) => {
  switch (type) {
    case "cardio":
      return "from-rose-500/25 to-pink-600/15 text-rose-400 ring-rose-500/20";
    case "warmup":
      return "from-amber-500/25 to-orange-600/15 text-amber-400 ring-amber-500/20";
    default:
      return "from-blue-500/25 to-indigo-600/15 text-blue-400 ring-blue-500/20";
  }
};

// src/domain/Workout/components/WorkoutExerciseCard.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var getExerciseIcon = (type) => {
  switch (type) {
    case "cardio":
      return /* @__PURE__ */ jsx9(Activity, { size: 18 });
    case "warmup":
      return /* @__PURE__ */ jsx9(Flame2, { size: 18 });
    default:
      return /* @__PURE__ */ jsx9(Dumbbell, { size: 18 });
  }
};
var WorkoutExerciseCard = memo7(
  ({
    exercise,
    lock,
    onUpdateExercise,
    onUpdateSeries,
    onAddSet,
    onRemoveSet,
    isExpanded,
    onToggleExpand
  }) => {
    const series = exercise.series || [];
    const completedSets = series.filter((s) => s.completed).length;
    const totalSets = series.length;
    const progress = totalSets > 0 ? completedSets / totalSets * 100 : 0;
    const hasProgress = totalSets > 0;
    const isCardio = exercise.type === "cardio";
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        className: cn(
          "group/card relative rounded-2xl overflow-hidden mb-3 transition-all duration-300",
          "bg-gradient-to-br from-white/[0.08] to-white/[0.02]",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.2)]",
          "hover:border-white/15 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3)]",
          "backdrop-blur-xl",
          isExpanded && "ring-1 ring-white/5"
        ),
        children: [
          /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" }),
          /* @__PURE__ */ jsxs8(
            "div",
            {
              className: "relative p-4 flex items-center gap-4 cursor-pointer select-none",
              onClick: onToggleExpand,
              children: [
                /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
                  !isCardio && hasProgress && /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx9(ProgressRing, { progress, size: 48 }) }),
                  /* @__PURE__ */ jsx9(
                    "div",
                    {
                      className: cn(
                        "relative z-10 p-2.5 rounded-xl shadow-lg ring-1 transition-transform duration-300 group-hover/card:scale-105 bg-gradient-to-br",
                        getExerciseGradient(exercise.type)
                      ),
                      children: getExerciseIcon(exercise.type)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs8("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx9("h3", { className: "text-[15px] font-bold text-white truncate pr-2 group-hover/card:text-blue-100 transition-colors", children: exercise.name }),
                  /* @__PURE__ */ jsxs8("div", { className: "text-xs text-white/40 flex items-center gap-2 mt-1 flex-wrap", children: [
                    isCardio ? /* @__PURE__ */ jsxs8(Fragment, { children: [
                      exercise.duration && /* @__PURE__ */ jsxs8("span", { className: "flex items-center gap-1 bg-violet-500/15 text-violet-300 px-2 py-0.5 rounded-full font-medium", children: [
                        /* @__PURE__ */ jsx9(Clock3, { size: 10 }),
                        exercise.duration
                      ] }),
                      exercise.intensity && /* @__PURE__ */ jsxs8("span", { className: "flex items-center gap-1 bg-rose-500/15 text-rose-300 px-2 py-0.5 rounded-full font-medium capitalize", children: [
                        /* @__PURE__ */ jsx9(Flame2, { size: 10 }),
                        exercise.intensity
                      ] })
                    ] }) : /* @__PURE__ */ jsxs8(Fragment, { children: [
                      /* @__PURE__ */ jsxs8("span", { className: "font-semibold text-white/60", children: [
                        completedSets,
                        "/",
                        totalSets,
                        " done"
                      ] }),
                      hasProgress && /* @__PURE__ */ jsxs8("span", { className: "text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20", children: [
                        Math.round(progress),
                        "%"
                      ] }),
                      exercise.reps && /* @__PURE__ */ jsxs8("span", { className: "bg-white/5 px-2 py-0.5 rounded-full text-[10px] font-bold text-white/50", children: [
                        exercise.reps,
                        " reps"
                      ] }),
                      exercise.rpe && /* @__PURE__ */ jsxs8("span", { className: "flex items-center gap-1 bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold", children: [
                        /* @__PURE__ */ jsx9(Target, { size: 9 }),
                        "RPE ",
                        exercise.rpe
                      ] })
                    ] }),
                    exercise.notes && !isExpanded && /* @__PURE__ */ jsx9("span", { className: "text-white/30 text-[10px] italic truncate max-w-[120px]", children: exercise.notes })
                  ] })
                ] }),
                /* @__PURE__ */ jsx9(
                  "div",
                  {
                    className: cn(
                      "p-2 rounded-lg transition-all duration-300",
                      "text-white/20 group-hover/card:text-white/50",
                      isExpanded && "bg-white/5 text-white/40"
                    ),
                    children: /* @__PURE__ */ jsx9(
                      ChevronDown,
                      {
                        size: 18,
                        className: cn(
                          "transition-transform duration-300",
                          !isExpanded && "-rotate-90"
                        )
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx9(
            "div",
            {
              className: cn(
                "overflow-hidden transition-all duration-300 ease-out",
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              ),
              children: /* @__PURE__ */ jsxs8("div", { className: "px-4 pb-4 pt-0 border-t border-white/5", children: [
                (exercise.rationale || exercise.notes) && /* @__PURE__ */ jsxs8("div", { className: "mt-4 mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border-l-2 border-blue-500 rounded-r-lg", children: [
                  /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-blue-300/60 mb-1", children: [
                    /* @__PURE__ */ jsx9(TrendingUp, { size: 10 }),
                    exercise.rationale ? "Coach Notes" : "Notes"
                  ] }),
                  /* @__PURE__ */ jsx9("p", { className: "text-sm text-blue-200/80", children: exercise.rationale || exercise.notes })
                ] }),
                isCardio ? /* @__PURE__ */ jsx9("div", { className: "mt-4", children: /* @__PURE__ */ jsx9(
                  CardioDetails,
                  {
                    duration: exercise.duration,
                    intensity: exercise.intensity,
                    notes: !exercise.rationale ? exercise.notes : void 0
                  }
                ) }) : /* @__PURE__ */ jsxs8(Fragment, { children: [
                  series.length > 0 && /* @__PURE__ */ jsxs8("div", { className: "grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 mt-4 mb-2 px-2 text-[9px] uppercase font-bold text-white/25 tracking-[0.15em] text-center", children: [
                    /* @__PURE__ */ jsx9("span", { children: "Set" }),
                    /* @__PURE__ */ jsx9("span", { children: "Weight" }),
                    /* @__PURE__ */ jsx9("span", { children: "Reps" }),
                    /* @__PURE__ */ jsx9("span", { children: "RPE" }),
                    /* @__PURE__ */ jsx9("span", { children: "Done" }),
                    /* @__PURE__ */ jsx9("span", {})
                  ] }),
                  /* @__PURE__ */ jsx9("div", { className: "space-y-1.5", children: series.map((set, idx) => /* @__PURE__ */ jsx9(
                    WorkoutSetRow,
                    {
                      set,
                      index: idx,
                      lock,
                      onUpdate: (field, val) => onUpdateSeries(set.id, field, val),
                      onRemove: () => onRemoveSet(set.id)
                    },
                    set.id || idx
                  )) }),
                  !lock && /* @__PURE__ */ jsxs8(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        onAddSet();
                      },
                      className: cn(
                        "mt-4 w-full py-3 flex items-center justify-center gap-2 rounded-xl",
                        "border-2 border-dashed border-white/10",
                        "text-sm font-semibold text-white/30",
                        "transition-all duration-300",
                        "hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10",
                        "active:scale-[0.98]",
                        "group/add"
                      ),
                      children: [
                        /* @__PURE__ */ jsx9(
                          Plus,
                          {
                            size: 16,
                            className: "transition-transform duration-300 group-hover/add:rotate-90"
                          }
                        ),
                        "Add Set"
                      ]
                    }
                  )
                ] })
              ] })
            }
          )
        ]
      }
    );
  }
);

// src/domain/Workout/components/exercise-item-card.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var ExerciseItemCard = memo8(function ExerciseItemCard2({
  item,
  elementKey,
  isExpanded,
  isLocked,
  onToggleExpand,
  onUpdateExercise,
  onUpdateSeries,
  onAddSet,
  onRemoveSet
}) {
  const series = item.series || [];
  const completedSets = series.filter((s) => s.completed).length;
  const totalSets = series.length;
  return /* @__PURE__ */ jsx10(
    motion5.div,
    {
      layout: true,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      children: /* @__PURE__ */ jsxs9(
        SelectableItem,
        {
          elementKey,
          itemId: item.id,
          className: cn(
            "group relative overflow-hidden rounded-2xl border transition-all duration-300 isolate",
            isExpanded ? "bg-zinc-900/80 border-white/20 shadow-2xl" : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10"
          ),
          children: [
            /* @__PURE__ */ jsx10(
              "div",
              {
                className: cn(
                  "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
                  isExpanded ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-white/5"
                )
              }
            ),
            /* @__PURE__ */ jsxs9(
              "div",
              {
                onClick: () => onToggleExpand(item.id),
                className: "p-4 flex items-center gap-4 cursor-pointer relative z-20",
                children: [
                  /* @__PURE__ */ jsx10(
                    "div",
                    {
                      className: cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-all duration-300",
                        isExpanded ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-300"
                      ),
                      children: item.name[0]
                    }
                  ),
                  /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx10("h4", { className: "text-base font-bold text-white tracking-tight leading-tight group-hover:text-emerald-50 transition-colors", children: item.name }),
                    /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxs9("span", { className: "text-xs font-mono text-muted-foreground", children: [
                        completedSets,
                        "/",
                        totalSets,
                        " DONE"
                      ] }),
                      /* @__PURE__ */ jsx10("div", { className: "w-1 h-1 rounded-full bg-zinc-700" }),
                      /* @__PURE__ */ jsxs9("span", { className: "text-xs font-mono text-muted-foreground", children: [
                        "LAST: ",
                        series[series.length - 1]?.weight || "-",
                        " KG"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx10(
                    "div",
                    {
                      className: cn(
                        "w-8 h-8 flex items-center justify-center rounded-lg transition-transform duration-300",
                        isExpanded ? "bg-white/10 rotate-180 text-white" : "text-zinc-500"
                      ),
                      children: /* @__PURE__ */ jsx10(ChevronDown2, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx10(AnimatePresence2, { children: isExpanded && /* @__PURE__ */ jsxs9(
              motion5.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "relative z-0",
                children: [
                  /* @__PURE__ */ jsx10(PerforatedDivider, {}),
                  /* @__PURE__ */ jsx10("div", { className: "p-4 pt-6 bg-black/20", children: /* @__PURE__ */ jsx10(
                    WorkoutExerciseCard,
                    {
                      exercise: item,
                      lock: isLocked,
                      onUpdateExercise: (field, val) => onUpdateExercise(item.id, field, val),
                      onUpdateSeries: (sId, field, val) => onUpdateSeries(item.id, sId, field, val),
                      onAddSet: () => onAddSet(item.id),
                      onRemoveSet: (sId) => onRemoveSet(item.id, sId),
                      isExpanded: true,
                      onToggleExpand: () => {
                      }
                    }
                  ) })
                ]
              }
            ) })
          ]
        }
      )
    },
    item.id
  );
});
var SupersetGroup = memo8(function SupersetGroup2({
  item,
  elementKey,
  expandedIds,
  isLocked,
  onToggleExpand,
  onUpdateExercise,
  onUpdateSeries,
  onAddSet,
  onRemoveSet
}) {
  return /* @__PURE__ */ jsxs9("div", { className: "mb-6 relative pl-4 border-l border-dashed border-white/10", children: [
    /* @__PURE__ */ jsx10("div", { className: "absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600" }),
    /* @__PURE__ */ jsx10("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsx10("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-zinc-900 border border-white/10 px-2 py-0.5 rounded", children: "Superset" }) }),
    /* @__PURE__ */ jsx10("div", { className: "flex flex-col gap-4", children: item.items?.map((sub) => /* @__PURE__ */ jsx10(
      ExerciseItemCard,
      {
        item: sub,
        elementKey,
        isExpanded: expandedIds.has(sub.id),
        isLocked,
        onToggleExpand,
        onUpdateExercise,
        onUpdateSeries,
        onAddSet,
        onRemoveSet
      },
      sub.id
    )) })
  ] });
});

// src/domain/Workout/adapters/workout.adapter.ts
import { v4 as uuidv4 } from "uuid";
function ensureSeriesGenerated(exercise) {
  if (exercise.series?.length) return exercise;
  if (typeof exercise.sets === "number" && exercise.sets > 0) {
    const generatedSeries = Array.from(
      { length: exercise.sets },
      (_, i) => ({
        id: `gen-${exercise.id}-${i}`,
        setNumber: i + 1,
        reps: exercise.reps ?? null,
        weight: exercise.weight ?? null,
        rpe: exercise.rpe ?? null,
        completed: false,
        type: "normal"
      })
    );
    return { ...exercise, series: generatedSeries };
  }
  return exercise;
}
function ensureSeriesGeneratedDeep(items) {
  return items.map((item) => {
    const withSeries = ensureSeriesGenerated(item);
    if (withSeries.items && withSeries.items.length > 0) {
      return {
        ...withSeries,
        items: ensureSeriesGeneratedDeep(withSeries.items)
      };
    }
    return withSeries;
  });
}
function createWorkoutAdapter() {
  return {
    findExerciseById(items, id) {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.items) {
          const found = this.findExerciseById(item.items, id);
          if (found) return found;
        }
      }
      return void 0;
    },
    mergeEdits(items, edits) {
      return items.map((item) => {
        const edit = edits[item.id];
        const base = edit ? { ...item, ...edit } : item;
        const withSeries = ensureSeriesGenerated(base);
        if (withSeries.items) {
          return {
            ...withSeries,
            items: this.mergeEdits(withSeries.items, edits)
          };
        }
        return withSeries;
      });
    },
    createNewSet(currentSeries) {
      const lastSet = currentSeries[currentSeries.length - 1];
      return {
        id: uuidv4(),
        setNumber: currentSeries.length + 1,
        weight: lastSet?.weight ?? null,
        reps: lastSet?.reps ?? null,
        rpe: null,
        completed: false,
        type: "normal"
      };
    },
    removeSetAndRenumber(series, seriesId) {
      return series.filter((s) => s.id !== seriesId).map((s, idx) => ({ ...s, setNumber: idx + 1 }));
    }
  };
}
function createWorkoutStateAdapter() {
  return {
    updateExerciseField(edits, exercise, field, value) {
      return {
        ...edits,
        [exercise.id]: { ...exercise, [field]: value }
      };
    },
    updateSetField(edits, exercise, seriesId, field, value) {
      const nextSeries = (exercise.series || []).map(
        (s) => s.id === seriesId ? { ...s, [field]: value } : s
      );
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: nextSeries }
      };
    },
    addSetToExercise(edits, exercise, newSet) {
      const currentSeries = exercise.series || [];
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: [...currentSeries, newSet] }
      };
    },
    removeSetFromExercise(edits, exercise, updatedSeries) {
      return {
        ...edits,
        [exercise.id]: { ...exercise, series: updatedSeries }
      };
    }
  };
}
var workoutAdapterInstance = null;
var stateAdapterInstance = null;
function getWorkoutAdapter() {
  if (!workoutAdapterInstance) {
    workoutAdapterInstance = createWorkoutAdapter();
  }
  return workoutAdapterInstance;
}
function getWorkoutStateAdapter() {
  if (!stateAdapterInstance) {
    stateAdapterInstance = createWorkoutStateAdapter();
  }
  return stateAdapterInstance;
}

// src/domain/Workout/hooks/useWorkoutLogic.ts
import { useState as useState4, useCallback as useCallback2, useEffect as useEffect2 } from "react";
import { useElementState } from "@onegenui/react";
function useWorkoutLogic(workoutAdapter, stateAdapter, options) {
  const { initialItems, lock: initialLock = false, elementKey } = options;
  const [state, updateState] = useElementState(
    elementKey,
    {
      items: initialItems,
      isLocked: !!initialLock
    }
  );
  const [expandedIds, setExpandedIds] = useState4(/* @__PURE__ */ new Set());
  useEffect2(() => {
    if (initialItems.length > 0 && initialItems[0]?.id) {
      setExpandedIds(/* @__PURE__ */ new Set([initialItems[0].id]));
    }
  }, [initialItems]);
  const displayItems = state.items;
  const isLocked = state.isLocked;
  const toggleExpand = useCallback2((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);
  const toggleLock = useCallback2(() => {
    updateState({ isLocked: !isLocked });
  }, [isLocked, updateState]);
  const updateExercise = useCallback2(
    (id, field, value) => {
      if (isLocked) return;
      const exercise = workoutAdapter.findExerciseById(displayItems, id);
      if (!exercise) return;
      const edits = stateAdapter.updateExerciseField({}, exercise, field, value);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState]
  );
  const updateSeries = useCallback2(
    (exerciseId, seriesId, field, value) => {
      if (isLocked) return;
      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      const edits = stateAdapter.updateSetField({}, exercise, seriesId, field, value);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState]
  );
  const addSet = useCallback2(
    (exerciseId) => {
      if (isLocked) return;
      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      const newSet = workoutAdapter.createNewSet(exercise.series || []);
      const edits = stateAdapter.addSetToExercise({}, exercise, newSet);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState]
  );
  const removeSet = useCallback2(
    (exerciseId, seriesId) => {
      if (isLocked) return;
      const exercise = workoutAdapter.findExerciseById(displayItems, exerciseId);
      if (!exercise) return;
      const updatedSeries = workoutAdapter.removeSetAndRenumber(
        exercise.series || [],
        seriesId
      );
      const edits = stateAdapter.removeSetFromExercise({}, exercise, updatedSeries);
      const updatedItems = workoutAdapter.mergeEdits(displayItems, edits);
      updateState({ items: updatedItems });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems, updateState]
  );
  return {
    displayItems,
    expandedIds,
    isLocked,
    toggleExpand,
    toggleLock,
    updateExercise,
    updateSeries,
    addSet,
    removeSet
  };
}

// src/domain/Workout/component.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var Workout = memo9(function Workout2({
  element,
  children
}) {
  const {
    title,
    items,
    exercises,
    lock: initialLock = false
  } = element.props;
  const resolvedItems = useMemo4(() => {
    const raw = items || exercises || [];
    const arr = Array.isArray(raw) ? raw : [];
    return ensureSeriesGeneratedDeep(arr);
  }, [items, exercises]);
  const workoutAdapter = getWorkoutAdapter();
  const stateAdapter = getWorkoutStateAdapter();
  const {
    displayItems,
    expandedIds,
    isLocked,
    toggleExpand,
    toggleLock,
    updateExercise,
    updateSeries,
    addSet,
    removeSet
  } = useWorkoutLogic(workoutAdapter, stateAdapter, {
    initialItems: resolvedItems,
    lock: initialLock,
    elementKey: element.key
  });
  useDomainAutoSave("workout", element.key, {
    title,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    items: displayItems,
    status: "active"
  });
  return /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ jsxs10("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      title && /* @__PURE__ */ jsxs10("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx11(Activity2, { className: "w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" }),
        title
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx11(SessionTimer, {}),
        /* @__PURE__ */ jsx11(
          "button",
          {
            onClick: toggleLock,
            className: cn(
              "h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg border transition-colors touch-manipulation",
              isLocked ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white"
            ),
            children: isLocked ? /* @__PURE__ */ jsx11(Lock, { className: "w-3 h-3" }) : /* @__PURE__ */ jsx11(Unlock, { className: "w-3 h-3" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx11("div", { className: "flex flex-col gap-3 sm:gap-4", children: displayItems.length === 0 ? /* @__PURE__ */ jsx11(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx11(BicepsFlexed, { className: "w-10 h-10 sm:w-12 sm:h-12" }),
        message: "No exercises programmed"
      }
    ) : displayItems.map(
      (item) => item.items && item.items.length > 0 ? /* @__PURE__ */ jsx11(
        SupersetGroup,
        {
          item,
          elementKey: element.key,
          expandedIds,
          isLocked,
          onToggleExpand: toggleExpand,
          onUpdateExercise: updateExercise,
          onUpdateSeries: updateSeries,
          onAddSet: addSet,
          onRemoveSet: removeSet
        },
        item.id
      ) : /* @__PURE__ */ jsx11(
        ExerciseItemCard,
        {
          item,
          elementKey: element.key,
          isExpanded: expandedIds.has(item.id),
          isLocked,
          onToggleExpand: toggleExpand,
          onUpdateExercise: updateExercise,
          onUpdateSeries: updateSeries,
          onAddSet: addSet,
          onRemoveSet: removeSet
        },
        item.id
      )
    ) }),
    children
  ] });
});

// src/domain/Nutrition/component.tsx
import { memo as memo12, useMemo as useMemo5, useState as useState5, useCallback as useCallback3 } from "react";
import { useDomainAutoSave as useDomainAutoSave2 } from "@onegenui/react";
import { Utensils, Flame as Flame3, Target as Target2 } from "lucide-react";
import { motion as motion8 } from "framer-motion";

// src/domain/Nutrition/components/types.ts
var MACRO_TARGETS = { p: 180, c: 250, f: 70, cal: 2400 };

// src/domain/Nutrition/components/macro-metric.tsx
import { memo as memo10 } from "react";
import { motion as motion6 } from "framer-motion";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var MacroMetric = memo10(function MacroMetric2({
  label,
  value,
  max,
  color
}) {
  const percentage = Math.min(100, value / max * 100);
  return /* @__PURE__ */ jsxs11("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxs11("div", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between", children: [
      /* @__PURE__ */ jsx12("span", { children: label }),
      /* @__PURE__ */ jsxs11("span", { className: "font-mono text-white/50", children: [
        Math.round(value),
        "g"
      ] })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx12(
      motion6.div,
      {
        initial: { width: 0 },
        animate: { width: `${percentage}%` },
        transition: { duration: 0.8, ease: "easeOut" },
        className: cn("h-full rounded-full", color)
      }
    ) })
  ] });
});

// src/domain/Nutrition/components/meal-ticket.tsx
import { memo as memo11 } from "react";
import { motion as motion7 } from "framer-motion";
import { Check as Check2 } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var MealTicket = memo11(function MealTicket2({
  meal,
  onToggleItem,
  lock,
  index,
  elementKey
}) {
  const totalCal = meal.items.reduce(
    (acc, i) => acc + (i.calories || calculateCalories(i.protein, i.carbs, i.fats)),
    0
  );
  const consumedCount = meal.items.filter((i) => i.consumed).length;
  const isFullyConsumed = consumedCount === meal.items.length && meal.items.length > 0;
  return /* @__PURE__ */ jsx13(
    motion7.div,
    {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay: index * 0.1 },
      className: "group relative",
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": meal.id,
      children: /* @__PURE__ */ jsxs12(
        "div",
        {
          className: cn(
            "rounded-2xl border bg-zinc-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
            isFullyConsumed ? "border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_-10px_rgba(16,185,129,0.2)]" : "border-white/10 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-xl"
          ),
          children: [
            /* @__PURE__ */ jsx13(
              "div",
              {
                className: cn(
                  "absolute top-0 left-0 bottom-0 w-1 transition-colors",
                  isFullyConsumed ? "bg-emerald-500" : "bg-white/10 group-hover:bg-amber-500"
                )
              }
            ),
            /* @__PURE__ */ jsxs12("div", { className: "p-5 pl-7", children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex justify-between items-start mb-6", children: [
                /* @__PURE__ */ jsxs12("div", { children: [
                  /* @__PURE__ */ jsxs12("div", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 font-mono", children: [
                    "Meal 0",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsx13(
                    "h4",
                    {
                      className: cn(
                        "text-lg font-bold tracking-tight",
                        isFullyConsumed ? "text-emerald-100" : "text-foreground"
                      ),
                      children: meal.name
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs12("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx13("div", { className: "text-xl font-black text-white tabular-nums leading-none", children: Math.round(totalCal) }),
                  /* @__PURE__ */ jsx13("div", { className: "text-[10px] font-bold text-muted-foreground uppercase mt-0.5", children: "kcal" })
                ] })
              ] }),
              /* @__PURE__ */ jsx13(PerforatedDivider, { className: "my-4" }),
              /* @__PURE__ */ jsx13("div", { className: "flex flex-col gap-2 relative z-10", children: meal.items.map((item) => {
                const itemCal = item.calories || calculateCalories(item.protein, item.carbs, item.fats);
                return /* @__PURE__ */ jsxs12(
                  "div",
                  {
                    onClick: () => !lock && onToggleItem(meal.id, item.id),
                    className: cn(
                      "flex items-center justify-between p-2 -mx-2 rounded-lg transition-colors cursor-pointer group/item",
                      item.consumed ? "opacity-50" : "hover:bg-white/5"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx13(
                          "div",
                          {
                            className: cn(
                              "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                              item.consumed ? "bg-emerald-500 border-emerald-500" : "border-white/20 group-hover/item:border-white/40"
                            ),
                            children: item.consumed && /* @__PURE__ */ jsx13(Check2, { size: 10, className: "text-black stroke-[4]" })
                          }
                        ),
                        /* @__PURE__ */ jsxs12("div", { children: [
                          /* @__PURE__ */ jsx13(
                            "div",
                            {
                              className: cn(
                                "text-sm font-medium leading-none",
                                item.consumed && "line-through"
                              ),
                              children: item.name
                            }
                          ),
                          /* @__PURE__ */ jsxs12("div", { className: "text-[10px] text-muted-foreground font-mono mt-0.5", children: [
                            item.grams ? `${item.grams}g \u2022 ` : "",
                            Math.round(item.protein),
                            "P ",
                            Math.round(item.carbs),
                            "C",
                            " ",
                            Math.round(item.fats),
                            "F"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx13("div", { className: "font-mono text-xs text-white/60", children: itemCal })
                    ]
                  },
                  item.id
                );
              }) })
            ] })
          ]
        }
      )
    }
  );
});

// src/domain/Nutrition/component.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
var Nutrition = memo12(function Nutrition2({
  element,
  children
}) {
  const {
    title,
    meals: initialMeals,
    lock = false
  } = element.props;
  const [localEdits, setLocalEdits] = useState5({});
  const displayMeals = useMemo5(() => {
    return (initialMeals || []).map((meal) => {
      const mealEdits = localEdits[meal.id] || {};
      return {
        ...meal,
        items: meal.items.map((item) => {
          const itemEdit = mealEdits[item.id];
          if (itemEdit) return { ...item, ...itemEdit };
          return item;
        })
      };
    });
  }, [initialMeals, localEdits]);
  useDomainAutoSave2("meal", element.key, {
    type: "meal_plan",
    foods: displayMeals.flatMap((m) => m.items),
    meals: displayMeals,
    date: (/* @__PURE__ */ new Date()).toISOString()
  });
  const toggleConsumed = useCallback3(
    (mealId, itemId) => {
      if (lock) return;
      setLocalEdits((prev) => {
        const m = prev[mealId] || {};
        const itemVal = !displayMeals.find((x) => x.id === mealId)?.items.find((y) => y.id === itemId)?.consumed;
        return { ...prev, [mealId]: { ...m, [itemId]: { consumed: itemVal } } };
      });
    },
    [lock, displayMeals]
  );
  const stats = useMemo5(() => {
    let p = 0, c = 0, f = 0, cal = 0;
    displayMeals.forEach(
      (m) => m.items.forEach((i) => {
        const iCal = i.calories ?? calculateCalories(i.protein, i.carbs, i.fats);
        p += i.protein;
        c += i.carbs;
        f += i.fats;
        cal += iCal;
      })
    );
    return { p, c, f, cal };
  }, [displayMeals]);
  return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    title && /* @__PURE__ */ jsxs13("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold font-sans tracking-tight flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsx14(Flame3, { className: "w-4 h-4 sm:w-5 sm:h-5 text-orange-500" }),
      title
    ] }),
    /* @__PURE__ */ jsxs13(
      motion8.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 shadow-lg relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx14("div", { className: "absolute top-0 right-0 p-2 sm:p-3 opacity-10", children: /* @__PURE__ */ jsx14(Target2, { className: "w-16 h-16 sm:w-20 sm:h-20", strokeWidth: 1 }) }),
          /* @__PURE__ */ jsx14("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-end mb-4 sm:mb-6 relative z-10 gap-2", children: /* @__PURE__ */ jsxs13("div", { children: [
            /* @__PURE__ */ jsx14("div", { className: "text-[0.625rem] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Daily Target" }),
            /* @__PURE__ */ jsxs13("div", { className: "text-2xl sm:text-3xl font-black text-white leading-none", children: [
              Math.round(stats.cal),
              /* @__PURE__ */ jsxs13("span", { className: "text-xs sm:text-sm font-medium text-white/40 ml-1", children: [
                "/ ",
                MACRO_TARGETS.cal,
                " kcal"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-3 gap-2 sm:gap-4 relative z-10", children: [
            /* @__PURE__ */ jsx14(
              MacroMetric,
              {
                label: "Protein",
                value: stats.p,
                max: MACRO_TARGETS.p,
                color: "bg-indigo-500"
              }
            ),
            /* @__PURE__ */ jsx14(
              MacroMetric,
              {
                label: "Carbs",
                value: stats.c,
                max: MACRO_TARGETS.c,
                color: "bg-amber-500"
              }
            ),
            /* @__PURE__ */ jsx14(
              MacroMetric,
              {
                label: "Fats",
                value: stats.f,
                max: MACRO_TARGETS.f,
                color: "bg-rose-500"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-3 sm:gap-4", children: displayMeals.length === 0 ? /* @__PURE__ */ jsx14(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx14(Utensils, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "Empty Plan"
      }
    ) : displayMeals.map((meal, i) => /* @__PURE__ */ jsx14(
      MealTicket,
      {
        meal,
        index: i,
        onToggleItem: toggleConsumed,
        lock: !!lock,
        elementKey: element.key
      },
      meal.id
    )) }),
    children
  ] });
});

// src/domain/Flight/component.tsx
import { memo as memo15, useMemo as useMemo7 } from "react";
import { useDomainAutoSave as useDomainAutoSave3 } from "@onegenui/react";
import { Plane as Plane2 } from "lucide-react";
import { motion as motion11, AnimatePresence as AnimatePresence3 } from "framer-motion";

// src/domain/Flight/components/flight-segment.tsx
import { memo as memo13 } from "react";
import { Plane, Clock as Clock4, ArrowRight, Calendar } from "lucide-react";
import { motion as motion9 } from "framer-motion";

// src/domain/Flight/components/types.ts
var STATUS_VARIANT_MAP = {
  "On Time": { variant: "success" },
  Boarding: { variant: "info", pulse: true },
  Delayed: { variant: "warning" },
  Departed: { variant: "neutral" },
  Cancelled: { variant: "error" }
};

// src/domain/Flight/components/flight-segment.tsx
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
var FlightStatus = memo13(function FlightStatus2({
  status
}) {
  const config = status ? STATUS_VARIANT_MAP[status] : null;
  return /* @__PURE__ */ jsx15(
    StatusBadge,
    {
      label: status || "Scheduled",
      variant: config?.variant || "neutral",
      pulse: config?.pulse
    }
  );
});
var FlightSegment = memo13(function FlightSegment2({
  flight,
  label,
  isReturn = false,
  index = 0
}) {
  return /* @__PURE__ */ jsxs14(
    motion9.div,
    {
      initial: { opacity: 0, x: isReturn ? 20 : -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, delay: index * 0.15 },
      className: "relative",
      children: [
        label && /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxs14(
            "div",
            {
              className: cn(
                "info-pill",
                isReturn ? "bg-purple-500/10" : "bg-sky-500/10"
              ),
              children: [
                isReturn ? /* @__PURE__ */ jsx15(ArrowRight, { className: "w-2.5 h-2.5 rotate-180" }) : /* @__PURE__ */ jsx15(ArrowRight, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ jsx15("span", { className: isReturn ? "text-purple-400" : "text-sky-400", children: label })
              ]
            }
          ),
          flight.departure.date && /* @__PURE__ */ jsxs14("div", { className: "info-pill", children: [
            /* @__PURE__ */ jsx15(Calendar, { className: "w-2.5 h-2.5" }),
            flight.departure.date
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx15(
              motion9.div,
              {
                whileHover: { scale: 1.05 },
                className: "w-10 h-10 rounded-xl glass-surface flex items-center justify-center text-white/80 font-bold text-lg",
                children: flight.airline[0]
              }
            ),
            /* @__PURE__ */ jsxs14("div", { children: [
              /* @__PURE__ */ jsx15("div", { className: "font-bold text-foreground text-sm tracking-tight", children: flight.airline }),
              /* @__PURE__ */ jsx15("div", { className: "text-mono-tech mt-0.5", children: flight.flightNumber })
            ] })
          ] }),
          /* @__PURE__ */ jsx15(FlightStatus, { status: flight.status })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between relative", children: [
          /* @__PURE__ */ jsxs14("div", { className: "text-left z-10", children: [
            /* @__PURE__ */ jsx15(
              motion9.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "text-display text-2xl sm:text-3xl",
                children: flight.departure.code
              }
            ),
            /* @__PURE__ */ jsx15("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate", children: flight.departure.city }),
            /* @__PURE__ */ jsx15("div", { className: "value-badge mt-1", children: flight.departure.time })
          ] }),
          /* @__PURE__ */ jsxs14("div", { className: "flex-1 px-4 sm:px-8 flex flex-col items-center justify-center relative", children: [
            flight.duration && /* @__PURE__ */ jsxs14("div", { className: "info-pill mb-2 z-10", children: [
              /* @__PURE__ */ jsx15(Clock4, { className: "w-2.5 h-2.5" }),
              flight.duration
            ] }),
            /* @__PURE__ */ jsx15("div", { className: "w-full h-0.5 bg-white/10 relative overflow-hidden", children: /* @__PURE__ */ jsx15(
              motion9.div,
              {
                className: cn(
                  "absolute inset-y-0 left-0 w-1/2",
                  isReturn ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent" : "bg-gradient-to-r from-transparent via-sky-500 to-transparent"
                ),
                animate: { x: ["-100%", "200%"] },
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }
            ) }),
            /* @__PURE__ */ jsx15(
              Plane,
              {
                className: cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 stroke-1.5",
                  isReturn ? "text-purple-400/50 -rotate-90" : "text-sky-400/50 rotate-90"
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs14("div", { className: "text-right z-10", children: [
            /* @__PURE__ */ jsx15(
              motion9.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "text-display text-2xl sm:text-3xl",
                children: flight.arrival.code
              }
            ),
            /* @__PURE__ */ jsx15("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate ml-auto", children: flight.arrival.city }),
            /* @__PURE__ */ jsx15("div", { className: "value-badge mt-1", children: flight.arrival.time })
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-dashed border-white/5", children: [
          flight.departure.terminal && /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("div", { className: "text-label mb-0.5", children: "Terminal" }),
            /* @__PURE__ */ jsx15("div", { className: "text-sm font-semibold text-foreground", children: flight.departure.terminal })
          ] }),
          flight.gate && /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("div", { className: "text-label mb-0.5", children: "Gate" }),
            /* @__PURE__ */ jsx15("div", { className: "text-sm font-semibold text-foreground", children: flight.gate })
          ] }),
          flight.seat && /* @__PURE__ */ jsxs14("div", { className: "hidden sm:block", children: [
            /* @__PURE__ */ jsx15("div", { className: "text-label mb-0.5", children: "Seat" }),
            /* @__PURE__ */ jsx15("div", { className: "text-sm font-semibold text-foreground", children: flight.seat })
          ] }),
          flight.class && /* @__PURE__ */ jsxs14("div", { className: "hidden sm:block", children: [
            /* @__PURE__ */ jsx15("div", { className: "text-label mb-0.5", children: "Class" }),
            /* @__PURE__ */ jsx15("div", { className: "text-sm font-semibold text-foreground", children: flight.class })
          ] })
        ] })
      ]
    }
  );
});

// src/domain/Flight/components/flight-cards.tsx
import { memo as memo14 } from "react";
import { ArrowRight as ArrowRight2, ArrowLeftRight } from "lucide-react";
import { SelectableItem as SelectableItem2 } from "@onegenui/react";
import { sanitizeUrl } from "@onegenui/utils";
import { motion as motion10 } from "framer-motion";
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
var RoundTripCard = memo14(function RoundTripCard2({
  trip,
  index,
  elementKey,
  lock
}) {
  const price = trip.totalPrice || trip.outbound.price;
  const bookingUrl = trip.bookingUrl || trip.outbound.bookingUrl;
  return /* @__PURE__ */ jsx16(
    motion10.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ jsxs15(
        SelectableItem2,
        {
          elementKey,
          itemId: trip.outbound.id,
          className: "card-glass group",
          children: [
            /* @__PURE__ */ jsx16("div", { className: "gradient-bar" }),
            /* @__PURE__ */ jsxs15("div", { className: "p-5 sm:p-6", children: [
              trip.return && /* @__PURE__ */ jsx16(
                motion10.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  className: "flex items-center gap-2 mb-6",
                  children: /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-sky-500/10 to-purple-500/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10", children: [
                    /* @__PURE__ */ jsx16(ArrowLeftRight, { className: "w-3.5 h-3.5" }),
                    "Round Trip"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx16(
                FlightSegment,
                {
                  flight: trip.outbound,
                  label: trip.return ? "Outbound" : void 0,
                  index: 0
                }
              ),
              trip.return && /* @__PURE__ */ jsxs15(Fragment2, { children: [
                /* @__PURE__ */ jsx16("div", { className: "divider-perforated my-6" }),
                /* @__PURE__ */ jsx16(
                  FlightSegment,
                  {
                    flight: trip.return,
                    label: "Return",
                    isReturn: true,
                    index: 1
                  }
                )
              ] }),
              (price || bookingUrl) && /* @__PURE__ */ jsxs15(
                motion10.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "flex items-center justify-between mt-6 pt-5 border-t border-white/5",
                  children: [
                    price && /* @__PURE__ */ jsxs15("div", { children: [
                      /* @__PURE__ */ jsx16("div", { className: "text-label mb-0.5", children: trip.return ? "Total Price" : "Price" }),
                      /* @__PURE__ */ jsx16("div", { className: "text-xl sm:text-2xl font-black text-white leading-none", children: formatCurrency(price.amount, price.currency) })
                    ] }),
                    bookingUrl && !lock && /* @__PURE__ */ jsxs15(
                      motion10.a,
                      {
                        href: sanitizeUrl(bookingUrl),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "btn-primary no-underline",
                        children: [
                          "Book ",
                          /* @__PURE__ */ jsx16(ArrowRight2, { className: "w-3 h-3", strokeWidth: 3 })
                        ]
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
});
var SingleFlightCard = memo14(function SingleFlightCard2({
  flight,
  index,
  elementKey,
  lock
}) {
  return /* @__PURE__ */ jsx16(
    motion10.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ jsxs15(
        SelectableItem2,
        {
          elementKey,
          itemId: flight.id,
          className: "card-glass group",
          children: [
            /* @__PURE__ */ jsx16("div", { className: "gradient-bar" }),
            /* @__PURE__ */ jsxs15("div", { className: "p-5 sm:p-6", children: [
              /* @__PURE__ */ jsx16(FlightSegment, { flight, index: 0 }),
              (flight.price || flight.bookingUrl) && /* @__PURE__ */ jsxs15(
                motion10.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "flex items-center justify-between mt-6 pt-5 border-t border-white/5",
                  children: [
                    flight.price && /* @__PURE__ */ jsxs15("div", { children: [
                      /* @__PURE__ */ jsx16("div", { className: "text-label mb-0.5", children: "Price" }),
                      /* @__PURE__ */ jsx16("div", { className: "text-xl sm:text-2xl font-black text-white leading-none", children: formatCurrency(flight.price.amount, flight.price.currency) })
                    ] }),
                    flight.bookingUrl && !lock && /* @__PURE__ */ jsxs15(
                      motion10.a,
                      {
                        href: sanitizeUrl(flight.bookingUrl),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "btn-primary no-underline",
                        children: [
                          "Book ",
                          /* @__PURE__ */ jsx16(ArrowRight2, { className: "w-3 h-3", strokeWidth: 3 })
                        ]
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
});

// src/domain/Flight/adapters/flight.adapter.ts
function createFlightAdapter() {
  return {
    pairFlightsIntoTrips(flights) {
      const trips = [];
      const used = /* @__PURE__ */ new Set();
      for (const flight of flights) {
        if (used.has(flight.id)) continue;
        const returnFlight = flights.find((f) => {
          if (used.has(f.id) || f.id === flight.id) return false;
          return f.departure.code === flight.arrival.code && f.arrival.code === flight.departure.code;
        });
        if (returnFlight) {
          used.add(flight.id);
          used.add(returnFlight.id);
          const totalPrice = flight.price ? { amount: flight.price.amount, currency: flight.price.currency } : void 0;
          trips.push({
            outbound: flight,
            return: returnFlight,
            totalPrice,
            bookingUrl: flight.bookingUrl
          });
        } else {
          used.add(flight.id);
          trips.push({ outbound: flight });
        }
      }
      return trips;
    },
    formatPrice(amount, currency) {
      return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency
      }).format(amount);
    },
    getTripKey(trip, index) {
      return trip.outbound.id || `trip-${index}`;
    },
    isRoundTrip(trip) {
      return !!trip.return;
    }
  };
}
function createFlightStateAdapter() {
  return {
    computeDisplayTrips(trips, flights, pairFn) {
      const hasTrips = trips && trips.length > 0;
      const hasFlights = flights && flights.length > 0;
      if (hasTrips) return trips;
      if (hasFlights) return pairFn(flights);
      return [];
    }
  };
}
var flightAdapterInstance = null;
var stateAdapterInstance2 = null;
function getFlightAdapter() {
  if (!flightAdapterInstance) {
    flightAdapterInstance = createFlightAdapter();
  }
  return flightAdapterInstance;
}
function getFlightStateAdapter() {
  if (!stateAdapterInstance2) {
    stateAdapterInstance2 = createFlightStateAdapter();
  }
  return stateAdapterInstance2;
}

// src/domain/Flight/hooks/useFlightLogic.ts
import { useMemo as useMemo6 } from "react";
import { useElementState as useElementState2 } from "@onegenui/react";
function useFlightLogic(elementKey, flightAdapter, stateAdapter, options) {
  const { trips, flights, lock = false } = options;
  const computedTrips = useMemo6(
    () => stateAdapter.computeDisplayTrips(
      trips,
      flights,
      flightAdapter.pairFlightsIntoTrips.bind(flightAdapter)
    ),
    [stateAdapter, flightAdapter, trips, flights]
  );
  const [{ localTrips }, updateState] = useElementState2(elementKey, {
    localTrips: null
  });
  const displayTrips = localTrips ?? computedTrips;
  const hasContent = displayTrips.length > 0;
  const updateTrips = (newTrips) => {
    if (lock) return;
    updateState({ localTrips: newTrips });
  };
  return {
    displayTrips,
    hasContent,
    getTripKey: flightAdapter.getTripKey.bind(flightAdapter),
    isRoundTrip: flightAdapter.isRoundTrip.bind(flightAdapter),
    updateTrips
  };
}

// src/domain/Flight/component.tsx
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
var containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
var headerVariants = {
  hidden: { opacity: 0, y: "-0.625rem" },
  visible: { opacity: 1, y: 0 }
};
var Flight = memo15(function Flight2({
  element,
  children
}) {
  const {
    title,
    flights,
    trips,
    lock = false
  } = element.props;
  const flightAdapter = getFlightAdapter();
  const stateAdapter = getFlightStateAdapter();
  const { displayTrips, getTripKey, isRoundTrip } = useFlightLogic(
    element.key,
    flightAdapter,
    stateAdapter,
    { trips, flights, lock }
  );
  const totalPrice = useMemo7(() => {
    return displayTrips.reduce((sum, trip) => {
      const outPrice = trip.outbound?.price?.amount || 0;
      const retPrice = trip.return?.price?.amount || 0;
      return sum + outPrice + retPrice;
    }, 0);
  }, [displayTrips]);
  const currency = displayTrips[0]?.outbound?.price?.currency || "EUR";
  useDomainAutoSave3("flight", element.key, {
    title,
    trips: displayTrips,
    status: "search",
    totalPrice: totalPrice > 0 ? totalPrice : null,
    currency
  });
  return /* @__PURE__ */ jsxs16(
    motion11.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-4 sm:gap-6 w-full",
      children: [
        title && /* @__PURE__ */ jsxs16(
          motion11.h3,
          {
            variants: headerVariants,
            className: "m-0 text-lg sm:text-xl font-bold text-foreground tracking-tight flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx17(Plane2, { className: "w-4 h-4 sm:w-5 sm:h-5 text-sky-500" }),
              title
            ]
          }
        ),
        /* @__PURE__ */ jsx17(AnimatePresence3, { mode: "popLayout", children: displayTrips.map((trip, i) => {
          const itemKey = getTripKey(trip, i);
          if (isRoundTrip(trip)) {
            return /* @__PURE__ */ jsx17(
              RoundTripCard,
              {
                trip,
                index: i,
                elementKey: element.key,
                lock
              },
              itemKey
            );
          }
          return /* @__PURE__ */ jsx17(
            SingleFlightCard,
            {
              flight: trip.outbound,
              index: i,
              elementKey: element.key,
              lock
            },
            itemKey
          );
        }) }),
        children
      ]
    }
  );
});

// src/domain/Hotel/component.tsx
import { memo as memo16, useMemo as useMemo8 } from "react";
import {
  SelectableItem as SelectableItem3,
  useDomainAutoSave as useDomainAutoSave4
} from "@onegenui/react";
import {
  MapPin as MapPin3,
  Star,
  Calendar as Calendar2,
  Bed,
  Users,
  Hotel as HotelIcon,
  ArrowRight as ArrowRight3
} from "lucide-react";
import { sanitizeUrl as sanitizeUrl2 } from "@onegenui/utils";
import { motion as motion12, AnimatePresence as AnimatePresence4 } from "framer-motion";

// src/domain/Hotel/adapters/hotel.adapter.ts
var STATUS_VARIANT_MAP2 = {
  Available: "info",
  Booked: "success",
  Reserved: "success",
  "Sold Out": "error"
};
function createHotelAdapter() {
  return {
    getStatusVariant(status) {
      return STATUS_VARIANT_MAP2[status] || "neutral";
    },
    calculateNights(checkIn, checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end.getTime() - start.getTime();
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    },
    calculateTotalPrice(pricePerNight, checkIn, checkOut) {
      const nights = this.calculateNights(checkIn, checkOut);
      return pricePerNight * Math.max(1, nights);
    },
    formatAmenities(amenities, limit) {
      return amenities.slice(0, limit);
    },
    isBookable(status) {
      if (!status) return true;
      return status === "Available";
    }
  };
}
var hotelAdapterInstance = null;
function getHotelAdapter() {
  if (!hotelAdapterInstance) {
    hotelAdapterInstance = createHotelAdapter();
  }
  return hotelAdapterInstance;
}

// src/domain/Hotel/component.tsx
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
var hotelAdapter = getHotelAdapter();
var containerVariants2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
var cardVariants = {
  hidden: { opacity: 0, y: "1.25rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-1.25rem" }
};
var HotelStatusBadge = ({ status }) => /* @__PURE__ */ jsx18(
  StatusBadge,
  {
    label: status,
    variant: hotelAdapter.getStatusVariant(status),
    pulse: true
  }
);
var Hotel = memo16(function Hotel2({
  element,
  children
}) {
  const {
    title,
    hotels,
    layout = "list"
  } = element.props;
  const { checkIn, checkOut, totalPrice, currency } = useMemo8(() => {
    const hotelList = hotels || [];
    let minCheckIn = null;
    let maxCheckOut = null;
    let total = 0;
    let curr = "EUR";
    for (const hotel of hotelList) {
      if (hotel.dates?.checkIn) {
        const cin = new Date(hotel.dates.checkIn);
        if (!minCheckIn || cin < minCheckIn) minCheckIn = cin;
      }
      if (hotel.dates?.checkOut) {
        const cout = new Date(hotel.dates.checkOut);
        if (!maxCheckOut || cout > maxCheckOut) maxCheckOut = cout;
      }
      if (hotel.price?.amount) {
        total += hotel.price.amount;
        curr = hotel.price.currency || curr;
      }
    }
    return {
      checkIn: minCheckIn?.toISOString() || null,
      checkOut: maxCheckOut?.toISOString() || null,
      totalPrice: total > 0 ? total : null,
      currency: curr
    };
  }, [hotels]);
  useDomainAutoSave4("hotel", element.key, {
    title,
    hotels: hotels || [],
    status: "search",
    checkIn,
    checkOut,
    totalPrice,
    currency
  });
  return /* @__PURE__ */ jsxs17(
    motion12.div,
    {
      variants: containerVariants2,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-4 sm:gap-6 w-full",
      children: [
        title && /* @__PURE__ */ jsxs17("h3", { className: "m-0 text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2", children: [
          /* @__PURE__ */ jsx18(HotelIcon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-amber-400 hidden" }),
          title
        ] }),
        /* @__PURE__ */ jsx18(
          "div",
          {
            className: cn(
              "grid gap-4 sm:gap-6",
              // Mobile-first: single column, then responsive
              layout === "card" ? "grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]" : "grid-cols-1"
            ),
            children: /* @__PURE__ */ jsx18(AnimatePresence4, { mode: "popLayout", children: (hotels || []).map((hotel, i) => {
              return /* @__PURE__ */ jsx18(
                motion12.div,
                {
                  variants: cardVariants,
                  initial: "hidden",
                  animate: "visible",
                  exit: "exit",
                  children: /* @__PURE__ */ jsxs17(
                    SelectableItem3,
                    {
                      elementKey: element.key,
                      itemId: hotel.id,
                      className: cn(
                        "group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer transition-all duration-500",
                        "hover:shadow-2xl hover:shadow-black/50 hover:border-white/20 hover:-translate-y-0.5",
                        "flex isolate rounded-xl sm:rounded-3xl",
                        // Mobile: always stack vertically
                        "flex-col",
                        // Desktop list: side-by-side
                        layout === "list" && "sm:flex-row sm:min-h-[12.5rem]"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs17(
                          "div",
                          {
                            className: cn(
                              "relative overflow-hidden z-0",
                              // Mobile: fixed height on top
                              "h-36 w-full",
                              // Desktop list: side image
                              layout === "list" && "sm:w-[15rem] sm:min-w-[15rem] sm:h-full sm:absolute sm:inset-y-0 sm:left-0"
                            ),
                            children: [
                              hotel.image ? /* @__PURE__ */ jsx18("div", { className: "absolute inset-0 transition-transform duration-700 group-hover:scale-110", children: /* @__PURE__ */ jsx18(
                                "img",
                                {
                                  src: hotel.image,
                                  alt: hotel.name,
                                  className: "w-full h-full object-cover"
                                }
                              ) }) : /* @__PURE__ */ jsx18("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center", children: /* @__PURE__ */ jsx18(HotelIcon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-white/10" }) }),
                              /* @__PURE__ */ jsx18("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" }),
                              layout === "list" && /* @__PURE__ */ jsx18("div", { className: "hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-zinc-950" }),
                              hotel.status && /* @__PURE__ */ jsx18("div", { className: "absolute top-3 left-3 sm:top-4 sm:left-4", children: /* @__PURE__ */ jsx18(HotelStatusBadge, { status: hotel.status }) })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs17(
                          "div",
                          {
                            className: cn(
                              "relative z-10 flex flex-col p-4 sm:p-6 flex-1",
                              layout === "list" && "sm:pl-[14rem]"
                            ),
                            children: [
                              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2", children: [
                                /* @__PURE__ */ jsxs17("div", { className: "space-y-1 min-w-0", children: [
                                  /* @__PURE__ */ jsx18("h4", { className: "text-base sm:text-xl font-bold text-foreground group-hover:text-amber-400 transition-colors leading-tight truncate", children: hotel.name }),
                                  hotel.address && /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-white/60", children: [
                                    /* @__PURE__ */ jsx18(MapPin3, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/40 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx18("span", { className: "truncate", children: hotel.address })
                                  ] })
                                ] }),
                                hotel.rating && /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shrink-0 self-start", children: [
                                  /* @__PURE__ */ jsx18(Star, { className: "w-3 h-3 fill-amber-400 text-amber-400" }),
                                  /* @__PURE__ */ jsx18("span", { className: "text-xs sm:text-sm font-bold text-foreground", children: hotel.rating })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsx18("div", { className: "h-px bg-white/10 w-full my-3 sm:my-4 group-hover:bg-white/20 transition-colors" }),
                              /* @__PURE__ */ jsxs17("div", { className: "grid grid-cols-2 gap-3 sm:gap-4 text-[0.625rem] sm:text-xs", children: [
                                hotel.dates && /* @__PURE__ */ jsxs17("div", { className: "space-y-0.5 sm:space-y-1", children: [
                                  /* @__PURE__ */ jsx18("div", { className: "text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]", children: "Dates" }),
                                  /* @__PURE__ */ jsxs17("div", { className: "text-foreground font-medium flex items-center gap-1 sm:gap-1.5", children: [
                                    /* @__PURE__ */ jsx18(Calendar2, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-400 flex-shrink-0" }),
                                    /* @__PURE__ */ jsxs17("span", { className: "truncate", children: [
                                      formatDateShort(hotel.dates.checkIn),
                                      /* @__PURE__ */ jsx18("span", { className: "text-white/30 mx-0.5", children: "-" }),
                                      formatDateShort(hotel.dates.checkOut)
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs17("div", { className: "space-y-0.5 sm:space-y-1", children: [
                                  /* @__PURE__ */ jsx18("div", { className: "text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]", children: "Details" }),
                                  /* @__PURE__ */ jsxs17("div", { className: "text-foreground font-medium flex items-center gap-1.5 sm:gap-2 flex-wrap", children: [
                                    hotel.guests && /* @__PURE__ */ jsxs17("span", { className: "flex items-center gap-0.5 sm:gap-1", children: [
                                      /* @__PURE__ */ jsx18(Users, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" }),
                                      hotel.guests
                                    ] }),
                                    hotel.roomType && /* @__PURE__ */ jsxs17(
                                      "span",
                                      {
                                        className: "flex items-center gap-0.5 sm:gap-1 truncate max-w-[5rem] sm:max-w-[6.25rem]",
                                        title: hotel.roomType,
                                        children: [
                                          /* @__PURE__ */ jsx18(Bed, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-400 flex-shrink-0" }),
                                          /* @__PURE__ */ jsx18("span", { className: "truncate", children: hotel.roomType })
                                        ]
                                      }
                                    )
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs17("div", { className: "mt-auto pt-4 sm:pt-6 flex w-full items-end justify-between gap-2", children: [
                                hotel.amenities && hotel.amenities.length > 0 && /* @__PURE__ */ jsx18("div", { className: "hidden sm:flex -space-x-2", children: hotel.amenities.slice(0, 3).map((a, idx) => /* @__PURE__ */ jsx18(
                                  "div",
                                  {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] text-zinc-400 font-bold uppercase overflow-hidden",
                                    title: a,
                                    children: a[0]
                                  },
                                  idx
                                )) }),
                                hotel.price && /* @__PURE__ */ jsxs17("div", { className: "ml-auto flex items-center gap-3 sm:gap-4", children: [
                                  /* @__PURE__ */ jsxs17("div", { className: "text-right", children: [
                                    /* @__PURE__ */ jsx18("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-white/40 font-bold uppercase tracking-wide", children: hotel.price.perNight ? "Per Night" : "Total" }),
                                    /* @__PURE__ */ jsx18("div", { className: "text-lg sm:text-2xl font-black text-foreground tracking-tight leading-none", children: formatCurrency(
                                      hotel.price.amount,
                                      hotel.price.currency
                                    ) })
                                  ] }),
                                  hotel.bookingUrl ? /* @__PURE__ */ jsx18(
                                    "a",
                                    {
                                      href: sanitizeUrl2(hotel.bookingUrl),
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className: "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation",
                                      children: /* @__PURE__ */ jsx18(ArrowRight3, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", strokeWidth: 2.5 })
                                    }
                                  ) : /* @__PURE__ */ jsx18("button", { className: "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation", children: /* @__PURE__ */ jsx18(ArrowRight3, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", strokeWidth: 2.5 }) })
                                ] })
                              ] })
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                hotel.id
              );
            }) })
          }
        ),
        children
      ]
    }
  );
});

// src/domain/Hotel/hooks/useHotelLogic.ts
import { useState as useState6, useMemo as useMemo9, useCallback as useCallback4 } from "react";
import { useElementState as useElementState3 } from "@onegenui/react";

// src/domain/Trip/component.tsx
import { memo as memo17, useMemo as useMemo10 } from "react";
import { useDomainAutoSave as useDomainAutoSave5 } from "@onegenui/react";
import { Plane as Plane3, Hotel as Hotel3, MapPin as MapPin4, Calendar as Calendar3, Wallet } from "lucide-react";
import { motion as motion13, AnimatePresence as AnimatePresence5 } from "framer-motion";
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
var STATUS_TO_VARIANT = {
  Upcoming: "info",
  Completed: "success",
  Draft: "warning",
  Cancelled: "error"
};
var Trip = memo17(function Trip2({
  element,
  children
}) {
  const { title, trips, activeTripId } = element.props;
  const activeTrip = useMemo10(
    () => trips?.find((t) => t.id === activeTripId),
    [trips, activeTripId]
  );
  useDomainAutoSave5(
    "trip",
    element.key,
    activeTrip ? {
      name: activeTrip.title,
      destinations: [activeTrip.destination],
      startDate: activeTrip.dates?.start,
      endDate: activeTrip.dates?.end,
      status: activeTrip.status?.toLowerCase() || "planning",
      budget: activeTrip.totalCost?.amount,
      currency: activeTrip.totalCost?.currency
    } : null
  );
  return /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full", children: [
    /* @__PURE__ */ jsx19("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx19("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50", children: title || "My Trips" }) }),
    trips && trips.length > 0 && /* @__PURE__ */ jsx19("div", { className: "flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-none snap-x snap-mandatory perspective-[1000px] touch-pan-x", children: trips.map((trip, index) => {
      const isActive = activeTripId === trip.id;
      return /* @__PURE__ */ jsxs18(
        motion13.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: index * 0.1 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": trip.id,
          className: cn(
            "min-w-[16rem] sm:min-w-[17.5rem] h-[10rem] sm:h-[11.25rem] p-4 sm:p-5 rounded-2xl sm:rounded-3xl cursor-pointer relative overflow-hidden group snap-center transition-all duration-500 border touch-manipulation",
            isActive ? "border-primary/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] scale-100" : "border-white/5 hover:border-white/20 bg-black/40 hover:bg-black/60 scale-[0.98] hover:scale-[1.0]"
          ),
          children: [
            /* @__PURE__ */ jsxs18("div", { className: "absolute inset-0 z-0", children: [
              /* @__PURE__ */ jsx19(
                "div",
                {
                  className: cn(
                    "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                    isActive ? "from-indigo-600/20 to-purple-600/20 opacity-100" : "from-zinc-900 to-black opacity-100"
                  )
                }
              ),
              trip.imageUrl && /* @__PURE__ */ jsx19(
                "img",
                {
                  src: trip.imageUrl,
                  alt: "",
                  className: "w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs18("div", { className: "flex justify-between items-start gap-2", children: [
                /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5 text-white/90 font-bold tracking-tight bg-black/30 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/5", children: [
                  /* @__PURE__ */ jsx19(MapPin4, { className: "w-3 h-3 text-indigo-400" }),
                  /* @__PURE__ */ jsx19("span", { className: "text-[0.625rem] sm:text-xs uppercase whitespace-nowrap", children: trip.destination || "Unknown" })
                ] }),
                /* @__PURE__ */ jsx19(
                  StatusBadge,
                  {
                    label: trip.status,
                    variant: STATUS_TO_VARIANT[trip.status] || "neutral"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx19(
                  "h4",
                  {
                    className: cn(
                      "text-base sm:text-lg lg:text-xl font-bold leading-tight transition-colors line-clamp-2",
                      isActive ? "text-white" : "text-zinc-200"
                    ),
                    children: trip.title
                  }
                ),
                /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-medium text-white/50", children: [
                  /* @__PURE__ */ jsx19(Calendar3, { className: "w-3 h-3" }),
                  trip.dates?.start ? new Date(trip.dates.start).toLocaleDateString(
                    void 0,
                    { month: "short", day: "numeric" }
                  ) : "TBD",
                  " - ",
                  trip.dates?.end ? new Date(trip.dates.end).toLocaleDateString(
                    void 0,
                    { month: "short", day: "numeric" }
                  ) : "TBD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "pt-3 sm:pt-4 mt-auto border-t border-white/10 flex items-center gap-3 sm:gap-4 text-[0.625rem] sm:text-xs font-medium text-white/60", children: [
                trip.stats?.flights ? /* @__PURE__ */ jsxs18("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx19(Plane3, { className: "w-3 h-3 text-sky-400" }),
                  " ",
                  trip.stats.flights,
                  " ",
                  /* @__PURE__ */ jsx19("span", { className: "hidden sm:inline", children: "Flights" })
                ] }) : null,
                trip.stats?.hotels ? /* @__PURE__ */ jsxs18("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx19(Hotel3, { className: "w-3 h-3 text-amber-400" }),
                  " ",
                  trip.stats.hotels,
                  " ",
                  /* @__PURE__ */ jsx19("span", { className: "hidden sm:inline", children: "Hotels" })
                ] }) : null
              ] })
            ] })
          ]
        },
        trip.id
      );
    }) }),
    /* @__PURE__ */ jsx19(AnimatePresence5, { mode: "wait", children: activeTripId && /* @__PURE__ */ jsxs18(
      motion13.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.4 },
        className: "flex flex-col gap-6",
        children: [
          activeTrip?.totalCost && /* @__PURE__ */ jsxs18("div", { className: "glass-panel p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx19("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20", children: /* @__PURE__ */ jsx19(Wallet, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
              /* @__PURE__ */ jsxs18("div", { children: [
                /* @__PURE__ */ jsx19("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground", children: "Total Budget" }),
                /* @__PURE__ */ jsx19("div", { className: "text-lg sm:text-xl lg:text-2xl font-bold tracking-tight font-mono", children: formatCurrency(
                  activeTrip.totalCost.amount,
                  activeTrip.totalCost.currency
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsx19("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground bg-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full self-start sm:self-auto", children: "Estimated" })
          ] }),
          /* @__PURE__ */ jsx19("div", { className: "relative pl-4 sm:pl-6 lg:pl-8 border-l-2 border-dashed border-white/10 space-y-4 sm:space-y-6 lg:space-y-8", children })
        ]
      },
      activeTripId
    ) })
  ] });
});

// src/domain/BookingForms/component.tsx
import { memo as memo18 } from "react";
import {
  Plane as Plane4,
  Hotel as Hotel4,
  ArrowRight as ArrowRight4,
  Calendar as Calendar4,
  MapPin as MapPin5,
  User,
  Search
} from "lucide-react";
import { motion as motion14, AnimatePresence as AnimatePresence6 } from "framer-motion";

// src/domain/BookingForms/adapters/booking-forms.adapter.ts
function createBookingFormsValidationAdapter() {
  return {
    validateFlightForm(data) {
      const errors = {};
      if (!data.from || !this.isValidAirportCode(data.from)) {
        errors.from = "Valid airport code required";
      }
      if (!data.to || !this.isValidAirportCode(data.to)) {
        errors.to = "Valid airport code required";
      }
      if (data.from && data.to && data.from === data.to) {
        errors.to = "Destination must differ from origin";
      }
      if (!data.date) {
        errors.date = "Date required";
      }
      if (data.passengers < 1) {
        errors.passengers = "At least 1 passenger required";
      }
      return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
    },
    validateHotelForm(data) {
      const errors = {};
      if (!data.destination || data.destination.trim().length < 2) {
        errors.destination = "Destination required";
      }
      if (!data.checkIn) {
        errors.checkIn = "Check-in date required";
      }
      if (!data.checkOut) {
        errors.checkOut = "Check-out date required";
      }
      if (data.checkIn && data.checkOut && data.checkIn >= data.checkOut) {
        errors.checkOut = "Check-out must be after check-in";
      }
      if (data.guests < 1) {
        errors.guests = "At least 1 guest required";
      }
      return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
    },
    isValidAirportCode(code) {
      return /^[A-Z]{3}$/i.test(code.trim());
    }
  };
}
function createBookingFormsStateAdapter() {
  return {
    getDefaultFlightForm() {
      return {
        from: "",
        fromCity: "",
        to: "",
        toCity: "",
        date: null,
        passengers: 1
      };
    },
    getDefaultHotelForm() {
      return {
        destination: "",
        checkIn: null,
        checkOut: null,
        guests: 1
      };
    },
    updateFlightField(form, field, value) {
      return { ...form, [field]: value };
    },
    updateHotelField(form, field, value) {
      return { ...form, [field]: value };
    },
    getActionLabel(mode) {
      return mode === "create" ? "Search" : "Update";
    },
    getPromoText(type) {
      return type === "flight" ? "Best price guaranteed" : "Free cancellation available";
    }
  };
}
var validationAdapterInstance = null;
var stateAdapterInstance3 = null;
function getBookingFormsValidationAdapter() {
  if (!validationAdapterInstance) {
    validationAdapterInstance = createBookingFormsValidationAdapter();
  }
  return validationAdapterInstance;
}
function getBookingFormsStateAdapter() {
  if (!stateAdapterInstance3) {
    stateAdapterInstance3 = createBookingFormsStateAdapter();
  }
  return stateAdapterInstance3;
}

// src/domain/BookingForms/hooks/useBookingFormsLogic.ts
import { useState as useState7, useCallback as useCallback5, useMemo as useMemo11 } from "react";
import { useElementState as useElementState4 } from "@onegenui/react";
function useBookingFormsLogic(elementKey, validationAdapter, stateAdapter, options) {
  const { initialType = "flight", mode = "create" } = options;
  const [state, updateState] = useElementState4(elementKey, {
    activeTab: initialType,
    flightForm: stateAdapter.getDefaultFlightForm(),
    hotelForm: stateAdapter.getDefaultHotelForm()
  });
  const { activeTab, flightForm, hotelForm } = state;
  const [flightValidation, setFlightValidation] = useState7(null);
  const [hotelValidation, setHotelValidation] = useState7(null);
  const actionLabel = stateAdapter.getActionLabel(mode);
  const promoText = stateAdapter.getPromoText(activeTab);
  const isFlightFormValid = useMemo11(
    () => validationAdapter.validateFlightForm(flightForm).isValid,
    [validationAdapter, flightForm]
  );
  const isHotelFormValid = useMemo11(
    () => validationAdapter.validateHotelForm(hotelForm).isValid,
    [validationAdapter, hotelForm]
  );
  const setActiveTab = useCallback5(
    (tab) => {
      updateState({ activeTab: tab });
    },
    [updateState]
  );
  const updateFlightField = useCallback5(
    (field, value) => {
      const updated = stateAdapter.updateFlightField(flightForm, field, value);
      updateState({ flightForm: updated });
      setFlightValidation(null);
    },
    [stateAdapter, flightForm, updateState]
  );
  const updateHotelField = useCallback5(
    (field, value) => {
      const updated = stateAdapter.updateHotelField(hotelForm, field, value);
      updateState({ hotelForm: updated });
      setHotelValidation(null);
    },
    [stateAdapter, hotelForm, updateState]
  );
  const validateFlight = useCallback5(() => {
    const result = validationAdapter.validateFlightForm(flightForm);
    setFlightValidation(result);
    return result;
  }, [validationAdapter, flightForm]);
  const validateHotel = useCallback5(() => {
    const result = validationAdapter.validateHotelForm(hotelForm);
    setHotelValidation(result);
    return result;
  }, [validationAdapter, hotelForm]);
  const resetFlightForm = useCallback5(() => {
    updateState({ flightForm: stateAdapter.getDefaultFlightForm() });
    setFlightValidation(null);
  }, [stateAdapter, updateState]);
  const resetHotelForm = useCallback5(() => {
    updateState({ hotelForm: stateAdapter.getDefaultHotelForm() });
    setHotelValidation(null);
  }, [stateAdapter, updateState]);
  return {
    // State
    activeTab,
    flightForm,
    hotelForm,
    flightValidation,
    hotelValidation,
    // Derived
    actionLabel,
    promoText,
    isFlightFormValid,
    isHotelFormValid,
    // Actions
    setActiveTab,
    updateFlightField,
    updateHotelField,
    validateFlight,
    validateHotel,
    resetFlightForm,
    resetHotelForm
  };
}

// src/domain/BookingForms/component.tsx
import { Fragment as Fragment3, jsx as jsx20, jsxs as jsxs19 } from "react/jsx-runtime";
var BookingForms = memo18(function BookingForms2({
  element,
  children
}) {
  const {
    type = "flight",
    mode = "create",
    title
  } = element.props;
  const validationAdapter = getBookingFormsValidationAdapter();
  const stateAdapter = getBookingFormsStateAdapter();
  const {
    activeTab,
    setActiveTab,
    flightForm,
    hotelForm,
    updateFlightField,
    updateHotelField,
    actionLabel,
    promoText
  } = useBookingFormsLogic(element.key, validationAdapter, stateAdapter, {
    initialType: type,
    mode
  });
  return /* @__PURE__ */ jsxs19(
    motion14.div,
    {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      className: "glass-panel w-full max-w-[500px] rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden isolate",
      children: [
        /* @__PURE__ */ jsx20("div", { className: "absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" }),
        /* @__PURE__ */ jsxs19("div", { className: "p-4 sm:p-6 lg:p-8", children: [
          /* @__PURE__ */ jsxs19("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsx20("h3", { className: "text-lg sm:text-xl font-bold tracking-tight text-white m-0", children: title || "Booking" }),
            /* @__PURE__ */ jsx20("div", { className: "flex bg-black/40 p-1 rounded-lg sm:rounded-xl border border-white/5", children: ["flight", "hotel"].map((tab) => /* @__PURE__ */ jsxs19(
              "button",
              {
                onClick: () => setActiveTab(tab),
                className: cn(
                  "px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all relative touch-manipulation",
                  activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                ),
                children: [
                  activeTab === tab && /* @__PURE__ */ jsx20(
                    motion14.div,
                    {
                      layoutId: "activeTab",
                      className: "absolute inset-0 bg-white/10 rounded-md sm:rounded-lg border border-white/10 shadow-sm"
                    }
                  ),
                  /* @__PURE__ */ jsxs19("span", { className: "relative z-10 flex items-center gap-1 sm:gap-1.5", children: [
                    tab === "flight" ? /* @__PURE__ */ jsx20(Plane4, { className: "w-3 h-3" }) : /* @__PURE__ */ jsx20(Hotel4, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsx20("span", { className: "hidden sm:inline", children: tab })
                  ] })
                ]
              },
              tab
            )) })
          ] }),
          /* @__PURE__ */ jsx20(AnimatePresence6, { mode: "wait", children: /* @__PURE__ */ jsx20(
            motion14.div,
            {
              initial: { opacity: 0, x: 10 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -10 },
              transition: { duration: 0.2 },
              className: "flex flex-col gap-4 sm:gap-6",
              children: activeTab === "flight" ? /* @__PURE__ */ jsxs19(Fragment3, { children: [
                /* @__PURE__ */ jsxs19("div", { className: "bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 relative", children: [
                  /* @__PURE__ */ jsxs19("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx20("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pl-1 mb-0.5 sm:mb-1 block", children: "From" }),
                    /* @__PURE__ */ jsx20(
                      "input",
                      {
                        type: "text",
                        placeholder: "JFK",
                        value: flightForm.from,
                        onChange: (e) => updateFlightField("from", e.target.value.toUpperCase()),
                        className: "w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight min-h-[2.75rem]"
                      }
                    ),
                    /* @__PURE__ */ jsx20("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium", children: flightForm.fromCity || "Origin City" })
                  ] }),
                  /* @__PURE__ */ jsxs19("div", { className: "flex flex-col items-center justify-center opacity-50", children: [
                    /* @__PURE__ */ jsx20("div", { className: "w-px h-6 sm:h-8 bg-zinc-700 mx-auto mb-0.5 sm:mb-1" }),
                    /* @__PURE__ */ jsx20("div", { className: "p-1 sm:p-1.5 rounded-full bg-zinc-800 border border-zinc-700", children: /* @__PURE__ */ jsx20(Plane4, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-90 text-zinc-400" }) }),
                    /* @__PURE__ */ jsx20("div", { className: "w-px h-6 sm:h-8 bg-zinc-700 mx-auto mt-0.5 sm:mt-1" })
                  ] }),
                  /* @__PURE__ */ jsxs19("div", { className: "flex-1 text-right", children: [
                    /* @__PURE__ */ jsx20("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pr-1 mb-0.5 sm:mb-1 block", children: "To" }),
                    /* @__PURE__ */ jsx20(
                      "input",
                      {
                        type: "text",
                        placeholder: "LHR",
                        value: flightForm.to,
                        onChange: (e) => updateFlightField("to", e.target.value.toUpperCase()),
                        className: "w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight text-right min-h-[2.75rem]"
                      }
                    ),
                    /* @__PURE__ */ jsx20("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium", children: flightForm.toCity || "Destination City" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs19("div", { className: "grid grid-cols-2 gap-2 sm:gap-4", children: [
                  /* @__PURE__ */ jsxs19("div", { className: "bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation", children: [
                    /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300", children: [
                      /* @__PURE__ */ jsx20(Calendar4, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsx20("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest", children: "Date" })
                    ] }),
                    /* @__PURE__ */ jsx20("div", { className: "text-xs sm:text-sm font-semibold text-white", children: flightForm.date || "Select Date" })
                  ] }),
                  /* @__PURE__ */ jsxs19("div", { className: "bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation", children: [
                    /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300", children: [
                      /* @__PURE__ */ jsx20(User, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsx20("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest", children: "Passengers" })
                    ] }),
                    /* @__PURE__ */ jsxs19("div", { className: "text-xs sm:text-sm font-semibold text-white", children: [
                      flightForm.passengers,
                      " Adult",
                      flightForm.passengers > 1 ? "s" : ""
                    ] })
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxs19(Fragment3, { children: [
                /* @__PURE__ */ jsxs19("div", { className: "bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 group hover:border-white/20 transition-colors touch-manipulation", children: [
                  /* @__PURE__ */ jsx20(
                    MapPin5,
                    {
                      className: "text-zinc-600 group-hover:text-sky-500 transition-colors w-5 h-5 sm:w-6 sm:h-6"
                    }
                  ),
                  /* @__PURE__ */ jsxs19("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx20("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 block", children: "Destination" }),
                    /* @__PURE__ */ jsx20(
                      "input",
                      {
                        type: "text",
                        placeholder: "Where to?",
                        value: hotelForm.destination,
                        onChange: (e) => updateHotelField("destination", e.target.value),
                        className: "w-full bg-transparent text-base sm:text-lg font-bold text-white placeholder-zinc-700 outline-none min-h-[2.75rem]"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs19("div", { className: "grid grid-cols-2 gap-px bg-white/10 rounded-lg sm:rounded-xl overflow-hidden border border-white/5", children: [
                  /* @__PURE__ */ jsxs19("div", { className: "bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation", children: [
                    /* @__PURE__ */ jsx20("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1", children: "Check-in" }),
                    /* @__PURE__ */ jsx20("div", { className: "text-xs sm:text-sm font-semibold text-white", children: hotelForm.checkIn || "Add Date" })
                  ] }),
                  /* @__PURE__ */ jsxs19("div", { className: "bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation", children: [
                    /* @__PURE__ */ jsx20("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1", children: "Check-out" }),
                    /* @__PURE__ */ jsx20("div", { className: "text-xs sm:text-sm font-semibold text-white", children: hotelForm.checkOut || "Add Date" })
                  ] })
                ] })
              ] })
            },
            activeTab
          ) }),
          /* @__PURE__ */ jsxs19("div", { className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsx20("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium text-center sm:text-left", children: promoText }),
            /* @__PURE__ */ jsxs19("button", { className: "h-9 sm:h-10 px-4 sm:px-6 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wide rounded-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-white/10 touch-manipulation w-full sm:w-auto justify-center", children: [
              mode === "create" ? /* @__PURE__ */ jsx20(Search, { className: "w-3.5 h-3.5", strokeWidth: 3 }) : /* @__PURE__ */ jsx20(ArrowRight4, { className: "w-3.5 h-3.5", strokeWidth: 3 }),
              actionLabel
            ] })
          ] })
        ] }),
        children
      ]
    }
  );
});

// src/domain/social/profile-card.tsx
import { memo as memo19 } from "react";
import {
  MapPin as MapPin6,
  Link as LinkIcon,
  Calendar as Calendar5,
  MessageCircle,
  UserPlus,
  Check as Check3,
  User as User2
} from "lucide-react";
import { jsx as jsx21, jsxs as jsxs20 } from "react/jsx-runtime";
var ProfileCard = memo19(function ProfileCard2({
  element,
  children
}) {
  const { profile } = element.props;
  if (!profile) {
    return /* @__PURE__ */ jsx21(EmptyState, { icon: /* @__PURE__ */ jsx21(User2, { className: "w-10 h-10" }), message: "No profile" });
  }
  return /* @__PURE__ */ jsxs20("div", { className: "group relative rounded-2xl sm:rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl", children: [
    /* @__PURE__ */ jsxs20("div", { className: "h-24 sm:h-32 lg:h-40 relative bg-zinc-800 border-b border-white/5", children: [
      profile.coverImage ? /* @__PURE__ */ jsxs20("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx21(
          "img",
          {
            src: profile.coverImage,
            className: "w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          }
        ),
        /* @__PURE__ */ jsx21("div", { className: "absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" })
      ] }) : /* @__PURE__ */ jsx21("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900 to-zinc-950" }),
      /* @__PURE__ */ jsx21(
        "div",
        {
          className: "absolute inset-0 opacity-10",
          style: {
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "12px 12px"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 relative", children: [
      /* @__PURE__ */ jsx21("div", { className: "absolute -top-10 sm:-top-12 left-4 sm:left-6", children: /* @__PURE__ */ jsx21("div", { className: "w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-black border-3 sm:border-4 border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/30 transition-all group-hover:scale-105 duration-300", children: profile.avatar ? /* @__PURE__ */ jsx21(
        "img",
        {
          src: profile.avatar,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ jsx21("div", { className: "w-full h-full flex items-center justify-center bg-zinc-800 text-xl sm:text-2xl font-bold text-zinc-500 uppercase", children: profile.name[0] }) }) }),
      /* @__PURE__ */ jsxs20("div", { className: "flex justify-end pt-3 sm:pt-4 mb-3 sm:mb-4 gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsxs20("button", { className: "h-8 sm:h-9 px-3 sm:px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-[0.625rem] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-colors touch-manipulation", children: [
          /* @__PURE__ */ jsx21(MessageCircle, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
          /* @__PURE__ */ jsx21("span", { className: "hidden sm:inline", children: "Message" })
        ] }),
        /* @__PURE__ */ jsxs20(
          "button",
          {
            className: cn(
              "h-8 sm:h-9 px-3 sm:px-4 rounded-lg font-bold text-[0.625rem] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all shadow-lg touch-manipulation",
              profile.isFollowing ? "bg-transparent border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 shadow-emerald-500/10" : "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-white/10"
            ),
            children: [
              profile.isFollowing ? /* @__PURE__ */ jsx21(Check3, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", strokeWidth: 3 }) : /* @__PURE__ */ jsx21(UserPlus, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", strokeWidth: 3 }),
              profile.isFollowing ? "Following" : "Follow"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "mt-1.5 sm:mt-2", children: [
        /* @__PURE__ */ jsxs20("h2", { className: "text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-0.5 sm:mb-1 flex items-center gap-1.5 sm:gap-2", children: [
          profile.name,
          profile.isFollowing && /* @__PURE__ */ jsx21("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgb(16,185,129)]" })
        ] }),
        /* @__PURE__ */ jsxs20("div", { className: "text-xs sm:text-sm text-zinc-500 font-mono mb-3 sm:mb-4", children: [
          "@",
          profile.handle
        ] }),
        profile.bio && /* @__PURE__ */ jsx21("p", { className: "text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 sm:mb-6 max-w-md border-l-2 border-white/10 pl-2 sm:pl-3 italic", children: profile.bio }),
        /* @__PURE__ */ jsxs20("div", { className: "flex flex-wrap gap-3 sm:gap-4 text-[0.625rem] sm:text-xs text-zinc-500 mb-4 sm:mb-6 font-medium", children: [
          profile.location && /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ jsx21(MapPin6, { className: "w-3 h-3 text-zinc-600" }),
            profile.location
          ] }),
          profile.website && /* @__PURE__ */ jsxs20(
            "a",
            {
              href: profile.website,
              target: "_blank",
              className: "flex items-center gap-1 sm:gap-1.5 text-sky-500/80 hover:text-sky-400 hover:underline transition-colors decoration-sky-500/30",
              children: [
                /* @__PURE__ */ jsx21(LinkIcon, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsx21("span", { className: "truncate max-w-[8rem] sm:max-w-none", children: profile.website.replace(/^https?:\/\//, "") })
              ]
            }
          ),
          profile.joinedDate && /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ jsx21(Calendar5, { className: "w-3 h-3 text-zinc-600" }),
            "Joined ",
            profile.joinedDate
          ] })
        ] }),
        /* @__PURE__ */ jsx21("div", { className: "flex items-center gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-dashed border-white/10", children: profile.stats && Object.entries(profile.stats).map(([key, value]) => /* @__PURE__ */ jsxs20(
          "div",
          {
            className: "flex flex-col gap-0.5 hover:opacity-80 transition-opacity cursor-pointer",
            children: [
              /* @__PURE__ */ jsx21("span", { className: "text-base sm:text-lg font-black text-white leading-none", children: value }),
              /* @__PURE__ */ jsx21("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-600 uppercase tracking-wider", children: key })
            ]
          },
          key
        )) })
      ] })
    ] }),
    children
  ] });
});

// src/domain/feed/activity-feed.tsx
import { memo as memo20 } from "react";
import {
  MessageSquare,
  Heart,
  Share2,
  MoreHorizontal,
  Activity as Activity3
} from "lucide-react";
import { jsx as jsx22, jsxs as jsxs21 } from "react/jsx-runtime";
var ActivityFeed = memo20(function ActivityFeed2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { items = [] } = element.props;
  if (!items || items.length === 0) {
    return /* @__PURE__ */ jsx22(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx22(Activity3, { className: "w-10 h-10" }),
        message: "No activity"
      }
    );
  }
  return /* @__PURE__ */ jsxs21("div", { className: "flex flex-col gap-3 sm:gap-4 max-w-xl mx-auto", children: [
    items.map((item, index) => /* @__PURE__ */ jsxs21(
      "div",
      {
        className: "group relative pl-6 sm:pl-8 pb-6 sm:pb-8 last:pb-0",
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": item.id,
        children: [
          /* @__PURE__ */ jsx22("div", { className: "absolute left-[11px] sm:left-[15px] top-8 sm:top-10 bottom-0 w-px bg-white/10 group-last:hidden" }),
          /* @__PURE__ */ jsx22("div", { className: "absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-zinc-900 border border-white/10 overflow-hidden ring-2 sm:ring-4 ring-zinc-950 z-10 transition-transform group-hover:scale-110", children: item.user.avatar ? /* @__PURE__ */ jsx22(
            "img",
            {
              src: item.user.avatar,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsx22("div", { className: "w-full h-full flex items-center justify-center bg-zinc-800 text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase", children: item.user.name[0] }) }),
          /* @__PURE__ */ jsxs21("div", { className: "bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-zinc-900/80 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1", children: [
            /* @__PURE__ */ jsx22("div", { className: "absolute top-0 right-0 p-1.5 sm:p-2 opacity-50", children: /* @__PURE__ */ jsx22("div", { className: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-white/20" }) }),
            /* @__PURE__ */ jsxs21("div", { className: "flex justify-between items-start mb-2 sm:mb-3 gap-2", children: [
              /* @__PURE__ */ jsxs21("div", { children: [
                /* @__PURE__ */ jsxs21("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2", children: [
                  /* @__PURE__ */ jsx22("span", { className: "text-xs sm:text-sm font-bold text-white tracking-tight", children: item.user.name }),
                  /* @__PURE__ */ jsxs21("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-mono", children: [
                    "@",
                    item.user.handle || item.user.name.toLowerCase().replace(" ", "")
                  ] })
                ] }),
                /* @__PURE__ */ jsxs21("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-mono text-zinc-600 mt-0.5 sm:mt-1 uppercase tracking-wide flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ jsx22("span", { children: "Logged" }),
                  /* @__PURE__ */ jsx22("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }),
                  item.timestamp
                ] })
              ] }),
              /* @__PURE__ */ jsx22("button", { className: "text-zinc-600 hover:text-white transition-colors p-0.5 sm:p-1 rounded hover:bg-white/5 touch-manipulation", children: /* @__PURE__ */ jsx22(MoreHorizontal, { className: "w-3.5 h-3.5" }) })
            ] }),
            /* @__PURE__ */ jsx22("div", { className: "text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3 sm:mb-4", children: render(item.content, { inline: true }) }),
            item.image && /* @__PURE__ */ jsxs21("div", { className: "rounded-lg sm:rounded-xl overflow-hidden border border-white/10 mb-3 sm:mb-4 bg-zinc-950 min-h-[100px] sm:min-h-[150px] relative group/image", children: [
              /* @__PURE__ */ jsx22(
                "img",
                {
                  src: item.image,
                  className: "w-full h-auto object-cover max-h-[200px] sm:max-h-[300px] transition-transform duration-700 group-hover/image:scale-105"
                }
              ),
              /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg sm:rounded-xl pointer-events-none" })
            ] }),
            /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-4 sm:gap-6 border-t border-dashed border-white/10 pt-2 sm:pt-3 mt-1.5 sm:mt-2", children: [
              /* @__PURE__ */ jsxs21("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-rose-400 transition-colors group/action py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 -ml-1.5 sm:-ml-2 touch-manipulation", children: [
                /* @__PURE__ */ jsx22(
                  Heart,
                  {
                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/action:scale-110 transition-transform"
                  }
                ),
                item.likes || 0
              ] }),
              /* @__PURE__ */ jsxs21("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-sky-400 transition-colors group/action py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 touch-manipulation", children: [
                /* @__PURE__ */ jsx22(
                  MessageSquare,
                  {
                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/action:scale-110 transition-transform"
                  }
                ),
                item.comments || 0
              ] }),
              /* @__PURE__ */ jsxs21("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-emerald-400 transition-colors ml-auto py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 -mr-1.5 sm:-mr-2 touch-manipulation", children: [
                /* @__PURE__ */ jsx22(Share2, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                /* @__PURE__ */ jsx22("span", { className: "hidden sm:inline", children: "Share" })
              ] })
            ] })
          ] })
        ]
      },
      item.id
    )),
    children
  ] });
});

// src/domain/commerce/pricing.tsx
import { memo as memo21 } from "react";
import { Check as Check4, Star as Star2 } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs22 } from "react/jsx-runtime";
var Pricing = memo21(function Pricing2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { title, plans = [] } = element.props;
  if (!plans || plans.length === 0) {
    return /* @__PURE__ */ jsx23(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx23(Star2, { className: "w-10 h-10" }),
        message: "No pricing plans"
      }
    );
  }
  return /* @__PURE__ */ jsxs22("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6", children: [
    title && /* @__PURE__ */ jsx23("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white", children: title }),
    /* @__PURE__ */ jsx23("div", { className: "grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 sm:gap-5 lg:gap-6", children: plans.map((plan, index) => {
      const isHighlight = plan.highlight;
      return /* @__PURE__ */ jsxs22(
        "div",
        {
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": plan.id ?? `${index}`,
          className: cn(
            "group relative bg-zinc-900 border transition-all duration-300 flex flex-col isolate overflow-hidden",
            // Flight/Invoice Style:
            "rounded-xl sm:rounded-2xl border-white/10",
            isHighlight ? "shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/50 bg-zinc-900/80" : "hover:border-white/20 hover:shadow-xl hover:-translate-y-1"
          ),
          children: [
            isHighlight && /* @__PURE__ */ jsx23("div", { className: "absolute top-0 inset-x-0 h-1 bg-indigo-500 z-10" }),
            /* @__PURE__ */ jsxs22("div", { className: "p-4 sm:p-5 lg:p-6 pb-6 sm:pb-8 border-b border-dashed border-white/10", children: [
              /* @__PURE__ */ jsxs22("div", { className: "flex justify-between items-start mb-3 sm:mb-4 gap-2", children: [
                /* @__PURE__ */ jsxs22("div", { children: [
                  /* @__PURE__ */ jsx23("h4", { className: "font-bold text-base sm:text-lg text-white mb-1", children: plan.name }),
                  plan.badge && /* @__PURE__ */ jsx23("span", { className: "inline-block px-1.5 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10", children: plan.badge })
                ] }),
                isHighlight && /* @__PURE__ */ jsx23("div", { className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 shrink-0", children: /* @__PURE__ */ jsx23(Star2, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ jsxs22("div", { className: "flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsx23("span", { className: "text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none", children: plan.price }),
                plan.cadence && /* @__PURE__ */ jsxs22("span", { className: "text-[0.625rem] sm:text-xs font-mono text-zinc-500 uppercase", children: [
                  "/",
                  plan.cadence
                ] })
              ] }),
              plan.description && /* @__PURE__ */ jsx23("p", { className: "mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-snug", children: render(plan.description, { inline: true }) })
            ] }),
            /* @__PURE__ */ jsxs22("div", { className: "relative h-px w-full my-0 -mt-px z-10", children: [
              /* @__PURE__ */ jsx23("div", { className: "absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-r border-white/10" }),
              /* @__PURE__ */ jsx23("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-l border-white/10" })
            ] }),
            /* @__PURE__ */ jsxs22("div", { className: "p-4 sm:p-5 lg:p-6 flex-1 bg-black/20", children: [
              plan.features && plan.features.length > 0 && /* @__PURE__ */ jsx23("ul", { className: "space-y-2 sm:space-y-3 mb-6 sm:mb-8", children: plan.features.map((feature) => /* @__PURE__ */ jsxs22(
                "li",
                {
                  className: "flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300",
                  children: [
                    /* @__PURE__ */ jsx23(
                      "div",
                      {
                        className: cn(
                          "w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          isHighlight ? "bg-indigo-500/20 text-indigo-400" : "bg-white/10 text-zinc-400"
                        ),
                        children: /* @__PURE__ */ jsx23(Check4, { className: "w-2 h-2 sm:w-2.5 sm:h-2.5", strokeWidth: 4 })
                      }
                    ),
                    /* @__PURE__ */ jsx23("span", { className: "leading-tight", children: render(feature, { inline: true }) })
                  ]
                },
                feature
              )) }),
              /* @__PURE__ */ jsx23(
                "button",
                {
                  className: cn(
                    "w-full py-2 sm:py-3 rounded-lg text-[0.625rem] sm:text-xs font-bold uppercase tracking-widest transition-all touch-manipulation min-h-[2.75rem]",
                    isHighlight ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25" : "bg-zinc-800 hover:bg-zinc-700 text-white border border-white/5"
                  ),
                  children: "Get Started"
                }
              )
            ] })
          ]
        },
        plan.id ?? `${index}`
      );
    }) }),
    children
  ] });
});

// src/domain/content/article-card.tsx
import { memo as memo22 } from "react";
import { ArrowUpRight, Clock as Clock5, Calendar as Calendar6, FileText } from "lucide-react";
import { Fragment as Fragment4, jsx as jsx24, jsxs as jsxs23 } from "react/jsx-runtime";
var ArticleCard = memo22(function ArticleCard2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { article } = element.props;
  if (!article) {
    return /* @__PURE__ */ jsx24(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx24(FileText, { className: "w-10 h-10" }),
        message: "No article"
      }
    );
  }
  return /* @__PURE__ */ jsxs23("div", { className: "group relative rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1", children: [
    /* @__PURE__ */ jsx24("div", { className: "absolute top-0 left-0 right-0 h-1 bg-white/5 group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500 z-10" }),
    /* @__PURE__ */ jsxs23("div", { className: "flex flex-col sm:flex-row h-full", children: [
      /* @__PURE__ */ jsxs23("div", { className: "sm:w-1/3 min-h-[10rem] sm:min-h-[12.5rem] relative overflow-hidden bg-zinc-800", children: [
        article.coverImage ? /* @__PURE__ */ jsx24("div", { className: "absolute inset-0 transition-transform duration-700 group-hover:scale-105", children: /* @__PURE__ */ jsx24(
          "img",
          {
            src: article.coverImage,
            className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          }
        ) }) : /* @__PURE__ */ jsx24("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center", children: /* @__PURE__ */ jsx24("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-mono text-zinc-500 uppercase tracking-widest", children: "No Cover" }) }),
        article.category && /* @__PURE__ */ jsx24("div", { className: "absolute top-3 sm:top-4 left-3 sm:left-4 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/60 backdrop-blur-md rounded text-[0.5rem] sm:text-[0.625rem] font-bold text-white uppercase tracking-wider border border-white/10", children: article.category })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: "flex-1 p-4 sm:p-5 lg:p-6 flex flex-col", children: [
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2 sm:gap-3 text-[0.625rem] sm:text-xs text-zinc-500 font-mono mb-2 sm:mb-3", children: [
          article.date && /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ jsx24(Calendar6, { className: "w-3 h-3" }),
            new Date(article.date).toLocaleDateString()
          ] }),
          article.readTime && /* @__PURE__ */ jsxs23(Fragment4, { children: [
            /* @__PURE__ */ jsx24("span", { children: "\u2022" }),
            /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
              /* @__PURE__ */ jsx24(Clock5, { className: "w-3 h-3" }),
              article.readTime
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx24("h3", { className: "text-base sm:text-lg lg:text-xl font-bold text-white leading-tight mb-2 sm:mb-3 group-hover:text-sky-300 transition-colors", children: article.title }),
        article.excerpt && /* @__PURE__ */ jsx24("p", { className: "text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4 sm:mb-6 flex-1", children: render(article.excerpt, { inline: true }) }),
        /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between pt-3 sm:pt-4 border-t border-dashed border-white/10 mt-auto", children: [
          article.author && /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsx24("div", { className: "w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden", children: article.author.avatar && /* @__PURE__ */ jsx24("img", { src: article.author.avatar }) }),
            /* @__PURE__ */ jsx24("span", { className: "text-[0.625rem] sm:text-xs font-bold text-zinc-300 uppercase tracking-wide", children: article.author.name })
          ] }),
          /* @__PURE__ */ jsx24("div", { className: "relative overflow-hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors", children: /* @__PURE__ */ jsx24(ArrowUpRight, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }),
    children
  ] });
});

// src/domain/Kanban/component.tsx
import { memo as memo25, useMemo as useMemo13 } from "react";
import { useDomainAutoSave as useDomainAutoSave6 } from "@onegenui/react";
import { Plus as Plus2, Layout } from "lucide-react";
import { AnimatePresence as AnimatePresence7, motion as motion17 } from "framer-motion";

// src/domain/Kanban/components/types.ts
var PRIORITY_TO_VARIANT = {
  high: "error",
  medium: "warning",
  low: "success"
};

// src/domain/Kanban/components/sub-items-list.tsx
import { memo as memo23 } from "react";
import { Check as Check5 } from "lucide-react";
import { motion as motion15 } from "framer-motion";
import { jsx as jsx25, jsxs as jsxs24 } from "react/jsx-runtime";
var SubItemsList = memo23(function SubItemsList2({
  item,
  lock,
  isSubItemCompleted,
  toggleSubItem
}) {
  if (!item.subItems || item.subItems.length === 0) return null;
  return /* @__PURE__ */ jsx25("div", { className: "mt-3 flex flex-col gap-2 p-2 rounded-lg bg-black/20 border border-white/5", children: item.subItems.map((subItem) => {
    const completed = isSubItemCompleted(item.id, subItem.id);
    return /* @__PURE__ */ jsxs24(
      "div",
      {
        className: cn(
          "flex items-center gap-2.5 text-xs transition-all",
          completed ? "text-muted-foreground line-through opacity-60" : "text-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx25(
            "div",
            {
              onClick: (e) => {
                e.stopPropagation();
                toggleSubItem(item.id, subItem.id);
              },
              "data-interactive": true,
              className: cn(
                "w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center cursor-pointer transition-colors shrink-0",
                completed ? "bg-emerald-500 border-emerald-500 text-black" : "border-muted-foreground/40 hover:border-primary/60 bg-transparent",
                lock && "pointer-events-none opacity-50"
              ),
              children: completed && /* @__PURE__ */ jsx25(motion15.div, { initial: { scale: 0 }, animate: { scale: 1 }, children: /* @__PURE__ */ jsx25(Check5, { size: 8, strokeWidth: 4 }) })
            }
          ),
          /* @__PURE__ */ jsx25("span", { className: "truncate", children: subItem.title })
        ]
      },
      subItem.id
    );
  }) });
});

// src/domain/Kanban/components/kanban-card.tsx
import { memo as memo24 } from "react";
import { GripVertical } from "lucide-react";
import { motion as motion16 } from "framer-motion";
import { jsx as jsx26, jsxs as jsxs25 } from "react/jsx-runtime";
var KanbanCard = memo24(function KanbanCard2({
  item,
  elementKey,
  colId,
  lock,
  isDragging,
  onDragStart,
  onDragEnd,
  isSubItemCompleted,
  toggleSubItem
}) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      draggable: !lock,
      onDragStart: (e) => onDragStart(e, item, colId),
      onDragEnd,
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": item.id,
      children: /* @__PURE__ */ jsxs25(
        motion16.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 },
          transition: { duration: 0.2 },
          className: cn(
            "group relative bg-card/40 hover:bg-card/60 p-3.5 rounded-xl border border-white/5 transition-all shadow-sm hover:shadow-lg hover:border-white/10",
            !lock && "cursor-grab active:cursor-grabbing hover:-translate-y-0.5",
            isDragging && "opacity-50"
          ),
          children: [
            !lock && /* @__PURE__ */ jsx26(
              "div",
              {
                "data-interactive": true,
                className: "absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing",
                children: /* @__PURE__ */ jsx26(GripVertical, { size: 14 })
              }
            ),
            /* @__PURE__ */ jsx26(
              "div",
              {
                className: cn(
                  "text-sm font-medium text-foreground leading-snug",
                  !lock && "pl-5 group-hover:pl-5"
                ),
                children: item.title
              }
            ),
            item.description && /* @__PURE__ */ jsx26(
              "div",
              {
                className: cn(
                  "text-xs text-muted-foreground mt-1 line-clamp-2",
                  !lock && "pl-5 group-hover:pl-5"
                ),
                children: item.description
              }
            ),
            /* @__PURE__ */ jsx26(
              SubItemsList,
              {
                item,
                lock,
                isSubItemCompleted,
                toggleSubItem
              }
            ),
            /* @__PURE__ */ jsxs25("div", { className: "flex justify-between items-center pt-3 mt-2 border-t border-white/5", children: [
              /* @__PURE__ */ jsxs25("div", { className: "flex flex-wrap gap-1.5 items-center", children: [
                item.priority && /* @__PURE__ */ jsx26(
                  StatusBadge,
                  {
                    label: item.priority,
                    variant: PRIORITY_TO_VARIANT[item.priority] || "neutral"
                  }
                ),
                (item.tags || []).map((tag) => /* @__PURE__ */ jsx26(
                  "span",
                  {
                    className: "text-[10px] bg-white/5 text-muted-foreground px-2 py-0.5 rounded border border-white/5 font-semibold",
                    children: tag
                  },
                  tag
                ))
              ] }),
              item.assignee && /* @__PURE__ */ jsx26(
                "div",
                {
                  title: item.assignee,
                  className: "w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md border border-white/10",
                  children: item.assignee.charAt(0).toUpperCase()
                }
              )
            ] })
          ]
        }
      )
    }
  );
});

// src/domain/Kanban/adapters/kanban.adapter.ts
function createKanbanAdapter() {
  return {
    buildDisplayColumns(columns, itemMoves) {
      const colMap = /* @__PURE__ */ new Map();
      columns.forEach((col) => {
        colMap.set(col.id, {
          id: col.id,
          title: col.title,
          color: col.color,
          items: []
        });
      });
      columns.forEach((col) => {
        (col.items || []).forEach((item) => {
          const targetColId = itemMoves[item.id] || col.id;
          const targetCol = colMap.get(targetColId);
          if (targetCol) {
            targetCol.items.push(item);
          }
        });
      });
      return Array.from(colMap.values());
    },
    getTotalItemCount(columns) {
      return columns.reduce((sum, col) => sum + col.items.length, 0);
    }
  };
}
function createKanbanDragAdapter() {
  return {
    isValidDrop(fromColId, targetColId) {
      return fromColId !== targetColId;
    }
  };
}
var kanbanAdapter = null;
var kanbanDragAdapter = null;
function getKanbanAdapter() {
  if (!kanbanAdapter) {
    kanbanAdapter = createKanbanAdapter();
  }
  return kanbanAdapter;
}
function getKanbanDragAdapter() {
  if (!kanbanDragAdapter) {
    kanbanDragAdapter = createKanbanDragAdapter();
  }
  return kanbanDragAdapter;
}

// src/domain/Kanban/hooks/useKanbanDrag.ts
import { useState as useState8, useCallback as useCallback6, useRef } from "react";
function useKanbanDrag(adapter, options) {
  const { lock, onMoveItem } = options;
  const [draggedItem, setDraggedItem] = useState8(null);
  const [dropTarget, setDropTarget] = useState8(null);
  const dragCounter = useRef({});
  const handleDragStart = useCallback6(
    (e, item, fromColId) => {
      if (lock) {
        e.preventDefault();
        return;
      }
      e.stopPropagation();
      setDraggedItem({ item, fromColId });
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("application/x-kanban-item", item.id);
      e.dataTransfer.setData("text/plain", item.id);
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.opacity = "0.5";
      }
    },
    [lock]
  );
  const handleDragEnd = useCallback6((e) => {
    e.stopPropagation();
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "1";
    }
    setDraggedItem(null);
    setDropTarget(null);
    dragCounter.current = {};
  }, []);
  const handleDragEnter = useCallback6(
    (e, colId) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current[colId] = (dragCounter.current[colId] || 0) + 1;
      if (draggedItem && adapter.isValidDrop(draggedItem.fromColId, colId)) {
        setDropTarget(colId);
      }
    },
    [adapter, draggedItem]
  );
  const handleDragLeave = useCallback6(
    (e, colId) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current[colId] = (dragCounter.current[colId] || 1) - 1;
      if (dragCounter.current[colId] <= 0) {
        dragCounter.current[colId] = 0;
        if (dropTarget === colId) {
          setDropTarget(null);
        }
      }
    },
    [dropTarget]
  );
  const handleDragOver = useCallback6((e) => {
    if (e.dataTransfer.types.includes("application/x-kanban-item")) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
    }
  }, []);
  const handleDrop = useCallback6(
    (e, targetColId) => {
      if (!e.dataTransfer.types.includes("application/x-kanban-item")) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (draggedItem && adapter.isValidDrop(draggedItem.fromColId, targetColId)) {
        onMoveItem(draggedItem.item.id, targetColId);
      }
      setDraggedItem(null);
      setDropTarget(null);
      dragCounter.current = {};
    },
    [adapter, draggedItem, onMoveItem]
  );
  return {
    draggedItem,
    dropTarget,
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop
  };
}

// src/domain/Kanban/hooks/useKanbanState.ts
import { useMemo as useMemo12, useCallback as useCallback7 } from "react";
import { useElementState as useElementState5 } from "@onegenui/react";
function useKanbanState(elementKey, adapter, options) {
  const { initialColumns, lock } = options;
  const [state, updateState] = useElementState5(elementKey, {
    itemMoves: {},
    subItemCompletions: {}
  });
  const { itemMoves, subItemCompletions } = state;
  const displayColumns = useMemo12(
    () => adapter.buildDisplayColumns(initialColumns, itemMoves),
    [adapter, initialColumns, itemMoves]
  );
  const moveItem = useCallback7(
    (itemId, targetColId) => {
      if (lock) return;
      updateState({ itemMoves: { ...itemMoves, [itemId]: targetColId } });
    },
    [lock, itemMoves, updateState]
  );
  const toggleSubItem = useCallback7(
    (itemId, subItemId) => {
      if (lock) return;
      const itemCompletions = subItemCompletions[itemId] || {};
      const current = itemCompletions[subItemId] ?? false;
      updateState({
        subItemCompletions: {
          ...subItemCompletions,
          [itemId]: { ...itemCompletions, [subItemId]: !current }
        }
      });
    },
    [lock, subItemCompletions, updateState]
  );
  const isSubItemCompleted = useCallback7(
    (itemId, subItemId) => {
      return subItemCompletions[itemId]?.[subItemId] ?? false;
    },
    [subItemCompletions]
  );
  return {
    displayColumns,
    itemMoves,
    subItemCompletions,
    moveItem,
    toggleSubItem,
    isSubItemCompleted
  };
}

// src/domain/Kanban/component.tsx
import { jsx as jsx27, jsxs as jsxs26 } from "react/jsx-runtime";
var containerVariants3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
var columnVariants = {
  hidden: { opacity: 0, x: "1rem" },
  visible: { opacity: 1, x: 0 }
};
var Kanban = memo25(function Kanban2({
  element,
  children
}) {
  const {
    title,
    columns: initialColumns,
    lock = false
  } = element.props;
  const adapter = useMemo13(() => getKanbanAdapter(), []);
  const dragAdapter = useMemo13(() => getKanbanDragAdapter(), []);
  const { displayColumns, moveItem, toggleSubItem, isSubItemCompleted } = useKanbanState(element.key, adapter, {
    initialColumns: initialColumns || [],
    lock
  });
  const {
    draggedItem,
    dropTarget,
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop
  } = useKanbanDrag(dragAdapter, { lock, onMoveItem: moveItem });
  useDomainAutoSave6("project", element.key, {
    title: title || "Kanban Board",
    viewType: "kanban",
    status: "active",
    columns: displayColumns.map((col) => ({
      id: col.id,
      title: col.title,
      color: col.color,
      itemIds: col.items.map((item) => item.id)
    })),
    items: displayColumns.flatMap(
      (col) => col.items.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        columnId: col.id,
        tags: item.tags,
        assignee: item.assignee,
        priority: item.priority,
        dueDate: item.dueDate
      }))
    )
  });
  if (!displayColumns.length) {
    return /* @__PURE__ */ jsxs26("div", { className: "flex flex-col w-full min-h-[12.5rem]", children: [
      title && /* @__PURE__ */ jsx27("h3", { className: "text-xl sm:text-2xl font-black tracking-tight text-foreground mb-4 sm:mb-6", children: title }),
      /* @__PURE__ */ jsx27(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsx27(Layout, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No columns"
        }
      ),
      children
    ] });
  }
  return /* @__PURE__ */ jsxs26("div", { className: "flex flex-col w-full", children: [
    title && /* @__PURE__ */ jsxs26("div", { className: "mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsx27("h3", { className: "text-xl sm:text-2xl font-black tracking-tight text-foreground", children: title }),
      !lock && /* @__PURE__ */ jsxs26("button", { className: "flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:py-1.5 rounded-full bg-primary text-primary-foreground text-[0.625rem] sm:text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform min-h-[2.75rem] sm:min-h-0 touch-manipulation", children: [
        /* @__PURE__ */ jsx27(Plus2, { className: "w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" }),
        /* @__PURE__ */ jsx27("span", { className: "hidden sm:inline", children: "NEW TASK" }),
        /* @__PURE__ */ jsx27("span", { className: "sm:hidden", children: "ADD" })
      ] })
    ] }),
    /* @__PURE__ */ jsx27(
      motion17.div,
      {
        variants: containerVariants3,
        initial: "hidden",
        animate: "visible",
        className: cn(
          "flex flex-col gap-3 sm:gap-4",
          "sm:flex-row sm:overflow-x-auto sm:pb-4",
          "sm:snap-x sm:snap-mandatory",
          "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        ),
        children: displayColumns.map((col) => /* @__PURE__ */ jsxs26(
          motion17.div,
          {
            variants: columnVariants,
            onDragEnter: (e) => handleDragEnter(e, col.id),
            onDragLeave: (e) => handleDragLeave(e, col.id),
            onDragOver: handleDragOver,
            onDrop: (e) => handleDrop(e, col.id),
            className: cn(
              // Mobile: full width, stacked
              "w-full",
              // Desktop: fixed width, side-by-side
              "sm:min-w-[17rem] sm:max-w-[20rem] sm:flex-shrink-0 sm:snap-start",
              // Common styles
              "flex flex-col min-h-[10rem] sm:min-h-[12.5rem]",
              "rounded-xl sm:rounded-2xl bg-zinc-900/40 backdrop-blur-md",
              "border border-white/5 relative overflow-hidden transition-all duration-200",
              dropTarget === col.id && "border-primary/50 bg-primary/5 ring-2 ring-primary/30"
            ),
            children: [
              /* @__PURE__ */ jsx27(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-1",
                  style: { backgroundColor: col.color || "var(--border)" }
                }
              ),
              /* @__PURE__ */ jsxs26("div", { className: "flex justify-between items-center p-3 sm:p-4 border-b border-white/5 bg-white/[0.02]", children: [
                /* @__PURE__ */ jsx27("span", { className: "font-bold text-xs sm:text-sm tracking-wide text-foreground", children: col.title }),
                /* @__PURE__ */ jsx27("span", { className: "text-[0.5625rem] sm:text-[0.625rem] font-bold text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10", children: col.items.length })
              ] }),
              /* @__PURE__ */ jsxs26("div", { className: "flex flex-col gap-2 sm:gap-3 overflow-y-auto p-2 sm:p-3 flex-1 min-h-[5rem] sm:min-h-[6.25rem]", children: [
                /* @__PURE__ */ jsx27(AnimatePresence7, { mode: "popLayout", children: col.items.map((item) => /* @__PURE__ */ jsx27(
                  KanbanCard,
                  {
                    item,
                    elementKey: element.key,
                    colId: col.id,
                    lock,
                    isDragging: draggedItem?.item.id === item.id,
                    onDragStart: handleDragStart,
                    onDragEnd: handleDragEnd,
                    isSubItemCompleted,
                    toggleSubItem
                  },
                  item.id
                )) }),
                col.items.length === 0 && /* @__PURE__ */ jsx27(
                  "div",
                  {
                    className: cn(
                      "flex-1 min-h-[4rem] sm:min-h-[5rem] rounded-lg border-2 border-dashed border-white/10",
                      "flex items-center justify-center text-[0.625rem] sm:text-xs text-muted-foreground",
                      dropTarget === col.id && "border-primary/50 bg-primary/5"
                    ),
                    children: dropTarget === col.id ? "Drop here" : "No items"
                  }
                )
              ] })
            ]
          },
          col.id
        ))
      }
    ),
    children
  ] });
});

// src/domain/TodoList/component.tsx
import { memo as memo26, useMemo as useMemo15 } from "react";
import { useDomainAutoSave as useDomainAutoSave7 } from "@onegenui/react";
import { Check as Check6, Clock as Clock6, Plus as Plus3, Sparkles } from "lucide-react";
import { motion as motion18, AnimatePresence as AnimatePresence8 } from "framer-motion";

// src/domain/TodoList/adapters/todolist.adapter.ts
function createTodoListAdapter() {
  return {
    toggleItemStatus(items, id) {
      return items.map((item) => {
        if (item.id === id) {
          const nextStatus = item.status === "done" ? "pending" : "done";
          return { ...item, status: nextStatus };
        }
        if (item.subItems && item.subItems.length > 0) {
          return {
            ...item,
            subItems: this.toggleItemStatus(item.subItems, id)
          };
        }
        return item;
      });
    },
    countCompleted(items) {
      let count = 0;
      for (const item of items) {
        if (item.status === "done") count++;
        if (item.subItems) {
          count += this.countCompleted(item.subItems);
        }
      }
      return count;
    },
    countTotal(items) {
      let count = items.length;
      for (const item of items) {
        if (item.subItems) {
          count += this.countTotal(item.subItems);
        }
      }
      return count;
    },
    flattenItems(items) {
      const result = [];
      for (const item of items) {
        result.push(item);
        if (item.subItems) {
          result.push(...this.flattenItems(item.subItems));
        }
      }
      return result;
    }
  };
}
var todoListAdapter = null;
function getTodoListAdapter() {
  if (!todoListAdapter) {
    todoListAdapter = createTodoListAdapter();
  }
  return todoListAdapter;
}

// src/domain/TodoList/hooks/useTodoListLogic.ts
import { useCallback as useCallback8, useMemo as useMemo14 } from "react";
import { useElementState as useElementState6 } from "@onegenui/react";
function useTodoListLogic(elementKey, adapter, options) {
  const { initialItems } = options;
  const [state, updateState] = useElementState6(elementKey, { items: initialItems });
  const items = state.items;
  const toggleItem = useCallback8(
    (id) => {
      updateState({ items: adapter.toggleItemStatus(items, id) });
    },
    [adapter, items, updateState]
  );
  const completedCount = useMemo14(
    () => adapter.countCompleted(items),
    [adapter, items]
  );
  const totalCount = useMemo14(() => adapter.countTotal(items), [adapter, items]);
  return {
    items,
    completedCount,
    totalCount,
    toggleItem
  };
}

// src/domain/TodoList/component.tsx
import { jsx as jsx28, jsxs as jsxs27 } from "react/jsx-runtime";
var PRIORITY_TO_VARIANT2 = {
  high: "error",
  medium: "warning",
  low: "success"
};
var itemVariants = {
  hidden: { opacity: 0, y: "0.625rem", scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};
var checkVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: { scale: 1, rotate: 0 },
  exit: { scale: 0, rotate: 45 }
};
var TodoList = memo26(function TodoList2({
  element,
  children
}) {
  const { title, items: initialItems } = element.props;
  const adapter = useMemo15(() => getTodoListAdapter(), []);
  const { items, completedCount, totalCount, toggleItem } = useTodoListLogic(
    element.key,
    adapter,
    { initialItems: initialItems || [] }
  );
  useDomainAutoSave7("task", element.key, {
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
        priority: sub.priority
      }))
    }))
  });
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ jsx28("div", { className: "flex flex-col gap-2 sm:gap-3", children: /* @__PURE__ */ jsx28(AnimatePresence8, { mode: "popLayout", initial: false, children: itemsToRender.map((item, i) => {
    return /* @__PURE__ */ jsxs27(
      motion18.div,
      {
        layout: true,
        variants: itemVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.2, delay: i * 0.05 },
        className: "flex flex-col gap-1.5 sm:gap-2",
        children: [
          /* @__PURE__ */ jsxs27(
            "div",
            {
              "data-selectable-item": true,
              "data-element-key": element.key,
              "data-item-id": item.id,
              onClick: () => toggleItem(item.id),
              className: cn(
                "group relative flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden isolate touch-manipulation",
                item.status === "done" ? "bg-white/[0.02] border-white/5 opacity-60" : "glass-panel bg-card/60 hover:bg-card/80 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 active:scale-[0.98]",
                depth > 0 && "ml-4 sm:ml-6 border-l-2 border-l-white/10"
              ),
              children: [
                depth === 0 && /* @__PURE__ */ jsx28("div", { className: "absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" }),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    "data-checkbox": true,
                    "data-interactive": true,
                    className: cn(
                      "w-6 h-6 sm:w-6 sm:h-6 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 shadow-sm relative overflow-hidden min-w-[1.5rem]",
                      item.status === "done" ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_0_0.75rem_rgba(99,102,241,0.4)]" : "border-white/20 bg-black/20 group-hover:border-indigo-400/50"
                    ),
                    onClick: (e) => {
                      e.stopPropagation();
                      toggleItem(item.id);
                    },
                    children: /* @__PURE__ */ jsx28(AnimatePresence8, { children: item.status === "done" && /* @__PURE__ */ jsx28(
                      motion18.div,
                      {
                        variants: checkVariants,
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20
                        },
                        children: /* @__PURE__ */ jsx28(
                          Check6,
                          {
                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-white drop-shadow-sm",
                            strokeWidth: 3.5
                          }
                        )
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ jsxs27("div", { className: "flex-1 min-w-0 flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ jsx28(
                    "span",
                    {
                      className: cn(
                        "text-sm sm:text-[0.9375rem] font-medium transition-all duration-300 truncate",
                        item.status === "done" ? "text-muted-foreground line-through decoration-white/20 decoration-2" : "text-foreground group-hover:text-white"
                      ),
                      children: item.text
                    }
                  ),
                  item.time && /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-muted-foreground/80", children: [
                    /* @__PURE__ */ jsx28(
                      Clock6,
                      {
                        className: cn(
                          "w-2.5 h-2.5 sm:w-3 sm:h-3",
                          item.status === "done" ? "opacity-50" : "text-indigo-400"
                        )
                      }
                    ),
                    item.time
                  ] })
                ] }),
                item.priority && /* @__PURE__ */ jsx28(
                  StatusBadge,
                  {
                    label: item.priority,
                    variant: PRIORITY_TO_VARIANT2[item.priority] || "neutral"
                  }
                )
              ]
            }
          ),
          item.subItems && item.subItems.length > 0 && renderItems(item.subItems, depth + 1)
        ]
      },
      item.id
    );
  }) }) });
  if (!items || items.length === 0) {
    return /* @__PURE__ */ jsxs27(
      motion18.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "relative overflow-hidden rounded-xl sm:rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 sm:p-10 flex flex-col items-center justify-center text-center group",
        children: [
          /* @__PURE__ */ jsx28("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-50" }),
          title && /* @__PURE__ */ jsx28("h3", { className: "relative z-10 m-0 mb-2 text-lg sm:text-xl font-bold text-foreground", children: title }),
          /* @__PURE__ */ jsxs27("div", { className: "relative z-10 flex flex-col items-center gap-2 sm:gap-3 text-muted-foreground mt-3 sm:mt-4", children: [
            /* @__PURE__ */ jsx28("div", { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500 shadow-xl", children: /* @__PURE__ */ jsx28(Sparkles, { className: "text-indigo-400 opacity-60 w-5 h-5 sm:w-6 sm:h-6" }) }),
            /* @__PURE__ */ jsx28("p", { className: "text-xs sm:text-sm font-medium", children: "No tasks yet" }),
            /* @__PURE__ */ jsxs27("button", { className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-[0.625rem] sm:text-xs font-bold text-foreground transition-all min-h-[2.5rem] touch-manipulation", children: [
              /* @__PURE__ */ jsx28(Plus3, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
              " Add First Task"
            ] })
          ] }),
          children
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs27("div", { className: "w-full max-w-2xl mx-auto flex flex-col gap-4 sm:gap-6", children: [
    title && /* @__PURE__ */ jsxs27("div", { className: "flex items-center justify-between gap-2 px-1 sm:px-2", children: [
      /* @__PURE__ */ jsx28("h3", { className: "text-xl sm:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 truncate", children: title }),
      /* @__PURE__ */ jsx28("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxs27("div", { className: "text-[0.625rem] sm:text-xs font-bold text-muted-foreground bg-white/5 px-2 sm:px-2.5 py-1 rounded-full border border-white/5", children: [
        completedCount,
        "/",
        totalCount,
        " Done"
      ] }) })
    ] }),
    renderItems(items),
    children
  ] });
});

// src/domain/RoutineScheduler/component.tsx
import { memo as memo29 } from "react";
import { Calendar as Calendar8, ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { AnimatePresence as AnimatePresence9 } from "framer-motion";

// src/domain/RoutineScheduler/components/time-block-card.tsx
import { memo as memo27 } from "react";
import { Check as Check7 } from "lucide-react";
import { motion as motion19 } from "framer-motion";

// src/domain/RoutineScheduler/components/utils.ts
import {
  Dumbbell as Dumbbell2,
  Utensils as Utensils2,
  Pill,
  Briefcase,
  Moon,
  Coffee,
  User as User3,
  MoreHorizontal as MoreHorizontal2
} from "lucide-react";
var DEFAULT_CATEGORY_CONFIG = {
  icon: MoreHorizontal2,
  color: "text-zinc-400",
  bg: "bg-zinc-500/10 border-zinc-500/20"
};
var CATEGORY_CONFIG = {
  workout: {
    icon: Dumbbell2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  meal: {
    icon: Utensils2,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20"
  },
  supplement: {
    icon: Pill,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20"
  },
  work: {
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  rest: {
    icon: Coffee,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  sleep: {
    icon: Moon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20"
  },
  personal: {
    icon: User3,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20"
  },
  other: {
    icon: MoreHorizontal2,
    color: "text-zinc-400",
    bg: "bg-zinc-500/10 border-zinc-500/20"
  }
};
var DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function getCategoryConfig(category) {
  return CATEGORY_CONFIG[category ?? "other"] ?? DEFAULT_CATEGORY_CONFIG;
}
function parseTime(time) {
  const parts = time.split(":").map(Number);
  const hours = parts[0] ?? 0;
  const minutes = parts[1] ?? 0;
  return hours * 60 + minutes;
}
function formatTimeRange(start, end) {
  return `${start} - ${end}`;
}
function getBlockHeight(startTime, endTime, granularity) {
  const duration = parseTime(endTime) - parseTime(startTime);
  const slotMinutes = granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
  return Math.max(1, Math.round(duration / slotMinutes));
}
function getBlockTop(startTime, dayStart, granularity) {
  const diff = parseTime(startTime) - parseTime(dayStart);
  const slotMinutes = granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
  return Math.max(0, Math.round(diff / slotMinutes));
}

// src/domain/RoutineScheduler/components/time-block-card.tsx
import { jsx as jsx29, jsxs as jsxs28 } from "react/jsx-runtime";
var TimeBlockCard = memo27(function TimeBlockCard2({
  block,
  onToggle,
  lock,
  elementKey,
  slotHeight,
  slots
}) {
  const config = getCategoryConfig(block.category);
  const Icon = config.icon;
  return /* @__PURE__ */ jsx29(
    motion19.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      style: { height: `${slots * slotHeight}px`, minHeight: "44px" },
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": block.id,
      className: cn(
        "absolute left-14 right-2 rounded-xl border p-2 overflow-hidden cursor-pointer transition-all group",
        config.bg,
        block.completed && "opacity-60"
      ),
      onClick: () => !lock && onToggle(block.id),
      children: /* @__PURE__ */ jsxs28("div", { className: "flex items-start gap-2 h-full", children: [
        /* @__PURE__ */ jsx29(
          "div",
          {
            className: cn(
              "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0",
              block.completed ? "bg-emerald-500" : "bg-white/10"
            ),
            children: block.completed ? /* @__PURE__ */ jsx29(Check7, { size: 12, className: "text-black" }) : /* @__PURE__ */ jsx29(Icon, { size: 12, className: config.color })
          }
        ),
        /* @__PURE__ */ jsxs28("div", { className: "flex-1 min-w-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx29(
            "div",
            {
              className: cn(
                "text-sm font-semibold text-white truncate",
                block.completed && "line-through opacity-70"
              ),
              children: block.title
            }
          ),
          /* @__PURE__ */ jsx29("div", { className: "text-[10px] text-white/50 font-mono mt-0.5", children: formatTimeRange(block.startTime, block.endTime) }),
          block.description && slots > 2 && /* @__PURE__ */ jsx29("div", { className: "text-xs text-white/40 mt-1 line-clamp-2", children: block.description })
        ] }),
        block.priority === "high" && /* @__PURE__ */ jsx29("div", { className: "w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" })
      ] })
    }
  );
});

// src/domain/RoutineScheduler/components/day-column.tsx
import { memo as memo28 } from "react";
import { jsx as jsx30, jsxs as jsxs29 } from "react/jsx-runtime";
var DayColumn = memo28(function DayColumn2({
  day,
  blocks,
  timeSlots,
  granularity,
  dayStart,
  slotHeight,
  onToggle,
  lock,
  elementKey,
  isToday,
  showHeader
}) {
  const date = new Date(day.date);
  const dayNum = date.getDate();
  const dayName = DAYS_SHORT[date.getDay()];
  return /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-[140px] relative", children: [
    showHeader && /* @__PURE__ */ jsxs29(
      "div",
      {
        className: cn(
          "sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-sm border-b border-white/5 p-2 text-center",
          isToday && "bg-indigo-500/10 border-indigo-500/20"
        ),
        children: [
          /* @__PURE__ */ jsx30("div", { className: "text-[10px] font-bold text-white/40 uppercase tracking-wider", children: dayName }),
          /* @__PURE__ */ jsx30(
            "div",
            {
              className: cn(
                "text-lg font-bold",
                isToday ? "text-indigo-400" : "text-white"
              ),
              children: dayNum
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs29(
      "div",
      {
        className: "relative",
        style: { height: `${timeSlots.length * slotHeight}px` },
        children: [
          timeSlots.map((slot, i) => /* @__PURE__ */ jsx30(
            "div",
            {
              className: "absolute left-0 right-0 border-b border-white/5",
              style: { top: `${i * slotHeight}px`, height: `${slotHeight}px` }
            },
            slot
          )),
          blocks.map((block) => {
            const topSlot = getBlockTop(block.startTime, dayStart, granularity);
            const heightSlots = getBlockHeight(
              block.startTime,
              block.endTime,
              granularity
            );
            return /* @__PURE__ */ jsx30(
              "div",
              {
                style: { top: `${topSlot * slotHeight}px` },
                className: "absolute left-0 right-0",
                children: /* @__PURE__ */ jsx30(
                  TimeBlockCard,
                  {
                    block,
                    onToggle,
                    lock,
                    elementKey,
                    slotHeight,
                    slots: heightSlots
                  }
                )
              },
              block.id
            );
          })
        ]
      }
    )
  ] });
});

// src/domain/RoutineScheduler/adapters/routine-scheduler.adapter.ts
function createRoutineSchedulerAdapter() {
  return {
    generateTimeSlots(start, end, granularity) {
      const slots = [];
      const slotMinutes = granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      let current = this.parseTime(start);
      const endMin = this.parseTime(end);
      while (current <= endMin) {
        const hours = Math.floor(current / 60);
        const mins = current % 60;
        slots.push(
          `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
        );
        current += slotMinutes;
      }
      return slots;
    },
    parseTime(time) {
      const parts = time.split(":").map(Number);
      const hours = parts[0] ?? 0;
      const minutes = parts[1] ?? 0;
      return hours * 60 + minutes;
    },
    getBlockTop(startTime, dayStart, granularity) {
      const diff = this.parseTime(startTime) - this.parseTime(dayStart);
      const slotMinutes = granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      return Math.max(0, Math.round(diff / slotMinutes));
    },
    getBlockHeight(startTime, endTime, granularity) {
      const duration = this.parseTime(endTime) - this.parseTime(startTime);
      const slotMinutes = granularity === "15min" ? 15 : granularity === "30min" ? 30 : 60;
      return Math.max(1, Math.round(duration / slotMinutes));
    },
    getSlotHeight(granularity) {
      return granularity === "15min" ? 24 : granularity === "30min" ? 36 : 48;
    },
    formatDate(date, format) {
      const d = new Date(date);
      if (format === "full") {
        return d.toLocaleDateString(void 0, {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        });
      }
      return d.toLocaleDateString(void 0, {
        month: "short",
        day: "numeric"
      });
    },
    getTodayString() {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    }
  };
}
function createRoutineSchedulerStateAdapter() {
  return {
    mergeEdits(days, edits) {
      return days.map((day) => ({
        ...day,
        blocks: day.blocks.map((block) => {
          const edit = edits[block.id];
          return edit ? { ...block, ...edit } : block;
        })
      }));
    },
    filterByCategories(days, categories) {
      if (!categories || categories.length === 0) return days;
      return days.map((day) => ({
        ...day,
        blocks: day.blocks.filter(
          (b) => categories.includes(b.category)
        )
      }));
    },
    toggleBlockCompletion(edits, blockId, currentCompleted) {
      return {
        ...edits,
        [blockId]: { completed: !currentCompleted }
      };
    },
    navigateDate(currentDate, direction, view) {
      const date = new Date(currentDate);
      date.setDate(
        date.getDate() + (view === "week" ? 7 * direction : direction)
      );
      return date.toISOString().split("T")[0];
    },
    getVisibleDays(days, selectedDate, view) {
      if (view === "day") {
        return days.filter((d) => d.date === selectedDate);
      }
      const selected = new Date(selectedDate);
      const weekStart = new Date(selected);
      weekStart.setDate(selected.getDate() - selected.getDay());
      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateStr = date.toISOString().split("T")[0];
        const existingDay = days.find((d) => d.date === dateStr);
        return existingDay ?? { date: dateStr, blocks: [] };
      });
    }
  };
}
var schedulerAdapterInstance = null;
var stateAdapterInstance4 = null;
function getRoutineSchedulerAdapter() {
  if (!schedulerAdapterInstance) {
    schedulerAdapterInstance = createRoutineSchedulerAdapter();
  }
  return schedulerAdapterInstance;
}
function getRoutineSchedulerStateAdapter() {
  if (!stateAdapterInstance4) {
    stateAdapterInstance4 = createRoutineSchedulerStateAdapter();
  }
  return stateAdapterInstance4;
}

// src/domain/RoutineScheduler/hooks/useRoutineSchedulerLogic.ts
import { useMemo as useMemo16, useCallback as useCallback9 } from "react";
import { useElementState as useElementState7 } from "@onegenui/react";
function useRoutineSchedulerLogic(elementKey, adapter, stateAdapter, options) {
  const {
    initialDate,
    initialView = "day",
    initialDays = [],
    timeRange,
    granularity = "30min",
    showCategories,
    lock = false
  } = options;
  const [state, updateState] = useElementState7(
    elementKey,
    {
      localEdits: {},
      currentView: initialView,
      selectedDate: initialDate ?? adapter.getTodayString()
    }
  );
  const { localEdits, currentView, selectedDate } = state;
  const dayStart = timeRange?.start || "06:00";
  const dayEnd = timeRange?.end || "22:00";
  const todayStr = adapter.getTodayString();
  const slotHeight = adapter.getSlotHeight(granularity);
  const timeSlots = useMemo16(
    () => adapter.generateTimeSlots(dayStart, dayEnd, granularity),
    [adapter, dayStart, dayEnd, granularity]
  );
  const displayDays = useMemo16(
    () => stateAdapter.mergeEdits(initialDays, localEdits),
    [stateAdapter, initialDays, localEdits]
  );
  const filteredDays = useMemo16(
    () => stateAdapter.filterByCategories(displayDays, showCategories),
    [stateAdapter, displayDays, showCategories]
  );
  const visibleDays = useMemo16(
    () => stateAdapter.getVisibleDays(filteredDays, selectedDate, currentView),
    [stateAdapter, filteredDays, selectedDate, currentView]
  );
  const setCurrentView = useCallback9(
    (view) => {
      updateState({ currentView: view });
    },
    [updateState]
  );
  const setSelectedDate = useCallback9(
    (date) => {
      updateState({ selectedDate: date });
    },
    [updateState]
  );
  const navigateDate = useCallback9(
    (direction) => {
      const newDate = stateAdapter.navigateDate(
        selectedDate,
        direction,
        currentView
      );
      updateState({ selectedDate: newDate });
    },
    [stateAdapter, currentView, selectedDate, updateState]
  );
  const goToToday = useCallback9(() => {
    updateState({ selectedDate: adapter.getTodayString() });
  }, [adapter, updateState]);
  const handleToggleBlock = useCallback9(
    (blockId) => {
      if (lock) return;
      const allBlocks = displayDays.flatMap((d) => d.blocks);
      const block = allBlocks.find((b) => b.id === blockId);
      if (!block) return;
      const newEdits = stateAdapter.toggleBlockCompletion(
        localEdits,
        blockId,
        block.completed ?? false
      );
      updateState({ localEdits: newEdits });
    },
    [lock, displayDays, stateAdapter, localEdits, updateState]
  );
  return {
    // State
    currentView,
    selectedDate,
    visibleDays,
    timeSlots,
    // Derived
    slotHeight,
    dayStart,
    dayEnd,
    todayStr,
    // Actions
    setCurrentView,
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleBlock,
    // For auto-save
    displayDays
  };
}

// src/domain/RoutineScheduler/component.tsx
import { jsx as jsx31, jsxs as jsxs30 } from "react/jsx-runtime";
var RoutineScheduler = memo29(function RoutineScheduler2({
  element,
  children
}) {
  const {
    title,
    view = "day",
    selectedDate: initialSelectedDate,
    days: initialDays,
    timeRange,
    granularity = "30min",
    lock = false,
    showCategories
  } = element.props;
  const adapter = getRoutineSchedulerAdapter();
  const stateAdapter = getRoutineSchedulerStateAdapter();
  const {
    currentView,
    selectedDate,
    visibleDays,
    timeSlots,
    slotHeight,
    dayStart,
    todayStr,
    setCurrentView,
    setSelectedDate,
    navigateDate,
    handleToggleBlock,
    displayDays
  } = useRoutineSchedulerLogic(element.key, adapter, stateAdapter, {
    initialDate: initialSelectedDate ?? void 0,
    initialView: view === "timeline" ? "day" : view,
    initialDays: initialDays || [],
    timeRange: timeRange ?? void 0,
    granularity,
    showCategories: showCategories ?? void 0,
    lock: lock ?? false
  });
  return /* @__PURE__ */ jsxs30("div", { className: "flex flex-col gap-3 sm:gap-4 w-full", children: [
    /* @__PURE__ */ jsxs30("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx31(Calendar8, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        /* @__PURE__ */ jsx31("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white", children: title || "Routine" })
      ] }),
      /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsx31("div", { className: "flex rounded-lg border border-white/10 overflow-hidden", children: ["day", "week"].map((v) => /* @__PURE__ */ jsx31(
          "button",
          {
            onClick: () => setCurrentView(v),
            className: cn(
              "px-2 sm:px-3 py-1 sm:py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors touch-manipulation",
              currentView === v ? "bg-indigo-500/20 text-indigo-400" : "text-white/40 hover:text-white/60"
            ),
            children: v
          },
          v
        )) }),
        /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
          /* @__PURE__ */ jsx31(
            "button",
            {
              onClick: () => navigateDate(-1),
              className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: /* @__PURE__ */ jsx31(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsx31(
            "button",
            {
              onClick: () => setSelectedDate(todayStr),
              className: "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: "Today"
            }
          ),
          /* @__PURE__ */ jsx31(
            "button",
            {
              onClick: () => navigateDate(1),
              className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: /* @__PURE__ */ jsx31(ChevronRight2, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx31("div", { className: "text-xs sm:text-sm text-white/50 font-mono", children: currentView === "day" ? new Date(selectedDate).toLocaleDateString(void 0, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }) : `Week of ${new Date(visibleDays[0]?.date ?? selectedDate).toLocaleDateString(void 0, { month: "short", day: "numeric" })}` }),
    /* @__PURE__ */ jsx31("div", { className: "bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxs30("div", { className: "flex", children: [
      /* @__PURE__ */ jsxs30("div", { className: "w-10 sm:w-14 flex-shrink-0 border-r border-white/5", children: [
        currentView === "week" && /* @__PURE__ */ jsx31("div", { className: "h-[3rem] sm:h-[3.75rem] border-b border-white/5" }),
        timeSlots.map((slot, i) => /* @__PURE__ */ jsx31(
          "div",
          {
            className: "relative border-b border-white/5 text-[0.5rem] sm:text-[0.625rem] font-mono text-white/30",
            style: { height: `${slotHeight}px` },
            children: /* @__PURE__ */ jsx31("span", { className: "absolute -top-2 left-1 sm:left-2", children: slot })
          },
          slot
        ))
      ] }),
      /* @__PURE__ */ jsx31("div", { className: "flex-1 flex overflow-x-auto touch-pan-x", children: /* @__PURE__ */ jsx31(AnimatePresence9, { mode: "wait", children: visibleDays.length === 0 ? /* @__PURE__ */ jsx31("div", { className: "flex-1 py-8 sm:py-12", children: /* @__PURE__ */ jsx31(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsx31(Calendar8, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No schedule"
        }
      ) }) : visibleDays.map((day) => /* @__PURE__ */ jsx31(
        DayColumn,
        {
          day,
          blocks: day.blocks,
          timeSlots,
          granularity,
          dayStart,
          slotHeight,
          onToggle: handleToggleBlock,
          lock: !!lock,
          elementKey: element.key,
          isToday: day.date === todayStr,
          showHeader: currentView === "week"
        },
        day.date
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsx31("div", { className: "flex flex-wrap gap-2 sm:gap-3", children: Object.entries(CATEGORY_CONFIG).map(([key, config]) => {
      const Icon = config.icon;
      return /* @__PURE__ */ jsxs30(
        "div",
        {
          className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-white/50",
          children: [
            /* @__PURE__ */ jsx31(Icon, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsx31("span", { className: "capitalize", children: key })
          ]
        },
        key
      );
    }) }),
    children
  ] });
});

// src/domain/SupplementTracker/component.tsx
import { memo as memo33, useMemo as useMemo18 } from "react";
import { useDomainAutoSave as useDomainAutoSave8 } from "@onegenui/react";
import { Pill as Pill3, Package } from "lucide-react";
import { AnimatePresence as AnimatePresence10 } from "framer-motion";

// src/domain/SupplementTracker/components/supplement-card.tsx
import { memo as memo30 } from "react";
import { SelectableItem as SelectableItem4 } from "@onegenui/react";
import { Pill as Pill2, Check as Check8, X, Utensils as Utensils4 } from "lucide-react";

// src/domain/SupplementTracker/components/utils.ts
import { Clock as Clock8, Sun, Moon as Moon2, Utensils as Utensils3, Dumbbell as Dumbbell3 } from "lucide-react";
var DEFAULT_TIMING_CONFIG = {
  icon: Clock8,
  label: "Anytime",
  color: "text-white/60"
};
var TIMING_CONFIG = {
  morning: { icon: Sun, label: "Morning", color: "text-amber-400" },
  pre_meal: { icon: Utensils3, label: "Before Meal", color: "text-orange-400" },
  with_meal: { icon: Utensils3, label: "With Meal", color: "text-green-400" },
  post_meal: { icon: Utensils3, label: "After Meal", color: "text-teal-400" },
  pre_workout: { icon: Dumbbell3, label: "Pre-Workout", color: "text-rose-400" },
  post_workout: {
    icon: Dumbbell3,
    label: "Post-Workout",
    color: "text-emerald-400"
  },
  evening: { icon: Moon2, label: "Evening", color: "text-indigo-400" },
  bedtime: { icon: Moon2, label: "Bedtime", color: "text-violet-400" }
};
var CATEGORY_COLORS = {
  vitamin: "bg-amber-500/20 border-amber-500/30 text-amber-300",
  mineral: "bg-slate-500/20 border-slate-500/30 text-slate-300",
  amino_acid: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  herb: "bg-green-500/20 border-green-500/30 text-green-300",
  probiotic: "bg-cyan-500/20 border-cyan-500/30 text-cyan-300",
  omega: "bg-sky-500/20 border-sky-500/30 text-sky-300",
  protein: "bg-rose-500/20 border-rose-500/30 text-rose-300",
  pre_workout: "bg-red-500/20 border-red-500/30 text-red-300",
  post_workout: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
  medication: "bg-purple-500/20 border-purple-500/30 text-purple-300",
  other: "bg-zinc-500/20 border-zinc-500/30 text-zinc-300"
};
var TIMING_ORDER = [
  "morning",
  "pre_meal",
  "with_meal",
  "post_meal",
  "pre_workout",
  "post_workout",
  "evening",
  "bedtime"
];
function getTimingConfig(timing) {
  return TIMING_CONFIG[timing] ?? DEFAULT_TIMING_CONFIG;
}

// src/domain/SupplementTracker/components/supplement-card.tsx
import { jsx as jsx32, jsxs as jsxs31 } from "react/jsx-runtime";
var SupplementCard = memo30(function SupplementCard2({
  supplement,
  dose,
  onToggle,
  onSkip,
  lock,
  elementKey
}) {
  const isTaken = dose?.taken ?? false;
  const isSkipped = dose?.skipped ?? false;
  const categoryStyle = CATEGORY_COLORS[supplement.category] || CATEGORY_COLORS.other;
  return /* @__PURE__ */ jsxs31(
    SelectableItem4,
    {
      elementKey,
      itemId: supplement.id,
      className: cn(
        "group relative p-3 rounded-xl border transition-all duration-200",
        isTaken ? "bg-emerald-500/10 border-emerald-500/20" : isSkipped ? "bg-zinc-800/50 border-zinc-700/50 opacity-50" : "bg-zinc-900/60 border-white/10 hover:border-white/20"
      ),
      children: [
        /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx32(
            "button",
            {
              onClick: () => !lock && onToggle(supplement.id, dose?.id),
              disabled: lock,
              className: cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                isTaken ? "bg-emerald-500 text-black" : "bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20"
              ),
              children: isTaken ? /* @__PURE__ */ jsx32(Check8, { size: 16, strokeWidth: 3 }) : /* @__PURE__ */ jsx32(Pill2, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxs31("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx32(
                "span",
                {
                  className: cn(
                    "text-sm font-semibold",
                    isTaken && "line-through opacity-70",
                    isSkipped && "line-through"
                  ),
                  children: supplement.name
                }
              ),
              /* @__PURE__ */ jsx32(
                "span",
                {
                  className: cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                    categoryStyle
                  ),
                  children: supplement.category.replace("_", " ")
                }
              )
            ] }),
            /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-2 mt-1 text-xs text-white/50", children: [
              /* @__PURE__ */ jsx32("span", { className: "font-mono", children: supplement.dosage }),
              supplement.withFood && /* @__PURE__ */ jsxs31("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx32(Utensils4, { size: 10 }),
                " with food"
              ] }),
              supplement.brand && /* @__PURE__ */ jsxs31("span", { children: [
                "(",
                supplement.brand,
                ")"
              ] })
            ] })
          ] }),
          !isTaken && !isSkipped && !lock && /* @__PURE__ */ jsx32(
            "button",
            {
              onClick: () => onSkip(supplement.id, dose?.id),
              className: "w-6 h-6 rounded flex items-center justify-center text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-colors",
              children: /* @__PURE__ */ jsx32(X, { size: 12 })
            }
          ),
          dose?.scheduledTime && /* @__PURE__ */ jsx32("div", { className: "text-[10px] font-mono text-white/30", children: dose.scheduledTime })
        ] }),
        supplement.notes && /* @__PURE__ */ jsx32("div", { className: "mt-2 text-xs text-white/40 pl-11", children: supplement.notes })
      ]
    }
  );
});

// src/domain/SupplementTracker/components/timing-group.tsx
import { memo as memo31 } from "react";
import { motion as motion20 } from "framer-motion";
import { jsx as jsx33, jsxs as jsxs32 } from "react/jsx-runtime";
var TimingGroup = memo31(function TimingGroup2({
  timing,
  items,
  onToggle,
  onSkip,
  lock,
  elementKey
}) {
  const config = getTimingConfig(timing);
  const Icon = config.icon;
  const takenCount = items.filter((i) => i.dose?.taken).length;
  return /* @__PURE__ */ jsxs32(
    motion20.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "space-y-3",
      children: [
        /* @__PURE__ */ jsxs32("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs32("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx33(Icon, { size: 14, className: config.color }),
            /* @__PURE__ */ jsx33("span", { className: "text-sm font-bold text-white", children: config.label })
          ] }),
          /* @__PURE__ */ jsxs32("div", { className: "text-xs font-mono text-white/40", children: [
            takenCount,
            "/",
            items.length
          ] })
        ] }),
        /* @__PURE__ */ jsx33("div", { className: "flex flex-col gap-2", children: items.map(({ supplement, dose }) => /* @__PURE__ */ jsx33(
          SupplementCard,
          {
            supplement,
            dose,
            onToggle,
            onSkip,
            lock,
            elementKey
          },
          supplement.id
        )) })
      ]
    }
  );
});

// src/domain/SupplementTracker/components/progress-dashboard.tsx
import { memo as memo32 } from "react";
import { motion as motion21 } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { jsx as jsx34, jsxs as jsxs33 } from "react/jsx-runtime";
var ProgressDashboard = memo32(function ProgressDashboard2({
  stats
}) {
  return /* @__PURE__ */ jsxs33(
    motion21.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "p-4 rounded-2xl bg-zinc-900 border border-white/10",
      children: [
        /* @__PURE__ */ jsxs33("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs33("div", { children: [
            /* @__PURE__ */ jsx34("div", { className: "text-[10px] font-bold text-white/40 uppercase tracking-widest", children: "Today's Progress" }),
            /* @__PURE__ */ jsxs33("div", { className: "text-2xl font-black text-white", children: [
              stats.taken,
              /* @__PURE__ */ jsxs33("span", { className: "text-sm font-medium text-white/40 ml-1", children: [
                "/ ",
                stats.total
              ] })
            ] })
          ] }),
          stats.remaining > 0 && /* @__PURE__ */ jsxs33("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20", children: [
            /* @__PURE__ */ jsx34(AlertCircle, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ jsxs33("span", { className: "text-xs font-bold text-amber-400", children: [
              stats.remaining,
              " remaining"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx34("div", { className: "h-2 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx34(
          motion21.div,
          {
            initial: { width: 0 },
            animate: { width: `${stats.taken / stats.total * 100}%` },
            className: "h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full"
          }
        ) })
      ]
    }
  );
});

// src/domain/SupplementTracker/adapters/supplement-tracker.adapter.ts
function createSupplementTrackerAdapter() {
  return {
    getTodayDate() {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    },
    formatDisplayDate(dateStr) {
      return new Date(dateStr).toLocaleDateString(void 0, {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
    },
    groupByTiming(supplements, doses) {
      const groups = /* @__PURE__ */ new Map();
      for (const supp of supplements) {
        const timing = supp.timing || "morning";
        if (!groups.has(timing)) groups.set(timing, []);
        const dose = doses.find((d) => d.supplementId === supp.id);
        groups.get(timing).push({ supplement: supp, dose });
      }
      return groups;
    },
    calculateStats(supplements, doses) {
      const total = supplements.length;
      const taken = doses.filter((d) => d.taken).length;
      const skipped = doses.filter((d) => d.skipped).length;
      return { total, taken, skipped, remaining: total - taken - skipped };
    }
  };
}
function createSupplementStateAdapter() {
  return {
    mergeEdits(doses, edits) {
      return doses.map((dose) => {
        const edit = edits[dose.id];
        return edit ? { ...dose, ...edit } : dose;
      });
    },
    toggleDose(edits, doseId, currentTaken) {
      return {
        ...edits,
        [doseId]: {
          taken: !currentTaken,
          takenAt: !currentTaken ? (/* @__PURE__ */ new Date()).toISOString() : null,
          skipped: false
        }
      };
    },
    skipDose(edits, doseId) {
      return {
        ...edits,
        [doseId]: { skipped: true, taken: false }
      };
    }
  };
}
var trackerAdapterInstance = null;
var stateAdapterInstance5 = null;
function getSupplementTrackerAdapter() {
  if (!trackerAdapterInstance) {
    trackerAdapterInstance = createSupplementTrackerAdapter();
  }
  return trackerAdapterInstance;
}
function getSupplementStateAdapter() {
  if (!stateAdapterInstance5) {
    stateAdapterInstance5 = createSupplementStateAdapter();
  }
  return stateAdapterInstance5;
}

// src/domain/SupplementTracker/hooks/useSupplementTrackerLogic.ts
import { useState as useState9, useMemo as useMemo17, useCallback as useCallback10 } from "react";
import { useElementState as useElementState8 } from "@onegenui/react";
function useSupplementTrackerLogic(elementKey, trackerAdapter, stateAdapter, options) {
  const {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock: rawLock
  } = options;
  const lock = rawLock ?? false;
  const [editsState, setEditsState] = useElementState8(
    elementKey,
    { localEdits: {} }
  );
  const localEdits = editsState.localEdits;
  const [selectedDate] = useState9(
    initialSelectedDate ?? trackerAdapter.getTodayDate()
  );
  const supplements = useMemo17(
    () => initialSupplements || [],
    [initialSupplements]
  );
  const schedule = useMemo17(() => initialSchedule || [], [initialSchedule]);
  const todaySchedule = useMemo17(() => {
    return schedule.find((s) => s.date === selectedDate);
  }, [schedule, selectedDate]);
  const displayDoses = useMemo17(() => {
    const doses = todaySchedule?.doses || [];
    return stateAdapter.mergeEdits(doses, localEdits);
  }, [stateAdapter, todaySchedule, localEdits]);
  const groupedByTiming = useMemo17(() => {
    return trackerAdapter.groupByTiming(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);
  const stats = useMemo17(() => {
    return trackerAdapter.calculateStats(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);
  const formattedDate = useMemo17(() => {
    return trackerAdapter.formatDisplayDate(selectedDate);
  }, [trackerAdapter, selectedDate]);
  const handleToggle = useCallback10(
    (suppId, doseId) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      const current = displayDoses.find((d) => d.id === key);
      const isTaken = current?.taken ?? false;
      setEditsState({
        localEdits: stateAdapter.toggleDose(localEdits, key, isTaken)
      });
    },
    [lock, displayDoses, stateAdapter, localEdits, setEditsState]
  );
  const handleSkip = useCallback10(
    (suppId, doseId) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      setEditsState({
        localEdits: stateAdapter.skipDose(localEdits, key)
      });
    },
    [lock, stateAdapter, localEdits, setEditsState]
  );
  return {
    // State
    selectedDate,
    supplements,
    displayDoses,
    groupedByTiming,
    stats,
    // Derived
    formattedDate,
    // Actions
    handleToggle,
    handleSkip
  };
}

// src/domain/SupplementTracker/component.tsx
import { jsx as jsx35, jsxs as jsxs34 } from "react/jsx-runtime";
var SupplementTracker = memo33(function SupplementTracker2({
  element,
  children
}) {
  const {
    title,
    supplements: initialSupplements,
    schedule: initialSchedule,
    selectedDate: initialSelectedDate,
    lock: rawLock = false
  } = element.props;
  const lock = rawLock ?? false;
  const trackerAdapter = useMemo18(() => getSupplementTrackerAdapter(), []);
  const stateAdapter = useMemo18(() => getSupplementStateAdapter(), []);
  const {
    selectedDate,
    supplements,
    displayDoses,
    groupedByTiming,
    stats,
    formattedDate,
    handleToggle,
    handleSkip
  } = useSupplementTrackerLogic(element.key, trackerAdapter, stateAdapter, {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock
  });
  useDomainAutoSave8("supplement", element.key, {
    type: "supplement_schedule",
    supplements,
    schedule: [{ date: selectedDate, doses: displayDoses }]
  });
  return /* @__PURE__ */ jsxs34("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ jsxs34("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs34("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx35(Pill3, { className: "w-4 h-4 sm:w-5 sm:h-5 text-violet-500" }),
        title || "Supplements"
      ] }),
      /* @__PURE__ */ jsx35("div", { className: "text-[0.625rem] sm:text-xs font-mono text-white/40", children: formattedDate })
    ] }),
    /* @__PURE__ */ jsx35(ProgressDashboard, { stats }),
    /* @__PURE__ */ jsx35("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6", children: supplements.length === 0 ? /* @__PURE__ */ jsx35(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx35(Package, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No supplements configured"
      }
    ) : /* @__PURE__ */ jsx35(AnimatePresence10, { mode: "popLayout", children: TIMING_ORDER.map((timing) => {
      const items = groupedByTiming.get(timing);
      if (!items || items.length === 0) return null;
      return /* @__PURE__ */ jsx35(
        TimingGroup,
        {
          timing,
          items,
          onToggle: handleToggle,
          onSkip: handleSkip,
          lock,
          elementKey: element.key
        },
        timing
      );
    }) }) }),
    children
  ] });
});

// src/domain/Calendar/component.tsx
import { memo as memo36, useMemo as useMemo20 } from "react";
import { useDomainAutoSave as useDomainAutoSave9 } from "@onegenui/react";
import {
  Calendar as CalendarIcon4,
  ChevronLeft as ChevronLeft2,
  ChevronRight as ChevronRight3
} from "lucide-react";
import { motion as motion22, AnimatePresence as AnimatePresence11 } from "framer-motion";

// src/domain/Calendar/components/event-card.tsx
import { memo as memo34 } from "react";
import { Clock as Clock9, MapPin as MapPin7 } from "lucide-react";
import { SelectableItem as SelectableItem5 } from "@onegenui/react";

// src/domain/Calendar/components/utils.ts
import {
  Dumbbell as Dumbbell4,
  Utensils as Utensils5,
  Pill as Pill4,
  Briefcase as Briefcase2,
  Heart as Heart2,
  Users as Users2,
  Plane as Plane5,
  Bell,
  MoreHorizontal as MoreHorizontal3
} from "lucide-react";
var DAYS_SHORT2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var CATEGORY_CONFIG2 = {
  workout: { icon: Dumbbell4, color: "bg-emerald-500" },
  meal: { icon: Utensils5, color: "bg-amber-500" },
  supplement: { icon: Pill4, color: "bg-violet-500" },
  work: { icon: Briefcase2, color: "bg-blue-500" },
  personal: { icon: Heart2, color: "bg-pink-500" },
  health: { icon: Heart2, color: "bg-red-500" },
  social: { icon: Users2, color: "bg-cyan-500" },
  travel: { icon: Plane5, color: "bg-indigo-500" },
  reminder: { icon: Bell, color: "bg-orange-500" },
  other: { icon: MoreHorizontal3, color: "bg-zinc-500" }
};
var DEFAULT_CATEGORY_CONFIG2 = {
  icon: MoreHorizontal3,
  color: "bg-zinc-500"
};
function getCategoryConfig2(category) {
  return CATEGORY_CONFIG2[category ?? "other"] ?? DEFAULT_CATEGORY_CONFIG2;
}
function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// src/domain/Calendar/components/event-card.tsx
import { jsx as jsx36, jsxs as jsxs35 } from "react/jsx-runtime";
var EventDot = memo34(function EventDot2({
  event
}) {
  const config = getCategoryConfig2(event.category);
  return /* @__PURE__ */ jsx36(
    "div",
    {
      className: cn("w-1.5 h-1.5 rounded-full flex-shrink-0", config.color),
      title: event.title
    }
  );
});
var EventCard3 = memo34(function EventCard4({
  event,
  compact,
  onToggle,
  lock,
  elementKey
}) {
  const config = getCategoryConfig2(event.category);
  const Icon = config.icon;
  if (compact) {
    return /* @__PURE__ */ jsx36(
      "div",
      {
        className: cn(
          "text-[10px] px-1.5 py-0.5 rounded truncate cursor-pointer transition-opacity",
          config.color,
          "text-white font-medium",
          event.completed && "opacity-50 line-through"
        ),
        onClick: () => !lock && onToggle(event.id),
        title: event.title,
        children: event.title
      }
    );
  }
  return /* @__PURE__ */ jsx36(
    SelectableItem5,
    {
      elementKey,
      itemId: event.id,
      className: cn(
        "p-3 rounded-xl border transition-all cursor-pointer group",
        event.completed ? "bg-zinc-800/50 border-zinc-700/50 opacity-60" : "bg-zinc-900/60 border-white/10 hover:border-white/20"
      ),
      children: /* @__PURE__ */ jsxs35(
        "div",
        {
          className: "flex items-start gap-3",
          onClick: () => !lock && onToggle(event.id),
          children: [
            /* @__PURE__ */ jsx36(
              "div",
              {
                className: cn("w-1 h-full min-h-[40px] rounded-full", config.color)
              }
            ),
            /* @__PURE__ */ jsxs35("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx36(Icon, { size: 12, className: "text-white/40" }),
                /* @__PURE__ */ jsx36(
                  "span",
                  {
                    className: cn(
                      "text-sm font-semibold text-white truncate",
                      event.completed && "line-through"
                    ),
                    children: event.title
                  }
                ),
                event.priority === "high" && /* @__PURE__ */ jsx36("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500" })
              ] }),
              /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-3 mt-1 text-xs text-white/40", children: [
                !event.allDay && /* @__PURE__ */ jsxs35("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx36(Clock9, { size: 10 }),
                  formatTime(event.start),
                  event.end && ` - ${formatTime(event.end)}`
                ] }),
                event.allDay && /* @__PURE__ */ jsx36("span", { children: "All day" }),
                event.location && /* @__PURE__ */ jsxs35("span", { className: "flex items-center gap-1 truncate", children: [
                  /* @__PURE__ */ jsx36(MapPin7, { size: 10 }),
                  event.location
                ] })
              ] }),
              event.description && /* @__PURE__ */ jsx36("div", { className: "text-xs text-white/30 mt-1 line-clamp-2", children: event.description })
            ] })
          ]
        }
      )
    }
  );
});

// src/domain/Calendar/components/day-cell.tsx
import { memo as memo35 } from "react";
import { jsx as jsx37, jsxs as jsxs36 } from "react/jsx-runtime";
var DayCell = memo35(function DayCell2({
  date,
  events,
  isToday,
  isSelected,
  onClick,
  onToggleEvent,
  lock,
  elementKey
}) {
  if (!date) {
    return /* @__PURE__ */ jsx37("div", { className: "min-h-[100px] bg-zinc-950/30" });
  }
  const maxVisibleEvents = 3;
  const visibleEvents = events.slice(0, maxVisibleEvents);
  const hiddenCount = events.length - maxVisibleEvents;
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      className: cn(
        "min-h-[100px] p-1.5 border-b border-r border-white/5 cursor-pointer transition-colors",
        isSelected && "bg-indigo-500/10",
        isToday && "bg-emerald-500/5"
      ),
      onClick: () => onClick(date),
      children: [
        /* @__PURE__ */ jsx37(
          "div",
          {
            className: cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium mb-1",
              isToday && "bg-emerald-500 text-black font-bold",
              isSelected && !isToday && "bg-indigo-500/30 text-indigo-300",
              !isToday && !isSelected && "text-white/60 hover:bg-white/5"
            ),
            children: date.getDate()
          }
        ),
        /* @__PURE__ */ jsxs36("div", { className: "flex flex-col gap-0.5", children: [
          visibleEvents.map((event) => /* @__PURE__ */ jsx37(
            EventCard3,
            {
              event,
              compact: true,
              onToggle: onToggleEvent,
              lock,
              elementKey
            },
            event.id
          )),
          hiddenCount > 0 && /* @__PURE__ */ jsxs36("div", { className: "text-[10px] text-white/30 pl-1.5", children: [
            "+",
            hiddenCount,
            " more"
          ] })
        ] })
      ]
    }
  );
});

// src/domain/Calendar/adapters/calendar.adapter.ts
function createCalendarAdapter() {
  return {
    getDaysInMonth(year, month) {
      const days = [];
      const date = new Date(year, month, 1);
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    getCalendarDays(year, month, firstDayOfWeek) {
      const days = this.getDaysInMonth(year, month);
      const firstDate = days[0];
      if (!firstDate) return [];
      const firstDay = firstDate.getDay();
      const leadingDays = (firstDay - firstDayOfWeek + 7) % 7;
      const calendar = [];
      for (let i = 0; i < leadingDays; i++) {
        calendar.push(null);
      }
      calendar.push(...days);
      while (calendar.length % 7 !== 0) {
        calendar.push(null);
      }
      return calendar;
    },
    isSameDay(d1, d2) {
      return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    },
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    groupEventsByDate(events) {
      const map = /* @__PURE__ */ new Map();
      for (const event of events) {
        const dateKey = event.start.split("T")[0];
        if (!map.has(dateKey)) map.set(dateKey, []);
        map.get(dateKey).push(event);
      }
      return map;
    },
    toDateString(date) {
      return date.toISOString().split("T")[0];
    }
  };
}
function createCalendarStateAdapter() {
  return {
    navigateMonth(current, direction) {
      const next = new Date(current);
      next.setMonth(next.getMonth() + direction);
      return next;
    },
    mergeEdits(events, edits) {
      return events.map((event) => {
        const edit = edits[event.id];
        return edit ? { ...event, ...edit } : event;
      });
    },
    toggleEventCompletion(edits, eventId, currentCompleted) {
      return {
        ...edits,
        [eventId]: { completed: !currentCompleted }
      };
    }
  };
}
var calendarAdapterInstance = null;
var stateAdapterInstance6 = null;
function getCalendarAdapter() {
  if (!calendarAdapterInstance) {
    calendarAdapterInstance = createCalendarAdapter();
  }
  return calendarAdapterInstance;
}
function getCalendarStateAdapter() {
  if (!stateAdapterInstance6) {
    stateAdapterInstance6 = createCalendarStateAdapter();
  }
  return stateAdapterInstance6;
}

// src/domain/Calendar/hooks/useCalendarLogic.ts
import { useState as useState10, useMemo as useMemo19, useCallback as useCallback11 } from "react";
import { useElementState as useElementState9 } from "@onegenui/react";
function useCalendarLogic(elementKey, calendarAdapter, stateAdapter, options) {
  const {
    initialDate,
    initialView = "month",
    initialEvents = [],
    firstDayOfWeek = 1,
    lock = false
  } = options;
  const [{ localEdits }, updateEdits] = useElementState9(elementKey, {
    localEdits: {}
  });
  const [currentView, setCurrentView] = useState10(initialView);
  const [selectedDate, setSelectedDate] = useState10(() => {
    if (initialDate) return new Date(initialDate);
    return /* @__PURE__ */ new Date();
  });
  const displayEvents = useMemo19(
    () => stateAdapter.mergeEdits(initialEvents, localEdits),
    [stateAdapter, initialEvents, localEdits]
  );
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const calendarDays = useMemo19(
    () => calendarAdapter.getCalendarDays(
      currentYear,
      currentMonth,
      firstDayOfWeek
    ),
    [calendarAdapter, currentYear, currentMonth, firstDayOfWeek]
  );
  const eventsByDate = useMemo19(
    () => calendarAdapter.groupEventsByDate(displayEvents),
    [calendarAdapter, displayEvents]
  );
  const todayStr = calendarAdapter.toDateString(/* @__PURE__ */ new Date());
  const selectedDateStr = calendarAdapter.toDateString(selectedDate);
  const selectedDayEvents = useMemo19(
    () => eventsByDate.get(selectedDateStr) || [],
    [eventsByDate, selectedDateStr]
  );
  const navigateMonth = useCallback11(
    (direction) => {
      setSelectedDate((prev) => stateAdapter.navigateMonth(prev, direction));
    },
    [stateAdapter]
  );
  const goToToday = useCallback11(() => {
    setSelectedDate(/* @__PURE__ */ new Date());
  }, []);
  const handleToggleEvent = useCallback11(
    (eventId) => {
      if (lock) return;
      const event = displayEvents.find((e) => e.id === eventId);
      if (!event) return;
      updateEdits({
        localEdits: stateAdapter.toggleEventCompletion(
          localEdits,
          eventId,
          event.completed ?? false
        )
      });
    },
    [lock, displayEvents, stateAdapter, localEdits, updateEdits]
  );
  return {
    // State
    currentView,
    selectedDate,
    displayEvents,
    calendarDays,
    eventsByDate,
    selectedDayEvents,
    // Derived
    currentMonth,
    currentYear,
    todayStr,
    selectedDateStr,
    // Actions
    setCurrentView,
    setSelectedDate,
    navigateMonth,
    goToToday,
    handleToggleEvent
  };
}

// src/domain/Calendar/component.tsx
import { jsx as jsx38, jsxs as jsxs37 } from "react/jsx-runtime";
var containerVariants4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
};
var eventVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" }
};
var Calendar9 = memo36(function Calendar10({
  element,
  children
}) {
  const {
    title,
    view: initialView = "month",
    selectedDate: initialSelectedDate,
    events: initialEvents,
    firstDayOfWeek = 1,
    highlightToday = true,
    lock: rawLock = false
  } = element.props;
  const lock = rawLock ?? false;
  const calendarAdapter = useMemo20(() => getCalendarAdapter(), []);
  const stateAdapter = useMemo20(() => getCalendarStateAdapter(), []);
  const {
    currentView,
    selectedDate,
    displayEvents,
    calendarDays,
    eventsByDate,
    selectedDayEvents,
    currentMonth,
    currentYear,
    todayStr,
    selectedDateStr,
    setCurrentView,
    setSelectedDate,
    navigateMonth,
    goToToday,
    handleToggleEvent
  } = useCalendarLogic(element.key, calendarAdapter, stateAdapter, {
    initialDate: initialSelectedDate ?? void 0,
    initialView,
    initialEvents,
    firstDayOfWeek,
    lock
  });
  useDomainAutoSave9("calendar", element.key, {
    type: "calendar",
    events: displayEvents,
    selectedDate: selectedDateStr,
    view: currentView
  });
  const orderedDays = useMemo20(() => {
    const days = [...DAYS_SHORT2];
    const shifted = days.splice(0, firstDayOfWeek);
    return [...days, ...shifted];
  }, [firstDayOfWeek]);
  return /* @__PURE__ */ jsxs37("div", { className: "flex flex-col gap-3 sm:gap-4 w-full", children: [
    /* @__PURE__ */ jsxs37("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx38(CalendarIcon4, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        /* @__PURE__ */ jsx38("h3", { className: "text-lg sm:text-xl font-bold tracking-tight text-foreground", children: title || "Calendar" })
      ] }),
      /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-2 justify-between sm:justify-end", children: [
        /* @__PURE__ */ jsx38("div", { className: "flex rounded-lg border border-white/10 overflow-hidden", children: ["month", "agenda"].map((v) => /* @__PURE__ */ jsx38(
          "button",
          {
            onClick: () => setCurrentView(v),
            className: cn(
              "px-2.5 sm:px-3 py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors min-h-[2.25rem] touch-manipulation",
              currentView === v ? "bg-indigo-500/20 text-indigo-400" : "text-white/40 hover:text-white/60"
            ),
            children: v
          },
          v
        )) }),
        /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx38(
            "button",
            {
              onClick: () => navigateMonth(-1),
              className: "w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
              children: /* @__PURE__ */ jsx38(ChevronLeft2, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsx38(
            "button",
            {
              onClick: goToToday,
              className: "px-2 sm:px-3 py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 min-h-[2rem] touch-manipulation",
              children: "Today"
            }
          ),
          /* @__PURE__ */ jsx38(
            "button",
            {
              onClick: () => navigateMonth(1),
              className: "w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
              children: /* @__PURE__ */ jsx38(ChevronRight3, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs37("div", { className: "text-base sm:text-lg font-bold text-foreground", children: [
      MONTHS[currentMonth],
      " ",
      currentYear
    ] }),
    currentView === "month" ? (
      /* Month View - responsive grid */
      /* @__PURE__ */ jsxs37("div", { className: "bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx38("div", { className: "grid grid-cols-7 border-b border-white/10", children: orderedDays.map((day) => /* @__PURE__ */ jsxs37(
          "div",
          {
            className: "py-1.5 sm:py-2 text-center text-[0.5625rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider",
            children: [
              /* @__PURE__ */ jsx38("span", { className: "sm:hidden", children: day.charAt(0) }),
              /* @__PURE__ */ jsx38("span", { className: "hidden sm:inline", children: day })
            ]
          },
          day
        )) }),
        /* @__PURE__ */ jsx38(
          motion22.div,
          {
            variants: containerVariants4,
            initial: "hidden",
            animate: "visible",
            className: "grid grid-cols-7",
            children: calendarDays.map((date, i) => {
              const dateStr = date?.toISOString().split("T")[0] || "";
              const dayEvents = eventsByDate.get(dateStr) || [];
              const isToday = highlightToday && dateStr === todayStr;
              const isSelected = dateStr === selectedDateStr;
              return /* @__PURE__ */ jsx38(
                DayCell,
                {
                  date,
                  events: dayEvents,
                  isToday,
                  isSelected,
                  onClick: (d) => setSelectedDate(d),
                  onToggleEvent: handleToggleEvent,
                  lock,
                  elementKey: element.key
                },
                i
              );
            })
          }
        )
      ] })
    ) : (
      /* Agenda View */
      /* @__PURE__ */ jsx38("div", { className: "flex flex-col gap-2 sm:gap-3", children: selectedDayEvents.length === 0 ? /* @__PURE__ */ jsx38(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsx38(CalendarIcon4, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No events"
        }
      ) : /* @__PURE__ */ jsx38(AnimatePresence11, { mode: "popLayout", children: selectedDayEvents.map((event) => /* @__PURE__ */ jsx38(
        motion22.div,
        {
          variants: eventVariants,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          children: /* @__PURE__ */ jsx38(
            EventCard3,
            {
              event,
              onToggle: handleToggleEvent,
              lock,
              elementKey: element.key
            }
          )
        },
        event.id
      )) }) })
    ),
    /* @__PURE__ */ jsx38("div", { className: "flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-1", children: Object.entries(CATEGORY_CONFIG2).slice(0, 6).map(([key, config]) => /* @__PURE__ */ jsxs37(
      "div",
      {
        className: "flex items-center gap-1 sm:gap-1.5 text-[0.5625rem] sm:text-xs text-white/50 whitespace-nowrap",
        children: [
          /* @__PURE__ */ jsx38("div", { className: cn("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", config.color) }),
          /* @__PURE__ */ jsx38("span", { className: "capitalize", children: key })
        ]
      },
      key
    )) }),
    children
  ] });
});

// src/domain/Diary/component.tsx
import { memo as memo39, useMemo as useMemo22 } from "react";
import { useDomainAutoSave as useDomainAutoSave10 } from "@onegenui/react";
import { BookOpen, ChevronLeft as ChevronLeft3, ChevronRight as ChevronRight4 } from "lucide-react";
import { motion as motion23, AnimatePresence as AnimatePresence12 } from "framer-motion";

// src/domain/Diary/components/diary-entry-card.tsx
import { memo as memo38 } from "react";
import { SelectableItem as SelectableItem6 } from "@onegenui/react";
import { Heart as Heart3, Star as Star3, Target as Target3, Link as Link3, Tag } from "lucide-react";

// src/domain/Diary/components/sub-components.tsx
import { memo as memo37 } from "react";
import { Zap, Moon as Moon3, Check as Check9, Link as Link2 } from "lucide-react";

// src/domain/Diary/components/utils.ts
import {
  Smile,
  Meh,
  Frown,
  Dumbbell as Dumbbell5,
  Utensils as Utensils6,
  Pill as Pill5,
  Calendar as Calendar11
} from "lucide-react";
var DEFAULT_MOOD_CONFIG = {
  icon: Meh,
  color: "text-zinc-400 bg-zinc-500/20",
  label: "Unknown"
};
var MOOD_CONFIG = {
  great: {
    icon: Smile,
    color: "text-emerald-400 bg-emerald-500/20",
    label: "Great"
  },
  good: { icon: Smile, color: "text-green-400 bg-green-500/20", label: "Good" },
  neutral: {
    icon: Meh,
    color: "text-amber-400 bg-amber-500/20",
    label: "Neutral"
  },
  bad: { icon: Frown, color: "text-orange-400 bg-orange-500/20", label: "Bad" },
  terrible: {
    icon: Frown,
    color: "text-rose-400 bg-rose-500/20",
    label: "Terrible"
  }
};
function getMoodConfig(mood) {
  return MOOD_CONFIG[mood ?? "neutral"] ?? DEFAULT_MOOD_CONFIG;
}
var ENTITY_ICONS = {
  workout: Dumbbell5,
  meal: Utensils6,
  supplement: Pill5,
  calendar_event: Calendar11,
  routine: Calendar11
};
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(void 0, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatShortDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
}

// src/domain/Diary/components/sub-components.tsx
import { jsx as jsx39, jsxs as jsxs38 } from "react/jsx-runtime";
var MoodBadge = memo37(function MoodBadge2({ mood }) {
  const config = getMoodConfig(mood);
  const Icon = config.icon;
  return /* @__PURE__ */ jsxs38(
    "div",
    {
      className: cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg",
        config.color
      ),
      children: [
        /* @__PURE__ */ jsx39(Icon, { size: 14 }),
        /* @__PURE__ */ jsx39("span", { className: "text-xs font-bold", children: config.label })
      ]
    }
  );
});
var EnergyBar = memo37(function EnergyBar2({ level }) {
  return /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx39(Zap, { size: 14, className: "text-amber-400" }),
    /* @__PURE__ */ jsx39("div", { className: "flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx39(
      "div",
      {
        className: "h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all",
        style: { width: `${level * 10}%` }
      }
    ) }),
    /* @__PURE__ */ jsxs38("span", { className: "text-xs font-mono text-white/40", children: [
      level,
      "/10"
    ] })
  ] });
});
var SleepInfo = memo37(function SleepInfo2({
  sleep
}) {
  return /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-2 text-xs text-white/50", children: [
    /* @__PURE__ */ jsx39(Moon3, { size: 12, className: "text-indigo-400" }),
    sleep.hours && /* @__PURE__ */ jsxs38("span", { children: [
      sleep.hours,
      "h"
    ] }),
    sleep.quality && /* @__PURE__ */ jsx39(
      "span",
      {
        className: cn(
          "px-1.5 py-0.5 rounded text-[10px] font-bold",
          sleep.quality === "great" && "bg-emerald-500/20 text-emerald-400",
          sleep.quality === "good" && "bg-green-500/20 text-green-400",
          sleep.quality === "fair" && "bg-amber-500/20 text-amber-400",
          sleep.quality === "poor" && "bg-rose-500/20 text-rose-400"
        ),
        children: sleep.quality
      }
    )
  ] });
});
var GoalItem = memo37(function GoalItem2({
  goal,
  onToggle,
  lock
}) {
  return /* @__PURE__ */ jsxs38(
    "div",
    {
      className: cn(
        "flex items-center gap-2 p-2 rounded-lg transition-colors cursor-pointer",
        goal.completed ? "bg-emerald-500/10" : "bg-white/5 hover:bg-white/10"
      ),
      onClick: () => !lock && onToggle(goal.id),
      children: [
        /* @__PURE__ */ jsx39(
          "div",
          {
            className: cn(
              "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
              goal.completed ? "bg-emerald-500 border-emerald-500" : "border-white/20"
            ),
            children: goal.completed && /* @__PURE__ */ jsx39(Check9, { size: 10, className: "text-black" })
          }
        ),
        /* @__PURE__ */ jsx39(
          "span",
          {
            className: cn(
              "text-sm",
              goal.completed && "line-through text-white/40"
            ),
            children: goal.text
          }
        )
      ]
    }
  );
});
var LinkedEntityBadge = memo37(function LinkedEntityBadge2({
  entity
}) {
  const Icon = ENTITY_ICONS[entity.type] || Link2;
  return /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10", children: [
    /* @__PURE__ */ jsx39(Icon, { size: 12, className: "text-white/40" }),
    /* @__PURE__ */ jsx39("span", { className: "text-xs text-white/60", children: entity.label || entity.type })
  ] });
});

// src/domain/Diary/components/diary-entry-card.tsx
import { jsx as jsx40, jsxs as jsxs39 } from "react/jsx-runtime";
var DiaryEntryCard = memo38(function DiaryEntryCard2({
  entry,
  onToggleGoal,
  lock,
  elementKey,
  compact,
  showMoodTracker,
  showEnergyTracker,
  showGratitude,
  showLinkedEntities
}) {
  if (compact) {
    return /* @__PURE__ */ jsx40(
      SelectableItem6,
      {
        elementKey,
        itemId: entry.id,
        className: "p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:border-white/20 transition-all cursor-pointer",
        children: /* @__PURE__ */ jsxs39("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx40("div", { className: "text-sm font-mono text-white/40", children: formatShortDate(entry.date) }),
            entry.mood && /* @__PURE__ */ jsx40(MoodBadge, { mood: entry.mood })
          ] }),
          entry.title && /* @__PURE__ */ jsx40("div", { className: "text-sm font-medium text-white truncate", children: entry.title })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs39(
    SelectableItem6,
    {
      elementKey,
      itemId: entry.id,
      className: "p-5 rounded-2xl border border-white/10 bg-zinc-900/60",
      children: [
        /* @__PURE__ */ jsxs39("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs39("div", { children: [
            /* @__PURE__ */ jsx40("div", { className: "text-xs font-mono text-white/40 mb-1", children: formatDate(entry.date) }),
            entry.title && /* @__PURE__ */ jsx40("h4", { className: "text-lg font-bold text-white", children: entry.title })
          ] }),
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2", children: [
            entry.mood && showMoodTracker && /* @__PURE__ */ jsx40(MoodBadge, { mood: entry.mood }),
            entry.sleep && /* @__PURE__ */ jsx40(SleepInfo, { sleep: entry.sleep })
          ] })
        ] }),
        entry.energy && showEnergyTracker && /* @__PURE__ */ jsx40("div", { className: "mb-4", children: /* @__PURE__ */ jsx40(EnergyBar, { level: entry.energy }) }),
        entry.content && /* @__PURE__ */ jsx40("div", { className: "prose prose-invert prose-sm max-w-none mb-4 text-white/80", children: entry.content }),
        /* @__PURE__ */ jsx40(PerforatedDivider, { className: "my-4" }),
        showGratitude && entry.gratitude && entry.gratitude.length > 0 && /* @__PURE__ */ jsxs39("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx40(Heart3, { size: 14, className: "text-rose-400" }),
            /* @__PURE__ */ jsx40("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Gratitude" })
          ] }),
          /* @__PURE__ */ jsx40("div", { className: "flex flex-wrap gap-2", children: entry.gratitude.map((item, i) => /* @__PURE__ */ jsx40(
            "div",
            {
              className: "px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300",
              children: item
            },
            i
          )) })
        ] }),
        entry.highlights && entry.highlights.length > 0 && /* @__PURE__ */ jsxs39("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx40(Star3, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ jsx40("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Highlights" })
          ] }),
          /* @__PURE__ */ jsx40("ul", { className: "space-y-1", children: entry.highlights.map((item, i) => /* @__PURE__ */ jsxs39(
            "li",
            {
              className: "text-sm text-white/70 flex items-start gap-2",
              children: [
                /* @__PURE__ */ jsx40("span", { className: "text-amber-400", children: "*" }),
                item
              ]
            },
            i
          )) })
        ] }),
        entry.goals && entry.goals.length > 0 && /* @__PURE__ */ jsxs39("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx40(Target3, { size: 14, className: "text-emerald-400" }),
            /* @__PURE__ */ jsx40("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Daily Goals" })
          ] }),
          /* @__PURE__ */ jsx40("div", { className: "space-y-1", children: entry.goals.map((goal) => /* @__PURE__ */ jsx40(
            GoalItem,
            {
              goal,
              onToggle: (goalId) => onToggleGoal(entry.id, goalId),
              lock
            },
            goal.id
          )) })
        ] }),
        showLinkedEntities && entry.linkedEntities && entry.linkedEntities.length > 0 && /* @__PURE__ */ jsxs39("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx40(Link3, { size: 14, className: "text-indigo-400" }),
            /* @__PURE__ */ jsx40("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Related" })
          ] }),
          /* @__PURE__ */ jsx40("div", { className: "flex flex-wrap gap-2", children: entry.linkedEntities.map((entity, i) => /* @__PURE__ */ jsx40(LinkedEntityBadge, { entity }, i)) })
        ] }),
        entry.tags && entry.tags.length > 0 && /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx40(Tag, { size: 12, className: "text-white/30" }),
          entry.tags.map((tag, i) => /* @__PURE__ */ jsxs39("span", { className: "text-xs text-white/40", children: [
            "#",
            tag
          ] }, i))
        ] })
      ]
    }
  );
});

// src/domain/Diary/adapters/diary.adapter.ts
function createDiaryAdapter() {
  return {
    getTodayString() {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    },
    parseDate(dateStr) {
      return new Date(dateStr);
    },
    navigateDate(current, direction) {
      const date = new Date(current);
      date.setDate(date.getDate() + direction);
      return date.toISOString().split("T")[0];
    },
    sortEntriesByDate(entries) {
      return [...entries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },
    findEntryByDate(entries, date) {
      return entries.find((e) => e.date === date);
    },
    formatDisplayDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString(void 0, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  };
}
function createDiaryStateAdapter() {
  return {
    mergeEdits(entries, edits) {
      return entries.map((entry) => {
        const edit = edits[entry.id];
        return edit ? { ...entry, ...edit } : entry;
      });
    },
    toggleGoal(edits, entry, goalId) {
      if (!entry.goals) return edits;
      const updatedGoals = entry.goals.map(
        (g) => g.id === goalId ? { ...g, completed: !g.completed } : g
      );
      return {
        ...edits,
        [entry.id]: { goals: updatedGoals }
      };
    }
  };
}
var diaryAdapterInstance = null;
var stateAdapterInstance7 = null;
function getDiaryAdapter() {
  if (!diaryAdapterInstance) {
    diaryAdapterInstance = createDiaryAdapter();
  }
  return diaryAdapterInstance;
}
function getDiaryStateAdapter() {
  if (!stateAdapterInstance7) {
    stateAdapterInstance7 = createDiaryStateAdapter();
  }
  return stateAdapterInstance7;
}

// src/domain/Diary/hooks/useDiaryLogic.ts
import { useState as useState11, useMemo as useMemo21, useCallback as useCallback12 } from "react";
import { useElementState as useElementState10 } from "@onegenui/react";
function useDiaryLogic(elementKey, diaryAdapter, stateAdapter, options) {
  const { initialEntries = [], initialSelectedDate, lock = false } = options;
  const [editsState, setEditsState] = useElementState10(
    elementKey,
    { localEdits: {} }
  );
  const localEdits = editsState.localEdits;
  const [selectedDate, setSelectedDate] = useState11(
    initialSelectedDate ?? diaryAdapter.getTodayString()
  );
  const displayEntries = useMemo21(
    () => stateAdapter.mergeEdits(initialEntries, localEdits),
    [stateAdapter, initialEntries, localEdits]
  );
  const selectedEntry = useMemo21(
    () => diaryAdapter.findEntryByDate(displayEntries, selectedDate),
    [diaryAdapter, displayEntries, selectedDate]
  );
  const sortedEntries = useMemo21(
    () => diaryAdapter.sortEntriesByDate(displayEntries),
    [diaryAdapter, displayEntries]
  );
  const navigateDate = useCallback12(
    (direction) => {
      setSelectedDate((prev) => diaryAdapter.navigateDate(prev, direction));
    },
    [diaryAdapter]
  );
  const goToToday = useCallback12(() => {
    setSelectedDate(diaryAdapter.getTodayString());
  }, [diaryAdapter]);
  const handleToggleGoal = useCallback12(
    (entryId, goalId) => {
      if (lock) return;
      const entry = displayEntries.find((e) => e.id === entryId);
      if (!entry || !entry.goals) return;
      const newEdits = stateAdapter.toggleGoal(localEdits, entry, goalId);
      setEditsState({ localEdits: newEdits });
    },
    [lock, displayEntries, stateAdapter, localEdits, setEditsState]
  );
  return {
    // State
    selectedDate,
    displayEntries,
    selectedEntry,
    sortedEntries,
    // Actions
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleGoal
  };
}

// src/domain/Diary/component.tsx
import { jsx as jsx41, jsxs as jsxs40 } from "react/jsx-runtime";
var Diary = memo39(function Diary2({
  element,
  children
}) {
  const {
    title,
    entries: initialEntries,
    selectedDate: initialSelectedDate,
    view = "single",
    showMoodTracker = true,
    showEnergyTracker = true,
    showGratitude = true,
    showLinkedEntities = true,
    lock: rawLock = false
  } = element.props;
  const lock = rawLock ?? false;
  const diaryAdapter = useMemo22(() => getDiaryAdapter(), []);
  const stateAdapter = useMemo22(() => getDiaryStateAdapter(), []);
  const {
    selectedDate,
    displayEntries,
    selectedEntry,
    sortedEntries,
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleGoal
  } = useDiaryLogic(element.key, diaryAdapter, stateAdapter, {
    initialEntries,
    initialSelectedDate,
    view,
    lock
  });
  useDomainAutoSave10("diary", element.key, {
    type: "diary",
    entries: displayEntries,
    selectedDate
  });
  return /* @__PURE__ */ jsxs40("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ jsxs40("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs40("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsx41(BookOpen, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        title || "Diary"
      ] }),
      view === "single" && /* @__PURE__ */ jsxs40("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx41(
          "button",
          {
            onClick: () => navigateDate(-1),
            className: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
            children: /* @__PURE__ */ jsx41(ChevronLeft3, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsx41(
          "button",
          {
            onClick: goToToday,
            className: "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 touch-manipulation",
            children: "Today"
          }
        ),
        /* @__PURE__ */ jsx41(
          "button",
          {
            onClick: () => navigateDate(1),
            className: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
            children: /* @__PURE__ */ jsx41(ChevronRight4, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx41(AnimatePresence12, { mode: "wait", children: view === "single" ? selectedEntry ? /* @__PURE__ */ jsx41(
      motion23.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        children: /* @__PURE__ */ jsx41(
          DiaryEntryCard,
          {
            entry: selectedEntry,
            onToggleGoal: handleToggleGoal,
            lock,
            elementKey: element.key,
            showMoodTracker,
            showEnergyTracker,
            showGratitude,
            showLinkedEntities
          }
        )
      },
      selectedEntry.id
    ) : /* @__PURE__ */ jsx41(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx41(BookOpen, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No entry for this day"
      }
    ) : /* @__PURE__ */ jsx41("div", { className: "flex flex-col gap-2 sm:gap-3", children: sortedEntries.length === 0 ? /* @__PURE__ */ jsx41(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx41(BookOpen, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No diary entries"
      }
    ) : sortedEntries.map((entry) => /* @__PURE__ */ jsx41(
      motion23.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ jsx41(
          DiaryEntryCard,
          {
            entry,
            onToggleGoal: handleToggleGoal,
            lock,
            elementKey: element.key,
            compact: view === "timeline",
            showMoodTracker,
            showEnergyTracker,
            showGratitude,
            showLinkedEntities
          }
        )
      },
      entry.id
    )) }) }),
    children
  ] });
});

// src/domain/research/ResearchReport.tsx
import { memo as memo44 } from "react";
import { FileText as FileText2 } from "lucide-react";

// src/domain/research/components/types.ts
function detectVideoEmbed(url) {
  if (!url) return null;
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch?.[1]) {
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0&modestbranding=1`
    };
  }
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch?.[1]) {
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0`
    };
  }
  const dailymotionMatch = url.match(
    /(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/
  );
  if (dailymotionMatch?.[1]) {
    return {
      provider: "dailymotion",
      embedUrl: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`
    };
  }
  return null;
}

// src/domain/research/components/video-player.tsx
import { memo as memo40, useState as useState12 } from "react";
import { PlayCircle, Play as Play2 } from "lucide-react";
import { jsx as jsx42, jsxs as jsxs41 } from "react/jsx-runtime";
var VideoPlayer = memo40(function VideoPlayer2({
  video,
  title
}) {
  const [isPlaying, setIsPlaying] = useState12(false);
  const embedInfo = detectVideoEmbed(video.url);
  if (isPlaying) {
    return /* @__PURE__ */ jsx42("div", { className: "mt-4 rounded-xl overflow-hidden border border-white/10 aspect-video bg-black", children: embedInfo ? /* @__PURE__ */ jsx42(
      "iframe",
      {
        src: embedInfo.embedUrl,
        title: video.title || title,
        className: "w-full h-full border-0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
        allowFullScreen: true
      }
    ) : /* @__PURE__ */ jsx42(
      "video",
      {
        src: video.url,
        controls: true,
        autoPlay: true,
        className: "w-full h-full object-contain",
        children: /* @__PURE__ */ jsx42("source", { src: video.url })
      }
    ) });
  }
  return /* @__PURE__ */ jsxs41(
    "button",
    {
      onClick: () => setIsPlaying(true),
      className: "mt-4 block w-full relative rounded-xl overflow-hidden border border-white/10 group text-left",
      children: [
        video.thumbnail ? /* @__PURE__ */ jsx42(
          "img",
          {
            src: video.thumbnail,
            alt: video.title || "Video",
            className: "w-full h-48 sm:h-56 md:h-64 object-cover",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsx42("div", { className: "w-full h-48 sm:h-56 md:h-64 bg-zinc-800 flex items-center justify-center", children: /* @__PURE__ */ jsx42(PlayCircle, { className: "w-12 h-12 text-zinc-600" }) }),
        /* @__PURE__ */ jsx42("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors", children: /* @__PURE__ */ jsx42("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ jsx42(Play2, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" }) }) }),
        video.title && /* @__PURE__ */ jsx42("div", { className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ jsx42("div", { className: "text-sm sm:text-base font-medium text-white", children: video.title }) })
      ]
    }
  );
});

// src/domain/research/components/citation-badge.tsx
import { memo as memo41 } from "react";
import { sanitizeUrl as sanitizeUrl3 } from "@onegenui/utils";
import { jsx as jsx43, jsxs as jsxs42 } from "react/jsx-runtime";
var CitationBadge = memo41(function CitationBadge2({
  id,
  source
}) {
  if (!source) return /* @__PURE__ */ jsxs42("sup", { className: "text-sky-400", children: [
    "[",
    id,
    "]"
  ] });
  return /* @__PURE__ */ jsxs42(
    "a",
    {
      href: sanitizeUrl3(source.url),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-0.5 px-1 py-0.5 mx-0.5 text-[10px] font-medium bg-sky-500/20 text-sky-400 rounded hover:bg-sky-500/30 transition-colors cursor-pointer",
      children: [
        source.favicon && /* @__PURE__ */ jsx43("img", { src: source.favicon, alt: "", className: "w-3 h-3 rounded-sm" }),
        /* @__PURE__ */ jsx43("span", { children: source.domain || id })
      ]
    }
  );
});
function renderContentWithCitations(content, sources, renderText) {
  const parts = content.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (match) {
      const sourceId = match[1];
      const source = sources.find((s) => s.id === sourceId);
      return /* @__PURE__ */ jsx43(CitationBadge, { id: sourceId, source }, i);
    }
    if (renderText) {
      return /* @__PURE__ */ jsx43("span", { children: renderText(part, { inline: true }) }, i);
    }
    return /* @__PURE__ */ jsx43("span", { children: part }, i);
  });
}

// src/domain/research/components/source-card.tsx
import { memo as memo42 } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { sanitizeUrl as sanitizeUrl4 } from "@onegenui/utils";
import { jsx as jsx44, jsxs as jsxs43 } from "react/jsx-runtime";
var SourceCard = memo42(function SourceCard2({
  source
}) {
  return /* @__PURE__ */ jsxs43(
    "a",
    {
      href: sanitizeUrl4(source.url),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-sky-500/30 hover:bg-zinc-800 transition-all",
      children: [
        /* @__PURE__ */ jsx44("div", { className: "w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center flex-shrink-0", children: source.favicon ? /* @__PURE__ */ jsx44("img", { src: source.favicon, alt: "", className: "w-5 h-5 rounded" }) : /* @__PURE__ */ jsx44(Globe, { className: "w-4 h-4 text-zinc-400" }) }),
        /* @__PURE__ */ jsxs43("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx44("div", { className: "text-sm font-medium text-white truncate group-hover:text-sky-300 transition-colors", children: source.title }),
          /* @__PURE__ */ jsx44("div", { className: "text-xs text-zinc-500 truncate", children: source.domain })
        ] }),
        /* @__PURE__ */ jsx44(ExternalLink, { className: "w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors flex-shrink-0" })
      ]
    }
  );
});

// src/domain/research/components/report-section.tsx
import { memo as memo43 } from "react";
import { jsx as jsx45, jsxs as jsxs44 } from "react/jsx-runtime";
var ReportSectionComponent = memo43(function ReportSectionComponent2({
  section,
  sources,
  renderText
}) {
  return /* @__PURE__ */ jsxs44("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs44("h3", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
      /* @__PURE__ */ jsx45("div", { className: "w-1 h-5 bg-sky-500 rounded-full" }),
      section.title
    ] }),
    /* @__PURE__ */ jsx45("div", { className: "text-zinc-300 leading-relaxed text-[15px]", children: renderContentWithCitations(section.content, sources, renderText) }),
    section.image && /* @__PURE__ */ jsxs44("figure", { className: "mt-4 rounded-xl overflow-hidden border border-white/10", children: [
      /* @__PURE__ */ jsx45(
        "img",
        {
          src: section.image.url,
          alt: section.image.alt || section.title,
          className: "w-full h-auto min-h-[200px] max-h-[400px] sm:max-h-[500px] object-cover",
          loading: "lazy"
        }
      ),
      section.image.caption && /* @__PURE__ */ jsx45("figcaption", { className: "px-4 py-2.5 text-xs sm:text-sm text-zinc-500 bg-zinc-900/50", children: section.image.caption })
    ] }),
    section.video && /* @__PURE__ */ jsx45(VideoPlayer, { video: section.video, title: section.title })
  ] });
});

// src/domain/research/ResearchReport.tsx
import { jsx as jsx46, jsxs as jsxs45 } from "react/jsx-runtime";
var ResearchReport = memo44(function ResearchReport2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const props = element.props;
  const {
    title,
    summary,
    sections = [],
    sources = [],
    relatedQueries = [],
    searchQuery,
    totalResults
  } = props;
  if (!title && !summary && sections.length === 0) {
    return /* @__PURE__ */ jsxs45("div", { className: "p-4 sm:p-8 text-center text-zinc-500", children: [
      /* @__PURE__ */ jsx46(FileText2, { className: "w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" }),
      /* @__PURE__ */ jsx46("p", { className: "text-sm", children: "No report content" })
    ] });
  }
  return /* @__PURE__ */ jsxs45("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxs45("div", { className: "rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden", children: [
      /* @__PURE__ */ jsxs45("div", { className: "p-4 sm:p-6 border-b border-white/5", children: [
        /* @__PURE__ */ jsx46("h2", { className: "text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4", children: title }),
        /* @__PURE__ */ jsx46("div", { className: "text-zinc-300 leading-relaxed text-xs sm:text-sm lg:text-[15px]", children: renderContentWithCitations(summary, sources, render) })
      ] }),
      /* @__PURE__ */ jsx46("div", { className: "p-4 sm:p-6 space-y-6 sm:space-y-8", children: sections.map((section, i) => /* @__PURE__ */ jsx46(
        ReportSectionComponent,
        {
          section,
          sources,
          renderText: render
        },
        i
      )) }),
      relatedQueries.length > 0 && /* @__PURE__ */ jsx46("div", { className: "px-4 sm:px-6 pb-4 sm:pb-6", children: /* @__PURE__ */ jsx46("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: relatedQueries.map((query, i) => /* @__PURE__ */ jsx46(
        "button",
        {
          className: "px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-zinc-400 bg-zinc-800/50 rounded-full border border-white/5 hover:border-sky-500/30 hover:text-sky-300 transition-all touch-manipulation min-h-[2rem] sm:min-h-0",
          children: query
        },
        i
      )) }) })
    ] }),
    sources.length > 0 && /* @__PURE__ */ jsxs45("div", { className: "rounded-xl sm:rounded-2xl bg-zinc-900/40 border border-white/5 p-3 sm:p-4", children: [
      /* @__PURE__ */ jsxs45("div", { className: "flex items-center justify-between mb-3 sm:mb-4", children: [
        /* @__PURE__ */ jsxs45("h4", { className: "text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider", children: [
          sources.length,
          " Sources"
        ] }),
        totalResults && totalResults > sources.length && /* @__PURE__ */ jsxs45("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500", children: [
          "da ",
          totalResults,
          " risultati totali"
        ] })
      ] }),
      /* @__PURE__ */ jsx46("div", { className: "grid gap-2 grid-cols-1 sm:grid-cols-2", children: sources.map((source) => /* @__PURE__ */ jsx46(SourceCard, { source }, source.id)) })
    ] }),
    children
  ] });
});

// src/domain/DocumentIndex/component.tsx
import { memo as memo45, useState as useState13, useCallback as useCallback13 } from "react";
import {
  FileText as FileText3,
  ChevronRight as ChevronRight5,
  ChevronDown as ChevronDown3,
  BookOpen as BookOpen2,
  Hash,
  ExternalLink as ExternalLink2,
  Tag as Tag2,
  Users as Users3,
  Quote,
  Star as Star4,
  Link2 as Link22,
  Lightbulb
} from "lucide-react";
import { motion as motion24, AnimatePresence as AnimatePresence13 } from "framer-motion";
import { jsx as jsx47, jsxs as jsxs46 } from "react/jsx-runtime";
var TreeNodeItem = memo45(function TreeNodeItem2({
  node,
  depth,
  accentColor,
  onNodeClick
}) {
  const [expanded, setExpanded] = useState13(depth > 0);
  const [showDetails, setShowDetails] = useState13(false);
  const hasChildren = node.children && node.children.length > 0;
  const toggle = useCallback13(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);
  const handleNodeClick = useCallback13(
    (e) => {
      e.stopPropagation();
      setShowDetails((prev) => !prev);
      if (!expanded) setExpanded(true);
      onNodeClick?.(node);
    },
    [onNodeClick, node, expanded]
  );
  const pageRange = node.startPage === node.endPage ? `p. ${node.startPage}` : `pp. ${node.startPage}-${node.endPage}`;
  const hasMetadata = node.entityCount || node.quoteCount || node.importance !== void 0;
  const hasTags = node.tags && node.tags.length > 0;
  const hasKeyPoints = node.keyPoints && node.keyPoints.length > 0;
  const hasRelated = node.relatedNodes && node.relatedNodes.length > 0;
  return /* @__PURE__ */ jsxs46("div", { className: "select-none", children: [
    /* @__PURE__ */ jsxs46(
      "div",
      {
        onClick: toggle,
        className: cn(
          "flex items-start gap-1.5 sm:gap-2 py-1.5 px-1.5 sm:px-2 rounded-md transition-colors group touch-manipulation",
          hasChildren && "cursor-pointer hover:bg-white/5",
          depth === 0 && "font-semibold"
        ),
        style: { paddingLeft: `${depth * 12 + 8}px` },
        children: [
          hasChildren ? /* @__PURE__ */ jsx47("span", { className: "mt-0.5 shrink-0 text-muted-foreground", children: expanded ? /* @__PURE__ */ jsx47(ChevronDown3, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx47(ChevronRight5, { className: "h-4 w-4" }) }) : /* @__PURE__ */ jsx47("span", { className: "mt-0.5 shrink-0 w-4" }),
          /* @__PURE__ */ jsxs46("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs46("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2", children: [
              /* @__PURE__ */ jsx47(
                "span",
                {
                  className: cn(
                    "text-xs sm:text-sm truncate",
                    depth === 0 ? "text-foreground" : "text-foreground/80"
                  ),
                  children: node.title
                }
              ),
              /* @__PURE__ */ jsx47(
                "span",
                {
                  className: "text-[0.5rem] sm:text-[0.625rem] px-1 sm:px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground shrink-0",
                  style: accentColor ? { backgroundColor: `${accentColor}20` } : {},
                  children: pageRange
                }
              ),
              node.importance !== void 0 && node.importance >= 0.7 && /* @__PURE__ */ jsx47(
                Star4,
                {
                  className: "h-3 w-3 text-amber-400 shrink-0",
                  fill: "currentColor"
                }
              ),
              hasMetadata && /* @__PURE__ */ jsxs46("span", { className: "flex items-center gap-1 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground", children: [
                node.entityCount ? /* @__PURE__ */ jsxs46("span", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx47(Users3, { className: "h-2.5 w-2.5" }),
                  node.entityCount
                ] }) : null,
                node.quoteCount ? /* @__PURE__ */ jsxs46("span", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx47(Quote, { className: "h-2.5 w-2.5" }),
                  node.quoteCount
                ] }) : null
              ] }),
              onNodeClick && /* @__PURE__ */ jsx47(
                "button",
                {
                  onClick: handleNodeClick,
                  className: cn(
                    "transition-opacity p-0.5 rounded hover:bg-white/10",
                    showDetails ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  ),
                  title: showDetails ? "Hide details" : "View section details",
                  children: showDetails ? /* @__PURE__ */ jsx47(
                    ChevronDown3,
                    {
                      className: "h-3 w-3",
                      style: { color: accentColor }
                    }
                  ) : /* @__PURE__ */ jsx47(
                    ExternalLink2,
                    {
                      className: "h-3 w-3",
                      style: { color: accentColor }
                    }
                  )
                }
              )
            ] }),
            hasTags && expanded && /* @__PURE__ */ jsxs46("div", { className: "flex flex-wrap items-center gap-1 mt-1", children: [
              /* @__PURE__ */ jsx47(Tag2, { className: "h-2.5 w-2.5 text-muted-foreground" }),
              node.tags.map((tag) => /* @__PURE__ */ jsx47(
                "span",
                {
                  className: "text-[0.5rem] sm:text-[0.625rem] px-1.5 py-0.5 rounded-full bg-white/5 text-muted-foreground",
                  style: accentColor ? { borderColor: `${accentColor}30`, borderWidth: 1 } : {},
                  children: tag
                },
                tag
              ))
            ] }),
            node.summary && expanded && /* @__PURE__ */ jsx47(
              "p",
              {
                className: cn(
                  "text-xs text-muted-foreground mt-1",
                  !showDetails && "line-clamp-2"
                ),
                children: node.summary
              }
            ),
            showDetails && hasKeyPoints && /* @__PURE__ */ jsx47("div", { className: "mt-1.5 space-y-0.5", children: node.keyPoints.map((point, i) => /* @__PURE__ */ jsxs46(
              "div",
              {
                className: "flex items-start gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx47(Lightbulb, { className: "h-3 w-3 shrink-0 mt-0.5 text-amber-400/70" }),
                  /* @__PURE__ */ jsx47("span", { children: point })
                ]
              },
              i
            )) }),
            showDetails && hasRelated && /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-1 mt-1 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground", children: [
              /* @__PURE__ */ jsx47(Link22, { className: "h-2.5 w-2.5" }),
              /* @__PURE__ */ jsxs46("span", { children: [
                "Related: ",
                node.relatedNodes.join(", ")
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx47(AnimatePresence13, { children: expanded && hasChildren && /* @__PURE__ */ jsx47(
      motion24.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: node.children.map((child, index) => /* @__PURE__ */ jsx47(
          TreeNodeItem2,
          {
            node: child,
            depth: depth + 1,
            accentColor,
            onNodeClick
          },
          child.nodeId || index
        ))
      }
    ) })
  ] });
});
var DocumentIndex = memo45(function DocumentIndex2({
  element,
  onAction
}) {
  const {
    title,
    description,
    pageCount,
    nodes,
    accentColor = "#3b82f6",
    collapsed: initialCollapsed = false
  } = element.props;
  const [collapsed, setCollapsed] = useState13(initialCollapsed);
  const handleNodeClick = useCallback13(
    (node) => {
      onAction?.({
        name: "view_section",
        params: {
          elementKey: element.key,
          nodeId: node.nodeId,
          title: node.title,
          startPage: node.startPage,
          endPage: node.endPage,
          summary: node.summary
        }
      });
    },
    [onAction, element.key]
  );
  const countNodes = (nodes2) => nodes2.reduce(
    (acc, n) => acc + 1 + (n.children ? countNodes(n.children) : 0),
    0
  );
  const totalNodes = nodes ? countNodes(nodes) : 0;
  return /* @__PURE__ */ jsxs46("div", { className: "rounded-lg sm:rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden", children: [
    /* @__PURE__ */ jsxs46(
      "div",
      {
        className: "flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors gap-2 sm:gap-3 touch-manipulation",
        onClick: () => setCollapsed((prev) => !prev),
        children: [
          /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsx47(
              "div",
              {
                className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0",
                style: { backgroundColor: `${accentColor}20` },
                children: /* @__PURE__ */ jsx47(FileText3, { className: "h-4 w-4 sm:h-5 sm:w-5", style: { color: accentColor } })
              }
            ),
            /* @__PURE__ */ jsxs46("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx47("h3", { className: "text-xs sm:text-sm font-semibold text-foreground truncate", children: title }),
              description && /* @__PURE__ */ jsx47("p", { className: "text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1 max-w-md", children: description })
            ] })
          ] }),
          /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-2 sm:gap-3 pl-10 sm:pl-0", children: [
            /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx47(BookOpen2, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5" }),
              /* @__PURE__ */ jsxs46("span", { children: [
                pageCount,
                " pages"
              ] })
            ] }),
            /* @__PURE__ */ jsxs46("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx47(Hash, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5" }),
              /* @__PURE__ */ jsxs46("span", { children: [
                totalNodes,
                " sections"
              ] })
            ] }),
            collapsed ? /* @__PURE__ */ jsx47(ChevronRight5, { className: "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsx47(ChevronDown3, { className: "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx47(AnimatePresence13, { children: !collapsed && /* @__PURE__ */ jsx47(
      motion24.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx47("div", { className: "p-2 sm:p-3", children: nodes && nodes.length > 0 ? nodes.map((node, index) => /* @__PURE__ */ jsx47(
          TreeNodeItem,
          {
            node,
            depth: 0,
            accentColor,
            onNodeClick: handleNodeClick
          },
          node.nodeId || index
        )) : /* @__PURE__ */ jsx47("p", { className: "text-xs sm:text-sm text-muted-foreground text-center py-3 sm:py-4", children: "No sections found" }) })
      }
    ) })
  ] });
});

// src/domain/DocumentIndex/index.ts
var DocumentIndexDefinition = {
  type: "DocumentIndex",
  component: DocumentIndex,
  schema: DocumentIndexPropsSchema
};

// src/domain/SourceCitation/component.tsx
import { memo as memo46, useState as useState14 } from "react";
import { FileText as FileText4, ChevronDown as ChevronDown4, BookOpen as BookOpen3 } from "lucide-react";
import { motion as motion25 } from "framer-motion";
import { jsx as jsx48, jsxs as jsxs47 } from "react/jsx-runtime";
var SourceCitation = memo46(function SourceCitation2({
  element
}) {
  const {
    title,
    citations = [],
    collapsed: initialCollapsed = true,
    accentColor = "#3b82f6"
  } = element.props;
  const [expanded, setExpanded] = useState14(!initialCollapsed);
  const visibleCitations = expanded ? citations : citations.slice(0, 4);
  if (citations.length === 0) return null;
  return /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx48("div", { className: "flex -space-x-1", children: citations.slice(0, 3).map((c, i) => /* @__PURE__ */ jsx48(
        "div",
        {
          className: "w-5 h-5 rounded-full border-2 border-zinc-900 flex items-center justify-center",
          style: { backgroundColor: `${accentColor}20` },
          children: /* @__PURE__ */ jsx48(FileText4, { size: 10, style: { color: accentColor } })
        },
        i
      )) }),
      /* @__PURE__ */ jsxs47("span", { className: "font-medium", children: [
        citations.length,
        " sources"
      ] }),
      /* @__PURE__ */ jsx48("span", { className: "text-muted-foreground/60", children: "\xB7" }),
      /* @__PURE__ */ jsx48("span", { className: "text-muted-foreground/60 truncate max-w-32", children: title })
    ] }),
    /* @__PURE__ */ jsx48("div", { className: "flex flex-col gap-1", children: visibleCitations.map((citation, idx) => /* @__PURE__ */ jsx48(
      CompactCitation,
      {
        citation,
        index: idx,
        accentColor
      },
      citation.id || idx
    )) }),
    citations.length > 4 && /* @__PURE__ */ jsxs47(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "flex items-center justify-center gap-1 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
        children: [
          expanded ? "Mostra meno" : `Mostra tutte (${citations.length})`,
          /* @__PURE__ */ jsx48(
            ChevronDown4,
            {
              size: 14,
              className: cn("transition-transform", expanded && "rotate-180")
            }
          )
        ]
      }
    )
  ] });
});
var CompactCitation = memo46(function CompactCitation2({
  citation,
  index,
  accentColor
}) {
  const [showExcerpt, setShowExcerpt] = useState14(false);
  return /* @__PURE__ */ jsxs47(
    motion25.div,
    {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.03 },
      className: "group",
      children: [
        /* @__PURE__ */ jsxs47(
          "button",
          {
            onClick: () => setShowExcerpt(!showExcerpt),
            className: "w-full flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all text-left",
            children: [
              /* @__PURE__ */ jsx48(
                "span",
                {
                  className: "shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-medium",
                  style: { backgroundColor: `${accentColor}20`, color: accentColor },
                  children: citation.id
                }
              ),
              /* @__PURE__ */ jsxs47("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx48("div", { className: "text-xs font-medium text-foreground/80 line-clamp-1 leading-tight", children: citation.sectionTitle || citation.text?.slice(0, 50) || "Source" }),
                /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsx48(BookOpen3, { size: 10, className: "text-muted-foreground/50" }),
                  /* @__PURE__ */ jsxs47("span", { className: "text-[10px] text-muted-foreground/60", children: [
                    "p. ",
                    citation.pageNumber
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx48(
                ChevronDown4,
                {
                  size: 12,
                  className: cn(
                    "shrink-0 text-muted-foreground/40 transition-transform",
                    showExcerpt && "rotate-180"
                  )
                }
              )
            ]
          }
        ),
        showExcerpt && citation.text && /* @__PURE__ */ jsx48(
          motion25.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "ml-7 mt-1 mb-2 p-2 rounded-lg bg-white/[0.02] border-l-2",
            style: { borderColor: accentColor },
            children: /* @__PURE__ */ jsxs47("p", { className: "text-xs text-foreground/70 italic leading-relaxed", children: [
              '"',
              citation.text,
              '"'
            ] })
          }
        )
      ]
    }
  );
});

// src/domain/SourceCitation/index.ts
var SourceCitationDefinition = {
  type: "SourceCitation",
  component: SourceCitation,
  schema: SourceCitationPropsSchema
};

// src/domain/document/DocumentReport.tsx
import { memo as memo47, useState as useState15 } from "react";
import { FileText as FileText5, ChevronDown as ChevronDown5, ChevronRight as ChevronRight6, BookOpen as BookOpen4, Users as Users4, Quote as Quote2, Lightbulb as Lightbulb2, Clock as Clock10 } from "lucide-react";
import { jsx as jsx49, jsxs as jsxs48 } from "react/jsx-runtime";
var SectionItem = memo47(function SectionItem2({
  section,
  depth = 0
}) {
  const [expanded, setExpanded] = useState15(depth < 2);
  const hasChildren = section.children && section.children.length > 0;
  return /* @__PURE__ */ jsxs48("div", { className: `${depth > 0 ? "ml-3 sm:ml-4 border-l border-white/5 pl-3 sm:pl-4" : ""}`, children: [
    /* @__PURE__ */ jsxs48(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "w-full text-left py-2 sm:py-3 flex items-start gap-2 hover:bg-white/5 rounded-lg px-2 -mx-2 transition-colors",
        children: [
          hasChildren ? expanded ? /* @__PURE__ */ jsx49(ChevronDown5, { className: "w-4 h-4 mt-0.5 text-zinc-500" }) : /* @__PURE__ */ jsx49(ChevronRight6, { className: "w-4 h-4 mt-0.5 text-zinc-500" }) : /* @__PURE__ */ jsx49("div", { className: "w-4" }),
          /* @__PURE__ */ jsxs48("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs48("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsx49("span", { className: "font-medium text-white text-sm sm:text-base", children: section.title }),
              /* @__PURE__ */ jsxs48("span", { className: "text-xs text-zinc-500", children: [
                "p.",
                section.pageStart,
                "-",
                section.pageEnd
              ] })
            ] }),
            !expanded && section.summary && /* @__PURE__ */ jsx49("p", { className: "text-xs text-zinc-400 mt-1 line-clamp-2", children: section.summary })
          ] })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxs48("div", { className: "pb-3 space-y-3", children: [
      section.summary && /* @__PURE__ */ jsx49("p", { className: "text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6", children: section.summary }),
      section.keyPoints.length > 0 && /* @__PURE__ */ jsxs48("div", { className: "pl-6", children: [
        /* @__PURE__ */ jsx49("div", { className: "text-xs text-zinc-500 uppercase tracking-wider mb-1", children: "Key Points" }),
        /* @__PURE__ */ jsx49("ul", { className: "space-y-1", children: section.keyPoints.map((point, i) => /* @__PURE__ */ jsxs48("li", { className: "text-xs sm:text-sm text-zinc-300 flex gap-2", children: [
          /* @__PURE__ */ jsx49("span", { className: "text-sky-400", children: "-" }),
          /* @__PURE__ */ jsx49("span", { children: point })
        ] }, i)) })
      ] }),
      section.entities.length > 0 && /* @__PURE__ */ jsx49("div", { className: "pl-6 flex flex-wrap gap-1.5", children: section.entities.slice(0, 8).map((e, i) => /* @__PURE__ */ jsx49("span", { className: "px-2 py-0.5 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-white/5", children: e.value }, i)) }),
      section.quotes.length > 0 && /* @__PURE__ */ jsx49("div", { className: "pl-6 space-y-2", children: section.quotes.slice(0, 2).map((q, i) => /* @__PURE__ */ jsxs48("blockquote", { className: "text-xs italic text-zinc-400 border-l-2 border-amber-500/50 pl-3", children: [
        '"',
        q.text,
        '"',
        q.speaker && /* @__PURE__ */ jsxs48("span", { className: "text-zinc-500 not-italic ml-2", children: [
          "- ",
          q.speaker
        ] })
      ] }, i)) }),
      hasChildren && section.children.map((child) => /* @__PURE__ */ jsx49(SectionItem2, { section: child, depth: depth + 1 }, child.id))
    ] })
  ] });
});
var SemanticPanel = memo47(function SemanticPanel2({ overlay }) {
  const [tab, setTab] = useState15("entities");
  return /* @__PURE__ */ jsxs48("div", { className: "rounded-xl bg-zinc-900/40 border border-white/5 overflow-hidden", children: [
    /* @__PURE__ */ jsx49("div", { className: "flex border-b border-white/5 overflow-x-auto", children: [
      { key: "entities", icon: Users4, label: "Entities" },
      { key: "insights", icon: Lightbulb2, label: "Insights" },
      { key: "quotes", icon: Quote2, label: "Quotes" },
      ...overlay.timeline?.length ? [{ key: "timeline", icon: Clock10, label: "Timeline" }] : []
    ].map(({ key, icon: Icon, label }) => /* @__PURE__ */ jsxs48(
      "button",
      {
        onClick: () => setTab(key),
        className: `flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap transition-colors ${tab === key ? "text-sky-400 border-b-2 border-sky-400 bg-sky-400/5" : "text-zinc-400 hover:text-zinc-300"}`,
        children: [
          /* @__PURE__ */ jsx49(Icon, { className: "w-3.5 h-3.5" }),
          label
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxs48("div", { className: "p-3 sm:p-4 max-h-64 overflow-y-auto", children: [
      tab === "entities" && /* @__PURE__ */ jsx49("div", { className: "flex flex-wrap gap-2", children: (overlay.topEntities ?? []).slice(0, 20).map((e) => /* @__PURE__ */ jsxs48("div", { className: "px-2.5 py-1.5 bg-zinc-800/50 rounded-lg border border-white/5", children: [
        /* @__PURE__ */ jsx49("div", { className: "text-xs sm:text-sm text-white", children: e.value }),
        /* @__PURE__ */ jsxs48("div", { className: "text-[0.625rem] text-zinc-500 capitalize", children: [
          e.type,
          " - ",
          e.occurrenceCount,
          "x"
        ] })
      ] }, e.id)) }),
      tab === "insights" && /* @__PURE__ */ jsx49("ul", { className: "space-y-2", children: (overlay.keyInsights ?? []).map((insight, i) => /* @__PURE__ */ jsxs48("li", { className: "flex gap-2 text-xs sm:text-sm text-zinc-300", children: [
        /* @__PURE__ */ jsx49(Lightbulb2, { className: "w-4 h-4 text-amber-400 shrink-0 mt-0.5" }),
        insight
      ] }, i)) }),
      tab === "quotes" && /* @__PURE__ */ jsx49("div", { className: "space-y-3", children: (overlay.globalQuotes ?? []).slice(0, 5).map((q, i) => /* @__PURE__ */ jsxs48("blockquote", { className: "text-xs sm:text-sm italic text-zinc-300 border-l-2 border-amber-500/50 pl-3", children: [
        '"',
        q.text,
        '"',
        q.speaker && /* @__PURE__ */ jsxs48("span", { className: "text-zinc-500 not-italic ml-2", children: [
          "- ",
          q.speaker
        ] })
      ] }, i)) }),
      tab === "timeline" && overlay.timeline && /* @__PURE__ */ jsx49("div", { className: "space-y-2", children: overlay.timeline.map((evt, i) => /* @__PURE__ */ jsxs48("div", { className: "flex gap-3 text-xs sm:text-sm", children: [
        /* @__PURE__ */ jsx49("span", { className: "text-sky-400 font-mono shrink-0", children: evt.date }),
        /* @__PURE__ */ jsx49("span", { className: "text-zinc-300", children: evt.event }),
        /* @__PURE__ */ jsxs48("span", { className: "text-zinc-500 ml-auto", children: [
          "p.",
          evt.pageRef
        ] })
      ] }, i)) })
    ] })
  ] });
});
var DocumentReport = memo47(function DocumentReport2({ element, children }) {
  const props = element.props;
  const { title, description, totalPages, filename, sections = [], semanticOverlay, sources = [] } = props;
  if (!title && !description && sections.length === 0) {
    return /* @__PURE__ */ jsxs48("div", { className: "p-4 sm:p-8 text-center text-zinc-500", children: [
      /* @__PURE__ */ jsx49(FileText5, { className: "w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" }),
      /* @__PURE__ */ jsx49("p", { className: "text-sm", children: "No document content" })
    ] });
  }
  return /* @__PURE__ */ jsxs48("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxs48("div", { className: "rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden", children: [
      /* @__PURE__ */ jsxs48("div", { className: "p-4 sm:p-6 border-b border-white/5", children: [
        /* @__PURE__ */ jsxs48("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ jsx49("h2", { className: "text-lg sm:text-xl lg:text-2xl font-bold text-white", children: title }),
          /* @__PURE__ */ jsxs48("div", { className: "flex items-center gap-2 text-xs text-zinc-500", children: [
            /* @__PURE__ */ jsx49(BookOpen4, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxs48("span", { children: [
              totalPages,
              " pages"
            ] })
          ] })
        ] }),
        filename && /* @__PURE__ */ jsx49("p", { className: "text-xs text-zinc-500 mb-3", children: filename }),
        /* @__PURE__ */ jsx49("p", { className: "text-zinc-300 leading-relaxed text-xs sm:text-sm lg:text-[15px]", children: description })
      ] }),
      /* @__PURE__ */ jsxs48("div", { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsx49("h3", { className: "text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4", children: "Document Structure" }),
        /* @__PURE__ */ jsx49("div", { className: "space-y-1", children: sections.map((section, idx) => /* @__PURE__ */ jsx49(SectionItem, { section }, `${section.id}-${idx}`)) })
      ] })
    ] }),
    semanticOverlay && ((semanticOverlay.topEntities?.length ?? 0) > 0 || (semanticOverlay.keyInsights?.length ?? 0) > 0) && /* @__PURE__ */ jsx49(SemanticPanel, { overlay: semanticOverlay }),
    sources.length > 0 && /* @__PURE__ */ jsxs48("div", { className: "rounded-xl bg-zinc-900/40 border border-white/5 p-3 sm:p-4", children: [
      /* @__PURE__ */ jsxs48("h4", { className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2", children: [
        sources.length,
        " Sections"
      ] }),
      /* @__PURE__ */ jsx49("div", { className: "flex flex-wrap gap-1.5", children: sources.slice(0, 15).map((s) => /* @__PURE__ */ jsxs48("span", { className: "px-2 py-1 text-xs text-zinc-400 bg-zinc-800/50 rounded", children: [
        s.title,
        " (p.",
        s.pageNumber,
        ")"
      ] }, s.id)) })
    ] }),
    children
  ] });
});

// src/visualization/charts/Chart/component.tsx
import { memo as memo48, useMemo as useMemo23, useState as useState16 } from "react";
import {
  useData,
  useItemSelection
} from "@onegenui/react";

// src/visualization/utils/data-utils.ts
import {
  resolveArrayProp as resolveArrayProp2,
  resolveValueProp as resolveValueProp2,
  resolveString as resolveString2
} from "@onegenui/utils";

// src/visualization/utils/cn.ts
import { cn as cn2 } from "@onegenui/utils";

// src/visualization/charts/Chart/component.tsx
import { jsx as jsx50, jsxs as jsxs49 } from "react/jsx-runtime";
var DEFAULT_HEIGHT = 200;
var MIN_HEIGHT = 120;
var Y_AXIS_WIDTH = 40;
var BAR_GAP = 6;
var DEFAULT_COLORS = [
  "#3b82f6",
  // blue
  "#22c55e",
  // green
  "#f97316",
  // orange
  "#a855f7",
  // purple
  "#ec4899",
  // pink
  "#14b8a6",
  // teal
  "#eab308",
  // yellow
  "#ef4444"
  // red
];
function formatValue(value) {
  if (value == null || typeof value !== "number" || isNaN(value)) {
    return "-";
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1)}M`;
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(1)}K`;
  }
  return value.toFixed(0);
}
function calculateNiceTickValues(min, max, targetTicks = 5) {
  if (max <= min) return [0];
  const range = max - min;
  const roughStep = range / (targetTicks - 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const normalizedStep = roughStep / magnitude;
  let niceStep;
  if (normalizedStep <= 1.5) niceStep = 1;
  else if (normalizedStep <= 3) niceStep = 2;
  else if (normalizedStep <= 7) niceStep = 5;
  else niceStep = 10;
  niceStep *= magnitude;
  const niceMin = Math.floor(min / niceStep) * niceStep;
  const niceMax = Math.ceil(max / niceStep) * niceStep;
  const ticks = [];
  for (let tick = niceMin; tick <= niceMax; tick += niceStep) {
    ticks.push(tick);
  }
  return ticks;
}
function hexToRgba(hex, alpha) {
  if (!hex || !hex.startsWith("#")) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
var Chart = memo48(function Chart2({
  element,
  children
}) {
  const { title, data, dataPath, height, series, categories } = element.props;
  const { data: globalData } = useData();
  const chartData = useMemo23(() => {
    if (series && series.length > 0 && categories && categories.length > 0) {
      const firstSeries = series[0];
      return categories.map((label, i) => ({
        label,
        value: firstSeries.data[i] ?? 0,
        color: firstSeries.color
      }));
    }
    return resolveArrayProp2(globalData, data, dataPath);
  }, [series, categories, globalData, data, dataPath]);
  const chartHeight = Math.max(height || DEFAULT_HEIGHT, MIN_HEIGHT);
  const { selectedItems, isItemSelected } = useItemSelection(element.key);
  const [hoveredIndex, setHoveredIndex] = useState16(null);
  const { ticks, normalizedData } = useMemo23(() => {
    if (!chartData || chartData.length === 0) {
      return { maxValue: 0, minValue: 0, ticks: [], normalizedData: [] };
    }
    const values = chartData.map((d) => d.value);
    const max = Math.max(...values, 0);
    const min = Math.min(...values, 0);
    const effectiveMax = max === min ? max + 10 : max;
    const computedTicks = calculateNiceTickValues(
      Math.min(min, 0),
      effectiveMax,
      5
    );
    const tickMax = computedTicks[computedTicks.length - 1] ?? effectiveMax;
    const tickMin = computedTicks[0] ?? 0;
    const range = tickMax - tickMin;
    return {
      maxValue: tickMax,
      minValue: tickMin,
      ticks: computedTicks,
      normalizedData: chartData.map((d, i) => ({
        ...d,
        color: d.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length],
        percentage: range === 0 ? 0 : (d.value - tickMin) / range * 100
      }))
    };
  }, [chartData]);
  if (!chartData || chartData.length === 0) {
    return /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-center p-4 sm:p-8 bg-card border border-border rounded-lg sm:rounded-xl text-muted-foreground text-sm", children: "No data available" });
  }
  return /* @__PURE__ */ jsxs49("div", { className: "flex flex-col w-full h-full glass-panel bg-card/80 backdrop-blur-md border border-border/50 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg", children: [
    title && /* @__PURE__ */ jsx50("h3", { className: "text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-foreground", children: title }),
    /* @__PURE__ */ jsxs49(
      "div",
      {
        className: "relative w-full",
        style: { height: `${chartHeight}px` },
        children: [
          /* @__PURE__ */ jsx50("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none", children: ticks.slice().reverse().map((tick) => /* @__PURE__ */ jsxs49("div", { className: "flex items-center w-full h-0 relative", children: [
            /* @__PURE__ */ jsx50(
              "div",
              {
                className: "border-t border-border border-dashed",
                style: {
                  marginLeft: `${Y_AXIS_WIDTH + 4}px`,
                  width: `calc(100% - ${Y_AXIS_WIDTH + 4}px)`
                }
              }
            ),
            /* @__PURE__ */ jsx50("span", { className: "absolute left-0 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground text-right -translate-y-1/2 pr-1", style: { width: `${Y_AXIS_WIDTH}px` }, children: formatValue(tick) })
          ] }, tick)) }),
          /* @__PURE__ */ jsx50(
            "div",
            {
              className: "absolute inset-0 flex items-end justify-between pt-2 sm:pt-3 pb-5 sm:pb-6",
              style: {
                left: `${Y_AXIS_WIDTH + 4}px`,
                right: 0
              },
              children: normalizedData.map((d, i) => {
                const itemId = i.toString();
                const isSelected = isItemSelected(itemId);
                const isHovered = hoveredIndex === i;
                const barHeight = `${d.percentage}%`;
                return /* @__PURE__ */ jsxs49(
                  "div",
                  {
                    "data-selectable-item": true,
                    "data-element-key": element.key,
                    "data-item-id": itemId,
                    className: "relative flex-1 h-full flex flex-col justify-end items-center group/bar cursor-pointer touch-manipulation",
                    style: { padding: `0 ${BAR_GAP / 2}px` },
                    onMouseEnter: () => setHoveredIndex(i),
                    onMouseLeave: () => setHoveredIndex(null),
                    onTouchStart: () => setHoveredIndex(i),
                    onTouchEnd: () => setHoveredIndex(null),
                    children: [
                      (isHovered || isSelected) && /* @__PURE__ */ jsxs49(
                        "div",
                        {
                          className: cn2(
                            "absolute bottom-full mb-1 z-20 px-1.5 sm:px-2 py-0.5 sm:py-1",
                            "bg-popover text-popover-foreground text-[0.625rem] sm:text-xs font-medium rounded shadow-md pointer-events-none whitespace-nowrap",
                            "animate-in fade-in zoom-in-95 duration-200"
                          ),
                          children: [
                            /* @__PURE__ */ jsxs49("span", { className: "opacity-70 mr-0.5 sm:mr-1", children: [
                              d.label,
                              ":"
                            ] }),
                            formatValue(d.value)
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx50(
                        "div",
                        {
                          className: cn2(
                            "w-full rounded-t transition-all duration-200 relative",
                            isSelected ? "opacity-100 ring-2 ring-primary ring-offset-1" : "opacity-85 hover:opacity-100"
                          ),
                          style: {
                            height: barHeight,
                            backgroundColor: d.color,
                            boxShadow: isHovered ? `0 0 10px ${hexToRgba(d.color || "#000", 0.4)}` : "none"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx50("div", { className: "absolute top-full mt-1 sm:mt-2 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground truncate w-full text-center max-w-full", children: d.label })
                    ]
                  },
                  i
                );
              })
            }
          )
        ]
      }
    ),
    children
  ] });
});

// src/visualization/charts/StockChart/component.tsx
import { memo as memo49, useEffect as useEffect3, useRef as useRef2, useState as useState17 } from "react";
import { jsx as jsx51, jsxs as jsxs50 } from "react/jsx-runtime";
var chartsModule = null;
var getTimeframeDays = (tf) => {
  switch (tf) {
    case "1D":
      return 1;
    case "1W":
      return 7;
    case "1M":
      return 30;
    case "3M":
      return 90;
    case "1Y":
      return 365;
    case "5Y":
      return 365 * 5;
    case "10Y":
      return 365 * 10;
    default:
      return 0;
  }
};
var filterDataByTimeframe = (data, timeframe) => {
  if (!timeframe || timeframe === "ALL" || !data.length) return data;
  const days = getTimeframeDays(timeframe);
  const cutoff = /* @__PURE__ */ new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  if (!cutoffStr) return data;
  return data.filter((d) => d.time >= cutoffStr);
};
var StockChart = memo49(function StockChart2({
  element
}) {
  const props = element.props;
  const primarySeries = props.series?.[0];
  const symbol = primarySeries?.symbol || "Unknown";
  const initialData = primarySeries?.data || [];
  const height = props.height ?? 400;
  const upColor = "#22c55e";
  const downColor = "#ef4444";
  const containerRef = useRef2(null);
  const chartRef = useRef2(null);
  const seriesRef = useRef2(null);
  const [timeframe, setTimeframe] = useState17(
    props.timeframe || "3M"
  );
  const filteredData = filterDataByTimeframe(initialData, timeframe);
  useEffect3(() => {
    if (!chartsModule) {
      import("lightweight-charts").then((mod) => {
        chartsModule = mod;
        initChart();
      });
    } else {
      initChart();
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, []);
  useEffect3(() => {
    if (seriesRef.current && filteredData.length > 0) {
      seriesRef.current.setData(filteredData);
      if (chartRef.current) {
        chartRef.current.timeScale().fitContent();
      }
    }
  }, [filteredData]);
  useEffect3(() => {
    const handleResize = () => {
      if (chartRef.current && containerRef.current) {
        chartRef.current.applyOptions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const initChart = () => {
    if (!containerRef.current || !chartsModule) return;
    if (chartRef.current) {
      chartRef.current.remove();
    }
    const { createChart, CandlestickSeries } = chartsModule;
    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      layout: {
        background: { type: "solid", color: "transparent" },
        textColor: "#a1a1aa"
        // muted-foreground
      },
      grid: {
        vertLines: { color: "#27272a" },
        // border
        horzLines: { color: "#27272a" }
        // border
      },
      timeScale: {
        borderColor: "#27272a",
        timeVisible: true
      },
      rightPriceScale: {
        borderColor: "#27272a"
      },
      crosshair: {
        vertLine: {
          color: "#71717a",
          labelBackgroundColor: "#71717a"
        },
        horzLine: {
          color: "#71717a",
          labelBackgroundColor: "#71717a"
        }
      }
    });
    const series = chart.addSeries(CandlestickSeries, {
      upColor,
      downColor,
      borderVisible: false,
      wickUpColor: upColor,
      wickDownColor: downColor
    });
    series.setData(filteredData);
    chart.timeScale().fitContent();
    chartRef.current = chart;
    seriesRef.current = series;
  };
  const timeframes = ["1D", "1W", "1M", "3M", "1Y", "5Y", "ALL"];
  return /* @__PURE__ */ jsxs50("div", { className: "flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 glass-panel bg-card/80 backdrop-blur-md border border-border/50 rounded-lg sm:rounded-xl shadow-lg", children: [
    /* @__PURE__ */ jsxs50("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2", children: [
      /* @__PURE__ */ jsxs50("h3", { className: "m-0 text-xs sm:text-sm font-semibold text-foreground", children: [
        symbol,
        " Stock Price"
      ] }),
      /* @__PURE__ */ jsx51("div", { className: "flex gap-0.5 sm:gap-1 bg-muted/20 p-0.5 sm:p-1 rounded-md overflow-x-auto touch-pan-x w-full sm:w-auto", children: timeframes.map((tf) => /* @__PURE__ */ jsx51(
        "button",
        {
          onClick: () => setTimeframe(tf),
          className: cn2(
            "px-2 sm:px-2.5 py-1 sm:py-1.5 text-[0.625rem] sm:text-xs font-medium rounded transition-all touch-manipulation min-h-[1.75rem] sm:min-h-0 flex-shrink-0",
            timeframe === tf ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          ),
          children: tf
        },
        tf
      )) })
    ] }),
    /* @__PURE__ */ jsxs50(
      "div",
      {
        className: "relative w-full overflow-hidden rounded bg-black/5",
        style: { height: `${Math.max(height * 0.7, 200)}px` },
        children: [
          /* @__PURE__ */ jsx51("div", { ref: containerRef, className: "w-full h-full" }),
          !filteredData.length && /* @__PURE__ */ jsx51("div", { className: "absolute inset-0 flex items-center justify-center text-muted-foreground text-xs sm:text-sm", children: "No data available for this timeframe" })
        ]
      }
    )
  ] });
});

// src/visualization/graphs/Graph/component.tsx
import { memo as memo52, useCallback as useCallback14, useEffect as useEffect4, useMemo as useMemo24, useRef as useRef3, useState as useState18 } from "react";
import { useSelection } from "@onegenui/react";

// src/visualization/graphs/Graph/components/types.ts
var MAG = (v) => Math.sqrt(v.x * v.x + v.y * v.y);
var SUB = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
var ADD = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
var MUL = (v, s) => ({ x: v.x * s, y: v.y * s });
var NORM = (v) => {
  const m = MAG(v);
  return m === 0 ? { x: 0, y: 0 } : { x: v.x / m, y: v.y / m };
};
function getIntersection(p1, p2, r2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return {
    x: p2.x - dx / len * r2,
    y: p2.y - dy / len * r2
  };
}
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
var PALETTE = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4"
];
function colorForGroup(group) {
  if (!group) return "var(--primary)";
  const idx = Math.abs(hashString(group)) % PALETTE.length;
  return PALETTE[idx] ?? "var(--primary)";
}
var DEFAULT_H = 400;
var REPULSION = 800;
var SPRING_LEN = 120;
var SPRING_K = 0.05;
var DAMPING = 0.85;
var CENTER_PULL = 0.02;
var DT = 0.1;
var MAX_ITERATIONS = 300;

// src/visualization/graphs/Graph/components/edges-renderer.tsx
import { memo as memo50 } from "react";
import { Fragment as Fragment5, jsx as jsx52 } from "react/jsx-runtime";
var EdgesRenderer = memo50(function EdgesRenderer2({
  edges,
  nodeStates
}) {
  return /* @__PURE__ */ jsx52(Fragment5, { children: edges.map((e, i) => {
    const u = nodeStates.get(e.source);
    const v = nodeStates.get(e.target);
    if (!u || !v) return null;
    const targetRadius = v.size + 4;
    const end = getIntersection(u.pos, v.pos, targetRadius);
    return /* @__PURE__ */ jsx52("g", { children: /* @__PURE__ */ jsx52(
      "line",
      {
        x1: u.pos.x,
        y1: u.pos.y,
        x2: end.x,
        y2: end.y,
        stroke: "var(--border)",
        strokeWidth: 2,
        opacity: 0.6,
        markerEnd: "url(#arrow)"
      }
    ) }, `${e.source}-${e.target}-${i}`);
  }) });
});

// src/visualization/graphs/Graph/components/nodes-renderer.tsx
import { memo as memo51 } from "react";
import { Fragment as Fragment6, jsx as jsx53, jsxs as jsxs51 } from "react/jsx-runtime";
var NodesRenderer = memo51(function NodesRenderer2({
  nodes,
  nodeStates,
  elementKey,
  isSelected,
  toggleSelection,
  onNodeDragStart
}) {
  return /* @__PURE__ */ jsx53(Fragment6, { children: nodes.map((n) => {
    const s = nodeStates.get(n.id);
    if (!s) return null;
    const selected = isSelected(elementKey, n.id);
    const color = n.color || colorForGroup(n.group);
    return /* @__PURE__ */ jsxs51(
      "g",
      {
        transform: `translate(${s.pos.x}, ${s.pos.y})`,
        onPointerDown: (e) => {
          e.stopPropagation();
          onNodeDragStart(n.id, e);
        },
        onClick: (e) => {
          e.stopPropagation();
          toggleSelection(elementKey, n.id);
        },
        className: "cursor-grab active:cursor-grabbing",
        children: [
          /* @__PURE__ */ jsx53(
            "circle",
            {
              r: s.size,
              fill: "var(--background)",
              stroke: selected ? "var(--primary)" : color,
              strokeWidth: selected ? 3 : 2,
              className: "transition-[stroke-width] duration-200"
            }
          ),
          /* @__PURE__ */ jsx53("circle", { r: s.size, fill: color, opacity: selected ? 0.2 : 0.1 }),
          /* @__PURE__ */ jsx53(
            "foreignObject",
            {
              x: -s.size * 1.5,
              y: -10,
              width: s.size * 3,
              height: 30,
              className: "pointer-events-none overflow-visible",
              children: /* @__PURE__ */ jsx53("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsx53("span", { className: "px-1.5 py-0.5 rounded-md text-xs font-medium text-black border border-black/10 whitespace-nowrap shadow-sm bg-white/85", children: n.label }) })
            }
          )
        ]
      },
      n.id
    );
  }) });
});

// src/visualization/graphs/Graph/component.tsx
import { jsx as jsx54, jsxs as jsxs52 } from "react/jsx-runtime";
var Graph = memo52(function Graph2({
  element,
  children
}) {
  const {
    title,
    nodes: propsNodes,
    edges: propsEdges,
    height
  } = element.props;
  const nodes = useMemo24(
    () => (propsNodes || []).filter((n) => !!n?.id),
    [propsNodes]
  );
  const edges = useMemo24(
    () => (propsEdges || []).filter((e) => !!e.source && !!e.target),
    [propsEdges]
  );
  const containerRef = useRef3(null);
  const [dimensions, setDimensions] = useState18({ w: 800, h: DEFAULT_H });
  const nodeStates = useRef3(/* @__PURE__ */ new Map());
  const rafRef = useRef3(void 0);
  const [bump, setBump] = useState18(0);
  const iterationCount = useRef3(0);
  const { isSelected, toggleSelection } = useSelection();
  const [pan, setPan] = useState18({ x: 0, y: 0 });
  const [zoom, setZoom] = useState18(1);
  const isDragging = useRef3(false);
  const dragNodeId = useRef3(null);
  const lastMousePos = useRef3({ x: 0, y: 0 });
  useEffect4(() => {
    const w = containerRef.current?.clientWidth || 800;
    const h = Math.max(240, height ?? DEFAULT_H);
    setDimensions({ w, h });
    const map = /* @__PURE__ */ new Map();
    const count = nodes.length;
    nodes.forEach((n, i) => {
      const angle = i / count * Math.PI * 2;
      const radius = count * 10;
      const baseSize = 20;
      const labelFactor = (n.label?.length || 0) * 2;
      const size = Math.max(
        28,
        Math.min(60, baseSize + (n.value || 0) + labelFactor * 0.3)
      );
      map.set(n.id, {
        pos: {
          x: w / 2 + Math.cos(angle) * radius,
          y: h / 2 + Math.sin(angle) * radius
        },
        vel: { x: 0, y: 0 },
        acc: { x: 0, y: 0 },
        mass: 1,
        size
      });
    });
    nodeStates.current = map;
    iterationCount.current = 0;
    setBump((b) => b + 1);
  }, [nodes, height]);
  useEffect4(() => {
    const center = { x: dimensions.w / 2, y: dimensions.h / 2 };
    const step = () => {
      if (iterationCount.current > MAX_ITERATIONS && !isDragging.current) {
        return;
      }
      const st = nodeStates.current;
      const nodeIds = Array.from(st.keys());
      for (let i = 0; i < nodeIds.length; i++) {
        const nodeIdI = nodeIds[i];
        if (!nodeIdI) continue;
        const u = st.get(nodeIdI);
        u.acc = { x: 0, y: 0 };
        const toCenter = SUB(center, u.pos);
        u.acc = ADD(u.acc, MUL(toCenter, CENTER_PULL));
        for (let j = i + 1; j < nodeIds.length; j++) {
          const nodeIdJ = nodeIds[j];
          if (!nodeIdJ) continue;
          const v = st.get(nodeIdJ);
          const delta = SUB(u.pos, v.pos);
          const dist = MAG(delta) || 0.1;
          if (dist < 500) {
            const force = REPULSION * 5 / (dist * dist);
            const dir = NORM(delta);
            u.acc = ADD(u.acc, MUL(dir, force));
            v.acc = ADD(v.acc, MUL(dir, -force));
          }
          const minDist = u.size + v.size + 10;
          if (dist < minDist) {
            const overlap = minDist - dist;
            const dir = NORM(delta);
            const separate = MUL(dir, overlap * 0.5);
            u.pos = ADD(u.pos, separate);
            v.pos = SUB(v.pos, separate);
          }
        }
      }
      edges.forEach((e) => {
        const u = st.get(e.source);
        const v = st.get(e.target);
        if (u && v) {
          const delta = SUB(v.pos, u.pos);
          const dist = MAG(delta) || 1;
          const force = (dist - SPRING_LEN) * SPRING_K;
          const dir = NORM(delta);
          u.acc = ADD(u.acc, MUL(dir, force));
          v.acc = ADD(v.acc, MUL(dir, -force));
        }
      });
      st.forEach((n, id) => {
        if (id !== dragNodeId.current) {
          n.vel = ADD(n.vel, MUL(n.acc, DT));
          n.vel = MUL(n.vel, DAMPING);
          n.pos = ADD(n.pos, MUL(n.vel, DT));
        }
      });
      iterationCount.current++;
      setBump((b) => b + 1);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [edges, dimensions, nodes]);
  const handleWheel = useCallback14((e) => {
    e.stopPropagation();
    const d = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom((z) => Math.max(0.1, Math.min(5, z * d)));
  }, []);
  const handlePointerDown = useCallback14((e) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);
  const handlePointerMove = useCallback14(
    (e) => {
      if (!isDragging.current) return;
      e.stopPropagation();
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      if (dragNodeId.current) {
        const st = nodeStates.current.get(dragNodeId.current);
        if (st) {
          st.pos.x += dx / zoom;
          st.pos.y += dy / zoom;
          st.vel = { x: 0, y: 0 };
          iterationCount.current = 0;
        }
      } else {
        setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
      }
    },
    [zoom]
  );
  const handlePointerUp = useCallback14((e) => {
    e.stopPropagation();
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDragging.current = false;
    dragNodeId.current = null;
  }, []);
  const handleNodeDragStart = useCallback14(
    (nodeId, e) => {
      isDragging.current = true;
      dragNodeId.current = nodeId;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    },
    []
  );
  const renderedEdges = useMemo24(
    () => /* @__PURE__ */ jsx54(EdgesRenderer, { edges, nodeStates: nodeStates.current }),
    [edges, bump]
  );
  const renderedNodes = useMemo24(
    () => /* @__PURE__ */ jsx54(
      NodesRenderer,
      {
        nodes,
        nodeStates: nodeStates.current,
        elementKey: element.key,
        isSelected,
        toggleSelection,
        onNodeDragStart: handleNodeDragStart
      }
    ),
    [
      nodes,
      bump,
      isSelected,
      element.key,
      toggleSelection,
      handleNodeDragStart
    ]
  );
  return /* @__PURE__ */ jsxs52(
    "div",
    {
      ref: containerRef,
      style: {
        height: `${Math.max(200, (height ?? DEFAULT_H) * 0.8)}px`
      },
      className: cn2(
        "relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-border/50 glass-panel bg-card/80 backdrop-blur-md touch-none select-none shadow-lg"
      ),
      onWheel: handleWheel,
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      children: [
        title && /* @__PURE__ */ jsx54("div", { className: "absolute top-2 sm:top-4 left-2 sm:left-4 z-10 bg-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-border font-semibold text-xs sm:text-sm shadow-sm", children: title }),
        /* @__PURE__ */ jsxs52("div", { className: "absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 text-[0.5rem] sm:text-[0.625rem] text-muted-foreground z-10", children: [
          "Zoom: ",
          Math.round(zoom * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsxs52(
          "svg",
          {
            width: "100%",
            height: "100%",
            viewBox: `0 0 ${dimensions.w} ${dimensions.h}`,
            className: "block",
            children: [
              /* @__PURE__ */ jsx54("defs", { children: /* @__PURE__ */ jsx54(
                "marker",
                {
                  id: "arrow",
                  viewBox: "0 0 10 10",
                  refX: "9",
                  refY: "5",
                  markerWidth: "6",
                  markerHeight: "6",
                  orient: "auto",
                  children: /* @__PURE__ */ jsx54("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "var(--muted-foreground)" })
                }
              ) }),
              /* @__PURE__ */ jsxs52("g", { transform: `translate(${pan.x}, ${pan.y}) scale(${zoom})`, children: [
                renderedEdges,
                renderedNodes
              ] })
            ]
          }
        ),
        children
      ]
    }
  );
});

// src/visualization/graphs/MindMap/component.tsx
import { memo as memo54, useMemo as useMemo25 } from "react";

// src/visualization/graphs/MindMap/components/types.ts
var DEPTH_COLORS = [
  { bg: "rgba(59, 130, 246, 0.1)", border: "#3b82f6", text: "#60a5fa" },
  { bg: "rgba(168, 85, 247, 0.1)", border: "#a855f7", text: "#c084fc" },
  { bg: "rgba(34, 197, 94, 0.1)", border: "#22c55e", text: "#4ade80" },
  { bg: "rgba(249, 115, 22, 0.1)", border: "#f97316", text: "#fb923c" },
  { bg: "rgba(236, 72, 153, 0.1)", border: "#ec4899", text: "#f472b6" },
  { bg: "rgba(20, 184, 166, 0.1)", border: "#14b8a6", text: "#2dd4bf" }
];
function getColorForDepth(depth) {
  return DEPTH_COLORS[depth % DEPTH_COLORS.length];
}
function buildTreeFromFlat(nodes) {
  if (!Array.isArray(nodes)) return [];
  const nodeMap = /* @__PURE__ */ new Map();
  const roots = [];
  nodes.forEach((n) => {
    nodeMap.set(n.id, { ...n, children: n.children ? [...n.children] : [] });
  });
  nodes.forEach((n) => {
    const node = nodeMap.get(n.id);
    const parentId = n.parentId || n.parent;
    if (parentId && nodeMap.has(parentId)) {
      const parent = nodeMap.get(parentId);
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots.length > 0 ? roots : nodes;
}

// src/visualization/graphs/MindMap/components/node-renderer.tsx
import { memo as memo53, useState as useState19, useCallback as useCallback15, useRef as useRef4, useLayoutEffect } from "react";
import { jsx as jsx55, jsxs as jsxs53 } from "react/jsx-runtime";
var NodeRenderer = memo53(function NodeRenderer2({
  node,
  depth,
  isHorizontal,
  expandedByDefault,
  elementKey
}) {
  const [expanded, setExpanded] = useState19(expandedByDefault);
  const hasChildren = node.children && node.children.length > 0;
  const defaultColors = getColorForDepth(depth);
  const colors = node.color ? { bg: `${node.color}15`, border: node.color, text: node.color } : defaultColors;
  const nodeRef = useRef4(null);
  const childrenRef = useRef4(null);
  const [paths, setPaths] = useState19([]);
  const updatePaths = useCallback15(() => {
    if (!expanded || !hasChildren || !nodeRef.current || !childrenRef.current) {
      setPaths([]);
      return;
    }
    const parentRect = nodeRef.current.getBoundingClientRect();
    const containerRect = childrenRef.current.getBoundingClientRect();
    const childrenNodes = Array.from(
      childrenRef.current.children
    );
    const newPaths = [];
    childrenNodes.forEach((child) => {
      const anchor = child.querySelector("[data-node-anchor]");
      if (!anchor) return;
      const anchorRect = anchor.getBoundingClientRect();
      const startY = parentRect.top + parentRect.height / 2 - containerRect.top;
      const endY = anchorRect.top + anchorRect.height / 2 - containerRect.top;
      const width = 64;
      const p1 = { x: 0, y: startY };
      const p2 = { x: width, y: endY };
      const c1 = { x: width * 0.4, y: startY };
      const c2 = { x: width * 0.6, y: endY };
      newPaths.push(
        `M ${p1.x} ${p1.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`
      );
    });
    setPaths(newPaths);
  }, [expanded, hasChildren]);
  useLayoutEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    return () => window.removeEventListener("resize", updatePaths);
  }, [updatePaths]);
  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxs53(
    "div",
    {
      className: cn2(
        "flex relative",
        isHorizontal ? "flex-row items-center" : "flex-col items-center"
      ),
      children: [
        /* @__PURE__ */ jsxs53("div", { ref: nodeRef, className: "relative group z-10 flex items-center", children: [
          /* @__PURE__ */ jsxs53(
            "div",
            {
              "data-node-anchor": true,
              "data-selectable-item": true,
              "data-element-key": elementKey,
              "data-item-id": node.id,
              className: cn2(
                "relative border rounded-xl transition-all duration-300 shadow-sm",
                "backdrop-blur-md bg-card/90 border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5",
                "flex items-center gap-3 p-3 min-w-[140px] max-w-[240px]",
                depth === 0 ? "border-primary/30 bg-primary/5 ring-1 ring-primary/20" : ""
              ),
              style: {
                borderColor: colors.border,
                backgroundColor: depth === 0 ? void 0 : colors.bg
              },
              children: [
                node.icon && /* @__PURE__ */ jsx55("span", { className: "text-xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-background/50 border border-white/10", children: node.icon }),
                /* @__PURE__ */ jsxs53("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx55(
                    "div",
                    {
                      className: cn2(
                        "font-semibold leading-tight truncate",
                        depth === 0 ? "text-[15px]" : "text-[13px]"
                      ),
                      style: { color: depth === 0 ? void 0 : colors.text },
                      children: node.label
                    }
                  ),
                  node.description && /* @__PURE__ */ jsx55("div", { className: "text-[11px] text-muted-foreground mt-1 leading-snug line-clamp-2", children: node.description })
                ] })
              ]
            }
          ),
          hasChildren && /* @__PURE__ */ jsx55(
            "button",
            {
              onClick: toggleExpand,
              className: cn2(
                "ml-[-10px] z-20 w-6 h-6 rounded-full flex items-center justify-center",
                "bg-background border border-border shadow-sm hover:scale-110 transition-transform",
                "text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
              ),
              style: {
                marginLeft: -12,
                marginRight: -12,
                position: "relative",
                left: 12
              },
              children: expanded ? "\u2212" : "+"
            }
          )
        ] }),
        hasChildren && expanded && /* @__PURE__ */ jsxs53("div", { className: "flex flex-row items-stretch", children: [
          isHorizontal && /* @__PURE__ */ jsx55("div", { className: "w-16 relative shrink-0", children: /* @__PURE__ */ jsx55("svg", { className: "absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none", children: paths.map((d, i) => /* @__PURE__ */ jsx55(
            "path",
            {
              d,
              fill: "none",
              stroke: "hsl(var(--border))",
              strokeWidth: "1.5",
              opacity: "0.5",
              className: "transition-all duration-500"
            },
            i
          )) }) }),
          /* @__PURE__ */ jsx55(
            "div",
            {
              ref: childrenRef,
              className: cn2(
                "flex",
                isHorizontal ? "flex-col gap-4 py-2" : "flex-row gap-4"
              ),
              children: node.children.map((child) => /* @__PURE__ */ jsx55(
                NodeRenderer2,
                {
                  node: child,
                  depth: depth + 1,
                  isHorizontal,
                  expandedByDefault,
                  elementKey
                },
                child.id
              ))
            }
          )
        ] })
      ]
    }
  );
});

// src/visualization/graphs/MindMap/component.tsx
import { jsx as jsx56, jsxs as jsxs54 } from "react/jsx-runtime";
var MindMap = memo54(function MindMap2({
  element,
  children
}) {
  const { title, nodes, layout, expandedByDefault } = element.props;
  const isHorizontal = layout !== "vertical";
  const defaultExpanded = expandedByDefault !== false;
  const rootNodes = useMemo25(() => {
    if (!nodes || !Array.isArray(nodes)) return [];
    return buildTreeFromFlat(nodes);
  }, [nodes]);
  if (!rootNodes.length) {
    return /* @__PURE__ */ jsx56("div", { className: "p-4 sm:p-8 text-center text-muted-foreground bg-muted/20 rounded-lg sm:rounded-xl border border-dashed border-border text-sm", children: "No mind map data" });
  }
  return /* @__PURE__ */ jsxs54("div", { className: "w-full overflow-hidden", children: [
    title && /* @__PURE__ */ jsx56("h3", { className: "mb-2 sm:mb-4 text-base sm:text-lg font-semibold text-foreground flex items-center gap-2", children: title }),
    /* @__PURE__ */ jsx56(
      "div",
      {
        className: cn2(
          "flex p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 lg:gap-12 overflow-auto glass-subtle rounded-lg sm:rounded-2xl min-h-[250px] sm:min-h-[350px] lg:min-h-[400px] touch-pan-x touch-pan-y",
          isHorizontal ? "flex-col" : "flex-row"
        ),
        children: rootNodes.map((node) => /* @__PURE__ */ jsx56(
          NodeRenderer,
          {
            node,
            depth: 0,
            isHorizontal,
            expandedByDefault: defaultExpanded,
            elementKey: element.key
          },
          node.id
        ))
      }
    ),
    children
  ] });
});

// src/visualization/graphs/Gantt/component.tsx
import { memo as memo55 } from "react";
import { jsx as jsx57, jsxs as jsxs55 } from "react/jsx-runtime";
var Gantt = memo55(function Gantt2({
  element,
  children
}) {
  const { title, tasks: initialTasks } = element.props;
  const tasks = initialTasks || [];
  if (tasks.length === 0) return null;
  const dates = tasks.flatMap((t) => [new Date(t.start), new Date(t.end)]).sort((a, b) => a.getTime() - b.getTime());
  const minDate = dates[0];
  const maxDate = dates[dates.length - 1];
  if (!minDate || !maxDate) return null;
  const totalDuration = maxDate.getTime() - minDate.getTime();
  const getLeft = (dateStr) => {
    if (!minDate) return 0;
    const d = new Date(dateStr);
    return (d.getTime() - minDate.getTime()) / totalDuration * 100;
  };
  const getWidth = (startStr, endStr) => {
    const s = new Date(startStr);
    const e = new Date(endStr);
    return (e.getTime() - s.getTime()) / totalDuration * 100;
  };
  const formatDate3 = (d) => new Date(d).toLocaleDateString(void 0, {
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxs55("div", { className: "glass-panel bg-card/80 backdrop-blur-md border border-border/50 rounded-lg sm:rounded-xl p-3 sm:p-4 overflow-hidden shadow-lg", children: [
    title && /* @__PURE__ */ jsx57("h3", { className: "mb-3 sm:mb-5 text-base sm:text-lg font-bold text-foreground", children: title }),
    /* @__PURE__ */ jsx57(
      "div",
      {
        className: "relative",
        style: {
          minHeight: `${tasks.length * 36 + 40}px`
        },
        children: /* @__PURE__ */ jsx57("div", { className: "overflow-x-auto pb-2 sm:pb-3 touch-pan-x", children: /* @__PURE__ */ jsxs55("div", { className: "min-w-[400px] sm:min-w-[600px]", children: [
          /* @__PURE__ */ jsxs55("div", { className: "flex justify-between mb-2 sm:mb-3 border-b border-border pb-1.5 sm:pb-2 text-[0.625rem] sm:text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx57("span", { children: tasks[0] ? formatDate3(tasks[0].start) : "" }),
            /* @__PURE__ */ jsx57("span", { children: (() => {
              const lastTask = tasks[tasks.length - 1];
              return lastTask ? formatDate3(lastTask.end) : "";
            })() })
          ] }),
          /* @__PURE__ */ jsx57("div", { className: "flex flex-col gap-2 sm:gap-3", children: tasks.map((task, index) => {
            const paddingLeft = getLeft(task.start);
            const width = getWidth(task.start, task.end);
            const isMilestone = task.type === "milestone" || width === 0;
            const itemId = task.id || `task-${index}`;
            return /* @__PURE__ */ jsxs55(
              "div",
              {
                "data-selectable-item": true,
                "data-element-key": element.key,
                "data-item-id": itemId,
                className: "flex items-center h-6 sm:h-7 rounded px-0.5 sm:px-1 cursor-pointer hover:bg-muted/50 transition-colors touch-manipulation",
                children: [
                  /* @__PURE__ */ jsx57("div", { className: "w-1/4 sm:w-1/5 pr-1.5 sm:pr-3 text-[0.625rem] sm:text-[0.8125rem] font-medium overflow-hidden text-ellipsis whitespace-nowrap text-foreground", children: task.name }),
                  /* @__PURE__ */ jsx57(
                    "div",
                    {
                      className: cn2(
                        "flex-1 relative h-full rounded",
                        isMilestone ? "bg-transparent" : "bg-muted/30"
                      ),
                      children: isMilestone ? /* @__PURE__ */ jsx57(
                        "div",
                        {
                          className: "absolute w-3 h-3 sm:w-4 sm:h-4 z-10 border-2 border-white shadow-sm rotate-45 -translate-x-1/2 origin-left",
                          style: {
                            left: `${paddingLeft}%`,
                            backgroundColor: task.color || "#eab308"
                          },
                          title: `Milestone: ${task.name}`
                        }
                      ) : /* @__PURE__ */ jsxs55(
                        "div",
                        {
                          className: "absolute h-full rounded opacity-90 flex items-center pl-1.5 sm:pl-2 text-white text-[0.5rem] sm:text-[0.625rem] overflow-hidden",
                          style: {
                            left: `${paddingLeft}%`,
                            width: `${width}%`,
                            backgroundColor: task.color || "var(--primary)"
                          },
                          title: `${task.name}: ${task.progress}%`,
                          children: [
                            width > 10 && /* @__PURE__ */ jsxs55("span", { className: "z-[2]", children: [
                              task.progress,
                              "%"
                            ] }),
                            /* @__PURE__ */ jsx57(
                              "div",
                              {
                                className: "absolute left-0 top-0 bottom-0 bg-white opacity-20",
                                style: {
                                  width: `${task.progress}%`
                                }
                              }
                            )
                          ]
                        }
                      )
                    }
                  )
                ]
              },
              itemId
            );
          }) })
        ] }) })
      }
    ),
    children && /* @__PURE__ */ jsx57("div", { className: "mt-4 sm:mt-6 space-y-3 sm:space-y-4", children })
  ] });
});

// src/index.ts
import {
  Card,
  Grid,
  Stack,
  Divider,
  Heading,
  Text,
  CodeBlock,
  Document,
  Badge,
  Alert,
  Empty,
  BrowserAction,
  Button,
  TextField,
  Select,
  DatePicker,
  Metric,
  Table,
  List,
  Timeline,
  SearchResults,
  DriveFile,
  DriveFileList,
  Weather,
  Audio,
  Video as Video3,
  Image,
  Gallery,
  CardDefinition,
  GridDefinition,
  StackDefinition,
  DividerDefinition,
  HeadingDefinition,
  TextDefinition,
  CodeBlockDefinition,
  DocumentDefinition,
  BadgeDefinition,
  AlertDefinition,
  EmptyDefinition,
  BrowserActionDefinition,
  ButtonDefinition,
  TextFieldDefinition,
  SelectDefinition,
  DatePickerDefinition,
  MetricDefinition,
  TableDefinition,
  ListDefinition,
  TimelineDefinition,
  SearchResultsDefinition,
  DriveFileDefinition,
  DriveFileListDefinition,
  WeatherDefinition,
  AudioDefinition,
  VideoDefinition,
  ImageDefinition,
  GalleryDefinition
} from "@onegenui/ui";

// src/communication/Message/component.tsx
import { memo as memo56, useState as useState20, useEffect as useEffect5 } from "react";
import { Send, User as User4 } from "lucide-react";
import { jsx as jsx58, jsxs as jsxs56 } from "react/jsx-runtime";
var Message = memo56(function Message2({
  element,
  children
}) {
  const {
    title,
    messages: initialMessages,
    participants = [],
    activeAgents = [],
    lock = false
  } = element.props;
  const [messages, setMessages] = useState20(
    initialMessages || []
  );
  useEffect5(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);
  const [replyText, setReplyText] = useState20("");
  const handleSendReply = () => {
    if (lock || !replyText.trim()) return;
    const newMessage = {
      id: crypto.randomUUID(),
      sender: "Me",
      content: replyText,
      timestamp: "Just now",
      isOwn: true,
      status: "read"
    };
    setMessages([...messages, newMessage]);
    setReplyText("");
  };
  const getParticipant = (id) => participants.find((p) => p.id === id);
  return /* @__PURE__ */ jsxs56("div", { className: "flex flex-col h-full max-h-[500px] sm:max-h-[600px] overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 glass-panel bg-card/80 backdrop-blur-md shadow-lg", children: [
    title && /* @__PURE__ */ jsxs56("div", { className: "flex items-center justify-between border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/20 gap-2", children: [
      /* @__PURE__ */ jsx58("div", { className: "font-semibold text-sm sm:text-base truncate", children: title }),
      participants.length > 0 && /* @__PURE__ */ jsxs56("div", { className: "flex -space-x-1.5 sm:-space-x-2 shrink-0", children: [
        participants.slice(0, 5).map((p) => /* @__PURE__ */ jsx58(
          "div",
          {
            className: "relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-background text-[0.5rem] sm:text-[0.625rem] font-medium text-white shadow-sm ring-1 ring-black/5 bg-[var(--avatar-bg,var(--primary))]",
            style: {
              "--avatar-bg": p.color
            },
            title: `${p.name} (${p.role})`,
            children: p.avatar ? /* @__PURE__ */ jsx58(
              "img",
              {
                src: p.avatar,
                alt: p.name,
                className: "h-full w-full rounded-full object-cover"
              }
            ) : /* @__PURE__ */ jsx58("span", { children: p.name[0] })
          },
          p.id
        )),
        participants.length > 5 && /* @__PURE__ */ jsxs56("div", { className: "relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-background text-[0.5rem] sm:text-[0.625rem] font-medium text-white shadow-sm bg-zinc-600", children: [
          "+",
          participants.length - 5
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs56("div", { className: "flex flex-1 flex-col gap-3 sm:gap-4 overflow-y-auto p-3 sm:p-4 bg-muted/5 min-h-0 touch-pan-y", children: [
      messages.map((msg) => {
        const participant = getParticipant(msg.participantId);
        const senderName = participant ? participant.name : msg.sender;
        const role = participant?.role;
        return /* @__PURE__ */ jsxs56(
          "div",
          {
            "data-selectable-item": true,
            "data-element-key": element.key,
            "data-item-id": msg.id,
            className: cn(
              "flex flex-col max-w-[90%] sm:max-w-[85%] cursor-pointer group transition-all",
              msg.isOwn ? "self-end items-end" : "self-start items-start"
            ),
            children: [
              /* @__PURE__ */ jsxs56(
                "div",
                {
                  className: cn(
                    "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-[0.625rem] sm:text-xs text-muted-foreground",
                    msg.isOwn ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ jsx58("span", { className: "font-semibold text-foreground truncate max-w-[8rem] sm:max-w-none", children: senderName }),
                    role && /* @__PURE__ */ jsx58("span", { className: "px-1 sm:px-1.5 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] bg-secondary text-secondary-foreground border border-border/50 hidden sm:inline", children: role }),
                    /* @__PURE__ */ jsx58("span", { className: "opacity-70 text-[0.5rem] sm:text-[0.625rem]", children: msg.timestamp })
                  ]
                }
              ),
              /* @__PURE__ */ jsx58(
                "div",
                {
                  className: cn(
                    "relative px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm shadow-sm transition-all duration-200 border",
                    msg.isOwn ? "rounded-2xl rounded-tr-md bg-primary text-primary-foreground border-primary/20 bg-gradient-to-br from-blue-600 to-indigo-600" : "rounded-2xl rounded-tl-md bg-card text-card-foreground border-border break-words",
                    !msg.isOwn && participant?.color && "border-l-[3px] border-l-[var(--msg-border)]"
                  ),
                  style: {
                    "--msg-border": participant?.color
                  },
                  children: msg.content
                }
              )
            ]
          },
          msg.id
        );
      }),
      activeAgents.length > 0 && /* @__PURE__ */ jsx58("div", { className: "flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2 px-1 sm:px-2", children: activeAgents.map((agentId) => {
        const p = getParticipant(agentId);
        if (!p) return null;
        return /* @__PURE__ */ jsxs56(
          "div",
          {
            className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs text-muted-foreground animate-pulse",
            children: [
              /* @__PURE__ */ jsx58(
                "div",
                {
                  className: "h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[var(--agent-color,currentColor)]",
                  style: {
                    "--agent-color": p.color
                  }
                }
              ),
              /* @__PURE__ */ jsxs56("span", { children: [
                p.name,
                " is typing..."
              ] })
            ]
          },
          agentId
        );
      }) }),
      messages.length === 0 && activeAgents.length === 0 && /* @__PURE__ */ jsxs56("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground opacity-50 space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ jsx58("div", { className: "p-3 sm:p-4 rounded-full bg-muted/50", children: /* @__PURE__ */ jsx58(User4, { className: "h-6 w-6 sm:h-8 sm:w-8 opacity-50" }) }),
        /* @__PURE__ */ jsx58("p", { className: "text-xs sm:text-sm", children: "No messages yet" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs56("div", { className: "p-2.5 sm:p-4 border-t border-border bg-background flex gap-2 items-end safe-area-bottom", children: [
      /* @__PURE__ */ jsx58(
        "textarea",
        {
          "data-interactive": true,
          value: replyText,
          onChange: (e) => setReplyText(e.target.value),
          placeholder: lock ? "Conversation locked" : "Type a message...",
          disabled: lock,
          className: cn(
            "flex-1 min-h-[2.75rem] max-h-[6rem] sm:max-h-[7.5rem] rounded-lg border border-input bg-transparent px-3 py-2 sm:py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none",
            lock && "bg-muted text-muted-foreground"
          ),
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendReply();
            }
          }
        }
      ),
      /* @__PURE__ */ jsx58(
        "button",
        {
          "data-interactive": true,
          onClick: handleSendReply,
          disabled: lock || !replyText.trim(),
          className: cn(
            "inline-flex items-center justify-center shrink-0 rounded-lg h-[2.75rem] w-[2.75rem] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
            !replyText.trim() ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          ),
          children: /* @__PURE__ */ jsx58(Send, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
        }
      )
    ] }),
    children
  ] });
});

// src/communication/Email/component.tsx
import { memo as memo59, useState as useState22, useEffect as useEffect7, useRef as useRef5, useCallback as useCallback16 } from "react";
import { createLogger } from "@onegenui/utils";
import { PenSquare, Mail } from "lucide-react";

// src/communication/Email/components/unread-dot.tsx
import { jsx as jsx59 } from "react/jsx-runtime";
function UnreadDot() {
  return /* @__PURE__ */ jsx59("div", { className: "w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(234,67,53,0.5)] bg-gradient-to-br from-red-500 to-red-700" });
}

// src/communication/Email/components/compose-modal.tsx
import { useState as useState21, useEffect as useEffect6 } from "react";
import { Send as Send2, X as X2, Paperclip } from "lucide-react";

// src/communication/Email/components/types.ts
function getPreview(body, maxLength = 120) {
  const cleaned = body.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength) + "...";
}
function getInitials(name) {
  if (!name) return "?";
  const match = name.match(/^([^<]+)/);
  const displayName = match?.[1]?.trim() ?? name;
  return displayName.split(" ").slice(0, 2).map((n) => n[0] || "").join("").toUpperCase() || "?";
}
function extractEmailAddress(from) {
  const match = from.match(/<([^>]+)>/);
  return match?.[1] ?? from;
}
function formatDate2(dateStr) {
  try {
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
    if (diffDays === 0) {
      return date.toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit"
      });
    } else if (diffDays === 1) {
      return "Ieri";
    } else if (diffDays < 7) {
      return date.toLocaleDateString("it-IT", { weekday: "short" });
    } else {
      return date.toLocaleDateString("it-IT", {
        day: "numeric",
        month: "short"
      });
    }
  } catch {
    return dateStr;
  }
}

// src/communication/Email/components/compose-modal.tsx
import { jsx as jsx60, jsxs as jsxs57 } from "react/jsx-runtime";
function ComposeModal({
  mode,
  originalEmail,
  onClose,
  onSend
}) {
  const [to, setTo] = useState21("");
  const [cc, setCc] = useState21("");
  const [subject, setSubject] = useState21("");
  const [body, setBody] = useState21("");
  const [sending, setSending] = useState21(false);
  useEffect6(() => {
    if (mode === "reply" && originalEmail) {
      setTo(extractEmailAddress(originalEmail.from));
      setSubject(`Re: ${originalEmail.subject.replace(/^Re:\s*/i, "")}`);
      setBody(
        `

--- Original Message ---
From: ${originalEmail.from}
Date: ${originalEmail.date}
Subject: ${originalEmail.subject}

${originalEmail.body}`
      );
    } else if (mode === "replyAll" && originalEmail) {
      setTo(extractEmailAddress(originalEmail.from));
      setCc(originalEmail.cc || "");
      setSubject(`Re: ${originalEmail.subject.replace(/^Re:\s*/i, "")}`);
      setBody(
        `

--- Original Message ---
From: ${originalEmail.from}
Date: ${originalEmail.date}
Subject: ${originalEmail.subject}

${originalEmail.body}`
      );
    } else if (mode === "forward" && originalEmail) {
      setTo("");
      setSubject(`Fwd: ${originalEmail.subject.replace(/^Fwd:\s*/i, "")}`);
      setBody(
        `

--- Forwarded Message ---
From: ${originalEmail.from}
Date: ${originalEmail.date}
Subject: ${originalEmail.subject}

${originalEmail.body}`
      );
    }
  }, [mode, originalEmail]);
  const handleSend = async () => {
    if (!to.trim()) return;
    setSending(true);
    const draft = {
      to: to.trim(),
      cc: cc.trim() || void 0,
      subject: subject.trim(),
      body: body.trim(),
      inReplyTo: originalEmail?.id,
      threadId: originalEmail?.threadId || void 0
    };
    try {
      await onSend(draft);
      onClose();
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSending(false);
    }
  };
  const modeTitle = {
    new: "Nuovo messaggio",
    reply: "Rispondi",
    replyAll: "Rispondi a tutti",
    forward: "Inoltra",
    none: ""
  }[mode];
  return /* @__PURE__ */ jsx60("div", { className: "absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4", children: /* @__PURE__ */ jsxs57(
    "div",
    {
      className: "flex flex-col w-full sm:max-w-[600px] max-h-[95vh] sm:max-h-[90vh] bg-card border-t sm:border border-border rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs57("div", { className: "flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 border-b border-border bg-muted/20", children: [
          /* @__PURE__ */ jsx60("span", { className: "font-semibold text-sm sm:text-base", children: modeTitle }),
          /* @__PURE__ */ jsx60(
            "button",
            {
              onClick: onClose,
              className: "p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              children: /* @__PURE__ */ jsx60(X2, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs57("div", { className: "flex flex-col gap-2 sm:gap-3 p-3 sm:p-5 flex-1 overflow-y-auto touch-pan-y", children: [
          /* @__PURE__ */ jsxs57("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ jsx60("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "A:" }),
            /* @__PURE__ */ jsx60(
              "input",
              {
                type: "email",
                value: to,
                onChange: (e) => setTo(e.target.value),
                placeholder: "destinatario@email.com",
                className: "flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]",
                autoFocus: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs57("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ jsx60("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "Cc:" }),
            /* @__PURE__ */ jsx60(
              "input",
              {
                type: "email",
                value: cc,
                onChange: (e) => setCc(e.target.value),
                placeholder: "cc@email.com",
                className: "flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs57("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ jsx60("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "Ogg:" }),
            /* @__PURE__ */ jsx60(
              "input",
              {
                type: "text",
                value: subject,
                onChange: (e) => setSubject(e.target.value),
                placeholder: "Oggetto",
                className: "flex-1 bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all min-h-[2.75rem]"
              }
            )
          ] }),
          /* @__PURE__ */ jsx60(
            "textarea",
            {
              value: body,
              onChange: (e) => setBody(e.target.value),
              placeholder: "Scrivi il tuo messaggio...",
              className: "flex-1 min-h-[150px] sm:min-h-[200px] resize-y bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all leading-relaxed font-sans"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs57("div", { className: "flex justify-between items-center px-3 sm:px-5 py-3 sm:py-4 border-t border-border bg-muted/20 safe-area-bottom", children: [
          /* @__PURE__ */ jsx60(
            "button",
            {
              className: "p-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors opacity-50 cursor-pointer touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              title: "Allega file",
              children: /* @__PURE__ */ jsx60(Paperclip, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
            }
          ),
          /* @__PURE__ */ jsxs57(
            "button",
            {
              onClick: handleSend,
              disabled: !to.trim() || sending,
              className: cn(
                "flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]",
                !to.trim() || sending ? "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50" : "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer hover:shadow-blue-500/30"
              ),
              children: [
                /* @__PURE__ */ jsx60(Send2, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
                sending ? "Invio..." : "Invia"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/communication/Email/components/email-list.tsx
import { memo as memo57 } from "react";
import { Star as Star5, Paperclip as Paperclip2 } from "lucide-react";
import { jsx as jsx61, jsxs as jsxs58 } from "react/jsx-runtime";
var EmailList = memo57(function EmailList2({
  emails,
  elementKey,
  hoveredId,
  onSelectEmail,
  onToggleStar,
  onHoverEmail
}) {
  if (emails.length === 0) {
    return /* @__PURE__ */ jsx61("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y", children: /* @__PURE__ */ jsxs58("div", { className: "flex flex-col items-center justify-center py-12 sm:py-16 text-foreground/60 text-center", children: [
      /* @__PURE__ */ jsx61("div", { className: "text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-50", children: "\u{1F4ED}" }),
      /* @__PURE__ */ jsx61("div", { className: "text-base sm:text-lg font-semibold mb-1 text-foreground", children: "Nessuna email" }),
      /* @__PURE__ */ jsx61("div", { className: "text-xs sm:text-sm text-foreground/50", children: "La tua inbox \xE8 vuota" })
    ] }) });
  }
  return /* @__PURE__ */ jsx61("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y", children: emails.map((email) => /* @__PURE__ */ jsx61(
    "div",
    {
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": email.id,
      onClick: () => onSelectEmail(email.id),
      onMouseEnter: () => onHoverEmail(email.id),
      onMouseLeave: () => onHoverEmail(null),
      className: cn(
        "group relative border border-border/50 p-3 sm:p-4 cursor-pointer transition-all duration-200 rounded-lg sm:rounded-xl mb-2 bg-card/80 shadow-sm touch-manipulation",
        hoveredId === email.id ? "bg-card border-primary/30 shadow-md" : !email.read ? "bg-card border-red-500/30" : "bg-card/60"
      ),
      children: /* @__PURE__ */ jsxs58("div", { className: "flex items-start gap-2.5 sm:gap-3.5", children: [
        /* @__PURE__ */ jsx61("div", { className: "w-2 sm:w-2.5 mt-2 flex justify-center shrink-0", children: !email.read && /* @__PURE__ */ jsx61(UnreadDot, {}) }),
        /* @__PURE__ */ jsx61("div", { className: "w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm", children: getInitials(email.from) }),
        /* @__PURE__ */ jsxs58("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs58("div", { className: "flex justify-between items-center mb-0.5 sm:mb-1 gap-2", children: [
            /* @__PURE__ */ jsx61(
              "span",
              {
                className: cn(
                  "text-xs sm:text-sm truncate",
                  email.read ? "font-medium text-foreground/90" : "font-bold text-foreground"
                ),
                children: email.from?.split("<")[0]?.trim() || "Mittente sconosciuto"
              }
            ),
            /* @__PURE__ */ jsxs58("div", { className: "flex items-center gap-1.5 sm:gap-2 shrink-0", children: [
              /* @__PURE__ */ jsx61(
                "button",
                {
                  onClick: (e) => onToggleStar(email.id, e),
                  className: cn(
                    "p-1.5 sm:p-1 rounded-full transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 touch-manipulation min-h-[2rem] min-w-[2rem] sm:min-h-0 sm:min-w-0 flex items-center justify-center",
                    email.starred ? "text-yellow-400 opacity-100" : "text-muted-foreground hover:bg-muted"
                  ),
                  children: /* @__PURE__ */ jsx61(
                    Star5,
                    {
                      className: "w-3.5 h-3.5 sm:w-3.5 sm:h-3.5",
                      fill: email.starred ? "currentColor" : "none"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx61("span", { className: "text-[0.625rem] sm:text-xs text-muted-foreground whitespace-nowrap", children: formatDate2(email.date) })
            ] })
          ] }),
          /* @__PURE__ */ jsx61(
            "div",
            {
              className: cn(
                "text-xs sm:text-sm mb-1 sm:mb-1.5 truncate",
                email.read ? "font-normal text-foreground/80" : "font-semibold text-foreground"
              ),
              children: email.subject || "(Nessun oggetto)"
            }
          ),
          /* @__PURE__ */ jsx61("div", { className: "text-[0.625rem] sm:text-xs text-foreground/50 truncate leading-relaxed", children: getPreview(email.body) }),
          email.attachments && email.attachments.length > 0 && /* @__PURE__ */ jsx61("div", { className: "flex items-center gap-1.5 mt-1.5 sm:mt-2", children: /* @__PURE__ */ jsxs58("div", { className: "bg-muted/50 px-1.5 sm:px-2 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] text-muted-foreground flex items-center gap-1 border border-border/50", children: [
            /* @__PURE__ */ jsx61(Paperclip2, { className: "w-2.5 h-2.5 sm:w-2.5 sm:h-2.5" }),
            /* @__PURE__ */ jsxs58("span", { children: [
              email.attachments.length,
              " allegat",
              email.attachments.length === 1 ? "o" : "i"
            ] })
          ] }) })
        ] })
      ] })
    },
    email.id
  )) });
});

// src/communication/Email/components/email-detail.tsx
import { memo as memo58 } from "react";
import {
  ArrowLeft as ArrowLeft2,
  Archive,
  Trash2 as Trash22,
  Reply,
  ReplyAll,
  Forward,
  Star as Star6,
  Paperclip as Paperclip3
} from "lucide-react";
import { Fragment as Fragment7, jsx as jsx62, jsxs as jsxs59 } from "react/jsx-runtime";
var EmailDetail = memo58(function EmailDetail2({
  email,
  lock,
  onBack,
  onCompose,
  onArchive,
  onDelete,
  onToggleStar
}) {
  return /* @__PURE__ */ jsxs59("div", { className: "flex flex-col flex-1 bg-background/30 overflow-hidden", children: [
    /* @__PURE__ */ jsxs59("div", { className: "flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 border-b border-border bg-muted/10", children: [
      /* @__PURE__ */ jsx62(
        "button",
        {
          onClick: onBack,
          className: "p-2 sm:p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
          title: "Torna alla lista",
          children: /* @__PURE__ */ jsx62(ArrowLeft2, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
        }
      ),
      /* @__PURE__ */ jsx62("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxs59("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: () => onCompose("reply"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
            title: "Rispondi",
            children: /* @__PURE__ */ jsx62(Reply, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: () => onCompose("replyAll"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] hidden sm:flex items-center justify-center",
            title: "Rispondi a tutti",
            children: /* @__PURE__ */ jsx62(ReplyAll, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: () => onCompose("forward"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
            title: "Inoltra",
            children: /* @__PURE__ */ jsx62(Forward, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx62("div", { className: "w-px h-4 sm:h-5 bg-border mx-0.5 sm:mx-1" }),
      /* @__PURE__ */ jsxs59("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: (e) => onArchive(email.id, e),
            disabled: lock,
            className: cn(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
            ),
            title: "Archivia",
            children: /* @__PURE__ */ jsx62(Archive, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: (e) => onDelete(email.id, e),
            disabled: lock,
            className: cn(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:bg-red-500/10 hover:text-red-500 cursor-pointer"
            ),
            title: "Elimina",
            children: /* @__PURE__ */ jsx62(Trash22, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs59("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 touch-pan-y", children: [
      /* @__PURE__ */ jsx62("h1", { className: "text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-foreground leading-tight", children: email.subject || "(Nessun oggetto)" }),
      /* @__PURE__ */ jsxs59("div", { className: "flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border/60", children: [
        /* @__PURE__ */ jsx62("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm shrink-0", children: getInitials(email.from) }),
        /* @__PURE__ */ jsxs59("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs59("div", { className: "flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-1", children: [
            /* @__PURE__ */ jsx62("span", { className: "font-semibold text-sm sm:text-base text-foreground truncate", children: email.from?.split("<")[0]?.trim() || "Mittente sconosciuto" }),
            /* @__PURE__ */ jsx62("span", { className: "text-xs sm:text-sm text-muted-foreground truncate", children: extractEmailAddress(email.from) })
          ] }),
          /* @__PURE__ */ jsxs59("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground flex flex-wrap gap-x-2 gap-y-1 items-center", children: [
            /* @__PURE__ */ jsx62("span", { children: email.date }),
            email.to && /* @__PURE__ */ jsxs59(Fragment7, { children: [
              /* @__PURE__ */ jsx62("span", { className: "w-1 h-1 rounded-full bg-border" }),
              /* @__PURE__ */ jsxs59("span", { className: "truncate", children: [
                "A: ",
                email.to
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx62(
          "button",
          {
            onClick: (e) => onToggleStar(email.id, e),
            className: cn(
              "p-2 rounded-full hover:bg-muted transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center shrink-0",
              email.starred ? "text-yellow-400" : "text-muted-foreground"
            ),
            children: /* @__PURE__ */ jsx62(Star6, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", fill: email.starred ? "currentColor" : "none" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx62("div", { className: "text-sm sm:text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap font-sans", children: email.body || "(Nessun contenuto)" }),
      email.attachments && email.attachments.length > 0 && /* @__PURE__ */ jsxs59("div", { className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60", children: [
        /* @__PURE__ */ jsxs59("div", { className: "text-[0.625rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3", children: [
          email.attachments.length,
          " Allegat",
          email.attachments.length === 1 ? "o" : "i"
        ] }),
        /* @__PURE__ */ jsx62("div", { className: "flex flex-wrap gap-2", children: email.attachments.map((att, i) => /* @__PURE__ */ jsxs59(
          "div",
          {
            className: "group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/30 border border-border hover:border-primary/30 rounded-lg cursor-pointer transition-all hover:bg-muted/60 touch-manipulation",
            children: [
              /* @__PURE__ */ jsx62("div", { className: "w-7 h-7 sm:w-8 sm:h-8 rounded bg-background flex items-center justify-center text-muted-foreground shrink-0", children: /* @__PURE__ */ jsx62(Paperclip3, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) }),
              /* @__PURE__ */ jsxs59("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx62("span", { className: "text-[0.625rem] sm:text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate", children: att.name }),
                att.size && /* @__PURE__ */ jsx62("span", { className: "text-[0.5rem] sm:text-[0.625rem] text-muted-foreground", children: att.size })
              ] })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx62("div", { className: "p-3 sm:p-4 border-t border-border bg-muted/10", children: /* @__PURE__ */ jsxs59(
      "button",
      {
        onClick: () => onCompose("reply"),
        className: "w-full flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-border bg-background hover:bg-muted/50 transition-all text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 group touch-manipulation min-h-[2.75rem]",
        children: [
          /* @__PURE__ */ jsx62(
            Reply,
            {
              className: "w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-primary transition-colors"
            }
          ),
          "Rispondi"
        ]
      }
    ) })
  ] });
});

// src/communication/Email/component.tsx
import { jsx as jsx63, jsxs as jsxs60 } from "react/jsx-runtime";
var log = createLogger({ prefix: "email" });
var Email = memo59(function Email2({
  element,
  children
}) {
  const {
    title,
    description,
    emails: initialEmails,
    lock = false,
    onSendEmail
  } = element.props;
  const isInitialMount = useRef5(true);
  const [localEmails, setLocalEmails] = useState22([]);
  const [selectedEmailId, setSelectedEmailId] = useState22(null);
  const [composeMode, setComposeMode] = useState22("none");
  const [hoveredId, setHoveredId] = useState22(null);
  const emailsKey = JSON.stringify(initialEmails);
  useEffect7(() => {
    const newEmails = initialEmails || [];
    setLocalEmails(newEmails);
    if (newEmails.length === 1 && isInitialMount.current) {
      setSelectedEmailId(newEmails[0]?.id ?? null);
    }
    isInitialMount.current = false;
  }, [emailsKey]);
  const emails = localEmails;
  const selectedEmail = emails.find((e) => e.id === selectedEmailId);
  const handleDelete = useCallback16(
    (id, e) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId]
  );
  const handleArchive = useCallback16(
    (id, e) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId]
  );
  const handleMarkAsRead = useCallback16((id) => {
    setLocalEmails(
      (prev) => prev.map((email) => email.id === id ? { ...email, read: true } : email)
    );
  }, []);
  const handleToggleStar = useCallback16((id, e) => {
    e?.stopPropagation();
    setLocalEmails(
      (prev) => prev.map(
        (email) => email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  }, []);
  const handleSelectEmail = useCallback16(
    (id) => {
      setSelectedEmailId(id);
      handleMarkAsRead(id);
    },
    [handleMarkAsRead]
  );
  const handleSendEmail = useCallback16(
    async (draft) => {
      log.debug("[Email] Sending email:", draft);
      if (onSendEmail) {
        await onSendEmail(draft);
      } else {
        log.debug("[Email] Email sent (simulated):", draft);
      }
    },
    [onSendEmail]
  );
  return /* @__PURE__ */ jsxs60("div", { className: "glass-panel w-full min-h-[300px] sm:min-h-[400px] h-full flex flex-col rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl", children: [
    /* @__PURE__ */ jsxs60("div", { className: "flex justify-between items-center px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-b border-border/40 bg-black/20 gap-2", children: [
      /* @__PURE__ */ jsxs60("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsx63("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20 text-white shrink-0", children: /* @__PURE__ */ jsx63(Mail, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
        /* @__PURE__ */ jsxs60("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx63("h3", { className: "m-0 text-sm sm:text-base font-bold leading-tight truncate", children: title || "Gmail" }),
          description && /* @__PURE__ */ jsx63("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground mt-0.5 truncate", children: description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs60("div", { className: "flex items-center gap-2 sm:gap-3 shrink-0", children: [
        /* @__PURE__ */ jsxs60("div", { className: "hidden sm:block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/30 text-[0.625rem] sm:text-xs font-medium text-muted-foreground border border-white/5", children: [
          emails.filter((e) => !e.read).length,
          " non lett",
          emails.filter((e) => !e.read).length === 1 ? "a" : "e"
        ] }),
        /* @__PURE__ */ jsxs60(
          "button",
          {
            onClick: () => setComposeMode("new"),
            className: "flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]",
            children: [
              /* @__PURE__ */ jsx63(PenSquare, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
              /* @__PURE__ */ jsx63("span", { className: "hidden sm:inline", children: "Scrivi" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx63("div", { className: "flex flex-1 overflow-hidden relative", children: selectedEmail ? /* @__PURE__ */ jsx63(
      EmailDetail,
      {
        email: selectedEmail,
        lock,
        onBack: () => setSelectedEmailId(null),
        onCompose: setComposeMode,
        onArchive: handleArchive,
        onDelete: handleDelete,
        onToggleStar: handleToggleStar
      }
    ) : /* @__PURE__ */ jsx63(
      EmailList,
      {
        emails,
        elementKey: element.key,
        hoveredId,
        onSelectEmail: handleSelectEmail,
        onToggleStar: handleToggleStar,
        onHoverEmail: setHoveredId
      }
    ) }),
    composeMode !== "none" && /* @__PURE__ */ jsx63(
      ComposeModal,
      {
        mode: composeMode,
        originalEmail: selectedEmail,
        onClose: () => setComposeMode("none"),
        onSend: handleSendEmail
      }
    ),
    children
  ] });
});

// src/document/DocumentExplorer.tsx
import { memo as memo60, useState as useState23, useCallback as useCallback17 } from "react";
import { jsx as jsx64, jsxs as jsxs61 } from "react/jsx-runtime";
var TreeNodeItem3 = memo60(function TreeNodeItem4({
  node,
  depth,
  onSelect,
  selectedId,
  expanded,
  onToggle
}) {
  const isExpanded = expanded.has(node.id);
  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;
  return /* @__PURE__ */ jsxs61("div", { style: { marginLeft: `${depth * 0.75}rem` }, children: [
    /* @__PURE__ */ jsxs61(
      "div",
      {
        onClick: () => onSelect(node),
        className: `flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 cursor-pointer rounded-md sm:rounded-lg touch-manipulation ${isSelected ? "bg-sky-500/10 border-l-2 sm:border-l-3 border-sky-500" : "border-l-2 sm:border-l-3 border-transparent hover:bg-white/5"}`,
        children: [
          hasChildren && /* @__PURE__ */ jsx64(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                onToggle(node.id);
              },
              className: "border-0 bg-transparent cursor-pointer p-1 text-[0.625rem] sm:text-xs text-zinc-400 hover:text-white touch-manipulation min-h-[1.75rem] min-w-[1.75rem] flex items-center justify-center",
              children: isExpanded ? "v" : ">"
            }
          ),
          !hasChildren && /* @__PURE__ */ jsx64("span", { className: "w-3 sm:w-4" }),
          /* @__PURE__ */ jsxs61("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx64("div", { className: "font-medium text-xs sm:text-sm text-white truncate", children: node.title }),
            /* @__PURE__ */ jsxs61("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500", children: [
              "p",
              node.pageStart,
              "-",
              node.pageEnd
            ] })
          ] })
        ]
      }
    ),
    hasChildren && isExpanded && /* @__PURE__ */ jsx64("div", { children: node.children.map((child) => /* @__PURE__ */ jsx64(
      TreeNodeItem4,
      {
        node: child,
        depth: depth + 1,
        onSelect,
        selectedId,
        expanded,
        onToggle
      },
      child.id
    )) })
  ] });
});
var DocumentExplorer = memo60(function DocumentExplorer2({
  tree,
  onNodeSelect,
  selectedNodeId,
  expandedByDefault = true
}) {
  const [expanded, setExpanded] = useState23(() => {
    if (!expandedByDefault) return /* @__PURE__ */ new Set();
    const ids = /* @__PURE__ */ new Set();
    const collect = (node) => {
      ids.add(node.id);
      node.children?.forEach(collect);
    };
    collect(tree);
    return ids;
  });
  const handleToggle = useCallback17((id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);
  const handleSelect = useCallback17(
    (node) => {
      onNodeSelect?.(node);
    },
    [onNodeSelect]
  );
  return /* @__PURE__ */ jsxs61("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx64("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Document Structure" }),
    /* @__PURE__ */ jsx64("div", { className: "p-1.5 sm:p-2 max-h-[350px] sm:max-h-[500px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ jsx64(
      TreeNodeItem3,
      {
        node: tree,
        depth: 0,
        onSelect: handleSelect,
        selectedId: selectedNodeId,
        expanded,
        onToggle: handleToggle
      }
    ) })
  ] });
});

// src/document/KnowledgeGraph.tsx
import { memo as memo61, useMemo as useMemo26 } from "react";
import { jsx as jsx65, jsxs as jsxs62 } from "react/jsx-runtime";
var KnowledgeGraph = memo61(function KnowledgeGraph2({
  entities,
  relations,
  width = 600,
  height = 400,
  onEntityClick
}) {
  const { nodes, edges } = useMemo26(() => {
    const topEntities = entities.slice(0, 30);
    const graphNodes = topEntities.map((entity, i) => {
      const angle = i / topEntities.length * 2 * Math.PI;
      const radius = Math.min(width, height) * 0.35;
      return {
        id: entity.id,
        label: entity.value.slice(0, 20),
        type: entity.type,
        x: width / 2 + radius * Math.cos(angle),
        y: height / 2 + radius * Math.sin(angle)
      };
    });
    const graphEdges = relations.filter(
      (r) => graphNodes.some((n) => n.id === r.sourceNodeId) && graphNodes.some((n) => n.id === r.targetNodeId)
    ).map((r) => ({
      source: r.sourceNodeId,
      target: r.targetNodeId,
      type: r.type
    }));
    return { nodes: graphNodes, edges: graphEdges };
  }, [entities, relations, width, height]);
  const typeColors = {
    person: "#10b981",
    organization: "#0ea5e9",
    place: "#f59e0b",
    date: "#a855f7",
    concept: "#f43f5e",
    event: "#06b6d4",
    number: "#78716c",
    term: "#64748b"
  };
  return /* @__PURE__ */ jsxs62("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx65("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Knowledge Graph" }),
    /* @__PURE__ */ jsx65("div", { className: "block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ jsx65("div", { className: "space-y-2", children: nodes.slice(0, 15).map((node) => {
      const nodeEdges = edges.filter((e) => e.source === node.id || e.target === node.id);
      return /* @__PURE__ */ jsxs62(
        "div",
        {
          className: "flex items-center gap-2 p-2 rounded-lg bg-zinc-800/30 cursor-pointer touch-manipulation",
          onClick: () => {
            const entity = entities.find((e) => e.id === node.id);
            if (entity) onEntityClick?.(entity);
          },
          children: [
            /* @__PURE__ */ jsx65(
              "div",
              {
                className: "w-3 h-3 rounded-full shrink-0",
                style: { backgroundColor: typeColors[node.type] || "#999" }
              }
            ),
            /* @__PURE__ */ jsxs62("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx65("div", { className: "text-xs text-white truncate", children: node.label }),
              /* @__PURE__ */ jsxs62("div", { className: "text-[0.5rem] text-zinc-500", children: [
                node.type,
                " \u2022 ",
                nodeEdges.length,
                " connections"
              ] })
            ] })
          ]
        },
        node.id
      );
    }) }) }),
    /* @__PURE__ */ jsx65("div", { className: "hidden sm:block overflow-x-auto touch-pan-x", children: /* @__PURE__ */ jsxs62("svg", { width, height, className: "block min-w-full", children: [
      edges.map((edge, i) => {
        const sourceNode = nodes.find((n) => n.id === edge.source);
        const targetNode = nodes.find((n) => n.id === edge.target);
        if (!sourceNode || !targetNode) return null;
        return /* @__PURE__ */ jsx65(
          "line",
          {
            x1: sourceNode.x,
            y1: sourceNode.y,
            x2: targetNode.x,
            y2: targetNode.y,
            stroke: "#444",
            strokeWidth: 1
          },
          i
        );
      }),
      nodes.map((node) => /* @__PURE__ */ jsxs62(
        "g",
        {
          transform: `translate(${node.x}, ${node.y})`,
          className: "cursor-pointer",
          onClick: () => {
            const entity = entities.find((e) => e.id === node.id);
            if (entity) onEntityClick?.(entity);
          },
          children: [
            /* @__PURE__ */ jsx65(
              "circle",
              {
                r: 20,
                fill: typeColors[node.type] || "#999",
                stroke: "#18181b",
                strokeWidth: 2
              }
            ),
            /* @__PURE__ */ jsx65("text", { y: 30, textAnchor: "middle", fontSize: 10, fill: "#a1a1aa", children: node.label })
          ]
        },
        node.id
      ))
    ] }) }),
    /* @__PURE__ */ jsx65("div", { className: "px-2.5 sm:px-4 py-2 sm:py-2.5 border-t border-white/10 flex gap-2 sm:gap-4 flex-wrap text-[0.5rem] sm:text-xs", children: Object.entries(typeColors).map(([type, color]) => /* @__PURE__ */ jsxs62("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
      /* @__PURE__ */ jsx65(
        "div",
        {
          className: "w-2 h-2 sm:w-3 sm:h-3 rounded-full",
          style: { backgroundColor: color }
        }
      ),
      /* @__PURE__ */ jsx65("span", { className: "text-zinc-400", children: type })
    ] }, type)) })
  ] });
});

// src/document/DocumentTimeline.tsx
import { memo as memo62 } from "react";
import { jsx as jsx66, jsxs as jsxs63 } from "react/jsx-runtime";
function parseDate(value) {
  if (!value) return null;
  const yearMatch = value.match(/\b(1[0-9]{3}|2[0-9]{3})\b/);
  if (yearMatch?.[1]) return parseInt(yearMatch[1], 10);
  return null;
}
var DocumentTimeline = memo62(function DocumentTimeline2({
  entities,
  onEntityClick
}) {
  const dateEntities = entities.filter(
    (e) => e.type === "date" || e.type === "event"
  );
  const events = dateEntities.map((entity) => {
    const year = parseDate(entity.value);
    if (!year) return null;
    return { entity, year };
  }).filter((e) => e !== null).sort((a, b) => a.year - b.year);
  if (events.length === 0) {
    return /* @__PURE__ */ jsx66("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm", children: "No date entities found for timeline" });
  }
  const firstEvent = events[0];
  const lastEvent = events[events.length - 1];
  const minYear = firstEvent?.year ?? 0;
  const maxYear = lastEvent?.year ?? 0;
  const yearRange = Math.max(1, maxYear - minYear);
  return /* @__PURE__ */ jsxs63("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx66("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Document Timeline" }),
    /* @__PURE__ */ jsx66("div", { className: "block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ jsx66("div", { className: "relative pl-6 border-l-2 border-sky-500/30", children: events.slice(0, 10).map((event) => /* @__PURE__ */ jsxs63(
      "div",
      {
        className: "relative mb-4 last:mb-0 cursor-pointer touch-manipulation",
        onClick: () => onEntityClick?.(event.entity),
        children: [
          /* @__PURE__ */ jsx66("div", { className: "absolute -left-[1.625rem] top-0.5 w-3 h-3 rounded-full bg-sky-500 border-2 border-zinc-900 shadow" }),
          /* @__PURE__ */ jsx66("div", { className: "text-xs font-semibold text-white", children: event.year }),
          /* @__PURE__ */ jsx66("div", { className: "text-[0.625rem] text-zinc-400 truncate max-w-[12rem]", children: event.entity.value.slice(0, 30) })
        ]
      },
      event.entity.id
    )) }) }),
    /* @__PURE__ */ jsxs63("div", { className: "hidden sm:block p-4 relative min-h-[6.25rem]", children: [
      /* @__PURE__ */ jsx66("div", { className: "absolute top-[3.125rem] left-5 right-5 h-1 bg-zinc-700 rounded" }),
      /* @__PURE__ */ jsx66("div", { className: "flex justify-between pt-[3.75rem]", children: events.slice(0, 10).map((event) => {
        const position = yearRange > 0 ? (event.year - minYear) / yearRange * 100 : 50;
        return /* @__PURE__ */ jsxs63(
          "div",
          {
            style: {
              position: "absolute",
              left: `calc(${position}% + 0.625rem)`,
              top: "2.5rem",
              transform: "translateX(-50%)"
            },
            className: "text-center cursor-pointer touch-manipulation",
            onClick: () => onEntityClick?.(event.entity),
            children: [
              /* @__PURE__ */ jsx66("div", { className: "w-4 h-4 rounded-full bg-sky-500 mx-auto mb-2 border-2 sm:border-3 border-zinc-900 shadow-md" }),
              /* @__PURE__ */ jsx66("div", { className: "text-[0.625rem] sm:text-xs font-semibold text-white", children: event.year }),
              /* @__PURE__ */ jsx66("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 max-w-[3.5rem] sm:max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap", children: event.entity.value.slice(0, 15) })
            ]
          },
          event.entity.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs63("div", { className: "px-3 sm:px-4 py-1.5 sm:py-2 border-t border-white/10 text-[0.625rem] sm:text-xs text-zinc-500", children: [
      events.length,
      " date/event entities found"
    ] })
  ] });
});

// src/document/DeepAnalysisPanel.tsx
import { memo as memo63 } from "react";
import { jsx as jsx67, jsxs as jsxs64 } from "react/jsx-runtime";
var DeepAnalysisPanel = memo63(function DeepAnalysisPanel2({
  node,
  quotes = [],
  onQuoteClick
}) {
  const nodeQuotes = quotes.filter((q) => q.nodeId === node.id);
  return /* @__PURE__ */ jsxs64("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4 bg-zinc-800/50 border-b border-white/10", children: [
      /* @__PURE__ */ jsx67("h3", { className: "m-0 text-base sm:text-lg font-semibold text-white", children: node.title }),
      /* @__PURE__ */ jsxs64("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1", children: [
        "Pages ",
        node.pageStart,
        "-",
        node.pageEnd
      ] })
    ] }),
    /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ jsx67("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Summary" }),
      /* @__PURE__ */ jsx67("p", { className: "m-0 text-xs sm:text-sm leading-relaxed text-zinc-300", children: node.summary || "No summary available" }),
      node.detailedSummary && /* @__PURE__ */ jsx67("p", { className: "mt-2 sm:mt-3 m-0 text-xs sm:text-sm leading-relaxed text-zinc-400", children: node.detailedSummary })
    ] }),
    node.keyPoints.length > 0 && /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ jsx67("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Key Points" }),
      /* @__PURE__ */ jsx67("ul", { className: "m-0 pl-4 sm:pl-5 space-y-1", children: node.keyPoints.map((point, i) => /* @__PURE__ */ jsx67("li", { className: "text-xs sm:text-sm text-zinc-300", children: point }, i)) })
    ] }),
    node.keywords.length > 0 && /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ jsx67("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Keywords" }),
      /* @__PURE__ */ jsx67("div", { className: "flex gap-1.5 sm:gap-2 flex-wrap", children: node.keywords.map((keyword, i) => /* @__PURE__ */ jsx67(
        "span",
        {
          className: "px-2 py-0.5 sm:py-1 bg-sky-500/10 rounded text-[0.625rem] sm:text-xs text-sky-300 border border-sky-500/20",
          children: keyword
        },
        i
      )) })
    ] }),
    nodeQuotes.length > 0 && /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ jsx67("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Notable Quotes" }),
      /* @__PURE__ */ jsx67("div", { className: "space-y-2", children: nodeQuotes.map((quote) => /* @__PURE__ */ jsxs64(
        "div",
        {
          onClick: () => onQuoteClick?.(quote),
          className: `p-2.5 sm:p-3 bg-zinc-800/30 border-l-2 sm:border-l-3 border-sky-500 rounded-r ${onQuoteClick ? "cursor-pointer hover:bg-zinc-800/50 touch-manipulation" : ""}`,
          children: [
            /* @__PURE__ */ jsxs64("p", { className: "m-0 text-xs sm:text-sm italic text-zinc-300", children: [
              '"',
              quote.text,
              '"'
            ] }),
            /* @__PURE__ */ jsxs64("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1.5", children: [
              "Page ",
              quote.pageNumber,
              " - ",
              quote.significance
            ] })
          ]
        },
        quote.id
      )) })
    ] }),
    node.metrics && /* @__PURE__ */ jsxs64("div", { className: "p-3 sm:p-4", children: [
      /* @__PURE__ */ jsx67("h4", { className: "m-0 mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Metrics" }),
      /* @__PURE__ */ jsxs64("div", { className: "grid grid-cols-3 gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxs64("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ jsx67("div", { className: "text-base sm:text-xl font-semibold text-white", children: node.metrics.wordCount }),
          /* @__PURE__ */ jsx67("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Words" })
        ] }),
        /* @__PURE__ */ jsxs64("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ jsxs64("div", { className: "text-base sm:text-xl font-semibold text-white", children: [
            node.metrics.readingTimeMinutes,
            "m"
          ] }),
          /* @__PURE__ */ jsx67("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Reading Time" })
        ] }),
        /* @__PURE__ */ jsxs64("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ jsx67("div", { className: "text-base sm:text-xl font-semibold capitalize text-white", children: node.metrics.complexity }),
          /* @__PURE__ */ jsx67("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Complexity" })
        ] })
      ] })
    ] })
  ] });
});

// src/document/CitationViewer.tsx
import { memo as memo64 } from "react";
import { jsx as jsx68, jsxs as jsxs65 } from "react/jsx-runtime";
var typeIcons = {
  book: "B",
  article: "A",
  web: "W",
  report: "R",
  thesis: "T",
  other: "O"
};
var CitationViewer = memo64(function CitationViewer2({
  citations,
  onCitationClick
}) {
  const byType = citations.reduce(
    (acc, c) => {
      const type = c.type ?? "other";
      if (!acc[type]) acc[type] = [];
      acc[type].push(c);
      return acc;
    },
    {}
  );
  if (citations.length === 0) {
    return /* @__PURE__ */ jsx68("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm", children: "No citations found in document" });
  }
  return /* @__PURE__ */ jsxs65("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs65("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold flex justify-between items-center text-sm sm:text-base", children: [
      /* @__PURE__ */ jsx68("span", { className: "text-white", children: "Citations" }),
      /* @__PURE__ */ jsxs65("span", { className: "text-zinc-400 font-normal text-xs sm:text-sm", children: [
        citations.length,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ jsx68("div", { className: "max-h-[300px] sm:max-h-[400px] overflow-y-auto touch-pan-y", children: Object.entries(byType).map(([type, typeCitations]) => /* @__PURE__ */ jsxs65("div", { children: [
      /* @__PURE__ */ jsxs65("div", { className: "px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 font-medium text-[0.625rem] sm:text-xs uppercase text-zinc-500 border-b border-white/5", children: [
        type,
        " (",
        typeCitations.length,
        ")"
      ] }),
      typeCitations.map((citation) => /* @__PURE__ */ jsxs65(
        "div",
        {
          onClick: () => onCitationClick?.(citation),
          className: `p-3 sm:p-4 border-b border-white/5 flex gap-2.5 sm:gap-3 ${onCitationClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""}`,
          children: [
            /* @__PURE__ */ jsx68("div", { className: "w-8 h-8 sm:w-9 sm:h-9 rounded bg-sky-500/10 flex items-center justify-center font-semibold text-sky-400 shrink-0 text-xs sm:text-sm", children: typeIcons[citation.type] || "?" }),
            /* @__PURE__ */ jsxs65("div", { className: "flex-1 min-w-0", children: [
              citation.title && /* @__PURE__ */ jsx68("div", { className: "font-medium text-xs sm:text-sm text-white", children: citation.title }),
              citation.authors && citation.authors.length > 0 && /* @__PURE__ */ jsx68("div", { className: "text-[0.625rem] sm:text-xs text-zinc-400 mt-0.5", children: citation.authors.join(", ") }),
              citation.year && /* @__PURE__ */ jsxs65("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500 ml-1", children: [
                "(",
                citation.year,
                ")"
              ] }),
              /* @__PURE__ */ jsx68("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1 overflow-hidden text-ellipsis whitespace-nowrap", children: citation.text }),
              /* @__PURE__ */ jsxs65("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-600 mt-1", children: [
                "Page ",
                citation.pageNumber
              ] })
            ] })
          ]
        },
        citation.id
      ))
    ] }, type)) })
  ] });
});

// src/document/EntityExplorer.tsx
import { memo as memo65, useState as useState24, useMemo as useMemo27 } from "react";
import { jsx as jsx69, jsxs as jsxs66 } from "react/jsx-runtime";
var typeColorClasses = {
  person: { bg: "bg-emerald-500", text: "text-emerald-400", dot: "bg-emerald-500" },
  organization: { bg: "bg-sky-500", text: "text-sky-400", dot: "bg-sky-500" },
  place: { bg: "bg-amber-500", text: "text-amber-400", dot: "bg-amber-500" },
  date: { bg: "bg-purple-500", text: "text-purple-400", dot: "bg-purple-500" },
  concept: { bg: "bg-rose-500", text: "text-rose-400", dot: "bg-rose-500" },
  event: { bg: "bg-cyan-500", text: "text-cyan-400", dot: "bg-cyan-500" },
  number: { bg: "bg-stone-500", text: "text-stone-400", dot: "bg-stone-500" },
  term: { bg: "bg-slate-500", text: "text-slate-400", dot: "bg-slate-500" }
};
var EntityExplorer = memo65(function EntityExplorer2({
  entities,
  onEntityClick,
  filterTypes
}) {
  const [selectedType, setSelectedType] = useState24(null);
  const [searchQuery, setSearchQuery] = useState24("");
  const types = useMemo27(() => {
    const typeSet = new Set(entities.map((e) => e.type));
    return Array.from(typeSet).sort();
  }, [entities]);
  const filteredEntities = useMemo27(() => {
    let result = entities;
    if (filterTypes && filterTypes.length > 0) {
      result = result.filter((e) => filterTypes.includes(e.type));
    }
    if (selectedType) {
      result = result.filter((e) => e.type === selectedType);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (e) => e.value.toLowerCase().includes(query) || e.normalized?.toLowerCase().includes(query)
      );
    }
    return result;
  }, [entities, filterTypes, selectedType, searchQuery]);
  const groupedEntities = useMemo27(() => {
    const groups = {};
    for (const entity of filteredEntities) {
      const type = entity.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(entity);
    }
    return groups;
  }, [filteredEntities]);
  return /* @__PURE__ */ jsxs66("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsxs66("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: [
      "Entities (",
      filteredEntities.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxs66("div", { className: "p-2.5 sm:p-4 border-b border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsx69(
        "input",
        {
          type: "text",
          placeholder: "Search entities...",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "flex-1 min-w-0 px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0"
        }
      ),
      /* @__PURE__ */ jsxs66(
        "select",
        {
          value: selectedType || "",
          onChange: (e) => setSelectedType(e.target.value || null),
          className: "px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0",
          children: [
            /* @__PURE__ */ jsx69("option", { value: "", children: "All types" }),
            types.map((type) => /* @__PURE__ */ jsx69("option", { value: type, children: type }, type))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx69("div", { className: "px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 flex gap-1.5 sm:gap-2 flex-wrap", children: types.map((type) => {
      const count = entities.filter((e) => e.type === type).length;
      const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
      return /* @__PURE__ */ jsxs66(
        "button",
        {
          onClick: () => setSelectedType((prev) => prev === type ? null : type),
          className: `px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border-none text-[0.625rem] sm:text-xs cursor-pointer flex items-center gap-1 sm:gap-1.5 transition-colors touch-manipulation min-h-[1.75rem] ${selectedType === type ? `${colors.bg} text-white` : "bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700"}`,
          children: [
            /* @__PURE__ */ jsx69("span", { className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${colors.dot}` }),
            type,
            " (",
            count,
            ")"
          ]
        },
        type
      );
    }) }),
    /* @__PURE__ */ jsx69("div", { className: "max-h-[280px] sm:max-h-[400px] overflow-y-auto touch-pan-y", children: Object.entries(groupedEntities).map(([type, typeEntities]) => {
      const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
      return /* @__PURE__ */ jsxs66("div", { children: [
        /* @__PURE__ */ jsx69("div", { className: `px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 text-[0.625rem] sm:text-xs font-medium uppercase sticky top-0 ${colors.text}`, children: type }),
        typeEntities.map((entity) => /* @__PURE__ */ jsxs66(
          "div",
          {
            onClick: () => onEntityClick?.(entity),
            className: `px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 flex justify-between items-center gap-2 ${onEntityClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""}`,
            children: [
              /* @__PURE__ */ jsxs66("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsx69("div", { className: "font-medium text-xs sm:text-sm text-white truncate", children: entity.value }),
                entity.normalized && entity.normalized !== entity.value && /* @__PURE__ */ jsx69("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 truncate", children: entity.normalized })
              ] }),
              /* @__PURE__ */ jsxs66("div", { className: "text-[0.625rem] sm:text-xs text-zinc-600 shrink-0", children: [
                entity.occurrences.length,
                " occ"
              ] })
            ]
          },
          entity.id
        ))
      ] }, type);
    }) })
  ] });
});

// src/document/hooks/useKnowledgeBase.ts
import { useState as useState25, useCallback as useCallback18, useMemo as useMemo28 } from "react";
function useKnowledgeBase(options = {}) {
  const [knowledgeBase, setKnowledgeBase] = useState25(
    options.initialKnowledgeBase ?? null
  );
  const entities = useMemo28(
    () => knowledgeBase?.entities ?? [],
    [knowledgeBase]
  );
  const relations = useMemo28(
    () => knowledgeBase?.relations ?? [],
    [knowledgeBase]
  );
  const quotes = useMemo28(() => knowledgeBase?.quotes ?? [], [knowledgeBase]);
  const getEntityById = useCallback18(
    (id) => entities.find((e) => e.id === id),
    [entities]
  );
  const getRelationsByNode = useCallback18(
    (nodeId) => relations.filter(
      (r) => r.sourceNodeId === nodeId || r.targetNodeId === nodeId
    ),
    [relations]
  );
  const getQuotesByNode = useCallback18(
    (nodeId) => quotes.filter((q) => q.nodeId === nodeId),
    [quotes]
  );
  const searchEntities = useCallback18(
    (query) => {
      const q = query.toLowerCase();
      return entities.filter(
        (e) => e.value.toLowerCase().includes(q) || e.normalized?.toLowerCase().includes(q)
      );
    },
    [entities]
  );
  const filterEntitiesByType = useCallback18(
    (type) => entities.filter((e) => e.type === type),
    [entities]
  );
  return {
    knowledgeBase,
    setKnowledgeBase,
    entities,
    relations,
    quotes,
    getEntityById,
    getRelationsByNode,
    getQuotesByNode,
    searchEntities,
    filterEntitiesByType
  };
}

// src/document/hooks/useDocumentExplorer.ts
import { useState as useState26, useCallback as useCallback19 } from "react";
function collectAllNodeIds(node, ids) {
  ids.add(node.id);
  if (node.children) {
    for (const child of node.children) {
      collectAllNodeIds(child, ids);
    }
  }
}
function findPath(node, targetId, path = []) {
  const newPath = [...path, node];
  if (node.id === targetId) return newPath;
  if (node.children) {
    for (const child of node.children) {
      const result = findPath(child, targetId, newPath);
      if (result) return result;
    }
  }
  return null;
}
function searchTree(node, query, results = []) {
  const q = query.toLowerCase();
  if (node.title.toLowerCase().includes(q) || node.summary?.toLowerCase().includes(q) || node.rawText?.toLowerCase().includes(q)) {
    results.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      searchTree(child, query, results);
    }
  }
  return results;
}
function useDocumentExplorer(options = {}) {
  const [tree, setTree] = useState26(
    options.initialTree ?? null
  );
  const [selectedNode, setSelectedNode] = useState26(null);
  const [expandedNodes, setExpandedNodes] = useState26(/* @__PURE__ */ new Set());
  const selectNode = useCallback19(
    (node) => {
      setSelectedNode(node);
      options.onNodeSelect?.(node);
    },
    [options]
  );
  const toggleNode = useCallback19((nodeId) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);
  const expandAll = useCallback19(() => {
    if (!tree) return;
    const ids = /* @__PURE__ */ new Set();
    collectAllNodeIds(tree, ids);
    setExpandedNodes(ids);
  }, [tree]);
  const collapseAll = useCallback19(() => {
    setExpandedNodes(/* @__PURE__ */ new Set());
  }, []);
  const searchNodes = useCallback19(
    (query) => {
      if (!tree || !query) return [];
      return searchTree(tree, query);
    },
    [tree]
  );
  const getNodePath = useCallback19(
    (nodeId) => {
      if (!tree) return [];
      return findPath(tree, nodeId) ?? [];
    },
    [tree]
  );
  return {
    tree,
    setTree,
    selectedNode,
    expandedNodes,
    selectNode,
    toggleNode,
    expandAll,
    collapseAll,
    searchNodes,
    getNodePath
  };
}

// src/document/hooks/useQuestionAnswer.ts
import { useState as useState27, useCallback as useCallback20 } from "react";
function useQuestionAnswer(options = {}) {
  const [question, setQuestion] = useState27("");
  const [answer, setAnswer] = useState27(null);
  const [isLoading, setIsLoading] = useState27(false);
  const [error, setError] = useState27(null);
  const [history, setHistory] = useState27([]);
  const askQuestion = useCallback20(
    async (knowledgeBaseId, q) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = {
          id: crypto.randomUUID(),
          question: q,
          answer: "This requires the full MCP integration to be active.",
          confidence: 0.5,
          sources: [],
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        setAnswer(result);
        setHistory((prev) => [...prev, { question: q, answer: result }]);
        options.onAnswer?.(result);
        return result;
      } catch (err) {
        const error2 = err instanceof Error ? err : new Error(String(err));
        setError(error2);
        options.onError?.(error2);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );
  const clearAnswer = useCallback20(() => {
    setAnswer(null);
    setError(null);
    setQuestion("");
  }, []);
  const clearHistory = useCallback20(() => {
    setHistory([]);
  }, []);
  return {
    question,
    setQuestion,
    answer,
    isLoading,
    error,
    askQuestion,
    clearAnswer,
    history,
    clearHistory
  };
}

// src/index.ts
var componentRegistry = {
  Card,
  Grid,
  Stack,
  Divider,
  Heading,
  Text,
  CodeBlock,
  Document,
  Badge,
  Alert,
  Empty,
  BrowserAction,
  Button,
  TextField,
  Select,
  DatePicker,
  Metric,
  Table,
  List,
  Timeline,
  SearchResults,
  DriveFile,
  Weather,
  Audio,
  Video: Video3,
  Image,
  Gallery,
  Message,
  Email,
  CalendarAgenda,
  DriveFileList,
  Workout,
  Nutrition,
  Flight,
  Hotel,
  Trip,
  BookingForms,
  Kanban,
  ProfileCard,
  ActivityFeed,
  Pricing,
  ArticleCard,
  TodoList,
  RoutineScheduler,
  SupplementTracker,
  Calendar: Calendar9,
  Diary,
  ResearchReport,
  DocumentIndex,
  SourceCitation,
  DocumentReport,
  // Visualization
  Chart,
  StockChart,
  Graph,
  MindMap,
  Gantt
};
var componentDefinitions = {
  Card: CardDefinition,
  Grid: GridDefinition,
  Stack: StackDefinition,
  Divider: DividerDefinition,
  Heading: HeadingDefinition,
  Text: TextDefinition,
  CodeBlock: CodeBlockDefinition,
  Document: DocumentDefinition,
  Badge: BadgeDefinition,
  Alert: AlertDefinition,
  Empty: EmptyDefinition,
  BrowserAction: BrowserActionDefinition,
  Button: ButtonDefinition,
  TextField: TextFieldDefinition,
  Select: SelectDefinition,
  DatePicker: DatePickerDefinition,
  Metric: MetricDefinition,
  Table: TableDefinition,
  List: ListDefinition,
  Timeline: TimelineDefinition,
  SearchResults: SearchResultsDefinition,
  DriveFile: DriveFileDefinition,
  Weather: WeatherDefinition,
  Audio: AudioDefinition,
  Video: VideoDefinition,
  Image: ImageDefinition,
  Gallery: GalleryDefinition,
  Message: MessageDefinition,
  Email: EmailDefinition,
  CalendarAgenda: CalendarAgendaDefinition,
  DriveFileList: DriveFileListDefinition,
  Workout: WorkoutDefinition,
  Nutrition: NutritionDefinition,
  Flight: FlightDefinition,
  Hotel: HotelDefinition,
  Trip: TripDefinition,
  BookingForms: BookingFormsDefinition,
  Kanban: KanbanDefinition,
  TodoList: TodoListDefinition,
  RoutineScheduler: RoutineSchedulerDefinition,
  SupplementTracker: SupplementTrackerDefinition,
  Calendar: CalendarDefinition,
  Diary: DiaryDefinition,
  ResearchReport: ResearchReportDefinition,
  DocumentIndex: DocumentIndexDefinition,
  SourceCitation: SourceCitationDefinition,
  DocumentReport: DocumentReportDefinition,
  // Visualization
  Chart: ChartDefinition,
  StockChart: StockChartDefinition,
  Graph: GraphDefinition,
  MindMap: MindMapDefinition,
  Gantt: GanttDefinition
};
var componentNames = Object.keys(componentRegistry);
function hasComponent(name) {
  return name in componentRegistry;
}
var VERSION = "0.1.0";
export {
  ActivityFeed,
  ArticleCard,
  BookingForms,
  BookingFormsDefinition,
  BookingFormsPropsSchema,
  Calendar9 as Calendar,
  CalendarAgenda,
  CalendarAgendaDefinition,
  CalendarAgendaSchema,
  CalendarDefinition,
  CalendarPropsSchema,
  Chart,
  ChartDefinition,
  ChartPropsSchema,
  CitationViewer,
  DeepAnalysisPanel,
  Diary,
  DiaryDefinition,
  DiaryPropsSchema,
  DocumentExplorer,
  DocumentIndex,
  DocumentIndexDefinition,
  DocumentIndexPropsSchema,
  DocumentReport,
  DocumentReportDefinition,
  DocumentReportPropsSchema,
  DocumentTimeline,
  Email,
  EmailDefinition,
  EmailPropsSchema,
  EmptyState,
  EntityExplorer,
  Flight,
  FlightDefinition,
  FlightPropsSchema,
  Gantt,
  GanttDefinition,
  GanttPropsSchema,
  Graph,
  GraphDefinition,
  GraphPropsSchema,
  Hotel,
  HotelDefinition,
  HotelPropsSchema,
  Kanban,
  KanbanDefinition,
  KanbanPropsSchema,
  KnowledgeGraph,
  LoadingIndicator,
  Message,
  MessageDefinition,
  MessagePropsSchema,
  MindMap,
  MindMapDefinition,
  MindMapPropsSchema,
  Nutrition,
  NutritionDefinition,
  NutritionPropsSchema,
  Pricing,
  ProfileCard,
  ResearchReport,
  ResearchReportDefinition,
  ResearchReportPropsSchema,
  RoutineScheduler,
  RoutineSchedulerDefinition,
  RoutineSchedulerPropsSchema,
  SourceCitation,
  SourceCitationDefinition,
  SourceCitationPropsSchema,
  StockChart,
  StockChartDefinition,
  StockChartPropsSchema,
  SupplementTracker,
  SupplementTrackerDefinition,
  SupplementTrackerPropsSchema,
  TodoList,
  TodoListDefinition,
  TodoListPropsSchema,
  Trip,
  TripDefinition,
  TripPropsSchema,
  VERSION,
  Workout,
  WorkoutDefinition,
  WorkoutPropsSchema,
  componentDefinitions,
  componentNames,
  componentRegistry,
  hasComponent,
  useDocumentExplorer,
  useKnowledgeBase,
  useQuestionAnswer
};
//# sourceMappingURL=index.mjs.map