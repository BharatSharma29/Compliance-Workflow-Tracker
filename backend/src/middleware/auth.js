import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).send("No token");
    }

    const token = header.split(" ")[1];
    const decoded = jwt.decode(token);

    req.user = decoded;

    next();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};