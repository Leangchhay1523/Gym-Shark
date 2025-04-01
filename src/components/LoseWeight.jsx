import React from "react";
// import loseWeightMeals from "../data/loseweight.js";

export default function LoseWeight() {
  return (
    <div className="meals-list">
      <h2>Lose Weight Meals</h2>
      <ul>
        {loseWeightMeals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
}
