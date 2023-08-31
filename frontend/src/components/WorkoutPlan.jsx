import React, { useState } from "react";
import LiftInput from "./LiftInput";
import WorkoutGenerate from "./WorkoutGenerate";
import MaxValuesDisplay from "./MaxValuesDisplay";
import "./WorkoutPlanStyle.css";

const WorkoutPlan = () => {
  const [startDate, setStartDate] = useState(""); // State for the start date
  const handlePrint = () => {
    window.print();
  };

  const [archivedWorkouts, setArchivedWorkouts] = useState([]);
  const handleSaveWorkout = () => {
    const workoutDetails = {
      lifts: lifts,
      startDate: startDate,
    };

    setArchivedWorkouts((prevWorkouts) => [...prevWorkouts, workoutDetails]);
  };

  const liftsOrder = ["Squat", "Bench", "Deadlift", "OverheadPress"];

  const calculateDayOffset = (lift, week) => {
    const baseOffsets = {
      Squat: 0, //Monday
      Bench: 1, //Tuesday
      Deadlift: 3, //Thursday
      OverheadPress: 4, //Friday
    };

    return baseOffsets[lift] + (week - 1) * 7; //7 days in week
  };

  const roundToNearest5 = (value) => Math.floor(value / 5) * 5;

  const [lifts, setLifts] = useState({
    Squat: { day: "Monday", weightLifted: 200, reps: 5 },
    Bench: { day: "Tuesday", weightLifted: 150, reps: 5 },
    Deadlift: { day: "Thursday", weightLifted: 250, reps: 5 },
    OverheadPress: { day: "Friday", weightLifted: 100, reps: 5 },
  });

  const handleInputChange = (e, lift) => {
    const { name, value } = e.target;
    setLifts({
      ...lifts,
      [lift]: { ...lifts[lift], [name]: Number(value) },
    });
  };

  // const startDate = new Date();

  return (
    <div className="workout-container">
      <h2>Enter Start Date</h2>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <div className="header">
        <h2>Enter Weights and Reps Achieved</h2>
        <div className="lift-inputs">
          <LiftInput
            key={lifts}
            lift={lifts}
            lifts={lifts}
            handleInputChange={handleInputChange}
          />
        </div>
        <MaxValuesDisplay className="max-value" lifts={lifts} />
      </div>

      <div>
      <button onClick={handleSaveWorkout}>Save Workout</button>
      </div>
      <div>
        <button onClick={handlePrint}>Print Workout Plan</button>
      </div>
      <h2>3-Week Workout Plan</h2>
      <div className="weeks-container">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
          <div key={week} className="week-container">
            {liftsOrder.map((lift) => (
              <WorkoutGenerate
                className="day-column"
                startDate={startDate}
                dayOffset={calculateDayOffset(lift, week)}
                key={lift}
                lift={lift}
                details={lifts[lift]}
                week={week}
                roundToNearest5={roundToNearest5}
                // workoutDate={workoutDates[(week - 1) * 7]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
