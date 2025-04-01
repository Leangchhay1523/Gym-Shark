import React from "react";
import maintainFitnessMeals from "../data/maintainFitnessMeals";

export default function Mymeals() {
  return (
    <div className="meals-list">
      <h2>Maintain Fitness Meals</h2>
      <ul>
        {maintainFitnessMeals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
}