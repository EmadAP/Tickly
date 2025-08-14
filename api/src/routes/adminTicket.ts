import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { getAllTicketsAdmin } from "../controllers/ticketController";

const router = Router();

// Admin read-only access to all tickets
router.get("/tickets", verifyToken, getAllTicketsAdmin);

export default router;
