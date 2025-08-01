"use client";

import LeftEventCard from "@/components/LeftEventCard";
import EventCardSkeleton from "@/components/skeletons/EventCardSkeleton";
import { GetAllEvents, useGetAllSections } from "@/lib/api/main/queries";
import { ExploreFilters } from "@/lib/types/types";
import React from "react";

interface ExploreTempProps {
  filters: ExploreFilters;
}

function ExploreTemp({ filters }: ExploreTempProps) {
  const { data: events, isLoading, isError, error } = GetAllEvents();
  const { data: sections } = useGetAllSections();

  if (isLoading || !events || !sections) {
    return (
      <div className="flex-2/3 2xl:flex-3/4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <EventCardSkeleton key={i} />
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
    <div className="bg-slate-800 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <LeftEventCard key={event._id} event={event} />
        ))
      ) : (
        <p className="text-center col-span-full text-lg">No event for</p>
      )}
    </div>
  );
}

export default ExploreTemp;
