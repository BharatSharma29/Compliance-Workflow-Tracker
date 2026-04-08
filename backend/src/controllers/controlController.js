import { v4 as uuid } from "uuid";
import { putItem, getItems } from "../services/dynamoService.js";
import { PolicyEngine } from "../../../library/compliance-policy-sdk/index.js";

const policy = new PolicyEngine();

// CREATE CONTROL
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

    const audit = policy.createAudit(
      "CREATE_CONTROL",
      control.controlId,
      req.user.email
    );

    console.log("Audit:", audit);

    await putItem({
      TableName: process.env.DYNAMO_TABLE_CONTROLS || "Controls",
      Item: control
    });

    res.status(201).json(control);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET CONTROLS
export const getControls = async (req, res) => {
  try {
    const data = await getItems({
      TableName: process.env.DYNAMO_TABLE_CONTROLS || "Controls"
    });

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};