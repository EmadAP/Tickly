"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DetailPageSkeleton from "@/components/skeletons/DetailPageSkeleton";
import { GetEventById, useGetSectionsByEventId } from "@/lib/api/main/queries";
import DetailBanner from "@/templates/DetailBanner";
import DetailBottom from "@/templates/DetailBottom";
import DetailLeft from "@/templates/DetailLeft";
import DetailRight from "@/templates/DetailRight";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const params = useParams();
  const id = params.id as string;

  const searchParams = useSearchParams();
  const preselectedSection = searchParams.get("sectionName");

  const { data: event, isLoading, isError, error } = GetEventById(id);
  const { data: sections } = useGetSectionsByEventId(id);

  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(
    preselectedSection
  );

  const handleHover = (name: string | null) => setHoveredName(name);
  const handleSelect = (name: string) => setSelectedName(name);
  const handleReset = () => setSelectedName(null);

  if (isLoading || !event || !sections) return <DetailPageSkeleton />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="dark:bg-slate-900 bg-white">
      <div className="flex flex-col items-center">
        <DetailBanner event={event} />
        <MaxWidthWrapper className="flex flex-col gap-10 my-15">
          <div className="flex flex-col xl:flex-row gap-5 relative">
            {/* left side */}
            <div className="w-full xl:w-2/3 xl:sticky xl:top-30 self-start">
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
            <div className="w-full xl:w-1/3 ">
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
          </div>
          {/* bottom side */}
          <div className="w-full">
            <DetailBottom event={event} />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Page;
