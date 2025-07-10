"use client";
import React from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { useAdmin } from "@/lib/context/AdminContext";

function AppSidebarHeader() {
  const { admin } = useAdmin();
  return (
    <SidebarHeader>
      <SidebarMenu className="flex items-center h-full w-full  ">
        <SidebarMenuItem className="flex items-center h-full w-full justify-between">
          <SidebarMenuButton className="">
            <Avatar className="">
              <AvatarImage
                src={admin?.image}
                className="size-12 object-cover"
              />
              <AvatarFallback className="">cf</AvatarFallback>
            </Avatar>
            <User />
            <span className="text-lg text-white">{admin?.username}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default AppSidebarHeader;
