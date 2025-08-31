import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICartItem {
  event: Types.ObjectId; // Event reference
  section: Types.ObjectId; // Section reference
  total: number;
}

export interface ICart extends Document {
  user: Types.ObjectId; // Which user owns this cart
  items: ICartItem[];
}

const CartItemSchema = new Schema<ICartItem>(
  {
    event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    section: { type: Schema.Types.ObjectId, ref: "Section", required: true },
    total: { type: Number, default: 1, min: 1 },
  },
  { _id: false }
);

const CartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: { type: [CartItemSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);
