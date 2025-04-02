import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/components/Mealinfor.css";

export default function MealInfor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { meal } = location.state || {}; // Safely access state

  if (!meal) {
    // Redirect to the home page if meal data is missing
    return (
      <div>
        <p>Meal data not found!</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="meal-info-page">
      <header className="meal-header">
        <h1>{meal.name}</h1>
      </header>

      <div className="meal-content">
        <div className="meal-image">
          <img src={meal.image} alt={meal.name} />
        </div>

        <div className="meal-stats">
          <div className="stat">
            <div className="stat-circle">{meal.calories}</div>
            <p style={{ color: "#CBDE61" }}>Calories</p>
          </div>
          <div className="stat">
            <div className="stat-circle">{meal.carbs} g</div>
            <p style={{ color: "#CBDE61" }}>Carbs</p>
          </div>
          <div className="stat">
            <div className="stat-circle">{meal.proteins} g</div>
            <p style={{ color: "#CBDE61" }}>Proteins</p>
          </div>
          <div className="stat">
            <div className="stat-circle">{meal.fats} g</div>
            <p style={{ color: "#CBDE61" }}>Fats</p>
          </div>
        </div>
      </div>

      <div className="meal-details">
        <div className="ingredients">
          <h2 style={{ color: "#CBDE61" }}>Ingredients</h2>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="directions">
          <h2 style={{ color: "#CBDE61" }}>Directions</h2>
          <ol>
            {meal.directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}