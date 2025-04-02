import React from "react";
import buildMuscleMeals from "../data/buildmuscle";
import "../style/components/BuildMuscle.css";

export default function BuildMuscle() {
  return (
    <div className="meals-grid">
      {buildMuscleMeals.map((meal) => (
        <div key={meal.id} className="meal-item">
          <img src={meal.image} alt={meal.image} />
        </div>
      ))}
    </div>
  );
}
