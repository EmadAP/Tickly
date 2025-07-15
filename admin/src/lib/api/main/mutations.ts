import { useMutation } from "@tanstack/react-query";
import { CreateTicketFc } from "../api";
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
