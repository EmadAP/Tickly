import { Skeleton } from "../ui/skeleton";

export default function SideEventCardSkeleton() {
  return (
    <div className="p-4 rounded-2xl bg-slate-800 space-y-4">
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}
