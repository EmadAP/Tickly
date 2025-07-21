"use client";
import MainCarouselCards from "@/components/MainCarouselCards";
import { GetAllTickets } from "@/lib/api/main/queries";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const CATEGORIES = [
  "Concert",
  "Sports",
  "Theater",
  "Comedy",
  "Workshop",
  "Seminar",
];

function MainBottom() {
  const { data: tickets, isLoading, isError, error } = GetAllTickets();
  const [activeFilter, setActiveFilter] = useState("Categories");

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="py-20 border-t-2 border-orange-500 lg:border-b-0 ">
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Categories", "Country"].map((label, index) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`p-3 rounded-2xl flex flex-row justify-between items-center cursor-pointer ${
              activeFilter === label
                ? "bg-slate-700 text-orange-500"
                : "bg-slate-900 hover:bg-slate-700"
            } ${index === 0 ? "lg:col-start-2" : "lg:col-start-3"}`}
          >
            <span className="text-xl font-semibold">{label}</span>
            <ChevronDown className="text-orange-500" />
          </button>
        ))}
      </div>
      <div className="space-y-10">
        {CATEGORIES.map((category) => {
          const categoryTickets = tickets.filter(
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

export default MainBottom;
