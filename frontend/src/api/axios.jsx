import axios from "axios";
import { getCookie } from "../utils/cookies";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
axiosInstance.defaults.timeout = 3000;
axiosInstance.interceptors.request.use(
  (request) => {
    const token = getCookie("AccessToken");
    if (token) request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
