import { dynamo } from "../config/aws.js";

export const putItem = async (params) => {
  return dynamo.put(params).promise();
};

export const getItems = async (params) => {
  const data = await dynamo.scan(params).promise();
  return data.Items;
};