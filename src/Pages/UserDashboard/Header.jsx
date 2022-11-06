import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Header.css";
import Dashboard from "./Dashboard";
function Header() {
  return (
    <div className="Header">
      <Routes>
        
        <Route className="Link" path="/">
          Register Data
        </Route>
        <Route className="Link" path="/dashboard" element={<Dashboard />}>
          Dashboard
        </Route>
      </Routes>
    </div>
  );
}

export default Header;