// Configure SQS client

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

export const sqs = new AWS.SQS({
  region: process.env.AWS_REGION || "eu-west-1"
});