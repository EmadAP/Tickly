// sectionRoutes.ts
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { validateSectionInput } from "../middleware/validateSectionInput";
import {
  createSection,
  deleteSection,
  getSectionById,
  getSectionsByEventId,
  updateSection,
} from "../controllers/sectionController";

const router = Router();

// Create a section for a specific event
router.post(
  "/events/:eventId/sections",
  verifyToken,
  validateSectionInput,
  createSection
);

// Get all sections for a specific event
router.get("/events/:eventId/sections", verifyToken, getSectionsByEventId);

// Update a section
router.put("/sections/:id", verifyToken, validateSectionInput, updateSection);

// Delete a section
router.delete("/sections/:id", verifyToken, deleteSection);

// Get a section by ID
router.get("/sections/:id", verifyToken, getSectionById);

export default router;
