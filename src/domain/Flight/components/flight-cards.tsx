"use client";

import { memo } from "react";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { SelectableItem } from "@onegenui/react";
import { sanitizeUrl } from "@onegenui/utils";
import { formatCurrency } from "../../../utils/format-utils";
import { motion } from "framer-motion";
import type { FlightData, FlightTrip } from "./types";
import { FlightSegment } from "./flight-segment";

export const RoundTripCard = memo(function RoundTripCard({
  trip,
  index,
  elementKey,
  lock,
}: {
  trip: FlightTrip;
  index: number;
  elementKey: string;
  lock: boolean;
}) {
  const price = trip.totalPrice || trip.outbound.price;
  const bookingUrl = trip.bookingUrl || trip.outbound.bookingUrl;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SelectableItem
        elementKey={elementKey}
        itemId={trip.outbound.id}
        className="card-glass group"
      >
        <div className="gradient-bar" />

        <div className="p-5 sm:p-6">
          {trip.return && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-sky-500/10 to-purple-500/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                Round Trip
              </div>
            </motion.div>
          )}

          <FlightSegment
            flight={trip.outbound}
            label={trip.return ? "Outbound" : undefined}
            index={0}
          />

          {trip.return && (
            <>
              <div className="divider-perforated my-6" />
              <FlightSegment
                flight={trip.return}
                label="Return"
                isReturn
                index={1}
              />
            </>
          )}

          {(price || bookingUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between mt-6 pt-5 border-t border-white/5"
            >
              {price && (
                <div>
                  <div className="text-label mb-0.5">
                    {trip.return ? "Total Price" : "Price"}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-none">
                    {formatCurrency(price.amount, price.currency)}
                  </div>
                </div>
              )}

              {bookingUrl && !lock && (
                <motion.a
                  href={sanitizeUrl(bookingUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary no-underline"
                >
                  Book <ArrowRight className="w-3 h-3" strokeWidth={3} />
                </motion.a>
              )}
            </motion.div>
          )}
        </div>
      </SelectableItem>
    </motion.div>
  );
});

export const SingleFlightCard = memo(function SingleFlightCard({
  flight,
  index,
  elementKey,
  lock,
}: {
  flight: FlightData;
  index: number;
  elementKey: string;
  lock: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SelectableItem
        elementKey={elementKey}
        itemId={flight.id}
        className="card-glass group"
      >
        <div className="gradient-bar" />

        <div className="p-5 sm:p-6">
          <FlightSegment flight={flight} index={0} />

          {(flight.price || flight.bookingUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between mt-6 pt-5 border-t border-white/5"
            >
              {flight.price && (
                <div>
                  <div className="text-label mb-0.5">Price</div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-none">
                    {formatCurrency(flight.price.amount, flight.price.currency)}
                  </div>
                </div>
              )}

              {flight.bookingUrl && !lock && (
                <motion.a
                  href={sanitizeUrl(flight.bookingUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary no-underline"
                >
                  Book <ArrowRight className="w-3 h-3" strokeWidth={3} />
                </motion.a>
              )}
            </motion.div>
          )}
        </div>
      </SelectableItem>
    </motion.div>
  );
});
