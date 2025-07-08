import React from "react";
import {
  Tags,
  Home,
  UserRoundSearch,
  Search,
  Settings,
  User,
  Pencil,
  PencilLine,
  PencilOff,
  UserRoundPlus,
  UserRoundCog,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Users Table",
    url: "#",
    icon: UserRoundSearch,
  },
  {
    title: "Ticket Table",
    url: "#",
    icon: Tags,
  },
];
const tickets = [
  {
    title: "Create Ticket",
    url: "/CreateTibkrt",
    icon: Pencil,
  },
  {
    title: "Edit Ticket",
    url: "#",
    icon: PencilLine,
  },
];

const admins = [
  {
    title: "Create Admin",
    url: "#",
    icon: UserRoundPlus,
  },
  {
    title: "Edit admin",
    url: "#",
    icon: UserRoundCog,
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-20 bg-slate-800 text-white w-full">
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
      <SidebarContent className="bg-slate-800 text-white ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Ticket</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tickets.map((ticket) => (
                <SidebarMenuItem key={ticket.title}>
                  <SidebarMenuButton asChild>
                    <a href={ticket.url}>
                      <ticket.icon />
                      <span>{ticket.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Ticket</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {admins.map((admin) => (
                <SidebarMenuItem key={admin.title}>
                  <SidebarMenuButton asChild>
                    <a href={admin.url}>
                      <admin.icon />
                      <span>{admin.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-slate-900 text-white">
        <SidebarMenu className="flex-row-reverse">
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Log out</span>
              <LogOut />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
