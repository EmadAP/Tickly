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
    country,
    address,
  } = body;

  // Title validation
  if (!title || typeof title !== "string" || title.trim().length < 3) {
    res.status(400).json({
      message: "Title is required and must be at least 3 characters long.",
    });
    return;
  }

  // Description validation
  if (
    !description ||
    typeof description !== "string" ||
    description.trim().length < 10
  ) {
    res.status(400).json({
      message: "Description is required and must be at least 10 characters.",
    });
    return;
  }

  // Category validation
  const allowedCategories = [
    "Concert",
    "Sports",
    "Theater",
    "Comedy",
    "Workshop",
    "Seminar",
  ];
  if (!category || !allowedCategories.includes(category)) {
    res.status(400).json({
      message: `Category must be one of: ${allowedCategories.join(", ")}`,
    });
    return;
  }

  // Country validation
  if (!country || typeof country !== "string" || country.trim().length < 2) {
    res.status(400).json({
      message: "Country is required and must be at least 2 characters.",
    });
    return;
  }

  // Address validation
  if (
    !address ||
    typeof address !== "string" ||
    address.trim().length < 5 ||
    !address.includes(",")
  ) {
    res.status(400).json({
      message:
        "Address is required and must be in 'City, Venue' format (e.g., 'Berlin, Mercedes-Benz Arena').",
    });
    return;
  }

  // Coordinates validation
  if (!coordinates || !isValidCoordinates(coordinates)) {
    res.status(400).json({
      message:
        "Coordinates are required and must be an array: [longitude, latitude].",
    });
    return;
  }

  // Event Date validation
  if (
    !eventDate ||
    !/^\d{4}-\d{2}-\d{2}$/.test(eventDate) ||
    isNaN(Date.parse(eventDate))
  ) {
    res.status(400).json({
      message: "Event date must be in YYYY-MM-DD format.",
    });
    return;
  }

  // Price validation
  if (isNaN(price) || price < 0) {
    res.status(400).json({
      message: "Price is required and must be a positive number.",
    });
    return;
  }

  // Quantity validation
  if (!Number.isInteger(quantity) || quantity < 1) {
    res.status(400).json({
      message: "Quantity is required and must be an integer ≥ 1.",
    });
    return;
  }

  // Off validation (optional)
  if (body.onSell && body.off !== undefined) {
    if (isNaN(body.off) || body.off < 0 || body.off > 100) {
      res.status(400).json({
        message: "Off must be a number between 0 and 100.",
      });
      return;
    }
  }

  next();
};
