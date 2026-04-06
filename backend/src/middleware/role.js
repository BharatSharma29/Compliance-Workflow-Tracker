// Role-Based Access Control (RBAC)

export const authorize = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    // Check if user role is allowed
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};