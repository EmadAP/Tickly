import React from "react";
import { Skeleton } from "../ui/skeleton";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function CardSkeleton() {
  return (
    <div className="bg-zinc-200 dark:bg-slate-800 rounded-xl py-4 px-2 ">
      <div className="relative mt-12  p-3 rounded-xl dark:bg-slate-800 bg-zinc-200">
        <Carousel opts={{ align: "start" }} className="w-full">
          <div className="absolute -top-13 right-1 mt-2 z-10 flex gap-4">
            <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
            <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
          </div>

          <CarouselContent>
            {Array.from({ length: 4 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="flex flex-col justify-between rounded-2xl h-96 dark:bg-slate-900 bg-white cursor-pointer overflow-hidden">
                  <Skeleton className="h-4/5 w-full rounded-t-xl bg-zinc-400 " />
                  <div className="flex-1 py-2 px-2 flex flex-col gap-2 justify-center">
                    <Skeleton className="h-4 w-2/3 bg-zinc-400" />
                    <Skeleton className="h-4 w-full rounded-xl bg-zinc-400" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default function MainCarouselSkeleton() {
  return (
    <div className="px-5 py-10 dark:bg-slate-900 bg-white rounded-2xl ">
      <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Categories", "Country"].map((label, index) => (
          <button
            key={label}
            className={`p-3 rounded-2xl flex flex-row justify-between items-center cursor-pointer dark:bg-slate-800 bg-zinc-200 dark:hover:bg-slate-700 hover:bg-zinc-100 
              ${index === 0 ? "lg:col-start-2" : "lg:col-start-3"}`}
          >
            <span className="text-xl font-semibold">{label}</span>
            <ChevronDown className="text-orange-500" />
          </button>
        ))}
      </div>
      <div className="space-y-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
