var express = require("express");

var router = express.Router();

// Import the models to use their database functions.
var db = require("../models/");
//--------------------------------
// FINISHED ROUTES
//--------------------------------
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    // db.User.all(function(data) {
    //     var hbsObject = {
    //     User: data
    //     };
    //     console.log(hbsObject);
    // });
    res.render("login");
});

router.get("/profile/:id", function(req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(hbsObject) {
    res.render("profile", hbsObject);
  });
});

//generates page based on which class is selected
router.get("/generator/:id", function(req, res) {
  db.Class.findAll({
  }).then(function(data) {
    var hbsObject = {
        Class: data,
        Stats: [{name: "Strength",
            reference: "strength_point"},
            {name: "Speed",
            reference: "speed_point"},
            {name: "Ghost HP",
            reference: "ghost_hp"}
        ]};
    console.log(hbsObject);
    res.render("character-generator", hbsObject);
  });
});

router.get("/selection/:id", function(req, res) {
  // With no choices input from other characters
  // db.Character.findOne({
  //     where: {
  //     id: req.params.id
  // }}).then(function(hbsObject) {
  //     res.render("character-selection", hbsObject);
  // });


  //we want to get all the names and id's from character, but only the full character of the one shown.
  var hbsObject;
  db.Character.findAll({
    attributes: ['character_id','character_name']
  }).then(function(data) {
    hbsObject = {
      AllCharacters: data
    };
    console.log(hbsObject);
      db.Character.findOne({
        where: {
            id: req.params.id
        }
      }).then(function(data2) {
        hbsObject.character = data2;
        res.render("character-selection", hbsObject);
      });
    
  });
});

router.get("/battle/:id", function(req, res) {
  // Battle page needs:
  //   -All actions that are listed as 'basic' ...later we can add more types
  //   -actiontypes
  //   -player's character with findOne
  //   -enemy's character with findOne (generated based on player's win/loss ratio)

  //Action Types
  db.ActionTypes.findAll({
  }).then(function(typeData) {
    var hbsObject = {
      ActionTypes: typeData
      };
    console.log(hbsObject);

    //Actions
    db.Action.findAll({
      where: {
        //List only basics for now
        category: 'basics'
      }
    }).then(function(ActionsData) {
      hbsObject.Actions = ActionsData;
      console.log(hbsObject);

      //player
      db.Action.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(PlayerData) {
        hbsObject.Player = PlayerData;
        console.log(hbsObject);
        //Finds win/plays ratio of player, adds random number between -.1 and .1 to it
        var randEnemy = (Math.random()*.2 - .1) + (parseFloat(PlayerData.wins) / (parseFloat(PlayerData.wins) + parseFloat(PlayerData.losses)));
        //enemy
        db.Action.findOne({
          where: {
            //not the player
            id: {
              [Op.ne]: req.params.id
            }
          },
          order: [
            //orders by how close enemy's win/play ratio is to players
          [ABS( (parseFloat(wins) / (parseFloat(wins) + parseFloat(losses))) - randEnemy ), 'ASC']]
        }).then(function(EnemyData) {
          hbsObject.Enemy = EnemyData;
          console.log(hbsObject);
          res.render("battle", hbsObject);
        });
      });
    });
  });
});

//--------------------------------
//NEW USER ROUTES
//--------------------------------

router.post("/api/User", function(req, res) {
  db.User.create([
    'email', 'password'
  ],[
    req.body.email, req.body.password
  ]).then(function(dbUser) {
  res.json({ id: dbUser.insertId });
  });
});

//API routes to get json data
router.get("/api/users", function(req, res) {
    db.User.findAll({
    }).then(function(dbUser) {
      res.json(dbUser);
    });
});

router.get("/api/characters", function(req, res) {
    db.Character.findAll({
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
});

router.get("/api/characters/:id", function(req, res) {
  db.Character.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});

router.get("/api/users/:id", function(req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

//Update profile
router.put("/api/users/:id", function(req, res) {
  db.User.update({
    user_name: req.body.name,
    //user_email: req.body.email,
    password: req.body.password,
    user_bio: req.body.bio,
    profile_image: req.body.image
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});


//update wins for user and character
router.put("/won/:user/:character", function(req, res) {
  db.User.update({
    wins: sequelize.literal(wins + 1)
  }, {
    where: {
      id: req.body.user
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
  db.Character.update({
    wins: sequelize.literal(wins + 1)
  }, {
    where: {
      id: req.body.character
    }
  }).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});

//update losses for user and character
router.put("/lost/:user/:character", function(req, res) {
  User.update({
    losses: sequelize.literal(losses + 1)
  }, {
    where: {
      id: req.body.id


    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });

  Character.update({
    losses: sequelize.literal(losses + 1)
  }, {
    where: {
      id: req.body.character
    }
  }).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});
//Delete user
router.delete("/api/users/:id", function(req, res) {
  db.User.destroy({
    where: {
        id: req.params.id
    }
  }).then(function(dbUser) {
  res.json(dbUser);
  });
});

//Delete character
router.delete("/api/characters/:id", function(req, res) {
  db.Character.destroy({
    where: {
        id: req.params.id
    }
  }).then(function(dbCharacter) {
  res.json(dbCharacter);
  });
});
//--------------------------------
// UNFINISHED ROUTES
//--------------------------------


router.get("/profile/:id", function(req, res) {
  db.User.all(function(data) {
    var hbsObject = {
      User: data
    };
    console.log(hbsObject);
    res.render("profile", hbsObject);
  });
});


router.get("/battle", function(req, res) {
    db.User.all(function(data) {
      var hbsObject = {
        User: data
      };
      console.log(hbsObject);
      res.render("battle", hbsObject);
    });
});



router.get("/api/characters", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.uid = req.query.user_id;
    }
    db.Character.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });

router.get("/api/characters/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Character.findOne({
    where: {
        id: req.params.id
    },
    include: [db.Post]
    }).then(function(dbCharacter) {
    res.json(dbCharacter);
    });
});

router.post("/api/characters", function(req, res) {
    db.Character.create(req.body).then(function(dbCharacter) {
    // res.json(dbCharacter);
    res.json({ id: dbCharacter.insertId });
    });
});


  
// Export routes for server.js to use.
module.exports = router;