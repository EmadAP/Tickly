"use client";

import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COUNTRIES } from "@/lib/mock/mock";

export default function CountrySelect({
  onSelect,
  defaultValue,
}: {
  onSelect: (value: string) => void;
  defaultValue?: string;
}) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    defaultValue ?? null
  );

  const handleSelect = (value: string) => {
    const countryLabel =
      COUNTRIES.find((c) => c.value === value)?.label || value;
    setSelectedCountry(value);
    onSelect(countryLabel);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between bg-slate-800 hover:bg-slate-700 hover:text-white border-0 cursor-pointer",
            !selectedCountry && "text-white"
          )}
        >
          {selectedCountry
            ? COUNTRIES.find((c) => c.value === selectedCountry)?.label
            : "Select a country"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-0 bg-slate-700">
        <Command className="bg-slate-700 text-white ">
          <CommandInput placeholder="Search country..." className="h-9 " />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {COUNTRIES.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.label}
                  onSelect={() => handleSelect(country.value)}
                  className="text-white data-[selected=true]:bg-slate-900 data-[selected=true]:text-white"
                >
                  {country.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedCountry === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
