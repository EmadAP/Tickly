import { Tickets } from "lucide-react";
import React from "react";

interface TicketProps {
  eventTitle: string;
  section: string;
  country: string;
  city: string;
  date: string;
  time: string;
  total: number;
  price: number;
  discount?: number;
}

export const Ticket: React.FC<TicketProps> = ({
  eventTitle,
  section,
  country,
  city,
  date,
  time,
  total,
  price,
  discount,
}) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-visible md:p-2 px-2 py-6 m-4 text-slate-900">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center rotate-[-25deg] md:rotate-[-15deg] opacity-10 pointer-events-none select-none">
        <span className="text-8xl md:text-9xl font-extrabold text-slate-700 mr-4">
          Tickly
        </span>
        <Tickets className="text-orange-500" size={100} />
      </div>

      {/* Total Tickets */}
      <div className="absolute -top-1 -left-5 rotate-[-25deg]  bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-20 pointer-events-none">
        x{total} Tickets
      </div>

      {/* Foreground content */}
      <div className="relative z-10 min-h-44 flex flex-col md:flex-row gap-6 lg:gap-2 xl:gap-4">
        {/* LEFT */}
        <div className="md:w-full flex flex-col justify-between md:py-4">
          <h2 className="text-2xl font-bold capitalize">{eventTitle}</h2>
          <span className="text-orange-500 font-semibold text-lg">
            {section}
          </span>
        </div>

        {/* MIDDLE */}
        <div className="md:w-full flex md:flex-col flex-row justify-between gap-2 md:py-4">
          <p className="text-sm flex flex-col sm:items-center sm:flex-row lg:flex-col lg:items-start gap-1">
            Country: <span className="font-semibold text-lg">{country}</span>
          </p>
          <p className="text-sm flex flex-col sm:items-center sm:flex-row lg:flex-col lg:items-start gap-1">
            City: <span className="font-semibold text-lg">{city}</span>
          </p>
        </div>

        {/* Perforation */}
        <div className="relative flex md:flex-col flex-row justify-center items-center">
          <div className="hidden md:block w-5 h-5 rounded-full bg-slate-900 absolute -top-5 left-1/2 -translate-x-1/2"></div>
          <div className="block md:hidden w-5 h-5 rounded-full bg-slate-900 absolute -left-2 -translate-x-1/2"></div>
          <div className="block md:hidden w-5 h-5 rounded-full bg-slate-900 absolute -right-2 translate-x-1/2"></div>
          <div className="hidden md:block w-5 h-5 rounded-full bg-slate-900 absolute -bottom-5 left-1/2 -translate-x-1/2"></div>
          <div className="h-full w-full border-b-2 md:border-r-2 border-dashed border-slate-900"></div>
        </div>

        {/* RIGHT */}
        <div className="flex w-full md:w-1/2 flex-row md:flex-col items-center gap-6 justify-between md:py-4">
          {/* Price with discount logic */}
          <div className="flex flex-col items-center">
            {discount && discount > 0 ? (
              <>
                <span className="text-sm line-through text-slate-500">
                  {price.toFixed(2)} $
                </span>
                <span className="font-bold text-orange-600">
                  {(price - (price * discount) / 100).toFixed(2)} $
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold">
                {price.toFixed(2)} $
              </span>
            )}
          </div>

          {/* Date & time */}
          <span className="font-semibold">{date}</span>
          <span className="font-semibold">{time}</span>
        </div>
      </div>
    </div>
  );
};
