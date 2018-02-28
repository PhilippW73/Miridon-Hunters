const mongoose = require("mongoose");


module.exports = {
  getCharacter: function(req, res) {
    var id = req.params.id;
    db.Characters.findOne({ character_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getCharacters: function(req, res) {
    db.Characters.find()
    .then(function(dbCharacters) {
      return res.json(dbCharacters);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getClasses: function(req, res) {
    db.Classes.find()
    .then(function(dbClasses) {
      console.log("----------------")
      console.log(dbClasses)
      return res.json(dbClasses);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getClassNames: function(req, res) {
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
  getClassByName: function(req, res) {
    db.Classes.findOne({
      name: req.params.name
    })
    .then(function(dbClass) {
      return res.json(dbClass);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getUser: function(req, res) {
    db.Users.findOne({ user_id: req.params.id })
    .then(function(dbUser) {
      return res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getCharacterByRatio: function(req, res) {
    var ratio = req.params.ratio;
    console.log(req.params);
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
  getActionTypes: function(req, res) {
    db.ActionTypes.find({})
    .then(function(dbActionTypes) {
      return res.json(dbActionTypes);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getActions: function(req, res) {
    var id = req.params.id;
    var strengthpoints = req.params.strengthpoints;
    var speedpoints = req.params.speedpoints;
    this.getCharacter(id)
      .then(function(dbCharacter){
        //weapon types for all weapons
        let weapontype = "";
        switch (dbCharacter.weapon){
          case "small shield":
          case "large shield":
          case "great shield":
          case "grand shield":
          case "monument shield":
          case "shield":
            weapontype = "shield";
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
            weapontype = "ranged";
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
            weapontype = "melee";
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
  getStartWeapons: function(req, res) {
    db.Weapons.find({
      material: "steel",
      $or: [{weight: { $lte : 2}},{name: "Shotgun"}, {name: "Hunting Rifle"}]
    })
    .then(function(dbItems) {
      return res.json(dbItems);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  getAllWeapons: function(req, res) {
    var material = req.params.material;
    db.Weapons.find({
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
  createUser: function(req, res) {
    var params = req.params.params;
    db.User.create(
      {
          params
      })
      .then(function(dbUser) {
        res.redirect(307, "/login");
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  updateUser: function(req, res) {
    var id = req.params.id;
    var params = req.params.params;
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
  battleLoot: function(req, res) {
    var CharWon = req.params.CharWon;
    var CharLost = req.params.CharLost;
    db.Character.findOne(
      {
        _id: CharLost
      }
    )
    .then(function(dbCharacter) {
      let spoils = {};

      //Gathered Materials
      spoils["Meat/ Protein (lbs.)"] = Math.ceil(dbCharacter["Meat/ Protein (lbs.)"]/5);
      spoils["Steel (lbs.)"] = Math.ceil(dbCharacter["Steel (lbs.)"]/5);
      spoils["Mechanical Parts (oz.)"] = Math.ceil(dbCharacter["Mechanical Parts (oz.)"]/5);
      spoils["Puzzle Parts (oz.)"] = Math.ceil(dbCharacter["Puzzle Parts (oz.)"]/5);
      spoils["Imperial Pounds"] = Math.ceil(dbCharacter["Imperial Pounds"]/5);
      spoils["Produce (lbs.)"] = Math.ceil(dbCharacter["Produce (lbs.)"]/5);
      spoils["Ghost HP"] = Math.ceil(dbCharacter["Ghost HP"]/5);

      //Food materials
      spoils["Meat/ Protein (lbs.)"] += Math.ceil((100 + 5*dbCharacter[strength_point] + 5*dbCharacter[speed_point])/5);
      //Weapon materials
      db.Weapons.findOne({
        name: dbCharacter[weapon],
        material: dbCharacter[weaponmaterial]
      }).then(function(dbWeapon) {
        spoils[dbCharacter.weaponmaterial] += dbWeapon.cost;

        db.Character.findOneAndUpdate(
          {
            _id: CharWon
          }, {
            $inc: { 
              "Meat/ Protein (lbs.)": spoils["Meat/ Protein (lbs.)"],
              "Steel (lbs.)": spoils["Steel (lbs.)"],
              "Mechanical Parts (oz.)": spoils["Mechanical Parts (oz.)"],
              "Puzzle Parts (oz.)": spoils["Puzzle Parts (oz.)"],
              "Imperial Pounds": spoils["Imperial Pounds"],
              "Produce (lbs.)": spoils["Produce (lbs.)"],
              "Ghost HP": spoils["Ghost HP"]
            }
          })
        .then(function(dbCharacterWon) {

          return {
            characterWon: dbCharacterWon,
            characterLost: dbCharacter,
            comments: dbCharacterWon.name + " got "+ spoils["Meat/ Protein (lbs.)"] + " Meat/ Protein (lbs.), " + spoils["Steel (lbs.)"] + " Steel (lbs.), " + spoils["Imperial Pounds"] + " Imperial Pounds, and " + spoils["Produce (lbs.)"] + " Produce (lbs.)."
            // + spoils["Mechanical Parts (oz.)"] + " " + "Mechanical Parts (oz.)"+", " + spoils["Puzzle Parts (oz.)"] + " " + "Puzzle Parts (oz.)"+", "
            // + spoils["Ghost HP"] + " " + "Ghost HP."
          };

        }).catch(function(err) {
          console.log(err);
          return res.json(err);
        });
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });

    }).catch(function(err) {
      console.log(err);
      return res.json(err);
    });


  },
  charLose: function(req, res) {
    db.Character.findOneAndUpdate(
      {
        character_id: req.params.id
      }, {
        $inc: { losses: 1 }
      })
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  playerLose: function(req, res) {
    db.User.findOneAndUpdate(
      {
        user_id: req.params.id
      }, {
        $inc: { losses: 1 }
      })
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  charWin: function(req, res) {
    var id = req.params.id;
    db.Character.findOneAndUpdate(
      {
        character_id: id
      }, {
        $inc: { wins: 1 }
      })
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  playerWin: function(req, res) {
    var id = req.params.id;
    db.User.findOneAndUpdate(
      {
        user_id: id
      }, {
        $inc: { wins: 1 }
      })
      .then(function(dbCharacter) {
        return res.json(dbCharacter);
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  deleteChar: function(req, res) {
    var id = req.params.id;
    db.Characters.deleteOne({ character_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  deleteUser: function(req, res) {
    var id = req.params.id;
    db.Users.deleteOne({ user_id: id })
    .then(function(dbCharacter) {
      return res.json(dbCharacter);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  createCharacter: function(req, res) {
    var id = req.params.id;
    var params = req.params.params;
    db.Character.create(
      {
        character_name: params.name,
        character_author: id,
        character_desc: params.description,
        class_name: params.currentClass,
        character_image: params.image,
        strength_point: params.strength + params.currentClass.strength_point,
        speed_point: params.speed + params.currentClass.speed_point,
        hit_point: 5*(params.speed + params.currentClass.speed_point + params.strength + params.currentClass.strength_point),
        "Imperial Pounds": 50
      })
      .then(function(dbCharacter) {
        return dbCharacter;
      }).catch(function(err) {
        console.log(err);
        return res.json(err);
      });
  },
  getWeaponsPurchasable: function(req, res) {
    var material = req.params.material;
    var maxcost = req.params.maxcost;
    if (!maxcost) {
      maxcost = 99999;
    }
    db.Weapons.find({
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
  getAvailableMaterials: function(req, res) {
    db.Materials.find({
      available: true
    })
    .then(function(dbItems) {
      return res.json(dbItems);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  exchangeMaterial: function(req, res) {
    var id = req.params.id;
    var curMat = req.params.curMat;
    var newMat = req.params.newMat;
    var amt = req.params.amt;
    db.Materials.find({
      $or: [{name: curMat}, {name: newMat}]
    })
    .then(function(dbItems) {
      let newamt = Math.floor(dbItems.curMat.cost * amt / dbItems.newMat.cost);
      let remainder = Math.floor(dbItems.curMat.cost * amt % dbItems.newMat.cost)/dbItems.curMat.cost;
      db.Character.update(
        {
          _id: id
        }, {
          $inc: {
            [curMat]: - amt + remainder,
            [newMat]: + newamt
          }
        })
        .then(function(dbCharacter) {
          
          return {
            character: dbCharacter,
            comments: "You traded "+amt+" "+curMat+" for "+newamt+" "+newMat+ " and had "+remainder+ " of "+curMat+ " left over from the trade."
          };
        }).catch(function(err) {
          console.log(err);
          return res.json(err);
        });
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });

    
  },
  buyStats: function(req, res){
    var id = req.params.id;
    var mat = req.params.mat;
    var amt = req.params.amt;
    var stat="";
    var expgain=1;
    var name="";
    switch(mat){
      case "Ghost HP":
        stat = "ghost_hp";
        name = "ghost hp";
        expgain=1;
        break;
      case "Meat/ Protein (lbs.)":
        stat = "strength_point";
        name = "strength";
        break;
      case "Produce (lbs.)":
        stat = "speed_point";
        name = "speed";
        expgain = 10;
        break;      
    }
    db.Characters.findOne({ character_id: id })
    .then(function(dbCharacter) {
      // Change 5 to 25 for stats used in original.
      if(!dbCharacter[stat+"_exp"] || dbCharacter[stat+"_exp"] === 0){

        var start = (5/2)*(dbCharacter[stat]-1)*dbCharacter[stat];
        var end = (5/2)*(dbCharacter[stat]+amt-1)*(dbCharacter[stat]+amt);
        var cost = Math.ceil((end - start)/expgain);
      } else {
        var start = dbCharacter[stat+"_exp"];
        var end = (5/2)*(dbCharacter[stat]+amt-1)*(dbCharacter[stat]+amt);
        var cost = Math.ceil((end - start)/expgain);
      }
      end = cost * expgain + start;
      if(dbCharacter[mat] < cost) {
        return {
          character: dbCharacter,
          comments: "You did not have enough "+mat+" to gain "+amt+" "+name+"."
        };
      } else {
        db.Character.update(
          {
            _id: id
          }, {
            $inc: {
              [stat+"_exp"]: end,
              [mat]: -cost,
              [stat]: amt
            }
          })
          .then(function(dbCharacter) {
            
            return {
              character: dbCharacter,
              comments: "You ate "+cost+" "+mat+" and got "+amt+" "+name+ "."
            };
          }).catch(function(err) {
            console.log(err);
            return res.json(err);
          });
      }
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  },
  buyWeapon: function(req, res){
    var id = req.params.id;
    var mat = req.params.mat;
    var newWeap = req.params.newWeap;
    db.Characters.findOne({ character_id: id })
    .then(function(dbCharacter) {
      db.Weapons.find({
        $or: [
          {name: newWeap,
          material: mat},
          {name: dbCharacter.weapon,
          material: weaponmaterial}]
      })
      .then(function(dbItems) {
        //Now that we know the two weapons...
        const newWeapon = dbItems.find(function(element) {
          return (name === newWeap && material === mat);
        })
        const oldWeapon = dbItems.find(function(element) {
          return (name === dbCharacter.weapon && material === dbCharacter.weaponmaterial);
        })
        //Double check there is enough material. 
        var temp = dbCharacter[mat];
        if(oldWeapon.material === newWeapon.material){
         temp += oldWeapon.cost; 
        }
        if(temp < newWeapon.cost) {
          return {
            character: dbCharacter,
            comments: "You do not have enough "+mat+" to make the "+newWeapon.name+"."
          }
        } else {
          //Buy it!
          if(dbCharacter[mat] < cost) {
            return {
              character: dbCharacter,
              comments: "You did not have enough "+mat+" to gain "+amt+" "+name+"."
            };
          } else {
            db.Character.update(
              {
                _id: id
              }, {
                $inc: {
                  [oldWeapon.material]: oldWeapon.cost,
                  [mat]: -newWeapon.cost
                },
                $set: {
                  weapon: newWeap,
                  weaponmaterial: mat
                }
              })
              .then(function(dbCharacter) {
                
                return {
                  character: dbCharacter,
                  comments: "You turned your "+oldWeapon.name+"into scrap "+oldWeapon.material+" and got a new "+newWeap+" made from "+mat+ "."
                };
              }).catch(function(err) {
                console.log(err);
                return res.json(err);
              });
            }
        }
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        return res.json(err);
      });
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json(err);
    });
  }
};