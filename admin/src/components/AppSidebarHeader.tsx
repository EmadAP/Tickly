import React from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu className="flex items-center h-full w-full  ">
        <SidebarMenuItem className="flex items-center h-full w-full justify-between">
          <SidebarMenuButton className="">
            <Avatar className="">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="size-12 object-cover"
              />
              <AvatarFallback className="">username</AvatarFallback>
            </Avatar>
            <User />
            <span className="text-lg text-white">username</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default AppSidebarHeader;
