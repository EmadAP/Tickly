"use client";

import React from "react";
import { Event, Section } from "@/lib/types/types";

interface DetailRightProps {
  event: Event;
  sections: Section[];
}

const DetailRight: React.FC<DetailRightProps> = ({ event, sections }) => {
  return (
    <div className="py-10 text-white">
      <div className="flex flex-col gap-5 ">
        <h2 className="text-xl text-orange-500 font-semibold">Sections :</h2>

        <div className="">
          {sections.map((section) => (
            <div key={section._id} className="w-full">
              <div className="flex flex-row gap-4 items-center justify-between bg-slate-800 border-2 border-orange-500 rounded-lg p-2 w-full">
                <div>
                  <p>{section.name}</p>
                  <p>{section.price}</p>
                </div>
                <div>{section.discountPercent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailRight;
