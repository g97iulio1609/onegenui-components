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
import { cn } from "../../utils/cn";
import { formatCurrency, formatDateShort } from "../../utils/format-utils";
import { StatusBadge } from "../../utils/shared-components";
import { motion } from "framer-motion";
import type { HotelData, HotelStatus as HotelStatusType } from "./ports";
import { getHotelAdapter } from "./adapters";

const hotelAdapter = getHotelAdapter();

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
    layout = "list", // 'list' | 'card'
  } = element.props as {
    title?: string | null;
    hotels?: HotelData[] | null;
    layout?: "list" | "card";
  };

  // Calculate check-in/out dates and total price
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
    <div className="flex flex-col gap-6 w-full">
      {title && (
        <h3 className="m-0 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight flex items-center gap-2">
          <HotelIcon size={24} className="text-amber-400 hidden" />
          {title}
        </h3>
      )}

      <div
        className={cn(
          "grid gap-6",
          layout === "card"
            ? "grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
            : "grid-cols-1",
        )}
      >
        {(hotels || []).map((hotel, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={hotel.id}
            >
              <SelectableItem
                elementKey={element.key}
                itemId={hotel.id}
                className={cn(
                  "group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:border-white/20 hover:-translate-y-1 flex isolate",
                  layout === "card" ? "flex-col" : "flex-row min-h-[200px]",
                )}
              >
                {/* Hotel Image & Overlay */}
                <div
                  className={cn(
                    "relative overflow-hidden z-0",
                    layout === "card"
                      ? "h-48 w-full"
                      : "w-[240px] min-w-[240px] h-full absolute inset-y-0 left-0",
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
                      <HotelIcon size={48} className="text-white/10" />
                    </div>
                  )}

                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  {layout !== "card" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-zinc-950" />
                  )}

                  {/* Status Badge */}
                  {hotel.status && (
                    <div className="absolute top-4 left-4">
                      <HotelStatusBadge status={hotel.status} />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div
                  className={cn(
                    "relative z-10 flex flex-col p-6 flex-1",
                    layout !== "card" && "pl-[220px]",
                  )}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {hotel.name}
                      </h4>
                      {hotel.address && (
                        <div className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                          <MapPin size={12} className="text-white/40" />
                          {hotel.address}
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    {hotel.rating && (
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shrink-0">
                        <Star
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                        <span className="text-sm font-bold text-white">
                          {hotel.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 w-full my-4 group-hover:bg-white/20 transition-colors" />

                  {/* Trip Details */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    {hotel.dates && (
                      <div className="space-y-1">
                        <div className="text-white/40 uppercase tracking-wider font-bold text-[10px]">
                          Dates
                        </div>
                        <div className="text-white font-medium flex items-center gap-1.5">
                          <Calendar size={12} className="text-indigo-400" />
                          {formatDateShort(hotel.dates.checkIn)}
                          <span className="text-white/30">-</span>
                          {formatDateShort(hotel.dates.checkOut)}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <div className="text-white/40 uppercase tracking-wider font-bold text-[10px]">
                        Details
                      </div>
                      <div className="text-white font-medium flex items-center gap-2">
                        {hotel.guests && (
                          <span className="flex items-center gap-1">
                            <Users size={12} className="text-emerald-400" />{" "}
                            {hotel.guests}
                          </span>
                        )}
                        {hotel.roomType && (
                          <span
                            className="flex items-center gap-1 truncate max-w-[100px]"
                            title={hotel.roomType}
                          >
                            <Bed size={12} className="text-rose-400" />{" "}
                            {hotel.roomType}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Price & Action */}
                  <div className="mt-auto pt-6 flex w-full items-end justify-between">
                    {hotel.amenities && hotel.amenities.length > 0 && (
                      <div className="flex -space-x-2 hidden sm:flex">
                        {hotel.amenities.slice(0, 3).map((a, idx) => (
                          <div
                            key={idx}
                            className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase overflow-hidden"
                            title={a}
                          >
                            {a[0]}
                          </div>
                        ))}
                      </div>
                    )}

                    {hotel.price && (
                      <div className="ml-auto flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
                            {hotel.price.perNight ? "Per Night" : "Total"}
                          </div>
                          <div className="text-2xl font-black text-white tracking-tight leading-none">
                            {formatCurrency(
                              hotel.price.amount,
                              hotel.price.currency,
                            )}
                          </div>
                        </div>

                        {hotel.bookingUrl ? (
                          <a
                            href={hotel.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg shadow-white/10"
                          >
                            <ArrowRight size={18} strokeWidth={2.5} />
                          </a>
                        ) : (
                          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg shadow-white/10">
                            <ArrowRight size={18} strokeWidth={2.5} />
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
      </div>

      {children}
    </div>
  );
});
