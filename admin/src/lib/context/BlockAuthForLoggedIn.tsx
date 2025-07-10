"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAdmin } from "./AdminContext";

export default function BlockAuthForLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { admin, isLoading } = useAdmin();

  useEffect(() => {
    if (!isLoading && admin) {
      router.replace("/");
    }
  }, [admin, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Checking session...
      </div>
    );
  }

  return <>{children}</>;
}
