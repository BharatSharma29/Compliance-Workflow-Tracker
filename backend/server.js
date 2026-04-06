// Entry point of the backend server
import app from "./src/app.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define port (default 3000)
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});