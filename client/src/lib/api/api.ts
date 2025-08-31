import axios from "axios";
import { loginProps, SignupProps } from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const SignupUserFc = async (data: SignupProps) => {
  const res = await api.post("/api/signup", data);
  return res.data;
};

export const LoginUserFc = async (data: loginProps) => {
  const res = await api.post("/api/login", data);
  return res.data;
};

export const LogoutUserFc = async () => {
  const res = await api.post("/api/logout");
  return res.data;
};

export const ProfileUserFc = async () => {
  if (!document.cookie.includes("token=")) {
    return null;
  }
  const res = await api.get("/api/profile");
  return res.data;
};

export const GetAllEventsFc = async () => {
  const res = await api.get("/api/events");
  return res.data;
};

export const GetEventByIdFc = async (id: string) => {
  const res = await api.get(`/api/events/${id}`);
  return res.data;
};

export const GetSectionsByEventIdFc = async (eventId: string) => {
  const res = await api.get(`/api/events/${eventId}/sections`);
  return res.data;
};
export const GetSectionByIdFc = async (id: string) => {
  const res = await api.get(`/api/sections/${id}`);
  return res.data;
};
export const GetAllSectionsFc = async () => {
  const res = await api.get("/api/sections");
  return res.data;
};

export const CreatePendingTicketsFc = async (
  items: {
    eventId: string;
    sectionId: string;
    quantity: number;
  }[]
) => {
  const res = await api.post(
    "/api/tickets/checkout",
    { items },
    { withCredentials: true }
  );
  return res.data;
};

// Fetch cart
export const GetCartFc = async () => {
  const res = await api.get("/api/cart", { withCredentials: true });
  return res.data;
};

// Add item
export const AddToCartFc = async (payload: {
  eventId: string;
  sectionId: string;
  total: number;
}) => {
  const res = await api.post("/api/cart/add", payload, {
    withCredentials: true,
  });
  return res.data;
};

// Update item
export const UpdateCartItemFc = async (payload: {
  sectionId: string;
  total: number;
}) => {
  const res = await api.put(
    `/api/cart/update/${payload.sectionId}`,
    { total: payload.total },
    { withCredentials: true }
  );
  return res.data;
};

// Remove item
export const RemoveFromCartFc = async (sectionId: string) => {
  const res = await api.delete(`/api/cart/remove/${sectionId}`, {
    withCredentials: true,
  });
  return res.data;
};

// Clear cart
export const ClearCartFc = async () => {
  const res = await api.delete("/api/cart/clear", { withCredentials: true });
  return res.data;
};
