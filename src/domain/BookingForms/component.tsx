"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import {
  Plane,
  Hotel,
  ArrowRight,
  Calendar,
  MapPin,
  User,
  Search,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import type { BookingType, BookingMode } from "./ports";
import {
  getBookingFormsValidationAdapter,
  getBookingFormsStateAdapter,
} from "./adapters";
import { useBookingFormsLogic } from "./hooks";

export const BookingForms = memo(function BookingForms({
  element,
  children,
}: ComponentRenderProps) {
  const {
    type = "flight",
    mode = "create",
    title,
  } = element.props as {
    type: BookingType;
    mode: BookingMode;
    title?: string;
  };

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
    promoText,
  } = useBookingFormsLogic(validationAdapter, stateAdapter, {
    initialType: type,
    mode,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel w-full max-w-[500px] rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden isolate"
    >
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white m-0">
            {title || "Booking"}
          </h3>

          <div className="flex bg-black/40 p-1 rounded-lg sm:rounded-xl border border-white/5">
            {(["flight", "hotel"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[0.625rem] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all relative touch-manipulation",
                  activeTab === tab
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300",
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-md sm:rounded-lg border border-white/10 shadow-sm"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                  {tab === "flight" ? <Plane className="w-3 h-3" /> : <Hotel className="w-3 h-3" />}
                  <span className="hidden sm:inline">{tab}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            {activeTab === "flight" ? (
              <>
                {/* Route Input Group (Ticket Style) */}
                <div className="bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 relative">
                  <div className="flex-1">
                    <label className="text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pl-1 mb-0.5 sm:mb-1 block">
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="JFK"
                      value={flightForm.from}
                      onChange={(e) =>
                        updateFlightField("from", e.target.value.toUpperCase())
                      }
                      className="w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight min-h-[2.75rem]"
                    />
                    <div className="text-[0.625rem] sm:text-xs text-zinc-500 font-medium">
                      {flightForm.fromCity || "Origin City"}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center opacity-50">
                    <div className="w-px h-6 sm:h-8 bg-zinc-700 mx-auto mb-0.5 sm:mb-1" />
                    <div className="p-1 sm:p-1.5 rounded-full bg-zinc-800 border border-zinc-700">
                      <Plane className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-90 text-zinc-400" />
                    </div>
                    <div className="w-px h-6 sm:h-8 bg-zinc-700 mx-auto mt-0.5 sm:mt-1" />
                  </div>

                  <div className="flex-1 text-right">
                    <label className="text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest pr-1 mb-0.5 sm:mb-1 block">
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="LHR"
                      value={flightForm.to}
                      onChange={(e) =>
                        updateFlightField("to", e.target.value.toUpperCase())
                      }
                      className="w-full bg-transparent text-xl sm:text-2xl font-black text-white placeholder-zinc-700 outline-none uppercase font-mono tracking-tight text-right min-h-[2.75rem]"
                    />
                    <div className="text-[0.625rem] sm:text-xs text-zinc-500 font-medium">
                      {flightForm.toCity || "Destination City"}
                    </div>
                  </div>
                </div>

                {/* Detail Inputs */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300">
                      <Calendar className="w-3 h-3" />
                      <span className="text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest">
                        Date
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {flightForm.date || "Select Date"}
                    </div>
                  </div>
                  <div className="bg-black/20 border border-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 hover:border-white/20 transition-colors cursor-pointer group touch-manipulation">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 text-zinc-500 group-hover:text-zinc-300">
                      <User className="w-3 h-3" />
                      <span className="text-[0.5rem] sm:text-[0.625rem] font-bold uppercase tracking-widest">
                        Passengers
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {flightForm.passengers} Adult
                      {flightForm.passengers > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Location Input */}
                <div className="bg-black/20 border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 group hover:border-white/20 transition-colors touch-manipulation">
                  <MapPin
                    className="text-zinc-600 group-hover:text-sky-500 transition-colors w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <div className="flex-1">
                    <label className="text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 block">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="Where to?"
                      value={hotelForm.destination}
                      onChange={(e) =>
                        updateHotelField("destination", e.target.value)
                      }
                      className="w-full bg-transparent text-base sm:text-lg font-bold text-white placeholder-zinc-700 outline-none min-h-[2.75rem]"
                    />
                  </div>
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-px bg-white/10 rounded-lg sm:rounded-xl overflow-hidden border border-white/5">
                  <div className="bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation">
                    <div className="text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1">
                      Check-in
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {hotelForm.checkIn || "Add Date"}
                    </div>
                  </div>
                  <div className="bg-black/30 p-2 sm:p-3 hover:bg-black/40 transition-colors cursor-pointer text-center touch-manipulation">
                    <div className="text-[0.5rem] sm:text-[0.625rem] font-bold text-zinc-500 uppercase tracking-widest mb-0.5 sm:mb-1">
                      Check-out
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {hotelForm.checkOut || "Add Date"}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[0.625rem] sm:text-xs text-zinc-500 font-medium text-center sm:text-left">{promoText}</div>
          <button className="h-9 sm:h-10 px-4 sm:px-6 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wide rounded-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-white/10 touch-manipulation w-full sm:w-auto justify-center">
            {mode === "create" ? (
              <Search className="w-3.5 h-3.5" strokeWidth={3} />
            ) : (
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
            )}
            {actionLabel}
          </button>
        </div>
      </div>
      {children}
    </motion.div>
  );
});
