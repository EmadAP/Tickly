"use client";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProfileUserFc } from "../api/api";
import { Admin, AdminContextType } from "../type";

const AdminContext = createContext<AdminContextType>({
  admin: null,
  isLoading: false,
  error: null,
  refetch: () => {},
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: admin,
    isLoading,
    error,
    refetch,
  } = useQuery<Admin, Error>({
    queryKey: ["profile"],
    queryFn: ProfileUserFc,
    retry: false,
  });

  return (
    <AdminContext.Provider
      value={{ admin: admin ?? null, isLoading, error, refetch }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
