import React from "react";
import { useState } from "react";

function EvidenceRequests() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    controlId: "",
    assignedTo: "",
    dueDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.controlId || !form.assignedTo || !form.dueDate) {
      alert("All fields required");
      return;
    }

    const newRequest = {
      requestId: Date.now(),
      controlId: form.controlId,
      assignedTo: form.assignedTo,
      dueDate: form.dueDate,
      status: "Draft"
    };

    setRequests([...requests, newRequest]);

    setForm({
      controlId: "",
      assignedTo: "",
      dueDate: ""
    });
  };

  const updateStatus = (id, newStatus) => {
    const updated = requests.map((r) =>
      r.requestId === id ? { ...r, status: newStatus } : r
    );

    setRequests(updated);
  };

  return (
    <div>
      <h2>Evidence Requests</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Control ID"
          value={form.controlId}
          onChange={(e) =>
            setForm({ ...form, controlId: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Assigned To"
          value={form.assignedTo}
          onChange={(e) =>
            setForm({ ...form, assignedTo: e.target.value })
          }
        />

        <input
          type="date"
          value={form.dueDate}
          onChange={(e) =>
            setForm({ ...form, dueDate: e.target.value })
          }
        />

        <button type="submit">Create Request</button>
      </form>

      {/* LIST */}
      <ul>
        {requests.map((r) => (
          <li key={r.requestId}>
            <strong>Control:</strong> {r.controlId} |{" "}
            <strong>User:</strong> {r.assignedTo} |{" "}
            <strong>Status:</strong> {r.status}

            <div>
              <button onClick={() => updateStatus(r.requestId, "Submitted")}>
                Submit
              </button>
              <button onClick={() => updateStatus(r.requestId, "Approved")}>
                Approve
              </button>
              <button onClick={() => updateStatus(r.requestId, "Rejected")}>
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvidenceRequests;