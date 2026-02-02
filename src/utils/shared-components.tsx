/**
 * Shared UI primitives for domain components
 * Following DRY principle - reusable sub-components
 */

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

// --- Status Badge ---

export type StatusVariant =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

const STATUS_STYLES: Record<
  StatusVariant,
  { bg: string; text: string; border: string }
> = {
  success: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  warning: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  error: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
  },
  info: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  neutral: {
    bg: "bg-zinc-500/10",
    text: "text-zinc-400",
    border: "border-zinc-500/20",
  },
};

interface StatusBadgeProps {
  label: string;
  variant?: StatusVariant;
  pulse?: boolean;
  className?: string;
}

export const StatusBadge = memo(function StatusBadge({
  label,
  variant = "neutral",
  pulse = false,
  className,
}: StatusBadgeProps) {
  const styles = STATUS_STYLES[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border",
        styles.bg,
        styles.text,
        styles.border,
        pulse && "animate-pulse",
        className,
      )}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </motion.div>
  );
});

// --- Progress Bar ---

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export const ProgressBar = memo(function ProgressBar({
  value,
  max,
  color = "bg-blue-500",
  showLabel = false,
  label,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(showLabel || label) && (
        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex justify-between">
          <span>{label}</span>
          <span className="font-mono text-white/50">{Math.round(value)}</span>
        </div>
      )}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  );
});

// --- Empty State ---

interface EmptyStateProps {
  icon?: React.ReactNode;
  message?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const EmptyState = memo(function EmptyState({
  icon,
  message,
  title,
  description,
  className,
}: EmptyStateProps) {
  const hasDetails = Boolean(title || description);

  return (
    <div
      className={cn(
        "py-20 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground",
        className,
      )}
    >
      {icon && (
        <div className={cn("mb-4", hasDetails ? "opacity-60" : "opacity-20")}>
          {icon}
        </div>
      )}
      {hasDetails ? (
        <div className="flex flex-col items-center text-center gap-2">
          {title && (
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground max-w-xs">
              {description}
            </p>
          )}
        </div>
      ) : (
        message && (
          <p className="font-mono text-xs uppercase tracking-widest opacity-50">
            {message}
          </p>
        )
      )}
    </div>
  );
});

// --- Section Header ---

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader = memo(function SectionHeader({
  title,
  icon,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h3 className="m-0 text-xl font-bold tracking-tight flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {action}
    </div>
  );
});

// --- Card Container ---

interface CardContainerProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export const CardContainer = memo(function CardContainer({
  children,
  highlighted = false,
  className,
}: CardContainerProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 isolate",
        highlighted
          ? "bg-zinc-900/80 border-white/20 shadow-2xl"
          : "bg-zinc-900/40 border-white/10 hover:bg-zinc-900/60 hover:border-white/15",
        className,
      )}
    >
      {children}
    </div>
  );
});

// --- Accent Bar ---

interface AccentBarProps {
  active?: boolean;
  gradient?: string;
  className?: string;
}

export const AccentBar = memo(function AccentBar({
  active = false,
  gradient = "from-blue-500 to-purple-500",
  className,
}: AccentBarProps) {
  return (
    <div
      className={cn(
        "w-full h-1 absolute top-0 left-0 right-0 z-10 transition-colors",
        active ? `bg-gradient-to-r ${gradient}` : "bg-white/5",
        className,
      )}
    />
  );
});

// --- Perforated Divider (ticket style) ---

export const PerforatedDivider = memo(function PerforatedDivider({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative h-px w-full", className)}>
      <div className="absolute inset-0 border-t border-dashed border-white/10" />
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-r border-white/10" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-l border-white/10" />
    </div>
  );
});

// --- Info Pill ---

interface InfoPillProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export const InfoPill = memo(function InfoPill({
  icon,
  children,
  variant = "default",
  className,
}: InfoPillProps) {
  const variantStyles = {
    default: "bg-white/5 text-white/60",
    primary: "bg-sky-500/10 text-sky-400",
    secondary: "bg-purple-500/10 text-purple-400",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {icon}
      {children}
    </div>
  );
});

// --- Error State ---

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState = memo(function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "py-12 flex flex-col items-center justify-center border border-rose-500/20 rounded-2xl bg-rose-950/20 text-center",
        className,
      )}
    >
      <div className="text-rose-500 mb-3">
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h4 className="text-sm font-semibold text-rose-400 mb-1">{title}</h4>
      <p className="text-xs text-rose-400/60 max-w-xs">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-1.5 text-xs font-medium bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 rounded-lg transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
});

// --- Skeleton Components ---

interface SkeletonProps {
  className?: string;
}

export const Skeleton = memo(function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse bg-white/5 rounded", className)} />;
});

export const SkeletonText = memo(function SkeletonText({
  lines = 1,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-3 rounded",
            i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
          )}
        />
      ))}
    </div>
  );
});

export const SkeletonCard = memo(function SkeletonCard({
  className,
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border border-white/5 bg-zinc-900/40 space-y-3",
        className,
      )}
    >
      <Skeleton className="h-4 w-1/3" />
      <SkeletonText lines={2} />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  );
});

// --- Loading State ---

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState = memo(function LoadingState({
  message = "Loading...",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        "py-16 flex flex-col items-center justify-center text-muted-foreground",
        className,
      )}
    >
      <div className="w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin mb-4" />
      <p className="font-mono text-xs uppercase tracking-widest opacity-50">
        {message}
      </p>
    </div>
  );
});

// --- Loading Indicator ---

interface LoadingIndicatorProps {
  message?: string;
  className?: string;
}

export const LoadingIndicator = memo(function LoadingIndicator({
  message,
  className,
}: LoadingIndicatorProps) {
  const label = message ?? "Loading";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn("flex items-center gap-2 text-muted-foreground", className)}
    >
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-current"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {message && (
        <span className="text-xs uppercase font-mono tracking-widest opacity-60">
          {message}
        </span>
      )}
    </div>
  );
});
