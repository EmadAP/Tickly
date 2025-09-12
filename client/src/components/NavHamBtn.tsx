"use client";
import { Menu, X } from "lucide-react";
import React from "react";

interface NavHamBtnProps {
  onClick: () => void;
  isOpen: boolean;
}

function NavHamBtn({ onClick, isOpen }: NavHamBtnProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex lg:hidden z-20  w-11 h-11 justify-center items-center dark:bg-slate-800 bg-white p-2 rounded-full dark:hover:bg-slate-700 hover:bg-zinc-200 text-2xl outline-none cursor-pointer"
    >
      <Menu
        size={27}
        className={`text-orange-500 w-full h-full ${
          isOpen ? "hidden" : "flex"
        }`}
      />
      <X
        size={27}
        className={`text-orange-500 w-full h-full ${
          isOpen ? "flex" : "hidden"
        }`}
      />
    </button>
  );
}

export default NavHamBtn;
