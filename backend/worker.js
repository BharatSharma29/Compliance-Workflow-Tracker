// Simple SQS worker (polls messages)

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const sqs = new AWS.SQS({
  region: process.env.AWS_REGION
});

const queueUrl = process.env.SQS_QUEUE_URL;

// Poll messages continuously
const pollQueue = async () => {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 5,
    WaitTimeSeconds: 10
  };

  const data = await sqs.receiveMessage(params).promise();

  if (data.Messages) {
    for (const msg of data.Messages) {
      const body = JSON.parse(msg.Body);

      console.log("Processing event:", body);

      // DELETE message after processing
      await sqs.deleteMessage({
        QueueUrl: queueUrl,
        ReceiptHandle: msg.ReceiptHandle
      }).promise();
    }
  }

  // Continue polling
  setTimeout(pollQueue, 2000);
};

// Start worker
pollQueue();