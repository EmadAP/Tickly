"use client";
import React from "react";
import { Event, Section } from "@/lib/types/types";
import {
  concertMap,
  sportsMap,
  theaterMap,
  comedyMap,
  workshopMap,
  seminarMap,
  SectionLayout,
} from "@/lib/mock";

interface DetailLeftProps {
  event: Event;
  sections: Section[];
  hoveredName: string | null;
  selectedName: string | null;
  onHover: (name: string | null) => void;
  onClick: (name: string) => void;
}

const DetailLeft: React.FC<DetailLeftProps> = ({
  event,
  sections,
  hoveredName,
  selectedName,
  onHover,
  onClick,
}) => {
  // Map selector
  const categoryMap: Record<string, SectionLayout[]> = {
    Concert: concertMap,
    Sports: sportsMap,
    Theater: theaterMap,
    Comedy: comedyMap,
    Workshop: workshopMap,
    Seminar: seminarMap,
  };

  const layout = categoryMap[event.category] || concertMap;

  return (
    <div className="relative bg-slate-200 w-full h-[725px] rounded-lg">
      {layout.map((sectionLayout) => {
        const isStage = sectionLayout.type === "stage";

        // Stage rendering
        if (isStage) {
          return (
            <div
              key={sectionLayout.name}
              className="absolute bg-slate-400 text-slate-900 font-semibold 
                   flex items-center justify-center rounded-md"
              style={{
                top: sectionLayout.top,
                left: sectionLayout.left,
                width: sectionLayout.width,
                height: sectionLayout.height,
              }}
            >
              {sectionLayout.name}
            </div>
          );
        }
        // Seating section rendering
        const sectionData = sections.find((s) => s.name === sectionLayout.name);
        const remaining = sectionData
          ? sectionData.quantity - (sectionData.sold || 0)
          : 0;
        const isSoldOut = remaining <= 0;
        const isSelected = selectedName === sectionLayout.name;
        const isHovered = hoveredName === sectionLayout.name;

        return (
          <div
            key={sectionLayout.name}
            className={`absolute p-2 rounded-md cursor-pointer text-white text-xs flex items-center justify-center
              ${
                isSelected
                  ? "bg-orange-500"
                  : isHovered
                  ? "bg-orange-400"
                  : "bg-gray-600"
              }
              ${isSoldOut ? "opacity-50 cursor-not-allowed" : ""}
            `}
            style={{
              top: sectionLayout.top,
              left: sectionLayout.left,
              width: sectionLayout.width,
              height: sectionLayout.height,
            }}
            onMouseEnter={() =>
              sectionData?.quantity && onHover(sectionLayout.name)
            }
            onMouseLeave={() => sectionData?.quantity && onHover(null)}
            onClick={() => {
              if (!sectionData?.quantity) return;
              onClick(sectionLayout.name);
            }}
          >
            {sectionLayout.name}
          </div>
        );
      })}
    </div>
  );
};

export default DetailLeft;
