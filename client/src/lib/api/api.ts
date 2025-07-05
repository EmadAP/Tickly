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
  await api.post("/api/logout");
};
