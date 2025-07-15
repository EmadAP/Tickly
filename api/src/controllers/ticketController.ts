import { Request, Response } from "express";
import Ticket from "../models/Ticket";

export const createTicket = async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin; // From verifyToken
    const {
      title,
      description,
      category,
      coordinates,
      eventDate,
      price,
      quantity,
      onSell,
      off,
      imageUrl,
    } = req.body;

    const parsedCoordinates =
      typeof coordinates === "string" ? JSON.parse(coordinates) : coordinates;

    const parsedPrice = Number(price);
    const parsedQuantity = Number(quantity);
    const parsedOnSell =
      onSell === true || onSell === "true" || onSell === "1" || onSell === 1;
    const parsedOff = parsedOnSell && off ? Number(off) : undefined;
    const parsedEventDate = String(eventDate).slice(0, 10);

    if (!imageUrl) {
      res.status(400).json({ message: "Image upload failed" });
      return;
    }

    const ticket = await Ticket.create({
      creator: admin.id,
      title,
      description,
      category,
      coordinates: parsedCoordinates,
      eventDate: parsedEventDate,
      price: parsedPrice,
      quantity: parsedQuantity,
      onSell: parsedOnSell,
      off: parsedOff,
      imageUrl,
    });

    res.status(201).json(ticket);
  } catch (err) {
    console.error("Create Ticket Error:", err);
    res.status(500).json({ message: "Server error while creating ticket" });
  }
};
