// Controller using custom library

import { v4 as uuid } from "uuid";
import { putItem, getItems } from "../services/dynamoService.js";

// Import your custom library
import { PolicyEngine } from "../../../library/compliance-policy-sdk/index.js";

const policy = new PolicyEngine();

export const createControl = async (req, res) => {
  try {
    const { title, framework, frequency } = req.body;

    const control = {
      controlId: uuid(),
      title,
      framework,
      frequency,
      createdAt: new Date().toISOString()
    };

    // Create audit log using library
    const auditEvent = policy.createAudit(
      "CREATE_CONTROL",
      control.controlId,
      req.user.id
    );

    console.log("Audit Event:", auditEvent);

    // Save to DynamoDB
    await putItem({
      TableName: process.env.DYNAMO_TABLE_CONTROLS || "Controls",
      Item: control
    });

    res.status(201).json(control);

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getControls = async (req, res) => {
  try {
    const controls = await getItems({
      TableName: process.env.DYNAMO_TABLE_CONTROLS || "Controls"
    });

    res.json(controls);

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};