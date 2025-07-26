import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateEventFc,
  CreateSectionFc,
  DeleteAdminFc,
  DeleteEventFc,
  DeleteSectionFc,
  UpdateEventFc,
  UpdateSectionFc,
} from "../api";
import { toast } from "sonner";

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

// Create Section
export const CreateSection = (eventId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: {
      name: string;
      price: number;
      quantity: number;
      onSell: boolean;
      discountPercent?: number;
    }) => CreateSectionFc({ eventId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SectionsByEvent", eventId] });
      toast.success("Section created successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to create section.", { description: err.message });
    },
  });
};

// Update Section
export const UpdateSection = () => {
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: {
        name: string;
        price: number;
        quantity: number;
        onSell: boolean;
        discountPercent?: number;
      };
    }) => UpdateSectionFc({ id, data }),
    onSuccess: () => {
      toast.success("Section updated successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to update section.", { description: err.message });
    },
  });
};

// Delete Section
export const DeleteSection = (eventId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => DeleteSectionFc(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SectionsByEvent", eventId] });
      toast.success("Section deleted successfully.");
    },
    onError: (err: Error) => {
      toast.error("Failed to delete section.", { description: err.message });
    },
  });
};

// Delete Admin
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
