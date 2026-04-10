import app from "./src/app.js";
import dotenv from "dotenv";

import path from "path";

dotenv.config();

app.use(express.static(path.resolve("../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});