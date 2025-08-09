import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CheckoutLeftDetails() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full relative pl-10"
    >
      <div className="absolute left-3 mt-2 z-10 flex flex-col justify-around h-full gap-4">
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
      </div>
      <CarouselContent className="-mt-1 h-[450px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
