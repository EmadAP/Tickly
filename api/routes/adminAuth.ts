import { Router, Request, Response } from "express";
import Admin, { IAdmin } from "../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import multer from "multer";
import { SECRET } from "../util/config";

const upload = multer({ dest: "uploads/" });
const router = Router();
const salt = bcrypt.genSaltSync(10);

interface SignupRequest {
  username: string;
  email: string;
  password: string;
  image: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface JwtPayload {
  username: string;
  email: string;
  image: string;
  id: string;
}

router.post(
  "/signup",
  upload.single("image"),
  async (req: Request<{}, {}, SignupRequest>, res: Response) => {
    const { username, password, email } = req.body;
    const file = req.file as Express.Multer.File;

    try {
      if (!file) {
        res.status(400).json({ message: "Image file is required" });
        return;
      }

      const ext = file.originalname.split(".").pop();
      const newPath = `${file.path}.${ext}`;
      fs.renameSync(file.path, newPath);

      const savedPath = newPath.replace(/\\/g, "/");

      const existingUsername = await Admin.findOne({ username });
      if (existingUsername) {
        res.status(400).json({ message: "Username is already taken" });
        return;
      }

      const existingEmail = await Admin.findOne({ email });
      if (existingEmail) {
        res.status(400).json({ message: "Email is already in use" });
        return;
      }

      if (password.length < 10) {
        res
          .status(400)
          .json({ message: "Password must be at least 10 characters" });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const adminDoc = await Admin.create({
        username,
        password: hashedPassword,
        email,
        image: savedPath,
      });

      //   // Create JWT token
      //   const token = jwt.sign(
      //     { id: adminDoc._id, username, email, image: savedPath },
      //     SECRET,
      //     { expiresIn: "7d" }
      //   );

      //   res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax" });

      res.status(201).json({
        id: adminDoc._id,
        username: adminDoc.username,
        image: adminDoc.image,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Signup failed", error: err });
    }
  }
);

router.post(
  "/login",
  async (req: Request<{}, {}, LoginRequest>, res: Response) => {
    const { username, password } = req.body;
    try {
      const adminDoc = await Admin.findOne({ username });
      if (!adminDoc) {
        res.status(400).json({ message: "Username is wrong" });
        return;
      }
      const passOk = bcrypt.compareSync(password, adminDoc.password);
      if (!passOk) {
        res.status(400).json({ message: "Password is wrong" });
        return;
      }

      jwt.sign({ username, id: adminDoc._id }, SECRET, {}, (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token, {
            // httpOnly: true,
            sameSite: "lax",
            secure: false,
          })
          .json({ id: adminDoc._id, username });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Login failed. Please check your username and password.",
        error: err,
      });
    }
  }
);

// router.get("/profile", async (req: Request, res: Response) => {
//   const token = req.cookies?.token;
//   if (!token) {
//     res.status(401).json({ message: "Unauthorized: No token" });
//     return;
//   }
//   jwt.verify(token, SECRET, {}, async (err, decoded) => {
//     if (err || !decoded) {
//       res.status(401).json({ message: "Unauthorized: Invalid token" });
//       return;
//     }

//     const { id } = decoded as JwtPayload;

//     try {
//       const user = await Admin.findById(id).select("username email _id");
//       if (!user) {
//         res.status(404).json({ message: "User not found" });
//         return;
//       }
//       res.status(200).json({
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       });
//     } catch (err) {
//       console.error("Error fetching user profile:", err);
//       res.status(500).json({ message: "Server error" });
//     }
//   });
// });

// router.post("/logout", (req: Request, res: Response) => {
//   res
//     .clearCookie("token", {
//       // httpOnly: true,
//       sameSite: "lax",
//       secure: false,
//     })
//     .json({ message: "Logged out successfully" });
// });

export default router;
