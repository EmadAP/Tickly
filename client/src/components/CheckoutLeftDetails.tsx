import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GetEventById, useGetSectionById } from "@/lib/api/main/queries";
import { useCart } from "@/lib/context/CartContext";

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
        <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
        <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900  hover:bg-orange-500 cursor-pointer" />
      </div>
      <CarouselContent className="-mt-1 h-[450px] ">
        {cart.map((item) => (
          <CarouselItem key={item.sectionId} className="pt-1  basis-1/5">
            <div className="p-1">
              <Card className="p-0 bg-orange-500 border-dashed border-slate-800">
                <CardContent className="relative flex items-center justify-center ">
                  <div className="absolute inset-0 w-full h-[150px] overflow-hidden">
                    <Image
                      src="/idk/ticket.png"
                      alt="ticket"
                      fill
                      className="object-center"
                    />
                  </div>
                  <div className="w-full h-[150px] flex flex-row ">
                    <div className="flex-3/4 flex flex-col justify-between py-2 gap-2 relative">
                      <div className="text-2xl text-center font-bold">
                        {item.event.title}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm">
                          Section :{" "}
                          <span className="text-lg font-semibold">
                            {item.section.name}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 text-sm items-center">
                          address :
                          <div className="text-lg font-semibold">
                            {item.event.country},
                          </div>
                          <div className="text-lg font-semibold">
                            {item.event.city}
                          </div>
                        </div>
                      </div>
                      <div className="absolute -left-6 top-0 font-semibold bg-red-600 rounded-xl py-1 px-2">
                        {item.section.discountPercent} %
                      </div>
                    </div>
                    <div className="flex-1/4 flex flex-col gap-2 py-2 items-center justify-between">
                      <div className="text-lg">
                        {new Date(item.event.eventDate).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" }
                        )}
                      </div>
                      <div>{item.event.eventTime}</div>
                      <div className="border-t border-white pt-1 text-sm">price : {item.section.price} $</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
