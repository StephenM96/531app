import React, { useState, useEffect } from "react";
import "./WorkoutArchiveStyle.css"

const WorkoutArchive = () => {
    const [archivedWorkouts, setArchivedWorkouts] = useState([]);

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/workouts");
            //fix this route when the save workout fetch handler is working
            const data = await response.json();
            setArchivedWorkouts(data)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="workout-container">
            <h2>Archived Workouts</h2>
            <ul>
                {archivedWorkouts.map((workout, index) => (
                    <li key={index}>
                        {/* display archived workout here */}
                        {/* Start Date: {workout.startDate.toDateString()},  */}
                        Week: {workout.week}, Date: {workout.date}, Lift: {workout.lift}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutArchive