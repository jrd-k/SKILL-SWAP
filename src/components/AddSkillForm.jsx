import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddSkillForm() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    availability: '',
    skillLevel: '',
    location: ''
  });

  if (!currentUser) {
    return <p className="text-center text-red-500 mt-10">You must be logged in to add a skill.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSkill = {
      ...formData,
      userId: currentUser.id,
      userName: currentUser.username
    };

    try {
      const res = await fetch("http://localhost:3001/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newSkill)
      });

      if (res.ok) {
        setFormData({
          title: '',
          description: '',
          category: '',
          availability: '',
          skillLevel: '',
          location: ''
        });
        navigate("/skills");
      }
    } catch (err) {
      console.error("Error posting skill:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Skill Title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Skill Description" value={formData.description} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
        <input type="text" name="category" placeholder="Category (e.g. Tech, Art)" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="availability" placeholder="Availability (e.g. Weekends)" value={formData.availability} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="skillLevel" placeholder="Skill Level (e.g. Beginner)" value={formData.skillLevel} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="location" placeholder="Location (e.g. Kilimani)" value={formData.location} onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Skill</button>
      </form>
    </div>
  );
}

export default AddSkillForm;
