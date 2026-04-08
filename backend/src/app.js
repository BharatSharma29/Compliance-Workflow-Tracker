// // Main Express app configuration

// import express from "express";
// import cors from "cors";
// import controlRoutes from "./routes/controlRoutes.js";

// const app = express();

// // Enable CORS so frontend can call backend
// app.use(cors());

// // Allow JSON data in requests
// app.use(express.json());

// // Test route (health check)
// app.get("/", (req, res) => {
//   res.send("Compliance API running...");
// });

// // Register routes
// app.use("/api/controls", controlRoutes);

// export default app;


// src/app.js
// Main Express app configuration

import express from "express";
import cors from "cors";
import controlRoutes from "./routes/controlRoutes.js";

const app = express();

// Allow requests from ANY origin (needed for EC2 + frontend)
app.use(cors({
  origin: "*"
}));

// Parse JSON requests
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Compliance API running on EC2 🚀");
});

// API routes
app.use("/api/controls", controlRoutes);

export default app;