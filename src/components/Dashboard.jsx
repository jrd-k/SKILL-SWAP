import React, { useEffect, useState } from "react";

function MyDashboard({ user }) {
  const [mySkills, setMySkills] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/skills?userId=${user.id}`)
      .then((r) => r.json())
      .then(setMySkills);
  }, [user.id]);

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {mySkills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}</strong> - {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyDashboard;
