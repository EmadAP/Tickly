import { CheckoutLeftDetails } from "@/components/CheckoutLeftDetails";
import React from "react";

function CheckoutLeft() {
  return (
    <div className="bg-slate-800 rounded-2xl p-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <CheckoutLeftDetails />
        </div>
      </div>
    </div>
  );
}

export default CheckoutLeft;
