const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

router.get("/", recipesController.getRecipe);
router.post("/add", recipesController.addRecipe);
router.put("/update/:id", recipesController.updateRecipe);
router.delete("/delete/:id", recipesController.deleteRecipe);
router.get("/:id", recipesController.findRecipe);
router.post("/addemail", recipesController.addEmail);

module.exports = router;
