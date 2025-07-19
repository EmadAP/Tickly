import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { validateTicketInput } from "../middleware/validateTicketInput";
import {
  handleCreateFileUpload,
  handleUpdateFileUpload,
} from "../middleware/handleFileUpload";
import {
  createTicket,
  deleteTicket,
  getTicketById,
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
  handleCreateFileUpload,
  createTicket
);

router.get("/tickets", verifyToken, getTickets);

router.delete("/tickets/:id", verifyToken, deleteTicket);

router.put(
  "/tickets/:id",
  verifyToken,
  upload.single("image"),
  validateTicketInput,
  handleUpdateFileUpload,
  updateTicket
);

router.get("/tickets/:id", verifyToken, getTicketById);

export default router;
