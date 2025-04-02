import wheyDalgona from '../assets/routine/Build muscle/Animal Whey Protein Frozen Dalgona Coffee.jpg';
import blueberryPancakes from '../assets/routine/Build muscle/Blueberries & Frozen Yogurt Protein Pancakes.jpg';
import braisedPork from '../assets/routine/Build muscle/Braised Pork with Soy Rice and Coleslaw.jpg';
import muscleChickenTeriyaki from '../assets/routine/Build muscle/Chicken Teriyaki Rice and Broccoli.jpg';
import chocolateZucchiniMuffins from '../assets/routine/Build muscle/Chocolate Zucchini Protein Muffins.jpg';
import coleslawMealBowl from '../assets/routine/Build muscle/coleslaw bowl.jpg';
import bananaProteinPudding from '../assets/routine/Build muscle/Dirty Banana Pudding.jpg';
import doubleChocoMugCake from '../assets/routine/Build muscle/Double Chocolate Protein Mug Cake.jpg';
import mediterraneanMealBowls from '../assets/routine/Build muscle/Easy Mediterranean Bowls.jpg';
import herbRoastChicken from '../assets/routine/Build muscle/Herb Roasted Chicken, Golden Potatoes, and Caprese.jpg';
import plantProteinLasagna from '../assets/routine/Build muscle/High Protein Plant Based Lasagna.jpg';
import plantProteinPancakes from '../assets/routine/Build muscle/High Protein Plant Based Pancake Muffins.jpg';
import indianCurryChicken from '../assets/routine/Build muscle/Indian Chicken Curry.jpg';
import jerkChickenMeal from '../assets/routine/Build muscle/Jerk Chicken with Mashed Plantains and Greens.jpg';
import cleanBulkShake from '../assets/routine/Build muscle/Kaged Muscle Clean Meal Bulk Shake.jpg';
import oatmealCookieOats from '../assets/routine/Build muscle/Oatmeal Cookie Overnight Oats.jpg';
import highProteinShake from '../assets/routine/Build muscle/Protein Shake.jpg';
import quinoaSalmonBowl from '../assets/routine/Build muscle/Salmon Quinoa Bowl.jpg';
import sausageEggBreakfastWrap from '../assets/routine/Build muscle/Sausage Egg Wrap.jpg';
import scrambledOatsPancakes from "../assets/routine/Build muscle/Scrambled Oatmeal Pancakes.jpg";
import shrimpRiceMealBowl from '../assets/routine/Build muscle/Shrimp & Rice Bowl.jpg';
import smokedTexasBrisket from '../assets/routine/Build muscle/Smoked Texas Brisket, Cowboy Beans, and Corn.jpg';
import spinachFetaOmelet from '../assets/routine/Build muscle/Spinach, Feta, and Sun-Dried Tomato Omelet and Potatoes.jpg';
import spicedPumpkinBread from '../assets/routine/Build muscle/Sweet Spiced Pumpkin Bread.jpg';


