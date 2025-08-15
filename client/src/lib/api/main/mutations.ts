// lib/api/mutations/useCreatePendingTickets.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreatePendingTicketsFc } from "../api";

export const CreatePendingTickets = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreatePendingTicketsFc,
    onSuccess: () => {
      // You can invalidate sections or ticket queries here if needed
      // queryClient.invalidateQueries({ queryKey: ["Tickets"] });
      toast.success("Tickets reserved successfully for 15 minutes.");
    },
    onError: (err: any) => {
      toast.error("Failed to reserve tickets", {
        description:
          err?.response?.data?.message || err.message || "Unknown error",
      });
    },
  });
};
