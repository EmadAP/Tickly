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
      className="z-20 flex lg:hidden w-11 h-11 justify-center items-center dark:hover:bg-slate-700 hover:bg-zinc-200 rounded-full cursor-pointer "
    >
      <Menu
        size={30}
        className={`text-orange-500 w-full h-full ${
          isOpen ? "hidden" : "flex"
        }`}
      />
      <X
        size={30}
        className={`text-orange-500 w-full h-full ${
          isOpen ? "flex" : "hidden"
        }`}
      />
    </button>
  );
}

export default NavHamBtn;
