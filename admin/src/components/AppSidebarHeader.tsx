"use client";
import React from "react";
import { SidebarHeader, SidebarMenuButton } from "./ui/sidebar";
import { useAdmin } from "@/lib/context/AdminContext";

const isSidebarOpen = true;

function AppSidebarHeader() {
  const { admin } = useAdmin();

  const imageUrl = admin?.image
    ? `http://localhost:5000/${admin.image}`
    : "https://via.placeholder.com/150"; // fallback image

  return (
    <SidebarHeader className="p-0">
      <SidebarMenuButton className="hover:bg-slate-800 flex items-center h-full w-full justify-between">
        {/* Simple img tag instead of Avatar */}
        <img
          src={imageUrl}
          alt={admin?.username || "Admin"}
          className="h-12 w-12 rounded-full object-cover "
        />

        {isSidebarOpen && (
          <span className="text-lg text-white font-medium">
            {admin?.username}
          </span>
        )}
      </SidebarMenuButton>
    </SidebarHeader>
  );
}

export default AppSidebarHeader;
