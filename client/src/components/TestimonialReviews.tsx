"use client";

import { TESTIMONIALS } from "@/lib/mock";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function TestimonialReviews() {
  const [columns, setColumns] = useState(3);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (!isUserHovering && visibleTestimonials.length > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        let next;
        do {
          next = Math.floor(Math.random() * visibleTestimonials.length);
        } while (next === activeIndex);
        setActiveIndex(next);
      }, 6000); 
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isUserHovering, visibleTestimonials.length, activeIndex]);

  
  const handleMouseLeave = () => {
    setIsUserHovering(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => lastHoveredIndex ?? prev);
    }, 6000); 
  };

  return (
    <div className="pl-20 grid gap-y-15 overflow-hidden w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      {visibleTestimonials.map((testimonial, i) => {
        const isOpen = i === activeIndex;

        return (
          <HoverCard
            key={i}
            open={isOpen}
            onOpenChange={(open) => {
              if (open) {
                setIsUserHovering(true);
                setActiveIndex(i);
                setLastHoveredIndex(i);

                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              } else {
                handleMouseLeave();
              }
            }}
          >
            <HoverCardTrigger asChild>
              <div className="relative shrink-0 h-16 w-16 rounded-full overflow-hidden cursor-pointer">
                <Image
                  src={testimonial.image}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            </HoverCardTrigger>

            <HoverCardContent className="shadow-lg dark:bg-slate-700 bg-zinc-200 dark:border-slate-700 border-zinc-200  dark:text-white text-black lg:w-lg md:w-md z-10">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <h3 className="text-lg text-orange-500">{testimonial.name}</h3>
                  <p className="text-sm font-light">{testimonial.time}</p>
                </div>
                <div className="border-b-1 border-orange-500" />
                <p className="text-sm dark:text-slate-300 text-gray-700">{testimonial.message}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}

export default TestimonialReviews;
