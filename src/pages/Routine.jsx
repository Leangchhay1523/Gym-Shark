import React from "react";
import { useState } from "react";
import BuildMuscle from "../components/BuildMuscle";
import MyMeal from "../components/Mymeals";
import LoseWeight from "../components/LoseWeight";
/*import Footer from "../components/Footer";*/
import { Link, NavLink } from "react-router-dom";
import "../style/pages/Routine.css";

/*Images*/
/*-----Build muscle images-----*/

import wheyDalgona from "../assets/routine/Build muscle/Animal Whey Protein Frozen Dalgona Coffee.jpg";
import blueberryPancakes from "../assets/routine/Build muscle/Blueberries & Frozen Yogurt Protein Pancakes.jpg";
import braisedPork from "../assets/routine/Build muscle/Braised Pork with Soy Rice and Coleslaw.jpg";
import muscleChickenTeriyaki from "../assets/routine/Build muscle/Chicken Teriyaki Rice and Broccoli.jpg";
import chocolateZucchiniMuffins from "../assets/routine/Build muscle/Chocolate Zucchini Protein Muffins.jpg";
import coleslawMealBowl from "../assets/routine/Build muscle/coleslaw bowl.jpg";
import bananaProteinPudding from "../assets/routine/Build muscle/Dirty Banana Pudding.jpg";
import doubleChocoMugCake from "../assets/routine/Build muscle/Double Chocolate Protein Mug Cake.jpg";
import mediterraneanMealBowls from "../assets/routine/Build muscle/Easy Mediterranean Bowls.jpg";
import herbRoastChicken from "../assets/routine/Build muscle/Herb Roasted Chicken, Golden Potatoes, and Caprese.jpg";
import plantProteinLasagna from "../assets/routine/Build muscle/High Protein Plant Based Lasagna.jpg";
import plantProteinPancakes from "../assets/routine/Build muscle/High Protein Plant Based Pancake Muffins.jpg";
import indianCurryChicken from "../assets/routine/Build muscle/Indian Chicken Curry.jpg";
import jerkChickenMeal from "../assets/routine/Build muscle/Jerk Chicken with Mashed Plantains and Greens.jpg";
import cleanBulkShake from "../assets/routine/Build muscle/Kaged Muscle Clean Meal Bulk Shake.jpg";
import oatmealCookieOats from "../assets/routine/Build muscle/Oatmeal Cookie Overnight Oats.jpg";
import highProteinShake from "../assets/routine/Build muscle/Protein Shake.jpg";
import quinoaSalmonBowl from "../assets/routine/Build muscle/Salmon Quinoa Bowl.jpg";
import sausageEggBreakfastWrap from "../assets/routine/Build muscle/Sausage Egg Wrap.jpg";
import scrambledOatsPancakes from "../assets/routine/Build muscle/Scrambled Oatmeal Pancakes.jpg";
import shrimpRiceMealBowl from "../assets/routine/Build muscle/Shrimp & Rice Bowl.jpg";
import smokedTexasBrisket from "../assets/routine/Build muscle/Smoked Texas Brisket, Cowboy Beans, and Corn.jpg";
import spinachFetaOmelet from "../assets/routine/Build muscle/Spinach, Feta, and Sun-Dried Tomato Omelet and Potatoes.jpg";
import spicedPumpkinBread from "../assets/routine/Build muscle/Sweet Spiced Pumpkin Bread.jpg";

/*-----Lose weight images-----*/
import bananaOatmealCookies from "../assets/routine/Lose Weight/Banana and Oat Breakfast Cookies.jpg";
import buffaloChickenMeal from "../assets/routine/Lose Weight/buffalo chicken header.jpg";
import cappuccinoOatmeal from "../assets/routine/Lose Weight/Cappuccino Overnight Oats.jpg";
import carneAsadaRiceBowl from "../assets/routine/Lose Weight/Carne Asada, Fajita Peppers, and Chipotle Rice.jpg";
import weightLossTeriyakiChicken from "../assets/routine/Lose Weight/Chicken Teriyaki Rice and Broccoli.jpg";
import stovetopChiliRecipe from "../assets/routine/Lose Weight/Easy Stovetop Chili Recipe.png";
import healthyFrenchToast from "../assets/routine/Lose Weight/French Toast.jpg";
import polloAsadoRiceBowl from "../assets/routine/Lose Weight/Pollo Asado, Corn Salsa, and Cilantro Lime Rice.jpg";
import proteinNightSnack from "../assets/routine/Lose Weight/Protein-Packed Nighttime Snack.jpg";
import pumpkinEnergyBalls from "../assets/routine/Lose Weight/Pumpkin Protein Balls.png";
import scrambledEggSalsaMeal from "../assets/routine/Lose Weight/Scrambled Egg with Salsa and Potatoes.jpg";
import slowCookedPulledPork from "../assets/routine/Lose Weight/Slow Cooked Pulled Pork, Mashed Potatoes, and Corn Confetti.jpg";
import teriyakiBeefMeal from "../assets/routine/Lose Weight/teriyaki-beef.jpg";
import texasRubbedChicken from "../assets/routine/Lose Weight/Texas Rub Chicken Thigh, Au Gratin Potatoes, and Salad with Ranch.jpg";
import triTipSteakMeal from "../assets/routine/Lose Weight/Texas Rub Tri-Tip, Red Potatoes, and Green Beans.jpg";
import tofuRiceScramble from "../assets/routine/Lose Weight/Tofu Scramble with Rice.jpg";
import veganProteinCookies from "../assets/routine/Lose Weight/Vegan Christmas Protein Cookies.jpg";

export default function Routine() {
  const [activeButton, setActiveButton] = useState("build-muscle"); // Default active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };

  // Handle image click to navigate to MealInfor page
  const handleImageClick = (mealId) => {
    navigate("/meal-info", { state: { mealId } });
  };

  // Function to render the appropriate component
  const renderPage = () => {
    if (activeButton === "build-muscle") {
      return <BuildMuscle />;
    } else if (activeButton === "lose-weight") {
      return <LoseWeight />;
    } else if (activeButton === "mymeal") {
      return <MyMeal />;
    }
  };

  return (
    <div className="routine-page">
      <div className="Scroll-image-header">
        <div className="images">
          <img id="img-1" src={wheyDalgona} alt="whey dalgona" />
          <img id="img-2" src={blueberryPancakes} alt="blueberry pancakes" />
          <img id="img-3" src={braisedPork} alt="braised pork" />
          <img id="img-4" src={muscleChickenTeriyaki} alt="chicken teriyaki" />
        </div>
        <div className="images-nav">
          <button
            onClick={() =>
              document
                .getElementById("img-1")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="nav"
          ></button>
          <button
            onClick={() =>
              document
                .getElementById("img-2")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="nav"
          ></button>
          <button
            onClick={() =>
              document
                .getElementById("img-3")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="nav"
          ></button>
          <button
            onClick={() =>
              document
                .getElementById("img-4")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="nav"
          ></button>
        </div>
      </div>
      <div className="Button-options">
        <button
          className={`button ${
            activeButton === "build-muscle" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("build-muscle")}
        >
          Build Muscle
        </button>
        <button
          className={`button ${activeButton === "lose-weight" ? "active" : ""}`}
          onClick={() => handleButtonClick("lose-weight")}
        >
          Lose Weight
        </button>
        <button
          className={`button ${activeButton === "mymeal" ? "active" : ""}`}
          onClick={() => handleButtonClick("mymeal")}
        >
          My meals
        </button>
      </div>
      {/* Render the appropriate page */}
      {renderPage()}
    </div>
  );
}
