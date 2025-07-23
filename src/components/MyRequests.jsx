import React, { useEffect, useState } from "react";

function MyRequests({ user }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/requests?requesterId=${user.id}`)
      .then((r) => r.json())
      .then(setRequests);
  }, [user.id]);

  function handleCancel(id) {
    fetch(`http://localhost:4000/requests/${id}`, {
      method: "DELETE",
    }).then(() =>
      setRequests((r) => r.filter((req) => req.id !== id))
    );
  }

  return (
    <div>
      <h2>My Requests</h2>
      <ul>
        {requests.map((r) => (
          <li key={r.id}>
            Requested Skill ID: {r.skillId}
            <button onClick={() => handleCancel(r.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyRequests;
