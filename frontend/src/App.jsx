import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import Controls from "./pages/Controls";
import EvidenceRequest from "./pages/EvidenceRequest";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get("id_token");

      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    }

    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>

        <nav style={{ padding: "10px", background: "#eee" }}>
          {isAuthenticated && (
            <>
              <Link to="/" style={{ marginRight: "10px" }}>Controls</Link>
              <Link to="/evidence" style={{ marginRight: "10px" }}>Evidence</Link>

              <button onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}>
                Logout
              </button>
            </>
          )}
        </nav>

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