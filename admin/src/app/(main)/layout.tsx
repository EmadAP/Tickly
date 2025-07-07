import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/templates/AppSidebar";
import Navbar from "@/templates/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col min-h-screen w-full">
          <div className="flex flex-row">
            <div className="bg-slate-900 border-b-2 border-blue-500 p-2 outline-none flex items-center z-20 sticky">
              <SidebarTrigger
                size={"default"}
                className="size-10 outline-none text-blue-500 hover:text-blue-400 hover:bg-slate-700 cursor-pointer"
              />
            </div>
            <div className="w-full">
              <Navbar />
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full">{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;
