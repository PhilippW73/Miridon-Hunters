const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    cost:{
      type: Number
    },
    available:{
      type: Boolean
    },
    description:{
      type: String
    }
});



const Material = mongoose.model("Exchange", materialSchema);

module.exports = Material;