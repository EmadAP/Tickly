import { Request, Response } from "express";
import Ticket from "../models/Ticket";
import fs from "fs";
import mongoose from "mongoose";

// Create Ticket
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

// Get All Tickets
export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (err) {
    console.error("Error fetching tickets:", err);
    res.status(500).json({ message: "Failed to fetch tickets" });
  }
};

// Delete Ticket
export const deleteTicket = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    if (Array.isArray(ticket.imageUrl)) {
      ticket.imageUrl.forEach((path) => {
        try {
          fs.unlinkSync(path);
        } catch (err) {
          console.warn("Failed to delete image file:", path, err);
        }
      });
    }

    await ticket.deleteOne();

    res.json({ message: "ticket deleted successfully" });
  } catch (err) {
    console.error("Error deleting ticket", err);
    res.status(500).json({ message: "Failed to delete ticket" });
  }
};

//Update ticket
export const updateTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    console.log("Resived ID from deletation", id);

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid ticket ID" });
      return;
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    
  } catch (err) {}
};
