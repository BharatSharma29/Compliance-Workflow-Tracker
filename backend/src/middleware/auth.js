// Middleware to verify Cognito JWT token

import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import axios from "axios";

let pems;

// Load Cognito public keys
const getPems = async () => {
  if (!pems) {
    const response = await axios.get(
      "https://cognito-idp.<region>.amazonaws.com/<userPoolId>/.well-known/jwks.json"
    );

    pems = {};
    response.data.keys.forEach((key) => {
      pems[key.kid] = jwkToPem(key);
    });
  }
  return pems;
};

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).send("No token");

    const decoded = jwt.decode(token, { complete: true });
    const pems = await getPems();

    const pem = pems[decoded.header.kid];

    jwt.verify(token, pem, {}, (err, payload) => {
      if (err) return res.status(401).send("Invalid token");

      req.user = payload;
      next();
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};