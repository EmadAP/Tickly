import { Skeleton } from "../ui/skeleton";
import MainCarouselSkeleton from "./MainCarouselSkeleton";

export default function DetailPageSkeleton() {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center">
        <div className="w-full h-80 bg-slate-800">
          <Skeleton className="w-full h-full rounded-none" />
        </div>

        <div className="max-w-7xl w-full px-4 flex flex-col gap-10 my-15">
          <div className="flex flex-col xl:flex-row gap-5 relative">
            <div className="w-full xl:w-2/3 h-[690px] bg-slate-800 rounded-lg">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
            <div className="w-full xl:w-1/3 space-y-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900 rounded-lg flex justify-between"
                >
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full py-10 border-t-2 border-orange-500 space-y-12">
            {Array.from({ length: 2 }).map((_, i) => (
              <MainCarouselSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
