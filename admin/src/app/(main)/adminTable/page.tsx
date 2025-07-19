"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { adminColumns } from "@/components/tableColumns/adminColumns";
import { TableData } from "@/components/TableData";
import { GetAllAdmins } from "@/lib/api/main/queries";
import React from "react";

function Page() {
  const { data: admins, isLoading, isError, error } = GetAllAdmins();

  if (isLoading || !admins) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="bg-slate-900 text-white h-screen py-10">
      <MaxWidthWrapper className="flex flex-col items-center">
        <div className="border-b-2 border-b-blue-500 w-full text-center pb-10">
          <h1 className="text-4xl font-bold">Admin Table</h1>
        </div>
        <div className="py-10 w-full">
          <TableData
            columns={adminColumns}
            data={admins}
            filterKey="username"
            filterPlaceholder="Search admins..."
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
