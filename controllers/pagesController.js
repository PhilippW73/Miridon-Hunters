var express = require("express");

var router = express.Router();

// Import the models to use their database functions.
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.User.all(function(data) {
    var hbsObject = {
      User: data
    };
    console.log(hbsObject);
    res.render("login", hbsObject);
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
    }).then(function(dbUser) {
    res.json(dbUser);
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

router.delete("/api/characters/:id", function(req, res) {
    db.Character.destroy({
    where: {
        id: req.params.id
    }
    }).then(function(dbCharacter) {
    res.json(dbCharacter);
    });
});

router.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
// Export routes for server.js to use.
module.exports = router;