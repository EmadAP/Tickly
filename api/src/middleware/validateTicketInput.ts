import { NextFunction, Request, Response } from "express";

export const validateTicketInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    description,
    category,
    coordinates,
    eventDate,
    price,
    quantity,
  } = req.body;

  if (
    !title ||
    !description ||
    !category ||
    !coordinates ||
    !eventDate ||
    !price ||
    !quantity
  ) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  if (!Array.isArray(coordinates) || coordinates.length !== 2) {
    res.status(400).json({ message: "Invalid coordinates format" });
    return;
  }

  next();
};
