import React from "react";

function CheckoutRight() {
  return (
    <div className="bg-slate-800 rounded-2xl mt-4 p-5">
      <div className="w-full flex flex-col space-y-5">
        <div>total ticket</div>
        <div>total price without discount</div>
        <div>total discount</div>
        <div>total price with discount</div>
        <div></div>
      </div>
    </div>
  );
}

export default CheckoutRight;
