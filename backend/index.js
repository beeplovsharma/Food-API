import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// Middleware
app.use(cors());
// app.use(
//   cors({
//     origin: ["food-api-khaki.vercel.app"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
app.use(bodyParser.json());

const foods = [
  {
    name: "Chocolate Cake",
    category: "sweet",
  },
  {
    name: "Lemon Tart",
    category: "sour",
  },
  {
    name: "Spicy Chicken Wings",
    category: "spicy",
  },
  {
    name: "Apple Pie",
    category: "sweet",
  },
  {
    name: "Sour Patch Kids",
    category: "sour",
  },
  {
    name: "Jalapeño Poppers",
    category: "spicy",
  },
  {
    name: "Brownies",
    category: "sweet",
  },
  {
    name: "Pickles",
    category: "sour",
  },
  {
    name: "Spicy Salsa",
    category: "spicy",
  },
  {
    name: "Ice Cream",
    category: "sweet",
  },
  {
    name: "Tamarind Candy",
    category: "sour",
  },
  {
    name: "Hot and Sour Soup",
    category: "spicy",
  },
  {
    name: "Caramel Popcorn",
    category: "sweet",
  },
  {
    name: "Limeade",
    category: "sour",
  },
  {
    name: "Kimchi",
    category: "spicy",
  },
  {
    name: "Mango Sorbet",
    category: "sweet",
  },
  {
    name: "Cranberry Juice",
    category: "sour",
  },
  {
    name: "Chili Con Carne",
    category: "spicy",
  },
  {
    name: "Cupcakes",
    category: "sweet",
  },
  {
    name: "Grapefruit",
    category: "sour",
  },
];

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/api/foods", (req, res) => {
  if (req.query.search) {
    const filteredProducts = foods.filter((food) =>
      food.category.includes(req.query.search)
    );
    return res.json(filteredProducts);
  }
  res.json(foods);
});

app.get("/api/about", (req, res) => {
  res.json({
    name: "Beeplov",
    description: "Foodie",
    version: "3.0.0",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
