"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GetTicketById } from "@/lib/api/main/queries";
import DetailBanner from "@/templates/DetailBanner";
import DetailLeft from "@/templates/DetailLeft";
import DetailRight from "@/templates/DetailRight";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const params = useParams();
  const id = params.id as string;
  const { data: ticket, isLoading, isError, error } = GetTicketById(id);

  if (isLoading || !ticket) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center">
        <DetailBanner ticket={ticket} />
        <MaxWidthWrapper className="flex flex-col xl:flex-row items-center">
          {/* left side */}

          <DetailLeft ticket={ticket} />

          {/* right side */}

          <DetailRight ticket={ticket} />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

export default Page;
