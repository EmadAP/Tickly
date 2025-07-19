import { ChevronDown } from "lucide-react";
import React from "react";

const categoryOptions = [
  { id: "Concert", label: "Concert" },
  { id: "Sports", label: "Sports" },
  { id: "Theater", label: "Theater" },
  { id: "Comedy", label: "Comedy" },
  { id: "Workshop", label: "Workshop" },
  { id: "Seminar", label: "Seminar" },
];

function CategoryCreateTicket({
  onCategoryChange,
  selectedCategory,
}: {
  onCategoryChange: (val: string) => void;
  selectedCategory?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start">
        <label className="text-xl">Category</label>
        <ChevronDown />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {categoryOptions.map((item) => (
          <label key={item.id} className="relative group cursor-pointer">
            <input
              type="radio"
              name="category"
              value={item.id}
              checked={selectedCategory === item.id}
              onChange={() => onCategoryChange(item.id)}
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

// function CategoryCreateTicket({
//   onCategoryChange,
// }: {
//   onCategoryChange: (val: string) => void;
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <div className="flex flex-row items-center justify-start">
//         <label className="text-xl">Category</label>
//         <ChevronDown />
//       </div>
//       <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4">
//         {categoryOptions.map((item) => (
//           <label key={item.id} className="relative group cursor-pointer">
//             {/* Hidden radio */}
//             <input
//               type="radio"
//               name="category"
//               value={item.id}
//               onChange={() => onCategoryChange(item.id)}
//               className="peer hidden"
//             />

//             {/* Card UI */}
//             <div
//               className="flex justify-center items-center px-2 py-10 rounded-xl border-2 border-slate-800 bg-slate-800 transition-all
//               peer-checked:border-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:scale-105"
//             >
//               <span className="text-lg">{item.label}</span>
//             </div>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }

export default CategoryCreateTicket;
