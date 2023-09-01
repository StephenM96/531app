import React, { useState } from "react";
import LiftInput from "./LiftInput";
import WorkoutGenerate from "./WorkoutGenerate";
import MaxValuesDisplay from "./MaxValuesDisplay";
import "./WorkoutPlanStyle.css";

const WorkoutPlan = ({ setArchivedWorkouts }) => {
  const [startDate, setStartDate] = useState(""); // State for the start date
  const liftsOrder = ["Squat", "Bench", "Deadlift", "OverheadPress"];
  const [lifts, setLifts] = useState({
    Squat: { day: "Monday", weightLifted: 200, reps: 5 },
    Bench: { day: "Tuesday", weightLifted: 150, reps: 5 },
    Deadlift: { day: "Thursday", weightLifted: 250, reps: 5 },
    OverheadPress: { day: "Friday", weightLifted: 100, reps: 5 },
  });

  const handlePrint = () => {
    window.print();
  };

  const handleSaveWorkout = async () => {
    const workoutDetails = {
      squatOriginalMaxWeight: lifts.Squat.weightLifted,
      benchOriginalMaxWeight: lifts.Bench.weightLifted,
      deadlifttOriginalMaxWeight: lifts.Deadlift.weightLifted,
      overheadPressOriginalMaxWeight: lifts.OverheadPress.weightLifted,
      squatOriginalMaxReps: lifts.Squat.reps,
      benchOriginalMaxReps: lifts.Bench.reps,
      deadliftOriginalMaxReps: lifts.Deadlift.reps,
      overheadPressOriginalMaxReps: lifts.OverheadPress.reps,
      startDate: { setStartDate },
      endDate: "04/29/2023",
      squatEst1rm: "365",
      benchEst1rm: "260",
      deadliftEst1rm: "470",
      OverheadPressEst1rm: "155",
      squatTrainingMax: "310",
      benchTrainingMax: "220",
      deadliftTrainingMax: "400",
      overheadPressTrainingMax: "130",
      squatWeek1: "265",
      squatWeek2: "280",
      squatWeek3: "295",
      benchWeek1: "185",
      benchWeek2: "200",
      benchWeek3: "210",
      deadliftWeek1: "340",
      deadliftWeek2: "360",
      deadliftWeek3: "380",
      ohpWeek1: "110",
      ohpWeek2: "120",
      ohpWeek3: "125",
    };
    console.log("save", workoutDetails);

    try {
      const response = await fetch('/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutDetails),
      });
      if (response.ok) {
        //workout data saved successfully?
        //show a success message or perform following...
      } else {
        //erro response
        console.error('Error saving workout data');
      } 
    } catch (error) {
      console.error(error)
    }

    setArchivedWorkouts((prevWorkouts) => [...prevWorkouts, workoutDetails]);
  };

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

  const handleInputChange = (e, lift) => {
    const { name, value } = e.target;
    setLifts({
      ...lifts,
      [lift]: { ...lifts[lift], [name]: Number(value) },
    });
  };

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

      <div className="plan-btn-container">
        <button className="plan-btn" onClick={handleSaveWorkout}>
          Save Workout
        </button>
        <button className="plan-btn" onClick={handlePrint}>
          Print Workout Plan
        </button>
      </div>
      <h2>3-Week Workout Plan</h2>
      <div className="weeks-container">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
          <div key={week} className="week-container">
            {liftsOrder.map((lift) => (
              <div className="day-container">
                <WorkoutGenerate
                  startDate={startDate}
                  dayOffset={calculateDayOffset(lift, week)}
                  key={lift}
                  lift={lift}
                  details={lifts[lift]}
                  week={week}
                  roundToNearest5={roundToNearest5}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;
