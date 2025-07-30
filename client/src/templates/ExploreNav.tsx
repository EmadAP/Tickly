import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Slider } from "@/components/ui/slider";
import { COUNTRIES } from "@/lib/mock";
import { Check } from "lucide-react";

import React from "react";

function ExploreNav() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full py-5 "
      defaultValue="item-1"
    >
      {/* Category filter */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Category
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul className="grid gap-2 ">
            {[
              "Concert",
              "Sports",
              "Theater",
              "Comedy",
              "Workshop",
              "Seminar",
            ].map((cat) => (
              <li key={cat}>
                <button className="cursor-pointer w-full text-left hover:bg-slate-800 rounded px-2 py-2">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Date Filter */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Date
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul className="grid gap-2 ">
            {[
              "Today",
              "Tomorrow",
              "this week",
              "This month",
              "Explore all",
            ].map((cat) => (
              <li key={cat}>
                <button className="cursor-pointer w-full text-left hover:bg-slate-800 rounded px-2 py-2">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Location Filter */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Country
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <Command className="bg-slate-700 text-white ">
            <CommandInput placeholder="Search country..." className="h-9 " />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {COUNTRIES.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.label}
                    // onSelect={() => handleSelect(country.value)}
                    className="text-white data-[selected=true]:bg-slate-900 data-[selected=true]:text-white"
                  >
                    {country.label}
                    <Check
                    // className={cn(
                    //   "ml-auto h-4 w-4",
                    //   selectedCountry === country.value
                    //     ? "opacity-100"
                    //     : "opacity-0"
                    // )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </AccordionContent>
      </AccordionItem>

      {/* Price Range */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Price
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div className="p-4 ">
            <Slider defaultValue={[20, 200]} max={500} step={5} className="" />
            <p className="text-xs text-gray-500 mt-2">Select min/max price</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Toggles: On Sale & Availability */}
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Options
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <Checkbox id="sale" /> On Sale
            </label>
            <label className="flex items-center gap-2">
              <Checkbox id="available" /> Only Available
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ExploreNav;
