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

// Create Ticket
export const CreateTicketFc = async (formData: FormData) => {
  const res = await admin.post("/admin/tickets", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Get All Ticket
export const GetAllTicketsFc = async () => {
  const res = await admin.get("/admin/tickets");
  return res.data;
};

//Delete one ticket
export const DeleteTicketFc = async (id: string) => {
  await admin.delete(`/admin/tickets/${id}`);
};

//Update one ticket
export const UpdateTicketFc = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const res = await admin.put(`/admin/tickets/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

//Get one ticket
export const GetTicketByIdFc = async (id: string) => {
  const res = await admin.get(`/admin/tickets/${id}`);
  return res.data;
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
