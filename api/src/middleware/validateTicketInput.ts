import { NextFunction, Request, Response } from "express";

function isValidCoordinates(input: any): input is [number, number] {
  return (
    Array.isArray(input) &&
    input.length === 2 &&
    input.every((coord) => typeof coord === "number" && !isNaN(coord))
  );
}

export const validateTicketInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;

  if (typeof body.coordinates === "string") {
    try {
      body.coordinates = JSON.parse(body.coordinates);
    } catch (err) {
      console.error("Failed to parse coordinates JSON:", err);
      res.status(400).json({ message: "Invalid coordinates format" });
      return;
    }
  }

  body.price = Number(body.price);
  body.quantity = Number(body.quantity);
  if (body.off !== undefined) {
    body.off = Number(body.off);
  }
  if (body.onSell !== undefined) {
    body.onSell = body.onSell === "true";
  }

  const {
    title,
    description,
    category,
    coordinates,
    eventDate,
    price,
    quantity,
  } = body;

  if (
    !title ||
    !description ||
    !category ||
    !coordinates ||
    !eventDate ||
    isNaN(price) ||
    isNaN(quantity)
  ) {
    res
      .status(400)
      .json({ message: "All fields are required and must be valid" });
    return;
  }

  if (!isValidCoordinates(coordinates)) {
    res.status(400).json({ message: "Invalid coordinates format" });
    return;
  }

  next();
};
