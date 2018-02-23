const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    material:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: "weapon"
    },
    subtype:{
        // "sniper rifle", "shield", etc.
        type: String
    },
    cost:{
        type: Number
    },
    weight:{
        type: Number
    },
    damage:{
        type: String
    },
    tohit: {
        type: Number
    },
    range: {
        // Range mostly used for ranged weapons, but melee range is 5. Snipers can go up to triple their range.
        type: Number,
        default: 5
    },
    special: {
        type: String
    },
    description: {
        type: String
    }
});



const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;