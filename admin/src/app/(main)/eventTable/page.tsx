"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { eventColumns } from "@/components/tableColumns/eventColumns";
import { TableData } from "@/components/TableData";
import { useGetAllEvents } from "@/lib/api/main/queries";
import React from "react";

function Page() {
  const { data: events, isLoading, isError, error } = useGetAllEvents();

  if (isLoading || !events) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="bg-slate-900 text-white h-screen py-10">
      <MaxWidthWrapper className="flex flex-col items-center">
        <div className="border-b-2 border-b-blue-500 w-full text-center pb-10">
          <h1 className="text-4xl font-bold">Event Table</h1>
        </div>
        <div className="py-10 w-full">
          <TableData
            columns={eventColumns}
            data={events ?? []}
            filterKey="country"
            filterPlaceholder="Filter by country..."
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
