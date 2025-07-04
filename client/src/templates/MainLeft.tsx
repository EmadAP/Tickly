import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";

function MainLeft() {
  return (
    <div className="flex-2/3 2xl:flex-3/4 py-20 border-b-2 border-orange-500 lg:border-b-0 ">
      <div className="mb-10 gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <button className="bg-slate-900 hover:bg-slate-700 p-3  rounded-2xl flex flex-wrap items-center justify-between">
          <span className="text-xl font-semibold">Today</span>
          <CalendarDays className="text-orange-500" />
        </button>
        <button className="bg-slate-900 hover:bg-slate-700 p-3  rounded-2xl flex flex-wrap items-center justify-between">
          <span className="text-xl font-semibold">Tomorrow</span>
          <CalendarDays className="text-orange-500" />
        </button>
        <button className="bg-slate-900 hover:bg-slate-700 p-3  rounded-2xl flex flex-wrap items-center justify-between">
          <span className="text-xl font-semibold">This week</span>
          <CalendarDays className="text-orange-500" />
        </button>
        <button className="bg-slate-900 hover:bg-slate-700 p-3  rounded-2xl flex flex-wrap items-center justify-between">
          <span className="text-xl font-semibold">Explore all</span>
          <CalendarDays className="text-orange-500" />
        </button>
      </div>
      <div className="border-b-2 border-orange-500 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div className="flex flex-col rounded-2xl h-96 bg-slate-900 group">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/idk/image5.jpg"
              alt="image"
              width={700}
              height={400}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="py-2 px-2 flex flex-col gap-2">
            <p className="text-lg font-semibold">event</p>
            <p>time</p>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl h-96 bg-slate-900 group">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/idk/image5.jpg"
              alt="image"
              width={700}
              height={400}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="py-2 px-2 flex flex-col gap-2">
            <p className="text-lg font-semibold">event</p>
            <p>time</p>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl h-96 bg-slate-900 group">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/idk/image5.jpg"
              alt="image"
              width={700}
              height={400}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="py-2 px-2 flex flex-col gap-2">
            <p className="text-lg font-semibold">event</p>
            <p>time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
