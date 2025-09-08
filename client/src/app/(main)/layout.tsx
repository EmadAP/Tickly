import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/templates/Footer";
import Navbar from "@/templates/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <main className="flex-1 flex flex-col h-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
