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

/*
const loseWeightMeals = [
  { id: 1, image: bananaOatmealCookies },
  { id: 2, image: buffaloChickenMeal },
  { id: 3, image: cappuccinoOatmeal },
  { id: 4, image: carneAsadaRiceBowl },
  { id: 5, image: weightLossTeriyakiChicken },
  { id: 6, image: stovetopChiliRecipe },
  { id: 7, image: healthyFrenchToast },
  { id: 8, image: polloAsadoRiceBowl },
  { id: 9, image: proteinNightSnack },
  { id: 10, image: pumpkinEnergyBalls },
  { id: 11, image: scrambledEggSalsaMeal },
  { id: 12, image: slowCookedPulledPork },
  { id: 13, image: teriyakiBeefMeal },
  { id: 14, image: texasRubbedChicken },
  { id: 15, image: triTipSteakMeal },
  { id: 16, image: tofuRiceScramble },
  { id: 17, image: veganProteinCookies }
];
*/
const loseWeightMeals = [
  {
    id: 1,
    name: "Banana Oatmeal Cookies",
    image: bananaOatmealCookies,
    calories: "137",
    carbs: "18",
    proteins: "7",
    fats: "4",
    ingredients:  [
      "3 medium (7\" to 7-7/8\" long) banana",
      "2 cup old-fashioned oats",
      "¼ cup natural peanut butter",
      "2 scoop signature 100% Whey Isolate, Chocolate",
      "2 tsp honey"
    ],
    directions: [
      "1. Preheat oven to 350°F.",
      "2. In a medium-sized mixing bowl, mash the bananas with a fork.",
      "3. Add peanut butter and, using a whisk or electric mixer, beat for a few minutes until smooth.",
      "4. Add oats and protein powder, then mix well.",
      "5. Stir in honey, and optionally, add-ins like chocolate chips, nuts, or chia seeds.",
      "6. Drop by rounded spoonfuls onto a nonstick cookie sheet.",
      "7. Place in the oven and bake for 8-13 minutes or until firm.",
      "8. Remove from the oven and let cool for a few minutes before removing from the baking sheet with a spatula.",
      "9. Store in the refrigerator for freshness, and enjoy for up to one week after baking!"
    ],
  },
  {
    id: 2,
    name: "Buffalo Chicken Meal",
    image: buffaloChickenMeal,
    calories: "266",
    carbs: "17",
    proteins: "40",
    fats: "4",
    ingredients: [
      "1 serving Buffalo chicken",
      "1 serving Buffalo marinade",
      "½ cup diced red potatoes, quartered",
      "2 tbsp milk (2% fat)",
      "½ tsp garlic, minced",
      "1 pinch parsley, dried",
      "½ cup asparagus"
    ],
    directions: [
      "1.Prepare potatoes by boiling them until soft and mash.",
      "2. Add sour cream, milk, garlic, and parsley to the mashed potatoes. Stir to combine.",
      "3. Chop off ends of asparagus and steam, sauté, or boil until tender.",
      "4. Remove plastic from the Buffalo Chicken Breast package.",
      "5. In a skillet, add one serving of protein and a portion of the buffalo marinade and heat for 2 minutes, stirring every 30 seconds.",
      "6. Plate up and serve!"
    ],
  },
  {
    id: 3,
    name: "Cappuccino Oatmeal",
    image: cappuccinoOatmeal,
    calories: "493",
    carbs: "51",
    proteins: "33",
    fats: "17",
    ingredients: [
      "1 scoop Dymatize ISO100, Dunkin'™ Cappuccino",
      "¾ cup unsweetened almond milk",
      "½ cup rolled oats",
      "1 tbsp natural almond butter",
      "2 tsp chia seeds",
      "½ banana",
      "½ tsp dark chocolate chips"
    ],
    directions: [
      "1. In a bowl, combine protein powder, almond (or oat) milk, rolled oats, almond butter, and chia seeds.",
      "2. Slice half of a banana and sprinkle dark chocolate chips on top.",
      "3. Cover the bowl and refrigerate overnight.",
      "4. Enjoy in the morning!"
    ],
  },
  {
    id: 4,
    name: "Carne Asada Rice Bowl",
    image: carneAsadaRiceBowl,
    calories: "422",
    carbs: "32",
    proteins: "37",
    fats: "16",
    ingredients:  [
      "1 serving carne Asada",
      "1 serving asada Marinade",
      "½ cup brown rice",
      "1 oz Embasa chipotle peppers in adobo sauce",
      "⅓ cup sliced red bell pepper",
      "⅓ cup sliced green bell pepper",
      "⅓ cup sliced yellow bell pepper"
    ],
    directions: [
      "1. Prepare rice to your specifications.",
      "2. Add chipotle peppers in adobo and mix.",
      "3. Slice the peppers and sauté them in a pan until tender.",
      "4. Remove plastic from Carne Asada package.",
      "5. In a skillet, add one serving of carne asada and a portion of the asada marinade, heating for 2 minutes while stirring every 30 seconds.",
      "6. Plate up and serve!"
    ],
  },
  {
    id: 5,
    name: "Teriyaki Chicken",
    image: weightLossTeriyakiChicken,
    calories: "427",
    carbs: "45",
    proteins: "36",
    fats: "12",
    ingredients: [
      "1 serving pollo Asado",
      "1 serving asado Marinade",
      "½ cup brown rice",
      "½ tbsp lime juice",
      "1 tbsp coriander",
      "2 oz low-sodium black beans",
      "¼ cup kernels corn",
      "1 tbsp salsa"
    ],
    directions:  [
      "Prepare rice to your specifications.",
      "Add lime juice and fresh chopped cilantro to the rice and toss.",
      "Drain black beans and corn.",
      "Add beans, corn, and salsa to a saucepan and heat.",
      "Remove plastic from Pollo Asado package.",
      "In a skillet, add one serving of pollo asado and a portion of the asado marinade, heating for 2 minutes while stirring every 30 seconds.",
      "Plate up the rice, top with black beans, corn, and salsa, and add pollo asado on top."
    ],
  },
  {
    id: 6,
    name: "Stovetop Chili Recipe",
    image: stovetopChiliRecipe,
    calories: "248",
    carbs: "21",
    proteins: "17",
    fats: "10",
    ingredients: [
      "1 lb ground beef",
      "1 cup chopped green bell pepper",
      "1 cup chopped red pepper",
      "1 cup finely chopped onion",
      "24 oz canned crushed tomatoes",
      "1 16 oz can black beans, drained and rinsed",
      "4 oz green beans",
      "1 tbsp olive oil",
      "2 tbsp chili powder",
      "1 tbsp cumin",
      "½ tbsp garlic powder",
      "½ tbsp onion powder",
      "1 tbsp dark chocolate chips",
      "Salt and pepper to taste"
    ],
    directions: [
      "Heat skillet over medium-high heat and cook meat until fully browned. Set aside. *If opting for a meatless chili, doubling up on beans (same variety or alternate) is recommended.",
      "Add olive oil, bell peppers, and onion to a large pot and sauté until softened.",
      "Stir in chili powder, cumin, garlic powder, and onion powder and cook until fragrant, about 30 seconds.",
      "Pour crushed tomatoes and green chilis into the pot, then stir in dark chocolate until melted.",
      "Bring the mixture to a boil, then decrease the heat and simmer for about 30 minutes.",
      "Add meat, salt, and pepper to taste, then serve.",
      "Optional toppings: Avocado (sliced), fresh cilantro (chopped), shredded cheese or cheese alternative, Greek yogurt.",
      "Enjoy with your favorite toppings, and store leftovers in the refrigerator for up to five days!"
    ],
  },
  {
    id: 7,
    name: "Healthy French Toast",
    image: healthyFrenchToast,
    calories: "337",
    carbs: "36",
    proteins: "23",
    fats: "11",
    ingredients: [
      "8 tbsp egg whites",
      "3 tbsp powdered peanut butter",
      "1 tsp cinnamon",
      "3 whole eggs",
      "4 slices whole-wheat bread",
      "½ cup raspberries",
      "1 tsp powdered ginger",
      "1 tbsp vanilla extract",
      "½ cup unsweetened almond milk",
      "½ tbsp sugar-free maple syrup"
    ],
    directions: [
      "In a shallow bowl, combine egg whites, whole eggs, almond milk, cinnamon, ginger, powdered peanut butter, maple syrup, and vanilla extract. Mix until fully combined.",
      "Heat a skillet over medium heat.",
      "Dip each slice of bread into the batter, ensuring both sides are soaked for at least 1 minute.",
      "Spray the skillet with nonstick cooking spray and place the bread in the pan. Cook for 2-3 minutes on one side until golden and crispy.",
      "Flip the toast and cook for another 2-3 minutes until both sides are golden brown.",
      "Once both sides are crispy, remove from the skillet and top with fresh raspberries.",
      "Serve and enjoy your delicious, healthy peanut butter French toast!"
    ],
  },
  {
    id: 8,
    name: "Pollo Asado Rice Bowl",
    image: polloAsadoRiceBowl,
    calories: "427",
    carbs: "45",
    proteins: "36",
    fats: "12",
    ingredients: [
      "8 tbsp egg whites",
      "3 tbsp powdered peanut butter",
      "1 tsp cinnamon",
      "3 whole eggs",
      "4 slices whole-wheat bread",
      "½ cup raspberries",
      "1 tsp powdered ginger",
      "1 tbsp vanilla extract",
      "½ cup unsweetened almond milk",
      "½ tbsp sugar-free maple syrup"
    ],
    directions: [
      "Prepare rice to your specifications.",
      "Add lime juice and fresh chopped cilantro and toss.",
      "Drain black beans and corn.",
      "Add to sauce pan with salsa and heat.",
      "Remove plastic from Pollo Asado package.",
      "In a skillet, add one serving of protein and a portion of the asado marinade and heat for 2 minutes, stirring every 30 seconds.",
      "Plate up and serve!"
    ],
  },
  {
    id: 9,
    name: "Protein Night Snack",
    image: proteinNightSnack,
    calories: "326",
    carbs: "34",
    proteins: "39",
    fats: "4",
    ingredients: [
      "½ cup plain Greek yogurt",
      "1 scoop signature Chocolate Milkshake Casein Protein",
      "¼ cup mixed berries",
      "¼ cup puffed rice cereal",
      "¼ cup granola"
    ],
    directions: [
      "Add one scoop of casein powder to yogurt and stir until smooth.",
      "Top with fruit, cereal, or granola.",
      "This simple snack contains over 30 grams of protein, primarily casein protein. Casein is a protein molecule that will curb your appetite and metabolize progressively overnight for maximum absorption while you sleep!"
    ],
  },
  {
    id: 10,
    name: "Pumpkin Energy Balls",
    image: pumpkinEnergyBalls,
    calories: "122",
    carbs: "12",
    proteins: "5",
    fats: "6",
    ingredients: [
      "2 cup rolled oats",
      "1 scoop signature Vanilla Whey Protein Powder",
      "¾ cup natural peanut butter",
      "½ cup pumpkin puree",
      "¼ cup honey",
      "1 pinch cinnamon",
      "1 to taste nutmeg",
      "2 tbsp dark chocolate chips"
    ],
    directions: [
      "In a large bowl, combine all ingredients except the chocolate chips. Fold until all ingredients are well-incorporated.",
      "Add in chocolate chips and fold until mixed.",
      "Place the bowl with mixture in the refrigerator for 20-30 minutes. This helps firm up the nut butter and makes rolling the protein balls easier.",
      "Remove the mixture from the refrigerator. Using a spoon, scoop some of the mixture into your hand and roll it into a ball, about an inch in diameter.",
      "Place the protein balls in a sealed container, store in the refrigerator, and enjoy them for up to a week."
    ],
  },
  {
    id: 11,
    name: "Scrambled Egg Salsa Meal",
    image: scrambledEggSalsaMeal,
    calories: "366",
    carbs: "27",
    proteins: "35",
    fats: "13",
    ingredients: [
      "1½ cup egg whites",
      "1 cup salsa",
      "2 small potatoes (1-3/4\" to 2-1/4\" dia.)",
      "6 whole eggs"
    ],
    directions: [
      "Poke the washed potato with a fork deeply and microwave it for about 5 minutes or until tender.",
      "While the potato cooks, scramble the eggs in a pan coated with nonstick spray over medium heat.",
      "Once the potato is cooked, slice it into rounds or chunks.",
      "Season the eggs and potato with salt and pepper to taste.",
      "Top the potatoes and scrambled eggs with salsa and serve."
    ],
  },
  {
    id: 12,
    name: "Slow Cooked Pulled Pork",
    image: slowCookedPulledPork,
    calories: "398",
    carbs: "29",
    proteins: "35",
    fats: "16",
    ingredients: [
      "1 serving slow cooked pulled pork",
      "1 serving pork marinade",
      "½ cup diced red potatoes, quartered",
      "2 tbsp milk (2% fat)",
      "½ tsp garlic, minced",
      "1 pinch parsley, dried",
      "¼ cup corn kernels",
      "¼ cup sliced red bell pepper, halved",
      "¼ cup sliced green bell pepper, sliced",
      "⅛ cup chopped onion, chopped"
    ],
    directions: [
      "Prepare potatoes and boil until soft, then mash.",
      "Add sour cream, milk, garlic, and parsley to mashed potatoes and stir.",
      "Dice the red and green bell peppers and chop the onion.",
      "Drain corn and mix with diced peppers and onions.",
      "Remove plastic from pulled pork package.",
      "In a skillet, add the pulled pork and pork marinade, heating for 2 minutes, stirring every 30 seconds.",
      "Plate the mashed potatoes and top with the vegetable mix and pulled pork. Serve!"
    ],
  },
  {
    id: 13,
    name: "Teriyaki Beef Meal",
    image: teriyakiBeefMeal,
    calories: "398",
    carbs: "29",
    proteins: "35",
    fats: "16",
    ingredients: [
      "1 serving slow cooked pulled pork",
      "1 serving pork marinade",
      "½ cup diced red potatoes, quartered",
      "2 tbsp milk (2% fat)",
      "½ tsp garlic, minced",
      "1 pinch parsley, dried",
      "¼ cup corn kernels",
      "¼ cup sliced red bell pepper, halved",
      "¼ cup sliced green bell pepper, sliced",
      "⅛ cup chopped onion, chopped"
    ],
    directions: [
      "Prepare potatoes and boil until soft, then mash.",
      "Add sour cream, milk, garlic, and parsley to mashed potatoes and stir.",
      "Dice the red and green bell peppers and chop the onion.",
      "Drain corn and mix with diced peppers and onions.",
      "Remove plastic from pulled pork package.",
      "In a skillet, add the pulled pork and pork marinade, heating for 2 minutes, stirring every 30 seconds.",
      "Plate the mashed potatoes and top with the vegetable mix and pulled pork. Serve!"
    ],
  },
  {
    id: 14,
    name: "Texas Rubbed Chicken",
    image: texasRubbedChicken,
    calories: "352",
    carbs: "38",
    proteins: "40",
    fats: "5",
    ingredients: [
      "1 serving Hawaiian teriyaki beef",
      "½ cup brown rice",
      "2 tbsp light soy sauce",
      "1 tbsp scallions, sliced",
      "¼ cup green beans",
      "¼ cup broccoli",
      "¼ cup chopped red bell pepper, sliced",
      "¼ cup mushrooms, sliced"
    ],
    directions: [
      "Prepare rice according to your specifications.",
      "Chop broccoli, red pepper, and green onions.",
      "Add soy sauce and green onions to the rice and mix.",
      "Cook broccoli to your specifications.",
      "Remove plastic from thawed Hawaiian Teriyaki Beef package.",
      "In a skillet, add one serving of protein and a portion of the teriyaki marinade, heating for 2 minutes, stirring every 30 seconds.",
      "Plate the rice and top with the cooked vegetables and teriyaki beef.",
      "Serve and enjoy!"
    ],
  },
  {
    id: 15,
    name: "Tri-Tip Steak Meal",
    image: triTipSteakMeal,
    calories: "397",
    carbs: "32",
    proteins: "35",
    fats: "14",
    ingredients: [
      "1 serving Texas Rub Chicken Thigh",
      "1 serving Texas rub marinade",
      "½ cup diced red potatoes, quartered",
      "2 tbsp milk (2% fat)",
      "½ tsp ginger, minced",
      "1 pinch parsley, dried",
      "½ cup spinach",
      "½ cup shredded romaine lettuce",
      "½ cup grated carrots",
      "1 tablespoon ranch dressing, reduced-fat"
    ],
    directions: [
      "Prepare potatoes and boil until soft, then cut them into slices.",
      "Add sour cream, milk, garlic, and parsley to the potatoes. Stir well.",
      "Chop spinach and romaine lettuce, then add grated carrots and toss with fat-free ranch dressing.",
      "Remove plastic from the Texas Rub Chicken Thigh package.",
      "In a skillet, add one serving of protein and a portion of the Texas rub marinade. Heat for 2 minutes, stirring every 30 seconds.",
      "Plate up the mashed potatoes and top with the Texas Rub Chicken Thigh and the vegetable salad.",
      "Serve and enjoy!"
    ],
  },
  {
    id: 16,
    name: "Tofu Rice Scramble",
    image: tofuRiceScramble,
    calories: "365",
    carbs: "22",
    proteins: "35",
    fats: "15",
    ingredients: [
      "1 serving Texas Rub Tri Tip",
      "1 serving Tri-Tip Marinade",
      "⅜ cup diced red potatoes",
      "½ tbsp extra virgin olive oil",
      "1 cup green beans"
    ],
    directions: [
      "Preheat the oven to 325°F.",
      "Cut the red potatoes into chunks and toss with olive oil and oregano.",
      "Spread the potatoes on a baking sheet and bake for 15 minutes or until tender.",
      "While the potatoes bake, sauté the green beans for 2 to 3 minutes until tender.",
      "Remove plastic from the Texas Rub Tri-Tip package.",
      "In a skillet, add one serving of the Texas Rub Tri-Tip protein and a portion of the tri-tip marinade. Heat for 2 minutes, stirring every 30 seconds.",
      "Plate up the roasted potatoes, sautéed green beans, and tri-tip.",
      "Serve and enjoy!"
    ],
  },
  {
    id: 17,
    name: "Vegan Protein Cookies",
    image: veganProteinCookies,
    calories: "462",
    carbs: "48",
    proteins: "34",
    fats: "15",
    ingredients:  [
      "1 cup chopped green bell pepper",
      "1 tsp onion powder",
      "1 cup white rice",
      "2 tsp olive oil",
      "1 cup chopped onions",
      "24 oz tofu, firm",
      "1 tsp turmeric",
      "2 cups spinach"
    ],
    directions: [
      "Add olive oil to a pan over medium heat.",
      "Cook chopped spinach, onions, and bell peppers until soft, about 2 minutes.",
      "Add in crumbled tofu (you can do this by hand or with the back of a spatula). Cook until the tofu is hot and most of the water has evaporated.",
      "Stir in the spices, season with salt and pepper, then serve with instant rice."
    ],
  },
];

export default loseWeightMeals;