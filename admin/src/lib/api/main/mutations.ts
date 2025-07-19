import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateTicketFc,
  DeleteAdminFc,
  DeleteTicketFc,
  UpdateTicketFc,
} from "../api";
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

export const DeleteTicket = () => {
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

export const UpdateTicket = () => {
  return useMutation({
    mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
      UpdateTicketFc({ id, formData }),
    onSuccess: () => {
      toast.success("Ticket updated successfully");
    },
    onError: (error: Error) => {
      toast.error("Failed to update the Ticket", {
        description: error.message,
      });
    },
  });
};

export const DeleteAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteAdminFc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Admins"] });
      toast.success("Admin deleted successfully");
    },
    onError: (err: Error) => {
      toast.error("Failed to delete Admin. try again!", {
        description: err.message,
      });
    },
  });
};
