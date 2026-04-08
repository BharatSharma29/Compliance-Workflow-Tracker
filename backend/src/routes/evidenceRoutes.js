// Routes for Evidence Requests

import express from "express";
import {
  createEvidenceRequest,
  getEvidenceRequests,
  updateStatus,
  uploadEvidenceFile
} from "../controllers/evidenceController.js";

import { verifyToken } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// Create request
router.post("/", verifyToken, createEvidenceRequest);

// Get all requests
router.get("/", verifyToken, getEvidenceRequests);

// Update workflow status
router.put("/:requestId/status", verifyToken, updateStatus);

// Upload file to S3
router.post(
  "/upload",
  verifyToken,
  upload.single("file"),
  uploadEvidenceFile
);

export default router;