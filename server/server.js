require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const recipesRouter = require("./routers/recipesRouter");
// const { fileURLToPath } = require("url");
app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use("/recipes", recipesRouter);

app.use(express.static(path.join(__dirname, "./dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

mongoose
  .connect(process.env.DB_URI, { dbName: `recipes_db` })
  .then(() => {
    console.log("connection open");
    app.listen(4000, "localhost", () => {
      console.log("Server is up on port 4000");
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
