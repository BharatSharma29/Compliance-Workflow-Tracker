// Routes for Evidence Requests
// Includes authentication + RBAC + file upload

import express from "express";
import {
  createEvidenceRequest,
  getEvidenceRequests,
  updateStatus,
  uploadEvidenceFile
} from "../controllers/evidenceController.js";

import { verifyToken } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

/**
 * CREATE EVIDENCE REQUEST
 * Allowed roles: Admin, Manager
 */
router.post(
  "/",
  verifyToken,
  authorize(["Admin", "Manager"]),
  createEvidenceRequest
);

/**
 * GET ALL REQUESTS
 * Any authenticated user can view
 */
router.get(
  "/",
  verifyToken,
  getEvidenceRequests
);

/**
 * UPDATE STATUS (WORKFLOW)
 * Allowed roles: Admin, Auditor
 */
router.put(
  "/:requestId/status",
  verifyToken,
  authorize(["Admin", "Auditor"]),
  updateStatus
);

/**
 * UPLOAD FILE (S3)
 * Allowed roles: Admin, Manager, User
 */
router.post(
  "/upload",
  verifyToken,
  authorize(["Admin", "Manager", "User"]),
  upload.single("file"),
  uploadEvidenceFile
);

export default router;