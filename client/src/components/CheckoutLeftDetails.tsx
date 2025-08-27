"use client"
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
      className="w-full relative pl-10"
    >
      <div className="absolute left-3 mt-2 z-10 flex flex-col justify-around h-full gap-4">
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-300 cursor-pointer" />
      </div>
      <CarouselContent className="h-[450px]">
        {cart.map((item) => (
          <CarouselItem key={item.sectionId} className=" basis-1/5">
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
              // seat={item.seatNumber}
              // user={item.user?.username}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
