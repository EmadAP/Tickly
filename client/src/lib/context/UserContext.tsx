"use client";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { User, UserContextType } from "../types/types";
import { ProfileUserFc } from "../api/api";

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
  error: null,
  refetch: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery<User, Error>({
    queryKey: ["profile"],
    queryFn: ProfileUserFc,
    retry: false,
  });

  return (
    <UserContext.Provider
      value={{ user: user ?? null, isLoading, error, refetch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
