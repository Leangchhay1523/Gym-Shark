import React from "react";
import { useState } from "react";
import ExerciseHeader from "../components/ExerciseHeader";
import ExerciseLibrary from "../components/ExerciseLibrary";

export default function Exercises() {
  return (
    <div className="exercise-page">



      <h3>This is Exercises Page</h3>
      <ExerciseHeader />
      <ExerciseLibrary />
    </div>
  )

}
