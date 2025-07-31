// context/CartContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Event, Section } from "@/lib/types/types";

export interface CartItem {
  eventId: string;
  sectionId: string;
  total: number;
  event: Event;
  section: Section;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "total">, total?: number) => void;
  removeFromCart: (sectionId: string) => void;
  updateTotal: (sectionId: string, total: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart: CartContextType["addToCart"] = (item, total = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.sectionId === item.sectionId);
      if (existing) {
        return prev.map((i) =>
          i.sectionId === item.sectionId ? { ...i, total: i.total + total } : i
        );
      }
      return [...prev, { ...item, total }];
    });
  };

  const removeFromCart = (sectionId: string) => {
    setCart((prev) => prev.filter((i) => i.sectionId !== sectionId));
  };

  const updateTotal = (sectionId: string, total: number) => {
    if (total < 1) return;
    setCart((prev) =>
      prev.map((i) => (i.sectionId === sectionId ? { ...i, total } : i))
    );
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => {
    const price = item.section.onSell
      ? item.section.price -
        (item.section.price * (item.section.discountPercent || 0)) / 100
      : item.section.price;
    return sum + price * item.total;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateTotal,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
