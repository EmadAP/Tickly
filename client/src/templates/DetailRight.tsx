"use client";
import React from "react";
import { Event, Section } from "@/lib/types/types";
import SectionCardDetail from "@/components/SectionCardDetail";

interface DetailRightProps {
  event: Event;
  sections: Section[];
  hoveredName: string | null;
  selectedName: string | null;
  onReset: () => void;
  onSelect: (name: string) => void;
  onHover: (name: string | null) => void;
}

const DetailRight: React.FC<DetailRightProps> = ({
  event,
  sections,
  hoveredName,
  selectedName,
  onReset,
  onSelect,
  onHover,
}) => {
  // section details
  if (selectedName) {
    const selectedSection = sections.filter((s) => s.name === selectedName);

    return (
      <div className="dark:bg-slate-800 bg-zinc-200 p-4 rounded-lg dark:text-white text-black flex flex-col gap-3">
        <SectionCardDetail event={event} section={selectedSection} />
        <div className="flex gap-3 mt-4">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={onReset}
          >
            Show All Sections
          </button>
        </div>
      </div>
    );
  }

  // all sections
  return (
    <div className="flex flex-col gap-4 text-white">
      {sections.map((section) => {
        const remaining = section.quantity - section.sold;
        const isSoldOut = remaining <= 0;

        return (
          <div
            key={section._id}
            className={`p-2 border rounded-md mb-2 ${
              isSoldOut ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } ${
              hoveredName === section.name
                ? "border-orange-500"
                : "border-gray-600"
            }`}
            onMouseEnter={() => !isSoldOut && onHover(section.name)}
            onMouseLeave={() => !isSoldOut && onHover(null)}
            onClick={() => !isSoldOut && onSelect(section.name)}
          >
            {isSoldOut ? (
              <div className="dark:text-gray-400 text-gray-700">Sold Out</div>
            ) : (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2">
                  <p className="dark:text-white text-black">{section.name}</p>
                  <span className="dark:text-white text-black">-</span>
                  <p className="dark:text-white text-black">€{section.price}</p>
                </div>
                {section.discountPercent && (
                  <p className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg shadow">
                    {section.discountPercent}% OFF
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DetailRight;
