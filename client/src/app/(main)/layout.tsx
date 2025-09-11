import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/templates/Footer";
import Navbar from "@/templates/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <SidebarProvider>
        <main className="flex-1 flex flex-col h-full w-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
