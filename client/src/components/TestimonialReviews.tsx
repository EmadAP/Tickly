"use client";

import { TESTIMONIALS } from "@/lib/mock";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function TestimonialReviews() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    function updateColumns() {
      const width = window.innerWidth;

      if (width >= 1536) setColumns(8);
      else if (width >= 1280) setColumns(7);
      else if (width >= 1024) setColumns(6);
      else if (width >= 768) setColumns(5);
      else if (width >= 640) setColumns(4);
      else setColumns(3);
    }

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const maxRows = 3;
  const maxItems = columns * maxRows;

  const visibleTestimonials = TESTIMONIALS.slice(0, maxItems);

  return (
    <div className="grid gap-y-20 overflow-hidden w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      {visibleTestimonials.map((testimonial, i) => (
        <div key={i} className="flex items-center justify-center">
          <HoverCard>
            <HoverCardTrigger>
              <div className="relative shrink-0 h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-slate-700 border-slate-700 text-white lg:w-lg md:w-md">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <h3 className="text-lg text-orange-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-light">{testimonial.time}</p>
                </div>
                <div className="border-b-1 border-orange-500" />
                <p className="text-sm text-slate-300">{testimonial.message}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  );
}

export default TestimonialReviews;
