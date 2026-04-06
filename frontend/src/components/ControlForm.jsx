import React from "react";
import { useState } from "react";

function ControlForm({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    framework: "",
    frequency: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.framework || !form.frequency) {
      alert("All fields are required");
      return;
    }

    onCreate(form);

    setForm({
      title: "",
      framework: "",
      frequency: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Control</h3>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Framework (ISO27001, GDPR)"
        value={form.framework}
        onChange={(e) =>
          setForm({ ...form, framework: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Frequency (monthly / quarterly)"
        value={form.frequency}
        onChange={(e) =>
          setForm({ ...form, frequency: e.target.value })
        }
      />

      <button type="submit">Create Control</button>
    </form>
  );
}

export default ControlForm;