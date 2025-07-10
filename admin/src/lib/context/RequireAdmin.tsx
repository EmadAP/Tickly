"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAdmin } from "./AdminContext";

export default function RequireAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { admin, isLoading } = useAdmin();

  useEffect(() => {
    if (!isLoading && !admin) {
      router.replace("/login");
    }
  }, [admin, isLoading, router]);

  if (isLoading || !admin) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading admin session...
      </div>
    );
  }

  return <>{children}</>;
}
