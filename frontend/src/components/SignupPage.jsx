import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          //if response success = true
          // NOTE: look at the response from the API, it does not return json.data as an array
          sessionStorage.setItem("authenticated", json.success); //this sets the login auth to true so the user doesn't have to login after signing up
          sessionStorage.setItem("id", json.data.id);
          navigate("/dashboard");
        } else {
          setError(json.message.errors[0].message);
        }
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
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
        {error ? <p>{error}</p> : null}
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
