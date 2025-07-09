import CategoryCreateTicket from "@/components/CategoryCreateTicket";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import React from "react";

function CreateTicketTemp() {
  return (
    <div className="">
      <form className="flex flex-col gap-4 items-center justify-center">
        <div className="grid grid-cols-3 w-full gap-4">
          <div className=" gap-4 col-span-3 md:col-span-1 flex flex-col items-center justify-start lg:justify-center w-full">
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
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Description </span>
                <ChevronDown />
              </label>
              <Textarea name="description" className="bg-slate-800 border-0" />
            </div>
          </div>
          <div className=" col-span-3 md:col-span-2 flex flex-col gap-4 justify-center items-center w-full border-2 border-blue-500">
            <div>pic</div>
            <div>location</div>
          </div>
        </div>
        <div className="w-full">
          <CategoryCreateTicket />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1">eventDate</div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 grid lg:grid-cols-2 gap-4">
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Price </span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                name="price"
                className="bg-slate-800 border-0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Quantity </span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                name="quantity"
                className="bg-slate-800 border-0"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>OnSell </span>
                <ChevronDown />
              </label>
              <div className="flex flex-row gap-4 items-center ">
                <label
                  htmlFor="yes"
                  className="bg-slate-800 py-2 rounded-lg px-4 w-1/2 flex flex-row justify-center items-center gap-4"
                >
                  <Checkbox
                    name="onSell"
                    id="yes"
                    className="bg-slate-800 border-0"
                  />
                  <span>Yes</span>
                </label>

                <label
                  htmlFor="no"
                  className="bg-slate-800 py-2 rounded-lg px-4 w-1/2 flex flex-row justify-center items-center gap-4"
                >
                  <Checkbox
                    name="onSell"
                    id="no"
                    className="bg-slate-800 border-0"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Off </span>
                <ChevronDown />
              </label>
              <Input
                type="number"
                name="off"
                className="bg-slate-800 border-0"
                placeholder="%"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTicketTemp;
