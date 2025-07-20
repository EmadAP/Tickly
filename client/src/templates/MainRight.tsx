"use client";

import SideTicketCard from "@/components/SideTicketCard";
import { GetAllTickets } from "@/lib/api/main/queries";
import { PartyPopper } from "lucide-react";
import React from "react";

function MainRight() {
  const { data: tickets, isLoading, isError, error } = GetAllTickets();

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const onSellTickets = tickets.filter((ticket) => ticket.onSell);
  return (
    <div className="flex-1/3 2xl:flex-1/4 mb-20 mt-10 lg:mt-20">
      <div className="flex flex-row mb-10 justify-center items-center gap-8">
        <PartyPopper size={40} className="text-orange-500 -rotate-y-180 " />
        <p className="text-4xl font-semibold ">On Sell</p>
        <PartyPopper size={40} className="text-orange-500 " />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {onSellTickets.map((ticket) => (
          <SideTicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default MainRight;
