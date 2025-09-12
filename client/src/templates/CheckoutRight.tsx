"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/useCart";
import React from "react";

function CheckoutRight() {
  const { totalTickets, totalRawPrice, totalDiscount, totalPrice } = useCart();

  return (
    <div className="flex flex-col gap-5 px-4 lg:px-0">
      <div className="dark:bg-slate-800 bg-zinc-200 rounded-2xl mt-4 p-5 dark:text-white text-black  space-y-4">
        <div className="flex justify-between">
          <span>Total tickets:</span>
          <span>{totalTickets}</span>
        </div>

        <div className="flex justify-between">
          <span>Total price (no discount):</span>
          <span>{totalRawPrice.toFixed(2)} $</span>
        </div>

        <div className="flex justify-between text-green-400">
          <span>Total discount:</span>
          <span>-{totalDiscount.toFixed(2)} $</span>
        </div>

        <div className="flex justify-between text-lg font-bold border-t border-slate-600 pt-3">
          <span>Total price (with discount):</span>
          <span>{totalPrice.toFixed(2)} $</span>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-green-500 text-white hover:bg-green-400 w-fit text-lg font-semibold cursor-pointer ">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CheckoutRight;
