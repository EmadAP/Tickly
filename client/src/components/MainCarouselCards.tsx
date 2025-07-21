"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ticket } from "@/lib/types/types";
import MainTicketCard from "./MainTicketCard";

interface MainCarouselCardsProps {
  title: string;
  link: string;
  tickets: Ticket[];
}

const MainCarouselCards: React.FC<MainCarouselCardsProps> = ({
  title,
  link,
  tickets,
}) => {
  const preview = tickets.slice(0, 8);

  return (
    <section>
      <div className="mb-4 flex justify-between items-center">
        <Link
          href={link}
          className="text-2xl font-semibold capitalize hover:text-orange-500"
        >
          {title} →
        </Link>
      </div>

      <div className="relative border-2 border-orange-500 p-3 rounded-xl bg-slate-800">
        <Carousel opts={{ align: "start" }} className="w-full">
          <div className="absolute -top-13 right-1 mt-2 z-10 flex gap-4">
            <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
            <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
          </div>

          <CarouselContent>
            {preview.map((ticket) => (
              <CarouselItem
                key={ticket._id}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <MainTicketCard ticket={ticket} showOff />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default MainCarouselCards;
