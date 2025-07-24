import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISection extends Document {
  event: Types.ObjectId;
  name: string;
  price: number;
  quantity: number;
  sold: number;
  onSell: boolean;
  discountPercent?: number;
  createdAt: Date;
  updatedAt: Date;
}

const SectionSchema = new Schema<ISection>(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
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
    sold: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    onSell: {
      type: Boolean,
      required: true,
      default: false,
    },
    discountPercent: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ISection>("Section", SectionSchema);
