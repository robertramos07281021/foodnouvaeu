const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "beef",
      "chicken",
      "dessert",
      "lamb",
      "miscellaneous",
      "pasta",
      "pork",
      "seafood",
      "side",
      "starter",
      "vegan",
      "vegetarian",
      "breakfast",
      "goat",
    ],
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", RecipesSchema);
