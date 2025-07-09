import { ChevronDown } from "lucide-react";
import React from "react";

const categoryOptions = [
  { id: "category_Concert", label: "Concert" },
  {
    id: "category_air_conditioning",
    label: "Sports",
  },
  { id: "category_Theater", label: "Theater" },
  { id: "category_Comedy", label: "Comedy" },
  {
    id: "category_Workshop",
    label: "Workshop",
  },
  { id: "category_Seminar", label: "Seminar" },
];

function CategoryCreateTicket() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start ">
        <label className="text-xl">Category</label>
        <ChevronDown />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
        {categoryOptions.map((item) => (
          <label
            key={item.id}
            className="border-2 hover:scale-105 cursor-pointer bg-slate-800 border-slate-800 hover:border-blue-500  rounded-xl px-2 py-10 flex justify-center items-center"
          >
            <input
              type="checkbox"
              name="category[]"
              value={item.id}
              className="accent-blue-500"
            />
            {/* defaultChecked={defaultAmenities.includes(item.id)} */}

            <span className="text-lg">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryCreateTicket;
