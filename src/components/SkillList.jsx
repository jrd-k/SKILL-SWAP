import React from "react";
import useFetch from "../hooks/useFetch";

function SkillList() {
  const { data: skills, loading, error } = useFetch("http://localhost:3001/skills");

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Available Skills</h2>
      {skills.map((skill) => (
        <div key={skill.id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
          <h3>{skill.title}</h3>
          <p><strong>Category:</strong> {skill.category}</p>
          <p><strong>Level:</strong> {skill.skillLevel}</p>
          <p><strong>Description:</strong> {skill.description}</p>
          <p><strong>Location:</strong> {skill.location}</p>
          <p><strong>Availability:</strong> {skill.availability}</p>
          <p><strong>Posted by:</strong> {skill.userName}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
