import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function MainCarouselSkeleton() {
  return (
    <div className="relative border-2 border-orange-500 p-3 rounded-xl bg-slate-800">
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1"
          >
            <div className="p-4 rounded-2xl bg-slate-800 space-y-4">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
