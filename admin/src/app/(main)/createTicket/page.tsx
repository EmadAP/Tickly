import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CreateTicketTemp from "@/templates/CreateTicketTemp";
import React from "react";

function Page() {
  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center  justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Create Tickets</h1>
          </div>
          <div className="w-full pt-10">
            <CreateTicketTemp />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
