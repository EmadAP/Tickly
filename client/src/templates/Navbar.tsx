import { Tickets } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <nav className="h-24 px-4 w-full bg-slate-800 text-white border-b-2 border-white">
      <div className="flex flex-row items-center gap-2">
        <div className="text-3xl font-semibold">Tickly</div>
        <Tickets size={30} className="text-orange-500" />
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
