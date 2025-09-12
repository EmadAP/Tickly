"use client";

import LeftEventCard from "@/components/LeftEventCard";
import ExploreSkeleton from "@/components/skeletons/ExploreSkeleton";
import { GetAllEvents, useGetAllSections } from "@/lib/api/main/queries";
import { ExploreFilters } from "@/lib/types/types";
import { ArrowDownWideNarrow } from "lucide-react";
import React from "react";

interface ExploreTempProps {
  filters: ExploreFilters;
  setFilters: React.Dispatch<React.SetStateAction<ExploreFilters>>;
}

function ExploreTemp({ filters, setFilters }: ExploreTempProps) {
  const { data: events, isLoading, isError, error } = GetAllEvents();
  const { data: sections } = useGetAllSections();

  if (isLoading || !events || !sections) {
    return (
      <div className="flex-2/3 2xl:flex-3/4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-5 rounded-xl dark:bg-slate-800 bg-zinc-200">
          {Array.from({ length: 12 }).map((_, i) => (
            <ExploreSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  if (isError) return <div>Error: {error.message}</div>;

  const filteredEvents = events.filter((event) => {
    // Category
    if (filters.category && event.category !== filters.category) return false;

    // Country
    if (
      filters.country &&
      event.country.toLowerCase() !== filters.country.toLowerCase()
    )
      return false;
    // Date filters
    const eventDate = new Date(event.eventDate);
    const today = new Date();

    if (filters.date === "Today") {
      if (eventDate.toDateString() !== today.toDateString()) return false;
    }

    if (filters.date === "This week") {
      const weekEnd = new Date(today);
      weekEnd.setDate(today.getDate() + 7);
      if (eventDate < today || eventDate > weekEnd) return false;
    }

    if (filters.date === "This month") {
      const monthEnd = new Date(today);
      monthEnd.setDate(today.getDate() + 30);
      if (eventDate < today || eventDate > monthEnd) return false;
    }

    if (filters.date === "This year") {
      if (eventDate.getFullYear() !== today.getFullYear()) return false;
    }

    const eventSections = sections.filter((sec) =>
      typeof sec.event === "string"
        ? sec.event === event._id
        : sec.event._id === event._id
    );

    const minPrice = Math.min(...eventSections.map((s) => s.price));
    const maxPrice = Math.max(...eventSections.map((s) => s.price));

    if (filters.priceRange) {
      if (minPrice > filters.priceRange[1] || maxPrice < filters.priceRange[0])
        return false;
    }

    if (filters.onSale && !eventSections.some((s) => s.onSell)) return false;

    if (
      filters.available &&
      !eventSections.some((s) => s.quantity - s.sold > 0)
    )
      return false;

    return true;
  });

  return (
    <div className="flex flex-col gap-5 dark:bg-slate-800 bg-zinc-200 px-5 rounded-2xl pb-5 mb-10  lg:my-10">
      <div className="border-b-2 border-b-orange-500 mx-5 pt-5 mb-5 flex flex-row gap-4 items-center ">
        <div className=" py-3">
          <ArrowDownWideNarrow />
        </div>
        {/* Category */}
        {filters.category && (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition">
            {filters.category}
            <button
              onClick={() => setFilters((f) => ({ ...f, category: null }))}
              className="ml-1 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </span>
        )}

        {/* Date */}
        {filters.date && (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition">
            {filters.date}
            <button
              onClick={() => setFilters((f) => ({ ...f, date: null }))}
              className="ml-1 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </span>
        )}

        {/* Country */}
        {filters.country && (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition">
            {filters.country}
            <button
              onClick={() => setFilters((f) => ({ ...f, country: null }))}
              className="ml-1 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </span>
        )}

        {/* Price Range */}
        {filters.priceRange &&
          (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) && (
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
              <button
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    priceRange: [0, 500] as [number, number],
                  }))
                }
                className="ml-1 text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </span>
          )}

        {/* On Sale */}
        {filters.onSale && (
          <span
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition"
            onClick={() => setFilters((f) => ({ ...f, onSale: false }))}
          >
            On Sale
            <button
              onClick={() => setFilters((f) => ({ ...f, onSale: false }))}
              className="ml-1 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </span>
        )}

        {/* Available */}
        {filters.available && (
          <span
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-400 transition"
            onClick={() => setFilters((f) => ({ ...f, available: false }))}
          >
            Available
            <button
              onClick={() => setFilters((f) => ({ ...f, available: false }))}
              className="ml-1 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </span>
        )}
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <LeftEventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">No event for</p>
        )}
      </div>
    </div>
  );
}

export default ExploreTemp;
