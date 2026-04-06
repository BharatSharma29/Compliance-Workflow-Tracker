// Defines API endpoints for controls

import express from "express";
import { createControl, getControls } from "../controllers/controlController.js";
import { verifyToken } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

// Create control (Admin only)
router.post("/", verifyToken, authorize(["Admin"]), createControl);

// Get all controls (all users)
router.get("/", verifyToken, getControls);

export default router;