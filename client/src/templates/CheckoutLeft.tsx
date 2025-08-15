"use client"

import { CheckoutLeftDetails } from "@/components/CheckoutLeftDetails";
import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/context/CartContext";
import { useUser } from "@/lib/context/UserContext";
import { CreatePendingTickets } from "@/lib/api/main/mutations";

const CheckoutLeft = () => {
  const { cart } = useCart();
  const { user } = useUser();
  const [ticketsCreated, setTicketsCreated] = useState(false);

  const {
    mutate: createTickets,
    
    isError,
    error,
  } = CreatePendingTickets();

  useEffect(() => {
    if (!user || ticketsCreated || cart.length === 0) return;

    const items = cart.map((item) => ({
      eventId: item.eventId,
      sectionId: item.sectionId,
      quantity: item.total,
    }));

    createTickets(items, {
      onSuccess: () => setTicketsCreated(true),
    });
  }, [user, cart, ticketsCreated]);

  return (
    <div className="bg-slate-800 rounded-2xl p-5">
      {/* {isLoading && <p className="text-white">Reserving your tickets...</p>} */}
      {isError && (
        <p className="text-red-500">
          {(error as any)?.response?.data?.message || "Reservation failed"}
        </p>
      )}
      {ticketsCreated && (
        <p className="text-green-500">Tickets reserved successfully ✅</p>
      )}
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <CheckoutLeftDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
