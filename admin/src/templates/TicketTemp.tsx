"use client";

import CategoryCreateTicket from "@/components/CategoryCreateEvent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Calendar } from "@/components/ui/calendar";
import OnSellSection from "@/components/OnSellCreateTicket";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountrySelect from "@/components/CountrySelectCreateTemp";

const LocationPicker = dynamic(() => import("@/components/LocationPicker"), {
  ssr: false,
});

type TicketTempProps = {
  mode: "create" | "edit";
  initialData?: Partial<{
    title: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    onSell: boolean;
    off: number;
    country: string;
    address: string;
    coordinates: [number, number];
    eventDate: string; // ISO format
    image: string | File | null;
  }>;
  onSubmit: (formData: FormData) => void;
};

function TicketTemp({ mode, initialData, onSubmit }: TicketTempProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(
    initialData?.coordinates || null
  );
  const [date, setDate] = useState<Date | undefined>(
    initialData?.eventDate ? new Date(initialData.eventDate) : new Date()
  );
  const [previewImage, setPreviewImage] = useState<string | null>(
    typeof initialData?.image === "string"
      ? `http://localhost:5000/${initialData.image}`
      : null
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [country, setCountry] = useState<string>(initialData?.country || "");
  // const [address, setAddress] = useState<string>(initialData?.address || "");
  const [category, setCategory] = useState<string>(initialData?.category || "");
  const [onSell, setOnSell] = useState<boolean>(initialData?.onSell || false);
  const [offValue, setOffValue] = useState<string>(
    initialData?.off?.toString() || ""
  );

  const IMG =
    previewImage ??
    (initialData?.image
      ? `http://localhost:5000/${initialData.image}`
      : "https://github.com/shadcn.png");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    if (selectedFile) {
      formData.set("image", selectedFile);
    }
    if (coordinates) {
      formData.set("coordinates", JSON.stringify(coordinates));
    }

    if (country) {
      formData.set("country", country);
    }

    // if (address) {
    //   formData.set("address", address);
    // }
    if (date) {
      const localDateStr = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      formData.set("eventDate", localDateStr);
    }
    formData.set("category", category);
    formData.set("onSell", onSell.toString());
    if (offValue) {
      formData.set("off", offValue);
    }

    if (!selectedFile && initialData?.image) {
      formData.set("existingimage", initialData.image);
    }

    onSubmit(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <div className="grid grid-cols-3 w-full gap-4">
          <div className="gap-4 col-span-3 md:col-span-1 flex flex-col items-center justify-start w-full">
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
                defaultValue={initialData?.title}
              />
            </div>

            {/* Description */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Description </span>
                <ChevronDown />
              </label>
              <Textarea
                name="description"
                className="bg-slate-800 border-0"
                defaultValue={initialData?.description}
              />
            </div>

            {/* Country */}

            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Country</span>
                <ChevronDown />
              </label>
              <CountrySelect
                onSelect={setCountry}
                defaultValue={initialData?.country}
              />
              <Input type="hidden" name="country" value={country} />
            </div>

            {/* Address */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Address</span>
                <ChevronDown />
              </label>
              <Input
                type="text"
                name="address"
                className="bg-slate-800 border-0"
                defaultValue={initialData?.address}
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
                name="price"
                className="bg-slate-800 border-0"
                defaultValue={initialData?.price}
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
                defaultValue={initialData?.quantity}
              />
            </div>

            {/* OnSell Section */}
            <div className="w-full">
              <OnSellSection
                value={onSell}
                onChange={setOnSell}
                offValue={offValue}
                onOffChange={setOffValue}
              />
              <Input
                type="hidden"
                name="onSell"
                value={onSell ? "true" : "false"}
              />
              <Input type="hidden" name="off" value={offValue} />
            </div>

            {/* Category */}
            <div className="w-full">
              <CategoryCreateTicket
                selectedCategory={category}
                onCategoryChange={setCategory}
              />
              <Input type="hidden" name="category" value={category} />
            </div>
          </div>

          <div className="col-span-3 md:col-span-2 flex flex-col gap-4 items-center w-full">
            {/* Location */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Location </span>
                <ChevronDown />
              </label>
              <LocationPicker
                onLocationSelect={setCoordinates}
                defaultPosition={initialData?.coordinates}
              />
              <Input
                type="hidden"
                name="coordinates"
                value={coordinates ? JSON.stringify(coordinates) : ""}
              />
            </div>

            {/* Image Upload */}
            <div className="w-full flex flex-col xl:flex-row items-center gap-4">
              <div className="w-full h-full flex flex-col gap-2">
                <label className="text-xl flex flex-row items-center">
                  <span>Ticket Background </span>
                  <ChevronDown />
                </label>
                <Avatar className="w-full h-[470px] rounded-lg overflow-hidden">
                  <AvatarImage
                    className="rounded-lg object-cover w-full h-full"
                    src={IMG}
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <label className="text-center relative mt-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition-colors">
                  Upload image
                  <Input
                    name="image"
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Date */}
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
        <div className="mt-20 mb-10 flex justify-end w-full">
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-xl"
          >
            {mode === "edit" ? "Update Ticket" : "Create Ticket"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TicketTemp;
