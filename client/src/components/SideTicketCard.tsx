import { Ticket } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

interface TicketCardProps {
  ticket: Ticket;
}

const SideTicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer">
      <div className="absolute inset-0">
        <Image
          src={`http://localhost:5000/${ticket.image}`}
          alt="Background"
          fill
          sizes="100%"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
      </div>
      <p className="text-red-600 absolute inset-0 pl-2 text-xl font-bold">
        {ticket.off ? `${ticket.off}%` : ""}
      </p>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-center text-lg">{ticket.title}</p>
        <p className="text-center">
          {new Date(ticket.eventDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default SideTicketCard;
