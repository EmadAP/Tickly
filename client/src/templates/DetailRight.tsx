import { Ticket } from "@/lib/types/types";
import React from "react";

interface DetailRightProps {
  ticket: Ticket;
}

const DetailRight: React.FC<DetailRightProps> = ({ ticket }) => {
  return (
    <div className="text-white w-full flex flex-col my-10">
      <div className="bg-slate-800 py-10 px-5 rounded-xl">
        <span>
          Price for each Ticket :{" "}
          <span className="text-orange-500">{ticket.price}</span>
        </span>
      </div>
    </div>
  );
};

export default DetailRight;
