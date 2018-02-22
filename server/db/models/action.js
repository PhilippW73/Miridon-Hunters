const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    actionType:{
        type: String,
        required: true
    },
    category:{
        type: String,
        default: 'basics'
    },
    weapon:{
        type: String,
        default: ""
    },
    function:{
        type: String
    },
    strength_cost:{
        type: Number,
        default: 0
    },
    speed_cost:{
        type: Number,
        default: 0
    },
    subtley_mod:{
        type: Number
    }
});



const Action = mongoose.model("Action", actionSchema);

module.exports = Action;