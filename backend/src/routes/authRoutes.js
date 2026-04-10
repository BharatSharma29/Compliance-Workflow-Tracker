import express from "express";

const router = express.Router();

/**
 * 🔐 SIMPLE LOGIN (HARDCODED USERS)
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simple users
  const users = [
    { email: "admin@test.com", password: "admin123" },
    { email: "user@test.com", password: "user123" }
  ];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Return simple token (email)
  res.json({
    token: user.email,
    email: user.email
  });
});

export default router;