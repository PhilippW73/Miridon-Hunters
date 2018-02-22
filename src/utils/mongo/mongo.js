import mongoose from "mongoose";


export default {
  getCharacter: function(id) {
    db.Characters.findOne({ character_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getCharacters: function() {
    db.Characters.find()
    .then(function(dbCharacters) {
      return res.json(dbCharacters);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getClasses: function() {
    db.Classes.find()
    .then(function(dbClasses) {
      return res.json(dbClasses);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getClassNames: function() {
    db.Classes.find()
    .select({ name: 1 })
    .then(function(dbClasses) {
      return res.json(dbClasses);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getClassByName: function(name) {
    db.Classes.findOne({
      name: name
    })
    .then(function(dbClass) {
      return res.json(dbClass);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getUser: function(id) {
    db.Users.findOne({ user_id: id })
    .then(function(dbUser) {
      return res.json(dbUser);
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
        //weapon types for all weapons
        switch (dbCharacter.weapon){
          case "small shield":
          case "large shield":
          case "great shield":
          case "grand shield":
          case "monument shield":
          case "shield":
            const weapontype = "shield";
            break;
          case "ranged":
          case "palm pistol":
          case "revolver":
          case "heavy revolver":
          case "hand cannon":
          case "dreadnaught":
          case "hunting rifle":
          case "battle rifle":
          case "heavy rifle":
          case "targeting cannon":
          case "hand howitzer":
          case "shotgun":
          case "spreadshot":
          case "scattershot":
          case "iron mist":
          case "bullet rain storm":
          case "stun pistol":
          case "shock gun":
          case "plasma rifle":
          case "battery arm":
          case "plasma cannon":
          case "sniper rifle":
          case "tesla":
          case "shotgun":
          case "pistol":
            const weapontype = "ranged";
            break;
          case "melee":
          case "longsword":
          case "claymore":
          case "greatsword":
          case "grand saber":
          case "monument sword":
          case "sword":
          case "hand drill":
          case "arm drill":
          case "power drill":
          case "grand drill":
          case "star drill":
          case "heaven piercing drill":
          case "hand hammer":
          case "war hammer":
          case "maul":
          case "great maul":
          case "the crusher":
          case "unarmed":
          case "claw":
          case "clawed gauntlet":
          case "robot arm":
          case "dragon claw":
          case "mech arm":
          case "drill":
          case "hammer":
          case "grappler":
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
  getStoreItemsPurchasable: function(material, maxcost) {
    if (!maxcost) {
      maxcost = 99999;
    }
    db.Store.find({
      cost: { $lte: maxcost },
      material: material
    })
    .then(function(dbItems) {
      return res.json(dbItems);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getStoreItemsAll: function(material) {
    db.Store.find({
      material: material
    })
    .then(function(dbItems) {
      return res.json(dbItems);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  createUser: function() {
    db.User.create(
      {
          email : req.body.email,
          password : req.body.password,
          username : req.body.username,
          user_bio : req.body.user_bio,
          profile_image : req.body.profile_image
      })
      .then(function(dbUser) {
        res.redirect(307, "/login");
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  updateUser: function(id, params) {
    db.User.update(
      {
        user_id: id
      }, {
        $set: {
          params
        }
      })
      .then(function(dbUser) {
        return res.json(dbUser);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  charLose: function(id) {
    db.Character.findOneAndUpdate(
      {
        character_id: id
      }, {
        $inc: { losses: 1 }
      }, options, callback)
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  playerLose: function(id) {
    db.User.findOneAndUpdate(
      {
        user_id: id
      }, {
        $inc: { losses: 1 }
      }, options, callback)
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  charWin: function(id) {
    db.Character.findOneAndUpdate(
      {
        character_id: id
      }, {
        $inc: { wins: 1 }
      }, options, callback)
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  playerWin: function(id) {
    db.User.findOneAndUpdate(
      {
        user_id: id
      }, {
        $inc: { wins: 1 }
      }, options, callback)
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  deleteChar: function(id) {
    db.Characters.deleteOne({ character_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  deleteUser: function(id) {
    db.Users.deleteOne({ user_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  }
};

