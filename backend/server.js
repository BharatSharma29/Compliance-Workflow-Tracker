// // Entry point of the backend server
// import app from "./src/app.js";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// // Define port (default 3000)
// const PORT = process.env.PORT || 3000;

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server.js
// Entry point for backend server (Production-ready)

import app from "./src/app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Use environment PORT (EC2 uses dynamic ports sometimes)
const PORT = process.env.PORT || 3000;

// IMPORTANT: listen on 0.0.0.0 for EC2 (not localhost)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});