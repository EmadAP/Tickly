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
import { ExploreFilters } from "@/lib/types/types";
import { Check, Delete } from "lucide-react";
import React from "react";

interface ExploreSideProps {
  filters: ExploreFilters;
  setFilters: React.Dispatch<React.SetStateAction<ExploreFilters>>;
}

function ExploreSide({ filters, setFilters }: ExploreSideProps) {
  const defaultFilters: ExploreFilters = {
    category: null,
    date: null,
    country: null,
    priceRange: [0, 500],
    onSale: false,
    available: false,
  };

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
          {[
            "Concert",
            "Sports",
            "Theater",
            "Comedy",
            "Workshop",
            "Seminar",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  category: f.category === cat ? null : cat,
                }))
              }
              className={`block w-full text-left px-2 py-2 rounded hover:bg-slate-800 ${
                filters.category === cat ? "bg-orange-500 text-white" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Date Filter */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg flex items-center hover:text-orange-500">
          Date
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {["Today", "This week", "This month", "This year"].map((date) => (
            <button
              key={date}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  date: f.date === date ? null : date,
                }))
              }
              className={`block w-full text-left px-2 py-2 rounded hover:bg-slate-800 ${
                filters.date === date ? "bg-orange-500 text-white" : ""
              }`}
            >
              {date}
            </button>
          ))}
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
                    onSelect={() =>
                      setFilters((f) => ({ ...f, country: country.label }))
                    }
                    className="text-white data-[selected=true]:bg-slate-900 data-[selected=true]:text-white"
                  >
                    {country.label}
                    {filters.country === country.value && (
                      <Check className="h-4 w-4" />
                    )}
                    {/* <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedCountry === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                    /> */}
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
            <Slider
              defaultValue={filters.priceRange}
              max={500}
              step={5}
              onValueChange={(val) =>
                setFilters((f) => ({
                  ...f,
                  priceRange: [val[0], val[1]] as [number, number],
                }))
              }
            />
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
              <Checkbox
                checked={filters.onSale}
                onCheckedChange={(checked) =>
                  setFilters((f) => ({ ...f, onSale: !!checked }))
                }
              />
              On Sale
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={filters.available}
                onCheckedChange={(checked) =>
                  setFilters((f) => ({ ...f, available: !!checked }))
                }
              />
              Only Available
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger
          onClick={() => setFilters(defaultFilters)}
          hideIcon
          className=" text-lg flex items-center text-slate-900 px-2 bg-orange-500 py-2 my-2"
        >
          Clear filters <Delete size={15} />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ExploreSide;
