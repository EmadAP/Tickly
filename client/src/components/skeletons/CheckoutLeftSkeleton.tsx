import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function SkeletonCard() {
  return (
    <div className="relative bg-zinc-200 rounded-3xl md:p-2 px-2 py-6 m-4 text-slate-900 ">
      {/* Foreground content */}
      <div className="relative z-10 min-h-44 flex flex-col md:flex-row gap-6 lg:gap-2 xl:gap-4">
        {/* Perforation */}
        <div className="relative flex md:flex-col flex-row justify-center items-center">
          <div className="hidden md:block w-5 h-5 rounded-full dark:bg-slate-900 bg-white absolute -top-5 left-1/2 -translate-x-1/2"></div>
          <div className="block md:hidden w-5 h-5 rounded-full dark:bg-slate-900 bg-white absolute -left-2 -translate-x-1/2"></div>
          <div className="block md:hidden w-5 h-5 rounded-full dark:bg-slate-900 bg-white absolute -right-2 translate-x-1/2"></div>
          <div className="hidden md:block w-5 h-5 rounded-full dark:bg-slate-900 bg-white absolute -bottom-5 left-1/2 -translate-x-1/2"></div>
          <div className="h-full w-full border-b-2 md:border-r-2 border-dashed dark:border-slate-900 border-white"></div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutLeftSkeleton() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full relative md:pl-8 "
    >
      <div className="hidden absolute left-3 mt-2 md:flex flex-col justify-around z-10  h-full gap-4">
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 dark:bg-white bg-slate-900 dark:text-slate-900 text-white  hover:bg-orange-300 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 dark:bg-white bg-slate-900 dark:text-slate-900 text-white  hover:bg-orange-300 cursor-pointer" />
      </div>
      <CarouselContent className="h-[450px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className="px-1 pt-5 basis-1/5">
            <SkeletonCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden p-2 border-0 dark:bg-white bg-slate-900 dark:text-slate-900 text-white  hover:bg-orange-300 cursor-pointer" />
      <CarouselNext className="md:hidden p-2 border-0 dark:bg-white bg-slate-900 dark:text-slate-900 text-white  hover:bg-orange-300 cursor-pointer" />
    </Carousel>
  );
}
