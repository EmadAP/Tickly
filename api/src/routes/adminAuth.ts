import { Router } from "express";
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken";
import {
  signupAdmin,
  loginAdmin,
  getAdminProfile,
  logoutAdmin,
  getAdmins,
  deleteAdmin,
} from "../controllers/adminController";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/signup", upload.single("image"), signupAdmin);
router.post("/login", loginAdmin);
router.get("/profile", getAdminProfile);
router.post("/logout", logoutAdmin);
router.get("/admins", verifyToken, getAdmins);
router.delete("/admin/:id", verifyToken, deleteAdmin);

export default router;
