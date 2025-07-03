import { Search } from "lucide-react";
import React from "react";

function BannerSearch() {
  return (
    <div className="mb-20 flex flex-row border-2 rounded-2xl max-w-screen-lg  mx-auto w-full">
      <button className="p-4 cursor-pointer hover:text-orange-500">
        <Search size={40} />
      </button>
      <div className="border-1 my-2" />
      <input
        type="text"
        className="w-full py-2 px-4 outline-none text-3xl"
        placeholder="search..."
      />
    </div>
  );
}

export default BannerSearch;
