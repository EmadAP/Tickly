import MainCarouselCards from "@/components/MainCarouselCards";
import MainCarouselSkeleton from "@/components/skeletons/MainCarouselSkeleton";
import { GetAllEvents } from "@/lib/api/main/queries";
import { Event } from "@/lib/types/types";
import React, { useMemo } from "react";

interface DetailBottomProps {
  event: Event;
}

const DetailBottom: React.FC<DetailBottomProps> = ({ event }) => {
  const { data: events, isLoading, isError, error } = GetAllEvents();

  const { sameCountryEvents, sameCategoryEvents } = useMemo(() => {
    if (!events) return { sameCountryEvents: [], sameCategoryEvents: [] };

    const filteredEvents = events.filter((e) => e._id !== event._id);

    return {
      sameCountryEvents: filteredEvents.filter(
        (e) => e.country === event.country
      ),
      sameCategoryEvents: filteredEvents.filter(
        (e) => e.category === event.category
      ),
    };
  }, [events, event]);

  if (isLoading || !events) {
    return (
      <div className="py-20 border-t-2 border-orange-500 lg:border-b-0 space-y-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <MainCarouselSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (isError) return <div>Error: {error.message}</div>;

  console.log("Filtered country events:", sameCountryEvents);
  console.log("Filtered category events:", sameCategoryEvents);

  return (
    <div className="py-10 border-t-2 border-orange-500 space-y-12 text-white">
      {sameCountryEvents.length > 0 && (
        <MainCarouselCards
          key={`country-${event.country}`}
          title={`Events in ${event.country}`}
          link={`/explore?country=${encodeURIComponent(event.country)}`}
          events={sameCountryEvents}
        />
      )}

      {sameCategoryEvents.length > 0 && (
        <MainCarouselCards
          key={`category-${event.category}`}
          title={`${event.category} events`}
          link={`/explore?category=${encodeURIComponent(event.category)}`}
          events={sameCategoryEvents}
        />
      )}
    </div>
  );
};

export default DetailBottom;
