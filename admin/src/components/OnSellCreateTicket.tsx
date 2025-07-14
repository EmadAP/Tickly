"use client";

import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  offValue: string;
  onOffChange: (value: string) => void;
};

export default function OnSellSection({
  value,
  onChange,
  offValue,
  onOffChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* OnSell */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-xl flex flex-row items-center">
          <span>OnSell</span>
          <ChevronDown />
        </label>
        <div className="flex flex-row gap-4">
          {/* Yes */}
          <label
            className={`flex justify-center items-center w-1/2 py-2 px-4 rounded-lg border-2 cursor-pointer
            ${
              value === true
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-slate-800 bg-slate-800 hover:border-blue-400"
            }`}
          >
            <Input
              type="radio"
              name="onSell"
              value="true"
              onChange={() => onChange(true)}
              className="hidden"
            />
            <span>Yes</span>
          </label>

          {/* No */}
          <label
            className={`flex justify-center items-center w-1/2 py-2 px-4 rounded-lg border-2 cursor-pointer
            ${
              value === false
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-slate-800 bg-slate-800 hover:border-blue-400"
            }`}
          >
            <Input
              type="radio"
              name="onSell"
              value="false"
              onChange={() => onChange(false)}
              className="hidden"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Off */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-xl flex flex-row items-center">
          <span>Off</span>
          <ChevronDown />
        </label>
        <Input
          type="number"
          name="off"
          placeholder="%"
          className={`bg-slate-800 border-0 ${
            value ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onChange={(e) => onOffChange(e.target.value)}
          value={offValue}
          disabled={!value}
        />
      </div>
    </div>
  );
}
