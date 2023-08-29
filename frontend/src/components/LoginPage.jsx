import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPageStyle.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:8000/api/auth/login", {
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
          //if response is successful = true
          sessionStorage.setItem("authenticated", json.success);
          sessionStorage.setItem("id", json.data[0].id);
          navigate("/dashboard");
        } else {
          setError(json.message);
        }
      });

    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <div className="log-in-form">
            <form className="form">
              <label for="user-email" id="email-label">
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
              <label for="user-password" id="password-label">
                Password:
              </label>
              <input
                id="user-password"
                className="form-content"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="form-border"></div>
              <a href="#">
                <legend id="forgot-pass">Forgot password?</legend>
              </a>
              {error ? <p>{error}</p> : null}
              <button id="submit-btn" onClick={handleSubmit}>
                LOGIN
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" id="sign-up">
                Create Account!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
