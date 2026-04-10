import express from "express";
import {
  getControls,
  createControl,
  deleteControl
} from "../controllers/controlController.js";

import { verifyToken } from "../middleware/auth.js";
import { requireAdmin } from "../middleware/roles.js";

const router = express.Router();

// All logged-in users
router.get("/", verifyToken, getControls);

// Admin only
router.post("/", verifyToken, requireAdmin, createControl);
router.delete("/:id", verifyToken, requireAdmin, deleteControl);

export default router;