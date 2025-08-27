import { Tickets } from "lucide-react";
import React from "react";

interface TicketProps {
  eventTitle: string;
  section: string;
  country: string;
  city: string;
  date: string;
  time: string;
  price: number;
  seat?: string;
  user?: string;
}

export const Ticket: React.FC<TicketProps> = ({
  eventTitle,
  section,
  country,
  city,
  date,
  time,
  price,
  seat,
  user,
}) => {
  return (
    <div className="h-full relative grid grid-cols-5 gap-4 bg-white rounded-3xl shadow-2xl p-4 m-4 text-slate-900">
      {/* left */}
      <div className="flex flex-col items-start justify-between">
        <h2 className="text-2xl font-bold capitalize">{eventTitle}</h2>
        <span className="text-orange-500 font-semibold text-lg">{section}</span>
      </div>

      {/* middle */}
      <div className="col-span-3 pr-2 flex flex-col items-center justify-between relative">
        <div className="flex flex-row gap-4 justify-center items-center">
          <span className="text-6xl font-bold text-slate-700">Tickly</span>
          <Tickets size={55} className="text-orange-500" />
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-sm flex flex-row items-center gap-2">
            Country :<span className="block font-semibold text-lg">{country}</span>
          </p>
          <p className="text-sm flex flex-row items-center gap-2">
            City :<span className="block font-semibold text-lg">{city}</span>
          </p>
        </div>
      </div>

      {/* Perforation */}
      <div className="absolute right-45 -top-0 bottom-0 flex flex-col justify-between">
        <div className="w-5 h-5 rounded-full bg-slate-900 absolute -top-3 -right-2 "></div>
        <div className="w-5 h-5 rounded-full bg-slate-900 absolute -bottom-3 -right-2 "></div>
        <div className="h-full border-r-2 border-dashed border-slate-900 mx-auto"></div>
      </div>

      {/* right */}
      <div className="flex flex-col items-center justify-between">
        <div className="flex justify-center items-center">
          <p className="text-center">QR code</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <span className="block font-semibold">{date}</span>
          <span className="block">{time}</span>
        </div>
      </div>
    </div>
  );
};
