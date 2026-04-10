import axios from "axios";

const api = axios.create({
  baseURL: "http://23.20.243.30:3000/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getControls = () => api.get("/controls");
export const createControl = (data) => api.post("/controls", data);

export const getEvidenceRequests = () => api.get("/evidence");
export const createEvidenceRequest = (data) => api.post("/evidence", data);

export const uploadFile = (formData) =>
  api.post("/evidence/upload", formData);

export default api;