"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavDropdown from "@/components/NavDropdown";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tickets } from "lucide-react";
import React, { useState } from "react";
import NavHamBtn from "@/components/NavHamBtn";
import Link from "next/link";
import NavAuth from "@/components/NavAuth";
import Popup from "@/components/Popup";
import { useUser } from "@/lib/context/UserContext";
import { useQueryClient } from "@tanstack/react-query";
import { LogoutUser } from "@/lib/api/auth/mutations";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: logout } = LogoutUser();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
    });
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <nav className="sticky z-20 h-20 inset-x-0 top-0 px-4 w-full bg-slate-800 text-white border-b-2 border-orange-500">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-4xl font-semibold">Tickly</div>
            <Tickets size={32} className="text-orange-500" />
          </Link>

          <div className="flex items-center lg:gap-5 gap-2">
            {/* large screens */}
            <div className="hidden lg:flex">
              <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none cursor-pointer">
                <p className="text-orange-500 font-semibold">Events</p>
              </Button>
            </div>

            <div className="hidden lg:flex">
              <NavDropdown />
            </div>

            <NavHamBtn isOpen={isSidebarOpen} onClick={toggleSidebar} />

            <div className="border-1 h-10" />

            <div className="hidden lg:flex">
              {user?.username && (
                <Button
                  onClick={handleLogout}
                  className="text-orange-500 font-semibold bg-slate-800 text-2xl hover:bg-slate-700 outline-none cursor-pointer"
                >
                  Logout
                </Button>
              )}
              {!user?.username && (
                <Button
                  onClick={() => setLoginOpen(true)}
                  className="text-orange-500 font-semibold bg-slate-800 text-2xl hover:bg-slate-700 outline-none cursor-pointer"
                >
                  Login
                </Button>
              )}
            </div>

            <div>
              <button className="bg-slate-800 text-orange-500 p-2 rounded-full shadow-xs hover:bg-slate-700 text-2xl outline-none cursor-pointer">
                <ShoppingCart size={27} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Sidebar Overlay */}
        <div
          className={`fixed border-l-2 border-l-orange-500 inset-y-0 z-20 right-0 top-20 w-64 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out lg:hidden shadow-lg ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 p-4 mt-2">
            {user?.username && (
              <Button
                onClick={handleLogout}
                className="text-orange-500 font-semibold bg-slate-800 text-2xl hover:bg-slate-700 outline-none cursor-pointer"
              >
                Logout
              </Button>
            )}
            {!user?.username && (
              <Button
                onClick={() => setLoginOpen(true)}
                className="text-orange-500 font-semibold bg-slate-800 text-2xl hover:bg-slate-700 outline-none cursor-pointer"
              >
                Login
              </Button>
            )}

            <Button className="bg-slate-800 text-2xl hover:bg-slate-700 outline-none w-full cursor-pointer">
              <p className="text-orange-500 font-semibold">Events</p>
            </Button>

            <NavDropdown />
          </div>
        </div>

        {/* background overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0  z-0 lg:hidden bg-black/40"
            onClick={toggleSidebar}
          />
        )}
      </MaxWidthWrapper>
      <Popup isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <NavAuth onClose={() => setLoginOpen(false)} />
      </Popup>
    </nav>
  );
}

export default Navbar;
