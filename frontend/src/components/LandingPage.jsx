import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPageStyle.css"

const LandingPage = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Your Workout App!</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default LandingPage;