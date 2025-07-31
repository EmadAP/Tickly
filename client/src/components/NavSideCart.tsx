import React from "react";

interface NavSideCartProps {
  isOpen: boolean;
}

function NavSideCart({ isOpen }: NavSideCartProps) {
  return (
    <div
      className={`fixed border-l-2 border-l-orange-500 inset-y-0 z-20 right-0 top-20 w-96 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out shadow-lg ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center py-4 px-2 justify-between h-full">
        <div>shopping cart</div>
        <div>button</div>
      </div>
    </div>
  );
}

export default NavSideCart;
