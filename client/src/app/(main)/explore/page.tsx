import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ExploreNav from "@/templates/ExploreNav";
import ExploreTemp from "@/templates/ExploreTemp";
import React from "react";

function Page() {
  return (
    <div className="bg-slate-800 text-white flex flex-row relative">
      <div className="pl-10 pr-5 h-full w-1/5 sticky top-20 self-start bg-slate-900 border-r border-r-orange-500">
        <ExploreNav />
      </div>
      <MaxWidthWrapper className="w-4/5">
        <ExploreTemp />
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
