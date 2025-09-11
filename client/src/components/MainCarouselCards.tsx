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
import { Event } from "@/lib/types/types";
import BottomEventCard from "./BottomEventCard";

interface MainCarouselCardsProps {
  title: string;
  link: string;
  events: Event[];
}

const MainCarouselCards: React.FC<MainCarouselCardsProps> = ({
  title,
  link,
  events,
}) => {
  const preview = events.slice(0, 8);

  return (
    <section className="bg-zinc-200 dark:bg-slate-800 rounded-xl py-4 px-2 ">
      <div className="mb-4 flex justify-between items-center ">
        <Link
          href={link}
          className="text-2xl font-semibold capitalize hover:text-orange-500"
        >
          {title} →
        </Link>
      </div>

      <div className="relative  p-3 rounded-xl dark:bg-slate-800 bg-zinc-200">
        <Carousel opts={{ align: "start" }} className="w-full">
          <div className="absolute -top-13 right-1 mt-2 z-10 flex gap-4">
            <CarouselPrevious className="shadow-lg static w-auto h-auto p-2 border-0 bg-slate-900 dark:bg-white dark:text-slate-900 text-white dark:hover:bg-white hover:bg-slate-900 dark:hover:text-orange-500 hover:text-orange-500 cursor-pointer" />
            <CarouselNext className="shadow-lg static w-auto h-auto p-2 border-0 bg-slate-900 dark:bg-white dark:text-slate-900 text-white dark:hover:bg-white hover:bg-slate-900 dark:hover:text-orange-500 hover:text-orange-500 cursor-pointer" />
          </div>

          <CarouselContent>
            {preview.map((event) => (
              <CarouselItem
                key={event._id}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <BottomEventCard event={event} />
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
