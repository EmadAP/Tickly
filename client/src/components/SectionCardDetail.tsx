"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Calendar } from "@/components/ui/calendar";
import {
  parseISO,
  isBefore,
  isAfter,
  isSameDay,
  differenceInCalendarDays,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { Event, Section } from "@/lib/types/types";
import { Button } from "./ui/button";
import { useCart } from "@/lib/context/CartContext";

const LocationViewer = dynamic(() => import("@/components/LocationViewer"), {
  ssr: false,
});

interface SectionCardDetailProps {
  event: Event;
  section: Section[];
}

const SectionCardDetail: React.FC<SectionCardDetailProps> = ({
  event,
  section,
}) => {
  const { addToCart } = useCart();

  const eventDate = parseISO(event.eventDate);
  const today = new Date();

  const daysLeft = differenceInCalendarDays(eventDate, today);
  const isEventToday = isSameDay(today, eventDate);

  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<string, number>
  >({});

  const handleIncrease = (secId: string, available: number) => {
    setSelectedQuantities((prev) => {
      const current = prev[secId] || 1;
      if (current < available) {
        return { ...prev, [secId]: current + 1 };
      }
      return prev;
    });
  };

  const handleDecrease = (secId: string) => {
    setSelectedQuantities((prev) => {
      const current = prev[secId] || 1;
      if (current > 1) {
        return { ...prev, [secId]: current - 1 };
      }
      return prev;
    });
  };

  return (
    <div className="text-white w-full flex flex-col py-5">
      <div className="flex flex-col items-center justify-between w-full gap-5">
        <div className="flex flex-col gap-5 justify-between w-full">
          <div className="space-y-5">
            <p className="text-orange-500 font-bold text-2xl">{event.title}</p>
            <p>{event.description}</p>
            <p className="text-sm">
              Country:{" "}
              <span className="text-lg font-semibold">{event.country}</span>
            </p>
          </div>
          <div>
            {section.map((sec) => {
              const available = sec.quantity - sec.sold;
              const selectedQty = selectedQuantities[sec._id] || 1;

              return (
                <div key={sec._id} className="space-y-5">
                  <p className="text-sm">
                    Section:{" "}
                    <span className="text-lg font-semibold">{sec.name}</span>
                  </p>
                  <div>
                    {sec.onSell && sec.discountPercent ? (
                      // Price with discount
                      <div className="flex flex-row items-center justify-between w-full gap-3">
                        <span className="text-sm flex flex-row items-center gap-2">
                          Price:
                          <p className="text-sm line-through text-gray-400">
                            ${sec.price.toFixed(2)}
                          </p>
                          <span className="text-lg font-semibold text-green-400">
                            $
                            {(
                              sec.price -
                              (sec.price * sec.discountPercent) / 100
                            ).toFixed(2)}
                          </span>
                        </span>

                        <span className="text-green-400 text-sm font-semibold">
                          {sec.discountPercent}% OFF
                        </span>
                      </div>
                    ) : (
                      // Price without discount
                      <p className="text-sm">
                        Price:{" "}
                        <span className="text-lg font-semibold text-green-400">
                          ${sec.price.toFixed(2)}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-lg"
                        onClick={() => handleDecrease(sec._id)}
                        disabled={selectedQty <= 1}
                      >
                        –
                      </button>
                      <span className="text-lg font-semibold">
                        {selectedQty}
                      </span>{" "}
                      {/* selected quantity */}
                      <button
                        className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-lg"
                        onClick={() => handleIncrease(sec._id, available)}
                        disabled={selectedQty >= available}
                      >
                        +
                      </button>
                    </div>
                    {available < 10 && (
                      <p className="text-red-400 text-sm font-semibold">
                        Less than {available} tickets remaining!
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={() =>
                      addToCart(
                        {
                          eventId: event._id,
                          sectionId: sec._id,
                          event,
                          section: sec,
                        },
                        selectedQty
                      )
                    }
                    className="bg-orange-500 text-lg hover:bg-orange-400 cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 justify-between">
            <div className="space-y-5">
              <p className="text-sm ">
                Time:{" "}
                <span className="text-lg font-semibold text-orange-500">
                  {event.eventTime}
                </span>
              </p>
              <p className="text-sm ">
                Date:{" "}
                <span className="text-lg font-semibold text-orange-500">
                  {event.eventDate}
                </span>
              </p>
            </div>
            {/* Calendar */}
            <div className="flex flex-col">
              <Calendar
                mode="single"
                selected={eventDate}
                defaultMonth={eventDate}
                fromMonth={startOfMonth(today)}
                toMonth={endOfMonth(eventDate)}
                disabled={(date) =>
                  isBefore(date, today) || isAfter(date, eventDate)
                }
                modifiers={{
                  eventDay: eventDate,
                  today: today,
                }}
                modifiersClassNames={{
                  eventDay:
                    "bg-orange-500 rounded-lg text-white hover:bg-orange-600",
                  today: "bg-orange-400 rounded-lg text-white",
                }}
                className=" rounded-lg border border-orange-500 bg-slate-900 [&_.rdp-day]:pointer-events-none"
              />

              {/* Days left */}
              <p className="mt-2 text-sm text-gray-400">
                {isEventToday
                  ? "Event is today 🎉"
                  : daysLeft > 0
                  ? `${daysLeft} day${daysLeft === 1 ? "" : "s"} left`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between w-full">
          <p className="text-sm">
            City: <span className="text-lg font-semibold">{event.city}</span>
          </p>
          <p className="text-sm">
            Address:{" "}
            <span className="text-lg font-semibold">{event.address}</span>
          </p>
          <LocationViewer
            coordinates={event.coordinates}
            locationName={event.address}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCardDetail;
