// Routes for Controls
// Includes authentication + role-based access control (RBAC)

import express from "express";
import {
  createControl,
  getControls
} from "../controllers/controlController.js";

import { verifyToken } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

/**
 * CREATE CONTROL
 * Only Admin users are allowed
 */
router.post(
  "/",
  verifyToken,              // Step 1: Verify JWT token from Cognito
  authorize(["Admin"]),     // Step 2: Allow only Admin role
  createControl             // Step 3: Execute controller
);

/**
 * GET ALL CONTROLS
 * All authenticated users can view controls
 */
router.get(
  "/",
  verifyToken,              // Must be logged in
  getControls
);

export default router;