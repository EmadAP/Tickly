import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Event } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

interface DetailBannerProps {
  event: Event;
}

const DetailBanner: React.FC<DetailBannerProps> = ({ event }) => {
  return (
    <div className="relative w-full h-72 text-center border-b-2 border-orange-500 bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={`http://localhost:5000/${event.image}`}
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
      <MaxWidthWrapper>
        <div className="flex relative z-10 text-center items-center justify-center bg-transparent">
          <p className="leading-15 text-5xl font-semibold pt-20 md:pt-40 text-white drop-shadow-xl">
            {event.title} , {event.country}
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default DetailBanner;
