import React, { useState } from "react";

function ControlForm({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    framework: "",
    frequency: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        placeholder="Framework"
        value={form.framework}
        onChange={(e) =>
          setForm({ ...form, framework: e.target.value })
        }
      />

      <input
        placeholder="Frequency"
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