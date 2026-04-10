/**
 * 🔐 Simple Auth Middleware (NO JWT, NO COGNITO)
 */

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  // token format: "user-email"
  const email = token;

  req.user = {
    email,
    role: email === "admin@test.com" ? "admin" : "user"
  };

  next();
};