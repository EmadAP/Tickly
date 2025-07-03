"use client";
import React from "react";

interface NavHamBtnProps {
  onClick: () => void;
  isOpen: boolean;
}

function NavHamBtn({ onClick, isOpen }: NavHamBtnProps) {
  return (
    <div className="flex lg:hidden w-11 h-11 justify-center items-center">
      <button
        onClick={onClick}
        type="button"
        className="w-6 h-6 flex justify-around flex-col z-20 cursor-pointer"
      >
        <div
          className={`bg-orange-500 w-6 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`bg-orange-500 w-6 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "opacity-0 translate-x-4" : "opacity-100"
          }`}
        />
        <div
          className={`bg-orange-500 w-6 h-[0.35rem] rounded transition-all origin-[1px] ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}

export default NavHamBtn;