/*
const buildMuscleMeals = [
  { id: 1, image: wheyDalgona },
  { id: 2, image: blueberryPancakes },
  { id: 3, image: braisedPork },
  { id: 4, image: muscleChickenTeriyaki },
  { id: 5, image: chocolateZucchiniMuffins },
  { id: 6, image: coleslawMealBowl },
  { id: 7, image: bananaProteinPudding },
  { id: 8, image: doubleChocoMugCake },
  { id: 9, image: mediterraneanMealBowls },
  { id: 10, image: herbRoastChicken },
  { id: 11, image: plantProteinLasagna },
  { id: 12, image: plantProteinPancakes },
  { id: 13, image: indianCurryChicken },
  { id: 14, image: jerkChickenMeal },
  { id: 15, image: cleanBulkShake },
  { id: 16, image: oatmealCookieOats },
  { id: 17, image: highProteinShake },
  { id: 18, image: quinoaSalmonBowl },
  { id: 19, image: sausageEggBreakfastWrap },
  { id: 20, image: scrambledOatsPancakes },
  { id: 21, image: shrimpRiceMealBowl },
  { id: 22, image: smokedTexasBrisket },
  { id: 23, image: spinachFetaOmelet },
  { id: 24, image: spicedPumpkinBread },
];
*/
const buildMuscleMeals = [
  {
    id: 1,
    name: "Whey Dalgona Coffee",
    image: wheyDalgona,
    calories: "180",
    carbs: "11",
    proteins: "27",
    fats: "3",
    ingredients: [
      "1 scoop Animal Whey Protein - Brownie Batter ice",
      "1 cup unsweetened cashew milk",
      "4 g granulated Stevia",
      "1 packet instant coffee",
      "2 tbsp warm water",
    ],
    directions: [
      "1. Put ice, milk, protein powder, and 2 packets of stevia into a blender and blend until smooth. Pour into a glass bowl.",
      "2. Put instant coffee, water, and 2 packets of stevia into another glass bowl and beat with a hand mixer to a creamy foam consistency.",
      "3. Pour the coffee foam into the protein mix and swirl together.",
      "4. Place in freezer for ~90 minutes and then enjoy!",
    ],
  },
  {
    id: 2,
    name: "Blueberry Pancakes",
    image: blueberryPancakes,
    calories: "456",
    carbs: "43",
    proteins: "52",
    fats: "8",
    ingredients: [
      "4 large egg whites",
      "1 whole egg",
      "¼ cup old-fashioned oats",
      "1 scoop Kaged Muscle MicroPure Whey Protein Isolate, Vanilla",
      "½ cup low-fat frozen yogurt",
      "½ cup blueberries"
    ],
    directions: [
      "1. Mix egg whites, whole egg, oats, and protein powder in a blender for 20–30 seconds.",
      "2. Cook pancakes using cooking spray in a hot pan.",
      "3. Serve with frozen yogurt and blueberries."
    ],
  },
  {
    id: 3,
    name: "Braised Pork with Soy Rice and Coleslaw",
    image: braisedPork,
    calories: "529",
    carbs: "43",
    proteins: "33",
    fats: "25",
    ingredients: [
      "1 serving kalua pork",
      "1 serving kalua marinade",
      "½ cup brown rice",
      "1 tbsp light soy sauce",
      "1 oz coleslaw dressing",
      "½ cup, shredded red cabbage",
      "½ cup, shredded green cabbage",
      "⅛ cup grated carrots"
    ],
    directions: [
      "1. Prepare rice to your specifications and add soy sauce.",
      "2. Make coleslaw dressing (pre-made or combine mayonnaise, mustard, apple cider vinegar, sugar, and celery seed).",
      "3. Combine shredded red and green cabbage and grated carrots.",
      "4. Remove plastic from raw Braised Pork Kālua package.",
      "5. In a skillet, add one serving of protein, add a portion of the Kālua marinade, and heat for 2 minutes, stirring every 30 seconds.",
      "6. Plate up and serve!"
    ],
  },
  {
    id: 4,
    name: "Chicken Teriyaki Rice and Broccoli",
    image: muscleChickenTeriyaki,
    calories: "391",
    carbs: "43",
    proteins: "34",
    fats: "9",
    ingredients: [
      "1 serving Hawaiian Teriyaki Chicken",
      "1 serving teriyaki Marinade",
      "½ cup brown rice",
      "6 tsp light soy sauce",
      "1 tbsp green onion, chopped",
      "1 cup broccoli"
    ],
    directions: [[
      "1. Prepare rice to your specifications.",
      "2. Chop broccoli and green onions.",
      "3. Add soy sauce and green onions to rice.",
      "4. Cook broccoli to your specifications.",
      "5. Remove plastic from Hawaiian Teriyaki Chicken package.",
      "6. In a skillet, add one serving of protein and a portion of the teriyaki marinade and heat for 2 minutes, stirring every 30 seconds.",
      "7. Plate up and serve!"
    ]
    ],
  },
  {
    id: 5,
    name: "Chocolate Zucchini Protein Muffins",
    image: chocolateZucchiniMuffins,
    calories: "276",
    carbs: "16",
    proteins: "30",
    fats: "10",
    ingredients: [
      "4 scoop Signature 100% Whey Isolate, Chocolate",
      "½ cup oat flour",
      "⅓ cup raw cacao powder",
      "⅓ cup coconut sugar",
      "2 whole egg",
      "1 tsp baking powder",
      "1 tbsp coconut oil",
      "⅔ cup water",
      "1 cup zucchini, finely shredded"
    ],
    directions: [
      "1. Preheat oven to 350F",
      "2. Combine all ingredients, stirring in zucchini last.",
      "3. Pour into lined muffin cups. Top with additional toppings, if desired (walnuts, coconut flakes, chocolate chips etc).",
      "4. Bake at 350F for 20 min"
    ],
  },
  {
    id: 6,
    name: "Coleslaw Meal Bowl",
    image: coleslawMealBowl,
    calories: "529",
    carbs: "43",
    proteins: "45",
    fats: "19",
    ingredients: [
      "1½ cup nonfat plain Greek yogurt",
      "1 cup, shredded red cabbage",
      "1 cup grated carrots",
      "¾ cup, shredded cabbage",
      "½ tbsp mustard",
      "½ tbsp cayenne pepper",
      "1 tbsp nutritional yeast",
      "¼ cup almonds, dry roasted, unsalted, sliced",
      "salt and pepper to taste"
    ],
    directions: [
      "1. Add all the ingredients to a large bowl, mix well, and enjoy!",
    ],
  },
  {
    id: 7,
    name: "Banana Protein Pudding",
    image: bananaProteinPudding,
    calories: "485",
    carbs: "39",
    proteins: "46",
    fats: "16",
    ingredients:  [
      "500 g 2% greek yogurt, plain",
      "1 large (8\" to 8-7/8\" long) banana",
      "4 tsp instant coffee",
      "17.6 oz tofu, firm",
      "2 tbsp chia seeds"
    ],
    directions: [
      "1. Blend the yogurt with tofu, banana, and coffee.",
      "2. Add one or two packets of non-caloric sweetener.",
      "3. Transfer into a cup, add the chia seeds, and mix.",
      "4. Fridge for 15 minutes or overnight."
    ],
  },
  {
    id: 8,
    name: "Double Chocolate Protein Mug Cake",
    image: doubleChocoMugCake,
    calories: "712",
    carbs: "27",
    proteins: "64",
    fats: "38",
    ingredients: [
      "3 tbsp almond flour",
      "⅓ cup almond flour, unsweetened",
      "1 scoop Dymatize ISO100 Hydrolyzed Whey Protein Isolate - Gourmet Chocolate",
      "1 tbsp cocoa powder, unsweetened",
      "½ tbsp coconut oil",
      "¼ tsp baking powder",
      "1 tbsp semisweet chocolate chips"
    ],
    directions: [
      "1. Mix all ingredients together in a microwave-safe mug.",
      "2. Microwave for 40 seconds.",
      "3. Garnish with your toppings of choice (whipped cream, berries, melted nut butter, sprinkles, etc) and dig in!"
    ],
  },
  {
    id: 9,
    name: "Easy Mediterranean Bowls",
    image: mediterraneanMealBowls,
    calories: "461",
    carbs: "40",
    proteins: "47",
    fats: "13",
    ingredients: [
      "2 piece chicken breast, boneless and skinless",
      "1 tbsp olive oil",
      "1 tsp table salt",
      "1 tsp leaves oregano",
      "¾ tsp onion powder",
      "½ tsp ground black pepper",
      "½ tsp dried dill",
      "½ tsp leaves thyme",
      "1 cup white Rice",
      "1¼ cup low-sodium chicken broth",
      "2 tbsp lemon juice",
      "½ tsp table salt",
      "¼ tsp ground black pepper",
      "¼ cup parsley, chopped",
      "1 cup plain Greek yogurt",
      "1 tbsp lemon juice",
      "1 tbsp dill, chopped",
      "1 clove garlic, minced",
      "¼ tsp sea salt",
      "½ tbsp extra virgin olive oil",
      "½ cup pared, chopped cucumber, peeled, finely chopped",
      "1 cup slices cucumber, chopped",
      "1 cup grape tomatoes",
      "1 can drained chickpeas, canned",
      "½ cup red onion, sliced",
      "¼ cup kalamata olives (pitted)",
      "¼ cup reduced-fat feta cheese",
      "1 pita, small (4\" dia) whole-Wheat Pita Bread"
    ],
    directions: [
      "1.Coat chicken breasts in olive oil and season with salt, dried oregano, onion powder, black pepper, dried dill, and dried thyme.",
      "2. Heat olive oil in a pan over medium-high heat, then cook chicken for about 8 minutes, flipping back and forth until cooked through and internal temperature reaches 165 degrees Fahrenheit.",
      "3. Remove chicken from heat and set aside.",
      "4. Prepare rice as you normally would, in pot or in rice cooker. Use broth instead of water, and cook until fluffy.",
      "5. Remove cooked rice from heat and add remaining ingredients: lemon juice, fresh parsley, and salt and pepper to taste.",
      "6. To prepare tzatziki sauce, combine Greek Yogurt, lemon juice, dill, garlic, sea salt, olive oil, and grated cucumber in a small mixing bowl.",
      "7. Return to cooked chicken and slice or dice to preference for serving.",
      "8. Time to plate! Scoop your rice onto a high-sided plate, add a serving of chicken on top.",
      "9. Add remaining ingredients to your taste: sliced cucumber, chickpeas, tomatoes, onion, kalamata olives, feta, and a scoop of tzatziki sauce.",
      "10. Serve with some pita bread or chips, if desired."
    ],
  },
  {
    id: 10,
    name: "Herb Roasted Chicken, Golden Potatoes, and Caprese",
    image: herbRoastChicken,
    calories: "562",
    carbs: "26",
    proteins: "44",
    fats: "31",
    ingredients: [
      "1 serving herb Roasted Chicken",
      "1 serving herb Marinade",
      "0.2 lb potatoes",
      "¼ tsp leaves oregano",
      "1½ tsp extra virgin olive oil",
      "¼ cup mozzarella cheese",
      "½ cup spinach",
      "⅛ cup grape tomatoes",
      "⅓ oz basil pesto sauce"
    ],
    directions: [
      "1. Cut potatoes into chunks, toss with olive oil and oregano.",
      "2. Bake in oven for 15 minutes at 325°F.",
      "3. Take mozzarella and toss with pesto sauce.",
      "4. Place mozzarella and grape tomatoes on top of spinach bed.",
      "5. Remove plastic from Herb Roasted Chicken package.",
      "6. In a skillet, add one serving of protein and a portion of the herb marinade and heat for 2 minutes, stirring every 30 seconds.",
      "7. Plate up and serve!"
    ],
  },
  {
    id: 11,
    name: "High Protein Plant-Based Lasagna",
    image: plantProteinLasagna,
    calories: "425",
    carbs: "50",
    proteins: "14",
    fats: "19",
    ingredients: [
      "1 block tofu, firm",
      "1 cup spinach",
      "1 cup broccoli",
      "1 whole green onion, chopped",
      "3 tbsp nutritional yeast",
      "1 salt and pepper to taste",
      "2 tbsp olive oil",
      "2 tbsp almond flour",
      "1 cup unsweetened almond milk",
      "1 cup non-dairy cheese",
      "1 box oven-ready lasagna noodles",
      "½ cup non-dairy cheese"
    ],
    directions: [
      "1. In a food processor or blender, combine and mix tofu, spinach, green onion, nutritional yeast, and plenty of seasoning (salt, pepper, red pepper, paprika).",
      "2. Add olive oil to a medium saucepan on medium-low heat.",
      "3. Sprinkle in flour and whisk to form a thick paste.",
      "4. Cook for 2-3 minutes until it's slightly brown.",
      "5. Reduce the heat to low, and slowly pour in the almond milk.",
      "6. Whisk continuously until it reaches a smooth consistency.",
      "7.Add the non-dairy cheese and seasoning (salt and pepper).",
      "8.Stir until the cheese melts and the sauce becomes creamy.",
      "9. Spray a large rectangle pan (9x13”) with cooking spray.",
      "10. Layer the filling, then a lasagna sheet, then sauce. Repeat until all ingredients are used.",
      "11. Make sure to cover all of the lasagna sheets with sauce.",
      "12. Add a layer of cheese to the top.",
      "13. Cover with aluminum foil.",
      "14. Preheat the oven to 425°F / 218°C.",
      "15. Bake for 40 minutes covered.",
      "16. Uncover and bake for another 20 minutes or until the cheese is melted.",
      "17. Remove and let rest for 15 minutes."
    ],
  },
  {
    id: 12,
    name: "High Protein Plant-Based Pancake Muffins",
    image: plantProteinPancakes,
    calories: "272",
    carbs: "11",
    proteins: "12",
    fats: "20",
    ingredients: [
      "1 cup unsweetened almond milk",
      "¼ cup canola oil",
      "1 tsp vanilla extract",
      "1 cup almond flour",
      "1 scoop plant protein powder",
      "3 tbsp ground flaxseed",
      "3 tbsp hemp seeds",
      "1 tbsp baking powder",
      "1 tsp cinnamon"
    ],
    directions: [
      "1. Preheat your oven to 375°F/191°C.",
      "2. Lightly spray the inside of a muffin tin with oil spray.",
      "3. Whisk the wet ingredients (milk, oil, vanilla extract) in a bowl. Optional: add sweetener (Monk Fruit, Stevia, Agave).",
      "4. Add the dry ingredients (flour, protein powder, flaxseed, hemp seed, baking powder, cinnamon) into the wet ingredient bowl.",
      "5. Mix until you have a thick muffin-like batter.",
      "6. Divide and pour the mix into the muffin tin, filling them about ¾ way to the top.",
      "7. Add anything you want on top (e.g., nuts, seeds, etc.).",
      "8. Bake in the middle rack for 18-20 minutes or until the center is dry.",
      "9. Let it rest."
    ],
  },
];

export default buildMuscleMeals;