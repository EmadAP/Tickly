"use client";

import MainCarouselCards from "@/components/MainCarouselCards";
import MainTicketCard from "@/components/MainTicketCard";
import { GetAllTickets } from "@/lib/api/main/queries";
import { ArrowBigRightDash, CalendarDays } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const CATEGORIES = [
  "Concert",
  "Sports",
  "Theater",
  "Comedy",
  "Workshop",
  "Seminar",
];

function MainLeft() {
  const { data: tickets, isLoading, isError, error } = GetAllTickets();
  const [activeFilter, setActiveFilter] = useState("Explore all");

  const is2xl = useMediaQuery({ minWidth: 1536 });
  const visibleCount = is2xl ? 9 : 8;

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const regularTickets = tickets.filter((ticket) => !ticket.onSell);

  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);

  const weekEnd = new Date(now);
  weekEnd.setDate(now.getDate() + (7 - now.getDay()));
  const weekEndStr = weekEnd.toISOString().slice(0, 10);

  const filteredTickets = regularTickets
    .filter((ticket) => {
      const ticketDate = ticket.eventDate.slice(0, 10);
      if (activeFilter === "Today") return ticketDate === today;
      if (activeFilter === "Tomorrow") return ticketDate === tomorrowStr;
      if (activeFilter === "This week")
        return ticketDate >= today && ticketDate <= weekEndStr;
      return true;
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
      {/* Tickets grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <MainTicketCard key={ticket._id} ticket={ticket} />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">
            No tickets for {activeFilter.toLowerCase()}.
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
      {/* Categories carousels */}
      <div className="mt-20 space-y-10">
        {CATEGORIES.map((category) => {
          const categoryTickets = regularTickets.filter(
            (ticket) => ticket.category === category
          );
          if (categoryTickets.length === 0) return null;
          return (
            <MainCarouselCards
              key={category}
              title={category}
              link={`/category/${encodeURIComponent(category)}`}
              tickets={categoryTickets}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainLeft;
