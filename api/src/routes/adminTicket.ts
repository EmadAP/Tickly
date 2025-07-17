import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { validateTicketInput } from "../middleware/validateTicketInput";
import { handleFileUpload } from "../middleware/handleFileUpload";
import {
  createTicket,
  deleteTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticketController";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post(
  "/tickets",
  verifyToken,
  upload.single("image"),
  validateTicketInput,
  handleFileUpload,
  createTicket
);

router.get("/tickets", verifyToken, getTickets);

router.delete("/tickets/:id", verifyToken, deleteTicket);

router.put(
  "/tickets/:id",
  verifyToken,
  upload.single("image"),
  validateTicketInput,
  handleFileUpload,
  updateTicket,
);

export default router;
