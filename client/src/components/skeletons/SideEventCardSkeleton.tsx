import { PartyPopper } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    
      <Skeleton className="h-40 w-full rounded-2xl bg-zinc-400" />
    
  );
}

export default function SideEventCardSkeleton() {
  return (
    <div className="flex-1/3 2xl:flex-1/4 dark:bg-slate-800 bg-zinc-200 rounded-2xl px-5 py-10">
      <div className="flex flex-row mb-10 justify-center items-center gap-8">
        <PartyPopper size={40} className="text-orange-500 -rotate-y-180" />
        <p className="text-4xl font-semibold">On Sell</p>
        <PartyPopper size={40} className="text-orange-500" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
