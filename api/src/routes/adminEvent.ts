import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { validateEventInput } from "../middleware/validateEventInput";
import {
  handleCreateFileUpload,
  handleUpdateFileUpload,
} from "../middleware/handleFileUpload";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  updateEvent,
} from "../controllers/eventController";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post(
  "/events",
  verifyToken,
  upload.single("image"),
  validateEventInput,
  handleCreateFileUpload,
  createEvent
);

router.get("/events", verifyToken, getEvents);

router.delete("/events/:id", verifyToken, deleteEvent);

router.put(
  "/events/:id",
  verifyToken,
  upload.single("image"),
  validateEventInput,
  handleUpdateFileUpload,
  updateEvent
);

router.get("/events/:id", verifyToken, getEventById);

export default router;
