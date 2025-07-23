
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SkillDetail() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/skills/${id}`)
      .then((res) => res.json())
      .then((data) => setSkill(data));
  }, [id]);

  if (!skill) return <p>Loading skill info...</p>;

  return (
    <div>
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
      <p><strong>Location:</strong> {skill.location}</p>
      <p><strong>Level:</strong> {skill.level}</p>
    </div>
  );
}

export default SkillDetail;
