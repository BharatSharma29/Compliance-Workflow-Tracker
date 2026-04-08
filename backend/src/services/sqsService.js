// Service to send messages to SQS

import { sqs } from "../config/sqs.js";

export const sendMessage = async (messageBody) => {
  const params = {
    QueueUrl: process.env.SQS_QUEUE_URL,
    MessageBody: JSON.stringify(messageBody)
  };

  return sqs.sendMessage(params).promise();
};