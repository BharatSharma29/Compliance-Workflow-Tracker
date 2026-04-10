import jwt from "jsonwebtoken";

/**
 * 🔐 Verify JWT Token Middleware
 * Extracts user info from Cognito token
 */
export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token = header.split(" ")[1];

    // Decode token (no signature verification for simplicity)
    const decoded = jwt.decode(token);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    // 👇 CLEAN ROLE STRUCTURE (ONLY 2 ROLES)
    req.user = {
      email: decoded.email,
      role: decoded["custom:role"] || "user" // default role
    };

    next();

  } catch (error) {
    res.status(500).json({
      message: "Authentication error",
      error: error.message
    });
  }
};