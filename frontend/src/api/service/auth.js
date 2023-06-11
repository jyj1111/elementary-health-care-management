import { AxiosInstance } from "../axios";
import { setCookie } from "../../utils/cookies";
export const login = async (user) => {
  const { data } = await AxiosInstance.post("/auth/login", user);
  setCookie("accessToken", data.accessToken);
  console.log(data);
  return data;
};

export const register = async (user) => {
  const { data } = await AxiosInstance.post("/auth/register", user);
  console.log(data);
  return data;
};

export const verify = async () => {
  const { data } = await AxiosInstance.get("/api/auth/verify");
  return data;
};

export const refresh = async () => {
  const { data } = await AxiosInstance.get("/api/auth/refresh");
  return data;
};
