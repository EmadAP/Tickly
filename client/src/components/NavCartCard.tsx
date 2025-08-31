import { CartItem } from "@/lib/types/types";
import { X } from "lucide-react";
import React from "react";

interface NavCartCardProps {
  item: CartItem;
  onRemove: () => void;
}

function NavCartCard({ item, onRemove }: NavCartCardProps) {
  const price = item.section.onSell
    ? item.section.price -
      (item.section.price * (item.section.discountPercent || 0)) / 100
    : item.section.price;

  return (
    <div className="flex flex-col w-full rounded-lg px-2 py-3  bg-slate-900">
      <div className="flex flex-row items-center justify-between">
        <p className=" text-lg font-bold text-orange-400">{item.event.title}</p>
        <button
          onClick={onRemove}
          className="text-red-500 hover:bg-slate-800 px-1 py-1 rounded-full cursor-pointer"
        >
          <X />
        </button>
      </div>
      <p className="text-lg">
        <span className="text-sm">Location: </span>
        {item.event.country}, {item.event.city}
      </p>

      <p className="text-lg">
        <span className="text-sm">Section:</span> {item.section.name}
      </p>
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm">
          Price per ticket:{" "}
          <span className="text-lg text-green-500">${price.toFixed(2)}</span>
        </p>
        <p>Tickets: {item.total}</p>
      </div>
    </div>
  );
}

export default NavCartCard;
