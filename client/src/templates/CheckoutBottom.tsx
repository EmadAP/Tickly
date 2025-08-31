"use client";

import { GetAllEvents } from "@/lib/api/main/queries";
import React from "react";
import MainCarouselSkeleton from "@/components/skeletons/MainCarouselSkeleton";
import MainCarouselCards from "@/components/MainCarouselCards";

const CheckoutBottom = () => {
  const { data: events, isLoading, isError, error } = GetAllEvents();

  if (isLoading || !events) {
    return (
      <div className="py-20 border-t-2 border-orange-500 lg:border-b-0 space-y-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <MainCarouselSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="px-5 mt-10 pt-10 bg-slate-800 rounded-2xl">
      <MainCarouselCards
        title="Recommended"
        link="/explore"
        events={events} // ✅ just pass all events here
      />
    </div>
  );
};

export default CheckoutBottom;
