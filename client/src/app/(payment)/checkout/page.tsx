import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CheckoutBottom from "@/templates/CheckoutBottom";
import CheckoutLeft from "@/templates/CheckoutLeft";
import CheckoutRight from "@/templates/CheckoutRight";
import CheckoutTop from "@/templates/CheckoutTop";
import React from "react";

function Page() {
  return (
    <div className="dark:text-white text-black bg-white dark:bg-slate-900 ">
      <MaxWidthWrapper className="flex flex-col  gap-10 my-15">
        {/* top side */}
        <div className="w-full">
          <CheckoutTop />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 relative">
          {/* left side */}
          <div className="w-full lg:w-2/3">
            <CheckoutLeft />
          </div>
          {/* right side */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-30 self-start">
            <CheckoutRight />
          </div>
        </div>
        {/* bottom side */}
        <div className="w-full">
          <CheckoutBottom />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
