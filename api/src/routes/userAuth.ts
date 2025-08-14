import { Router } from "express";
import {
  signup,
  login,
  getProfile,
  logout,
} from "../controllers/userController";
import { verifyUserToken } from "../middleware/verifyUserToken";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", verifyUserToken, getProfile);
router.post("/logout", logout);

export default router;
