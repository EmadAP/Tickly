import { Router } from "express";
import { verifyUserToken } from "../middleware/verifyUserToken";
import { confirmPayment, createPendingTickets } from "../controllers/ticketController";

const router = Router();

// Create pending tickets when user enters checkout
router.post("/tickets/checkout", verifyUserToken, createPendingTickets);
router.post("/tickets/confirm", verifyUserToken, confirmPayment);

export default router;
