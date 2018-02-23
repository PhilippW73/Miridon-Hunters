const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/miridon",
  {
    useMongoClient: true
  }
);

const materialSeed = [
  { material: "Meat/ Protein (lbs.)",	cost: 1,	available: true,	description: "While food is no longer needed to survive, meat provides valuable muscles mass and curbs the ever-present hunger. And you never lose that muscle, so many Miridonians have an unnatural strength. ...And somehow size to match." },
  { material: "Steel (lbs.)",	cost: 0.05,	available: true,	description: "Steel is the most common material that weapons are made out of. There are some higher grades of weapons, but steel is almost as readily available as sand. ...Okay, not quite that available." },
  { material: "Mechanical Parts (oz.)",	cost: 0.05,	available: false,	description: "Wires, gears, and assorted mechanical parts. Used mostly for mechs." },
  { material: "Puzzle Parts (oz.)",	cost: 0.2,	available: false,	description: "Forty years after the colonization of Miridon, ghosts started appearing, and people started to suddenly disappear... Or go crazy, get attacked by flying objects, and more. Warren, the first Ghost Hunter, invented a way to trap them. As poltergeists and higher level ghosts could go through walls, but preferred not to, he made intricate mazes inside of bullets. Puzzle weapons can keep ghosts for a time...until the ghost gets sick of it and leaves. The most common puzzle weapon grade keeps ghosts for about 3 days." },
  { material: "Imperial Pounds",	cost: 1,	available: true,	description: "The Empire maintains the only non-food currency in the world. The currency is known as pounds, and each pound corresponds to one pound of meat to be exchanged at the imperial banks." },
  { material: "Produce (lbs.)",	cost: 10,	available: true,	description: "While food is no longer needed to survive, produce provides valuable muscles flexibility and curbs the ever-present hunger. Most produce has been wiped off the face of the planet, except for the few trees that the Ghost Hunter Union keeps, and the Ghost Forest. ...But the danger of possession is high there." },
  { material: "Ghost HP",	cost: 1,	available: false,	description: "Ghosts are illegal to sell to anyone but the IOGH in the empire (and the GHU in the outer rim). Because of this, one cannot buy Ghost HP except through a black market." }
];

db.Material
  .remove({})
  .then(() => db.Material.collection.insertMany(materialSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
