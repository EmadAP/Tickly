import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CheckoutLeft from "@/templates/CheckoutLeft";
import CheckoutRight from "@/templates/CheckoutRight";
import CheckoutTop from "@/templates/CheckoutTop";
import React from "react";

function Page() {
  return (
    <div className="text-white bg-slate-900 ">
      <MaxWidthWrapper className="flex flex-col items-center gap-5 py-10">
        {/* top side */}
        <div className="w-full">
          <CheckoutTop />
        </div>
        <div className="flex flex-row  gap-5 w-full">
          {/* left side */}
          <div className="flex-2/3">
            <CheckoutLeft />
          </div>
          {/* right side */}
          <div className="flex-1/3"><CheckoutRight /></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;
