import { CheckoutLeftDetails } from "@/components/CheckoutLeftDetails";
import React from "react";

const CheckoutLeft = () => {
  return (
    <div className="dark:bg-slate-900 bg-white lg:px-5 my-10 lg:my-0">
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <CheckoutLeftDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
