import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const isAuthenticated = sessionStorage.getItem("authenticated") || false;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/workout-plan">Make a plan!</Link>
            </li>
            <li>
              <Link to="/archive">Workout Archive</Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
