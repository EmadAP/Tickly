import { Request, Response } from "express";
import mongoose from "mongoose";
import Cart from "../models/Cart";

// Get user's cart
export const getUserCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const cart = await Cart.findOne({ user: userId })
      .populate("items.event")
      .populate("items.section");

    res.json(cart || { user: userId, items: [] });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Server error fetching cart" });
  }
};

// Add item to cart
export const addToCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { eventId, sectionId, total } = req.body;

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      res.status(400).json({ message: "Invalid event ID" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(sectionId)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) cart = new Cart({ user: userId, items: [] });

    const existing = cart.items.find(
      (i) =>
        i.event.toString() === eventId && i.section.toString() === sectionId
    );

    if (existing) {
      existing.total += total;
    } else {
      cart.items.push({ event: eventId, section: sectionId, total });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ message: "Server error adding to cart" });
  }
};

// Update item total
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { total } = req.body;
    const { sectionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(sectionId)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }

    const item = cart.items.find((i) => i.section.toString() === sectionId);
    if (item) item.total = total;

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error updating cart item:", err);
    res.status(500).json({ message: "Server error updating cart item" });
  }
};

// Remove item
export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { sectionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(sectionId)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }

    cart.items = cart.items.filter((i) => i.section.toString() !== sectionId);

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error("Error removing cart item:", err);
    res.status(500).json({ message: "Server error removing cart item" });
  }
};

// Clear cart
export const clearCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    await Cart.deleteOne({ user: userId });
    res.json({ message: "Cart cleared" });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ message: "Server error clearing cart" });
  }
};
