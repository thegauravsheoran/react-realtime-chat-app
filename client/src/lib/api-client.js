import { HOST } from "@/utils/constants";
import axios from "axios";

const baseURL = "https://react-realtime-chat-app-beta.vercel.app";

export const api_client = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
