import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import WorkoutPlan from "./components/WorkoutPlan";
import "./app.css";
import WorkoutArchive from "./components/WorkoutArchive";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect (() =>{
    setIsAuthenticated(sessionStorage.getItem("authenticated"))
  }, [])

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/workouts/')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setData(json.data)
    })

    // return () => {
    //   second
    // }
    //not sure why these lines are here...
  }, [])

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/sign-up" element={<SignupPage setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/workout-archive" element={<WorkoutArchive />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
