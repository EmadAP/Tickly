import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TestimonialReviews from "@/components/TestimonialReviews";
import { IconMP } from "@/lib/IconMP";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function MainTestimonial() {
  return (
    <div className="flex flex-col items-center gap-15">
      <MaxWidthWrapper>
        <h2 className="text-shadow-lg tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl lg:text-7xl">
          What our{" "}
          <span className="relative px-2 text-orange-500">
            customers{" "}
            <IconMP.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-3  dark:text-white text-black" />
          </span>{" "}
          say
        </h2>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <TestimonialReviews />
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div>
          <ul className="space-y-4 text-left font-medium flex flex-col items-center  pt-6">
            <div className="space-y-4">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-orange-500" />
                Verified tickets for every purchase—no scams, no fakes.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-orange-500" />
                Instant digital delivery so you’re ready to go in seconds.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-orange-500" />
                Access sold-out concerts, sports, and events with ease.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-orange-500" />
                Safe, secure payments with buyer protection every time.
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-orange-500" />
                24/7 support to help you before, during, and after events.
              </li>
            </div>
          </ul>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center  gap-5">
            <div className="flex -space-x-4 ">
              <Image
                src="/user/user-25.png"
                height={40}
                width={40}
                alt="user image"
                className="inline-block rounded-full ring-2 dark:ring-slate-800 ring-white"
              />
              <Image
                src="/user/user-26.png"
                height={40}
                width={40}
                alt="user image"
                className="inline-block rounded-full ring-2 dark:ring-slate-800 ring-white"
              />
              <Image
                src="/user/user-27.png"
                height={40}
                width={40}
                alt="user image"
                className="inline-block rounded-full ring-2 dark:ring-slate-800 ring-white"
              />
              <Image
                src="/user/user-28.jpg"
                height={40}
                width={40}
                alt="user image"
                className="inline-block rounded-full ring-2 dark:ring-slate-800 ring-white"
              />
              <Image
                src="/user/user-29.jpg"
                height={40}
                width={40}
                alt="user image"
                className="inline-block object-cover rounded-full ring-2 dark:ring-slate-800 ring-white"
              />
            </div>
            <div className="flex flex-col justify-between items-center sm:items-start">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
              </div>
              <p>
                more then <span className="font-semibold">5,000,000</span>{" "}
                ticket sold
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default MainTestimonial;
