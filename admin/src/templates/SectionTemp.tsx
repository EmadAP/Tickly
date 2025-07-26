"use client";

import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OnSellSection from "@/components/OnSellCreateSection";
import { Button } from "@/components/ui/button";

type SectionFormData = {
  name: string;
  price: number;
  quantity: number;
  onSell: boolean;
  discountPercent?: number;
};

type SectionTempProps = {
  mode: "create" | "edit";
  initialData?: Partial<SectionFormData>;
  onSubmit: (data: SectionFormData) => void;
};

function SectionTemp({ mode, initialData = {}, onSubmit }: SectionTempProps) {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || 0);
  const [quantity, setQuantity] = useState(initialData.quantity || 0);
  const [onSell, setOnSell] = useState<boolean>(initialData.onSell || false);
  const [discountPercent, setDiscountPercent] = useState<string>(
    initialData.discountPercent?.toString() || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: SectionFormData = {
      name,
      price,
      quantity,
      onSell,
      discountPercent: onSell && discountPercent ? Number(discountPercent) : 0,
    };

    onSubmit(data);
  };

  return (
    <div className="h-full mx-auto w-full max-w-screen-lg px-3 md:px-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Section Name </span>
                <ChevronDown />
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-800 border-0"
              />
            </div>

            {/* Price */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Price</span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="bg-slate-800 border-0"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              {/* Quantity */}
              <label className="text-xl flex flex-row items-center">
                <span>Quantity</span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="bg-slate-800 border-0"
              />
            </div>
          </div>

          {/* OnSell Section */}
          <div className="w-full">
            <OnSellSection
              value={onSell}
              onChange={setOnSell}
              discountValue={discountPercent}
              onDiscountChange={setDiscountPercent}
            />
          </div>
        </div>
        <div className="mt-10 mb-10 flex justify-end w-full">
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-xl"
          >
            {mode === "edit" ? "Update Section" : "Create Section"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SectionTemp;
