import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
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

// Signup
export const signup = async (
  req: Request<{}, {}, SignupRequest>,
  res: Response
) => {
  const { username, password, email } = req.body;
  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      res.status(400).json({ message: "Username is already taken" });
      return;
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "Email is already in use" });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.status(201).json({ id: userDoc._id, username: userDoc.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed", error: err });
  }
};

// Login
export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      res.status(400).json({ message: "Username is wrong" });
      return;
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
      res.status(400).json({ message: "Password is wrong" });
      return;
    }

    jwt.sign({ username, id: userDoc._id }, SECRET, {}, (err, token) => {
      if (err) throw err;
      res
        .cookie("token", token, {
          sameSite: "lax",
          secure: false,
        })
        .json({ id: userDoc._id, username });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Login failed. Please check your username and password.",
      error: err,
    });
  }
};

// Get Profile
export const getProfile = async (req: Request, res: Response) => {
  const { id } = (req as any).admin as JwtPayload;

  try {
    const user = await User.findById(id).select("username email _id");
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout
export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      sameSite: "lax",
      secure: false,
    })
    .json({ message: "Logged out successfully" });
};
