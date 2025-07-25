import axios from "axios";
import { loginProps, SignupProps } from "../type";

const admin = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// Admin Signup
export const SignupAdminFc = async (data: SignupProps) => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  if (data.image) {
    formData.append("image", data.image);
  }

  const res = await admin.post("/admin/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Admin Login
export const LoginAdminFc = async (data: loginProps) => {
  const res = await admin.post("/admin/login", data);
  return res.data;
};

// Admin Logout
export const LogoutAdminFc = async () => {
  const res = await admin.post("/admin/logout");
  return res.data;
};

// Admin Profile
export const ProfileAdminFc = async () => {
  if (!document.cookie.includes("token=")) {
    return null;
  }
  const res = await admin.get("/admin/profile");
  return res.data;
};

// Create Event
export const CreateEventFc = async (formData: FormData) => {
  const res = await admin.post("/admin/events", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Get All Events
export const GetAllEventsFc = async () => {
  const res = await admin.get("/admin/events");
  return res.data;
};

//Delete one Event
export const DeleteEventFc = async (id: string) => {
  await admin.delete(`/admin/events/${id}`);
};

//Update one Event
export const UpdateEventFc = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const res = await admin.put(`/admin/events/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

//Get one Event
export const GetEventByIdFc = async (id: string) => {
  const res = await admin.get(`/admin/Events/${id}`);
  return res.data;
};

//Create Section
export const CreateSectionFc = async ({
  eventId,
  data,
}: {
  eventId: string;
  data: {
    name:
      | "VIP"
      | "Floor"
      | "Section A"
      | "Section B"
      | "Section C"
      | "Section D"
      | "Section E"
      | "Section F"
      | "Balcony Left"
      | "Balcony Right"
      | "General"
      | string;
    price: number;
    quantity: number;
    onSell: boolean;
    discountPercent?: number;
  };
}) => {
  const res = await admin.post(`/admin/events/${eventId}/sections`, data);
  return res.data;
};

//Get Sections by Event ID
export const GetSectionsByEventIdFc = async (eventId: string) => {
  const res = await admin.get(`/admin/events/${eventId}/sections`);
  return res.data;
};

// Get Section by ID
export const GetSectionByIdFc = async (id: string) => {
  const res = await admin.get(`/admin/sections/${id}`);
  return res.data;
};

// Update Section
export const UpdateSectionFc = async ({
  id,
  data,
}: {
  id: string;
  data: {
    name:
      | "VIP"
      | "Floor"
      | "Section A"
      | "Section B"
      | "Section C"
      | "Section D"
      | "Section E"
      | "Section F"
      | "Balcony Left"
      | "Balcony Right"
      | "General"
      | string;
    price: number;
    quantity: number;
    onSell: boolean;
    discountPercent?: number;
  };
}) => {
  const res = await admin.put(`/admin/sections/${id}`, data);
  return res.data;
};

// Delete Section
export const DeleteSectionFc = async (id: string) => {
  await admin.delete(`/admin/sections/${id}`);
};

//Get all admins
export const GetAllAdminFc = async () => {
  const res = await admin.get("/admin/admins");
  return res.data;
};

//Delete one admin
export const DeleteAdminFc = async (id: string) => {
  await admin.delete(`/admin/admin/${id}`);
};
