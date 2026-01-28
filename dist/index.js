"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ActivityFeed: () => ActivityFeed,
  ArticleCard: () => ArticleCard,
  BookingForms: () => BookingForms,
  BookingFormsDefinition: () => BookingFormsDefinition,
  BookingFormsPropsSchema: () => BookingFormsPropsSchema,
  Calendar: () => Calendar9,
  CalendarAgenda: () => CalendarAgenda,
  CalendarAgendaDefinition: () => CalendarAgendaDefinition,
  CalendarAgendaSchema: () => CalendarAgendaSchema,
  CalendarDefinition: () => CalendarDefinition,
  CalendarPropsSchema: () => CalendarPropsSchema,
  CitationViewer: () => CitationViewer,
  DeepAnalysisPanel: () => DeepAnalysisPanel,
  Diary: () => Diary,
  DiaryDefinition: () => DiaryDefinition,
  DiaryPropsSchema: () => DiaryPropsSchema,
  DocumentExplorer: () => DocumentExplorer,
  DocumentIndex: () => DocumentIndex,
  DocumentIndexDefinition: () => DocumentIndexDefinition,
  DocumentIndexPropsSchema: () => DocumentIndexPropsSchema,
  DocumentTimeline: () => DocumentTimeline,
  Email: () => Email,
  EmailDefinition: () => EmailDefinition,
  EmailPropsSchema: () => EmailPropsSchema,
  EntityExplorer: () => EntityExplorer,
  Flight: () => Flight,
  FlightDefinition: () => FlightDefinition,
  FlightPropsSchema: () => FlightPropsSchema,
  Hotel: () => Hotel,
  HotelDefinition: () => HotelDefinition,
  HotelPropsSchema: () => HotelPropsSchema,
  Kanban: () => Kanban,
  KanbanDefinition: () => KanbanDefinition,
  KanbanPropsSchema: () => KanbanPropsSchema,
  KnowledgeGraph: () => KnowledgeGraph,
  Message: () => Message,
  MessageDefinition: () => MessageDefinition,
  MessagePropsSchema: () => MessagePropsSchema,
  Nutrition: () => Nutrition,
  NutritionDefinition: () => NutritionDefinition,
  NutritionPropsSchema: () => NutritionPropsSchema,
  Pricing: () => Pricing,
  ProfileCard: () => ProfileCard,
  ResearchReport: () => ResearchReport,
  RoutineScheduler: () => RoutineScheduler,
  RoutineSchedulerDefinition: () => RoutineSchedulerDefinition,
  RoutineSchedulerPropsSchema: () => RoutineSchedulerPropsSchema,
  SourceCitation: () => SourceCitation,
  SourceCitationDefinition: () => SourceCitationDefinition,
  SourceCitationPropsSchema: () => SourceCitationPropsSchema,
  SupplementTracker: () => SupplementTracker,
  SupplementTrackerDefinition: () => SupplementTrackerDefinition,
  SupplementTrackerPropsSchema: () => SupplementTrackerPropsSchema,
  TodoList: () => TodoList,
  TodoListDefinition: () => TodoListDefinition,
  TodoListPropsSchema: () => TodoListPropsSchema,
  Trip: () => Trip,
  TripDefinition: () => TripDefinition,
  TripPropsSchema: () => TripPropsSchema,
  VERSION: () => VERSION,
  Workout: () => Workout,
  WorkoutDefinition: () => WorkoutDefinition,
  WorkoutPropsSchema: () => WorkoutPropsSchema,
  componentDefinitions: () => componentDefinitions,
  componentNames: () => componentNames,
  componentRegistry: () => componentRegistry,
  hasComponent: () => hasComponent,
  useDocumentExplorer: () => useDocumentExplorer,
  useKnowledgeBase: () => useKnowledgeBase,
  useQuestionAnswer: () => useQuestionAnswer
});
module.exports = __toCommonJS(index_exports);
__reExport(index_exports, require("@onegenui/ui"), module.exports);

// src/domain/CalendarAgenda/component.tsx
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_framer_motion4 = require("framer-motion");

// src/utils/shared-components.tsx
var import_react = require("react");
var import_framer_motion = require("framer-motion");

// src/utils/cn.ts
var import_utils = require("@onegenui/utils");

// src/utils/shared-components.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
var StatusBadge = (0, import_react.memo)(function StatusBadge2({
  label,
  variant = "neutral",
  pulse = false,
  className
}) {
  const styles = STATUS_STYLES[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      className: (0, import_utils.cn)(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border",
        styles.bg,
        styles.text,
        styles.border,
        pulse && "animate-pulse",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-current" }),
        label
      ]
    }
  );
});
var ProgressBar = (0, import_react.memo)(function ProgressBar2({
  value,
  max,
  color = "bg-blue-500",
  showLabel = false,
  label,
  className
}) {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("flex flex-col gap-1.5", className), children: [
    (showLabel || label) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-mono text-white/50", children: Math.round(value) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_framer_motion.motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${percentage}%` },
        transition: { duration: 0.8, ease: "easeOut" },
        className: (0, import_utils.cn)("h-full rounded-full", color)
      }
    ) })
  ] });
});
var EmptyState = (0, import_react.memo)(function EmptyState2({
  icon,
  message,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "py-20 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "opacity-20 mb-4", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: message })
      ]
    }
  );
});
var SectionHeader = (0, import_react.memo)(function SectionHeader2({
  title,
  icon,
  action,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("flex items-center justify-between", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { className: "m-0 text-xl font-bold tracking-tight flex items-center gap-2", children: [
      icon,
      title
    ] }),
    action
  ] });
});
var CardContainer = (0, import_react.memo)(function CardContainer2({
  children,
  highlighted = false,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(
        "relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
        highlighted ? "bg-zinc-900/80 border-white/20 shadow-2xl" : "bg-zinc-900/40 border-white/10 hover:bg-zinc-900/60 hover:border-white/15",
        className
      ),
      children
    }
  );
});
var AccentBar = (0, import_react.memo)(function AccentBar2({
  active = false,
  gradient = "from-blue-500 to-purple-500",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(
        "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
        active ? `bg-gradient-to-r ${gradient}` : "bg-white/5",
        className
      )
    }
  );
});
var PerforatedDivider = (0, import_react.memo)(function PerforatedDivider2({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("relative h-px w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border-t border-dashed border-white/10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-r border-white/10" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-l border-white/10" })
  ] });
});
var InfoPill = (0, import_react.memo)(function InfoPill2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
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
var ErrorState = (0, import_react.memo)(function ErrorState2({
  title = "Something went wrong",
  message,
  onRetry,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "py-12 flex flex-col items-center justify-center border border-rose-500/20 rounded-2xl bg-rose-950/20 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-rose-500 mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "svg",
          {
            className: "w-10 h-10",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "text-sm font-semibold text-rose-400 mb-1", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-rose-400/60 max-w-xs", children: message }),
        onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var Skeleton = (0, import_react.memo)(function Skeleton2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("animate-pulse bg-white/5 rounded", className) });
});
var SkeletonText = (0, import_react.memo)(function SkeletonText2({
  lines = 1,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("space-y-2", className), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Skeleton,
    {
      className: (0, import_utils.cn)(
        "h-3 rounded",
        i === lines - 1 && lines > 1 ? "w-3/4" : "w-full"
      )
    },
    i
  )) });
});
var SkeletonCard = (0, import_react.memo)(function SkeletonCard2({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "p-4 rounded-xl border border-white/5 bg-zinc-900/40 space-y-3",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonText, { lines: 2 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2 pt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-20 rounded-full" })
        ] })
      ]
    }
  );
});
var LoadingState = (0, import_react.memo)(function LoadingState2({
  message = "Loading...",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "py-16 flex flex-col items-center justify-center text-muted-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin mb-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-mono text-xs uppercase tracking-widest opacity-50", children: message })
      ]
    }
  );
});

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
var import_react2 = require("react");
var import_lucide_react = require("lucide-react");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
var EventCard = (0, import_react2.memo)(function EventCard2({
  event,
  onSelect,
  elementKey
}) {
  const eventColor = event.color || "var(--primary)";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_framer_motion2.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-start justify-between gap-4 relative z-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col gap-1 min-w-[70px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-xs font-bold text-white/50 font-mono", children: new Date(event.start).toLocaleTimeString(void 0, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }) }),
            event.end && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[10px] font-medium text-white/30 font-mono", children: new Date(event.end).toLocaleTimeString(void 0, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-base font-bold text-foreground leading-tight mb-1 group-hover:text-white transition-colors", children: event.title }),
            event.location && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.MapPin, { size: 10, className: "text-white/40" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "truncate", children: event.location })
            ] }),
            event.meetingLink && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold border border-[var(--accent)]/20 mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Video, { size: 10 }),
              " Video Call"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_lucide_react.ChevronRight,
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
var import_react3 = require("react");
var import_lucide_react2 = require("lucide-react");
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime3 = require("react/jsx-runtime");
var EventDetailView = (0, import_react3.memo)(function EventDetailView2({
  event,
  onBack
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_framer_motion3.motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      className: "flex-1 overflow-auto flex flex-col h-full bg-zinc-950/50",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-4 border-b border-white/10 flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              onClick: onBack,
              className: "p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ArrowLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm font-bold text-white/40 uppercase tracking-widest", children: "Event Details" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex gap-5 mb-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                className: "w-1.5 rounded-full shadow-[0_0_15px_var(--accent)]",
                style: {
                  backgroundColor: event.color || "var(--primary)",
                  "--accent": event.color || "var(--primary)"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-3xl font-black text-white leading-tight mb-2", children: event.title }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2 text-lg text-white/60", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Calendar, { size: 18 }),
                new Date(event.start).toLocaleDateString(void 0, {
                  weekday: "long",
                  month: "long",
                  day: "numeric"
                })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Clock, { size: 20 }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xs font-bold text-white/40 uppercase", children: "Time" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "font-semibold text-white", children: formatEventTime(event.start, event.end, event.allDay) })
                ] })
              ] }),
              event.location && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.MapPin, { size: 20 }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xs font-bold text-white/40 uppercase", children: "Location" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "font-semibold text-white", children: event.location })
                ] })
              ] })
            ] }),
            event.meetingLink && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "a",
              {
                href: event.meetingLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/20",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Video, { size: 18 }),
                  " Join Meeting"
                ]
              }
            ),
            event.description && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm font-bold text-white/50 mb-3 uppercase tracking-wider", children: "About" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bg-white/5 border border-white/5 rounded-2xl p-5 text-white/80 leading-relaxed whitespace-pre-wrap", children: event.description })
            ] }),
            event.attendees && event.attendees.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm font-bold text-white/50 mb-3 uppercase tracking-wider", children: "Attendees" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col gap-2", children: event.attendees.map((attendee, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "div",
                {
                  className: "flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-white/10", children: (attendee.name || attendee.email).charAt(0).toUpperCase() }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-sm font-bold text-white", children: attendee.name || attendee.email }),
                      attendee.name && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-xs text-white/40", children: attendee.email })
                    ] }),
                    attendee.responseStatus && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var CalendarAgenda = (0, import_react4.memo)(function CalendarAgenda2({
  element,
  children
}) {
  const {
    title,
    events: initialEvents,
    selectedDate
  } = element.props;
  const [selectedEvent, setSelectedEvent] = (0, import_react4.useState)(
    null
  );
  const events = initialEvents || [];
  const groupedEvents = (0, import_react4.useMemo)(() => groupEventsByDate(events), [events]);
  const currentDate = selectedDate ? new Date(selectedDate) : /* @__PURE__ */ new Date();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col h-[400px] sm:h-[500px] lg:h-[600px] w-full bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden isolate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute top-0 right-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-indigo-600/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute bottom-0 left-0 w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] bg-purple-600/5 rounded-full blur-[50px] sm:blur-[70px] lg:blur-[90px] pointer-events-none -z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_framer_motion4.AnimatePresence, { mode: "wait", children: selectedEvent ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      EventDetailView,
      {
        event: selectedEvent,
        onBack: () => setSelectedEvent(null)
      },
      "detail"
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_framer_motion4.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "flex flex-col h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "p-4 sm:p-5 lg:p-6 pb-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between mb-4 sm:mb-5 lg:mb-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50", children: title || "Agenda" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Calendar, { className: "text-white/60 w-4 h-4 sm:w-5 sm:h-5" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-xs sm:text-sm font-bold text-indigo-400 uppercase tracking-widest pl-1 mb-1.5 sm:mb-2", children: currentDate.toLocaleDateString(void 0, {
              month: "long",
              year: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex-1 overflow-y-auto px-3 sm:px-4 pb-4 sm:pb-6 custom-scrollbar touch-pan-y", children: events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            EmptyState,
            {
              icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Calendar, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
              message: "No upcoming events"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-6 sm:space-y-8", children: Array.from(groupedEvents.entries()).map(
            ([dateStr, dayEvents]) => {
              const { label, sub } = formatDateHeader(
                new Date(dateStr)
              );
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative pl-3 sm:pl-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-baseline gap-2 sm:gap-3 mb-3 sm:mb-4 sticky top-0 bg-zinc-950/80 backdrop-blur-xl py-1.5 sm:py-2 z-10 -ml-3 sm:-ml-4 pl-3 sm:pl-4 border-b border-white/5 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-lg sm:text-xl font-bold text-white", children: label }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs sm:text-sm font-medium text-white/40", children: sub })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute left-0 top-8 sm:top-10 bottom-0 w-px bg-white/10" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-2 sm:space-y-3", children: dayEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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

// src/domain/CalendarAgenda/schema.ts
var import_zod = require("zod");
var CalendarAgendaSchema = import_zod.z.object({
  title: import_zod.z.string().optional().nullable().describe("Title for the calendar agenda"),
  description: import_zod.z.string().optional().nullable().describe("Description or subtitle"),
  view: import_zod.z.enum(["day", "week", "agenda"]).optional().default("agenda").describe("View mode: day, week, or agenda (list)"),
  selectedDate: import_zod.z.string().optional().describe("Selected date in ISO 8601 format"),
  events: import_zod.z.array(
    import_zod.z.object({
      id: import_zod.z.string().describe("Unique event identifier"),
      title: import_zod.z.string().describe("Event title"),
      description: import_zod.z.string().optional().nullable().describe("Event description"),
      location: import_zod.z.string().optional().nullable().describe("Event location"),
      start: import_zod.z.string().describe("Start date/time in ISO 8601 format"),
      end: import_zod.z.string().optional().nullable().describe("End date/time in ISO 8601 format"),
      allDay: import_zod.z.boolean().optional().describe("Whether this is an all-day event"),
      attendees: import_zod.z.array(
        import_zod.z.object({
          email: import_zod.z.string().describe("Attendee email"),
          name: import_zod.z.string().optional().describe("Attendee display name"),
          responseStatus: import_zod.z.enum(["accepted", "declined", "tentative", "needsAction"]).optional().describe("RSVP status")
        })
      ).optional().nullable().describe("List of event attendees"),
      meetingLink: import_zod.z.string().optional().nullable().describe("Video meeting URL (Google Meet, Zoom, etc.)"),
      color: import_zod.z.string().optional().nullable().describe("Event color (hex code)")
    })
  ).optional().nullable().describe("List of calendar events to display")
});
var CalendarAgendaDefinition = {
  name: "CalendarAgenda",
  props: CalendarAgendaSchema,
  description: "Displays a list of Google Calendar events with day/week/agenda views and event details.",
  hasChildren: false
};

// src/domain/Workout/component.tsx
var import_react11 = require("react");
var import_lucide_react9 = require("lucide-react");
var import_react12 = require("@onegenui/react");

// src/domain/Workout/components/session-timer.tsx
var import_react5 = require("react");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var SessionTimer = (0, import_react5.memo)(function SessionTimer2() {
  const [time, setTime] = (0, import_react5.useState)(0);
  const [isActive, setIsActive] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-3 px-3 py-1.5 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_lucide_react4.Timer,
      {
        className: isActive ? "text-emerald-400 animate-pulse" : "text-zinc-500",
        size: 14
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "font-mono text-sm font-medium text-white tracking-widest tabular-nums", children: formatTime2(time) }),
    isActive ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        onClick: () => setIsActive(false),
        className: "text-zinc-400 hover:text-white transition-colors",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "w-2 h-2 rounded-sm bg-current block" })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        onClick: () => setIsActive(true),
        className: "text-zinc-400 hover:text-white transition-colors",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.Play, { size: 10, fill: "currentColor" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        onClick: () => {
          setIsActive(false);
          setTime(0);
        },
        className: "text-zinc-600 hover:text-white transition-colors",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.RotateCcw, { size: 10 })
      }
    )
  ] });
});

// src/domain/Workout/components/exercise-item-card.tsx
var import_react8 = require("react");
var import_lucide_react8 = require("lucide-react");
var import_framer_motion5 = require("framer-motion");
var import_react9 = require("@onegenui/react");

// src/domain/Workout/components/WorkoutExerciseCard.tsx
var import_react7 = require("react");
var import_lucide_react7 = require("lucide-react");

// src/domain/Workout/components/WorkoutSetRow.tsx
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var WorkoutSetRow = ({
  set,
  index,
  lock,
  onUpdate,
  onRemove
}) => {
  const isCompleted = set.completed;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "group relative grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 items-center p-2.5 rounded-xl transition-all duration-300 border text-sm",
        isCompleted ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-green-500/5 border-emerald-500/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]" : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10"
      ),
      children: [
        isCompleted && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex justify-center items-center relative z-10", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
              "w-6 h-6 flex items-center justify-center rounded-lg text-[11px] font-bold transition-all duration-300",
              isCompleted ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30 scale-105" : "bg-white/5 text-white/50 border border-white/10"
            ),
            children: set.setNumber || index + 1
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            children: set.weight ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
            className: (0, import_utils.cn)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "text-center font-mono font-bold tracking-wider py-1.5",
              isCompleted ? "text-emerald-100" : "text-white"
            ),
            children: set.reps ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
            className: (0, import_utils.cn)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative z-10", children: lock ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "text-center font-mono font-bold py-1.5",
              isCompleted ? "text-emerald-200/70" : "text-white/60"
            ),
            children: set.rpe ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-white/15", children: "\u2014" })
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
            className: (0, import_utils.cn)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex justify-center relative z-10", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            onClick: () => !lock && onUpdate("completed", !isCompleted),
            disabled: lock,
            className: (0, import_utils.cn)(
              "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 border",
              isCompleted ? "bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400/50 text-white shadow-lg shadow-emerald-500/40 scale-105" : "bg-white/5 border-white/10 text-white/20 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105",
              lock && "cursor-not-allowed opacity-50"
            ),
            children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.Check, { size: 14, strokeWidth: 3, className: "drop-shadow-sm" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-2 h-2 rounded-full bg-white/10" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative z-10", children: !lock && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-200", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            onClick: onRemove,
            className: "w-7 h-7 rounded-lg flex items-center justify-center text-red-400/40 hover:text-red-400 hover:bg-red-500/15 transition-all duration-200 border border-transparent hover:border-red-500/20",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react5.Trash2, { size: 13 })
          }
        ) }) })
      ]
    }
  );
};

