import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RequireAdmin from "@/lib/context/RequireAdmin";
import AppSidebar from "@/templates/AppSidebar";
import Navbar from "@/templates/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RequireAdmin>
        <SidebarProvider>
          <main className="w-full flex flex-row ">
            <AppSidebar />
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div className="bg-slate-900 border-b-2 border-blue-500 p-2 outline-none flex items-center z-20 sticky inset-x-0">
                  <SidebarTrigger
                    size={"default"}
                    className="size-10 outline-none text-blue-500 hover:text-blue-400 hover:bg-slate-700 cursor-pointer"
                  />
                </div>
                <div className="w-full">
                  <Navbar />
                </div>
              </div>
              <div className="flex flex-col ">{children}</div>
            </div>
          </main>
        </SidebarProvider>
      </RequireAdmin>
    </>
  );
};

export default MainLayout;
