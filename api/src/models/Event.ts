import mongoose, { Schema, Document, Types } from "mongoose";

export interface IEvent extends Document {
  creator: Types.ObjectId;
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
  country: string;
  city: string;
  address: string; // Venue/street address, e.g. "123 Main St"
  coordinates: [number, number];
  image: string;
  eventDate: string; // YYYY-MM-DD string
  eventTime: string; // HH:mm, 24-hour
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    creator: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
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
    country: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 200,
      trim: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: (arr: number[]) => arr.length === 2,
        message: "Coordinates must be an array of [longitude, latitude]",
      },
    },
    image: { type: String, required: true, trim: true },
    eventDate: {
      type: String,
      required: true,
      match: [/^\d{4}-\d{2}-\d{2}$/, "Event date must be in YYYY-MM-DD format"],
    },
    eventTime: {
      type: String,
      required: true,
      match: [
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        "Event time must be in HH:mm 24-hour format",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);
