import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import WorkoutPlan from "./components/WorkoutPlan";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
