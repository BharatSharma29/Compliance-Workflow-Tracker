import express from "express";
import {
  getControls,
  createControl,
  deleteControl
} from "../controllers/controlController.js";

import { verifyToken } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roles.js";

const router = express.Router();

/**
 * ===============================
 * 🔓 PUBLIC / AUTHENTICATED ROUTES
 * ===============================
 */

// 👉 Get all controls (any logged-in user)
router.get("/", verifyToken, getControls);


/**
 * ===============================
 * 🔐 ADMIN-ONLY ROUTES
 * ===============================
 */

// 👉 Create new control (ONLY admin)
router.post("/", verifyToken, requireAdmin, createControl);

// 👉 Delete control (ONLY admin)
router.delete("/:id", verifyToken, requireAdmin, deleteControl);


export default router;