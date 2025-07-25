import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateEventFc,
  CreateTicketFc,
  DeleteAdminFc,
  DeleteEventFc,
  DeleteTicketFc,
  UpdateEventFc,
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

//Create event
export const CreateEvent = () => {
  return useMutation({
    mutationFn: (formData: FormData) => CreateEventFc(formData),
    onSuccess: () => {
      toast.success("Event created successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to create Event. try again!", {
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

// Delete event
export const DeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteEventFc,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Events"] });
      toast.success("Event deleted successfully");
    },
    onError: (err: Error) => {
      toast.error("Failed to delete Event. try again!", {
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

// Update Event
export const UpdateEvent = () => {
  return useMutation({
    mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
      UpdateEventFc({ id, formData }),
    onSuccess: () => {
      toast.success("Event updated successfully");
    },
    onError: (error: Error) => {
      toast.error("Failed to update the Event", {
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
