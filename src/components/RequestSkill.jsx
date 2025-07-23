import React from "react";

function RequestSkill({ skillId, user }) {
  function handleRequest() {
    fetch("http://localhost:4000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skillId, requesterId: user.id }),
    });
  }

  return <button onClick={handleRequest}>Request Skill</button>;
}

export default RequestSkill;