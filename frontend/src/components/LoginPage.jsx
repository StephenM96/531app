import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate()

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(formData),
    //can use formData here instead of data like in Robert's repo and it seems to give a different error, but seems
    //on the right track?
    //I used formData in my LoginPage.jsx component. That's why I changed it. I'll keep going down this route to 
    //troubleshoot...
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.result);
    });

  navigate("/dashboard");

  return (
    <div className="log-in container">
      <h2>Log In</h2>
      <form>
        {/* <label>Username or Email:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        /> */}
        {/* add functionality for both email and user here */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {/* <button type="button" onClick={handleSignup}>Log In</button> */}
        {/* set to just redirect to dashboard at this moment... Need to set up with proper auth now */}
        <button onClick={handleInputChange}>
        Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Create Account!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
