"use client";
import MainCarouselCards from "@/components/MainCarouselCards";
import { GetAllEvents } from "@/lib/api/main/queries";
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
  const { data: events, isLoading, isError, error } = GetAllEvents();
  const [activeFilter, setActiveFilter] = useState("Categories");

  const topCountries = useMemo(() => {
    if (!events) return [];

    const countryCountMap: Record<string, number> = {};
    events.forEach((event) => {
      countryCountMap[event.country] =
        (countryCountMap[event.country] || 0) + 1;
    });

    const sortedCountries = Object.entries(countryCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([country]) => country);

    return sortedCountries;
  }, [events]);

  if (isLoading || !events) return <div>loading...</div>;
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
            const categoryEvents = events.filter(
              (event) => event.category === category
            );
            if (categoryEvents.length === 0) return null;
            return (
              <MainCarouselCards
                key={category}
                title={category}
                link={`/category/${encodeURIComponent(category)}`}
                events={categoryEvents}
              />
            );
          })}

        {activeFilter === "Country" &&
          topCountries.map((country) => {
            const countryEvents = events.filter(
              (event) => event.country === country
            );
            if (countryEvents.length === 0) return null;
            return (
              <MainCarouselCards
                key={country}
                title={country}
                link={`/country/${encodeURIComponent(country)}`}
                events={countryEvents}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MainBottom;
