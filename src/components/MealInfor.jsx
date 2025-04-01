import React from "react";
import { useParams } from "react-router-dom";
import buildMuscleMeals from "../data/buildmuscle";
import loseWeightMeals from "../data/loseWeightMeals";
import maintainFitnessMeals from "../data/maintainFitnessMeals";

export default function MealDetails() {
  const { id, category } = useParams(); // Get the meal ID and category from the URL

  // Combine all meals into one array
  const allMeals = [
    ...buildMuscleMeals,
    ...loseWeightMeals,
    ...maintainFitnessMeals,
  ];

  // Find the meal by ID
  const meal = allMeals.find(
    (meal) => meal.id === parseInt(id) && meal.category === category
  );

  if (!meal) {
    return <div>Meal not found!</div>;
  }

  return (
    <div className="meal-details">
      <h1>{meal.name}</h1>
      <p>{meal.description}</p>
      <p>Calories: {meal.calories}</p>
      <p>Protein: {meal.protein}</p>
    </div>
  );
}