// Role-based access using Cognito groups

export const authorize = (roles) => {
  return (req, res, next) => {
    const userGroups = req.user["cognito:groups"] || [];

    const hasRole = roles.some((role) =>
      userGroups.includes(role)
    );

    if (!hasRole) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};