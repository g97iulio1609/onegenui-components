"use client";

import { memo, useMemo } from "react";
import {
  type ComponentRenderProps,
  SelectableItem,
  useDomainAutoSave,
} from "@onegenui/react";
import {
  MapPin,
  Star,
  Calendar,
  Bed,
  Users,
  Hotel as HotelIcon,
  ArrowRight,
} from "lucide-react";
import { sanitizeUrl } from "@onegenui/utils";
import { cn } from "../../utils/cn";
import { formatCurrency, formatDateShort } from "../../utils/format-utils";
import { StatusBadge } from "../../utils/shared-components";
import { motion, AnimatePresence } from "framer-motion";
import type { HotelData, HotelStatus as HotelStatusType } from "./ports";
import { getHotelAdapter } from "./adapters";

const hotelAdapter = getHotelAdapter();

/** Animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: "1.25rem" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-1.25rem" },
};

const HotelStatusBadge = ({ status }: { status: HotelStatusType }) => (
  <StatusBadge
    label={status}
    variant={hotelAdapter.getStatusVariant(status)}
    pulse
  />
);

export const Hotel = memo(function Hotel({
  element,
  children,
}: ComponentRenderProps) {
  const {
    title,
    hotels,
    layout = "list",
  } = element.props as {
    title?: string | null;
    hotels?: HotelData[] | null;
    layout?: "list" | "card";
  };

  const { checkIn, checkOut, totalPrice, currency } = useMemo(() => {
    const hotelList = hotels || [];
    let minCheckIn: Date | null = null;
    let maxCheckOut: Date | null = null;
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
      currency: curr,
    };
  }, [hotels]);

  useDomainAutoSave("hotel", element.key, {
    title,
    hotels: hotels || [],
    status: "search",
    checkIn,
    checkOut,
    totalPrice,
    currency,
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 sm:gap-6 w-full"
    >
      {title && (
        <h3 className="m-0 text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2">
          <HotelIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 hidden" />
          {title}
        </h3>
      )}

      <div
        className={cn(
          "grid gap-4 sm:gap-6",
          // Mobile-first: single column, then responsive
          layout === "card"
            ? "grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]"
            : "grid-cols-1",
        )}
      >
        <AnimatePresence mode="popLayout">
          {(hotels || []).map((hotel, i) => {
            return (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={hotel.id}
              >
              <SelectableItem
                elementKey={element.key}
                itemId={hotel.id}
                className={cn(
                  "group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer transition-all duration-500",
                  "hover:shadow-2xl hover:shadow-black/50 hover:border-white/20 hover:-translate-y-0.5",
                  "flex isolate rounded-xl sm:rounded-3xl",
                  // Mobile: always stack vertically
                  "flex-col",
                  // Desktop list: side-by-side
                  layout === "list" && "sm:flex-row sm:min-h-[12.5rem]",
                )}
              >
                {/* Hotel Image & Overlay */}
                <div
                  className={cn(
                    "relative overflow-hidden z-0",
                    // Mobile: fixed height on top
                    "h-36 w-full",
                    // Desktop list: side image
                    layout === "list" && "sm:w-[15rem] sm:min-w-[15rem] sm:h-full sm:absolute sm:inset-y-0 sm:left-0",
                  )}
                >
                  {hotel.image ? (
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                      <HotelIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white/10" />
                    </div>
                  )}

                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  {layout === "list" && (
                    <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-zinc-950" />
                  )}

                  {/* Status Badge */}
                  {hotel.status && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <HotelStatusBadge status={hotel.status} />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div
                  className={cn(
                    "relative z-10 flex flex-col p-4 sm:p-6 flex-1",
                    layout === "list" && "sm:pl-[14rem]",
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-base sm:text-xl font-bold text-foreground group-hover:text-amber-400 transition-colors leading-tight truncate">
                        {hotel.name}
                      </h4>
                      {hotel.address && (
                        <div className="flex items-center gap-1 sm:gap-1.5 text-[0.625rem] sm:text-xs font-medium text-white/60">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/40 flex-shrink-0" />
                          <span className="truncate">{hotel.address}</span>
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    {hotel.rating && (
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shrink-0 self-start">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs sm:text-sm font-bold text-foreground">
                          {hotel.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 w-full my-3 sm:my-4 group-hover:bg-white/20 transition-colors" />

                  {/* Trip Details */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-[0.625rem] sm:text-xs">
                    {hotel.dates && (
                      <div className="space-y-0.5 sm:space-y-1">
                        <div className="text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]">
                          Dates
                        </div>
                        <div className="text-foreground font-medium flex items-center gap-1 sm:gap-1.5">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-400 flex-shrink-0" />
                          <span className="truncate">
                            {formatDateShort(hotel.dates.checkIn)}
                            <span className="text-white/30 mx-0.5">-</span>
                            {formatDateShort(hotel.dates.checkOut)}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="text-white/40 uppercase tracking-wider font-bold text-[0.5rem] sm:text-[0.625rem]">
                        Details
                      </div>
                      <div className="text-foreground font-medium flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        {hotel.guests && (
                          <span className="flex items-center gap-0.5 sm:gap-1">
                            <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                            {hotel.guests}
                          </span>
                        )}
                        {hotel.roomType && (
                          <span
                            className="flex items-center gap-0.5 sm:gap-1 truncate max-w-[5rem] sm:max-w-[6.25rem]"
                            title={hotel.roomType}
                          >
                            <Bed className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-400 flex-shrink-0" />
                            <span className="truncate">{hotel.roomType}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Price & Action */}
                  <div className="mt-auto pt-4 sm:pt-6 flex w-full items-end justify-between gap-2">
                    {hotel.amenities && hotel.amenities.length > 0 && (
                      <div className="hidden sm:flex -space-x-2">
                        {hotel.amenities.slice(0, 3).map((a, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[0.5rem] sm:text-[0.625rem] text-zinc-400 font-bold uppercase overflow-hidden"
                            title={a}
                          >
                            {a[0]}
                          </div>
                        ))}
                      </div>
                    )}

                    {hotel.price && (
                      <div className="ml-auto flex items-center gap-3 sm:gap-4">
                        <div className="text-right">
                          <div className="text-[0.5rem] sm:text-[0.625rem] text-white/40 font-bold uppercase tracking-wide">
                            {hotel.price.perNight ? "Per Night" : "Total"}
                          </div>
                          <div className="text-lg sm:text-2xl font-black text-foreground tracking-tight leading-none">
                            {formatCurrency(
                              hotel.price.amount,
                              hotel.price.currency,
                            )}
                          </div>
                        </div>

                        {hotel.bookingUrl ? (
                          <a
                            href={sanitizeUrl(hotel.bookingUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation"
                          >
                            <ArrowRight className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" strokeWidth={2.5} />
                          </a>
                        ) : (
                          <button className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-white/10 touch-manipulation">
                            <ArrowRight className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" strokeWidth={2.5} />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </SelectableItem>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>

      {children}
    </motion.div>
  );
});
