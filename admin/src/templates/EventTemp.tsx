"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountrySelect from "@/components/CountrySelectEventTemp";
import CategoryCreateEvent from "@/components/CategoryCreateEvent";
import { Button } from "@/components/ui/button";
import SectionComp from "@/components/SectionComp";

const LocationPicker = dynamic(() => import("@/components/LocationPicker"), {
  ssr: false,
});

type EventTempProps = {
  mode: "create" | "edit";
  initialData?: Partial<{
    _id: string;
    title: string;
    description: string;
    category: string;
    country: string;
    city: string;
    address: string;
    coordinates: [number, number];
    image: string | File | null;
    eventDate: string;
    eventTime: string;
  }>;
  onSubmit: (formData: FormData) => void;
};

function EventTemp({ mode, initialData, onSubmit }: EventTempProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [coordinates, setCoordinates] = useState<[number, number] | null>(
    initialData?.coordinates || null
  );
  const [date, setDate] = useState<Date | undefined>(
    initialData?.eventDate ? new Date(initialData.eventDate) : new Date()
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    typeof initialData?.image === "string"
      ? `http://localhost:5000/${initialData.image}`
      : null
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [country, setCountry] = useState<string>(initialData?.country || "");
  const [category, setCategory] = useState<string>(initialData?.category || "");

  const IMG =
    imagePreview ??
    (initialData?.image
      ? `http://localhost:5000/${initialData.image}`
      : "https://github.com/shadcn.png");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    if (date) {
      const dateStr = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      formData.set("eventDate", dateStr);
    }
    formData.set("category", category);

    if (!selectedFile && initialData?.image) {
      formData.set("existingimage", initialData.image);
    }

    onSubmit(formData);
  };

  return (
    <>
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

            {/* City */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>City</span>
                <ChevronDown />
              </label>
              <Input
                type="text"
                name="city"
                className="bg-slate-800 border-0"
                defaultValue={initialData?.city}
              />
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

            {/* Time */}
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Event Time </span>
                <ChevronDown />
              </label>
              <Input
                type="time"
                name="eventTime"
                className="bg-slate-800 border-0"
                defaultValue={initialData?.eventTime}
              />
            </div>

            {/* Category */}
            <div className="w-full">
              <CategoryCreateEvent
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

            <div className="w-full flex flex-col xl:flex-row items-center gap-4">
              {/* Image Upload */}
              <div className="w-full h-full flex flex-col gap-2">
                <label className="text-xl flex flex-row items-center">
                  <span>Ticket Background </span>
                  <ChevronDown />
                </label>
                <Avatar className="w-full h-[300px] rounded-lg overflow-hidden">
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
              <div className="flex flex-col h-full  gap-2">
                <label className="text-xl flex flex-row items-center">
                  <span>Event Date </span>
                  <ChevronDown />
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md shadow-sm bg-slate-800"
                  captionLayout="dropdown"
                />
              </div>
            </div>
          </div>
        </div>

        {/* submit button */}
        <div className="my-10 flex justify-center w-full">
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-xl w-1/3"
          >
            {mode === "edit" ? "Update Ticket" : "Create Ticket"}
          </Button>
        </div>
      </form>
      {mode === "edit" && initialData?._id && (
        <div className="w-full mt-10">
          <SectionComp eventId={initialData._id} />
        </div>
      )}
    </>
  );
}

export default EventTemp;
