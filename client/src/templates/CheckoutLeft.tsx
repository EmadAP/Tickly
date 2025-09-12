"use client";

import { Ticket } from "@/components/CheckoutLeftCard";
import CheckoutLeftSkeleton from "@/components/skeletons/CheckoutLeftSkeleton";
import { useCart } from "@/lib/hooks/useCart";

import React from "react";

const CheckoutLeft = () => {
  const { cart, isLoading } = useCart();

  if (isLoading || !cart) return <CheckoutLeftSkeleton />;
  return (
    <div className="dark:bg-slate-900 bg-white lg:px-5 my-10 lg:my-0">
      <div className="w-full">
        <div className="flex flex-col gap-10 w-full">
          {cart.map((item) => (
            <Ticket
              key={item.section._id}
              eventTitle={item.event.title}
              section={item.section.name}
              country={item.event.country}
              city={item.event.city}
              date={new Date(item.event.eventDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
              time={item.event.eventTime}
              price={item.section.price}
              discount={item.section.discountPercent}
              total={item.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
