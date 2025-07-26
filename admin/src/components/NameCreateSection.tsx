import { ChevronDown } from "lucide-react";
import React from "react";

const nameOptions = [
  { id: "VIP", label: "VIP" },
  { id: "Floor", label: "Floor" },
  { id: "Section A", label: "Section A" },
  { id: "Section B", label: "Section B" },
  { id: "Section C", label: "Section C" },
  { id: "Section D", label: "Section D" },
  { id: "Section E", label: "Section E" },
  { id: "Section F", label: "Section F" },
  { id: "Balcony Left", label: "Balcony Left" },
  { id: "Balcony Right", label: "Balcony Right" },
  { id: "General", label: "General" },
];

function NameCreateSection({
  onNameChange,
  selectedName,
}: {
  onNameChange: (val: string) => void;
  selectedName?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start">
        <label className="text-xl">Category</label>
        <ChevronDown />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nameOptions.map((item) => (
          <label key={item.id} className="relative group cursor-pointer">
            <input
              type="radio"
              name="category"
              value={item.id}
              checked={selectedName === item.id}
              onChange={() => onNameChange(item.id)}
              className="peer hidden"
            />
            <div
              className="flex justify-center items-center px-2 py-10 rounded-xl border-2 border-slate-800 bg-slate-800 transition-all
              peer-checked:border-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:scale-105"
            >
              <span className="text-lg">{item.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default NameCreateSection;
