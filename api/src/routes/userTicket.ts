import { Router } from "express";
import { getTicketById, getTickets } from "../controllers/ticketController";

const router = Router();

router.get("/tickets", getTickets);
router.get("/tickets/:id", getTicketById);

export default router;
