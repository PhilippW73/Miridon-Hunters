const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  character_name:{
    type: String,
    required: true
  },
  character_author: {
    type: String,
    required: true
  },
  character_desc: {
    type: String
  },
  class_name: {
    type: String,
    required: true
  },
  character_image: {
    type: String,
    required: true
  },
  strength_point: {
    type: Number,
    required: true
  },
  speed_point: {
    type: Number,
    required: true
  },
  hit_point: {
    type: Number,
    required: true
  },
  ghost_hp: {
    type: Number,
    default: 0
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  weapon: {
    type: String,
    default: "Unarmed"
  },
  "Meat/ Protein (lbs.)": {
    type: Number,
    default: 0
  },
  "Steel (lbs.)": {
    type: Number,
    default: 0
  },
  "Mechanical Parts (oz.)": {
    type: Number,
    default: 0
  },
  "Puzzle Parts (oz.)": {
    type: Number,
    default: 0
  },
  "Imperial Pounds": {
    type: Number,
    default: 0
  },
  "Produce (lbs.)": {
    type: Number,
    default: 0
  },
  "Ghost HP": {
    type: Number,
    default: 0
  }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;