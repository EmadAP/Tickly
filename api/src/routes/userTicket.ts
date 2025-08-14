// routes/userTicketRoutes.ts
import { Router } from "express";
import { verifyUserToken } from "../middleware/verifyUserToken";
import { createPendingTickets } from "../controllers/ticketController";

const router = Router();

// Create pending tickets when user enters checkout
router.post("/tickets/checkout", verifyUserToken, createPendingTickets);

export default router;
