const User = require("../server/db/models/user");

// Defining methods for the userController
module.exports = {
  findOne: function(req, res) {
    User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("UPDATE USER");
    User
      .findOneAndUpdate({ _id: req.user._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//character create//

router.get("/create", function(req, res) {
  db.Class.findAll({
  }).then(function(data) {
   var hbsObject = {
        Class: data
   };res.render("character-create", hbsObject);
  });
});

router.post("/create", function(req, res) {

  db.Character.create(
    {
      character_name: req.body.character_name,
      character_author: req.body.character_author,
      character_desc: req.body.character_desc,
      class_name: req.body.class_name,
      character_image: req.body.character_image,
      strength_point: req.body.strength_point,
      speed_point: req.body.speed_point,
      hit_point:req.body.hit_point,
      skill_point:req.body.skill_point,
      ghost_hp:req.body.ghost_hp,
      skills:req.body.skills,
      wins:req.body.wins,
      losses:req.body.losses
    }).then( function(result) {
    // res.json({ id: result.insertId });
    res.redirect('/selections')
  });
});
router.get("/characterselect", function(req, res) {
  var hbsObject;
  db.Character.findAll({
    attributes: ['character_id','character_name']
  }).then(function(data) {
    hbsObject = {
      AllCharacters: data
    };
    if(req.user){
      var id = req.user.last_played;
    } else {
      var id = 1;
    }
    console.log(JSON.stringify(hbsObject, null, 1));
      db.Character.findOne({
        where: {
            character_id: id
        }
      }).then(function(data2) {
        hbsObject.character = data2;
        console.log(".................................");
        console.log(JSON.stringify(hbsObject, null, 1))
        res.render("character-selection", hbsObject);
      });
    
  })
  var hbsObject;
  db.Character.findAll({
    attributes: ['character_id','character_name']
  }).then(function(data) {
    hbsObject = {
      AllCharacters: data
    };
    db.Character.findOne({
      where: {
          character_id: req.params.id
      }
    }).then(function(data2) {
      hbsObject.character = data2;
      console.log(".................................");
      console.log(JSON.stringify(hbsObject, null, 1))
      res.render("character-selection", hbsObject);
    });
  });
//Update User's last_played
  if(req.user){
    db.User.update({
      last_played: req.params.id,
    }, {
      where: {
        id: req.user.id
      }
    });
  }
});