// src/domain/Workout/components/exercise-parts.tsx
var import_react6 = require("react");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var ProgressRing = (0, import_react6.memo)(function ProgressRing2({
  progress,
  size = 44
}) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - progress / 100 * circumference;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { width: size, height: size, className: "transform -rotate-90", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("linearGradient", { id: "progressGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "0%", stopColor: "#22c55e" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "100%", stopColor: "#86efac" })
    ] }) })
  ] });
});
var CardioDetails = (0, import_react6.memo)(function CardioDetails2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex gap-3", children: [
      duration && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex-1 bg-gradient-to-br from-violet-500/15 to-violet-600/5 rounded-xl p-4 border border-violet-500/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-violet-300/60 text-[10px] uppercase tracking-widest font-bold mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Clock, { size: 12 }),
          "Duration"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-2xl font-black text-white tracking-tight", children: duration })
      ] }),
      intensity && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: (0, import_utils.cn)(
            "flex-1 bg-gradient-to-br rounded-xl p-4 border",
            getIntensityColor(intensity)
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-current/60 text-[10px] uppercase tracking-widest font-bold mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react6.Flame, { size: 12 }),
              "Intensity"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-lg font-bold text-current capitalize", children: intensity })
          ]
        }
      )
    ] }),
    notes && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bg-white/5 rounded-xl p-3 border border-white/5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1", children: "Notes" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm text-white/70", children: notes })
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var getExerciseIcon = (type) => {
  switch (type) {
    case "cardio":
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Activity, { size: 18 });
    case "warmup":
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Flame, { size: 18 });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Dumbbell, { size: 18 });
  }
};
var WorkoutExerciseCard = (0, import_react7.memo)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        className: (0, import_utils.cn)(
          "group/card relative rounded-2xl overflow-hidden mb-3 transition-all duration-300",
          "bg-gradient-to-br from-white/[0.08] to-white/[0.02]",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.2)]",
          "hover:border-white/15 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3)]",
          "backdrop-blur-xl",
          isExpanded && "ring-1 ring-white/5"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "div",
            {
              className: "relative p-4 flex items-center gap-4 cursor-pointer select-none",
              onClick: onToggleExpand,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative", children: [
                  !isCardio && hasProgress && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ProgressRing, { progress, size: 48 }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    "div",
                    {
                      className: (0, import_utils.cn)(
                        "relative z-10 p-2.5 rounded-xl shadow-lg ring-1 transition-transform duration-300 group-hover/card:scale-105 bg-gradient-to-br",
                        getExerciseGradient(exercise.type)
                      ),
                      children: getExerciseIcon(exercise.type)
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-[15px] font-bold text-white truncate pr-2 group-hover/card:text-blue-100 transition-colors", children: exercise.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-xs text-white/40 flex items-center gap-2 mt-1 flex-wrap", children: [
                    isCardio ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
                      exercise.duration && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "flex items-center gap-1 bg-violet-500/15 text-violet-300 px-2 py-0.5 rounded-full font-medium", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Clock, { size: 10 }),
                        exercise.duration
                      ] }),
                      exercise.intensity && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "flex items-center gap-1 bg-rose-500/15 text-rose-300 px-2 py-0.5 rounded-full font-medium capitalize", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Flame, { size: 10 }),
                        exercise.intensity
                      ] })
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "font-semibold text-white/60", children: [
                        completedSets,
                        "/",
                        totalSets,
                        " done"
                      ] }),
                      hasProgress && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20", children: [
                        Math.round(progress),
                        "%"
                      ] }),
                      exercise.reps && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "bg-white/5 px-2 py-0.5 rounded-full text-[10px] font-bold text-white/50", children: [
                        exercise.reps,
                        " reps"
                      ] }),
                      exercise.rpe && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "flex items-center gap-1 bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.Target, { size: 9 }),
                        "RPE ",
                        exercise.rpe
                      ] })
                    ] }),
                    exercise.notes && !isExpanded && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-white/30 text-[10px] italic truncate max-w-[120px]", children: exercise.notes })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "div",
                  {
                    className: (0, import_utils.cn)(
                      "p-2 rounded-lg transition-all duration-300",
                      "text-white/20 group-hover/card:text-white/50",
                      isExpanded && "bg-white/5 text-white/40"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                      import_lucide_react7.ChevronDown,
                      {
                        size: 18,
                        className: (0, import_utils.cn)(
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
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "overflow-hidden transition-all duration-300 ease-out",
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "px-4 pb-4 pt-0 border-t border-white/5", children: [
                (exercise.rationale || exercise.notes) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-4 mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border-l-2 border-blue-500 rounded-r-lg", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-blue-300/60 mb-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react7.TrendingUp, { size: 10 }),
                    exercise.rationale ? "Coach Notes" : "Notes"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-blue-200/80", children: exercise.rationale || exercise.notes })
                ] }),
                isCardio ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  CardioDetails,
                  {
                    duration: exercise.duration,
                    intensity: exercise.intensity,
                    notes: !exercise.rationale ? exercise.notes : void 0
                  }
                ) }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
                  series.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-[36px_1fr_1fr_1fr_36px_36px] gap-2 mt-4 mb-2 px-2 text-[9px] uppercase font-bold text-white/25 tracking-[0.15em] text-center", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Set" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Weight" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Reps" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "RPE" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Done" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {})
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "space-y-1.5", children: series.map((set, idx) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
                  !lock && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        onAddSet();
                      },
                      className: (0, import_utils.cn)(
                        "mt-4 w-full py-3 flex items-center justify-center gap-2 rounded-xl",
                        "border-2 border-dashed border-white/10",
                        "text-sm font-semibold text-white/30",
                        "transition-all duration-300",
                        "hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10",
                        "active:scale-[0.98]",
                        "group/add"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                          import_lucide_react7.Plus,
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
var import_jsx_runtime9 = require("react/jsx-runtime");
var ExerciseItemCard = (0, import_react8.memo)(function ExerciseItemCard2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_framer_motion5.motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        import_react9.SelectableItem,
        {
          elementKey,
          itemId: item.id,
          className: (0, import_utils.cn)(
            "group relative overflow-hidden rounded-2xl border transition-all duration-300 isolate",
            isExpanded ? "bg-zinc-900/80 border-white/20 shadow-2xl" : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
                  isExpanded ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-white/5"
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                onClick: () => onToggleExpand(item.id),
                className: "p-4 flex items-center gap-4 cursor-pointer relative z-20",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "div",
                    {
                      className: (0, import_utils.cn)(
                        "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border transition-all duration-300",
                        isExpanded ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-300"
                      ),
                      children: item.name[0]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h4", { className: "text-base font-bold text-white tracking-tight leading-tight group-hover:text-emerald-50 transition-colors", children: item.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-xs font-mono text-muted-foreground", children: [
                        completedSets,
                        "/",
                        totalSets,
                        " DONE"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-1 h-1 rounded-full bg-zinc-700" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-xs font-mono text-muted-foreground", children: [
                        "LAST: ",
                        series[series.length - 1]?.weight || "-",
                        " KG"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "div",
                    {
                      className: (0, import_utils.cn)(
                        "w-8 h-8 flex items-center justify-center rounded-lg transition-transform duration-300",
                        isExpanded ? "bg-white/10 rotate-180 text-white" : "text-zinc-500"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react8.ChevronDown, { size: 14 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_framer_motion5.AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              import_framer_motion5.motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "relative z-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PerforatedDivider, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "p-4 pt-6 bg-black/20", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var SupersetGroup = (0, import_react8.memo)(function SupersetGroup2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mb-6 relative pl-4 border-l border-dashed border-white/10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-zinc-900 border border-white/10 px-2 py-0.5 rounded", children: "Superset" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex flex-col gap-4", children: item.items?.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_uuid = require("uuid");
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
        id: (0, import_uuid.v4)(),
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
var import_react10 = require("react");
function useWorkoutLogic(workoutAdapter, stateAdapter, options) {
  const { initialItems, lock: initialLock = false } = options;
  const [edits, setEdits] = (0, import_react10.useState)({});
  const [expandedIds, setExpandedIds] = (0, import_react10.useState)(/* @__PURE__ */ new Set());
  const [isLocked, setIsLocked] = (0, import_react10.useState)(!!initialLock);
  (0, import_react10.useEffect)(() => {
    if (initialItems.length > 0 && initialItems[0]?.id) {
      setExpandedIds(/* @__PURE__ */ new Set([initialItems[0].id]));
    }
  }, [initialItems]);
  const displayItems = (0, import_react10.useMemo)(
    () => workoutAdapter.mergeEdits(initialItems, edits),
    [workoutAdapter, initialItems, edits]
  );
  const toggleExpand = (0, import_react10.useCallback)((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);
  const toggleLock = (0, import_react10.useCallback)(() => {
    setIsLocked((prev) => !prev);
  }, []);
  const updateExercise = (0, import_react10.useCallback)(
    (id, field, value) => {
      if (isLocked) return;
      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(displayItems, id);
        if (!exercise) return prev;
        return stateAdapter.updateExerciseField(prev, exercise, field, value);
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems]
  );
  const updateSeries = (0, import_react10.useCallback)(
    (exerciseId, seriesId, field, value) => {
      if (isLocked) return;
      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId
        );
        if (!exercise) return prev;
        return stateAdapter.updateSetField(
          prev,
          exercise,
          seriesId,
          field,
          value
        );
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems]
  );
  const addSet = (0, import_react10.useCallback)(
    (exerciseId) => {
      if (isLocked) return;
      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId
        );
        if (!exercise) return prev;
        const newSet = workoutAdapter.createNewSet(exercise.series || []);
        return stateAdapter.addSetToExercise(prev, exercise, newSet);
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems]
  );
  const removeSet = (0, import_react10.useCallback)(
    (exerciseId, seriesId) => {
      if (isLocked) return;
      setEdits((prev) => {
        const exercise = workoutAdapter.findExerciseById(
          displayItems,
          exerciseId
        );
        if (!exercise) return prev;
        const updatedSeries = workoutAdapter.removeSetAndRenumber(
          exercise.series || [],
          seriesId
        );
        return stateAdapter.removeSetFromExercise(
          prev,
          exercise,
          updatedSeries
        );
      });
    },
    [isLocked, workoutAdapter, stateAdapter, displayItems]
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
var import_jsx_runtime10 = require("react/jsx-runtime");
var Workout = (0, import_react11.memo)(function Workout2({
  element,
  children
}) {
  const {
    title,
    items,
    exercises,
    lock: initialLock = false
  } = element.props;
  const resolvedItems = (0, import_react11.useMemo)(() => {
    const raw = items || exercises || [];
    return Array.isArray(raw) ? raw : [];
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
    lock: initialLock
  });
  (0, import_react12.useDomainAutoSave)("workout", element.key, {
    title,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    items: displayItems,
    status: "active"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Activity, { className: "w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" }),
        title
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SessionTimer, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: toggleLock,
            className: (0, import_utils.cn)(
              "h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg border transition-colors touch-manipulation",
              isLocked ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white"
            ),
            children: isLocked ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Lock, { className: "w-3 h-3" }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.Unlock, { className: "w-3 h-3" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col gap-3 sm:gap-4", children: displayItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react9.BicepsFlexed, { className: "w-10 h-10 sm:w-12 sm:h-12" }),
        message: "No exercises programmed"
      }
    ) : displayItems.map(
      (item) => item.items && item.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// src/domain/Workout/schema.ts
var import_zod2 = require("zod");

// src/utils/shared-schemas.ts
var import_schemas = require("@onegenui/schemas");

// src/domain/Workout/schema.ts
var WorkoutPropsSchema = import_zod2.z.object({
  title: import_zod2.z.string().nullable(),
  items: import_zod2.z.array(import_schemas.exerciseSchema).min(1).describe("List of exercises/activities (REQUIRED, min 1)"),
  lock: import_zod2.z.boolean().nullable(),
  exercises: import_zod2.z.array(import_schemas.exerciseSchema).nullable().optional()
});
var WorkoutDefinition = {
  name: "Workout",
  props: WorkoutPropsSchema,
  description: "Workout logger with exercises, sets, reps, and agent suggestions.",
  hasChildren: true
};

// src/domain/Nutrition/component.tsx
var import_react15 = require("react");
var import_react16 = require("@onegenui/react");
var import_lucide_react11 = require("lucide-react");

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

// src/domain/Nutrition/component.tsx
var import_framer_motion8 = require("framer-motion");

// src/domain/Nutrition/components/types.ts
var MACRO_TARGETS = { p: 180, c: 250, f: 70, cal: 2400 };

// src/domain/Nutrition/components/macro-metric.tsx
var import_react13 = require("react");
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime11 = require("react/jsx-runtime");
var MacroMetric = (0, import_react13.memo)(function MacroMetric2({
  label,
  value,
  max,
  color
}) {
  const percentage = Math.min(100, value / max * 100);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "font-mono text-white/50", children: [
        Math.round(value),
        "g"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_framer_motion6.motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${percentage}%` },
        transition: { duration: 0.8, ease: "easeOut" },
        className: (0, import_utils.cn)("h-full rounded-full", color)
      }
    ) })
  ] });
});

// src/domain/Nutrition/components/meal-ticket.tsx
var import_react14 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var MealTicket = (0, import_react14.memo)(function MealTicket2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_framer_motion7.motion.div,
    {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay: index * 0.1 },
      className: "group relative",
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": meal.id,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "div",
        {
          className: (0, import_utils.cn)(
            "rounded-2xl border bg-zinc-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
            isFullyConsumed ? "border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_-10px_rgba(16,185,129,0.2)]" : "border-white/10 hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-xl"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  "absolute top-0 left-0 bottom-0 w-1 transition-colors",
                  isFullyConsumed ? "bg-emerald-500" : "bg-white/10 group-hover:bg-amber-500"
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "p-5 pl-7", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex justify-between items-start mb-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 font-mono", children: [
                    "Meal 0",
                    index + 1
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "h4",
                    {
                      className: (0, import_utils.cn)(
                        "text-lg font-bold tracking-tight",
                        isFullyConsumed ? "text-emerald-100" : "text-foreground"
                      ),
                      children: meal.name
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-right", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-xl font-black text-white tabular-nums leading-none", children: Math.round(totalCal) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-[10px] font-bold text-muted-foreground uppercase mt-0.5", children: "kcal" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PerforatedDivider, { className: "my-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col gap-2 relative z-10", children: meal.items.map((item) => {
                const itemCal = item.calories || calculateCalories(item.protein, item.carbs, item.fats);
                return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                  "div",
                  {
                    onClick: () => !lock && onToggleItem(meal.id, item.id),
                    className: (0, import_utils.cn)(
                      "flex items-center justify-between p-2 -mx-2 rounded-lg transition-colors cursor-pointer group/item",
                      item.consumed ? "opacity-50" : "hover:bg-white/5"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                          "div",
                          {
                            className: (0, import_utils.cn)(
                              "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                              item.consumed ? "bg-emerald-500 border-emerald-500" : "border-white/20 group-hover/item:border-white/40"
                            ),
                            children: item.consumed && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react10.Check, { size: 10, className: "text-black stroke-[4]" })
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "div",
                            {
                              className: (0, import_utils.cn)(
                                "text-sm font-medium leading-none",
                                item.consumed && "line-through"
                              ),
                              children: item.name
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "text-[10px] text-muted-foreground font-mono mt-0.5", children: [
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
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "font-mono text-xs text-white/60", children: itemCal })
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
var import_jsx_runtime13 = require("react/jsx-runtime");
var Nutrition = (0, import_react15.memo)(function Nutrition2({
  element,
  children
}) {
  const {
    title,
    meals: initialMeals,
    lock = false
  } = element.props;
  const [localEdits, setLocalEdits] = (0, import_react15.useState)({});
  const displayMeals = (0, import_react15.useMemo)(() => {
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
  (0, import_react16.useDomainAutoSave)("meal", element.key, {
    type: "meal_plan",
    foods: displayMeals.flatMap((m) => m.items),
    meals: displayMeals,
    date: (/* @__PURE__ */ new Date()).toISOString()
  });
  const toggleConsumed = (0, import_react15.useCallback)(
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
  const stats = (0, import_react15.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold font-sans tracking-tight flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react11.Flame, { className: "w-4 h-4 sm:w-5 sm:h-5 text-orange-500" }),
      title
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_framer_motion8.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 shadow-lg relative overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute top-0 right-0 p-2 sm:p-3 opacity-10", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react11.Target, { className: "w-16 h-16 sm:w-20 sm:h-20", strokeWidth: 1 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-end mb-4 sm:mb-6 relative z-10 gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-[0.625rem] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Daily Target" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-2xl sm:text-3xl font-black text-white leading-none", children: [
              Math.round(stats.cal),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "text-xs sm:text-sm font-medium text-white/40 ml-1", children: [
                "/ ",
                MACRO_TARGETS.cal,
                " kcal"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-3 gap-2 sm:gap-4 relative z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              MacroMetric,
              {
                label: "Protein",
                value: stats.p,
                max: MACRO_TARGETS.p,
                color: "bg-indigo-500"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              MacroMetric,
              {
                label: "Carbs",
                value: stats.c,
                max: MACRO_TARGETS.c,
                color: "bg-amber-500"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-col gap-3 sm:gap-4", children: displayMeals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react11.Utensils, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "Empty Plan"
      }
    ) : displayMeals.map((meal, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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

// src/domain/Nutrition/schema.ts
var import_zod3 = require("zod");
var mealItemSchema2 = import_zod3.z.object({
  id: import_zod3.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod3.z.string().describe("Food name"),
  protein: import_zod3.z.number().describe("Protein in grams"),
  carbs: import_zod3.z.number().describe("Carbs in grams"),
  fats: import_zod3.z.number().describe("Fats in grams"),
  calories: import_zod3.z.number().nullable().optional(),
  grams: import_zod3.z.number().nullable().optional(),
  consumed: import_zod3.z.boolean().nullable().optional(),
  alternatives: import_zod3.z.array(
    import_zod3.z.object({
      id: import_zod3.z.string().describe("Alternative food id"),
      name: import_zod3.z.string().describe("Alternative food name"),
      protein: import_zod3.z.number().describe("Protein in grams"),
      carbs: import_zod3.z.number().describe("Carbs in grams"),
      fats: import_zod3.z.number().describe("Fats in grams"),
      calories: import_zod3.z.number().nullable().optional(),
      grams: import_zod3.z.number().nullable().optional(),
      reason: import_zod3.z.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative foods for this item")
});
var mealSchema2 = import_zod3.z.object({
  id: import_zod3.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod3.z.string().describe("Meal name"),
  items: import_zod3.z.array(mealItemSchema2).describe("Foods for this meal"),
  alternatives: import_zod3.z.array(
    import_zod3.z.object({
      id: import_zod3.z.string().describe("Alternative meal id"),
      name: import_zod3.z.string().describe("Alternative meal name"),
      items: import_zod3.z.array(mealItemSchema2).describe("Alternative meal items"),
      reason: import_zod3.z.string().nullable().optional().describe("Why it's a good swap")
    })
  ).nullable().optional().describe("AI-suggested alternative meals")
});
var dailyTargetsSchema = import_zod3.z.object({
  calories: import_zod3.z.number().nullable().optional(),
  protein: import_zod3.z.number().nullable().optional(),
  carbs: import_zod3.z.number().nullable().optional(),
  fats: import_zod3.z.number().nullable().optional()
}).nullable().optional();
var NutritionPropsSchema = import_zod3.z.object({
  title: import_zod3.z.string().nullable().optional(),
  meals: import_zod3.z.array(mealSchema2).describe("Meals with items (REQUIRED)"),
  dailyTargets: dailyTargetsSchema,
  lock: import_zod3.z.boolean().nullable().optional()
});
var NutritionDefinition = {
  name: "Nutrition",
  props: NutritionPropsSchema,
  description: "Advanced nutrition plan with meal items, macro targets, and AI-generated alternatives for foods and meals.",
  hasChildren: true
};

// src/domain/Flight/component.tsx
var import_react21 = require("react");
var import_react22 = require("@onegenui/react");
var import_lucide_react14 = require("lucide-react");
var import_framer_motion11 = require("framer-motion");

// src/domain/Flight/components/flight-segment.tsx
var import_react17 = require("react");
var import_lucide_react12 = require("lucide-react");
var import_framer_motion9 = require("framer-motion");

// src/domain/Flight/components/types.ts
var STATUS_VARIANT_MAP = {
  "On Time": { variant: "success" },
  Boarding: { variant: "info", pulse: true },
  Delayed: { variant: "warning" },
  Departed: { variant: "neutral" },
  Cancelled: { variant: "error" }
};

// src/domain/Flight/components/flight-segment.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var FlightStatus = (0, import_react17.memo)(function FlightStatus2({
  status
}) {
  const config = status ? STATUS_VARIANT_MAP[status] : null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    StatusBadge,
    {
      label: status || "Scheduled",
      variant: config?.variant || "neutral",
      pulse: config?.pulse
    }
  );
});
var FlightSegment = (0, import_react17.memo)(function FlightSegment2({
  flight,
  label,
  isReturn = false,
  index = 0
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_framer_motion9.motion.div,
    {
      initial: { opacity: 0, x: isReturn ? 20 : -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, delay: index * 0.15 },
      className: "relative",
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "div",
            {
              className: (0, import_utils.cn)(
                "info-pill",
                isReturn ? "bg-purple-500/10" : "bg-sky-500/10"
              ),
              children: [
                isReturn ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react12.ArrowRight, { className: "w-2.5 h-2.5 rotate-180" }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react12.ArrowRight, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: isReturn ? "text-purple-400" : "text-sky-400", children: label })
              ]
            }
          ),
          flight.departure.date && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "info-pill", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react12.Calendar, { className: "w-2.5 h-2.5" }),
            flight.departure.date
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              import_framer_motion9.motion.div,
              {
                whileHover: { scale: 1.05 },
                className: "w-10 h-10 rounded-xl glass-surface flex items-center justify-center text-white/80 font-bold text-lg",
                children: flight.airline[0]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "font-bold text-foreground text-sm tracking-tight", children: flight.airline }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-mono-tech mt-0.5", children: flight.flightNumber })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FlightStatus, { status: flight.status })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center justify-between relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-left z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              import_framer_motion9.motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                className: "text-display text-2xl sm:text-3xl",
                children: flight.departure.code
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate", children: flight.departure.city }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "value-badge mt-1", children: flight.departure.time })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex-1 px-4 sm:px-8 flex flex-col items-center justify-center relative", children: [
            flight.duration && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "info-pill mb-2 z-10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react12.Clock, { className: "w-2.5 h-2.5" }),
              flight.duration
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-full h-0.5 bg-white/10 relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              import_framer_motion9.motion.div,
              {
                className: (0, import_utils.cn)(
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
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              import_lucide_react12.Plane,
              {
                className: (0, import_utils.cn)(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 stroke-1.5",
                  isReturn ? "text-purple-400/50 -rotate-90" : "text-sky-400/50 rotate-90"
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-right z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              import_framer_motion9.motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "text-display text-2xl sm:text-3xl",
                children: flight.arrival.code
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground mt-1 max-w-24 sm:max-w-none truncate ml-auto", children: flight.arrival.city }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "value-badge mt-1", children: flight.arrival.time })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-dashed border-white/5", children: [
          flight.departure.terminal && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-label mb-0.5", children: "Terminal" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm font-semibold text-foreground", children: flight.departure.terminal })
          ] }),
          flight.gate && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-label mb-0.5", children: "Gate" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm font-semibold text-foreground", children: flight.gate })
          ] }),
          flight.seat && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "hidden sm:block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-label mb-0.5", children: "Seat" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm font-semibold text-foreground", children: flight.seat })
          ] }),
          flight.class && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "hidden sm:block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-label mb-0.5", children: "Class" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm font-semibold text-foreground", children: flight.class })
          ] })
        ] })
      ]
    }
  );
});

// src/domain/Flight/components/flight-cards.tsx
var import_react18 = require("react");
var import_lucide_react13 = require("lucide-react");
var import_react19 = require("@onegenui/react");
var import_framer_motion10 = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
var RoundTripCard = (0, import_react18.memo)(function RoundTripCard2({
  trip,
  index,
  elementKey,
  lock
}) {
  const price = trip.totalPrice || trip.outbound.price;
  const bookingUrl = trip.bookingUrl || trip.outbound.bookingUrl;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_framer_motion10.motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        import_react19.SelectableItem,
        {
          elementKey,
          itemId: trip.outbound.id,
          className: "card-glass group",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "gradient-bar" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-5 sm:p-6", children: [
              trip.return && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                import_framer_motion10.motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  className: "flex items-center gap-2 mb-6",
                  children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-sky-500/10 to-purple-500/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react13.ArrowLeftRight, { className: "w-3.5 h-3.5" }),
                    "Round Trip"
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                FlightSegment,
                {
                  flight: trip.outbound,
                  label: trip.return ? "Outbound" : void 0,
                  index: 0
                }
              ),
              trip.return && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "divider-perforated my-6" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  FlightSegment,
                  {
                    flight: trip.return,
                    label: "Return",
                    isReturn: true,
                    index: 1
                  }
                )
              ] }),
              (price || bookingUrl) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                import_framer_motion10.motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "flex items-center justify-between mt-6 pt-5 border-t border-white/5",
                  children: [
                    price && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-label mb-0.5", children: trip.return ? "Total Price" : "Price" }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-xl sm:text-2xl font-black text-white leading-none", children: formatCurrency(price.amount, price.currency) })
                    ] }),
                    bookingUrl && !lock && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      import_framer_motion10.motion.a,
                      {
                        href: bookingUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "btn-primary no-underline",
                        children: [
                          "Book ",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react13.ArrowRight, { className: "w-3 h-3", strokeWidth: 3 })
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
var SingleFlightCard = (0, import_react18.memo)(function SingleFlightCard2({
  flight,
  index,
  elementKey,
  lock
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_framer_motion10.motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        import_react19.SelectableItem,
        {
          elementKey,
          itemId: flight.id,
          className: "card-glass group",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "gradient-bar" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-5 sm:p-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FlightSegment, { flight, index: 0 }),
              (flight.price || flight.bookingUrl) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                import_framer_motion10.motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  className: "flex items-center justify-between mt-6 pt-5 border-t border-white/5",
                  children: [
                    flight.price && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-label mb-0.5", children: "Price" }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-xl sm:text-2xl font-black text-white leading-none", children: formatCurrency(flight.price.amount, flight.price.currency) })
                    ] }),
                    flight.bookingUrl && !lock && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      import_framer_motion10.motion.a,
                      {
                        href: flight.bookingUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className: "btn-primary no-underline",
                        children: [
                          "Book ",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react13.ArrowRight, { className: "w-3 h-3", strokeWidth: 3 })
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
var import_react20 = require("react");
function useFlightLogic(flightAdapter, stateAdapter, options) {
  const { trips, flights, lock = false } = options;
  const displayTrips = (0, import_react20.useMemo)(
    () => stateAdapter.computeDisplayTrips(
      trips,
      flights,
      flightAdapter.pairFlightsIntoTrips.bind(flightAdapter)
    ),
    [stateAdapter, flightAdapter, trips, flights]
  );
  const hasContent = displayTrips.length > 0;
  return {
    displayTrips,
    hasContent,
    getTripKey: flightAdapter.getTripKey.bind(flightAdapter),
    isRoundTrip: flightAdapter.isRoundTrip.bind(flightAdapter)
  };
}

// src/domain/Flight/component.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
var headerVariants = {
  hidden: { opacity: 0, y: "-0.625rem" },
  visible: { opacity: 1, y: 0 }
};
var Flight = (0, import_react21.memo)(function Flight2({
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
    flightAdapter,
    stateAdapter,
    { trips, flights, lock }
  );
  const totalPrice = (0, import_react21.useMemo)(() => {
    return displayTrips.reduce((sum, trip) => {
      const outPrice = trip.outbound?.price?.amount || 0;
      const retPrice = trip.return?.price?.amount || 0;
      return sum + outPrice + retPrice;
    }, 0);
  }, [displayTrips]);
  const currency = displayTrips[0]?.outbound?.price?.currency || "EUR";
  (0, import_react22.useDomainAutoSave)("flight", element.key, {
    title,
    trips: displayTrips,
    status: "search",
    totalPrice: totalPrice > 0 ? totalPrice : null,
    currency
  });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    import_framer_motion11.motion.div,
    {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-4 sm:gap-6 w-full",
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          import_framer_motion11.motion.h3,
          {
            variants: headerVariants,
            className: "m-0 text-lg sm:text-xl font-bold text-foreground tracking-tight flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react14.Plane, { className: "w-4 h-4 sm:w-5 sm:h-5 text-sky-500" }),
              title
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_framer_motion11.AnimatePresence, { mode: "popLayout", children: displayTrips.map((trip, i) => {
          const itemKey = getTripKey(trip, i);
          if (isRoundTrip(trip)) {
            return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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

// src/domain/Flight/schema.ts
var import_zod4 = require("zod");
var flightDetailsSchema = import_zod4.z.object({
  code: import_zod4.z.string(),
  city: import_zod4.z.string(),
  time: import_zod4.z.string(),
  date: import_zod4.z.string().optional(),
  terminal: import_zod4.z.string().optional()
});
var flightSchema = import_zod4.z.object({
  id: import_zod4.z.string().describe("Unique ID (REQUIRED)"),
  airline: import_zod4.z.string(),
  flightNumber: import_zod4.z.string(),
  departure: flightDetailsSchema,
  arrival: flightDetailsSchema,
  duration: import_zod4.z.string().describe("Flight duration (e.g. '7h 30m') - REQUIRED"),
  price: import_zod4.z.object({
    amount: import_zod4.z.number().describe("Price amount"),
    currency: import_zod4.z.string().default("EUR").describe("Currency code")
  }).optional().describe("Flight price"),
  bookingUrl: import_zod4.z.string().url().optional().describe("Deep link to booking page"),
  status: import_zod4.z.enum(["On Time", "Delayed", "Cancelled", "Boarding", "Departed"]).nullable().optional(),
  gate: import_zod4.z.string().nullable().optional(),
  seat: import_zod4.z.string().nullable().optional(),
  class: import_zod4.z.string().nullable().optional(),
  foundBy: import_zod4.z.string().nullable().optional()
});
var tripSchema = import_zod4.z.object({
  outbound: flightSchema.describe("Outbound flight details"),
  return: flightSchema.optional().describe("Return flight details (for round trips)"),
  totalPrice: import_zod4.z.object({
    amount: import_zod4.z.number(),
    currency: import_zod4.z.string().default("EUR")
  }).optional().describe("Total price for round trip"),
  bookingUrl: import_zod4.z.string().url().optional().describe("Combined booking URL")
});
var FlightPropsSchema = import_zod4.z.object({
  title: import_zod4.z.string().nullable().optional(),
  flights: import_zod4.z.array(flightSchema).optional().describe(
    "List of individual flights (will be auto-paired into round trips if possible)"
  ),
  trips: import_zod4.z.array(tripSchema).optional().describe("Pre-defined round trips with outbound and return flights"),
  lock: import_zod4.z.boolean().nullable().optional()
});
var FlightDefinition = {
  name: "Flight",
  props: FlightPropsSchema,
  description: "Flight details card with boarding pass style. Supports both individual flights and round trips. When flights array is provided, it will automatically pair matching routes into round trips. Alternatively, use trips array for explicit round trip definitions.",
  hasChildren: true
};

// src/domain/Hotel/component.tsx
var import_react23 = require("react");
var import_react24 = require("@onegenui/react");
var import_lucide_react15 = require("lucide-react");
var import_framer_motion12 = require("framer-motion");

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
var import_jsx_runtime17 = require("react/jsx-runtime");
var hotelAdapter = getHotelAdapter();
var containerVariants2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
var cardVariants = {
  hidden: { opacity: 0, y: "1.25rem" },
  visible: { opacity: 1, y: 0 }
};
var HotelStatusBadge = ({ status }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  StatusBadge,
  {
    label: status,
    variant: hotelAdapter.getStatusVariant(status),
    pulse: true
  }
);
var Hotel = (0, import_react23.memo)(function Hotel2({
  element,
  children
}) {
  const {
    title,
    hotels,
    layout = "list"
  } = element.props;
  const { checkIn, checkOut, totalPrice, currency } = (0, import_react23.useMemo)(() => {
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
  (0, import_react24.useDomainAutoSave)("hotel", element.key, {
    title,
    hotels: hotels || [],
    status: "search",
    checkIn,
    checkOut,
    totalPrice,
    currency
  });
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    import_framer_motion12.motion.div,
    {
      variants: containerVariants2,
      initial: "hidden",
      animate: "visible",
      className: "flex flex-col gap-4 sm:gap-6 w-full",
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h3", { className: "m-0 text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Hotel, { className: "w-5 h-5 sm:w-6 sm:h-6 text-amber-400 hidden" }),
          title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "grid gap-4 sm:gap-6",
              // Mobile-first: single column, then responsive
              layout === "card" ? "grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]" : "grid-cols-1"
            ),
            children: (hotels || []).map((hotel, i) => {
              return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                import_framer_motion12.motion.div,
                {
                  variants: cardVariants,
                  children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                    import_react24.SelectableItem,
                    {
                      elementKey: element.key,
                      itemId: hotel.id,
                      className: (0, import_utils.cn)(
                        "group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer transition-all duration-500",
                        "hover:shadow-2xl hover:shadow-black/50 hover:border-white/20 hover:-translate-y-0.5",
                        "flex isolate rounded-xl sm:rounded-3xl",
                        // Mobile: always stack vertically
                        "flex-col",
                        // Desktop list: side-by-side
                        layout === "list" && "sm:flex-row sm:min-h-[12.5rem]"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                          "div",
                          {
                            className: (0, import_utils.cn)(
                              "relative overflow-hidden z-0",
                              // Mobile: fixed height on top
                              "h-36 w-full",
                              // Desktop list: side image
                              layout === "list" && "sm:w-[15rem] sm:min-w-[15rem] sm:h-full sm:absolute sm:inset-y-0 sm:left-0"
                            ),
                            children: [
                              hotel.image ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute inset-0 transition-transform duration-700 group-hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                                "img",
                                {
                                  src: hotel.image,
                                  alt: hotel.name,
                                  className: "w-full h-full object-cover"
                                }
                              ) }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Hotel, { className: "w-10 h-10 sm:w-12 sm:h-12 text-white/10" }) }),
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" }),
                              layout === "list" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-zinc-950" }),
                              hotel.status && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute top-3 left-3 sm:top-4 sm:left-4", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(HotelStatusBadge, { status: hotel.status }) })
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                          "div",
                          {
                            className: (0, import_utils.cn)(
                              "relative z-10 flex flex-col p-4 sm:p-6 flex-1",
                              layout === "list" && "sm:pl-[14rem]"
                            ),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-1 min-w-0", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h4", { className: "text-base sm:text-xl font-bold text-foreground group-hover:text-amber-400 transition-colors leading-tight truncate", children: hotel.name }),
                                  hotel.address && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-white/60", children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.MapPin, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/40 flex-shrink-0" }),
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "truncate", children: hotel.address })
                                  ] })
                                ] }),
                                hotel.rating && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shrink-0 self-start", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Star, { className: "w-3 h-3 fill-amber-400 text-amber-400" }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-xs sm:text-sm font-bold text-foreground", children: hotel.rating })
                                ] })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "h-px bg-white/10 w-full my-3 sm:my-4 group-hover:bg-white/20 transition-colors" }),
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid grid-cols-2 gap-3 sm:gap-4 text-[0.625rem] sm:text-xs", children: [
                                hotel.dates && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-0.5 sm:space-y-1", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]", children: "Dates" }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-foreground font-medium flex items-center gap-1 sm:gap-1.5", children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Calendar, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-400 flex-shrink-0" }),
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "truncate", children: [
                                      formatDateShort(hotel.dates.checkIn),
                                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-white/30 mx-0.5", children: "-" }),
                                      formatDateShort(hotel.dates.checkOut)
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-0.5 sm:space-y-1", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]", children: "Details" }),
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-foreground font-medium flex items-center gap-1.5 sm:gap-2 flex-wrap", children: [
                                    hotel.guests && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "flex items-center gap-0.5 sm:gap-1", children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Users, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" }),
                                      hotel.guests
                                    ] }),
                                    hotel.roomType && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                                      "span",
                                      {
                                        className: "flex items-center gap-0.5 sm:gap-1 truncate max-w-[5rem] sm:max-w-[6.25rem]",
                                        title: hotel.roomType,
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.Bed, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-400 flex-shrink-0" }),
                                          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "truncate", children: hotel.roomType })
                                        ]
                                      }
                                    )
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "mt-auto pt-4 sm:pt-6 flex w-full items-end justify-between gap-2", children: [
                                hotel.amenities && hotel.amenities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "hidden sm:flex -space-x-2", children: hotel.amenities.slice(0, 3).map((a, idx) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                                  "div",
                                  {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] text-zinc-400 font-bold uppercase overflow-hidden",
                                    title: a,
                                    children: a[0]
                                  },
                                  idx
                                )) }),
                                hotel.price && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "ml-auto flex items-center gap-3 sm:gap-4", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-right", children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-white/40 font-bold uppercase tracking-wide", children: hotel.price.perNight ? "Per Night" : "Total" }),
                                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-lg sm:text-2xl font-black text-foreground tracking-tight leading-none", children: formatCurrency(
                                      hotel.price.amount,
                                      hotel.price.currency
                                    ) })
                                  ] }),
                                  hotel.bookingUrl ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                                    "a",
                                    {
                                      href: hotel.bookingUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className: "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.ArrowRight, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", strokeWidth: 2.5 })
                                    }
                                  ) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react15.ArrowRight, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", strokeWidth: 2.5 }) })
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
            })
          }
        ),
        children
      ]
    }
  );
});

// src/domain/Hotel/schema.ts
var import_zod5 = require("zod");
var HotelDataSchema = import_zod5.z.object({
  id: import_zod5.z.string().describe("Unique identifier for the hotel"),
  name: import_zod5.z.string().describe("Hotel name"),
  rating: import_zod5.z.number().optional().describe("Hotel rating (e.g., 4.5)"),
  address: import_zod5.z.string().optional().describe("Hotel address"),
  dates: import_zod5.z.object({
    checkIn: import_zod5.z.string().describe("Check-in date (ISO format)"),
    checkOut: import_zod5.z.string().describe("Check-out date (ISO format)")
  }).optional().describe("Booking dates"),
  price: import_zod5.z.object({
    amount: import_zod5.z.number().describe("Price amount"),
    currency: import_zod5.z.string().describe("Currency code (e.g., EUR, USD)"),
    perNight: import_zod5.z.boolean().optional().describe("Whether price is per night")
  }).optional().describe("Price information"),
  image: import_zod5.z.string().optional().describe(
    "URL to hotel image - ALWAYS include when available from web search"
  ),
  amenities: import_zod5.z.array(import_zod5.z.string()).optional().describe("List of amenities"),
  status: import_zod5.z.enum(["Available", "Booked", "Sold Out", "Reserved"]).optional().describe("Booking status"),
  roomType: import_zod5.z.string().optional().describe("Type of room (e.g., Double, Suite)"),
  guests: import_zod5.z.number().optional().describe("Number of guests"),
  bookingUrl: import_zod5.z.string().optional().describe("URL to the hotel booking page - ALWAYS include when available")
});
var HotelPropsSchema = import_zod5.z.object({
  title: import_zod5.z.string().optional().describe("Section title for the hotel list"),
  hotels: import_zod5.z.array(HotelDataSchema).optional().describe("Array of hotels to display"),
  layout: import_zod5.z.enum(["list", "card"]).optional().describe("Display layout: 'list' (default) or 'card'")
});
var HotelDefinition = {
  name: "Hotel",
  props: HotelPropsSchema,
  description: "Display hotel listings with images, ratings, prices, and booking links",
  hasChildren: true
};

// src/domain/Hotel/hooks/useHotelLogic.ts
var import_react25 = require("react");

// src/domain/Trip/component.tsx
var import_react26 = require("react");
var import_react27 = require("@onegenui/react");
var import_lucide_react16 = require("lucide-react");
var import_framer_motion13 = require("framer-motion");
var import_jsx_runtime18 = require("react/jsx-runtime");
var STATUS_TO_VARIANT = {
  Upcoming: "info",
  Completed: "success",
  Draft: "warning",
  Cancelled: "error"
};
var Trip = (0, import_react26.memo)(function Trip2({
  element,
  children
}) {
  const { title, trips, activeTripId } = element.props;
  const activeTrip = (0, import_react26.useMemo)(
    () => trips?.find((t) => t.id === activeTripId),
    [trips, activeTripId]
  );
  (0, import_react27.useDomainAutoSave)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50", children: title || "My Trips" }) }),
    trips && trips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-none snap-x snap-mandatory perspective-[1000px] touch-pan-x", children: trips.map((trip, index) => {
      const isActive = activeTripId === trip.id;
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        import_framer_motion13.motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: index * 0.1 },
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": trip.id,
          className: (0, import_utils.cn)(
            "min-w-[16rem] sm:min-w-[17.5rem] h-[10rem] sm:h-[11.25rem] p-4 sm:p-5 rounded-2xl sm:rounded-3xl cursor-pointer relative overflow-hidden group snap-center transition-all duration-500 border touch-manipulation",
            isActive ? "border-primary/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] scale-100" : "border-white/5 hover:border-white/20 bg-black/40 hover:bg-black/60 scale-[0.98] hover:scale-[1.0]"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "absolute inset-0 z-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                    isActive ? "from-indigo-600/20 to-purple-600/20 opacity-100" : "from-zinc-900 to-black opacity-100"
                  )
                }
              ),
              trip.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "img",
                {
                  src: trip.imageUrl,
                  alt: "",
                  className: "w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex justify-between items-start gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-1.5 text-white/90 font-bold tracking-tight bg-black/30 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react16.MapPin, { className: "w-3 h-3 text-indigo-400" }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[0.625rem] sm:text-xs uppercase whitespace-nowrap", children: trip.destination || "Unknown" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                  StatusBadge,
                  {
                    label: trip.status,
                    variant: STATUS_TO_VARIANT[trip.status] || "neutral"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                  "h4",
                  {
                    className: (0, import_utils.cn)(
                      "text-base sm:text-lg lg:text-xl font-bold leading-tight transition-colors line-clamp-2",
                      isActive ? "text-white" : "text-zinc-200"
                    ),
                    children: trip.title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-medium text-white/50", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react16.Calendar, { className: "w-3 h-3" }),
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
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "pt-3 sm:pt-4 mt-auto border-t border-white/10 flex items-center gap-3 sm:gap-4 text-[0.625rem] sm:text-xs font-medium text-white/60", children: [
                trip.stats?.flights ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react16.Plane, { className: "w-3 h-3 text-sky-400" }),
                  " ",
                  trip.stats.flights,
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "hidden sm:inline", children: "Flights" })
                ] }) : null,
                trip.stats?.hotels ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react16.Hotel, { className: "w-3 h-3 text-amber-400" }),
                  " ",
                  trip.stats.hotels,
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "hidden sm:inline", children: "Hotels" })
                ] }) : null
              ] })
            ] })
          ]
        },
        trip.id
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_framer_motion13.AnimatePresence, { mode: "wait", children: activeTripId && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      import_framer_motion13.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.4 },
        className: "flex flex-col gap-6",
        children: [
          activeTrip?.totalCost && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "glass-panel p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react16.Wallet, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-xs sm:text-sm font-medium text-muted-foreground", children: "Total Budget" }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-lg sm:text-xl lg:text-2xl font-bold tracking-tight font-mono", children: formatCurrency(
                  activeTrip.totalCost.amount,
                  activeTrip.totalCost.currency
                ) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground bg-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full self-start sm:self-auto", children: "Estimated" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "relative pl-4 sm:pl-6 lg:pl-8 border-l-2 border-dashed border-white/10 space-y-4 sm:space-y-6 lg:space-y-8", children })
        ]
      },
      activeTripId
    ) })
  ] });
});

// src/domain/Trip/schema.ts
var import_zod6 = require("zod");
var TripPropsSchema = import_zod6.z.object({});
var TripDefinition = {
  name: "Trip",
  props: TripPropsSchema,
  description: "Trip component",
  hasChildren: true
};

// src/domain/BookingForms/component.tsx
var import_react29 = require("react");
var import_lucide_react17 = require("lucide-react");
var import_framer_motion14 = require("framer-motion");

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
var import_react28 = require("react");
function useBookingFormsLogic(validationAdapter, stateAdapter, options) {
  const { initialType = "flight", mode = "create" } = options;
  const [activeTab, setActiveTab] = (0, import_react28.useState)(initialType);
  const [flightForm, setFlightForm] = (0, import_react28.useState)(
    () => stateAdapter.getDefaultFlightForm()
  );
  const [hotelForm, setHotelForm] = (0, import_react28.useState)(
    () => stateAdapter.getDefaultHotelForm()
  );
  const [flightValidation, setFlightValidation] = (0, import_react28.useState)(null);
  const [hotelValidation, setHotelValidation] = (0, import_react28.useState)(null);
  const actionLabel = stateAdapter.getActionLabel(mode);
  const promoText = stateAdapter.getPromoText(activeTab);
  const isFlightFormValid = (0, import_react28.useMemo)(
    () => validationAdapter.validateFlightForm(flightForm).isValid,
    [validationAdapter, flightForm]
  );
  const isHotelFormValid = (0, import_react28.useMemo)(
    () => validationAdapter.validateHotelForm(hotelForm).isValid,
    [validationAdapter, hotelForm]
  );
  const updateFlightField = (0, import_react28.useCallback)(
    (field, value) => {
      setFlightForm(
        (prev) => stateAdapter.updateFlightField(prev, field, value)
      );
      setFlightValidation(null);
    },
    [stateAdapter]
  );
  const updateHotelField = (0, import_react28.useCallback)(
    (field, value) => {
      setHotelForm((prev) => stateAdapter.updateHotelField(prev, field, value));
      setHotelValidation(null);
    },
    [stateAdapter]
  );
  const validateFlight = (0, import_react28.useCallback)(() => {
    const result = validationAdapter.validateFlightForm(flightForm);
    setFlightValidation(result);
    return result;
  }, [validationAdapter, flightForm]);
  const validateHotel = (0, import_react28.useCallback)(() => {
    const result = validationAdapter.validateHotelForm(hotelForm);
    setHotelValidation(result);
    return result;
  }, [validationAdapter, hotelForm]);
  const resetFlightForm = (0, import_react28.useCallback)(() => {
    setFlightForm(stateAdapter.getDefaultFlightForm());
    setFlightValidation(null);
  }, [stateAdapter]);
  const resetHotelForm = (0, import_react28.useCallback)(() => {
    setHotelForm(stateAdapter.getDefaultHotelForm());
    setHotelValidation(null);
  }, [stateAdapter]);
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
var import_jsx_runtime19 = require("react/jsx-runtime");
var BookingForms = (0, import_react29.memo)(function BookingForms2({
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
  } = useBookingFormsLogic(validationAdapter, stateAdapter, {
    initialType: type,
    mode
  });
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_framer_motion14.motion.div,
    {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      className: "glass-panel w-full max-w-[500px] rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden isolate",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "p-4 sm:p-6 lg:p-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "text-lg sm:text-xl font-bold tracking-tight text-white m-0", children: title || "Booking" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex bg-black/40 p-1 rounded-lg sm:rounded-xl border border-white/5", children: ["flight", "hotel"].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
              "button",
              {
                onClick: () => setActiveTab(tab),
                className: (0, import_utils.cn)(
                  "px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all relative touch-manipulation",
                  activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                ),
                children: [
                  activeTab === tab && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                    import_framer_motion14.motion.div,
                    {
                      layoutId: "activeTab",
                      className: "absolute inset-0 bg-white/10 rounded-md sm:rounded-lg border border-white/10 shadow-sm"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "relative z-10 flex items-center gap-1 sm:gap-1.5", children: [
                    tab === "flight" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.Plane, { className: "w-3 h-3" }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.Hotel, { className: "w-3 h-3" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "hidden sm:inline", children: tab })
                  ] })
                ]
              },
              tab
            )) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_framer_motion14.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            import_framer_motion14.motion.div,
            {
              initial: { opacity: 0, x: 10 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -10 },
              transition: { duration: 0.2 },
              className: "flex flex-col gap-4 sm:gap-6",
              children: activeTab === "flight" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pl-1 mb-0.5 sm:mb-1 block", children: "From" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                      "input",
                      {
                        type: "text",
                        placeholder: "JFK",
                        value: flightForm.from,
                        onChange: (e) => updateFlightField("from", e.target.value.toUpperCase()),
                        className: "w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight min-h-[2.75rem]"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium", children: flightForm.fromCity || "Origin City" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex flex-col items-center justify-center opacity-50", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-px h-6 sm:h-8 bg-zinc-700 mx-auto mb-0.5 sm:mb-1" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "p-1 sm:p-1.5 rounded-full bg-zinc-800 border border-zinc-700", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.Plane, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-90 text-zinc-400" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-px h-6 sm:h-8 bg-zinc-700 mx-auto mt-0.5 sm:mt-1" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex-1 text-right", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pr-1 mb-0.5 sm:mb-1 block", children: "To" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                      "input",
                      {
                        type: "text",
                        placeholder: "LHR",
                        value: flightForm.to,
                        onChange: (e) => updateFlightField("to", e.target.value.toUpperCase()),
                        className: "w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight text-right min-h-[2.75rem]"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium", children: flightForm.toCity || "Destination City" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid grid-cols-2 gap-2 sm:gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.Calendar, { className: "w-3 h-3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest", children: "Date" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-xs sm:text-sm font-semibold text-white", children: flightForm.date || "Select Date" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.User, { className: "w-3 h-3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest", children: "Passengers" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "text-xs sm:text-sm font-semibold text-white", children: [
                      flightForm.passengers,
                      " Adult",
                      flightForm.passengers > 1 ? "s" : ""
                    ] })
                  ] })
                ] })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 group hover:border-white/20 transition-colors touch-manipulation", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                    import_lucide_react17.MapPin,
                    {
                      className: "text-zinc-600 group-hover:text-sky-500 transition-colors w-5 h-5 sm:w-6 sm:h-6"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 block", children: "Destination" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid grid-cols-2 gap-px bg-white/10 rounded-lg sm:rounded-xl overflow-hidden border border-white/5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1", children: "Check-in" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-xs sm:text-sm font-semibold text-white", children: hotelForm.checkIn || "Add Date" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1", children: "Check-out" }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-xs sm:text-sm font-semibold text-white", children: hotelForm.checkOut || "Add Date" })
                  ] })
                ] })
              ] })
            },
            activeTab
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-medium text-center sm:text-left", children: promoText }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "h-9 sm:h-10 px-4 sm:px-6 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wide rounded-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-white/10 touch-manipulation w-full sm:w-auto justify-center", children: [
              mode === "create" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.Search, { className: "w-3.5 h-3.5", strokeWidth: 3 }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react17.ArrowRight, { className: "w-3.5 h-3.5", strokeWidth: 3 }),
              actionLabel
            ] })
          ] })
        ] }),
        children
      ]
    }
  );
});

// src/domain/BookingForms/schema.ts
var import_zod7 = require("zod");
var BookingFormsPropsSchema = import_zod7.z.object({});
var BookingFormsDefinition = {
  name: "BookingForms",
  props: BookingFormsPropsSchema,
  description: "BookingForms component",
  hasChildren: true
};

// src/domain/social/profile-card.tsx
var import_react30 = require("react");
var import_lucide_react18 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var ProfileCard = (0, import_react30.memo)(function ProfileCard2({
  element,
  children
}) {
  const { profile } = element.props;
  if (!profile) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(EmptyState, { icon: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.User, { className: "w-10 h-10" }), message: "No profile" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "group relative rounded-2xl sm:rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "h-24 sm:h-32 lg:h-40 relative bg-zinc-800 border-b border-white/5", children: [
      profile.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "img",
          {
            src: profile.coverImage,
            className: "w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900 to-zinc-950" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute -top-10 sm:-top-12 left-4 sm:left-6", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-black border-3 sm:border-4 border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/30 transition-all group-hover:scale-105 duration-300", children: profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "img",
        {
          src: profile.avatar,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full h-full flex items-center justify-center bg-zinc-800 text-xl sm:text-2xl font-bold text-zinc-500 uppercase", children: profile.name[0] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-end pt-3 sm:pt-4 mb-3 sm:mb-4 gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { className: "h-8 sm:h-9 px-3 sm:px-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-[0.625rem] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-colors touch-manipulation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.MessageCircle, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "hidden sm:inline", children: "Message" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "button",
          {
            className: (0, import_utils.cn)(
              "h-8 sm:h-9 px-3 sm:px-4 rounded-lg font-bold text-[0.625rem] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all shadow-lg touch-manipulation",
              profile.isFollowing ? "bg-transparent border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 shadow-emerald-500/10" : "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-white/10"
            ),
            children: [
              profile.isFollowing ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.Check, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", strokeWidth: 3 }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.UserPlus, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", strokeWidth: 3 }),
              profile.isFollowing ? "Following" : "Follow"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mt-1.5 sm:mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h2", { className: "text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-0.5 sm:mb-1 flex items-center gap-1.5 sm:gap-2", children: [
          profile.name,
          profile.isFollowing && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgb(16,185,129)]" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-xs sm:text-sm text-zinc-500 font-mono mb-3 sm:mb-4", children: [
          "@",
          profile.handle
        ] }),
        profile.bio && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 sm:mb-6 max-w-md border-l-2 border-white/10 pl-2 sm:pl-3 italic", children: profile.bio }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-wrap gap-3 sm:gap-4 text-[0.625rem] sm:text-xs text-zinc-500 mb-4 sm:mb-6 font-medium", children: [
          profile.location && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.MapPin, { className: "w-3 h-3 text-zinc-600" }),
            profile.location
          ] }),
          profile.website && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "a",
            {
              href: profile.website,
              target: "_blank",
              className: "flex items-center gap-1 sm:gap-1.5 text-sky-500/80 hover:text-sky-400 hover:underline transition-colors decoration-sky-500/30",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.Link, { className: "w-3 h-3" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "truncate max-w-[8rem] sm:max-w-none", children: profile.website.replace(/^https?:\/\//, "") })
              ]
            }
          ),
          profile.joinedDate && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react18.Calendar, { className: "w-3 h-3 text-zinc-600" }),
            "Joined ",
            profile.joinedDate
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex items-center gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-dashed border-white/10", children: profile.stats && Object.entries(profile.stats).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "div",
          {
            className: "flex flex-col gap-0.5 hover:opacity-80 transition-opacity cursor-pointer",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-base sm:text-lg font-black text-white leading-none", children: value }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-600 uppercase tracking-wider", children: key })
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
var import_react31 = require("react");
var import_lucide_react19 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var ActivityFeed = (0, import_react31.memo)(function ActivityFeed2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { items = [] } = element.props;
  if (!items || items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react19.Activity, { className: "w-10 h-10" }),
        message: "No activity"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col gap-3 sm:gap-4 max-w-xl mx-auto", children: [
    items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "div",
      {
        className: "group relative pl-6 sm:pl-8 pb-6 sm:pb-8 last:pb-0",
        "data-selectable-item": true,
        "data-element-key": element.key,
        "data-item-id": item.id,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute left-[11px] sm:left-[15px] top-8 sm:top-10 bottom-0 w-px bg-white/10 group-last:hidden" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-zinc-900 border border-white/10 overflow-hidden ring-2 sm:ring-4 ring-zinc-950 z-10 transition-transform group-hover:scale-110", children: item.user.avatar ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "img",
            {
              src: item.user.avatar,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-full h-full flex items-center justify-center bg-zinc-800 text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase", children: item.user.name[0] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-zinc-900/80 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute top-0 right-0 p-1.5 sm:p-2 opacity-50", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-white/20" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex justify-between items-start mb-2 sm:mb-3 gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-xs sm:text-sm font-bold text-white tracking-tight", children: item.user.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500 font-mono", children: [
                    "@",
                    item.user.handle || item.user.name.toLowerCase().replace(" ", "")
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "text-[0.5rem] sm:text-[0.625rem] font-mono text-zinc-600 mt-0.5 sm:mt-1 uppercase tracking-wide flex items-center gap-1 sm:gap-1.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "Logged" }),
                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "w-1 h-1 rounded-full bg-zinc-700" }),
                  item.timestamp
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "text-zinc-600 hover:text-white transition-colors p-0.5 sm:p-1 rounded hover:bg-white/5 touch-manipulation", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react19.MoreHorizontal, { className: "w-3.5 h-3.5" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3 sm:mb-4", children: render(item.content, { inline: true }) }),
            item.image && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "rounded-lg sm:rounded-xl overflow-hidden border border-white/10 mb-3 sm:mb-4 bg-zinc-950 min-h-[100px] sm:min-h-[150px] relative group/image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "img",
                {
                  src: item.image,
                  className: "w-full h-auto object-cover max-h-[200px] sm:max-h-[300px] transition-transform duration-700 group-hover/image:scale-105"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg sm:rounded-xl pointer-events-none" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex items-center gap-4 sm:gap-6 border-t border-dashed border-white/10 pt-2 sm:pt-3 mt-1.5 sm:mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-rose-400 transition-colors group/action py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 -ml-1.5 sm:-ml-2 touch-manipulation", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  import_lucide_react19.Heart,
                  {
                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/action:scale-110 transition-transform"
                  }
                ),
                item.likes || 0
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-sky-400 transition-colors group/action py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 touch-manipulation", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  import_lucide_react19.MessageSquare,
                  {
                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/action:scale-110 transition-transform"
                  }
                ),
                item.comments || 0
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs font-bold text-zinc-500 hover:text-emerald-400 transition-colors ml-auto py-0.5 sm:py-1 px-1.5 sm:px-2 rounded hover:bg-white/5 -mr-1.5 sm:-mr-2 touch-manipulation", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react19.Share2, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "hidden sm:inline", children: "Share" })
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
var import_react32 = require("react");
var import_lucide_react20 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Pricing = (0, import_react32.memo)(function Pricing2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { title, plans = [] } = element.props;
  if (!plans || plans.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react20.Star, { className: "w-10 h-10" }),
        message: "No pricing plans"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "m-0 text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 sm:gap-5 lg:gap-6", children: plans.map((plan, index) => {
      const isHighlight = plan.highlight;
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "div",
        {
          "data-selectable-item": true,
          "data-element-key": element.key,
          "data-item-id": plan.id ?? `${index}`,
          className: (0, import_utils.cn)(
            "group relative bg-zinc-900 border transition-all duration-300 flex flex-col isolate overflow-hidden",
            // Flight/Invoice Style:
            "rounded-xl sm:rounded-2xl border-white/10",
            isHighlight ? "shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/50 bg-zinc-900/80" : "hover:border-white/20 hover:shadow-xl hover:-translate-y-1"
          ),
          children: [
            isHighlight && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute top-0 inset-x-0 h-1 bg-indigo-500 z-10" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "p-4 sm:p-5 lg:p-6 pb-6 sm:pb-8 border-b border-dashed border-white/10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex justify-between items-start mb-3 sm:mb-4 gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { className: "font-bold text-base sm:text-lg text-white mb-1", children: plan.name }),
                  plan.badge && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "inline-block px-1.5 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10", children: plan.badge })
                ] }),
                isHighlight && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react20.Star, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5", fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-baseline gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none", children: plan.price }),
                plan.cadence && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "text-[0.625rem] sm:text-xs font-mono text-zinc-500 uppercase", children: [
                  "/",
                  plan.cadence
                ] })
              ] }),
              plan.description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-snug", children: render(plan.description, { inline: true }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative h-px w-full my-0 -mt-px z-10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-r border-white/10" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-l border-white/10" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "p-4 sm:p-5 lg:p-6 flex-1 bg-black/20", children: [
              plan.features && plan.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("ul", { className: "space-y-2 sm:space-y-3 mb-6 sm:mb-8", children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                "li",
                {
                  className: "flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                      "div",
                      {
                        className: (0, import_utils.cn)(
                          "w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          isHighlight ? "bg-indigo-500/20 text-indigo-400" : "bg-white/10 text-zinc-400"
                        ),
                        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react20.Check, { className: "w-2 h-2 sm:w-2.5 sm:h-2.5", strokeWidth: 4 })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "leading-tight", children: render(feature, { inline: true }) })
                  ]
                },
                feature
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "button",
                {
                  className: (0, import_utils.cn)(
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
var import_react33 = require("react");
var import_lucide_react21 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var ArticleCard = (0, import_react33.memo)(function ArticleCard2({
  element,
  children,
  renderText
}) {
  const render = renderText ?? ((content) => content);
  const { article } = element.props;
  if (!article) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react21.FileText, { className: "w-10 h-10" }),
        message: "No article"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "group relative rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-white/5 group-hover:bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500 z-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex flex-col sm:flex-row h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-1/3 min-h-[10rem] sm:min-h-[12.5rem] relative overflow-hidden bg-zinc-800", children: [
        article.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute inset-0 transition-transform duration-700 group-hover:scale-105", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "img",
          {
            src: article.coverImage,
            className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          }
        ) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[0.5rem] sm:text-[0.625rem] font-mono text-zinc-500 uppercase tracking-widest", children: "No Cover" }) }),
        article.category && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute top-3 sm:top-4 left-3 sm:left-4 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/60 backdrop-blur-md rounded text-[0.5rem] sm:text-[0.625rem] font-bold text-white uppercase tracking-wider border border-white/10", children: article.category })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex-1 p-4 sm:p-5 lg:p-6 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 text-[0.625rem] sm:text-xs text-zinc-500 font-mono mb-2 sm:mb-3", children: [
          article.date && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react21.Calendar, { className: "w-3 h-3" }),
            new Date(article.date).toLocaleDateString()
          ] }),
          article.readTime && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: "\u2022" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react21.Clock, { className: "w-3 h-3" }),
              article.readTime
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-base sm:text-lg lg:text-xl font-bold text-white leading-tight mb-2 sm:mb-3 group-hover:text-sky-300 transition-colors", children: article.title }),
        article.excerpt && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4 sm:mb-6 flex-1", children: render(article.excerpt, { inline: true }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between pt-3 sm:pt-4 border-t border-dashed border-white/10 mt-auto", children: [
          article.author && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden", children: article.author.avatar && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: article.author.avatar }) }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[0.625rem] sm:text-xs font-bold text-zinc-300 uppercase tracking-wide", children: article.author.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "relative overflow-hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react21.ArrowUpRight, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }),
    children
  ] });
});

// src/domain/Kanban/component.tsx
var import_react38 = require("react");
var import_react39 = require("@onegenui/react");
var import_lucide_react24 = require("lucide-react");
var import_framer_motion17 = require("framer-motion");

// src/domain/Kanban/components/types.ts
var PRIORITY_TO_VARIANT = {
  high: "error",
  medium: "warning",
  low: "success"
};

// src/domain/Kanban/components/sub-items-list.tsx
var import_react34 = require("react");
var import_lucide_react22 = require("lucide-react");
var import_framer_motion15 = require("framer-motion");
var import_jsx_runtime24 = require("react/jsx-runtime");
var SubItemsList = (0, import_react34.memo)(function SubItemsList2({
  item,
  lock,
  isSubItemCompleted,
  toggleSubItem
}) {
  if (!item.subItems || item.subItems.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-3 flex flex-col gap-2 p-2 rounded-lg bg-black/20 border border-white/5", children: item.subItems.map((subItem) => {
    const completed = isSubItemCompleted(item.id, subItem.id);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: (0, import_utils.cn)(
          "flex items-center gap-2.5 text-xs transition-all",
          completed ? "text-muted-foreground line-through opacity-60" : "text-foreground"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              onClick: (e) => {
                e.stopPropagation();
                toggleSubItem(item.id, subItem.id);
              },
              "data-interactive": true,
              className: (0, import_utils.cn)(
                "w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center cursor-pointer transition-colors shrink-0",
                completed ? "bg-emerald-500 border-emerald-500 text-black" : "border-muted-foreground/40 hover:border-primary/60 bg-transparent",
                lock && "pointer-events-none opacity-50"
              ),
              children: completed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion15.motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react22.Check, { size: 8, strokeWidth: 4 }) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "truncate", children: subItem.title })
        ]
      },
      subItem.id
    );
  }) });
});

// src/domain/Kanban/components/kanban-card.tsx
var import_react35 = require("react");
var import_lucide_react23 = require("lucide-react");
var import_framer_motion16 = require("framer-motion");
var import_jsx_runtime25 = require("react/jsx-runtime");
var KanbanCard = (0, import_react35.memo)(function KanbanCard2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      draggable: !lock,
      onDragStart: (e) => onDragStart(e, item, colId),
      onDragEnd,
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": item.id,
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
        import_framer_motion16.motion.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 },
          transition: { duration: 0.2 },
          className: (0, import_utils.cn)(
            "group relative bg-card/40 hover:bg-card/60 p-3.5 rounded-xl border border-white/5 transition-all shadow-sm hover:shadow-lg hover:border-white/10",
            !lock && "cursor-grab active:cursor-grabbing hover:-translate-y-0.5",
            isDragging && "opacity-50"
          ),
          children: [
            !lock && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                "data-interactive": true,
                className: "absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing",
                children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react23.GripVertical, { size: 14 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  "text-sm font-medium text-foreground leading-snug",
                  !lock && "pl-5 group-hover:pl-5"
                ),
                children: item.title
              }
            ),
            item.description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  "text-xs text-muted-foreground mt-1 line-clamp-2",
                  !lock && "pl-5 group-hover:pl-5"
                ),
                children: item.description
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              SubItemsList,
              {
                item,
                lock,
                isSubItemCompleted,
                toggleSubItem
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex justify-between items-center pt-3 mt-2 border-t border-white/5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-wrap gap-1.5 items-center", children: [
                item.priority && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  StatusBadge,
                  {
                    label: item.priority,
                    variant: PRIORITY_TO_VARIANT[item.priority] || "neutral"
                  }
                ),
                (item.tags || []).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  "span",
                  {
                    className: "text-[10px] bg-white/5 text-muted-foreground px-2 py-0.5 rounded border border-white/5 font-semibold",
                    children: tag
                  },
                  tag
                ))
              ] }),
              item.assignee && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
var import_react36 = require("react");
function useKanbanDrag(adapter, options) {
  const { lock, onMoveItem } = options;
  const [draggedItem, setDraggedItem] = (0, import_react36.useState)(null);
  const [dropTarget, setDropTarget] = (0, import_react36.useState)(null);
  const dragCounter = (0, import_react36.useRef)({});
  const handleDragStart = (0, import_react36.useCallback)(
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
  const handleDragEnd = (0, import_react36.useCallback)((e) => {
    e.stopPropagation();
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "1";
    }
    setDraggedItem(null);
    setDropTarget(null);
    dragCounter.current = {};
  }, []);
  const handleDragEnter = (0, import_react36.useCallback)(
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
  const handleDragLeave = (0, import_react36.useCallback)(
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
  const handleDragOver = (0, import_react36.useCallback)((e) => {
    if (e.dataTransfer.types.includes("application/x-kanban-item")) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
    }
  }, []);
  const handleDrop = (0, import_react36.useCallback)(
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
var import_react37 = require("react");
function useKanbanState(adapter, options) {
  const { initialColumns, lock } = options;
  const [itemMoves, setItemMoves] = (0, import_react37.useState)({});
  const [subItemCompletions, setSubItemCompletions] = (0, import_react37.useState)({});
  const displayColumns = (0, import_react37.useMemo)(
    () => adapter.buildDisplayColumns(initialColumns, itemMoves),
    [adapter, initialColumns, itemMoves]
  );
  const moveItem = (0, import_react37.useCallback)(
    (itemId, targetColId) => {
      if (lock) return;
      setItemMoves((prev) => ({ ...prev, [itemId]: targetColId }));
    },
    [lock]
  );
  const toggleSubItem = (0, import_react37.useCallback)(
    (itemId, subItemId) => {
      if (lock) return;
      setSubItemCompletions((prev) => {
        const itemCompletions = prev[itemId] || {};
        const current = itemCompletions[subItemId] ?? false;
        return {
          ...prev,
          [itemId]: { ...itemCompletions, [subItemId]: !current }
        };
      });
    },
    [lock]
  );
  const isSubItemCompleted = (0, import_react37.useCallback)(
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
var import_jsx_runtime26 = require("react/jsx-runtime");
var containerVariants3 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};
var columnVariants = {
  hidden: { opacity: 0, x: "1rem" },
  visible: { opacity: 1, x: 0 }
};
var Kanban = (0, import_react38.memo)(function Kanban2({
  element,
  children
}) {
  const {
    title,
    columns: initialColumns,
    lock = false
  } = element.props;
  const adapter = (0, import_react38.useMemo)(() => getKanbanAdapter(), []);
  const dragAdapter = (0, import_react38.useMemo)(() => getKanbanDragAdapter(), []);
  const { displayColumns, moveItem, toggleSubItem, isSubItemCompleted } = useKanbanState(adapter, {
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
  (0, import_react39.useDomainAutoSave)("project", element.key, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-col w-full min-h-[12.5rem]", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { className: "text-xl sm:text-2xl font-black tracking-tight text-foreground mb-4 sm:mb-6", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        EmptyState,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react24.Layout, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No columns"
        }
      ),
      children
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-col w-full", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-3 sm:gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { className: "text-xl sm:text-2xl font-black tracking-tight text-foreground", children: title }),
      !lock && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("button", { className: "flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:py-1.5 rounded-full bg-primary text-primary-foreground text-[0.625rem] sm:text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform min-h-[2.75rem] sm:min-h-0 touch-manipulation", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react24.Plus, { className: "w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "hidden sm:inline", children: "NEW TASK" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "sm:hidden", children: "ADD" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_framer_motion17.motion.div,
      {
        variants: containerVariants3,
        initial: "hidden",
        animate: "visible",
        className: (0, import_utils.cn)(
          "flex flex-col gap-3 sm:gap-4",
          "sm:flex-row sm:overflow-x-auto sm:pb-4",
          "sm:snap-x sm:snap-mandatory",
          "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        ),
        children: displayColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          import_framer_motion17.motion.div,
          {
            variants: columnVariants,
            onDragEnter: (e) => handleDragEnter(e, col.id),
            onDragLeave: (e) => handleDragLeave(e, col.id),
            onDragOver: handleDragOver,
            onDrop: (e) => handleDrop(e, col.id),
            className: (0, import_utils.cn)(
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
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: "absolute top-0 left-0 right-0 h-1",
                  style: { backgroundColor: col.color || "var(--border)" }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex justify-between items-center p-3 sm:p-4 border-b border-white/5 bg-white/[0.02]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "font-bold text-xs sm:text-sm tracking-wide text-foreground", children: col.title }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[0.5625rem] sm:text-[0.625rem] font-bold text-muted-foreground bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10", children: col.items.length })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-col gap-2 sm:gap-3 overflow-y-auto p-2 sm:p-3 flex-1 min-h-[5rem] sm:min-h-[6.25rem]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_framer_motion17.AnimatePresence, { mode: "popLayout", children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
                col.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "div",
                  {
                    className: (0, import_utils.cn)(
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

// src/domain/Kanban/schema.ts
var import_zod8 = require("zod");
var KanbanPropsSchema = import_zod8.z.object({
  title: import_zod8.z.string().nullable(),
  columns: import_zod8.z.array(import_schemas.kanbanColumnSchema).min(1).describe("Columns (REQUIRED, min 1)"),
  lock: import_zod8.z.boolean().nullable()
});
var KanbanDefinition = {
  name: "Kanban",
  props: KanbanPropsSchema,
  description: "Kanban board with columns and drag-and-drop tasks.",
  hasChildren: true
};

// src/domain/TodoList/component.tsx
var import_react41 = require("react");
var import_react42 = require("@onegenui/react");
var import_lucide_react25 = require("lucide-react");
var import_framer_motion18 = require("framer-motion");

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
var import_react40 = require("react");
function useTodoListLogic(adapter, options) {
  const { initialItems } = options;
  const [items, setItems] = (0, import_react40.useState)(initialItems);
  (0, import_react40.useEffect)(() => {
    if (initialItems) {
      setItems(initialItems);
    }
  }, [initialItems]);
  const toggleItem = (0, import_react40.useCallback)(
    (id) => {
      setItems((prev) => adapter.toggleItemStatus(prev, id));
    },
    [adapter]
  );
  const completedCount = (0, import_react40.useMemo)(
    () => adapter.countCompleted(items),
    [adapter, items]
  );
  const totalCount = (0, import_react40.useMemo)(() => adapter.countTotal(items), [adapter, items]);
  return {
    items,
    completedCount,
    totalCount,
    toggleItem
  };
}

// src/domain/TodoList/component.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
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
var TodoList = (0, import_react41.memo)(function TodoList2({
  element,
  children
}) {
  const { title, items: initialItems } = element.props;
  const adapter = (0, import_react41.useMemo)(() => getTodoListAdapter(), []);
  const { items, completedCount, totalCount, toggleItem } = useTodoListLogic(
    adapter,
    { initialItems: initialItems || [] }
  );
  (0, import_react42.useDomainAutoSave)("task", element.key, {
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
  const renderItems = (itemsToRender, depth = 0) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex flex-col gap-2 sm:gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_framer_motion18.AnimatePresence, { mode: "popLayout", initial: false, children: itemsToRender.map((item, i) => {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      import_framer_motion18.motion.div,
      {
        layout: true,
        variants: itemVariants,
        initial: "hidden",
        animate: "visible",
        transition: { duration: 0.2, delay: i * 0.05 },
        className: "flex flex-col gap-1.5 sm:gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              "data-selectable-item": true,
              "data-element-key": element.key,
              "data-item-id": item.id,
              onClick: () => toggleItem(item.id),
              className: (0, import_utils.cn)(
                "group relative flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden isolate touch-manipulation",
                item.status === "done" ? "bg-white/[0.02] border-white/5 opacity-60" : "glass-panel bg-card/60 hover:bg-card/80 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 active:scale-[0.98]",
                depth > 0 && "ml-4 sm:ml-6 border-l-2 border-l-white/10"
              ),
              children: [
                depth === 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    "data-checkbox": true,
                    "data-interactive": true,
                    className: (0, import_utils.cn)(
                      "w-6 h-6 sm:w-6 sm:h-6 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 shadow-sm relative overflow-hidden min-w-[1.5rem]",
                      item.status === "done" ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_0_0.75rem_rgba(99,102,241,0.4)]" : "border-white/20 bg-black/20 group-hover:border-indigo-400/50"
                    ),
                    onClick: (e) => {
                      e.stopPropagation();
                      toggleItem(item.id);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_framer_motion18.AnimatePresence, { children: item.status === "done" && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                      import_framer_motion18.motion.div,
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
                        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          import_lucide_react25.Check,
                          {
                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-white drop-shadow-sm",
                            strokeWidth: 3.5
                          }
                        )
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 min-w-0 flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "span",
                    {
                      className: (0, import_utils.cn)(
                        "text-sm sm:text-[0.9375rem] font-medium transition-all duration-300 truncate",
                        item.status === "done" ? "text-muted-foreground line-through decoration-white/20 decoration-2" : "text-foreground group-hover:text-white"
                      ),
                      children: item.text
                    }
                  ),
                  item.time && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-muted-foreground/80", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                      import_lucide_react25.Clock,
                      {
                        className: (0, import_utils.cn)(
                          "w-2.5 h-2.5 sm:w-3 sm:h-3",
                          item.status === "done" ? "opacity-50" : "text-indigo-400"
                        )
                      }
                    ),
                    item.time
                  ] })
                ] }),
                item.priority && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      import_framer_motion18.motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "relative overflow-hidden rounded-xl sm:rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 sm:p-10 flex flex-col items-center justify-center text-center group",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-50" }),
          title && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "relative z-10 m-0 mb-2 text-lg sm:text-xl font-bold text-foreground", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "relative z-10 flex flex-col items-center gap-2 sm:gap-3 text-muted-foreground mt-3 sm:mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react25.Sparkles, { className: "text-indigo-400 opacity-60 w-5 h-5 sm:w-6 sm:h-6" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "text-xs sm:text-sm font-medium", children: "No tasks yet" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-[0.625rem] sm:text-xs font-bold text-foreground transition-all min-h-[2.5rem] touch-manipulation", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react25.Plus, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
              " Add First Task"
            ] })
          ] }),
          children
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "w-full max-w-2xl mx-auto flex flex-col gap-4 sm:gap-6", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center justify-between gap-2 px-1 sm:px-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { className: "text-xl sm:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 truncate", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "text-[0.625rem] sm:text-xs font-bold text-muted-foreground bg-white/5 px-2 sm:px-2.5 py-1 rounded-full border border-white/5", children: [
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

// src/domain/TodoList/schema.ts
var import_zod9 = require("zod");
var TodoListPropsSchema = import_zod9.z.object({});
var TodoListDefinition = {
  name: "TodoList",
  props: TodoListPropsSchema,
  description: "TodoList component",
  hasChildren: true
};

// src/domain/RoutineScheduler/component.tsx
var import_react46 = require("react");
var import_react47 = require("@onegenui/react");
var import_lucide_react28 = require("lucide-react");
var import_framer_motion20 = require("framer-motion");

// src/domain/RoutineScheduler/components/time-block-card.tsx
var import_react43 = require("react");
var import_lucide_react27 = require("lucide-react");
var import_framer_motion19 = require("framer-motion");

// src/domain/RoutineScheduler/components/utils.ts
var import_lucide_react26 = require("lucide-react");
var DEFAULT_CATEGORY_CONFIG = {
  icon: import_lucide_react26.MoreHorizontal,
  color: "text-zinc-400",
  bg: "bg-zinc-500/10 border-zinc-500/20"
};
var CATEGORY_CONFIG = {
  workout: {
    icon: import_lucide_react26.Dumbbell,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  meal: {
    icon: import_lucide_react26.Utensils,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20"
  },
  supplement: {
    icon: import_lucide_react26.Pill,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20"
  },
  work: {
    icon: import_lucide_react26.Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  rest: {
    icon: import_lucide_react26.Coffee,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  sleep: {
    icon: import_lucide_react26.Moon,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20"
  },
  personal: {
    icon: import_lucide_react26.User,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20"
  },
  other: {
    icon: import_lucide_react26.MoreHorizontal,
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
var import_jsx_runtime28 = require("react/jsx-runtime");
var TimeBlockCard = (0, import_react43.memo)(function TimeBlockCard2({
  block,
  onToggle,
  lock,
  elementKey,
  slotHeight,
  slots
}) {
  const config = getCategoryConfig(block.category);
  const Icon = config.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    import_framer_motion19.motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      style: { height: `${slots * slotHeight}px`, minHeight: "44px" },
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": block.id,
      className: (0, import_utils.cn)(
        "absolute left-14 right-2 rounded-xl border p-2 overflow-hidden cursor-pointer transition-all group",
        config.bg,
        block.completed && "opacity-60"
      ),
      onClick: () => !lock && onToggle(block.id),
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-start gap-2 h-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0",
              block.completed ? "bg-emerald-500" : "bg-white/10"
            ),
            children: block.completed ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react27.Check, { size: 12, className: "text-black" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon, { size: 12, className: config.color })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex-1 min-w-0 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "text-sm font-semibold text-white truncate",
                block.completed && "line-through opacity-70"
              ),
              children: block.title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "text-[10px] text-white/50 font-mono mt-0.5", children: formatTimeRange(block.startTime, block.endTime) }),
          block.description && slots > 2 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "text-xs text-white/40 mt-1 line-clamp-2", children: block.description })
        ] }),
        block.priority === "high" && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" })
      ] })
    }
  );
});

// src/domain/RoutineScheduler/components/day-column.tsx
var import_react44 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var DayColumn = (0, import_react44.memo)(function DayColumn2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex-1 min-w-[140px] relative", children: [
    showHeader && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        className: (0, import_utils.cn)(
          "sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-sm border-b border-white/5 p-2 text-center",
          isToday && "bg-indigo-500/10 border-indigo-500/20"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "text-[10px] font-bold text-white/40 uppercase tracking-wider", children: dayName }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "text-lg font-bold",
                isToday ? "text-indigo-400" : "text-white"
              ),
              children: dayNum
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        className: "relative",
        style: { height: `${timeSlots.length * slotHeight}px` },
        children: [
          timeSlots.map((slot, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "div",
              {
                style: { top: `${topSlot * slotHeight}px` },
                className: "absolute left-0 right-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_react45 = require("react");
function useRoutineSchedulerLogic(adapter, stateAdapter, options) {
  const {
    initialDate,
    initialView = "day",
    initialDays = [],
    timeRange,
    granularity = "30min",
    showCategories,
    lock = false
  } = options;
  const [localEdits, setLocalEdits] = (0, import_react45.useState)({});
  const [currentView, setCurrentView] = (0, import_react45.useState)(initialView);
  const [selectedDate, setSelectedDate] = (0, import_react45.useState)(
    initialDate ?? adapter.getTodayString()
  );
  const dayStart = timeRange?.start || "06:00";
  const dayEnd = timeRange?.end || "22:00";
  const todayStr = adapter.getTodayString();
  const slotHeight = adapter.getSlotHeight(granularity);
  const timeSlots = (0, import_react45.useMemo)(
    () => adapter.generateTimeSlots(dayStart, dayEnd, granularity),
    [adapter, dayStart, dayEnd, granularity]
  );
  const displayDays = (0, import_react45.useMemo)(
    () => stateAdapter.mergeEdits(initialDays, localEdits),
    [stateAdapter, initialDays, localEdits]
  );
  const filteredDays = (0, import_react45.useMemo)(
    () => stateAdapter.filterByCategories(displayDays, showCategories),
    [stateAdapter, displayDays, showCategories]
  );
  const visibleDays = (0, import_react45.useMemo)(
    () => stateAdapter.getVisibleDays(filteredDays, selectedDate, currentView),
    [stateAdapter, filteredDays, selectedDate, currentView]
  );
  const navigateDate = (0, import_react45.useCallback)(
    (direction) => {
      setSelectedDate(
        (prev) => stateAdapter.navigateDate(prev, direction, currentView)
      );
    },
    [stateAdapter, currentView]
  );
  const goToToday = (0, import_react45.useCallback)(() => {
    setSelectedDate(adapter.getTodayString());
  }, [adapter]);
  const handleToggleBlock = (0, import_react45.useCallback)(
    (blockId) => {
      if (lock) return;
      const allBlocks = displayDays.flatMap((d) => d.blocks);
      const block = allBlocks.find((b) => b.id === blockId);
      if (!block) return;
      setLocalEdits(
        (prev) => stateAdapter.toggleBlockCompletion(
          prev,
          blockId,
          block.completed ?? false
        )
      );
    },
    [lock, displayDays, stateAdapter]
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
var import_jsx_runtime30 = require("react/jsx-runtime");
var RoutineScheduler = (0, import_react46.memo)(function RoutineScheduler2({
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
  } = useRoutineSchedulerLogic(adapter, stateAdapter, {
    initialDate: initialSelectedDate ?? void 0,
    initialView: view === "timeline" ? "day" : view,
    initialDays: initialDays || [],
    timeRange: timeRange ?? void 0,
    granularity,
    showCategories: showCategories ?? void 0,
    lock: lock ?? false
  });
  (0, import_react47.useDomainAutoSave)("schedule", element.key, {
    type: "routine_schedule",
    days: displayDays,
    selectedDate,
    view: currentView
  });
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col gap-3 sm:gap-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react28.Calendar, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white", children: title || "Routine" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex rounded-lg border border-white/10 overflow-hidden", children: ["day", "week"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "button",
          {
            onClick: () => setCurrentView(v),
            className: (0, import_utils.cn)(
              "px-2 sm:px-3 py-1 sm:py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors touch-manipulation",
              currentView === v ? "bg-indigo-500/20 text-indigo-400" : "text-white/40 hover:text-white/60"
            ),
            children: v
          },
          v
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              onClick: () => navigateDate(-1),
              className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react28.ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              onClick: () => setSelectedDate(todayStr),
              className: "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: "Today"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              onClick: () => navigateDate(1),
              className: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors touch-manipulation",
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react28.ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-xs sm:text-sm text-white/50 font-mono", children: currentView === "day" ? new Date(selectedDate).toLocaleDateString(void 0, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }) : `Week of ${new Date(visibleDays[0]?.date ?? selectedDate).toLocaleDateString(void 0, { month: "short", day: "numeric" })}` }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "w-10 sm:w-14 flex-shrink-0 border-r border-white/5", children: [
        currentView === "week" && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "h-[3rem] sm:h-[3.75rem] border-b border-white/5" }),
        timeSlots.map((slot, i) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "div",
          {
            className: "relative border-b border-white/5 text-[0.5rem] sm:text-[0.625rem] font-mono text-white/30",
            style: { height: `${slotHeight}px` },
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "absolute -top-2 left-1 sm:left-2", children: slot })
          },
          slot
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex-1 flex overflow-x-auto touch-pan-x", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_framer_motion20.AnimatePresence, { mode: "wait", children: visibleDays.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex-1 py-8 sm:py-12", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        EmptyState,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react28.Calendar, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No schedule"
        }
      ) }) : visibleDays.map((day) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex flex-wrap gap-2 sm:gap-3", children: Object.entries(CATEGORY_CONFIG).map(([key, config]) => {
      const Icon = config.icon;
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
        "div",
        {
          className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-white/50",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Icon, { className: "w-3 h-3" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "capitalize", children: key })
          ]
        },
        key
      );
    }) }),
    children
  ] });
});

// src/domain/RoutineScheduler/schema.ts
var import_zod10 = require("zod");
var timeBlockSchema = import_zod10.z.object({
  id: import_zod10.z.string().describe("Unique identifier (REQUIRED)"),
  title: import_zod10.z.string().describe("Block title"),
  description: import_zod10.z.string().nullable().optional(),
  startTime: import_zod10.z.string().describe("Start time in HH:mm format"),
  endTime: import_zod10.z.string().describe("End time in HH:mm format"),
  category: import_zod10.z.enum([
    "workout",
    "meal",
    "supplement",
    "work",
    "rest",
    "sleep",
    "personal",
    "other"
  ]).describe("Activity category for color coding and integration"),
  priority: import_zod10.z.enum(["high", "medium", "low"]).nullable().optional(),
  completed: import_zod10.z.boolean().nullable().optional(),
  recurring: import_zod10.z.object({
    pattern: import_zod10.z.enum(["daily", "weekly", "custom"]),
    daysOfWeek: import_zod10.z.array(import_zod10.z.number().min(0).max(6)).nullable().optional().describe("0=Sunday, 6=Saturday")
  }).nullable().optional(),
  linkedEntityId: import_zod10.z.string().nullable().optional().describe("ID of linked workout, meal, or supplement"),
  linkedEntityType: import_zod10.z.enum(["workout", "meal", "supplement", "calendar_event"]).nullable().optional(),
  notes: import_zod10.z.string().nullable().optional(),
  color: import_zod10.z.string().nullable().optional().describe("Custom color override")
});
var dayScheduleSchema = import_zod10.z.object({
  date: import_zod10.z.string().describe("Date in YYYY-MM-DD format"),
  dayOfWeek: import_zod10.z.number().min(0).max(6).optional().describe("0=Sunday, 6=Saturday"),
  blocks: import_zod10.z.array(timeBlockSchema).describe("Time blocks for this day"),
  notes: import_zod10.z.string().nullable().optional()
});
var RoutineSchedulerPropsSchema = import_zod10.z.object({
  title: import_zod10.z.string().nullable().optional(),
  view: import_zod10.z.enum(["day", "week", "timeline"]).default("day").describe("Display mode: day view, week view, or timeline"),
  selectedDate: import_zod10.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  days: import_zod10.z.array(dayScheduleSchema).describe("Array of day schedules (REQUIRED)"),
  timeRange: import_zod10.z.object({
    start: import_zod10.z.string().default("06:00").describe("Day start time HH:mm"),
    end: import_zod10.z.string().default("22:00").describe("Day end time HH:mm")
  }).nullable().optional(),
  granularity: import_zod10.z.enum(["15min", "30min", "1hr"]).default("30min").describe("Time slot granularity"),
  lock: import_zod10.z.boolean().nullable().optional(),
  showCategories: import_zod10.z.array(
    import_zod10.z.enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "rest",
      "sleep",
      "personal",
      "other"
    ])
  ).nullable().optional().describe("Filter visible categories")
});
var RoutineSchedulerDefinition = {
  name: "RoutineScheduler",
  props: RoutineSchedulerPropsSchema,
  description: "Ultra-powerful granular routine and schedule organizer with day/week views, recurring events, and integration with workouts, meals, and supplements.",
  hasChildren: true
};

// src/domain/SupplementTracker/component.tsx
var import_react53 = require("react");
var import_react54 = require("@onegenui/react");
var import_lucide_react32 = require("lucide-react");
var import_framer_motion23 = require("framer-motion");

// src/domain/SupplementTracker/components/supplement-card.tsx
var import_react48 = require("react");
var import_react49 = require("@onegenui/react");
var import_lucide_react30 = require("lucide-react");

// src/domain/SupplementTracker/components/utils.ts
var import_lucide_react29 = require("lucide-react");
var DEFAULT_TIMING_CONFIG = {
  icon: import_lucide_react29.Clock,
  label: "Anytime",
  color: "text-white/60"
};
var TIMING_CONFIG = {
  morning: { icon: import_lucide_react29.Sun, label: "Morning", color: "text-amber-400" },
  pre_meal: { icon: import_lucide_react29.Utensils, label: "Before Meal", color: "text-orange-400" },
  with_meal: { icon: import_lucide_react29.Utensils, label: "With Meal", color: "text-green-400" },
  post_meal: { icon: import_lucide_react29.Utensils, label: "After Meal", color: "text-teal-400" },
  pre_workout: { icon: import_lucide_react29.Dumbbell, label: "Pre-Workout", color: "text-rose-400" },
  post_workout: {
    icon: import_lucide_react29.Dumbbell,
    label: "Post-Workout",
    color: "text-emerald-400"
  },
  evening: { icon: import_lucide_react29.Moon, label: "Evening", color: "text-indigo-400" },
  bedtime: { icon: import_lucide_react29.Moon, label: "Bedtime", color: "text-violet-400" }
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
var import_jsx_runtime31 = require("react/jsx-runtime");
var SupplementCard = (0, import_react48.memo)(function SupplementCard2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    import_react49.SelectableItem,
    {
      elementKey,
      itemId: supplement.id,
      className: (0, import_utils.cn)(
        "group relative p-3 rounded-xl border transition-all duration-200",
        isTaken ? "bg-emerald-500/10 border-emerald-500/20" : isSkipped ? "bg-zinc-800/50 border-zinc-700/50 opacity-50" : "bg-zinc-900/60 border-white/10 hover:border-white/20"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "button",
            {
              onClick: () => !lock && onToggle(supplement.id, dose?.id),
              disabled: lock,
              className: (0, import_utils.cn)(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                isTaken ? "bg-emerald-500 text-black" : "bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20"
              ),
              children: isTaken ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lucide_react30.Check, { size: 16, strokeWidth: 3 }) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lucide_react30.Pill, { size: 14 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
                    "text-sm font-semibold",
                    isTaken && "line-through opacity-70",
                    isSkipped && "line-through"
                  ),
                  children: supplement.name
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                    categoryStyle
                  ),
                  children: supplement.category.replace("_", " ")
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center gap-2 mt-1 text-xs text-white/50", children: [
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "font-mono", children: supplement.dosage }),
              supplement.withFood && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lucide_react30.Utensils, { size: 10 }),
                " with food"
              ] }),
              supplement.brand && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("span", { children: [
                "(",
                supplement.brand,
                ")"
              ] })
            ] })
          ] }),
          !isTaken && !isSkipped && !lock && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "button",
            {
              onClick: () => onSkip(supplement.id, dose?.id),
              className: "w-6 h-6 rounded flex items-center justify-center text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-colors",
              children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lucide_react30.X, { size: 12 })
            }
          ),
          dose?.scheduledTime && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-[10px] font-mono text-white/30", children: dose.scheduledTime })
        ] }),
        supplement.notes && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mt-2 text-xs text-white/40 pl-11", children: supplement.notes })
      ]
    }
  );
});

// src/domain/SupplementTracker/components/timing-group.tsx
var import_react50 = require("react");
var import_framer_motion21 = require("framer-motion");
var import_jsx_runtime32 = require("react/jsx-runtime");
var TimingGroup = (0, import_react50.memo)(function TimingGroup2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
    import_framer_motion21.motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "space-y-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Icon, { size: 14, className: config.color }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-sm font-bold text-white", children: config.label })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "text-xs font-mono text-white/40", children: [
            takenCount,
            "/",
            items.length
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex flex-col gap-2", children: items.map(({ supplement, dose }) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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
var import_react51 = require("react");
var import_framer_motion22 = require("framer-motion");
var import_lucide_react31 = require("lucide-react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var ProgressDashboard = (0, import_react51.memo)(function ProgressDashboard2({
  stats
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_framer_motion22.motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "p-4 rounded-2xl bg-zinc-900 border border-white/10",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-[10px] font-bold text-white/40 uppercase tracking-widest", children: "Today's Progress" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "text-2xl font-black text-white", children: [
              stats.taken,
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-sm font-medium text-white/40 ml-1", children: [
                "/ ",
                stats.total
              ] })
            ] })
          ] }),
          stats.remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react31.AlertCircle, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "text-xs font-bold text-amber-400", children: [
              stats.remaining,
              " remaining"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "h-2 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_framer_motion22.motion.div,
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
var import_react52 = require("react");
function useSupplementTrackerLogic(trackerAdapter, stateAdapter, options) {
  const {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock: rawLock
  } = options;
  const lock = rawLock ?? false;
  const [localEdits, setLocalEdits] = (0, import_react52.useState)({});
  const [selectedDate] = (0, import_react52.useState)(
    initialSelectedDate ?? trackerAdapter.getTodayDate()
  );
  const supplements = (0, import_react52.useMemo)(
    () => initialSupplements || [],
    [initialSupplements]
  );
  const schedule = (0, import_react52.useMemo)(() => initialSchedule || [], [initialSchedule]);
  const todaySchedule = (0, import_react52.useMemo)(() => {
    return schedule.find((s) => s.date === selectedDate);
  }, [schedule, selectedDate]);
  const displayDoses = (0, import_react52.useMemo)(() => {
    const doses = todaySchedule?.doses || [];
    return stateAdapter.mergeEdits(doses, localEdits);
  }, [stateAdapter, todaySchedule, localEdits]);
  const groupedByTiming = (0, import_react52.useMemo)(() => {
    return trackerAdapter.groupByTiming(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);
  const stats = (0, import_react52.useMemo)(() => {
    return trackerAdapter.calculateStats(supplements, displayDoses);
  }, [trackerAdapter, supplements, displayDoses]);
  const formattedDate = (0, import_react52.useMemo)(() => {
    return trackerAdapter.formatDisplayDate(selectedDate);
  }, [trackerAdapter, selectedDate]);
  const handleToggle = (0, import_react52.useCallback)(
    (suppId, doseId) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      const current = displayDoses.find((d) => d.id === key);
      const isTaken = current?.taken ?? false;
      setLocalEdits((prev) => stateAdapter.toggleDose(prev, key, isTaken));
    },
    [lock, displayDoses, stateAdapter]
  );
  const handleSkip = (0, import_react52.useCallback)(
    (suppId, doseId) => {
      if (lock) return;
      const key = doseId || `temp-${suppId}`;
      setLocalEdits((prev) => stateAdapter.skipDose(prev, key));
    },
    [lock, stateAdapter]
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
var import_jsx_runtime34 = require("react/jsx-runtime");
var SupplementTracker = (0, import_react53.memo)(function SupplementTracker2({
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
  const trackerAdapter = (0, import_react53.useMemo)(() => getSupplementTrackerAdapter(), []);
  const stateAdapter = (0, import_react53.useMemo)(() => getSupplementStateAdapter(), []);
  const {
    selectedDate,
    supplements,
    displayDoses,
    groupedByTiming,
    stats,
    formattedDate,
    handleToggle,
    handleSkip
  } = useSupplementTrackerLogic(trackerAdapter, stateAdapter, {
    initialSupplements,
    initialSchedule,
    initialSelectedDate,
    lock
  });
  (0, import_react54.useDomainAutoSave)("supplement", element.key, {
    type: "supplement_schedule",
    supplements,
    schedule: [{ date: selectedDate, doses: displayDoses }]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react32.Pill, { className: "w-4 h-4 sm:w-5 sm:h-5 text-violet-500" }),
        title || "Supplements"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "text-[0.625rem] sm:text-xs font-mono text-white/40", children: formattedDate })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(ProgressDashboard, { stats }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6", children: supplements.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react32.Package, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No supplements configured"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_framer_motion23.AnimatePresence, { mode: "popLayout", children: TIMING_ORDER.map((timing) => {
      const items = groupedByTiming.get(timing);
      if (!items || items.length === 0) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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

// src/domain/SupplementTracker/schema.ts
var import_zod11 = require("zod");
var supplementItemSchema = import_zod11.z.object({
  id: import_zod11.z.string().describe("Unique identifier (REQUIRED)"),
  name: import_zod11.z.string().describe("Supplement or medication name"),
  dosage: import_zod11.z.string().describe("Dosage amount (e.g., '500mg', '2 capsules')"),
  unit: import_zod11.z.enum([
    "mg",
    "g",
    "mcg",
    "IU",
    "ml",
    "capsules",
    "tablets",
    "drops",
    "other"
  ]).default("mg"),
  category: import_zod11.z.enum([
    "vitamin",
    "mineral",
    "amino_acid",
    "herb",
    "probiotic",
    "omega",
    "protein",
    "pre_workout",
    "post_workout",
    "medication",
    "other"
  ]).describe("Supplement category"),
  timing: import_zod11.z.enum([
    "morning",
    "pre_meal",
    "with_meal",
    "post_meal",
    "pre_workout",
    "post_workout",
    "evening",
    "bedtime"
  ]).describe("When to take"),
  frequency: import_zod11.z.enum(["daily", "twice_daily", "weekly", "as_needed", "custom"]).default("daily"),
  withFood: import_zod11.z.boolean().nullable().optional().describe("Should be taken with food"),
  notes: import_zod11.z.string().nullable().optional(),
  brand: import_zod11.z.string().nullable().optional(),
  stack: import_zod11.z.string().nullable().optional().describe("Stack name if part of a supplement stack")
});
var scheduledDoseSchema = import_zod11.z.object({
  id: import_zod11.z.string().describe("Unique identifier (REQUIRED)"),
  supplementId: import_zod11.z.string().describe("Reference to supplement item"),
  scheduledTime: import_zod11.z.string().describe("Scheduled time in HH:mm format"),
  taken: import_zod11.z.boolean().default(false),
  takenAt: import_zod11.z.string().nullable().optional().describe("Actual time taken in ISO format"),
  skipped: import_zod11.z.boolean().nullable().optional(),
  skipReason: import_zod11.z.string().nullable().optional()
});
var dailySupplementScheduleSchema = import_zod11.z.object({
  date: import_zod11.z.string().describe("Date in YYYY-MM-DD format"),
  doses: import_zod11.z.array(scheduledDoseSchema),
  notes: import_zod11.z.string().nullable().optional()
});
var SupplementTrackerPropsSchema = import_zod11.z.object({
  title: import_zod11.z.string().nullable().optional(),
  supplements: import_zod11.z.array(supplementItemSchema).describe("List of supplements/medications (REQUIRED)"),
  schedule: import_zod11.z.array(dailySupplementScheduleSchema).nullable().optional().describe("Daily schedules with doses"),
  selectedDate: import_zod11.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: import_zod11.z.enum(["daily", "weekly", "inventory"]).default("daily").describe("View mode"),
  showStacks: import_zod11.z.boolean().nullable().optional().describe("Group by supplement stacks"),
  lock: import_zod11.z.boolean().nullable().optional()
});
var SupplementTrackerDefinition = {
  name: "SupplementTracker",
  props: SupplementTrackerPropsSchema,
  description: "Ultra-powerful supplement and medication tracker with daily/weekly scheduling, timing optimization, and integration with meals and workouts.",
  hasChildren: true
};

// src/domain/Calendar/component.tsx
var import_react59 = require("react");
var import_react60 = require("@onegenui/react");
var import_lucide_react35 = require("lucide-react");
var import_framer_motion24 = require("framer-motion");

// src/domain/Calendar/components/event-card.tsx
var import_react55 = require("react");
var import_lucide_react34 = require("lucide-react");
var import_react56 = require("@onegenui/react");

// src/domain/Calendar/components/utils.ts
var import_lucide_react33 = require("lucide-react");
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
  workout: { icon: import_lucide_react33.Dumbbell, color: "bg-emerald-500" },
  meal: { icon: import_lucide_react33.Utensils, color: "bg-amber-500" },
  supplement: { icon: import_lucide_react33.Pill, color: "bg-violet-500" },
  work: { icon: import_lucide_react33.Briefcase, color: "bg-blue-500" },
  personal: { icon: import_lucide_react33.Heart, color: "bg-pink-500" },
  health: { icon: import_lucide_react33.Heart, color: "bg-red-500" },
  social: { icon: import_lucide_react33.Users, color: "bg-cyan-500" },
  travel: { icon: import_lucide_react33.Plane, color: "bg-indigo-500" },
  reminder: { icon: import_lucide_react33.Bell, color: "bg-orange-500" },
  other: { icon: import_lucide_react33.MoreHorizontal, color: "bg-zinc-500" }
};
var DEFAULT_CATEGORY_CONFIG2 = {
  icon: import_lucide_react33.MoreHorizontal,
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
var import_jsx_runtime35 = require("react/jsx-runtime");
var EventDot = (0, import_react55.memo)(function EventDot2({
  event
}) {
  const config = getCategoryConfig2(event.category);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      className: (0, import_utils.cn)("w-1.5 h-1.5 rounded-full flex-shrink-0", config.color),
      title: event.title
    }
  );
});
var EventCard3 = (0, import_react55.memo)(function EventCard4({
  event,
  compact,
  onToggle,
  lock,
  elementKey
}) {
  const config = getCategoryConfig2(event.category);
  const Icon = config.icon;
  if (compact) {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_react56.SelectableItem,
    {
      elementKey,
      itemId: event.id,
      className: (0, import_utils.cn)(
        "p-3 rounded-xl border transition-all cursor-pointer group",
        event.completed ? "bg-zinc-800/50 border-zinc-700/50 opacity-60" : "bg-zinc-900/60 border-white/10 hover:border-white/20"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
        "div",
        {
          className: "flex items-start gap-3",
          onClick: () => !lock && onToggle(event.id),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
              "div",
              {
                className: (0, import_utils.cn)("w-1 h-full min-h-[40px] rounded-full", config.color)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { size: 12, className: "text-white/40" }),
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                  "span",
                  {
                    className: (0, import_utils.cn)(
                      "text-sm font-semibold text-white truncate",
                      event.completed && "line-through"
                    ),
                    children: event.title
                  }
                ),
                event.priority === "high" && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center gap-3 mt-1 text-xs text-white/40", children: [
                !event.allDay && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react34.Clock, { size: 10 }),
                  formatTime(event.start),
                  event.end && ` - ${formatTime(event.end)}`
                ] }),
                event.allDay && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { children: "All day" }),
                event.location && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "flex items-center gap-1 truncate", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react34.MapPin, { size: 10 }),
                  event.location
                ] })
              ] }),
              event.description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "text-xs text-white/30 mt-1 line-clamp-2", children: event.description })
            ] })
          ]
        }
      )
    }
  );
});

// src/domain/Calendar/components/day-cell.tsx
var import_react57 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var DayCell = (0, import_react57.memo)(function DayCell2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "min-h-[100px] bg-zinc-950/30" });
  }
  const maxVisibleEvents = 3;
  const visibleEvents = events.slice(0, maxVisibleEvents);
  const hiddenCount = events.length - maxVisibleEvents;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "min-h-[100px] p-1.5 border-b border-r border-white/5 cursor-pointer transition-colors",
        isSelected && "bg-indigo-500/10",
        isToday && "bg-emerald-500/5"
      ),
      onClick: () => onClick(date),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium mb-1",
              isToday && "bg-emerald-500 text-black font-bold",
              isSelected && !isToday && "bg-indigo-500/30 text-indigo-300",
              !isToday && !isSelected && "text-white/60 hover:bg-white/5"
            ),
            children: date.getDate()
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
          visibleEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
          hiddenCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "text-[10px] text-white/30 pl-1.5", children: [
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
var import_react58 = require("react");
function useCalendarLogic(calendarAdapter, stateAdapter, options) {
  const {
    initialDate,
    initialView = "month",
    initialEvents = [],
    firstDayOfWeek = 1,
    lock = false
  } = options;
  const [localEdits, setLocalEdits] = (0, import_react58.useState)({});
  const [currentView, setCurrentView] = (0, import_react58.useState)(initialView);
  const [selectedDate, setSelectedDate] = (0, import_react58.useState)(() => {
    if (initialDate) return new Date(initialDate);
    return /* @__PURE__ */ new Date();
  });
  const displayEvents = (0, import_react58.useMemo)(
    () => stateAdapter.mergeEdits(initialEvents, localEdits),
    [stateAdapter, initialEvents, localEdits]
  );
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const calendarDays = (0, import_react58.useMemo)(
    () => calendarAdapter.getCalendarDays(
      currentYear,
      currentMonth,
      firstDayOfWeek
    ),
    [calendarAdapter, currentYear, currentMonth, firstDayOfWeek]
  );
  const eventsByDate = (0, import_react58.useMemo)(
    () => calendarAdapter.groupEventsByDate(displayEvents),
    [calendarAdapter, displayEvents]
  );
  const todayStr = calendarAdapter.toDateString(/* @__PURE__ */ new Date());
  const selectedDateStr = calendarAdapter.toDateString(selectedDate);
  const selectedDayEvents = (0, import_react58.useMemo)(
    () => eventsByDate.get(selectedDateStr) || [],
    [eventsByDate, selectedDateStr]
  );
  const navigateMonth = (0, import_react58.useCallback)(
    (direction) => {
      setSelectedDate((prev) => stateAdapter.navigateMonth(prev, direction));
    },
    [stateAdapter]
  );
  const goToToday = (0, import_react58.useCallback)(() => {
    setSelectedDate(/* @__PURE__ */ new Date());
  }, []);
  const handleToggleEvent = (0, import_react58.useCallback)(
    (eventId) => {
      if (lock) return;
      const event = displayEvents.find((e) => e.id === eventId);
      if (!event) return;
      setLocalEdits(
        (prev) => stateAdapter.toggleEventCompletion(
          prev,
          eventId,
          event.completed ?? false
        )
      );
    },
    [lock, displayEvents, stateAdapter]
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
var import_jsx_runtime37 = require("react/jsx-runtime");
var containerVariants4 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
};
var eventVariants = {
  hidden: { opacity: 0, y: "0.625rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-0.625rem" }
};
var Calendar9 = (0, import_react59.memo)(function Calendar10({
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
  const calendarAdapter = (0, import_react59.useMemo)(() => getCalendarAdapter(), []);
  const stateAdapter = (0, import_react59.useMemo)(() => getCalendarStateAdapter(), []);
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
  } = useCalendarLogic(calendarAdapter, stateAdapter, {
    initialDate: initialSelectedDate ?? void 0,
    initialView,
    initialEvents,
    firstDayOfWeek,
    lock
  });
  (0, import_react60.useDomainAutoSave)("calendar", element.key, {
    type: "calendar",
    events: displayEvents,
    selectedDate: selectedDateStr,
    view: currentView
  });
  const orderedDays = (0, import_react59.useMemo)(() => {
    const days = [...DAYS_SHORT2];
    const shifted = days.splice(0, firstDayOfWeek);
    return [...days, ...shifted];
  }, [firstDayOfWeek]);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex flex-col gap-3 sm:gap-4 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react35.Calendar, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h3", { className: "text-lg sm:text-xl font-bold tracking-tight text-foreground", children: title || "Calendar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-2 justify-between sm:justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex rounded-lg border border-white/10 overflow-hidden", children: ["month", "agenda"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "button",
          {
            onClick: () => setCurrentView(v),
            className: (0, import_utils.cn)(
              "px-2.5 sm:px-3 py-1.5 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider transition-colors min-h-[2.25rem] touch-manipulation",
              currentView === v ? "bg-indigo-500/20 text-indigo-400" : "text-white/40 hover:text-white/60"
            ),
            children: v
          },
          v
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "button",
            {
              onClick: () => navigateMonth(-1),
              className: "w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
              children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react35.ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "button",
            {
              onClick: goToToday,
              className: "px-2 sm:px-3 py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 min-h-[2rem] touch-manipulation",
              children: "Today"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "button",
            {
              onClick: () => navigateMonth(1),
              className: "w-8 h-8 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
              children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react35.ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "text-base sm:text-lg font-bold text-foreground", children: [
      MONTHS[currentMonth],
      " ",
      currentYear
    ] }),
    currentView === "month" ? (
      /* Month View - responsive grid */
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "bg-zinc-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "grid grid-cols-7 border-b border-white/10", children: orderedDays.map((day) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          "div",
          {
            className: "py-1.5 sm:py-2 text-center text-[0.5625rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "sm:hidden", children: day.charAt(0) }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "hidden sm:inline", children: day })
            ]
          },
          day
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          import_framer_motion24.motion.div,
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
              return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-col gap-2 sm:gap-3", children: selectedDayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        EmptyState,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_react35.Calendar, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
          message: "No events"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_framer_motion24.AnimatePresence, { mode: "popLayout", children: selectedDayEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        import_framer_motion24.motion.div,
        {
          variants: eventVariants,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-1", children: Object.entries(CATEGORY_CONFIG2).slice(0, 6).map(([key, config]) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
      "div",
      {
        className: "flex items-center gap-1 sm:gap-1.5 text-[0.5625rem] sm:text-xs text-white/50 whitespace-nowrap",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: (0, import_utils.cn)("w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", config.color) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "capitalize", children: key })
        ]
      },
      key
    )) }),
    children
  ] });
});

// src/domain/Calendar/schema.ts
var import_zod12 = require("zod");
var calendarEventSchema = import_zod12.z.object({
  id: import_zod12.z.string().describe("Unique identifier (REQUIRED)"),
  title: import_zod12.z.string().describe("Event title"),
  description: import_zod12.z.string().nullable().optional(),
  start: import_zod12.z.string().describe("Start datetime in ISO 8601 format"),
  end: import_zod12.z.string().nullable().optional().describe("End datetime in ISO 8601 format"),
  allDay: import_zod12.z.boolean().nullable().optional(),
  location: import_zod12.z.string().nullable().optional(),
  color: import_zod12.z.string().nullable().optional().describe("Event color (hex)"),
  category: import_zod12.z.enum([
    "workout",
    "meal",
    "supplement",
    "work",
    "personal",
    "health",
    "social",
    "travel",
    "reminder",
    "other"
  ]).nullable().optional(),
  recurring: import_zod12.z.object({
    pattern: import_zod12.z.enum(["daily", "weekly", "monthly", "yearly"]),
    interval: import_zod12.z.number().optional().describe("Repeat every N days/weeks/etc"),
    endDate: import_zod12.z.string().nullable().optional(),
    daysOfWeek: import_zod12.z.array(import_zod12.z.number().min(0).max(6)).nullable().optional()
  }).nullable().optional(),
  reminders: import_zod12.z.array(
    import_zod12.z.object({
      type: import_zod12.z.enum(["notification", "email"]),
      minutes: import_zod12.z.number().describe("Minutes before event")
    })
  ).nullable().optional(),
  linkedEntityId: import_zod12.z.string().nullable().optional(),
  linkedEntityType: import_zod12.z.enum(["workout", "meal", "supplement", "routine", "diary", "task"]).nullable().optional(),
  status: import_zod12.z.enum(["confirmed", "tentative", "cancelled"]).nullable().optional(),
  completed: import_zod12.z.boolean().nullable().optional(),
  priority: import_zod12.z.enum(["high", "medium", "low"]).nullable().optional(),
  tags: import_zod12.z.array(import_zod12.z.string()).nullable().optional(),
  attendees: import_zod12.z.array(
    import_zod12.z.object({
      name: import_zod12.z.string(),
      email: import_zod12.z.string().nullable().optional(),
      status: import_zod12.z.enum(["accepted", "declined", "tentative", "pending"]).nullable().optional()
    })
  ).nullable().optional(),
  notes: import_zod12.z.string().nullable().optional()
});
var CalendarPropsSchema = import_zod12.z.object({
  title: import_zod12.z.string().nullable().optional(),
  view: import_zod12.z.enum(["month", "week", "day", "agenda", "year"]).default("month").describe("Calendar view mode"),
  selectedDate: import_zod12.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  events: import_zod12.z.array(calendarEventSchema).describe("Array of calendar events"),
  showWeekNumbers: import_zod12.z.boolean().nullable().optional(),
  firstDayOfWeek: import_zod12.z.number().min(0).max(6).default(1).describe("0=Sunday, 1=Monday"),
  highlightToday: import_zod12.z.boolean().default(true),
  showMiniCalendar: import_zod12.z.boolean().nullable().optional().describe("Show mini calendar sidebar"),
  showCategories: import_zod12.z.array(
    import_zod12.z.enum([
      "workout",
      "meal",
      "supplement",
      "work",
      "personal",
      "health",
      "social",
      "travel",
      "reminder",
      "other"
    ])
  ).nullable().optional().describe("Filter visible categories"),
  enableQuickAdd: import_zod12.z.boolean().nullable().optional().describe("Enable quick event creation"),
  workingHours: import_zod12.z.object({
    start: import_zod12.z.string().default("09:00"),
    end: import_zod12.z.string().default("17:00")
  }).nullable().optional(),
  lock: import_zod12.z.boolean().nullable().optional()
});
var CalendarDefinition = {
  name: "Calendar",
  props: CalendarPropsSchema,
  description: "Ultra-powerful calendar component with month/week/day/agenda views, event management, recurring events, and integration with workouts, meals, supplements, and diary entries.",
  hasChildren: true
};

// src/domain/Diary/component.tsx
var import_react65 = require("react");
var import_react66 = require("@onegenui/react");
var import_lucide_react39 = require("lucide-react");
var import_framer_motion25 = require("framer-motion");

// src/domain/Diary/components/diary-entry-card.tsx
var import_react62 = require("react");
var import_react63 = require("@onegenui/react");
var import_lucide_react38 = require("lucide-react");

// src/domain/Diary/components/sub-components.tsx
var import_react61 = require("react");
var import_lucide_react37 = require("lucide-react");

// src/domain/Diary/components/utils.ts
var import_lucide_react36 = require("lucide-react");
var DEFAULT_MOOD_CONFIG = {
  icon: import_lucide_react36.Meh,
  color: "text-zinc-400 bg-zinc-500/20",
  label: "Unknown"
};
var MOOD_CONFIG = {
  great: {
    icon: import_lucide_react36.Smile,
    color: "text-emerald-400 bg-emerald-500/20",
    label: "Great"
  },
  good: { icon: import_lucide_react36.Smile, color: "text-green-400 bg-green-500/20", label: "Good" },
  neutral: {
    icon: import_lucide_react36.Meh,
    color: "text-amber-400 bg-amber-500/20",
    label: "Neutral"
  },
  bad: { icon: import_lucide_react36.Frown, color: "text-orange-400 bg-orange-500/20", label: "Bad" },
  terrible: {
    icon: import_lucide_react36.Frown,
    color: "text-rose-400 bg-rose-500/20",
    label: "Terrible"
  }
};
function getMoodConfig(mood) {
  return MOOD_CONFIG[mood ?? "neutral"] ?? DEFAULT_MOOD_CONFIG;
}
var ENTITY_ICONS = {
  workout: import_lucide_react36.Dumbbell,
  meal: import_lucide_react36.Utensils,
  supplement: import_lucide_react36.Pill,
  calendar_event: import_lucide_react36.Calendar,
  routine: import_lucide_react36.Calendar
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
var import_jsx_runtime38 = require("react/jsx-runtime");
var MoodBadge = (0, import_react61.memo)(function MoodBadge2({ mood }) {
  const config = getMoodConfig(mood);
  const Icon = config.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg",
        config.color
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Icon, { size: 14 }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-xs font-bold", children: config.label })
      ]
    }
  );
});
var EnergyBar = (0, import_react61.memo)(function EnergyBar2({ level }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react37.Zap, { size: 14, className: "text-amber-400" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "div",
      {
        className: "h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all",
        style: { width: `${level * 10}%` }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { className: "text-xs font-mono text-white/40", children: [
      level,
      "/10"
    ] })
  ] });
});
var SleepInfo = (0, import_react61.memo)(function SleepInfo2({
  sleep
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center gap-2 text-xs text-white/50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react37.Moon, { size: 12, className: "text-indigo-400" }),
    sleep.hours && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { children: [
      sleep.hours,
      "h"
    ] }),
    sleep.quality && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "span",
      {
        className: (0, import_utils.cn)(
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
var GoalItem = (0, import_react61.memo)(function GoalItem2({
  goal,
  onToggle,
  lock
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex items-center gap-2 p-2 rounded-lg transition-colors cursor-pointer",
        goal.completed ? "bg-emerald-500/10" : "bg-white/5 hover:bg-white/10"
      ),
      onClick: () => !lock && onToggle(goal.id),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
              goal.completed ? "bg-emerald-500 border-emerald-500" : "border-white/20"
            ),
            children: goal.completed && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react37.Check, { size: 10, className: "text-black" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
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
var LinkedEntityBadge = (0, import_react61.memo)(function LinkedEntityBadge2({
  entity
}) {
  const Icon = ENTITY_ICONS[entity.type] || import_lucide_react37.Link;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Icon, { size: 12, className: "text-white/40" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-xs text-white/60", children: entity.label || entity.type })
  ] });
});

// src/domain/Diary/components/diary-entry-card.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var DiaryEntryCard = (0, import_react62.memo)(function DiaryEntryCard2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_react63.SelectableItem,
      {
        elementKey,
        itemId: entry.id,
        className: "p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:border-white/20 transition-all cursor-pointer",
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "text-sm font-mono text-white/40", children: formatShortDate(entry.date) }),
            entry.mood && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(MoodBadge, { mood: entry.mood })
          ] }),
          entry.title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "text-sm font-medium text-white truncate", children: entry.title })
        ] })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    import_react63.SelectableItem,
    {
      elementKey,
      itemId: entry.id,
      className: "p-5 rounded-2xl border border-white/10 bg-zinc-900/60",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "text-xs font-mono text-white/40 mb-1", children: formatDate(entry.date) }),
            entry.title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h4", { className: "text-lg font-bold text-white", children: entry.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2", children: [
            entry.mood && showMoodTracker && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(MoodBadge, { mood: entry.mood }),
            entry.sleep && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SleepInfo, { sleep: entry.sleep })
          ] })
        ] }),
        entry.energy && showEnergyTracker && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(EnergyBar, { level: entry.energy }) }),
        entry.content && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "prose prose-invert prose-sm max-w-none mb-4 text-white/80", children: entry.content }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PerforatedDivider, { className: "my-4" }),
        showGratitude && entry.gratitude && entry.gratitude.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react38.Heart, { size: 14, className: "text-rose-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Gratitude" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex flex-wrap gap-2", children: entry.gratitude.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            "div",
            {
              className: "px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300",
              children: item
            },
            i
          )) })
        ] }),
        entry.highlights && entry.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react38.Star, { size: 14, className: "text-amber-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Highlights" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { className: "space-y-1", children: entry.highlights.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
            "li",
            {
              className: "text-sm text-white/70 flex items-start gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-amber-400", children: "*" }),
                item
              ]
            },
            i
          )) })
        ] }),
        entry.goals && entry.goals.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react38.Target, { size: 14, className: "text-emerald-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Daily Goals" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "space-y-1", children: entry.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            GoalItem,
            {
              goal,
              onToggle: (goalId) => onToggleGoal(entry.id, goalId),
              lock
            },
            goal.id
          )) })
        ] }),
        showLinkedEntities && entry.linkedEntities && entry.linkedEntities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react38.Link, { size: 14, className: "text-indigo-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-xs font-bold text-white/50 uppercase tracking-wider", children: "Related" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex flex-wrap gap-2", children: entry.linkedEntities.map((entity, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(LinkedEntityBadge, { entity }, i)) })
        ] }),
        entry.tags && entry.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react38.Tag, { size: 12, className: "text-white/30" }),
          entry.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("span", { className: "text-xs text-white/40", children: [
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
var import_react64 = require("react");
function useDiaryLogic(diaryAdapter, stateAdapter, options) {
  const { initialEntries = [], initialSelectedDate, lock = false } = options;
  const [localEdits, setLocalEdits] = (0, import_react64.useState)({});
  const [selectedDate, setSelectedDate] = (0, import_react64.useState)(
    initialSelectedDate ?? diaryAdapter.getTodayString()
  );
  const displayEntries = (0, import_react64.useMemo)(
    () => stateAdapter.mergeEdits(initialEntries, localEdits),
    [stateAdapter, initialEntries, localEdits]
  );
  const selectedEntry = (0, import_react64.useMemo)(
    () => diaryAdapter.findEntryByDate(displayEntries, selectedDate),
    [diaryAdapter, displayEntries, selectedDate]
  );
  const sortedEntries = (0, import_react64.useMemo)(
    () => diaryAdapter.sortEntriesByDate(displayEntries),
    [diaryAdapter, displayEntries]
  );
  const navigateDate = (0, import_react64.useCallback)(
    (direction) => {
      setSelectedDate((prev) => diaryAdapter.navigateDate(prev, direction));
    },
    [diaryAdapter]
  );
  const goToToday = (0, import_react64.useCallback)(() => {
    setSelectedDate(diaryAdapter.getTodayString());
  }, [diaryAdapter]);
  const handleToggleGoal = (0, import_react64.useCallback)(
    (entryId, goalId) => {
      if (lock) return;
      const entry = displayEntries.find((e) => e.id === entryId);
      if (!entry || !entry.goals) return;
      setLocalEdits((prev) => stateAdapter.toggleGoal(prev, entry, goalId));
    },
    [lock, displayEntries, stateAdapter]
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
var import_jsx_runtime40 = require("react/jsx-runtime");
var Diary = (0, import_react65.memo)(function Diary2({
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
  const diaryAdapter = (0, import_react65.useMemo)(() => getDiaryAdapter(), []);
  const stateAdapter = (0, import_react65.useMemo)(() => getDiaryStateAdapter(), []);
  const {
    selectedDate,
    displayEntries,
    selectedEntry,
    sortedEntries,
    setSelectedDate,
    navigateDate,
    goToToday,
    handleToggleGoal
  } = useDiaryLogic(diaryAdapter, stateAdapter, {
    initialEntries,
    initialSelectedDate,
    view,
    lock
  });
  (0, import_react66.useDomainAutoSave)("diary", element.key, {
    type: "diary",
    entries: displayEntries,
    selectedDate
  });
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("h3", { className: "text-base sm:text-lg lg:text-xl font-bold tracking-tight flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react39.BookOpen, { className: "w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" }),
        title || "Diary"
      ] }),
      view === "single" && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "button",
          {
            onClick: () => navigateDate(-1),
            className: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
            children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react39.ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "button",
          {
            onClick: goToToday,
            className: "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 text-[0.625rem] sm:text-xs font-bold text-white/60 hover:text-white hover:bg-white/5 touch-manipulation",
            children: "Today"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "button",
          {
            onClick: () => navigateDate(1),
            className: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 touch-manipulation",
            children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react39.ChevronRight, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_framer_motion25.AnimatePresence, { mode: "wait", children: view === "single" ? selectedEntry ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      import_framer_motion25.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
    ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react39.BookOpen, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No entry for this day"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex flex-col gap-2 sm:gap-3", children: sortedEntries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      EmptyState,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react39.BookOpen, { className: "w-8 h-8 sm:w-10 sm:h-10" }),
        message: "No diary entries"
      }
    ) : sortedEntries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      import_framer_motion25.motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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

// src/domain/Diary/schema.ts
var import_zod13 = require("zod");
var diaryEntrySchema = import_zod13.z.object({
  id: import_zod13.z.string().describe("Unique identifier (REQUIRED)"),
  date: import_zod13.z.string().describe("Entry date in YYYY-MM-DD format"),
  title: import_zod13.z.string().nullable().optional().describe("Optional entry title"),
  content: import_zod13.z.string().describe("Main diary content (markdown supported)"),
  mood: import_zod13.z.enum(["great", "good", "neutral", "bad", "terrible"]).nullable().optional().describe("Overall mood for the day"),
  energy: import_zod13.z.number().min(1).max(10).nullable().optional().describe("Energy level 1-10"),
  sleep: import_zod13.z.object({
    hours: import_zod13.z.number().nullable().optional(),
    quality: import_zod13.z.enum(["great", "good", "fair", "poor"]).nullable().optional()
  }).nullable().optional(),
  gratitude: import_zod13.z.array(import_zod13.z.string()).nullable().optional().describe("Things to be grateful for"),
  highlights: import_zod13.z.array(import_zod13.z.string()).nullable().optional().describe("Day highlights"),
  challenges: import_zod13.z.array(import_zod13.z.string()).nullable().optional().describe("Challenges faced"),
  goals: import_zod13.z.array(
    import_zod13.z.object({
      id: import_zod13.z.string(),
      text: import_zod13.z.string(),
      completed: import_zod13.z.boolean().nullable().optional()
    })
  ).nullable().optional().describe("Daily goals"),
  tags: import_zod13.z.array(import_zod13.z.string()).nullable().optional(),
  linkedEntities: import_zod13.z.array(
    import_zod13.z.object({
      type: import_zod13.z.enum([
        "workout",
        "meal",
        "supplement",
        "calendar_event",
        "routine"
      ]),
      id: import_zod13.z.string(),
      label: import_zod13.z.string().nullable().optional()
    })
  ).nullable().optional().describe("Related items from other domains"),
  weather: import_zod13.z.object({
    condition: import_zod13.z.string().nullable().optional(),
    temperature: import_zod13.z.number().nullable().optional()
  }).nullable().optional(),
  location: import_zod13.z.string().nullable().optional(),
  photos: import_zod13.z.array(import_zod13.z.string()).nullable().optional().describe("Photo URLs"),
  private: import_zod13.z.boolean().nullable().optional().describe("Mark as private entry"),
  createdAt: import_zod13.z.string().nullable().optional(),
  updatedAt: import_zod13.z.string().nullable().optional()
});
var DiaryPropsSchema = import_zod13.z.object({
  title: import_zod13.z.string().nullable().optional(),
  entries: import_zod13.z.array(diaryEntrySchema).describe("Array of diary entries"),
  selectedDate: import_zod13.z.string().nullable().optional().describe("Selected date in YYYY-MM-DD format"),
  view: import_zod13.z.enum(["single", "timeline", "calendar"]).default("single").describe("View mode: single entry, timeline, or calendar overview"),
  showMoodTracker: import_zod13.z.boolean().default(true),
  showEnergyTracker: import_zod13.z.boolean().default(true),
  showGratitude: import_zod13.z.boolean().default(true),
  showLinkedEntities: import_zod13.z.boolean().default(true).describe("Show linked workouts, meals, etc."),
  enableSearch: import_zod13.z.boolean().nullable().optional(),
  lock: import_zod13.z.boolean().nullable().optional()
});
var DiaryDefinition = {
  name: "Diary",
  props: DiaryPropsSchema,
  description: "Personal diary and journal component with mood tracking, energy levels, gratitude, goals, and integration with workouts, meals, and calendar events.",
  hasChildren: true
};

// src/domain/research/ResearchReport.tsx
var import_react71 = require("react");
var import_lucide_react42 = require("lucide-react");

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
var import_react67 = require("react");
var import_lucide_react40 = require("lucide-react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var VideoPlayer = (0, import_react67.memo)(function VideoPlayer2({
  video,
  title
}) {
  const [isPlaying, setIsPlaying] = (0, import_react67.useState)(false);
  const embedInfo = detectVideoEmbed(video.url);
  if (isPlaying) {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "mt-4 rounded-xl overflow-hidden border border-white/10 aspect-video bg-black", children: embedInfo ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "iframe",
      {
        src: embedInfo.embedUrl,
        title: video.title || title,
        className: "w-full h-full border-0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
        allowFullScreen: true
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "video",
      {
        src: video.url,
        controls: true,
        autoPlay: true,
        className: "w-full h-full object-contain",
        children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("source", { src: video.url })
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "button",
    {
      onClick: () => setIsPlaying(true),
      className: "mt-4 block w-full relative rounded-xl overflow-hidden border border-white/10 group text-left",
      children: [
        video.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "img",
          {
            src: video.thumbnail,
            alt: video.title || "Video",
            className: "w-full h-48 sm:h-56 md:h-64 object-cover",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "w-full h-48 sm:h-56 md:h-64 bg-zinc-800 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react40.PlayCircle, { className: "w-12 h-12 text-zinc-600" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react40.Play, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" }) }) }),
        video.title && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "text-sm sm:text-base font-medium text-white", children: video.title }) })
      ]
    }
  );
});

// src/domain/research/components/citation-badge.tsx
var import_react68 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var CitationBadge = (0, import_react68.memo)(function CitationBadge2({
  id,
  source
}) {
  if (!source) return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("sup", { className: "text-sky-400", children: [
    "[",
    id,
    "]"
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    "a",
    {
      href: source.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-0.5 px-1 py-0.5 mx-0.5 text-[10px] font-medium bg-sky-500/20 text-sky-400 rounded hover:bg-sky-500/30 transition-colors cursor-pointer",
      children: [
        source.favicon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { src: source.favicon, alt: "", className: "w-3 h-3 rounded-sm" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: source.domain || id })
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
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CitationBadge, { id: sourceId, source }, i);
    }
    if (renderText) {
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: renderText(part, { inline: true }) }, i);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: part }, i);
  });
}

// src/domain/research/components/source-card.tsx
var import_react69 = require("react");
var import_lucide_react41 = require("lucide-react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var SourceCard = (0, import_react69.memo)(function SourceCard2({
  source
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "a",
    {
      href: source.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-sky-500/30 hover:bg-zinc-800 transition-all",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center flex-shrink-0", children: source.favicon ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("img", { src: source.favicon, alt: "", className: "w-5 h-5 rounded" }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react41.Globe, { className: "w-4 h-4 text-zinc-400" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "text-sm font-medium text-white truncate group-hover:text-sky-300 transition-colors", children: source.title }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "text-xs text-zinc-500 truncate", children: source.domain })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react41.ExternalLink, { className: "w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors flex-shrink-0" })
      ]
    }
  );
});

// src/domain/research/components/report-section.tsx
var import_react70 = require("react");
var import_jsx_runtime44 = require("react/jsx-runtime");
var ReportSectionComponent = (0, import_react70.memo)(function ReportSectionComponent2({
  section,
  sources,
  renderText
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("h3", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "w-1 h-5 bg-sky-500 rounded-full" }),
      section.title
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "text-zinc-300 leading-relaxed text-[15px]", children: renderContentWithCitations(section.content, sources, renderText) }),
    section.image && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("figure", { className: "mt-4 rounded-xl overflow-hidden border border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        "img",
        {
          src: section.image.url,
          alt: section.image.alt || section.title,
          className: "w-full h-auto min-h-[200px] max-h-[400px] sm:max-h-[500px] object-cover",
          loading: "lazy"
        }
      ),
      section.image.caption && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("figcaption", { className: "px-4 py-2.5 text-xs sm:text-sm text-zinc-500 bg-zinc-900/50", children: section.image.caption })
    ] }),
    section.video && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(VideoPlayer, { video: section.video, title: section.title })
  ] });
});

// src/domain/research/ResearchReport.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var ResearchReport = (0, import_react71.memo)(function ResearchReport2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "p-4 sm:p-8 text-center text-zinc-500", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_lucide_react42.FileText, { className: "w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm", children: "No report content" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "rounded-xl sm:rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "p-4 sm:p-6 border-b border-white/5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "text-zinc-300 leading-relaxed text-xs sm:text-sm lg:text-[15px]", children: renderContentWithCitations(summary, sources, render) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "p-4 sm:p-6 space-y-6 sm:space-y-8", children: sections.map((section, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        ReportSectionComponent,
        {
          section,
          sources,
          renderText: render
        },
        i
      )) }),
      relatedQueries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "px-4 sm:px-6 pb-4 sm:pb-6", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: relatedQueries.map((query, i) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        "button",
        {
          className: "px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-zinc-400 bg-zinc-800/50 rounded-full border border-white/5 hover:border-sky-500/30 hover:text-sky-300 transition-all touch-manipulation min-h-[2rem] sm:min-h-0",
          children: query
        },
        i
      )) }) })
    ] }),
    sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "rounded-xl sm:rounded-2xl bg-zinc-900/40 border border-white/5 p-3 sm:p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center justify-between mb-3 sm:mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("h4", { className: "text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider", children: [
          sources.length,
          " Sources"
        ] }),
        totalResults && totalResults > sources.length && /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500", children: [
          "da ",
          totalResults,
          " risultati totali"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "grid gap-2 grid-cols-1 sm:grid-cols-2", children: sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(SourceCard, { source }, source.id)) })
    ] }),
    children
  ] });
});

// src/domain/DocumentIndex/component.tsx
var import_react72 = require("react");
var import_lucide_react43 = require("lucide-react");
var import_framer_motion26 = require("framer-motion");
var import_jsx_runtime46 = require("react/jsx-runtime");
var TreeNodeItem = (0, import_react72.memo)(function TreeNodeItem2({
  node,
  depth,
  accentColor,
  onNodeClick
}) {
  const [expanded, setExpanded] = (0, import_react72.useState)(depth > 0);
  const [showFullSummary, setShowFullSummary] = (0, import_react72.useState)(false);
  const hasChildren = node.children && node.children.length > 0;
  const toggle = (0, import_react72.useCallback)(() => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
  }, [hasChildren]);
  const handleNodeClick = (0, import_react72.useCallback)(
    (e) => {
      e.stopPropagation();
      setShowFullSummary((prev) => !prev);
      if (!expanded) setExpanded(true);
      onNodeClick?.(node);
    },
    [onNodeClick, node, expanded]
  );
  const pageRange = node.startPage === node.endPage ? `p. ${node.startPage}` : `pp. ${node.startPage}-${node.endPage}`;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "select-none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      "div",
      {
        onClick: toggle,
        className: (0, import_utils.cn)(
          "flex items-start gap-1.5 sm:gap-2 py-1.5 px-1.5 sm:px-2 rounded-md transition-colors group touch-manipulation",
          hasChildren && "cursor-pointer hover:bg-white/5",
          depth === 0 && "font-semibold"
        ),
        style: { paddingLeft: `${depth * 12 + 8}px` },
        children: [
          hasChildren ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "mt-0.5 shrink-0 text-muted-foreground", children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.ChevronDown, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.ChevronRight, { className: "h-4 w-4" }) }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "mt-0.5 shrink-0 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-wrap items-center gap-1.5 sm:gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                "span",
                {
                  className: (0, import_utils.cn)(
                    "text-xs sm:text-sm truncate",
                    depth === 0 ? "text-foreground" : "text-foreground/80"
                  ),
                  children: node.title
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                "span",
                {
                  className: "text-[0.5rem] sm:text-[0.625rem] px-1 sm:px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground shrink-0",
                  style: accentColor ? { backgroundColor: `${accentColor}20` } : {},
                  children: pageRange
                }
              ),
              onNodeClick && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                "button",
                {
                  onClick: handleNodeClick,
                  className: (0, import_utils.cn)(
                    "transition-opacity p-0.5 rounded hover:bg-white/10",
                    showFullSummary ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  ),
                  title: showFullSummary ? "Hide details" : "View section details",
                  children: showFullSummary ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                    import_lucide_react43.ChevronDown,
                    {
                      className: "h-3 w-3",
                      style: { color: accentColor }
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
                    import_lucide_react43.ExternalLink,
                    {
                      className: "h-3 w-3",
                      style: { color: accentColor }
                    }
                  )
                }
              )
            ] }),
            node.summary && expanded && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              "p",
              {
                className: (0, import_utils.cn)(
                  "text-xs text-muted-foreground mt-1",
                  !showFullSummary && "line-clamp-2"
                ),
                children: node.summary
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_framer_motion26.AnimatePresence, { children: expanded && hasChildren && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      import_framer_motion26.motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: node.children.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var DocumentIndex = (0, import_react72.memo)(function DocumentIndex2({
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
  const [collapsed, setCollapsed] = (0, import_react72.useState)(initialCollapsed);
  const handleNodeClick = (0, import_react72.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "rounded-lg sm:rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      "div",
      {
        className: "flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors gap-2 sm:gap-3 touch-manipulation",
        onClick: () => setCollapsed((prev) => !prev),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              "div",
              {
                className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0",
                style: { backgroundColor: `${accentColor}20` },
                children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.FileText, { className: "h-4 w-4 sm:h-5 sm:w-5", style: { color: accentColor } })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h3", { className: "text-xs sm:text-sm font-semibold text-foreground truncate", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-[0.625rem] sm:text-xs text-muted-foreground line-clamp-1 max-w-md", children: description })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 pl-10 sm:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.BookOpen, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { children: [
                pageCount,
                " pages"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.Hash, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { children: [
                nodes?.length || 0,
                " sections"
              ] })
            ] }),
            collapsed ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.ChevronRight, { className: "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react43.ChevronDown, { className: "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_framer_motion26.AnimatePresence, { children: !collapsed && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      import_framer_motion26.motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "p-2 sm:p-3", children: nodes && nodes.length > 0 ? nodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          TreeNodeItem,
          {
            node,
            depth: 0,
            accentColor,
            onNodeClick: handleNodeClick
          },
          node.nodeId || index
        )) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-xs sm:text-sm text-muted-foreground text-center py-3 sm:py-4", children: "No sections found" }) })
      }
    ) })
  ] });
});

// src/domain/DocumentIndex/schema.ts
var import_zod14 = require("zod");
var DocumentIndexNodeSchema = import_zod14.z.lazy(
  () => import_zod14.z.object({
    title: import_zod14.z.string().describe("Section title"),
    nodeId: import_zod14.z.string().describe("Unique node identifier"),
    startPage: import_zod14.z.number().int().min(1).describe("Starting page number"),
    endPage: import_zod14.z.number().int().min(1).describe("Ending page number"),
    summary: import_zod14.z.string().optional().describe("Section summary"),
    children: import_zod14.z.array(DocumentIndexNodeSchema).optional().describe("Nested sections")
  })
);
var DocumentIndexPropsSchema = import_zod14.z.object({
  title: import_zod14.z.string().describe("Document title"),
  description: import_zod14.z.string().optional().describe("Document description"),
  pageCount: import_zod14.z.number().int().min(1).describe("Total number of pages"),
  nodes: import_zod14.z.array(DocumentIndexNodeSchema).describe("Top-level sections"),
  accentColor: import_zod14.z.string().optional().describe("Accent color for styling"),
  collapsed: import_zod14.z.boolean().optional().default(false).describe("Start collapsed")
});

// src/domain/DocumentIndex/index.ts
var DocumentIndexDefinition = {
  type: "DocumentIndex",
  component: DocumentIndex,
  schema: DocumentIndexPropsSchema
};

// src/domain/SourceCitation/component.tsx
var import_react73 = require("react");
var import_lucide_react44 = require("lucide-react");
var import_framer_motion27 = require("framer-motion");
var import_jsx_runtime47 = require("react/jsx-runtime");
var SourceCitation = (0, import_react73.memo)(function SourceCitation2({
  element
}) {
  const {
    title,
    citations = [],
    collapsed: initialCollapsed = true,
    accentColor = "#3b82f6"
  } = element.props;
  const [expanded, setExpanded] = (0, import_react73.useState)(!initialCollapsed);
  const visibleCitations = expanded ? citations : citations.slice(0, 4);
  if (citations.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "flex -space-x-1", children: citations.slice(0, 3).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "div",
        {
          className: "w-5 h-5 rounded-full border-2 border-zinc-900 flex items-center justify-center",
          style: { backgroundColor: `${accentColor}20` },
          children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react44.FileText, { size: 10, style: { color: accentColor } })
        },
        i
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("span", { className: "font-medium", children: [
        citations.length,
        " sources"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-muted-foreground/60", children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-muted-foreground/60 truncate max-w-32", children: title })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "flex flex-col gap-1", children: visibleCitations.map((citation, idx) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      CompactCitation,
      {
        citation,
        index: idx,
        accentColor
      },
      citation.id || idx
    )) }),
    citations.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "flex items-center justify-center gap-1 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
        children: [
          expanded ? "Mostra meno" : `Mostra tutte (${citations.length})`,
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            import_lucide_react44.ChevronDown,
            {
              size: 14,
              className: (0, import_utils.cn)("transition-transform", expanded && "rotate-180")
            }
          )
        ]
      }
    )
  ] });
});
var CompactCitation = (0, import_react73.memo)(function CompactCitation2({
  citation,
  index,
  accentColor
}) {
  const [showExcerpt, setShowExcerpt] = (0, import_react73.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    import_framer_motion27.motion.div,
    {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.03 },
      className: "group",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          "button",
          {
            onClick: () => setShowExcerpt(!showExcerpt),
            className: "w-full flex items-start gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all text-left",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                "span",
                {
                  className: "shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-medium",
                  style: { backgroundColor: `${accentColor}20`, color: accentColor },
                  children: citation.id
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "text-xs font-medium text-foreground/80 line-clamp-1 leading-tight", children: citation.sectionTitle || citation.text?.slice(0, 50) || "Source" }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react44.BookOpen, { size: 10, className: "text-muted-foreground/50" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("span", { className: "text-[10px] text-muted-foreground/60", children: [
                    "p. ",
                    citation.pageNumber
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_lucide_react44.ChevronDown,
                {
                  size: 12,
                  className: (0, import_utils.cn)(
                    "shrink-0 text-muted-foreground/40 transition-transform",
                    showExcerpt && "rotate-180"
                  )
                }
              )
            ]
          }
        ),
        showExcerpt && citation.text && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          import_framer_motion27.motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "ml-7 mt-1 mb-2 p-2 rounded-lg bg-white/[0.02] border-l-2",
            style: { borderColor: accentColor },
            children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "text-xs text-foreground/70 italic leading-relaxed", children: [
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

// src/domain/SourceCitation/schema.ts
var import_zod15 = require("zod");
var CitationSchema = import_zod15.z.object({
  id: import_zod15.z.string().describe("Unique citation identifier"),
  nodeId: import_zod15.z.string().describe("Reference to the source node"),
  text: import_zod15.z.string().describe("The cited text"),
  pageNumber: import_zod15.z.number().int().min(1).describe("Page number of the citation"),
  sectionTitle: import_zod15.z.string().describe("Section title containing the citation"),
  confidence: import_zod15.z.enum(["high", "medium", "low"]).optional().describe("Confidence level")
});
var SourceCitationPropsSchema = import_zod15.z.object({
  title: import_zod15.z.string().describe("Document title"),
  description: import_zod15.z.string().optional().describe("Brief description"),
  citations: import_zod15.z.array(CitationSchema).describe("List of citations"),
  showPageNumbers: import_zod15.z.boolean().optional().default(true),
  collapsed: import_zod15.z.boolean().optional().default(false),
  accentColor: import_zod15.z.string().optional().describe("Accent color for styling")
  // Note: onCitationClick is a runtime callback, not part of schema validation
});

// src/domain/SourceCitation/index.ts
var SourceCitationDefinition = {
  type: "SourceCitation",
  component: SourceCitation,
  schema: SourceCitationPropsSchema
};

// src/index.ts
var import_ui = require("@onegenui/ui");

// src/communication/Message/component.tsx
var import_react74 = require("react");
var import_lucide_react45 = require("lucide-react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var Message = (0, import_react74.memo)(function Message2({
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
  const [messages, setMessages] = (0, import_react74.useState)(
    initialMessages || []
  );
  (0, import_react74.useEffect)(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);
  const [replyText, setReplyText] = (0, import_react74.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-col h-full max-h-[500px] sm:max-h-[600px] overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 glass-panel bg-card/80 backdrop-blur-md shadow-lg", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center justify-between border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/20 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "font-semibold text-sm sm:text-base truncate", children: title }),
      participants.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex -space-x-1.5 sm:-space-x-2 shrink-0", children: [
        participants.slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          "div",
          {
            className: "relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-background text-[0.5rem] sm:text-[0.625rem] font-medium text-white shadow-sm ring-1 ring-black/5 bg-[var(--avatar-bg,var(--primary))]",
            style: {
              "--avatar-bg": p.color
            },
            title: `${p.name} (${p.role})`,
            children: p.avatar ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              "img",
              {
                src: p.avatar,
                alt: p.name,
                className: "h-full w-full rounded-full object-cover"
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { children: p.name[0] })
          },
          p.id
        )),
        participants.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-background text-[0.5rem] sm:text-[0.625rem] font-medium text-white shadow-sm bg-zinc-600", children: [
          "+",
          participants.length - 5
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-1 flex-col gap-3 sm:gap-4 overflow-y-auto p-3 sm:p-4 bg-muted/5 min-h-0 touch-pan-y", children: [
      messages.map((msg) => {
        const participant = getParticipant(msg.participantId);
        const senderName = participant ? participant.name : msg.sender;
        const role = participant?.role;
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
          "div",
          {
            "data-selectable-item": true,
            "data-element-key": element.key,
            "data-item-id": msg.id,
            className: (0, import_utils.cn)(
              "flex flex-col max-w-[90%] sm:max-w-[85%] cursor-pointer group transition-all",
              msg.isOwn ? "self-end items-end" : "self-start items-start"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-[0.625rem] sm:text-xs text-muted-foreground",
                    msg.isOwn ? "flex-row-reverse" : "flex-row"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "font-semibold text-foreground truncate max-w-[8rem] sm:max-w-none", children: senderName }),
                    role && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "px-1 sm:px-1.5 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] bg-secondary text-secondary-foreground border border-border/50 hidden sm:inline", children: role }),
                    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "opacity-70 text-[0.5rem] sm:text-[0.625rem]", children: msg.timestamp })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                "div",
                {
                  className: (0, import_utils.cn)(
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
      activeAgents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2 px-1 sm:px-2", children: activeAgents.map((agentId) => {
        const p = getParticipant(agentId);
        if (!p) return null;
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
          "div",
          {
            className: "flex items-center gap-1.5 sm:gap-2 text-[0.625rem] sm:text-xs text-muted-foreground animate-pulse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                "div",
                {
                  className: "h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[var(--agent-color,currentColor)]",
                  style: {
                    "--agent-color": p.color
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("span", { children: [
                p.name,
                " is typing..."
              ] })
            ]
          },
          agentId
        );
      }) }),
      messages.length === 0 && activeAgents.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground opacity-50 space-y-1.5 sm:space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "p-3 sm:p-4 rounded-full bg-muted/50", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_lucide_react45.User, { className: "h-6 w-6 sm:h-8 sm:w-8 opacity-50" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs sm:text-sm", children: "No messages yet" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "p-2.5 sm:p-4 border-t border-border bg-background flex gap-2 items-end safe-area-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "textarea",
        {
          "data-interactive": true,
          value: replyText,
          onChange: (e) => setReplyText(e.target.value),
          placeholder: lock ? "Conversation locked" : "Type a message...",
          disabled: lock,
          className: (0, import_utils.cn)(
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
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "button",
        {
          "data-interactive": true,
          onClick: handleSendReply,
          disabled: lock || !replyText.trim(),
          className: (0, import_utils.cn)(
            "inline-flex items-center justify-center shrink-0 rounded-lg h-[2.75rem] w-[2.75rem] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
            !replyText.trim() ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_lucide_react45.Send, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
        }
      )
    ] }),
    children
  ] });
});

// src/communication/Message/schema.ts
var import_zod16 = require("zod");
var MessagePropsSchema = import_zod16.z.object({
  title: import_zod16.z.string().nullable(),
  messages: import_zod16.z.array(import_schemas.messageItemSchema),
  participants: import_zod16.z.array(import_schemas.participantSchema).nullable(),
  activeAgents: import_zod16.z.array(import_zod16.z.string()).nullable().describe("IDs of agents currently typing"),
  lock: import_zod16.z.boolean().nullable()
});
var MessageDefinition = {
  name: "Message",
  props: MessagePropsSchema,
  description: "Chat interface for multi-agent conversations.",
  hasChildren: true
};

// src/communication/Email/component.tsx
var import_react78 = require("react");
var import_lucide_react49 = require("lucide-react");

// src/communication/Email/components/unread-dot.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
function UnreadDot() {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_8px_rgba(234,67,53,0.5)] bg-gradient-to-br from-red-500 to-red-700" });
}

// src/communication/Email/components/compose-modal.tsx
var import_react75 = require("react");
var import_lucide_react46 = require("lucide-react");

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
var import_jsx_runtime50 = require("react/jsx-runtime");
function ComposeModal({
  mode,
  originalEmail,
  onClose,
  onSend
}) {
  const [to, setTo] = (0, import_react75.useState)("");
  const [cc, setCc] = (0, import_react75.useState)("");
  const [subject, setSubject] = (0, import_react75.useState)("");
  const [body, setBody] = (0, import_react75.useState)("");
  const [sending, setSending] = (0, import_react75.useState)(false);
  (0, import_react75.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "div",
    {
      className: "flex flex-col w-full sm:max-w-[600px] max-h-[95vh] sm:max-h-[90vh] bg-card border-t sm:border border-border rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 border-b border-border bg-muted/20", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "font-semibold text-sm sm:text-base", children: modeTitle }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              onClick: onClose,
              className: "p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_lucide_react46.X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex flex-col gap-2 sm:gap-3 p-3 sm:p-5 flex-1 overflow-y-auto touch-pan-y", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "A:" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "Cc:" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("label", { className: "text-xs sm:text-sm text-muted-foreground sm:w-10", children: "Ogg:" }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "textarea",
            {
              value: body,
              onChange: (e) => setBody(e.target.value),
              placeholder: "Scrivi il tuo messaggio...",
              className: "flex-1 min-h-[150px] sm:min-h-[200px] resize-y bg-muted/20 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all leading-relaxed font-sans"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex justify-between items-center px-3 sm:px-5 py-3 sm:py-4 border-t border-border bg-muted/20 safe-area-bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "button",
            {
              className: "p-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors opacity-50 cursor-pointer touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              title: "Allega file",
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_lucide_react46.Paperclip, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
            "button",
            {
              onClick: handleSend,
              disabled: !to.trim() || sending,
              className: (0, import_utils.cn)(
                "flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]",
                !to.trim() || sending ? "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50" : "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer hover:shadow-blue-500/30"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_lucide_react46.Send, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
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
var import_react76 = require("react");
var import_lucide_react47 = require("lucide-react");
var import_jsx_runtime51 = require("react/jsx-runtime");
var EmailList = (0, import_react76.memo)(function EmailList2({
  emails,
  elementKey,
  hoveredId,
  onSelectEmail,
  onToggleStar,
  onHoverEmail
}) {
  if (emails.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex flex-col items-center justify-center py-12 sm:py-16 text-foreground/60 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-50", children: "\u{1F4ED}" }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "text-base sm:text-lg font-semibold mb-1 text-foreground", children: "Nessuna email" }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "text-xs sm:text-sm text-foreground/50", children: "La tua inbox \xE8 vuota" })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 bg-background/50 touch-pan-y", children: emails.map((email) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "div",
    {
      "data-selectable-item": true,
      "data-element-key": elementKey,
      "data-item-id": email.id,
      onClick: () => onSelectEmail(email.id),
      onMouseEnter: () => onHoverEmail(email.id),
      onMouseLeave: () => onHoverEmail(null),
      className: (0, import_utils.cn)(
        "group relative border border-border/50 p-3 sm:p-4 cursor-pointer transition-all duration-200 rounded-lg sm:rounded-xl mb-2 bg-card/80 shadow-sm touch-manipulation",
        hoveredId === email.id ? "bg-card border-primary/30 shadow-md" : !email.read ? "bg-card border-red-500/30" : "bg-card/60"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-start gap-2.5 sm:gap-3.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "w-2 sm:w-2.5 mt-2 flex justify-center shrink-0", children: !email.read && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(UnreadDot, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm", children: getInitials(email.from) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex justify-between items-center mb-0.5 sm:mb-1 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              "span",
              {
                className: (0, import_utils.cn)(
                  "text-xs sm:text-sm truncate",
                  email.read ? "font-medium text-foreground/90" : "font-bold text-foreground"
                ),
                children: email.from?.split("<")[0]?.trim() || "Mittente sconosciuto"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                "button",
                {
                  onClick: (e) => onToggleStar(email.id, e),
                  className: (0, import_utils.cn)(
                    "p-1.5 sm:p-1 rounded-full transition-colors sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 touch-manipulation min-h-[2rem] min-w-[2rem] sm:min-h-0 sm:min-w-0 flex items-center justify-center",
                    email.starred ? "text-yellow-400 opacity-100" : "text-muted-foreground hover:bg-muted"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                    import_lucide_react47.Star,
                    {
                      className: "w-3.5 h-3.5 sm:w-3.5 sm:h-3.5",
                      fill: email.starred ? "currentColor" : "none"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-[0.625rem] sm:text-xs text-muted-foreground whitespace-nowrap", children: formatDate2(email.date) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "text-xs sm:text-sm mb-1 sm:mb-1.5 truncate",
                email.read ? "font-normal text-foreground/80" : "font-semibold text-foreground"
              ),
              children: email.subject || "(Nessun oggetto)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-foreground/50 truncate leading-relaxed", children: getPreview(email.body) }),
          email.attachments && email.attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex items-center gap-1.5 mt-1.5 sm:mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "bg-muted/50 px-1.5 sm:px-2 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] text-muted-foreground flex items-center gap-1 border border-border/50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_react47.Paperclip, { className: "w-2.5 h-2.5 sm:w-2.5 sm:h-2.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("span", { children: [
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
var import_react77 = require("react");
var import_lucide_react48 = require("lucide-react");
var import_jsx_runtime52 = require("react/jsx-runtime");
var EmailDetail = (0, import_react77.memo)(function EmailDetail2({
  email,
  lock,
  onBack,
  onCompose,
  onArchive,
  onDelete,
  onToggleStar
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex flex-col flex-1 bg-background/30 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 border-b border-border bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        "button",
        {
          onClick: onBack,
          className: "p-2 sm:p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
          title: "Torna alla lista",
          children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.ArrowLeft, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "flex-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: () => onCompose("reply"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
            title: "Rispondi",
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Reply, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: () => onCompose("replyAll"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] hidden sm:flex items-center justify-center",
            title: "Rispondi a tutti",
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.ReplyAll, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: () => onCompose("forward"),
            className: "p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
            title: "Inoltra",
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Forward, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "w-px h-4 sm:h-5 bg-border mx-0.5 sm:mx-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-center gap-0.5 sm:gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: (e) => onArchive(email.id, e),
            disabled: lock,
            className: (0, import_utils.cn)(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
            ),
            title: "Archivia",
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Archive, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: (e) => onDelete(email.id, e),
            disabled: lock,
            className: (0, import_utils.cn)(
              "p-2 rounded-lg transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center",
              lock ? "text-muted-foreground/30 cursor-not-allowed" : "text-muted-foreground hover:bg-red-500/10 hover:text-red-500 cursor-pointer"
            ),
            title: "Elimina",
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Trash2, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 touch-pan-y", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-foreground leading-tight", children: email.subject || "(Nessun oggetto)" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border/60", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-red-500 bg-red-500/10 border border-red-500/20 shadow-sm shrink-0", children: getInitials(email.from) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "font-semibold text-sm sm:text-base text-foreground truncate", children: email.from?.split("<")[0]?.trim() || "Mittente sconosciuto" }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "text-xs sm:text-sm text-muted-foreground truncate", children: extractEmailAddress(email.from) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground flex flex-wrap gap-x-2 gap-y-1 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: email.date }),
            email.to && /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "w-1 h-1 rounded-full bg-border" }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("span", { className: "truncate", children: [
                "A: ",
                email.to
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          "button",
          {
            onClick: (e) => onToggleStar(email.id, e),
            className: (0, import_utils.cn)(
              "p-2 rounded-full hover:bg-muted transition-colors touch-manipulation min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center shrink-0",
              email.starred ? "text-yellow-400" : "text-muted-foreground"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Star, { className: "w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]", fill: email.starred ? "currentColor" : "none" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "text-sm sm:text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap font-sans", children: email.body || "(Nessun contenuto)" }),
      email.attachments && email.attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "text-[0.625rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3", children: [
          email.attachments.length,
          " Allegat",
          email.attachments.length === 1 ? "o" : "i"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "flex flex-wrap gap-2", children: email.attachments.map((att, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
          "div",
          {
            className: "group flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted/30 border border-border hover:border-primary/30 rounded-lg cursor-pointer transition-all hover:bg-muted/60 touch-manipulation",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "w-7 h-7 sm:w-8 sm:h-8 rounded bg-background flex items-center justify-center text-muted-foreground shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_lucide_react48.Paperclip, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "text-[0.625rem] sm:text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate", children: att.name }),
                att.size && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "text-[0.5rem] sm:text-[0.625rem] text-muted-foreground", children: att.size })
              ] })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "p-3 sm:p-4 border-t border-border bg-muted/10", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
      "button",
      {
        onClick: () => onCompose("reply"),
        className: "w-full flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-border bg-background hover:bg-muted/50 transition-all text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 group touch-manipulation min-h-[2.75rem]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
            import_lucide_react48.Reply,
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
var import_jsx_runtime53 = require("react/jsx-runtime");
var Email = (0, import_react78.memo)(function Email2({
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
  const isInitialMount = (0, import_react78.useRef)(true);
  const [localEmails, setLocalEmails] = (0, import_react78.useState)([]);
  const [selectedEmailId, setSelectedEmailId] = (0, import_react78.useState)(null);
  const [composeMode, setComposeMode] = (0, import_react78.useState)("none");
  const [hoveredId, setHoveredId] = (0, import_react78.useState)(null);
  const emailsKey = JSON.stringify(initialEmails);
  (0, import_react78.useEffect)(() => {
    const newEmails = initialEmails || [];
    setLocalEmails(newEmails);
    if (newEmails.length === 1 && isInitialMount.current) {
      setSelectedEmailId(newEmails[0]?.id ?? null);
    }
    isInitialMount.current = false;
  }, [emailsKey]);
  const emails = localEmails;
  const selectedEmail = emails.find((e) => e.id === selectedEmailId);
  const handleDelete = (0, import_react78.useCallback)(
    (id, e) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId]
  );
  const handleArchive = (0, import_react78.useCallback)(
    (id, e) => {
      e?.stopPropagation();
      if (lock) return;
      setLocalEmails((prev) => prev.filter((email) => email.id !== id));
      if (selectedEmailId === id) setSelectedEmailId(null);
    },
    [lock, selectedEmailId]
  );
  const handleMarkAsRead = (0, import_react78.useCallback)((id) => {
    setLocalEmails(
      (prev) => prev.map((email) => email.id === id ? { ...email, read: true } : email)
    );
  }, []);
  const handleToggleStar = (0, import_react78.useCallback)((id, e) => {
    e?.stopPropagation();
    setLocalEmails(
      (prev) => prev.map(
        (email) => email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  }, []);
  const handleSelectEmail = (0, import_react78.useCallback)(
    (id) => {
      setSelectedEmailId(id);
      handleMarkAsRead(id);
    },
    [handleMarkAsRead]
  );
  const handleSendEmail = (0, import_react78.useCallback)(
    async (draft) => {
      console.log("[Email] Sending email:", draft);
      if (onSendEmail) {
        await onSendEmail(draft);
      } else {
        console.log("[Email] Email sent (simulated):", draft);
      }
    },
    [onSendEmail]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "glass-panel w-full min-h-[300px] sm:min-h-[400px] h-full flex flex-col rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex justify-between items-center px-3 sm:px-4 lg:px-5 py-3 sm:py-4 border-b border-border/40 bg-black/20 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20 text-white shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react49.Mail, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h3", { className: "m-0 text-sm sm:text-base font-bold leading-tight truncate", children: title || "Gmail" }),
          description && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-muted-foreground mt-0.5 truncate", children: description })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "hidden sm:block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/30 text-[0.625rem] sm:text-xs font-medium text-muted-foreground border border-white/5", children: [
          emails.filter((e) => !e.read).length,
          " non lett",
          emails.filter((e) => !e.read).length === 1 ? "a" : "e"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
          "button",
          {
            onClick: () => setComposeMode("new"),
            className: "flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-lg shadow-blue-500/20 touch-manipulation min-h-[2.5rem]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react49.PenSquare, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "hidden sm:inline", children: "Scrivi" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex flex-1 overflow-hidden relative", children: selectedEmail ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
    ) : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
    composeMode !== "none" && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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

// src/communication/Email/schema.ts
var import_zod17 = require("zod");
var EmailPropsSchema = import_zod17.z.object({
  title: import_zod17.z.string().nullable().describe("Inbox title"),
  description: import_zod17.z.string().nullable().describe("Inbox description"),
  emails: import_zod17.z.array(import_schemas.emailItemSchema).describe("List of emails"),
  lock: import_zod17.z.boolean().nullable().describe("Lock delete/archive actions")
});
var EmailDefinition = {
  name: "Email",
  props: EmailPropsSchema,
  description: "Email inbox viewer with list and detail views.",
  hasChildren: true
};

// src/document/DocumentExplorer.tsx
var import_react79 = require("react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var TreeNodeItem3 = (0, import_react79.memo)(function TreeNodeItem4({
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
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { style: { marginLeft: `${depth * 0.75}rem` }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
      "div",
      {
        onClick: () => onSelect(node),
        className: `flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 cursor-pointer rounded-md sm:rounded-lg touch-manipulation ${isSelected ? "bg-sky-500/10 border-l-2 sm:border-l-3 border-sky-500" : "border-l-2 sm:border-l-3 border-transparent hover:bg-white/5"}`,
        children: [
          hasChildren && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
          !hasChildren && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "w-3 sm:w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "font-medium text-xs sm:text-sm text-white truncate", children: node.title }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500", children: [
              "p",
              node.pageStart,
              "-",
              node.pageEnd
            ] })
          ] })
        ]
      }
    ),
    hasChildren && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { children: node.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var DocumentExplorer = (0, import_react79.memo)(function DocumentExplorer2({
  tree,
  onNodeSelect,
  selectedNodeId,
  expandedByDefault = true
}) {
  const [expanded, setExpanded] = (0, import_react79.useState)(() => {
    if (!expandedByDefault) return /* @__PURE__ */ new Set();
    const ids = /* @__PURE__ */ new Set();
    const collect = (node) => {
      ids.add(node.id);
      node.children?.forEach(collect);
    };
    collect(tree);
    return ids;
  });
  const handleToggle = (0, import_react79.useCallback)((id) => {
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
  const handleSelect = (0, import_react79.useCallback)(
    (node) => {
      onNodeSelect?.(node);
    },
    [onNodeSelect]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Document Structure" }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "p-1.5 sm:p-2 max-h-[350px] sm:max-h-[500px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var import_react80 = require("react");
var import_jsx_runtime55 = require("react/jsx-runtime");
var KnowledgeGraph = (0, import_react80.memo)(function KnowledgeGraph2({
  entities,
  relations,
  width = 600,
  height = 400,
  onEntityClick
}) {
  const { nodes, edges } = (0, import_react80.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Knowledge Graph" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "space-y-2", children: nodes.slice(0, 15).map((node) => {
      const nodeEdges = edges.filter((e) => e.source === node.id || e.target === node.id);
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
        "div",
        {
          className: "flex items-center gap-2 p-2 rounded-lg bg-zinc-800/30 cursor-pointer touch-manipulation",
          onClick: () => {
            const entity = entities.find((e) => e.id === node.id);
            if (entity) onEntityClick?.(entity);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
              "div",
              {
                className: "w-3 h-3 rounded-full shrink-0",
                style: { backgroundColor: typeColors[node.type] || "#999" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "text-xs text-white truncate", children: node.label }),
              /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "text-[0.5rem] text-zinc-500", children: [
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
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "hidden sm:block overflow-x-auto touch-pan-x", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("svg", { width, height, className: "block min-w-full", children: [
      edges.map((edge, i) => {
        const sourceNode = nodes.find((n) => n.id === edge.source);
        const targetNode = nodes.find((n) => n.id === edge.target);
        if (!sourceNode || !targetNode) return null;
        return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
      nodes.map((node) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
        "g",
        {
          transform: `translate(${node.x}, ${node.y})`,
          className: "cursor-pointer",
          onClick: () => {
            const entity = entities.find((e) => e.id === node.id);
            if (entity) onEntityClick?.(entity);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
              "circle",
              {
                r: 20,
                fill: typeColors[node.type] || "#999",
                stroke: "#18181b",
                strokeWidth: 2
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("text", { y: 30, textAnchor: "middle", fontSize: 10, fill: "#a1a1aa", children: node.label })
          ]
        },
        node.id
      ))
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "px-2.5 sm:px-4 py-2 sm:py-2.5 border-t border-white/10 flex gap-2 sm:gap-4 flex-wrap text-[0.5rem] sm:text-xs", children: Object.entries(typeColors).map(([type, color]) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex items-center gap-1 sm:gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        "div",
        {
          className: "w-2 h-2 sm:w-3 sm:h-3 rounded-full",
          style: { backgroundColor: color }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "text-zinc-400", children: type })
    ] }, type)) })
  ] });
});

// src/document/DocumentTimeline.tsx
var import_react81 = require("react");
var import_jsx_runtime56 = require("react/jsx-runtime");
function parseDate(value) {
  if (!value) return null;
  const yearMatch = value.match(/\b(1[0-9]{3}|2[0-9]{3})\b/);
  if (yearMatch?.[1]) return parseInt(yearMatch[1], 10);
  return null;
}
var DocumentTimeline = (0, import_react81.memo)(function DocumentTimeline2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm", children: "No date entities found for timeline" });
  }
  const firstEvent = events[0];
  const lastEvent = events[events.length - 1];
  const minYear = firstEvent?.year ?? 0;
  const maxYear = lastEvent?.year ?? 0;
  const yearRange = Math.max(1, maxYear - minYear);
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: "Document Timeline" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "block sm:hidden p-3 max-h-[300px] overflow-y-auto touch-pan-y", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "relative pl-6 border-l-2 border-sky-500/30", children: events.slice(0, 10).map((event) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
      "div",
      {
        className: "relative mb-4 last:mb-0 cursor-pointer touch-manipulation",
        onClick: () => onEntityClick?.(event.entity),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute -left-[1.625rem] top-0.5 w-3 h-3 rounded-full bg-sky-500 border-2 border-zinc-900 shadow" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-xs font-semibold text-white", children: event.year }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-[0.625rem] text-zinc-400 truncate max-w-[12rem]", children: event.entity.value.slice(0, 30) })
        ]
      },
      event.entity.id
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "hidden sm:block p-4 relative min-h-[6.25rem]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "absolute top-[3.125rem] left-5 right-5 h-1 bg-zinc-700 rounded" }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "flex justify-between pt-[3.75rem]", children: events.slice(0, 10).map((event) => {
        const position = yearRange > 0 ? (event.year - minYear) / yearRange * 100 : 50;
        return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "w-4 h-4 rounded-full bg-sky-500 mx-auto mb-2 border-2 sm:border-3 border-zinc-900 shadow-md" }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-[0.625rem] sm:text-xs font-semibold text-white", children: event.year }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 max-w-[3.5rem] sm:max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap", children: event.entity.value.slice(0, 15) })
            ]
          },
          event.entity.id
        );
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "px-3 sm:px-4 py-1.5 sm:py-2 border-t border-white/10 text-[0.625rem] sm:text-xs text-zinc-500", children: [
      events.length,
      " date/event entities found"
    ] })
  ] });
});

// src/document/DeepAnalysisPanel.tsx
var import_react82 = require("react");
var import_jsx_runtime57 = require("react/jsx-runtime");
var DeepAnalysisPanel = (0, import_react82.memo)(function DeepAnalysisPanel2({
  node,
  quotes = [],
  onQuoteClick
}) {
  const nodeQuotes = quotes.filter((q) => q.nodeId === node.id);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4 bg-zinc-800/50 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", { className: "m-0 text-base sm:text-lg font-semibold text-white", children: node.title }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1", children: [
        "Pages ",
        node.pageStart,
        "-",
        node.pageEnd
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "m-0 text-xs sm:text-sm leading-relaxed text-zinc-300", children: node.summary || "No summary available" }),
      node.detailedSummary && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("p", { className: "mt-2 sm:mt-3 m-0 text-xs sm:text-sm leading-relaxed text-zinc-400", children: node.detailedSummary })
    ] }),
    node.keyPoints.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Key Points" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("ul", { className: "m-0 pl-4 sm:pl-5 space-y-1", children: node.keyPoints.map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { className: "text-xs sm:text-sm text-zinc-300", children: point }, i)) })
    ] }),
    node.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Keywords" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-1.5 sm:gap-2 flex-wrap", children: node.keywords.map((keyword, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
        "span",
        {
          className: "px-2 py-0.5 sm:py-1 bg-sky-500/10 rounded text-[0.625rem] sm:text-xs text-sky-300 border border-sky-500/20",
          children: keyword
        },
        i
      )) })
    ] }),
    nodeQuotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4 border-b border-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h4", { className: "m-0 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Notable Quotes" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "space-y-2", children: nodeQuotes.map((quote) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
        "div",
        {
          onClick: () => onQuoteClick?.(quote),
          className: `p-2.5 sm:p-3 bg-zinc-800/30 border-l-2 sm:border-l-3 border-sky-500 rounded-r ${onQuoteClick ? "cursor-pointer hover:bg-zinc-800/50 touch-manipulation" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("p", { className: "m-0 text-xs sm:text-sm italic text-zinc-300", children: [
              '"',
              quote.text,
              '"'
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1.5", children: [
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
    node.metrics && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "p-3 sm:p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h4", { className: "m-0 mb-2 text-xs sm:text-sm font-medium text-sky-400", children: "Metrics" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "grid grid-cols-3 gap-2 sm:gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-base sm:text-xl font-semibold text-white", children: node.metrics.wordCount }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Words" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-base sm:text-xl font-semibold text-white", children: [
            node.metrics.readingTimeMinutes,
            "m"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Reading Time" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "text-center p-2 sm:p-3 bg-zinc-800/30 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-base sm:text-xl font-semibold capitalize text-white", children: node.metrics.complexity }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-500 uppercase", children: "Complexity" })
        ] })
      ] })
    ] })
  ] });
});

// src/document/CitationViewer.tsx
var import_react83 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime");
var typeIcons = {
  book: "B",
  article: "A",
  web: "W",
  report: "R",
  thesis: "T",
  other: "O"
};
var CitationViewer = (0, import_react83.memo)(function CitationViewer2({
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
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center text-zinc-400 bg-zinc-900/60 backdrop-blur-sm", children: "No citations found in document" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold flex justify-between items-center text-sm sm:text-base", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-white", children: "Citations" }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { className: "text-zinc-400 font-normal text-xs sm:text-sm", children: [
        citations.length,
        " total"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "max-h-[300px] sm:max-h-[400px] overflow-y-auto touch-pan-y", children: Object.entries(byType).map(([type, typeCitations]) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 font-medium text-[0.625rem] sm:text-xs uppercase text-zinc-500 border-b border-white/5", children: [
        type,
        " (",
        typeCitations.length,
        ")"
      ] }),
      typeCitations.map((citation) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
        "div",
        {
          onClick: () => onCitationClick?.(citation),
          className: `p-3 sm:p-4 border-b border-white/5 flex gap-2.5 sm:gap-3 ${onCitationClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "w-8 h-8 sm:w-9 sm:h-9 rounded bg-sky-500/10 flex items-center justify-center font-semibold text-sky-400 shrink-0 text-xs sm:text-sm", children: typeIcons[citation.type] || "?" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex-1 min-w-0", children: [
              citation.title && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "font-medium text-xs sm:text-sm text-white", children: citation.title }),
              citation.authors && citation.authors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-400 mt-0.5", children: citation.authors.join(", ") }),
              citation.year && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { className: "text-[0.625rem] sm:text-xs text-zinc-500 ml-1", children: [
                "(",
                citation.year,
                ")"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 mt-1 overflow-hidden text-ellipsis whitespace-nowrap", children: citation.text }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "text-[0.5rem] sm:text-[0.625rem] text-zinc-600 mt-1", children: [
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
var import_react84 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
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
var EntityExplorer = (0, import_react84.memo)(function EntityExplorer2({
  entities,
  onEntityClick,
  filterTypes
}) {
  const [selectedType, setSelectedType] = (0, import_react84.useState)(null);
  const [searchQuery, setSearchQuery] = (0, import_react84.useState)("");
  const types = (0, import_react84.useMemo)(() => {
    const typeSet = new Set(entities.map((e) => e.type));
    return Array.from(typeSet).sort();
  }, [entities]);
  const filteredEntities = (0, import_react84.useMemo)(() => {
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
  const groupedEntities = (0, import_react84.useMemo)(() => {
    const groups = {};
    for (const entity of filteredEntities) {
      const type = entity.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(entity);
    }
    return groups;
  }, [filteredEntities]);
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "font-sans border border-white/10 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-800/50 border-b border-white/10 font-semibold text-sm sm:text-base text-white", children: [
      "Entities (",
      filteredEntities.length,
      ")"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "p-2.5 sm:p-4 border-b border-white/10 flex flex-col sm:flex-row gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        "input",
        {
          type: "text",
          placeholder: "Search entities...",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "flex-1 min-w-0 px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
        "select",
        {
          value: selectedType || "",
          onChange: (e) => setSelectedType(e.target.value || null),
          className: "px-3 py-2 sm:py-1.5 border border-white/10 rounded-lg bg-zinc-800/50 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500/50 min-h-[2.75rem] sm:min-h-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: "", children: "All types" }),
            types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("option", { value: type, children: type }, type))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 flex gap-1.5 sm:gap-2 flex-wrap", children: types.map((type) => {
      const count = entities.filter((e) => e.type === type).length;
      const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
        "button",
        {
          onClick: () => setSelectedType((prev) => prev === type ? null : type),
          className: `px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border-none text-[0.625rem] sm:text-xs cursor-pointer flex items-center gap-1 sm:gap-1.5 transition-colors touch-manipulation min-h-[1.75rem] ${selectedType === type ? `${colors.bg} text-white` : "bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${colors.dot}` }),
            type,
            " (",
            count,
            ")"
          ]
        },
        type
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "max-h-[280px] sm:max-h-[400px] overflow-y-auto touch-pan-y", children: Object.entries(groupedEntities).map(([type, typeEntities]) => {
      const colors = typeColorClasses[type] || { bg: "bg-zinc-500", text: "text-zinc-400", dot: "bg-zinc-500" };
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: `px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-800/30 text-[0.625rem] sm:text-xs font-medium uppercase sticky top-0 ${colors.text}`, children: type }),
        typeEntities.map((entity) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          "div",
          {
            onClick: () => onEntityClick?.(entity),
            className: `px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5 flex justify-between items-center gap-2 ${onEntityClick ? "cursor-pointer hover:bg-white/5 touch-manipulation" : ""}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "font-medium text-xs sm:text-sm text-white truncate", children: entity.value }),
                entity.normalized && entity.normalized !== entity.value && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-500 truncate", children: entity.normalized })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "text-[0.625rem] sm:text-xs text-zinc-600 shrink-0", children: [
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
var import_react85 = require("react");
function useKnowledgeBase(options = {}) {
  const [knowledgeBase, setKnowledgeBase] = (0, import_react85.useState)(
    options.initialKnowledgeBase ?? null
  );
  const entities = (0, import_react85.useMemo)(
    () => knowledgeBase?.entities ?? [],
    [knowledgeBase]
  );
  const relations = (0, import_react85.useMemo)(
    () => knowledgeBase?.relations ?? [],
    [knowledgeBase]
  );
  const quotes = (0, import_react85.useMemo)(() => knowledgeBase?.quotes ?? [], [knowledgeBase]);
  const getEntityById = (0, import_react85.useCallback)(
    (id) => entities.find((e) => e.id === id),
    [entities]
  );
  const getRelationsByNode = (0, import_react85.useCallback)(
    (nodeId) => relations.filter(
      (r) => r.sourceNodeId === nodeId || r.targetNodeId === nodeId
    ),
    [relations]
  );
  const getQuotesByNode = (0, import_react85.useCallback)(
    (nodeId) => quotes.filter((q) => q.nodeId === nodeId),
    [quotes]
  );
  const searchEntities = (0, import_react85.useCallback)(
    (query) => {
      const q = query.toLowerCase();
      return entities.filter(
        (e) => e.value.toLowerCase().includes(q) || e.normalized?.toLowerCase().includes(q)
      );
    },
    [entities]
  );
  const filterEntitiesByType = (0, import_react85.useCallback)(
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
var import_react86 = require("react");
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
  const [tree, setTree] = (0, import_react86.useState)(
    options.initialTree ?? null
  );
  const [selectedNode, setSelectedNode] = (0, import_react86.useState)(null);
  const [expandedNodes, setExpandedNodes] = (0, import_react86.useState)(/* @__PURE__ */ new Set());
  const selectNode = (0, import_react86.useCallback)(
    (node) => {
      setSelectedNode(node);
      options.onNodeSelect?.(node);
    },
    [options]
  );
  const toggleNode = (0, import_react86.useCallback)((nodeId) => {
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
  const expandAll = (0, import_react86.useCallback)(() => {
    if (!tree) return;
    const ids = /* @__PURE__ */ new Set();
    collectAllNodeIds(tree, ids);
    setExpandedNodes(ids);
  }, [tree]);
  const collapseAll = (0, import_react86.useCallback)(() => {
    setExpandedNodes(/* @__PURE__ */ new Set());
  }, []);
  const searchNodes = (0, import_react86.useCallback)(
    (query) => {
      if (!tree || !query) return [];
      return searchTree(tree, query);
    },
    [tree]
  );
  const getNodePath = (0, import_react86.useCallback)(
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
var import_react87 = require("react");
function useQuestionAnswer(options = {}) {
  const [question, setQuestion] = (0, import_react87.useState)("");
  const [answer, setAnswer] = (0, import_react87.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react87.useState)(false);
  const [error, setError] = (0, import_react87.useState)(null);
  const [history, setHistory] = (0, import_react87.useState)([]);
  const askQuestion = (0, import_react87.useCallback)(
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
  const clearAnswer = (0, import_react87.useCallback)(() => {
    setAnswer(null);
    setError(null);
    setQuestion("");
  }, []);
  const clearHistory = (0, import_react87.useCallback)(() => {
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
  Card: import_ui.Card,
  Grid: import_ui.Grid,
  Stack: import_ui.Stack,
  Divider: import_ui.Divider,
  Heading: import_ui.Heading,
  Text: import_ui.Text,
  CodeBlock: import_ui.CodeBlock,
  Document: import_ui.Document,
  Badge: import_ui.Badge,
  Alert: import_ui.Alert,
  Empty: import_ui.Empty,
  BrowserAction: import_ui.BrowserAction,
  Button: import_ui.Button,
  TextField: import_ui.TextField,
  Select: import_ui.Select,
  DatePicker: import_ui.DatePicker,
  Metric: import_ui.Metric,
  Table: import_ui.Table,
  List: import_ui.List,
  Timeline: import_ui.Timeline,
  SearchResults: import_ui.SearchResults,
  DriveFile: import_ui.DriveFile,
  Weather: import_ui.Weather,
  Audio: import_ui.Audio,
  Video: import_ui.Video,
  Image: import_ui.Image,
  Gallery: import_ui.Gallery,
  Message,
  Email,
  CalendarAgenda,
  DriveFileList: import_ui.DriveFileList,
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
  SourceCitation
};
var componentDefinitions = {
  Card: import_ui.CardDefinition,
  Grid: import_ui.GridDefinition,
  Stack: import_ui.StackDefinition,
  Divider: import_ui.DividerDefinition,
  Heading: import_ui.HeadingDefinition,
  Text: import_ui.TextDefinition,
  CodeBlock: import_ui.CodeBlockDefinition,
  Document: import_ui.DocumentDefinition,
  Badge: import_ui.BadgeDefinition,
  Alert: import_ui.AlertDefinition,
  Empty: import_ui.EmptyDefinition,
  BrowserAction: import_ui.BrowserActionDefinition,
  Button: import_ui.ButtonDefinition,
  TextField: import_ui.TextFieldDefinition,
  Select: import_ui.SelectDefinition,
  DatePicker: import_ui.DatePickerDefinition,
  Metric: import_ui.MetricDefinition,
  Table: import_ui.TableDefinition,
  List: import_ui.ListDefinition,
  Timeline: import_ui.TimelineDefinition,
  SearchResults: import_ui.SearchResultsDefinition,
  DriveFile: import_ui.DriveFileDefinition,
  Weather: import_ui.WeatherDefinition,
  Audio: import_ui.AudioDefinition,
  Video: import_ui.VideoDefinition,
  Image: import_ui.ImageDefinition,
  Gallery: import_ui.GalleryDefinition,
  Message: MessageDefinition,
  Email: EmailDefinition,
  CalendarAgenda: CalendarAgendaDefinition,
  DriveFileList: import_ui.DriveFileListDefinition,
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
  DocumentIndex: DocumentIndexDefinition,
  SourceCitation: SourceCitationDefinition
};
var componentNames = Object.keys(componentRegistry);
function hasComponent(name) {
  return name in componentRegistry;
}
var VERSION = "0.1.0";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActivityFeed,
  ArticleCard,
  BookingForms,
  BookingFormsDefinition,
  BookingFormsPropsSchema,
  Calendar,
  CalendarAgenda,
  CalendarAgendaDefinition,
  CalendarAgendaSchema,
  CalendarDefinition,
  CalendarPropsSchema,
  CitationViewer,
  DeepAnalysisPanel,
  Diary,
  DiaryDefinition,
  DiaryPropsSchema,
  DocumentExplorer,
  DocumentIndex,
  DocumentIndexDefinition,
  DocumentIndexPropsSchema,
  DocumentTimeline,
  Email,
  EmailDefinition,
  EmailPropsSchema,
  EntityExplorer,
  Flight,
  FlightDefinition,
  FlightPropsSchema,
  Hotel,
  HotelDefinition,
  HotelPropsSchema,
  Kanban,
  KanbanDefinition,
  KanbanPropsSchema,
  KnowledgeGraph,
  Message,
  MessageDefinition,
  MessagePropsSchema,
  Nutrition,
  NutritionDefinition,
  NutritionPropsSchema,
  Pricing,
  ProfileCard,
  ResearchReport,
  RoutineScheduler,
  RoutineSchedulerDefinition,
  RoutineSchedulerPropsSchema,
  SourceCitation,
  SourceCitationDefinition,
  SourceCitationPropsSchema,
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
  useQuestionAnswer,
  ...require("@onegenui/ui")
});
//# sourceMappingURL=index.js.map