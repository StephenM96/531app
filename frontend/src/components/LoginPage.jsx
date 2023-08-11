import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleLogin = () => {
  //   // Call authentication API here using formData
  //   // Redirect to dashboard on successful login
  // };
  //placeholder until I can connect to login auth backend

  //     const username = useRef("");
  // const email = useRef("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate the username
  //   if (!username.current.value.match(/^[a-zA-Z0-9]{3,16}$/)) {
  //     alert("Please enter a valid username");
  //     return;
  //   }

  //   // Validate the email
  //   if (!email.current.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
  //     alert("Please enter a valid email");
  //     return;
  //   }

  //   // Submit the form
  //   // ...
  // };
  //Can use a code like this to validate username OR email??? Will have to play with it some more

  return (
    <div className="log-in container">
      <h2>Log In</h2>
      <form>
        <label>Username or Email:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
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
        <Link to="/dashboard">
          Log In.. Placeholder until log in auth is linked to backend properly
        </Link>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Create Account!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
