import React from "react";
import loseWeightMeals from "../data/loseweight";
import "../style/components/LoseWeight.css";

export default function LoseWeight() {
  return (
    <div className="meals-grid">
      {loseWeightMeals.map((meal) => (
        <div key={meal.id} className="meal-item">
          <img src={meal.image} alt={meal.image} />
        </div>
      ))}
    </div>
  );
}