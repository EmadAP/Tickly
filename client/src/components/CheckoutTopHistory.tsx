"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CheckoutTopHistory() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="absolute -top-13 right-1 mt-2 z-10 flex  justify-between w-full gap-4">
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
      </div>
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card className="bg-orange-500">
                <CardContent className="flex aspect-square items-center justify-center p-6 h-32 ">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
