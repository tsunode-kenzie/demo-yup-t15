import axios from "axios";

export const api = axios.create({
  baseURL: "https://book-api-0p36.onrender.com",
  timeout: 10000,
});
