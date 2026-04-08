import axios from "axios";

const API = axios.create({
  baseURL: "http://23.20.243.30:3000/api"
});

// Attach token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;

// Controls
export const getControls = () => API.get("/controls");
export const createControl = (data) => API.post("/controls", data);

// Evidence
export const getEvidence = () => API.get("/evidence");
export const createEvidence = (data) => API.post("/evidence", data);

// Upload
export const uploadFile = (formData) =>
  API.post("/evidence/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });