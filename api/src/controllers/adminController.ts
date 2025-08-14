import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import Admin from "../models/Admin";
import { SECRET } from "../util/config";
import { JwtPayload } from "../middleware/verifyToken";

const salt = bcrypt.genSaltSync(10);

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

// Admin Signup
export const signupAdmin = async (
  req: Request<{}, {}, SignupRequest>,
  res: Response
) => {
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

    res.status(201).json({
      id: adminDoc._id,
      username: adminDoc.username,
      image: adminDoc.image,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed", error: err });
  }
};

// Admin Login
export const loginAdmin = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
) => {
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
};

// Get Admin Profile
export const getAdminProfile = async (req: Request, res: Response) => {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token" });
    return;
  }

  jwt.verify(token, SECRET, {}, async (err, decoded) => {
    if (err || !decoded) {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
      return;
    }

    const { id } = decoded as JwtPayload;

    try {
      const admin = await Admin.findById(id).select("username email image _id");
      if (!admin) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json({
        id: admin._id,
        username: admin.username,
        email: admin.email,
        image: admin.image,
      });
    } catch (err) {
      console.error("Error fetching admin profile:", err);
      res.status(500).json({ message: "Server error" });
    }
  });
};

// Logout Admin
export const logoutAdmin = (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      sameSite: "lax",
      secure: false,
    })
    .json({ message: "Logged out successfully" });
};

//Get all admins
export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find().sort({ createdAt: -1 });
    res.status(200).json(admins);
  } catch (err) {
    console.error("Error fetching admins:", err);
    res.status(500).json({ message: "Failed to fetch admins" });
  }
};

//Delete one admin
export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);

    if (!admin) {
      res.status(400).json({ message: "Admin not found" });
      return;
    }

    if (Array.isArray(admin.image)) {
      admin.image.forEach((path) => {
        try {
          fs.unlinkSync(path);
        } catch (err) {
          console.warn("Failed to delete image file:", path, err);
        }
      });
    }
    await admin.deleteOne();

    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    console.error("Error deleting admin", err);
    res.status(500).json({ message: "Failed to delete admin" });
  }
};
