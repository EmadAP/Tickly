import { Request, Response } from "express";
import Section from "../models/Section";
import mongoose from "mongoose";

// Create Section
export const createSection = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, onSell, sold, discountPercent } = req.body;
    const { eventId } = req.params;

    if (!eventId || !mongoose.Types.ObjectId.isValid(eventId)) {
      res.status(400).json({ message: "Invalid or missing event ID" });
      return;
    }

    const section = await Section.create({
      event: eventId,
      name: name.trim(),
      price: Number(price),
      quantity: Number(quantity),
      sold: Number(sold),
      onSell: Boolean(onSell),
      discountPercent: discountPercent ? Number(discountPercent) : undefined,
    });

    res.status(201).json(section);
  } catch (err) {
    console.error("Create Section Error:", err);
    res.status(500).json({ message: "Server error while creating section" });
  }
};

// Get All Sections
export const getSections = async (_req: Request, res: Response) => {
  try {
    const sections = await Section.find()
      .populate("event")
      .sort({ createdAt: -1 });
    res.status(200).json(sections);
  } catch (err) {
    console.error("Error fetching sections:", err);
    res.status(500).json({ message: "Failed to fetch sections" });
  }
};

// Get Section By ID
export const getSectionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    const section = await Section.findById(id).populate("event");
    if (!section) {
      res.status(404).json({ message: "Section not found" });
      return;
    }

    res.json(section);
  } catch (err) {
    console.error("Failed to fetch section:", err);
    res.status(500).json({ message: "Failed to fetch section" });
  }
};

// Update Section
export const updateSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    const section = await Section.findById(id);
    if (!section) {
      res.status(404).json({ message: "Section not found" });
      return;
    }

    section.name = updatedData.name?.trim() ?? section.name;
    section.price = updatedData.price ?? section.price;
    section.quantity = updatedData.quantity ?? section.quantity;
    section.sold = updatedData.sold ?? section.sold;
    section.onSell = updatedData.onSell ?? section.onSell;
    section.discountPercent =
      updatedData.discountPercent !== undefined
        ? Number(updatedData.discountPercent)
        : section.discountPercent;

    await section.save();

    res.status(200).json({ message: "Section updated", section });
  } catch (err) {
    console.error("Update section error:", err);
    res.status(500).json({ message: "Failed to update section" });
  }
};

// Delete Section
export const deleteSection = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid section ID" });
      return;
    }

    const section = await Section.findById(id);
    if (!section) {
      res.status(404).json({ message: "Section not found" });
      return;
    }

    await section.deleteOne();
    res.json({ message: "Section deleted successfully" });
  } catch (err) {
    console.error("Error deleting section", err);
    res.status(500).json({ message: "Failed to delete section" });
  }
};

// Get Section by event id
export const getSectionsByEventId = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      res.status(400).json({ message: "Invalid event ID" });
      return;
    }

    const sections = await Section.find({ event: eventId }).sort({
      createdAt: -1,
    });

    res.status(200).json(sections);
  } catch (err) {
    console.error("Error fetching sections for event:", err);
    res.status(500).json({ message: "Failed to fetch sections" });
  }
};
