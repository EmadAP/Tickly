"use client";
import { Menu, X } from "lucide-react";
import React from "react";

interface NavHamBtnProps {
  onClick: () => void;
  isOpen: boolean;
}

function NavHamBtn({ onClick, isOpen }: NavHamBtnProps) {
  return (
    <div className="flex lg:hidden w-11 h-11 justify-center items-center hover:bg-slate-700 rounded-full cursor-pointer">
      <button
        onClick={onClick}
        type="button"
        className="z-20 "
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
    </div>
  );
}

export default NavHamBtn;
