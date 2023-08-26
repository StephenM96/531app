import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/workout-plan">Make a plan!</Link>
        </li>
        <li>
          <Link to="/archive">Workout Archive</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;