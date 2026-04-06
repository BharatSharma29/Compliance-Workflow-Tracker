import React from "react";
import { useEffect, useState } from "react";
import { getControls, createControl } from "../services/api";
import ControlForm from "../components/ControlForm";

function Controls() {
  const [controls, setControls] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchControls = async () => {
    try {
      setLoading(true);
      const res = await getControls();
      setControls(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching controls");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchControls();
  }, []);

  const handleCreate = async (data) => {
    try {
      await createControl(data);
      fetchControls();
    } catch (err) {
      console.error(err);
      alert("Error creating control");
    }
  };

  return (
    <div>
      <h2>Controls</h2>

      <ControlForm onCreate={handleCreate} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {controls.map((c) => (
            <li key={c.controlId}>
              <strong>{c.title}</strong> - {c.framework} ({c.frequency})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Controls;