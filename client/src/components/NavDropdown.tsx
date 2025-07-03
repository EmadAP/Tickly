"use client";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavDropdown() {
  const [open, setOpen] = useState(false);
  return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={`outline-none text-2xl flex flex-row items-center justify-around gap-2 group shadow-xs px-2 py-1 rounded-lg transition-all duration-200 ${
            open ? "bg-slate-700" : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          <p className="text-orange-500 font-semibold">Categories</p>
          <ChevronRight
            className={`text-orange-500 transition-transform duration-300 ${
              open ? "rotate-90" : "group-hover:rotate-90"
            }`}
            size={30}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-700 border-slate-700 w-60">
          <DropdownMenuItem className="text-xl text-white focus:text-white focus:bg-slate-600">
            Sports
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl text-white focus:text-white focus:bg-slate-600">
            Conserts
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl text-white focus:text-white focus:bg-slate-600">
            Movies
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl text-white focus:text-white focus:bg-slate-600">
            Theatres
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}

export default NavDropdown;
