const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actiontypeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    faIcon:{
        type: String
    }
});



const Action = mongoose.model("ActionType", actiontypeSchema);

module.exports = ActionType;