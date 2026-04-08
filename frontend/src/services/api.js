// API service for backend communication

import axios from "axios";

const API = axios.create({
  baseURL: "http://23.20.243.30:3000/api"
});

// Controls
export const getControls = () => API.get("/controls");
export const createControl = (data) => API.post("/controls", data);

// Evidence
export const getEvidence = () => API.get("/evidence");
export const createEvidence = (data) => API.post("/evidence", data);

// File Upload
export const uploadFile = (formData) =>
  API.post("/evidence/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });