"use client";

import React, { useState } from "react";
import NavCartCard from "./NavCartCard";
import { useCart } from "@/lib/hooks/useCart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/context/UserContext";
import Popup from "./Popup";
import NavAuth from "./NavAuth";
import { useQueryClient } from "@tanstack/react-query";
import { CreatePendingTickets } from "@/lib/api/main/mutations";

interface NavSideCartProps {
  isOpen: boolean;
}

function NavSideCart({ isOpen }: NavSideCartProps) {
  const router = useRouter();
  const { cart, totalPrice, removeFromCart, isLoading } = useCart();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const {
    mutate: createTickets,
    isError,
    error,
    isPending,
  } = CreatePendingTickets();

  const handleCheckoutClick = () => {
    if (!user) {
      setShowAuthPopup(true);
      return;
    }

    if (cart.length === 0) return;

    const items = cart.map((item) => ({
      eventId: item.event._id,
      sectionId: item.section._id,
      quantity: item.total,
    }));

    createTickets(items, {
      onSuccess: () => {
        queryClient.setQueryData(["hasCreatedTickets"], true);
        router.push("/checkout");
      },
    });
  };

  return (
    <>
      <div
        className={`fixed border-l-2 border-l-orange-500 inset-y-0 z-20 right-0 top-20 w-96 dark:bg-slate-800 bg-white dark:text-white text-black transform transition-transform duration-300 ease-in-out shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-2 py-4">
          {/* Cart items area */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {isLoading ? (
              <p className="text-center text-gray-400">Loading cart...</p>
            ) : cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div className="relative h-52 w-40 mb-4 mr-5">
                  <Image
                    src="/idk/emptyCart.png"
                    fill
                    alt="empty cart"
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-gray-400">Cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <NavCartCard
                  key={item.section._id}
                  item={item}
                  onRemove={() => removeFromCart(item.section._id)}
                />
              ))
            )}
          </div>

          {/* Checkout footer */}
          {!isLoading && cart.length > 0 && (
            <div className="border-t border-orange-500 pt-4 mt-4">
              <p className="text-lg font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={handleCheckoutClick}
                className="mt-3 w-full bg-orange-500 py-2 rounded hover:bg-orange-400 text-white cursor-pointer"
                disabled={isPending}
              >
                {isPending ? "Reserving..." : "Checkout"}
              </button>

              {isError && (
                <p className="text-red-500 mt-2 text-sm">
                  {(error as any)?.response?.data?.message ||
                    "Reservation failed"}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Auth Popup */}
      <Popup isOpen={showAuthPopup} onClose={() => setShowAuthPopup(false)}>
        <NavAuth onClose={() => setShowAuthPopup(false)} />
      </Popup>
    </>
  );
}

export default NavSideCart;
