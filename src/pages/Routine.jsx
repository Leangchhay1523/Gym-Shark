import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import "../style/pages/Routine.css";

/*Images*/
/*-----Build muscle images-----*/
import wheyDalgona from "../assets/routine/Build muscle/Animal Whey Protein Frozen Dalgona Coffee.jpg";
import blueberryPancakes from "../assets/routine/Build muscle/Blueberries & Frozen Yogurt Protein Pancakes.jpg";
import braisedPork from "../assets/routine/Build muscle/Braised Pork with Soy Rice and Coleslaw.jpg";
import muscleChickenTeriyaki from "../assets/routine/Build muscle/Chicken Teriyaki Rice and Broccoli.jpg";
import chocoZucchini from "../assets/routine/Build muscle/Chocolate Zucchini Protein Muffins.jpg";
import coleslawBowl from "../assets/routine/Build muscle/coleslaw bowl.jpg";
import bananaPudding from "../assets/routine/Build muscle/Dirty Banana Pudding.jpg";
import doubleChocolateMugCake from "../assets/routine/Build muscle/Double Chocolate Protein Mug Cake.jpg";
import mediterraneanBowls from "../assets/routine/Build muscle/Easy Mediterranean Bowls.jpg";
import herbRoastedChicken from "../assets/routine/Build muscle/Herb Roasted Chicken, Golden Potatoes, and Caprese.jpg";
import proteinLasagna from "../assets/routine/Build muscle/High Protein Plant Based Lasagna.jpg";
import proteinPancakes from "../assets/routine/Build muscle/High Protein Plant Based Pancake Muffins.jpg";
import indianChickenCurry from "../assets/routine/Build muscle/Indian Chicken Curry.jpg";
import jerkChicken from "../assets/routine/Build muscle/Jerk Chicken with Mashed Plantains and Greens.jpg";
import cleanMealShake from "../assets/routine/Build muscle/Kaged Muscle Clean Meal Bulk Shake.jpg";
import oatmealOvernight from "../assets/routine/Build muscle/Oatmeal Cookie Overnight Oats.jpg";
import proteinShake from "../assets/routine/Build muscle/Protein Shake.jpg";
import salmonQuinoa from "../assets/routine/Build muscle/Salmon Quinoa Bowl.jpg";
import sausageEggWrap from "../assets/routine/Build muscle/Sausage Egg Wrap.jpg";
import scrambledOatmealPancakes from "../assets/routine/Build muscle/Scrambled Oatmeal Pancakes.jpg";
import shrimpRiceBowl from "../assets/routine/Build muscle/Shrimp & Rice Bowl.jpg";
import texasBrisket from "../assets/routine/Build muscle/Smoked Texas Brisket, Cowboy Beans, and Corn.jpg";
import texasBrisket2 from "../assets/routine/Build muscle/Smoked Texas Brisket, Cowboy Beans, and Corn(1).jpg";
import spinachOmelet from "../assets/routine/Build muscle/Spinach, Feta, and Sun-Dried Tomato Omelet and Potatoes.jpg";
import sweetPumpkinBread from "../assets/routine/Build muscle/Sweet Spiced Pumpkin Bread.jpg";

/*-----Lose weight images-----*/
import bananaOatCookies from "../assets/routine/Lose Weight/Banana and Oat Breakfast Cookies.jpg";
import buffaloChicken from "../assets/routine/Lose Weight/buffalo chicken header.jpg";
import cappuccinoOats from "../assets/routine/Lose Weight/Cappuccino Overnight Oats.jpg";
import carneAsadaBowl from "../assets/routine/Lose Weight/Carne Asada, Fajita Peppers, and Chipotle Rice.jpg";
import weightLossChickenTeriyaki from "../assets/routine/Lose Weight/Chicken Teriyaki Rice and Broccoli.jpg";
import stovetopChili from "../assets/routine/Lose Weight/Easy Stovetop Chili Recipe.png";
import frenchToast from "../assets/routine/Lose Weight/French Toast.jpg";
import polloAsadoBowl from "../assets/routine/Lose Weight/Pollo Asado, Corn Salsa, and Cilantro Lime Rice.jpg";
import proteinSnack from "../assets/routine/Lose Weight/Protein-Packed Nighttime Snack.jpg";
import pumpkinProteinBalls from "../assets/routine/Lose Weight/Pumpkin Protein Balls.png";
import scrambledEggSalsa from "../assets/routine/Lose Weight/Scrambled Egg with Salsa and Potatoes.jpg";
import pulledPorkBowl from "../assets/routine/Lose Weight/Slow Cooked Pulled Pork, Mashed Potatoes, and Corn Confetti.jpg";
import teriyakiBeef from "../assets/routine/Lose Weight/teriyaki-beef.jpg";
import texasRubChicken from "../assets/routine/Lose Weight/Texas Rub Chicken Thigh, Au Gratin Potatoes, and Salad with Ranch.jpg";
import texasRubTriTip from "../assets/routine/Lose Weight/Texas Rub Tri-Tip, Red Potatoes, and Green Beans.jpg";
import tofuScramble from "../assets/routine/Lose Weight/Tofu Scramble with Rice.jpg";
import veganCookies from "../assets/routine/Lose Weight/Vegan Christmas Protein Cookies.jpg";

export default function Routine() {
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
        <Link to="/BuildMuscle" className="button">
          Build Muscle
        </Link>
        <Link to="/LoseWeight" className="button">
          Lose Weight
        </Link>
        <Link to="/MyMeals" className="button">
          Maintain Fitness
        </Link>
      </div>
      <div className="meals-list"></div>
      <div className="Button-options"></div>
      <div className="meals-list"></div>
    </div>
  );
}
