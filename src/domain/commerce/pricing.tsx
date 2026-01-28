"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { cn } from "../../utils/cn";
import { Check, Star } from "lucide-react";
import { EmptyState } from "../../utils/shared-components";

type PricingPlan = {
  id?: string | null;
  name: string;
  price: string;
  cadence?: string | null;
  description?: string | null;
  features?: string[] | null;
  highlight?: boolean | null;
  badge?: string | null;
};

export type PricingProps = {
  title?: string | null;
  plans?: PricingPlan[] | null;
};

export const Pricing = memo(function Pricing({
  element,
  children,
  renderText,
}: ComponentRenderProps) {
  const render =
    renderText ?? ((content: string | null | undefined) => content);
  const { title, plans = [] } = element.props as PricingProps;

  if (!plans || plans.length === 0) {
    return (
      <EmptyState
        icon={<Star className="w-10 h-10" />}
        message="No pricing plans"
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
      {title && (
        <h3 className="m-0 text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 sm:gap-5 lg:gap-6">
        {plans.map((plan, index) => {
          const isHighlight = plan.highlight;

          return (
            <div
              key={plan.id ?? `${index}`}
              data-selectable-item
              data-element-key={element.key}
              data-item-id={plan.id ?? `${index}`}
              className={cn(
                "group relative bg-zinc-900 border transition-all duration-300 flex flex-col isolate overflow-hidden",
                // Flight/Invoice Style:
                "rounded-xl sm:rounded-2xl border-white/10",
                isHighlight
                  ? "shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/50 bg-zinc-900/80"
                  : "hover:border-white/20 hover:shadow-xl hover:-translate-y-1",
              )}
            >
              {isHighlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-indigo-500 z-10" />
              )}

              <div className="p-4 sm:p-5 lg:p-6 pb-6 sm:pb-8 border-b border-dashed border-white/10">
                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1">
                      {plan.name}
                    </h4>
                    {plan.badge && (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  {isHighlight && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 shrink-0">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" />
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">
                    {plan.price}
                  </span>
                  {plan.cadence && (
                    <span className="text-[0.625rem] sm:text-xs font-mono text-zinc-500 uppercase">
                      /{plan.cadence}
                    </span>
                  )}
                </div>

                {plan.description && (
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-snug">
                    {render(plan.description, { inline: true })}
                  </p>
                )}
              </div>

              {/* Receipt edge visual (perforations) */}
              <div className="relative h-px w-full my-0 -mt-px z-10">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-r border-white/10" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border-l border-white/10" />
              </div>

              <div className="p-4 sm:p-5 lg:p-6 flex-1 bg-black/20">
                {plan.features && plan.features.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300"
                      >
                        <div
                          className={cn(
                            "w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            isHighlight
                              ? "bg-indigo-500/20 text-indigo-400"
                              : "bg-white/10 text-zinc-400",
                          )}
                        >
                          <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" strokeWidth={4} />
                        </div>
                        <span className="leading-tight">
                          {render(feature, { inline: true })}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  className={cn(
                    "w-full py-2 sm:py-3 rounded-lg text-[0.625rem] sm:text-xs font-bold uppercase tracking-widest transition-all touch-manipulation min-h-[2.75rem]",
                    isHighlight
                      ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-white/5",
                  )}
                >
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
});
