"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ticketColumns } from "@/components/tableColumns/ticketColums";
import { TableData } from "@/components/TableData";
import { useGetAlltickets } from "@/lib/api/main/queries";
import React from "react";

function page() {
  const { data: tickets, isLoading, isError, error } = useGetAlltickets();

  if (isLoading || !tickets) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="bg-slate-900 text-white min-h-screen py-10">
      <MaxWidthWrapper className="flex flex-col items-center">
        <div className="border-b-2 border-b-blue-500 w-full text-center pb-10">
          <h1 className="text-4xl font-bold">Ticket Table</h1>
        </div>
        <div className="py-10 w-full">
          <TableData
            columns={ticketColumns}
            data={tickets ?? []}
            filterKey="userEmail"
            filterPlaceholder="Filter by emails..."
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default page;
