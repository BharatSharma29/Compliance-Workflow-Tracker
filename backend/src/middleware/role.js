// Role-Based Access Control (RBAC)
// Checks if user belongs to required Cognito group

export const authorize = (roles) => {
  return (req, res, next) => {

    // Get user groups from token
    const userGroups = req.user["cognito:groups"] || [];

    // Check if user has at least one required role
    const isAllowed = roles.some((role) =>
      userGroups.includes(role)
    );

    if (!isAllowed) {
      return res.status(403).json({
        message: "Access denied: insufficient permissions"
      });
    }

    next();
  };
};