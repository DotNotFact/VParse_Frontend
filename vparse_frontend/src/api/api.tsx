import axios from "axios";

export const api = axios.create({
  baseURL: "https://vparse.site:4001",
  withCredentials: true,
});
