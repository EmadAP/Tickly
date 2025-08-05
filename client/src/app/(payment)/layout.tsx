"use client";
import { useUser } from "@/lib/context/UserContext";
import Footer from "@/templates/Footer";
import Navbar from "@/templates/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Checking authentication...
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-1 flex flex-col h-full">{children}</div>
      <Footer />
    </main>
  );
};

export default PaymentLayout;
