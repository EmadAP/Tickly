"use client";

import RightEventCard from "@/components/RightEventCard";
import { GetAllEvents, useGetAllSections } from "@/lib/api/main/queries";
import { PartyPopper } from "lucide-react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Section, Event } from "@/lib/types/types";
import SideEventCardSkeleton from "@/components/skeletons/SideEventCardSkeleton";

function MainRight() {
  const { data: events, isLoading: eventsLoading } = GetAllEvents();
  const { data: sections, isLoading: sectionsLoading } = useGetAllSections();

  const is2xl = useMediaQuery({ minWidth: 1536 });
  const isLgOrLarger = useMediaQuery({ minWidth: 1024 });
  const visibleCount = is2xl ? 7 : isLgOrLarger ? 10 : 6;

  if (eventsLoading || sectionsLoading || !events || !sections) {
    return (
      <div className="flex-1/3 2xl:flex-1/4 mb-20 py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <SideEventCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  const discountedSections = sections.filter((section: Section) => {
    const discount = Number(section.discountPercent) || 0;
    const remaining = section.quantity - section.sold;

    return section.onSell && discount > 0 && remaining > 0;
  });

  const eventDiscountMap = discountedSections.reduce<Record<string, number>>(
    (acc, section) => {
      const eventId =
        typeof section.event === "object" ? section.event._id : section.event;

      const discount = Number(section.discountPercent) || 0;
      if (!acc[eventId] || discount > acc[eventId]) {
        acc[eventId] = discount;
      }
      return acc;
    },
    {}
  );

  const eventDiscountData = discountedSections.reduce<
    Record<string, { discount: number; sectionName: string }>
  >((acc, section) => {
    const eventId =
      typeof section.event === "object" ? section.event._id : section.event;

    const discount = Number(section.discountPercent) || 0;
    if (!acc[eventId] || discount > acc[eventId].discount) {
      acc[eventId] = {
        discount,
        sectionName: section.name,
      };
    }
    return acc;
  }, {});

  const discountedEvents: Event[] = events
    .filter((event: Event) => eventDiscountMap[event._id])
    .slice(0, visibleCount);

  return (
    <div className="flex-1/3 2xl:flex-1/4 dark:bg-slate-800 bg-zinc-200 rounded-2xl px-5 py-10">
      <div className="flex flex-row mb-10 justify-center items-center gap-8">
        <PartyPopper size={40} className="text-orange-500 -rotate-y-180" />
        <p className="text-4xl font-semibold">On Sell</p>
        <PartyPopper size={40} className="text-orange-500" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {discountedEvents.length > 0 ? (
          discountedEvents.map((event) => (
            <RightEventCard
              key={event._id}
              event={event}
              discount={eventDiscountMap[event._id]}
              sectionName={eventDiscountData[event._id].sectionName}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">
            No discounted events found.
          </p>
        )}
      </div>
    </div>
  );
}

export default MainRight;
