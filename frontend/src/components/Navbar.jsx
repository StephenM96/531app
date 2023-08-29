import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBarStyle.css"

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect (() =>{
    setIsAuthenticated(sessionStorage.getItem("authenticated"))
  }, [])

  return (
    <nav className="topnav">
      <div className="topnavItems">
      <ul>
          <Link to="/" className="active">Home</Link>
        {isAuthenticated ? (
          <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/workout-plan">Make a plan!</Link>
                <Link to="/archive">Workout Archive</Link>
          </>
        ) : null}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

