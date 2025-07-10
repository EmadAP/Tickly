import axios from "axios";
import { loginProps, SignupProps } from "../type";

const admin = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

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

export const LoginAdminFc = async (data: loginProps) => {
  const res = await admin.post("/admin/login", data, {
    withCredentials: true,
  });
  return res.data;
};

export const LogoutAdminFc = async () => {
  const res = await admin.post("/admin/logout");
  return res.data;
};

export const ProfileAdminFc = async () => {
  // if (!document.cookie.includes("token=")) {
  //   return null;
  // }
  const res = await admin.get("/admin/profile");
  return res.data;
};
