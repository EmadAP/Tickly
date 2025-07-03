"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavDropdown from "@/components/NavDropdown";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight, ShoppingCart, Tally1, Tickets } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import NavHamBtn from "@/components/NavHamBtn";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <nav className="relative h-20 inset-x-0 top-0 px-4 w-full bg-slate-800 text-white border-b-2 border-orange-500">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-4xl font-semibold">Tickly</div>
            <Tickets size={32} className="text-orange-500" />
          </div>

          <div className="flex items-center lg:gap-5 gap-2">
            {/* large screens */}
            <div className="hidden lg:flex">
              <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none">
                <p className="text-orange-500 font-semibold">Events</p>
              </Button>
            </div>

            <div className="hidden lg:flex">
              <NavDropdown />
            </div>

            <NavHamBtn isOpen={isSidebarOpen} onClick={toggleSidebar} />

            <div className="border-1 h-10" />

            <div className="hidden lg:flex">
              <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none">
                <p className="text-orange-500 font-semibold">Login</p>
              </Button>
            </div>

            <div>
              <button className="bg-slate-800 text-orange-500 p-2 rounded-full shadow-xs hover:bg-slate-700 text-2xl">
                <ShoppingCart size={27} />
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-y-0 right-0 top-19 w-64 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out z-10 lg:hidden shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-4 mt-2">
          <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none">
            <p className="text-orange-500 font-semibold">Login</p>
          </Button>

          <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none w-full">
            <p className="text-orange-500 font-semibold">Events</p>
          </Button>

          <NavDropdown />
        </div>
      </div>

      {/* background overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0  z-0 lg:hidden" onClick={toggleSidebar} />
      )}
    </nav>
  );
}

export default Navbar;
