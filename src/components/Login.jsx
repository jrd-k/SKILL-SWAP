import React, { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", name);
    onLogin(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;