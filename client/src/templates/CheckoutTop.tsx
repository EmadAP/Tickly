import { CheckoutTopHistory } from "@/components/CheckoutTopHistory";
import React from "react";

function CheckoutTop() {
  return (
    <div className=" bg-slate-800 rounded-2xl p-10 pt-15">
      <div className=" flex flex-col md:flex-row  gap-5">
        <div className="w-full md:w-1/3 flex flex-col justify-between items-start ">
          <div className="w-full px-2 ">
            <div className="text-3xl font-semibold text-orange-500">username</div>
          </div>
          <div className="w-full bg-slate-900 px-2 py-4 rounded-2xl">
            <div className="">
              <div>email</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-slate-900 px-2 py-4 rounded-2xl">
          <CheckoutTopHistory />
        </div>
      </div>
    </div>
  );
}

export default CheckoutTop;
