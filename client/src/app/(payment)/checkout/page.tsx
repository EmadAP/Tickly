import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CheckoutBottom from "@/templates/CheckoutBottom";
import CheckoutLeft from "@/templates/CheckoutLeft";
import CheckoutRight from "@/templates/CheckoutRight";
import CheckoutTop from "@/templates/CheckoutTop";
import React from "react";

function Page() {
  return (
    <div className="text-white bg-slate-900 h-screen">
      <MaxWidthWrapper className="flex flex-col items-center gap-5 py-10">
        {/* top side */}
        <div className="w-full">
          <CheckoutTop />
        </div>
        <div className="flex flex-row gap-5 w-full">
          {/* left side */}
          <div className="flex-2/3">
            <CheckoutLeft />
          </div>
          {/* right side */}
          <div className="flex-1/3">
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
