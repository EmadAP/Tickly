import { NextFunction, Request, Response } from "express";

function isValidCoordinates(input: any): input is [number, number] {
  return (
    Array.isArray(input) &&
    input.length === 2 &&
    input.every((coord) => typeof coord === "number" && !isNaN(coord))
  );
}

export const validateEventInput = (
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
      res.status(400).json({ message: "Invalid coordinates format." });
      return;
    }
  }

  const {
    title,
    description,
    category,
    country,
    city,
    address,
    coordinates,
    eventDate,
    eventTime,
  } = body;

  const allowedCategories = [
    "Concert",
    "Sports",
    "Theater",
    "Comedy",
    "Workshop",
    "Seminar",
  ];

  // Title
  if (!title || typeof title !== "string" || title.trim().length < 3) {
    res
      .status(400)
      .json({ message: "Title must be at least 3 characters long." });
    return;
  }

  // Description
  if (
    !description ||
    typeof description !== "string" ||
    description.trim().length < 10
  ) {
    res
      .status(400)
      .json({ message: "Description must be at least 10 characters long." });
    return;
  }

  // Category
  if (!category || !allowedCategories.includes(category)) {
    res.status(400).json({
      message: `Category must be one of: ${allowedCategories.join(", ")}`,
    });
    return;
  }

  // Country
  if (!country || typeof country !== "string" || country.trim().length < 2) {
    res.status(400).json({ message: "Country must be at least 2 characters." });
    return;
  }

  // City
  if (!city || typeof city !== "string" || city.trim().length < 2) {
    res.status(400).json({ message: "City must be at least 2 characters." });
    return;
  }

  // Address
  if (!address || typeof address !== "string" || address.trim().length < 5) {
    res.status(400).json({ message: "Address must be at least 5 characters." });
    return;
  }

  // Coordinates
  if (!coordinates || !isValidCoordinates(coordinates)) {
    res.status(400).json({
      message:
        "Coordinates are required and must be an array of [longitude, latitude].",
    });
    return;
  }

  // Event Date (YYYY-MM-DD)
  if (
    !eventDate ||
    typeof eventDate !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(eventDate) ||
    isNaN(Date.parse(eventDate))
  ) {
    res.status(400).json({
      message: "Event date must be in YYYY-MM-DD format.",
    });
    return;
  }

  // Event Time (HH:mm)
  if (
    !eventTime ||
    typeof eventTime !== "string" ||
    !/^([01]\d|2[0-3]):([0-5]\d)$/.test(eventTime)
  ) {
    res.status(400).json({
      message: "Event time must be in HH:mm 24-hour format.",
    });
    return;
  }

  next();
};
