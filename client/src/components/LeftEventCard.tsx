import { Event } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  event: Event;
}

const LeftEventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/event/${event._id}`} className="group">
      <div className="flex flex-col rounded-2xl h-96 bg-slate-900 justify-between cursor-pointer">
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

export default LeftEventCard;
