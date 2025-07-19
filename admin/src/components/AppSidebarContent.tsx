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
  UsersRound,
  Users,
  UserRoundPlus,
  Tickets,
} from "lucide-react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Ticket Table",
    url: "/ticketTable",
    icon: Tags,
  },
  {
    title: "Users Table",
    url: "usersTable",
    icon: Users,
  },
  {
    title: "Admin Table",
    url: "adminTable",
    icon: UsersRound,
  },
];
const creates = [
  {
    title: "Ticket",
    url: "/createTicket",
    icon: Tickets,
  },
  {
    title: "Admin",
    url: "/createAdmin",
    icon: UserRoundPlus,
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
        <SidebarGroupLabel className="text-white">Create</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {creates.map((create) => (
              <SidebarMenuItem key={create.title}>
                <SidebarMenuButton asChild>
                  <a href={create.url}>
                    <create.icon />
                    <span>{create.title}</span>
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
