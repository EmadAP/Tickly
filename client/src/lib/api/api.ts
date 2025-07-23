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

export const GetAllTicketsFc = async () => {
  const res = await api.get("/api/tickets");
  return res.data;
};

export const GetTicketByIdFc = async (id: string) => {
  const res = await api.get(`/api/tickets/${id}`);
  return res.data;
};
