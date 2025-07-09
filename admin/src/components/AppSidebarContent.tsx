import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Tags,
  Home,
  UserRoundSearch,
  Pencil,
  PencilLine,
  UserRoundPlus,
  UserRoundCog,
} from "lucide-react";

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
    url: "/createTicket",
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
    url: "/createAdmin",
    icon: UserRoundPlus,
  },
  {
    title: "Edit admin",
    url: "#",
    icon: UserRoundCog,
  },
];

function AppSidebarContent() {
  return (
    <div>
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
        <SidebarGroupLabel className="text-white">Admin</SidebarGroupLabel>
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
    </div>
  );
}

export default AppSidebarContent;
