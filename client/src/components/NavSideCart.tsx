import React from "react";
import NavCartCard from "./NavCartCard";
import { useCart } from "@/lib/context/CartContext";
import Image from "next/image";

interface NavSideCartProps {
  isOpen: boolean;
}

function NavSideCart({ isOpen }: NavSideCartProps) {
  const { cart, totalPrice, removeFromCart } = useCart();

  return (
    <div
      className={`fixed border-l-2 border-l-orange-500 inset-y-0 z-20 right-0 top-20 w-96 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out shadow-lg ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full px-2 py-4">
        {/* Cart items area */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-4">
              <div className="relative h-52 w-40 mb-4 mr-5">
                <Image
                  src="/idk/emptyCart.png"
                  fill
                  alt="empty card"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-400">Cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <NavCartCard
                key={item.sectionId}
                item={item}
                onRemove={() => removeFromCart(item.sectionId)}
              />
            ))
          )}
        </div>

        {/* Checkout footer */}
        {cart.length > 0 && (
          <div className="border-t border-orange-500 pt-4 mt-4">
            <p className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => {}}
              className="mt-3 w-full bg-orange-500 py-2 rounded hover:bg-orange-400"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavSideCart;
