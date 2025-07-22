// src/components/SkillList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div>
      <h2>Available Skills</h2>
      {skills.map((skill) => (
        <div key={skill.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
          <Link to={`/skills/${skill.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
