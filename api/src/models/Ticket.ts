import mongoose, { Schema, model, Document } from "mongoose";
import { IAdmin } from "./Admin";

export interface ITicket extends Document {
  creator: mongoose.Types.ObjectId | IAdmin;
  title: string;
  description: string;
  category:
    | "Concert"
    | "Sports"
    | "Theater"
    | "Comedy"
    | "Workshop"
    | "Seminar"
    | string;
  coordinates: [number, number];
  image: string;
  eventDate: string; // ISO date string
  price: number;
  quantity: number;
  onSell?: boolean;
  off?: number;
}

const TicketSchema = new Schema<ITicket>(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Admin", // reference to Admin model
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Concert", "Sports", "Theater", "Comedy", "Workshop", "Seminar"],
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: (arr: number[]) => arr.length === 2,
        message: "Coordinates must be an array of [longitude, latitude]",
      },
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: String,
      required: true,
      match: [
        /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD format
        "Event date must be in YYYY-MM-DD format",
      ],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    onSell: {
      type: Boolean,
      default: false,
    },
    off: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

const TicketModel = model<ITicket>("Ticket", TicketSchema);

export default TicketModel;
