import { Request, Response } from "express";
import Event from "../models/Event";
import fs from "fs";
import mongoose from "mongoose";
import path from "path";

// Create Event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin; // From verifyToken
    const {
      title,
      description,
      category,
      coordinates,
      eventDate,
      eventTime,
      country,
      city,
      address,
      imageUrl,
    } = req.body;

    if (!imageUrl) {
      res.status(400).json({ message: "Image upload failed" });
      return;
    }

    const parsedCoordinates =
      typeof coordinates === "string" ? JSON.parse(coordinates) : coordinates;

    // Create event document
    const event = await Event.create({
      creator: admin.id,
      title,
      description,
      category,
      country: country.trim(),
      city: city.trim(),
      address: address.trim(),
      coordinates: parsedCoordinates,
      eventDate: String(eventDate).slice(0, 10), // just YYYY-MM-DD part
      eventTime: String(eventTime), // HH:mm
      image: imageUrl,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("Create Event Error:", err);
    res.status(500).json({ message: "Server error while creating event" });
  }
};

// Get All Events
export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Failed to fetch events" });
  }
};

// Get Event By ID
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid event ID" });
      return;
    }
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.json(event);
  } catch (err) {
    console.error("Failed to fetch event:", err);
    res.status(500).json({ message: "Failed to fetch event" });
  }
};

// Update Event
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid event ID" });
      return;
    }

    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    // TODO: Delete old image if new one uploaded

    event.title = updatedData.title ?? event.title;
    event.description = updatedData.description ?? event.description;
    event.category = updatedData.category ?? event.category;
    event.country = updatedData.country?.trim() ?? event.country;
    event.city = updatedData.city?.trim() ?? event.city;
    event.address = updatedData.address?.trim() ?? event.address;
    event.coordinates = updatedData.coordinates ?? event.coordinates;
    event.eventDate = updatedData.eventDate ?? event.eventDate;
    event.eventTime = updatedData.eventTime ?? event.eventTime;

    await event.save();

    res.status(200).json({ message: "Event updated", event });
  } catch (err) {
    console.error("Update event error:", err);
    res.status(500).json({ message: "Failed to update event" });
  }
};

// Delete Event
export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    // Delete image file if exists

    // if (Array.isArray(event.image)) {
    //   event.image.forEach((path) => {
    //     try {
    //       fs.unlinkSync(path);
    //     } catch (err) {
    //       console.warn("Failed to delete image file:", path, err);
    //     }
    //   });
    // }

    if (event.image) {
      try {
        fs.unlinkSync(event.image);
      } catch (err) {
        console.warn("Failed to delete image file:", event.image, err);
      }
    }

    await event.deleteOne();

    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("Error deleting event", err);
    res.status(500).json({ message: "Failed to delete event" });
  }
};
