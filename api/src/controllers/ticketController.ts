import { Request, Response } from "express";
import mongoose from "mongoose";
import Ticket from "../models/Ticket";
import Section from "../models/Section";

// Admin
export const getAllTicketsAdmin = async (req: Request, res: Response) => {
  try {
    const { status, userId, eventId, sectionId } = req.query;
    const filter: any = {};

    if (status) filter.status = status;
    if (userId && mongoose.Types.ObjectId.isValid(userId as string))
      filter.user = userId;
    if (eventId && mongoose.Types.ObjectId.isValid(eventId as string))
      filter.event = eventId;
    if (sectionId && mongoose.Types.ObjectId.isValid(sectionId as string))
      filter.section = sectionId;

    const tickets = await Ticket.find(filter)
      .populate("user", "username email")
      .populate("event", "title category country title")
      .populate("section", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(tickets);
  } catch (err) {
    console.error("Error fetching tickets for admin:", err);
    res.status(500).json({ message: "Server error fetching tickets" });
  }
};

//Client
export const createPendingTickets = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ message: "No items in checkout" });
      return;
    }

    const ticketsToCreate = [];

    for (const item of items) {
      if (
        !mongoose.Types.ObjectId.isValid(item.eventId) ||
        !mongoose.Types.ObjectId.isValid(item.sectionId)
      ) {
        res.status(400).json({ message: "Invalid event or section ID" });
        return;
      }

      const section = await Section.findById(item.sectionId);
      if (!section) {
        res.status(404).json({ message: "Section not found" });
        return;
      }

      const activeCount = await Ticket.countDocuments({
        section: item.sectionId,
        status: "active",
      });

      const pendingCount = await Ticket.countDocuments({
        section: item.sectionId,
        status: "pending",
        expiresAt: { $gt: new Date() },
      });

      const alreadyTaken = activeCount + pendingCount;
      const available = section.quantity - alreadyTaken;

      if (item.quantity > available) {
        res.status(400).json({
          message: `Not enough tickets left in section ${section.name}. Only ${available} available.`,
        });
        return;
      }

      for (let i = 0; i < item.quantity; i++) {
        ticketsToCreate.push({
          user: userId,
          event: item.eventId,
          section: item.sectionId,
          pricePaid: section.price,
          status: "pending",
          expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        });
      }
    }

    const createdTickets = await Ticket.insertMany(ticketsToCreate);

    res.status(201).json({ tickets: createdTickets });
  } catch (err) {
    console.error("Error creating pending tickets:", err);
    res.status(500).json({ message: "Server error creating tickets" });
  }
};

export const confirmPayment = async (req: Request, res: Response) => {
  try {
    const { ticketIds } = req.body;
    if (!ticketIds || !Array.isArray(ticketIds)) {
      res.status(400).json({ message: "No ticket IDs provided" });
      return;
    }

    const result = await Ticket.updateMany(
      {
        _id: { $in: ticketIds },
        status: "pending",
        expiresAt: { $gt: new Date() },
      },
      { $set: { status: "active", purchaseDate: new Date(), expiresAt: null } }
    );

    res.status(200).json({
      message: `Activated ${result.modifiedCount} tickets`,
    });
  } catch (err) {
    console.error("Error confirming payment:", err);
    res.status(500).json({ message: "Server error confirming payment" });
  }
};
