import { useGetSectionsByEventId } from "@/lib/api/main/queries";
import { Event } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  event: Event;
}

const BottomEventCard: React.FC<EventCardProps> = ({ event }) => {
  const { data: sections} = useGetSectionsByEventId()

  const onSellSection = sections?.map((section) => section.onSell)
  const discountSection = sections?.map((section) => section.discountPercent)
  return (
    <Link href={`/event/${event._id}`} className="group">
      <div className="relative flex flex-col rounded-2xl h-96 bg-slate-900 justify-between cursor-pointer">
        {onSellSection && discountSection ? (
          <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg shadow z-10">
            {discountSection}% OFF
          </div>
        ) : null}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={`http://localhost:5000/${event.image}`}
            alt={event.title}
            width={700}
            height={400}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
        <div className="py-2 px-2 flex flex-col gap-2">
          <p className="text-lg font-semibold">{event.title}</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              {event.country},{" "}
              {event.address && event.address.split(",")[0]
                ? `${event.address.split(",")[0].trim()}`
                : ""}
            </p>
            <span className="text-sm text-gray-400">
              {new Date(event.eventDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BottomEventCard;
