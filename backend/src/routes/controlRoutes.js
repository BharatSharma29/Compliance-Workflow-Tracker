import express from "express";
import {
  getControls,
  createControl
} from "../controllers/controlController.js";

import { verifyToken } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roles.js";

const router = express.Router();

/**
 * GET ALL CONTROLS
 * Any logged-in user
 */
router.get("/", verifyToken, getControls);

/**
 * CREATE CONTROL
 * Admin only
 */
router.post("/", verifyToken, requireAdmin, createControl);

export default router;