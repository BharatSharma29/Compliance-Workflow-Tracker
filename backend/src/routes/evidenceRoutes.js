// Routes for Evidence Requests
// Simplified RBAC: admin + user only

import express from "express";
import {
  createEvidenceRequest,
  getEvidenceRequests,
  updateStatus,
  uploadEvidenceFile
} from "../controllers/evidenceController.js";

import { verifyToken } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roles.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

/**
 * CREATE EVIDENCE REQUEST
 * ✅ Only Admin can create requests
 */
router.post(
  "/",
  verifyToken,
  requireAdmin,
  createEvidenceRequest
);

/**
 * GET ALL REQUESTS
 * ✅ Any logged-in user can view
 */
router.get(
  "/",
  verifyToken,
  getEvidenceRequests
);

/**
 * UPDATE STATUS (WORKFLOW)
 * ✅ Only Admin can update status
 */
router.put(
  "/:requestId/status",
  verifyToken,
  requireAdmin,
  updateStatus
);

/**
 * UPLOAD FILE (S3)
 * ✅ Any logged-in user can upload
 */
router.post(
  "/upload",
  verifyToken,
  upload.single("file"),
  uploadEvidenceFile
);

export default router;