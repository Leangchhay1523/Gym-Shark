import React from "react";
<<<<<<< HEAD
import loseWeightMeals from "../data/loseweight";
import "../style/components/LoseWeight.css";
=======
// import loseWeightMeals from "../data/loseweight.js";
>>>>>>> 5e91a69207d3d54ba428cb471876fd706441e2cd

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