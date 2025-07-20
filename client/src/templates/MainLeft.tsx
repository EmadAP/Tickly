"use client";

import MainTicketCard from "@/components/MainTicketCard";
import { GetAllTickets } from "@/lib/api/main/queries";
import { CalendarDays } from "lucide-react";
import React from "react";

function MainLeft() {
  const { data: tickets, isLoading, isError, error } = GetAllTickets();

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const regularTickets = tickets.filter((ticket) => !ticket.onSell);

  return (
    <div className="flex-2/3 2xl:flex-3/4 py-20 border-b-2 border-orange-500 lg:border-b-0 ">
      <div className="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {["Today", "Tomorrow", "This week", "Explore all"].map((label) => (
          <button
            key={label}
            className="bg-slate-900 hover:bg-slate-700 p-3 rounded-2xl flex flex-wrap items-center justify-between cursor-pointer"
          >
            <span className="text-xl font-semibold">{label}</span>
            <CalendarDays className="text-orange-500" />
          </button>
        ))}
      </div>
      <div className="border-b-2 border-orange-500 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {regularTickets.map((ticket) => (
          <MainTicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default MainLeft;
