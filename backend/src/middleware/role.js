/**
 * 🔐 Role-Based Access Control Middleware
 * Only allows admin users
 */

export const requireAdmin = (req, res, next) => {
  try {
    // Check if user exists and has role
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied: Admin only"
      });
    }

    next();

  } catch (error) {
    res.status(500).json({
      message: "Error in role validation",
      error: error.message
    });
  }
};