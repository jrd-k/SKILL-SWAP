
import React, { useState } from "react";

function AddSkillForm({ onAddSkill }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then(onAddSkill);
    setFormData({ name: "", description: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Skill Name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Skill Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add Skill</button>
    </form>
  );
}

export default AddSkillForm;
