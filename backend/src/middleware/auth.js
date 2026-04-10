import jwt from "jsonwebtoken";

/**
 * 🔐 Simple Authentication + Role Logic
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
    const decoded = jwt.decode(token);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    // ✅ SIMPLE ROLE LOGIC (NO COGNITO CONFIG NEEDED)
    const email = decoded.email;

    req.user = {
      email,
      role: email === "admin@test.com" ? "admin" : "user"
    };

    next();

  } catch (error) {
    res.status(500).json({
      message: "Auth error",
      error: error.message
    });
  }
};