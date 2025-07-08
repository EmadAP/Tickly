import React from 'react'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { LogOut } from 'lucide-react'

function AppSidebarFooter() {
  return (
    <div>
      <SidebarMenu className="flex-row-reverse">
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span>Log out</span>
              <LogOut />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
    </div>
  )
}

export default AppSidebarFooter
