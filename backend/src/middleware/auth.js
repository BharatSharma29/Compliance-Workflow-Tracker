// Simulated authentication (Cognito will be added later)

export const verifyToken = (req, res, next) => {
  // TEMP user object
  req.user = {
    id: "123",
    role: "Admin" // Change to test roles
  };

  next();
};