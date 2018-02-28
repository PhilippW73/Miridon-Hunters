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
  strength_point_exp: {
    type: Number
  },
  speed_point_exp: {
    type: Number
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
  weaponmaterial: {
    type: String
  },
  meat_protein_lbs: {
    type: Number,
    default: 0
  },
  steel_lbs: {
    type: Number,
    default: 0
  },
  mechanical_parts_oz: {
    type: Number,
    default: 0
  },
  puzzle_parts_oz: {
    type: Number,
    default: 0
  },
  imperial_pounds: {
    type: Number,
    default: 0
  },
  produce_lbs: {
    type: Number,
    default: 0
  },
  ghost_hp: {
    type: Number,
    default: 0
  }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;