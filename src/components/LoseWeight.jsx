import React from "react";
import { useNavigate } from "react-router-dom";
import loseWeightMeals from "../data/loseweight";
import "../style/components/LoseWeight.css";

export default function LoseWeight() {
  const navigate = useNavigate();

  // Handle image click to navigate to MealInfor page
  const handleImageClick = (meal) => {
    navigate("/meal-info", { state: { meal } });
  };

  return (
    <div className="meals-grid">
      {loseWeightMeals.map((meal) => (
        <div key={meal.id} className="meal-item">
          <img
            src={meal.image}
            alt={meal.name}
            style={{ cursor: "pointer" }}
            onClick={() => handleImageClick(meal)} // Pass the entire meal object
          />
          <p>{meal.name}</p>
        </div>
      ))}
    </div>
  );
}