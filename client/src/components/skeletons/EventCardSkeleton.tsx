import { ArrowBigRightDash, CalendarDays } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { Button } from "../ui/button";

function CardSkeleton() {
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

export default function EventCardSkeleton() {
  return (
    <div className="flex-2/3 2xl:flex-3/4 px-5 py-10 dark:bg-slate-800 bg-zinc-200 rounded-2xl ">
      {/* Date filter buttons */}
      <div className="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {["Today", "This week", "This month", "Explore all"].map((label) => (
          <button
            key={label}
            className="font-comic p-3 rounded-2xl flex flex-wrap items-center justify-between cursor-pointer dark:bg-slate-900 bg-white dark:hover:bg-slate-700 hover:bg-zinc-100"
          >
            <span className="text-xl font-semibold">{label}</span>
            <CalendarDays className="text-orange-500" />
          </button>
        ))}
      </div>

      <div className="border-b-2 border-orange-500 mb-10" />

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      {/* Explore more link */}
      <div className="flex items-center justify-center pt-5">
        <button className="cursor-pointer text-2xl hover:text-orange-500 flex flex-row items-center gap-2">
          <span>Explore more</span>
          <ArrowBigRightDash size={30} />
        </button>
      </div>
    </div>
  );
}
