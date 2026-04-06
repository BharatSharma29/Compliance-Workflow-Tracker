import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Compliance Tracker</h2>
      <Link to="/">Controls</Link>
      <Link to="/evidence">Evidence</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;