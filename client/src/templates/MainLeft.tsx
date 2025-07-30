"use client";

import LeftEventCard from "@/components/LeftEventCard";
import { GetAllEvents, useGetAllSections } from "@/lib/api/main/queries";
import { ArrowBigRightDash, CalendarDays } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Event } from "@/lib/types/types";

function MainLeft() {
  const { data: events, isLoading, isError, error } = GetAllEvents();
  const { data: sections } = useGetAllSections();

  const [activeFilter, setActiveFilter] = useState("Explore all");

  const is2xl = useMediaQuery({ minWidth: 1536 });
  const visibleCount = is2xl ? 9 : 8;

  if (isLoading || !events || !sections) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const sectionMap = new Map<string, boolean>();
  for (const section of sections) {
    if (sectionMap.has(section.event)) {
      if (section.onSell) sectionMap.set(section.event, true);
    } else {
      sectionMap.set(section.event, section.onSell);
    }
  }

  const notOnSellEvents = events.filter((event) => {
    const hasOnSell = sectionMap.get(event._id);
    return !hasOnSell;
  });

  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);

  const weekEnd = new Date(now);
  weekEnd.setDate(now.getDate() + (7 - now.getDay()));
  const weekEndStr = weekEnd.toISOString().slice(0, 10);

  const filteredEvents = notOnSellEvents
    .filter((event: Event) => {
      const eventDate = event.eventDate.slice(0, 10);
      if (activeFilter === "Today") return eventDate === today;
      if (activeFilter === "Tomorrow") return eventDate === tomorrowStr;
      if (activeFilter === "This week")
        return eventDate >= today && eventDate <= weekEndStr;
      return true; // "Explore all"
    })
    .slice(0, visibleCount);

  return (
    <div className="flex-2/3 2xl:flex-3/4 py-20 border-b-2 border-orange-500 lg:border-b-0 ">
      {/* Date filter buttons */}
      <div className="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {["Today", "Tomorrow", "This week", "Explore all"].map((label) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`p-3 rounded-2xl flex flex-wrap items-center justify-between cursor-pointer ${
              activeFilter === label
                ? "bg-slate-700 text-orange-500"
                : "bg-slate-900 hover:bg-slate-700"
            }`}
          >
            <span className="text-xl font-semibold">{label}</span>
            <CalendarDays className="text-orange-500" />
          </button>
        ))}
      </div>

      <div className="border-b-2 border-orange-500 mb-10" />

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <LeftEventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">
            No event for {activeFilter.toLowerCase()}.
          </p>
        )}
      </div>

      {/* Explore more link */}
      <div className="flex items-center justify-center pt-5">
        <Link
          href="#"
          className="text-2xl hover:text-orange-500 flex flex-row items-center gap-2"
        >
          <span>Explore more</span>
          <ArrowBigRightDash size={30} />
        </Link>
      </div>
    </div>
  );
}

export default MainLeft;
