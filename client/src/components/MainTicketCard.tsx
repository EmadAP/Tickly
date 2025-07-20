import { Ticket } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

interface TicketCardProps {
  ticket: Ticket;
}

const MainTicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="flex flex-col rounded-2xl h-96 bg-slate-900 justify-between group cursor-pointer">
      <div className="overflow-hidden rounded-2xl h">
        <Image
          src={`http://localhost:5000/${ticket.image}`}
          alt={ticket.title}
          width={700}
          height={400}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="py-2 px-2 flex flex-col gap-2">
        <p className="text-lg font-semibold">{ticket.title}</p>
        <p className="text-sm text-gray-400">
          {new Date(ticket.eventDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default MainTicketCard;
