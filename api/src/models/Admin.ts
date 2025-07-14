import mongoose, { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  email: string;
  password: string;
  image: string;
}

const AdminSchema = new Schema<IAdmin>(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 10,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdminModel = model<IAdmin>("Admin", AdminSchema);

export default AdminModel;
