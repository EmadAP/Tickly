"use client";

import { useUser } from "@/lib/context/UserContext";
import React from "react";

function CheckoutTop() {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="text-4xl font-semibold pb-4 text-orange-500 capitalize w-full">
        {user?.username}
      </div>
      <div className="w-full pb-4 pl-2 flex flex-row items-center gap-2">
        <div className="text-2xl">Email : </div>
        <div>{user?.email}</div>
      </div>
    </div>
  );
}

export default CheckoutTop;
