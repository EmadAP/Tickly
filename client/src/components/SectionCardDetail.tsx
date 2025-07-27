"use client";

import React from "react";
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

const LocationViewer = dynamic(() => import("@/components/LocationViewer"), {
  ssr: false,
});

interface SectionCardDetailProps {
  event: Event;
  section: Section[]
}

const SectionCardDetail: React.FC<SectionCardDetailProps> = ({ event, section }) => {
  const eventDate = parseISO(event.eventDate);
  const today = new Date();

  const daysLeft = differenceInCalendarDays(eventDate, today);
  const isEventToday = isSameDay(today, eventDate);


  return (
    <div className="text-white w-full flex flex-col my-20">
      <div className="flex flex-col items-center justify-between w-full gap-5">
        <div className="flex flex-col gap-5 justify-between w-full">
          <div className="space-y-5">
            <div>{section.map((sec) => (
              <div key={sec._id}>{sec.name}</div>
            ))}</div>
            <p className="text-orange-500 font-bold text-xl">{event.title}</p>
            <p>{event.description}</p>
            <p className="text-sm">
              Country:{" "}
              <span className="text-lg font-semibold">{event.country}</span>
            </p>
            <p className="text-sm">
              City: <span className="text-lg font-semibold">{event.city}</span>
            </p>
            <p className="text-sm">
              Address:{" "}
              <span className="text-lg font-semibold">{event.address}</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-between">
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
            <div className="flex flex-col items-center">
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
                className="rounded-lg border border-orange-500 bg-slate-900 [&_.rdp-day]:pointer-events-none"
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
        {/* <LocationViewer
          coordinates={event.coordinates}
          locationName={event.address}
        /> */}
      </div>
    </div>
  );
};

export default SectionCardDetail;
