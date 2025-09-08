import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";
import MainCarouselSkeleton from "./MainCarouselSkeleton";

export default function DetailPageSkeleton() {
  return (
    <div className="dark:bg-slate-900 bg-white">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-72 text-center border-b-2 border-orange-500 dark:bg-slate-950 bg-white">
          <Skeleton className="h-full rounded-none w-full bg-zinc-400 " />
        </div>
        <MaxWidthWrapper className="flex flex-col gap-10 my-15">
          <div className="flex flex-col xl:flex-row gap-5 relative">
            {/* left side */}
            <div className="w-full xl:w-2/3 xl:sticky xl:top-30 self-start">
              <Skeleton className="w-full h-[725px] rounded-lg bg-zinc-400" />
            </div>
            {/* right side */}
            <div className="w-full xl:w-1/3 space-y-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900 rounded-lg flex justify-between"
                >
                  <Skeleton className="w-full h-12 rounded-lg bg-zinc-400" />
                </div>
              ))}
            </div>
          </div>
          {/* bottom side */}
          <div className="bg-zinc-200 dark:bg-slate-800 rounded-xl py-4 px-2 ">
            <div className="relative mt-12  p-3 rounded-xl dark:bg-slate-800 bg-zinc-200">
              <Carousel opts={{ align: "start" }} className="w-full">
                <div className="absolute -top-13 right-1 mt-2 z-10 flex gap-4">
                  <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
                  <CarouselNext className="static w-auto h-auto p-2 border-0 bg-white text-slate-900 hover:bg-white hover:text-orange-500 cursor-pointer" />
                </div>

                <CarouselContent>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CarouselItem
                      key={i}
                      className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <div className="flex flex-col justify-between rounded-2xl h-96 dark:bg-slate-900 bg-white cursor-pointer overflow-hidden">
                        <Skeleton className="h-4/5 w-full rounded-t-xl bg-zinc-400 " />
                        <div className="flex-1 py-2 px-2 flex flex-col gap-2 justify-center">
                          <Skeleton className="h-4 w-2/3 bg-zinc-400" />
                          <Skeleton className="h-4 w-full rounded-xl bg-zinc-400" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </MaxWidthWrapper>
        
      </div>
    </div>
  );
}
