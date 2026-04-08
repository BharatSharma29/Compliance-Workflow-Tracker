// Middleware to handle file uploads to S3

import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../config/s3.js";

// Configure multer to upload directly to S3
export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read", // makes file accessible via URL
    key: function (req, file, cb) {
      // Unique file name
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    }
  })
});