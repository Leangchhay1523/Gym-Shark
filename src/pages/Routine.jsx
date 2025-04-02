import React from "react";
import { useState } from "react";
import BuildMuscle from "../components/BuildMuscle";
import MyMeal from "../components/Mymeals";
import LoseWeight from "../components/LoseWeight";
import { Link, NavLink } from "react-router-dom";
import "../style/pages/Routine.css";

/*Images*/
/*-----Build muscle images-----*/

import wheyDalgona from "../assets/routine/Build muscle/Animal Whey Protein Frozen Dalgona Coffee.jpg";
import blueberryPancakes from "../assets/routine/Build muscle/Blueberries & Frozen Yogurt Protein Pancakes.jpg";
import braisedPork from "../assets/routine/Build muscle/Braised Pork with Soy Rice and Coleslaw.jpg";
import muscleChickenTeriyaki from "../assets/routine/Build muscle/Chicken Teriyaki Rice and Broccoli.jpg";

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
