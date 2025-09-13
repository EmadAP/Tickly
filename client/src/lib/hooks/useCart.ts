import { useMemo } from "react";
import {
  useAddToCart,
  useRemoveFromCart,
  useUpdateCartItem,
  useClearCart,
} from "../api/main/mutations";
import { CartItem } from "@/lib/types/types";
import { useGetCart } from "../api/main/queries";

export const useCart = () => {
  const { data, isLoading } = useGetCart();
  const addCartMutation = useAddToCart();
  const removeCartMutation = useRemoveFromCart();
  const updateCartMutation = useUpdateCartItem();
  const clearCartMutation = useClearCart();

  const items: CartItem[] = useMemo(() => data?.items || [], [data]);

  const totals = useMemo(() => {
    const totalTickets = items.reduce((sum, item) => sum + item.total, 0);

    const totalRawPrice = items.reduce(
      (sum, item) => sum + item.section.price * item.total,
      0
    );

    const totalDiscount = items.reduce((sum, item) => {
      if (item.section.onSell && item.section.discountPercent) {
        const discount =
          (item.section.price * item.section.discountPercent) / 100;
        return sum + discount * item.total;
      }
      return sum;
    }, 0);

    return {
      totalTickets,
      totalRawPrice,
      totalDiscount,
      totalPrice: totalRawPrice - totalDiscount,
    };
  }, [items]);

  return {
    cart: items,
    isLoading,
    addToCart: (eventId: string, sectionId: string, total = 1) =>
      addCartMutation.mutateAsync({ eventId, sectionId, total }),
    removeFromCart: (sectionId: string) =>
      removeCartMutation.mutateAsync(sectionId),
    updateTotal: (sectionId: string, total: number) =>
      updateCartMutation.mutateAsync({ sectionId, total }),
    clearCart: () => clearCartMutation.mutateAsync(),
    ...totals,
  };
};
