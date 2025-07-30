"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ExploreFilters } from "@/lib/types/types";
import ExploreSide from "@/templates/ExploreSide";
import ExploreTemp from "@/templates/ExploreTemp";
import React, { useState } from "react";

function Page() {
  const [filters, setFilters] = useState<ExploreFilters>({
    category: null,
    date: null,
    country: null,
    priceRange: [0, 500],
    onSale: false,
    available: false,
  });
  return (
    <div className="bg-slate-800 text-white flex flex-col lg:flex-row relative min-h-screen">
      <div className="px-10 lg:px-2 w-full lg:w-1/5 bg-slate-900 border-b border-orange-500 lg:border-r lg:border-r-orange-500">
        <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto">
          <ExploreSide filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <MaxWidthWrapper className="w-full lg:w-4/5">
        <ExploreTemp filters={filters} />
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
