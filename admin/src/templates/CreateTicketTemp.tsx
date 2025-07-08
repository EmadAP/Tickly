import CategoryCreateTicket from "@/components/CategoryCreateTicket";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

function CreateTicketTemp() {
  return (
    <div className=" w-full">
      <form className="flex flex-col gap-4 items-center justify-center">
        <div className="grid grid-cols-3 w-full gap-4">
          <div className=" gap-4 col-span-3 md:col-span-1 flex flex-col items-center justify-start lg:justify-center w-full">
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Title </span>
                <ChevronDown />
              </label>
              <Input type="text" name="title" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-xl flex flex-row items-center">
                <span>Description </span>
                <ChevronDown />
              </label>
              <Textarea name="description" className="" />
            </div>
          </div>
          <div className=" col-span-3 md:col-span-2 flex flex-col gap-4 justify-center items-center w-full border-2 border-blue-500">
            <div>pic</div>
            <div>location</div>
          </div>
        </div>
        <div>
          <CategoryCreateTicket />
        </div>
      </form>
    </div>
  );
}

export default CreateTicketTemp;
