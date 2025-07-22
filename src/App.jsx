// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SkillList from "./components/SkillList";
import SkillDetail from "./components/SkillDetail";
import AddSkillForm from "./components/AddSkillForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillList />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
        <Route path="/add-skill" element={<AddSkillForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
