"use strict";
const mongoose = require("mongoose");

class Languages {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
  }
}

const languagesSchema = new mongoose.Schema({
  title: { type: String },
  imageUrl: { type: String },
  email: { type: String },
});

const languagesModel = mongoose.model("langCollection", languagesSchema);

module.exports = { Languages, languagesModel };
