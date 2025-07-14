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

    const ticket = await Ticket.create({
      creator: admin.id,
      title,
      description,
      category,
      coordinates,
      eventDate,
      price,
      quantity,
      onSell: onSell === "true",
      off: off ? Number(off) : undefined,
      imageUrl,
    });

    res.status(201).json(ticket);
  } catch (err) {
    console.error("Create Ticket Error:", err);
    res.status(500).json({ message: "Server error while creating ticket" });
  }
};
