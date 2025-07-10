import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import AppSidebarHeader from "@/components/AppSidebarHeader";
import AppSidebarContent from "@/components/AppSidebarContent";
import AppSidebarFooter from "@/components/AppSidebarFooter";

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-slate-900 text-white w-full">
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent className="bg-slate-800 text-white ">
        <AppSidebarContent />
      </SidebarContent>
      <SidebarFooter className="bg-slate-900 text-white">
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
