"use strict";

const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

const {
  getLanguages,
  addToFavLanguages,
  getFavLanguages,
  deleteFavLanguages,
  updateFavLanguages,
} = require("./controllers/languages.controller");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/languages", getLanguages);
app.get("/favLanguages", getFavLanguages);
app.post("/favLanguages", addToFavLanguages);
app.delete("/favLanguages/:_id", deleteFavLanguages);
app.put("/favLanguages/:_id", updateFavLanguages);

app.listen(PORT, () => {
  console.log(`server working in ${PORT}`);
});
