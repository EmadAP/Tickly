import BannerBg from "@/components/BannerBg";
import BannerSearch from "@/components/BannerSearch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

function MainBanner() {
  return (
    <div className="relative w-full text-center border-b-2 border-orange-500 bg-slate-950">
      <BannerBg />
      <MaxWidthWrapper>
        <div className="flex flex-col relative z-10 bg-transparent">
          <h1 className="leading-15 text-5xl lg:text-7xl font-extrabold py-20 text-center text-white drop-shadow-xl">
            The <span className="text-orange-500">safest</span> way to buy
            Tickets
          </h1>
          <BannerSearch />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default MainBanner;
