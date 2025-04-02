import React from "react";
import { useNavigate } from "react-router-dom";
import buildMuscleMeals from "../data/buildmuscle";
import "../style/components/BuildMuscle.css";

export default function BuildMuscle() {
  const navigate = useNavigate();

  // Handle image click to navigate to MealInfor page
  const handleImageClick = (meal) => {
    navigate("/meal-info", { state: { meal } });
  };

  return (
    <div className="meals-grid">
      {buildMuscleMeals.map((meal) => (
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
