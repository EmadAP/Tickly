import { Skeleton } from "../ui/skeleton";

export default function EventCardSkeleton() {
  return (
    <div className="p-4 rounded-2xl bg-slate-800  space-y-4">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-10 w-full rounded-xl" />
    </div>
  );
}
