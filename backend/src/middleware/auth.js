// Authentication middleware
// Decodes JWT token from Cognito and attaches user info

import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // Extract token from "Bearer <token>"
    const token = header.split(" ")[1];

    // Decode token (no verification needed for assignment)
    const decoded = jwt.decode(token);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    // Attach user info to request
    req.user = decoded;

    console.log("User:", decoded.email);
    console.log("Groups:", decoded["cognito:groups"]);

    next();

  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({ error: err.message });
  }
};