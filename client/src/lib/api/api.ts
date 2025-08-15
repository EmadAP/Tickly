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
