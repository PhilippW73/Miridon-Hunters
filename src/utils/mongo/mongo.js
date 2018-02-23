import mongoose from "mongoose";


export default {
  getCharacter: function(id) {
    db.Characters.findOne({ _id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getCharacterByRatio: function(ratio) {
    db.Characters.aggregate([
        {$project: {id: 1, diff: {$abs: {$subtract: [ratio, { $divide: [ "$wins", { $add: [ "$wins", "$losses" ] }  ] } ]}}}},
        // {$project: {diff: {$abs: {$subtract: [ratio, { $divide: [ "$wins", { $add: [ "$wins", "$losses" ] }  ] } ]}}, doc: '$$ROOT'}},
        {$sort: {diff: 1}},
        {$limit: 1}
    ])
    .then(function(dbResult) {
      return this.getCharacter(dbResult.id);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
    // db.Characters.find({})
    // .sort({wins: 'asc'})
    // .then(function(dbCharacter) {
    //   res.json(dbCharacter);
    // })
    // .catch(function(err) {
    //   // If an error occurred, send it to the client
    //   res.json(err);
    // });
  },
  getActionTypes: function() {
    db.ActionTypes.find({})
    .then(function(dbActionTypes) {
      return res.json(dbActionTypes);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getActions: function(id, strengthpoints, speedpoints) {
    this.getCharacter(id)
      .then(function(dbCharacter){
        switch (dbCharacter.weapon){
          case "ranged":
            const weapontype = "ranged";
            break;
          case "melee":
          case "longsword":
          case "claymore":
          case "greatsword":
          case "grand saber":
          case "monument sword":
          default:
            const weapontype = "melee";
            break;
        }
        db.Actions.find({
          $or: [{weapon: dbCharacter.weapon}, {weapon: weapontype}],
          strength: { $lte: strengthpoints },
          speed: { $lte: speedpoints }
        })
        .then(function(dbActions) {
          return res.json(dbActions);
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
      });
  },
  


  //   mongo.getActionTypes()
  //   mongo.getActions(id, strength, speed)
  //   mongo.charLose(this.state.player.character_id);
  //       mongo.charWin(this.state.enemy.character_id);
  //       mongo.playerLose(id);
  //       mongo.playerWin(id);



  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};


// db.User.create(
//   {
//       email : req.body.email,
//       password : req.body.password,
//       username : req.body.username,
//       user_bio : req.body.user_bio,
//       profile_image : req.body.profile_image
//   })
//   .then(function(dbUser) {
//     res.redirect(307, "/login");
//   }).catch(function(err) {
//     console.log(err);
//     res.json(err);
//   });

