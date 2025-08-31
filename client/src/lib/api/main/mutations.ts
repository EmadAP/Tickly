import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  AddToCartFc,
  ClearCartFc,
  CreatePendingTicketsFc,
  RemoveFromCartFc,
  UpdateCartItemFc,
} from "../api";

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

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AddToCartFc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
      toast.success("Ticket added to cart");
    },
    onError: (err: Error) => {
      toast.error("Failed to add to cart", { description: err.message });
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UpdateCartItemFc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
      queryClient.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Cart updated");
    },
    onError: (err: Error) => {
      toast.error("Failed to update cart", { description: err.message });
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: RemoveFromCartFc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
      queryClient.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Ticket removed from cart");
    },
    onError: (err: Error) => {
      toast.error("Failed to remove from cart", { description: err.message });
    },
  });
};

export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ClearCartFc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
      queryClient.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Cart cleared");
    },
    onError: (err: Error) => {
      toast.error("Failed to clear cart", { description: err.message });
    },
  });
};
