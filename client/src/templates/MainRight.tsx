import { PartyPopper } from "lucide-react";
import Image from "next/image";
import React from "react";

function MainRight() {
  return (
    <div className="flex-1/3 2xl:flex-1/4 mb-20 mt-10 lg:mt-20">
      <div className="flex flex-row mb-10 justify-center items-center gap-8">
        <PartyPopper size={40} className="text-orange-500 -rotate-y-180 " />
        <p className="text-4xl font-semibold ">On Sell</p>
        <PartyPopper size={40} className="text-orange-500 " />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/idk/image1.jpg"
              alt="Background"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-center text-lg">event</p>
            <p className="text-center">time</p>
          </div>
        </div>
        <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/idk/image2.jpg"
              alt="Background"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-center text-lg">event</p>
            <p className="text-center">time</p>
          </div>
        </div>
        <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/idk/image3.jpg"
              alt="Background"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-center text-lg">event</p>
            <p className="text-center">time</p>
          </div>
        </div>
        <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/idk/image4.jpg"
              alt="Background"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 z-0" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-center text-lg">event</p>
            <p className="text-center">time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
