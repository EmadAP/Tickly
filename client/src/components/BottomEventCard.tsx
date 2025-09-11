import { useGetSectionsByEventId } from "@/lib/api/main/queries";
import { Event } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  event: Event;
}

const BottomEventCard: React.FC<EventCardProps> = ({ event }) => {
  const { data: sections } = useGetSectionsByEventId();

  const onSellSection = sections?.map((section) => section.onSell);
  const discountSection = sections?.map((section) => section.discountPercent);
  return (
    <Link href={`/event/${event._id}`} className="group">
      <div className="shadow-lg flex flex-col justify-between rounded-2xl h-96 dark:bg-slate-900 bg-white cursor-pointer overflow-hidden">
        {/* Sell */}
        {onSellSection && discountSection ? (
          <div className="relative bg-red-500 text-white px-2 py-1 rounded-lg shadow z-10">
            <div className="absolute top-0 left-0 text-sm font-semibold ">
              {discountSection}% OFF
            </div>
          </div>
        ) : null}

        {/* Image Section */}
        <div className="relative w-full h-4/5 overflow-hidden">
          <Image
            src={`http://localhost:5000/${event.image}`}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 py-2 px-2 flex flex-col gap-2">
          <p className="text-lg font-semibold truncate">{event.title}</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm dark:text-gray-400 text-gray-700 truncate">
              {event.country},{" "}
              {event.address && event.address.split(",")[0]
                ? `${event.address.split(",")[0].trim()}`
                : ""}
            </p>
            <span className="text-sm dark:text-gray-400 text-gray-700 whitespace-nowrap">
              {new Date(event.eventDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BottomEventCard;
