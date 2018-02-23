const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{ 
    type: String,
    required: true,
    unique:{ index: {unique:true}}
        },

  password: {
      type: String,
      required: true},

  username: {
      type: String,
      required: true},

  user_bio: {
      type: String},
  
  profile_image:{
      type: String},

  wins: {
      type: Number},

  losses:{
      type: Number},

  last_played: {
      type: Number}
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;