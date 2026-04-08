import { v4 as uuid } from "uuid";
import { putItem, getItems } from "../services/dynamoService.js";
import { PolicyEngine } from "../../../library/compliance-policy-sdk/index.js";
import { sendMessage } from "../services/sqsService.js";

const policy = new PolicyEngine();

// CREATE REQUEST
export const createEvidenceRequest = async (req, res) => {
  try {
    const { controlId, assignedTo, dueDate } = req.body;

    const request = {
      requestId: uuid(),
      controlId,
      assignedTo,
      dueDate,
      status: "Draft",
      createdAt: new Date().toISOString()
    };

    request.riskScore = policy.calculateRisk(request);

    await putItem({
      TableName: "EvidenceRequests",
      Item: request
    });

    await sendMessage({
      type: "REQUEST_CREATED",
      requestId: request.requestId,
      user: req.user.email
    });

    res.status(201).json(request);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET REQUESTS
export const getEvidenceRequests = async (req, res) => {
  try {
    const data = await getItems({
      TableName: "EvidenceRequests"
    });

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE STATUS
export const updateStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { currentStatus, newStatus } = req.body;

    policy.validateTransition(currentStatus, newStatus);

    await putItem({
      TableName: "EvidenceRequests",
      Item: {
        requestId,
        status: newStatus,
        updatedAt: new Date().toISOString()
      }
    });

    await sendMessage({
      type: "STATUS_UPDATED",
      requestId,
      newStatus
    });

    res.json({ message: "Updated successfully" });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// FILE UPLOAD
export const uploadEvidenceFile = async (req, res) => {
  try {
    const fileUrl = req.file.location;

    await sendMessage({
      type: "FILE_UPLOADED",
      fileUrl
    });

    res.json({ fileUrl });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};