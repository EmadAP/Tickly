import { Router } from "express";
import { verifyUserToken } from "../middleware/verifyUserToken";
import {
  getUserCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController";

const router = Router();

// Get cart
router.get("/cart", verifyUserToken, getUserCart);

// Add item
router.post("/cart/add", verifyUserToken, addToCart);

// Update quantity
router.put("/cart/update/:sectionId", verifyUserToken, updateCartItem);

// Remove item
router.delete("/cart/remove/:sectionId", verifyUserToken, removeFromCart);

// Clear cart
router.delete("/cart/clear", verifyUserToken, clearCart);

export default router;
