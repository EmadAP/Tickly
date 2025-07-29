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
      <div className="bg-slate-800 p-4 rounded-lg text-white flex flex-col gap-3">
        {/* Use your detailed card */}
        <SectionCardDetail event={event} section={selectedSection} />

        <div className="flex gap-3 mt-4">
          <button
            className="bg-gray-500 px-4 py-2 rounded-lg"
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
      {sections.map((section) => (
        <div
          key={section._id}
          className={`p-2 border rounded-md mb-2 cursor-pointer
            ${
              hoveredName === section.name
                ? "border-orange-500"
                : "border-gray-600"
            }
          `}
          onMouseEnter={() => onHover(section.name)}
          onMouseLeave={() => onHover(null)}
          onClick={() => onSelect(section.name)}
        >
          {section.quantity === 0 ? (
            <div className="text-gray-400">Sold Out</div>
          ) : (
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">
                <p>{section.name}</p>
                <span>-</span>
                <p>€{section.price}</p>
              </div>
              {section.discountPercent && (
                <p className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg shadow">
                  {section.discountPercent}% OFF
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailRight;
