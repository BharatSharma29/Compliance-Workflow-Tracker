import React, { useState, useEffect } from "react";
import {
  getEvidenceRequests,
  createEvidenceRequest
} from "../services/api";

function EvidenceRequests() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    controlId: "",
    assignedTo: "",
    dueDate: ""
  });

  // Fetch all evidence requests
  const fetchData = async () => {
    const res = await getEvidenceRequests();
    setRequests(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create request
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvidenceRequest(form);
    fetchData();
  };

  // Handle file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await uploadFile(formData);

    alert("File uploaded: " + res.data.fileUrl);
  };

  return (
    <div>
      <h2>Evidence Requests</h2>

      {/* CREATE REQUEST */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Control ID"
          onChange={(e) =>
            setForm({ ...form, controlId: e.target.value })
          }
        />

        <input
          placeholder="Assigned To"
          onChange={(e) =>
            setForm({ ...form, assignedTo: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setForm({ ...form, dueDate: e.target.value })
          }
        />

        {/* FILE UPLOAD */}
        <input type="file" onChange={handleFileUpload} />

        <button type="submit">Create Request</button>
      </form>

      {/* LIST */}
      <ul>
        {requests.map((r) => (
          <li key={r.requestId}>
            <strong>{r.controlId}</strong> | {r.status} | Risk: {r.riskScore}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvidenceRequests;