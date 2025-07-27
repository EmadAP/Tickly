"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GetEventById, useGetAllSections, useGetSectionById, useGetSectionsByEventId } from "@/lib/api/main/queries";
import DetailBanner from "@/templates/DetailBanner";
import DetailLeft from "@/templates/DetailLeft";
import DetailRight from "@/templates/DetailRight";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const params = useParams();
  const id = params.id as string;
  const { data: event, isLoading, isError, error } = GetEventById(id);
  const { data: sections } = useGetSectionsByEventId(id);

  if (isLoading || !event || !sections) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center">
        <DetailBanner event={event} />
        <MaxWidthWrapper className="flex flex-col xl:flex-row items-center gap-5">
          {/* left side */}
          <div className="w-2/3">
            <DetailLeft />
          </div>
          {/* right side */}
          <div className="w-full xl:w-1/3">
            <DetailRight event={event} sections={sections} />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Page;
