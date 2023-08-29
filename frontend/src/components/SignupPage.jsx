import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPageStyle.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>SIGN UP</h2>
          <div className="underline-title"></div>
        </div>
        <form className="form">
          <label for="first-name" id="first-name">
            First Name:
          </label>
          <input
            id="first-name"
            className="form-content"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <div className="form-border"></div>
          <label for="last-name" id="last-name">
            Last Name:
          </label>
          <input
            id="last-name"
            className="form-content"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <div className="form-border"></div>
          <label for="user-email" id="user-email">
            Email:
          </label>
          <input
            id="user-email"
            className="form-content"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="form-border"></div>
          <label for="user-password" id="user-password">
            Password:
          </label>
          <>
          <input
            id="user-password"
            className="form-content"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          </>
          <div className="form-border"></div>
          {error ? <p>{error}</p> : null}
          <button id="submit-btn" type="button" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" id="login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
