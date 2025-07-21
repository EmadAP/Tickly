"use client";
import MainCarouselCards from "@/components/MainCarouselCards";
import { GetAllTickets } from "@/lib/api/main/queries";
import { ChevronDown } from "lucide-react";
import React, { useMemo, useState } from "react";

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

  const topCountries = useMemo(() => {
    if (!tickets) return [];

    const countryCountMap: Record<string, number> = {};
    tickets.forEach((ticket) => {
      countryCountMap[ticket.country] =
        (countryCountMap[ticket.country] || 0) + 1;
    });

    const sortedCountries = Object.entries(countryCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([country]) => country);

    return sortedCountries;
  }, [tickets]);

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
        {activeFilter === "Categories" &&
          CATEGORIES.map((category) => {
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

        {activeFilter === "Country" &&
          topCountries.map((country) => {
            const countryTickets = tickets.filter(
              (ticket) => ticket.country === country
            );
            if (countryTickets.length === 0) return null;
            return (
              <MainCarouselCards
                key={country}
                title={country}
                link={`/country/${encodeURIComponent(country)}`}
                tickets={countryTickets}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MainBottom;
