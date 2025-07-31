import { CartItem } from "@/lib/context/CartContext";
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
    <div className="flex flex-col w-full border-2 rounded-lg px-2 py-3 border-orange-500">
      <div className="font-bold text-orange-400">{item.event.title}</div>
      <div>Country: {item.event.country}</div>
      <div>City: {item.event.city}</div>
      <div>Section: {item.section.name}</div>
      <div>Price: ${price.toFixed(2)}</div>
      <div>Tickets: {item.total}</div>
      <button
        onClick={onRemove}
        className="mt-2 text-sm bg-red-500 hover:bg-red-400 px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
}

export default NavCartCard;
