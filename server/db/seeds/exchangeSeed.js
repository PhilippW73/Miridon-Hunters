const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/miridonhunters",
  {
    useMongoClient: true
  }
);

const exchangeSeed = [
  {
    material: "Meat/ Protein (lbs.)",
    cost: "1",
    available: true
  },
  {
    material: "Steel (lbs.)",
    cost: "0.05",
    available: true
  },
  {
    material: "Mechanical Parts (oz.)",
    cost: "0.05",
    available: false
  },
  {
    material: "Puzzle Parts (oz.)",
    cost: 0.2,
    available: false
  },
  {
    material: "Imperial Pounds",
    cost: 1,
    available: true
  },
  {
    material: "Produce (lbs.)",
    cost: 10,
    available: true
  },
  {
    material: "Ghost HP",
    cost: 1,
    available: false
  }
];

db.Exchange
  .remove({})
  .then(() => db.Exchange.collection.insertMany(exchangeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
