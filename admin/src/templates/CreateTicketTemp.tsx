"use client";

import CategoryCreateTicket from "@/components/CategoryCreateTicket";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Calendar } from "@/components/ui/calendar";
import OnSellSection from "@/components/OnSellCreateTicket";
const LocationPicker = dynamic(() => import("@/components/LocationPicker"), {
  ssr: false,
});

function CreateTicketTemp() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    coordinates: "",
    price: "",
    quantity: "",
    onSell: false,
    off: "",
  });
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "onSell" ? value === "true" : value,
    }));
  };
  return (
    <div className="">
      <form className="flex flex-col gap-4 items-center justify-center">
        <div className="grid grid-cols-3 w-full gap-4 ">
          <div className=" gap-4 col-span-3 md:col-span-1 flex flex-col items-center justify-start w-full ">
            {/* Title */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Title </span>
                <ChevronDown />
              </label>
              <Input
                type="text"
                name="title"
                className="bg-slate-800 border-0"
              />
            </div>
            {/* Description */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Description </span>
                <ChevronDown />
              </label>
              <Textarea name="description" className="bg-slate-800 border-0" />
            </div>
            {/* Price */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Price</span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                name="price"
                className="bg-slate-800 border-0"
                onChange={handleInputChange}
              />
            </div>

            {/* Quantity */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Quantity</span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                name="quantity"
                className="bg-slate-800 border-0"
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full">
              <OnSellSection
                value={formData.onSell}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, onSell: val }))
                }
                offValue={formData.off}
                onOffChange={(val) =>
                  setFormData((prev) => ({ ...prev, off: val }))
                }
              />
            </div>
            <div className="w-full">
              <CategoryCreateTicket />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 h-full flex flex-col gap-4 justify-center items-center w-full">
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Location </span>
                <ChevronDown />
              </label>
              <LocationPicker
                onLocationSelect={(coords) =>
                  setFormData((prev) => ({
                    ...prev,
                    coordinates: JSON.stringify(coords),
                  }))
                }
              />
              <input
                type="hidden"
                onChange={handleInputChange}
                name="coordinates"
                value={formData.coordinates}
              />
            </div>
            <div className="w-full flex flex-col xl:flex-row items-center gap-4">
              <div className="w-full h-full flex flex-col gap-2">
                <label className="text-xl flex flex-row items-center">
                  <span>Ticket Background </span>
                  <ChevronDown />
                </label>
                <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl ">
                  <Image
                    src="/images.jpg"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>
                <label className="text-center relative mt-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition-colors">
                  Upload image
                  <Input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="text-xl flex flex-row items-center">
                  <span>Event Date </span>
                  <ChevronDown />
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md shadow-sm bg-slate-800 w-full"
                  captionLayout="dropdown"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTicketTemp;
