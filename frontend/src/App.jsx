import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import Controls from "./pages/Controls";
import EvidenceRequest from "./pages/EvidenceRequest";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("token");

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>

        {token && (
          <nav style={{ padding: "10px", background: "#eee" }}>
            <Link to="/">Controls</Link>
            <Link to="/evidence" style={{ marginLeft: "10px" }}>Evidence</Link>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <ProtectedRoute>
              <Controls />
            </ProtectedRoute>
          } />

          <Route path="/evidence" element={
            <ProtectedRoute>
              <EvidenceRequest />
            </ProtectedRoute>
          } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;