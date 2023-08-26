import React, { useState } from "react";
import LiftInput from "./LiftInput";
import WorkoutGenerate from "./WorkoutGenerate";
import MaxValuesDisplay from "./MaxValuesDisplay";

const WorkoutPlan = () => {
  const [startDate, setStartDate] = useState(""); // State for the start date
  const handlePrint = () => {
    window.print();
  };

  const handleSaveWorkout = (week, date, lift) => {
    setArchivedWorkouts((prevWorkouts) => [
      ...prevWorkouts, { week, date, lift }
    ]);
  };

  // Calculate the workout dates for each day
  const calculateWorkoutDates = () => {
    const daysInWeek = 7;
    const weeksInCycle = 3;
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const workoutDates = [];

    if (startDate) {
      const startDateObj = new Date(startDate);
      const startDayOfWeek = startDateObj.getDay();

      // Map lifts to corresponding days
      const liftToDayMapping = {
        Squat: "Monday",
        Bench: "Tuesday",
        Deadlift: "Thursday",
        OverheadPress: "Friday",
      };

      for (let week = 1; week <= weeksInCycle; week++) {
        for (let day = 0; day < daysInWeek; day++) {
          const date = new Date(startDateObj); // Get the day of the week for the start date
          const daysToAdd = (week - 1) * daysInWeek + day;
          date.setDate(startDateObj.getDate() + daysToAdd);

          // Find the lift associated with the current day
          const liftForDay = Object.keys(liftToDayMapping).find(
            (lift) =>
              liftToDayMapping[lift] ===
              dayNames[(startDayOfWeek + day) % daysInWeek]
          );
          workoutDates.push({
            week,
            day: dayNames[(startDayOfWeek + day) % daysInWeek],
            date,
            lift: liftForDay,
          });
        }
      }
    }

    return workoutDates;
  };

  // const workoutDates = calculateWorkoutDates();

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
        <LiftInput
          key={lifts}
          lift={lifts}
          lifts={lifts}
          handleInputChange={handleInputChange}
        />
        <MaxValuesDisplay className="max-value" lifts={lifts} />
      </div>
      <div>
        <button onClick={handlePrint}>Print Workout Plan</button>
      </div>
      <h2>3-Week Workout Plan</h2>
      <div className="weeks-container">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
          <div key={week} className="week-column">
            {Object.keys(lifts).map((lift) => (
              <WorkoutGenerate
                className="day-column"
                startDate={startDate}
                key={lift}
                lift={lift}
                details={lifts[lift]}
                week={week}
                roundToNearest5={roundToNearest5}
                // workoutDate={workoutDates[(week - 1) * 7]}
                onSaveWorkout={handleSaveWorkout} //saves workout
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
