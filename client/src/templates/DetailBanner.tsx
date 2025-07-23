import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Ticket } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

interface DetailBannerProps {
  ticket: Ticket;
}

const DetailBanner: React.FC<DetailBannerProps> = ({ ticket }) => {
  return (
    <div className="relative w-full h-72 text-center border-b-2 border-orange-500 bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={`http://localhost:5000/${ticket.image}`}
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
      <MaxWidthWrapper>
        <div className="flex relative z-10 text-center items-center justify-center bg-transparent">
          <p className="leading-15 text-5xl font-semibold pt-20 md:pt-40 text-white drop-shadow-xl">
            {ticket.title} , {ticket.country}
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default DetailBanner;
