"use strict";

const axios = require("axios");

require("dotenv").config();

const { Languages, languagesModel } = require("../models/languages.model");

const getLanguages = async (req, res) => {
  const apiLink = "https://ltuc-asac-api.herokuapp.com/programmingLangData";

  await axios.get(apiLink).then((langData) => {
    const langArray = langData.data.map((item) => {
      return new Languages(item.title, item.imageUrl);
    });
    res.json(langArray);
  });
};

const addToFavLanguages = async (req, res) => {
  const { title, imageUrl } = req.body;

  const newLanguage = new languagesModel({
    title,
    imageUrl,
  });
  newLanguage.save();
  res.json(newLanguage);
};

const getFavLanguages = async (req, res) => {
  languagesModel.find({ email: req.params.email }, (error, favLanguages) => {
    res.json(favLanguages);
  });
};

const deleteFavLanguages = async (req, res) => {
  languagesModel.deleteOne(
    { _id: req.params._id },
    (error, deleteFavLanguages) => {
      res.json(deleteFavLanguages);
    }
  );
};

const updateFavLanguages = async (req, res) => {
  const { title, imageUrl } = req.body;
  languagesModel.findByIdAndUpdate(
    { _id: req.params._id },
    { title, imageUrl },
    { new: true },
    (error, updateFavLanguages) => {
      res.json(updateFavLanguages);
    }
  );
};

module.exports = {
  getLanguages,
  addToFavLanguages,
  getFavLanguages,
  deleteFavLanguages,
  updateFavLanguages,
};
