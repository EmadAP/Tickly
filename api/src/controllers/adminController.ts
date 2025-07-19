import { Request, Response } from "express";
import Admin from "../models/Admin";
import fs from "fs";
import mongoose from "mongoose";
import path from "path";

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
