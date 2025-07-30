"use client";

import LeftEventCard from "@/components/LeftEventCard";
import { GetAllEvents } from "@/lib/api/main/queries";
import React from "react";

function ExploreTemp() {
  const { data: events, isLoading, isError, error } = GetAllEvents();

  if (isLoading || !events) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-slate-800 py-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {events.length > 0 ? (
        events.map((event) => <LeftEventCard key={event._id} event={event} />)
      ) : (
        <p className="text-center col-span-full text-lg">
          No event for
          {/* {activeFilter.toLowerCase()}. */}
        </p>
      )}
    </div>
  );
}

export default ExploreTemp;
