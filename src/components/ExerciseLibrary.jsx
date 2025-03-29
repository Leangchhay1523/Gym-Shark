// ExerciseLibrary.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import ExercisesData from "/src/data/ExerciseLibrary.js";
import ExerciseDetail from "./ExerciseDetail";

export default function ExerciseLibrary() {
  return (
    <div className="exercise-library">
      {ExercisesData.map((obj, index) => (
        <ExerciseCard key={index} data={obj} />
      ))}
    </div>
  );
}
