import express from "express";
import cors from "cors";

import controlRoutes from "./routes/controlRoutes.js";
import evidenceRoutes from "./routes/evidenceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Compliance API running on EC2 🚀");
});

// Routes
app.use("/api/controls", controlRoutes);
app.use("/api/evidence", evidenceRoutes); // 👈 MUST EXIST

export default app;