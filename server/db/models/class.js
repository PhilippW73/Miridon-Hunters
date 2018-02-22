const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  class_name:{ 
    type: String,
    required: true},

class_quote: {
    type: String,
    required: true},

class_desc: {
    type: String,
    required: true},

class_image: String,

strength_point:{
    type: Number,
    required: true},

speed_point: {
    type: Number,
    required: true},

skill_point: {
  type: Number,
  required: true},

ghost_hp: {
  type: Number,
  required: true},
  
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;