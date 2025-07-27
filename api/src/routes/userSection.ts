import { Router } from "express";
import {
  getSectionById,
  getSections,
  getSectionsByEventId,
} from "../controllers/sectionController";

const router = Router();

router.get("/events/:eventId/sections", getSectionsByEventId);

router.get("/sections/:id", getSectionById);

router.get('/sections', getSections)

export default router;
