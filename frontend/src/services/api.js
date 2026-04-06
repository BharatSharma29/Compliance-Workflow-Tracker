import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getControls = () => API.get("/controls");
export const createControl = (data) => API.post("/controls", data);