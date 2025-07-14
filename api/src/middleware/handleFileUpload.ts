import fs from "fs";
import path from "path";
import { NextFunction, Request, Response } from "express";

export const handleFileUpload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const file = req.file as Express.Multer.File;

  if (!file) {
    res.status(400).json({ message: "Image file is required" });
    return;
  }

  const ext = path.extname(file.originalname);
  const newPath = `${file.path}${ext}`;

  fs.rename(file.path, newPath, (err) => {
    if (err) {
      console.error("File rename error:", err);
      res.status(500).json({ message: "Failed to save image" });
      return;
    }
    req.body.imageUrl = newPath.replace(/\\/g, "/");
    next();
  });
};
