import { Event } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  event: Event;
  discount?: number;
  sectionName?: string;
}

const RightEventCard: React.FC<EventCardProps> = ({
  event,
  discount,
  sectionName,
}) => {
  return (
    <Link
      href={{
        pathname: `/event/${event._id}`,
        query: { sectionName },
      }}
      className="group"
    >
      <div className="relative shadow-lg  w-full h-40 dark:bg-slate-900 bg-white rounded-2xl overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src={`http://localhost:5000/${event.image}`}
            alt="Background"
            fill
            sizes="100%"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
        </div>

        {discount && (
          <p className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg shadow z-10">
            {discount}% OFF
          </p>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-center text-xl">{event.title}</p>
          <p className="text-center">
            {new Date(event.eventDate).toLocaleDateString()}
          </p>
          <p className="text-center">
            {event.country},{" "}
            {event.address && event.address.split(",")[0]
              ? `${event.address.split(",")[0].trim()}`
              : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RightEventCard;
