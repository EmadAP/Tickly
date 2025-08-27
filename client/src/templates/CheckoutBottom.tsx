import { CheckoutBottomDetails } from "@/components/CheckoutBottomDetails";
import React from "react";

const CheckoutBottom = () => {
  return (
    <div className=" px-5 mt-10 pb-5 pt-20 bg-slate-800 rounded-2xl">
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <CheckoutBottomDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckoutBottom;
