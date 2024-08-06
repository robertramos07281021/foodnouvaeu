require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const recipesRouter = require("./routers/recipesRouter");

app.use(express.json());

app.use("/recipes", recipesRouter);

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
