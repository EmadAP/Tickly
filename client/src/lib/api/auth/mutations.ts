import { useMutation } from "@tanstack/react-query";
import { LoginUserFc, SignupUserFc } from "../api";
import { toast } from "sonner";

export const SignupUser = () => {
  return useMutation({
    mutationFn: SignupUserFc,
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

export const LoginUser = () => {
  return useMutation({
    mutationFn: LoginUserFc,
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
