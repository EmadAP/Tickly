"use client";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function NavDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={` w-full rounded-lg cursor-pointer outline-none text-2xl flex flex-row items-center justify-between gap-2 group px-3 py-2 h-9 transition-all duration-200 ${
          open
            ? "dark:bg-slate-700 bg-zinc-200"
            : "dark:bg-slate-800 bg-white hover:bg-zinc-200 dark:hover:bg-slate-700"
        }`}
      >
        <p className="text-orange-500 font-semibold">Categories</p>
        <ChevronRight
          className={`text-orange-500 transition-transform duration-300 ${
            open ? "rotate-90" : "group-hover:rotate-90"
          }`}
          size={20}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-slate-700 bg-zinc-200 border-0 w-60">
        <DropdownMenuItem className="text-xl dark:text-white text-black dark:focus:text-white focus:text-black dark:focus:bg-slate-600 focus:bg-zinc-100 cursor-pointer">
          <Link href="#">Sports</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xl dark:text-white text-black dark:focus:text-white focus:text-black dark:focus:bg-slate-600 focus:bg-zinc-100 cursor-pointer">
          <Link href="#">Concerts</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xl dark:text-white text-black dark:focus:text-white focus:text-black dark:focus:bg-slate-600 focus:bg-zinc-100 cursor-pointer">
          <Link href="#">Movies</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-xl dark:text-white text-black dark:focus:text-white focus:text-black dark:focus:bg-slate-600 focus:bg-zinc-100 cursor-pointer">
          <Link href="#">Theatres</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDropdown;
