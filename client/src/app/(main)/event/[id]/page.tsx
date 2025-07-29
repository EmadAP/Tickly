"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GetEventById, useGetSectionsByEventId } from "@/lib/api/main/queries";
import DetailBanner from "@/templates/DetailBanner";
import DetailLeft from "@/templates/DetailLeft";
import DetailRight from "@/templates/DetailRight";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const params = useParams();
  const id = params.id as string;

  const { data: event, isLoading, isError, error } = GetEventById(id);
  const { data: sections } = useGetSectionsByEventId(id);

  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleHover = (name: string | null) => setHoveredName(name);
  const handleSelect = (name: string) => setSelectedName(name);
  const handleReset = () => setSelectedName(null);

  if (isLoading || !event || !sections) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center">
        <DetailBanner event={event} />
        <MaxWidthWrapper className="flex flex-col xl:flex-row my-15 gap-5 relative">
          {/* left side */}
          <div className="w-full xl:w-2/3 xl:sticky xl:top-20 self-start">
            <DetailLeft
              event={event}
              sections={sections}
              hoveredName={hoveredName}
              selectedName={selectedName}
              onHover={handleHover}
              onClick={handleSelect}
            />
          </div>
          {/* right side */}
          <div className="w-full xl:w-1/3">
            <DetailRight
              event={event}
              sections={sections}
              hoveredName={hoveredName}
              selectedName={selectedName}
              onReset={handleReset}
              onSelect={handleSelect}
              onHover={handleHover}
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Page;
