const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exchangeSchema = new Schema({
    material:{
      type: String,
      required: true
    },
    cost:{
      type: Number
    },
    available:{
      type: Boolean
    }
});



const Exchange = mongoose.model("Exchange", exchangeSchema);

module.exports = Exchange;