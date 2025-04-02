import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loseWeightMeals from "../data/loseweight"; // Import the lose weight dataset
import buildMuscleMeals from "../data/buildmuscle"; // Import the dataset
import "../style/components/Mymeals.css";

export default function MealTracker() {
  const [meals, setMeals] = useState([]);
  const [mealStats, setMealStats] = useState({ calories: 0, carbs: 0, proteins: 0, fats: 0 });
  const navigate = useNavigate();

  const handleAddMeal = (meal) => {
    const now = new Date();
    const currentDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`; // Get current date and time
    const mealWithDateTime = { ...meal, timeAdded: currentDateTime }; // Add date and time to the meal object

    setMeals([...meals, mealWithDateTime]); // Add the meal with date and time to the list
    setMealStats({
      calories: mealStats.calories + parseInt(meal.calories),
      carbs: mealStats.carbs + parseInt(meal.carbs),
      proteins: mealStats.proteins + parseInt(meal.proteins),
      fats: mealStats.fats + parseInt(meal.fats),
    });
  };

  const handleRemoveMeal = (id) => {
    const mealToRemove = meals.find((meal) => meal.id === id);
    setMeals(meals.filter((meal) => meal.id !== id));
    setMealStats({
      calories: mealStats.calories - parseInt(mealToRemove.calories),
      carbs: mealStats.carbs - parseInt(mealToRemove.carbs),
      proteins: mealStats.proteins - parseInt(mealToRemove.proteins),
      fats: mealStats.fats - parseInt(mealToRemove.fats),
    });
  };

  const handleViewMeal = (meal) => {
    navigate("/meal-info", { state: { meal } });
  };

  return (
    <div className="meal-tracker-page">
      <header className="tracker-header">
        <h1>Meal Tracker</h1>
        <div className="tracker-stats">
          <div>
            <p>{mealStats.calories}</p>
            <span>Calories</span>
          </div>
          <div>
            <p>{mealStats.carbs} g</p>
            <span>Carbs</span>
          </div>
          <div>
            <p>{mealStats.proteins} g</p>
            <span>Proteins</span>
          </div>
          <div>
            <p>{mealStats.fats} g</p>
            <span>Fats</span>
          </div>
        </div>
      </header>

      <div className="add-meal-section">
        <h2>Select a Meal to Add</h2>
        <div className="meal-options-mymeal">
          {buildMuscleMeals.map((meal) => (
            <div key={meal.id} className="meal-option-mymeal">
              <img src={meal.image} alt={meal.name} />
              <p>{meal.name}</p>
              <button onClick={() => handleAddMeal(meal)}>Add</button>
            </div>
          ))}
          {loseWeightMeals.map((meal) => (
            <div key={meal.id} className="meal-option-mymeal">
              <img src={meal.image} alt={meal.name} />
              <p>{meal.name}</p>
              <button onClick={() => handleAddMeal(meal)}>Add</button>
            </div>
          ))}
        </div>
      </div>

      <div className="meal-list-mymeal">
        <h2>Meals Lists</h2>
        {meals.map((meal) => (
          <div key={meal.id} className="meal-item-mymeal">
            <img
              src={meal.image}
              alt={meal.name}
              onClick={() => handleViewMeal(meal)} // Navigate to MealInfor page
              style={{ cursor: "pointer" }}
            />
            <p className="meal-time">
              {meal.name} <span>({meal.timeAdded})</span>
            </p>
            <button onClick={() => handleRemoveMeal(meal.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}