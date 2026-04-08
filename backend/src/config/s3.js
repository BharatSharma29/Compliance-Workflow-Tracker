// Configure AWS S3 client

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

// Create S3 instance
export const s3 = new AWS.S3({
  region: process.env.AWS_REGION || "eu-west-1"
});