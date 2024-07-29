const Recipes = require("../models/recipes");
const Email = require("../models/email");

exports.addRecipe = async (req, res) => {
  const { name, country, category, ingredients, instructions, image, poster } =
    req.body;
  if (
    !name ||
    !country ||
    !category ||
    !ingredients ||
    !instructions ||
    !image ||
    !poster
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const recipe = await Recipes.create({
      name,
      country,
      category,
      ingredients,
      instructions,
      image,
      poster,
    });
    return res.status(200).json({ success: "Recipes created.", recipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.getRecipe = async (req, res) => {
  const withQuery = req.query.poster;
  if (Boolean(withQuery)) {
    const recipes = await Recipes.find({ poster: { $eq: withQuery } });
    return res.status(200).json({ recipes });
  } else {
    const recipes = await Recipes.find();
    return res.status(200).json({ recipes });
  }
};

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { name, country, category, ingredients, instructions, image } =
    req.body;
  if (
    !name ||
    !country ||
    !category ||
    !ingredients ||
    !instructions ||
    !image
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const findRecipe = await Recipes.findById(id);
  if (!findRecipe) {
    return res.status(400).json({ message: "Recipes not exists." });
  }
  try {
    const updateRecipe = await Recipes.updateOne({
      name,
      country,
      category,
      ingredients,
      instructions,
      image,
    });
    res.status(200).json({ success: "Recipe updated." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const findRecipe = await Recipes.findById(id);
  if (!findRecipe) {
    return res.status(400).json({ message: "Recipes not exists." });
  }
  try {
    await findRecipe.deleteOne();
    res.status(200).json({ success: "Recipe deleted." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.findRecipe = async (req, res) => {
  const { id } = req.params;
  const findRecipe = await Recipes.findById(id);
  if (!findRecipe) {
    return res.status(400).json({ message: "Recipe not exists." });
  } else {
    return res.status(200).json({ findRecipe });
  }
};

exports.addEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Please add email." });
  }

  try {
    const addEmail = await Email.create({
      email,
    });
    return res.status(200).json({ success: "Successfully add email" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
