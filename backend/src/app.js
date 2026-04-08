// Add evidence routes

import express from "express";
import cors from "cors";
import controlRoutes from "./routes/controlRoutes.js";
import evidenceRoutes from "./routes/evidenceRoutes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Compliance API running on EC2 🚀");
});

app.use("/api/controls", controlRoutes);
app.use("/api/evidence", evidenceRoutes); // NEW

export default app;