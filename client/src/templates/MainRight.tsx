"use client";

import RightTicketCard from "@/components/RightTicketCard";
import { GetAllTickets } from "@/lib/api/main/queries";
import { ArrowBigRightDash, PartyPopper } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

function MainRight() {
  const { data: tickets, isLoading, isError, error } = GetAllTickets();

  const is2xl = useMediaQuery({ minWidth: 1536 });
  const isLgOrLarger = useMediaQuery({ minWidth: 1024 });

  const visibleCount = is2xl ? 7 : isLgOrLarger ? 10 : 6;

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const onSellTickets = tickets
    .filter((ticket) => ticket.onSell)
    .slice(0, visibleCount);

  return (
    <div className="flex-1/3 2xl:flex-1/4 mb-20 mt-10 lg:mt-20">
      <div className="flex flex-row mb-10 justify-center items-center gap-8">
        <PartyPopper size={40} className="text-orange-500 -rotate-y-180 " />
        <p className="text-4xl font-semibold ">On Sell</p>
        <PartyPopper size={40} className="text-orange-500 " />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {onSellTickets.map((ticket) => (
          <RightTicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-5">
        <Link
          href="#"
          className="text-2xl hover:text-orange-500 flex flex-row items-center  gap-2"
        >
          <span>Explore more</span>
          <ArrowBigRightDash size={30} />
        </Link>
      </div>
    </div>
  );
}

export default MainRight;
