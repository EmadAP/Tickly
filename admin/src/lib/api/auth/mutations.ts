import { useMutation } from "@tanstack/react-query";
import { LoginAdminFc, LogoutAdminFc, SignupAdminFc } from "../api";
import { toast } from "sonner";

export const SignupAdmin = () => {
  return useMutation({
    mutationFn: SignupAdminFc,
    onSuccess: () => {
      toast.success("Account created successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to create your Account. try again!", {
        description: err.message,
      });
    },
  });
};

export const LoginAdmin = () => {
  return useMutation({
    mutationFn: LoginAdminFc,
    onSuccess: () => {
      toast.success("Welcome back! You’ve successfully logged in.");
    },
    onError: (err: Error) => {
      toast.error("Login failed!", {
        description: err.message,
      });
    },
  });
};

export const LogoutAdmin = () => {
  return useMutation({
    mutationFn: LogoutAdminFc,
    onSuccess: () => {
      toast.success("You’ve successfully logged out!");
    },
    onError: (error: Error) => {
      toast.error("Logout failed!", {
        description: error.message,
      });
    },
  });
};
