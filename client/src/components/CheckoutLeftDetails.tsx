"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCart } from "@/lib/context/CartContext";
import { Ticket } from "./CheckoutLeftCard";

export function CheckoutLeftDetails() {
  const { cart } = useCart();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full relative md:pl-8 "
    >
      <div className="hidden absolute left-3 mt-2 md:flex flex-col justify-around z-10  h-full gap-4">
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
      </div>
      <CarouselContent className="h-[450px]">
        {cart.map((item) => (
          <CarouselItem key={item.sectionId} className="px-1 pt-5 basis-1/5">
            <Ticket
              eventTitle={item.event.title}
              section={item.section.name}
              country={item.event.country}
              city={item.event.city}
              date={new Date(item.event.eventDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
              time={item.event.eventTime}
              price={item.section.price}
              discount={item.section.discountPercent}
              total={item.total}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
      <CarouselNext className="md:hidden p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
    </Carousel>
  );
}
