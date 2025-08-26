// lib/api/mutations/useCreatePendingTickets.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreatePendingTicketsFc } from "../api";

export const CreatePendingTickets = () => {
  return useMutation({
    mutationFn: CreatePendingTicketsFc,
    onSuccess: () => {
      // You can invalidate sections or ticket queries here if needed
      // queryClient.invalidateQueries({ queryKey: ["Tickets"] });
      toast.success("Tickets reserved successfully for 15 minutes.");
    },
    onError: (err: Error) => {
      toast.error("Failed to reserve tickets", { description: err.message });
    },
  });
};
