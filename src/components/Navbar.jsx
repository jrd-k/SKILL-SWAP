// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/skills" style={{ marginRight: "10px" }}>Skills</Link>
      <Link to="/add-skill" style={{ marginRight: "10px" }}>Add Skill</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
