import React from "react";
import { Skeleton } from "../ui/skeleton";

function ExploreSkeleton() {
  return (
    <div className="flex flex-col justify-between rounded-2xl h-96 dark:bg-slate-900 bg-white cursor-pointer overflow-hidden">
      <Skeleton className="h-4/5 w-full rounded-t-xl bg-zinc-400 " />
      <div className="flex-1 py-2 px-2 flex flex-col gap-2 justify-center">
        <Skeleton className="h-4 w-2/3 bg-zinc-400" />
        <Skeleton className="h-4 w-full rounded-xl bg-zinc-400" />
      </div>
    </div>
  );
}

export default ExploreSkeleton;
