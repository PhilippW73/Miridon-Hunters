const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  character_name: String,
  character_author: String,
  character_desc: String,
  class_name: String,
  character_image: Number,
  strength_point: Number,
  speed_point: Number,
  hit_point: Number,
  skill_point: Number,
  ghost_hp: Number,
  skills: String,
  wins: Number,
  losses: Number
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;