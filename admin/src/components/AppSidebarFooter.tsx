"use client";
import React from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { LogOut } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { LogoutAdmin } from "@/lib/api/auth/mutations";
import { useRouter } from "next/navigation";

function AppSidebarFooter() {
  const queryClient = useQueryClient();
  const { mutate: logout } = LogoutAdmin();
  const router = useRouter();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
        router.push("/login");
      },
    });
  };
  return (
    <div>
      <SidebarMenu className="flex-row-reverse">
        <SidebarMenuItem>
          <SidebarMenuButton onClick={handleLogout}>
            <span>Log out</span>
            <LogOut />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
}

export default AppSidebarFooter;
