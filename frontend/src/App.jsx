import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Controls from "./pages/Controls";
import EvidenceRequests from "./pages/EvidenceRequests";
import Login from "./pages/Login";

function App() {

  useEffect(() => {
    // Check URL for token after login
    const hash = window.location.hash;

    if (hash.includes("id_token")) {
      const token = hash.split("id_token=")[1].split("&")[0];

      // Save token in browser
      localStorage.setItem("token", token);

      console.log("Token saved:", token);

      // Clean URL
      window.location.hash = "";
    }
  }, []);

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Controls />} />
          <Route path="/evidence" element={<EvidenceRequests />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;