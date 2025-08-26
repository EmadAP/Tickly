import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITicket extends Document {
  ticketNumber: string; // Unique ticket code
  seatNumber: string | null;
  user: Types.ObjectId; // Buyer (User ID)
  event: Types.ObjectId; // Event ID
  section: Types.ObjectId; // Section ID
  pricePaid: number; // Price at purchase time
  status: "pending" | "active" | "canceled" | "refunded" | "used";
  purchaseDate: Date | null; // Null until payment is complete
  createdAt: Date;
  updatedAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    ticketNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    seatNumber: {
      type: String,
      trim: true,
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    pricePaid: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "active", "canceled", "refunded", "used"],
      default: "pending",
    },
    purchaseDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

TicketSchema.pre("validate", function (next) {
  if (!this.ticketNumber) {
    this.ticketNumber = `TCK-${Date.now()}-${Math.floor(
      Math.random() * 100000
    )}`;
  }
  next();
});

export default mongoose.model<ITicket>("Ticket", TicketSchema);
