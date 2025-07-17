import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTicketFc, DeleteTicketFc } from "../api";
import { toast } from "sonner";

export const CreateTicket = () => {
  return useMutation({
    mutationFn: (formData: FormData) => CreateTicketFc(formData),
    onSuccess: () => {
      toast.success("Ticket created successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to create Ticket. try again!", {
        description: err.message,
      });
    },
  });
};

export const useDeleteTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteTicketFc,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tickets"] });
      toast.success("Ticket deleted successfully");
    },
    onError: (err: Error) => {
      toast.error("Failed to delete Ticket. try again!", {
        description: err.message,
      });
    },
  });
};
