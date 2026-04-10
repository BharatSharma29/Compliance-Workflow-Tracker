import express from "express";
import cors from "cors";

import controlRoutes from "./routes/controlRoutes.js";
import evidenceRoutes from "./routes/evidenceRoutes.js";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Compliance API running on EC2 🚀");
});

// ROUTES
app.use("/api/controls", controlRoutes);
app.use("/api/evidence", evidenceRoutes);

export default app;