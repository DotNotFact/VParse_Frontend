import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4001",
  // baseURL: "https://vparse.site:4001",
  withCredentials: true,
});
