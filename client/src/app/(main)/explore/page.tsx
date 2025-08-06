"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ExploreFilters } from "@/lib/types/types";
import ExploreSide from "@/templates/ExploreSide";
import ExploreTemp from "@/templates/ExploreTemp";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const searchParams = useSearchParams();
  const initialDate = searchParams.get("date");
  const initialCategory = searchParams.get("category");
  const initialCountry = searchParams.get("country");

  const [filters, setFilters] = useState<ExploreFilters>({
    category: null,
    date: null,
    country: null,
    priceRange: [0, 500],
    onSale: false,
    available: false,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      date: initialDate || prev.date,
      category: initialCategory || prev.category,
      country: initialCountry || prev.country,
    }));
  }, [initialDate, initialCategory, initialCountry]);

  return (
    <div className="bg-slate-900 text-white relative min-h-screen">
      <MaxWidthWrapper className="flex flex-col lg:flex-row gap-10 max-w-screen-4xl">
        <div className="w-full lg:w-1/5 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="bg-slate-800 mt-10  lg:my-10 px-5 rounded-2xl ">
            <ExploreSide filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="w-full lg:w-4/5 bg-slate-900">
          <ExploreTemp filters={filters} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
