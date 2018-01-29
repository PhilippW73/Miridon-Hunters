
var db = require("../models");

module.exports = function(app) {

  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/posts/character/:class", function(req, res) {
    db.Post.findAll({
        where : {
          class_name : req.params.class
        }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/user/posts", function(req, res) {
    db.Post.create(
    {
        user_name : req.body.user_name,
        password : req.body.password,
        user_bio : req.body.user_bio,
        profile_image : req.body.profile_image
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/character/posts", function(req, res) {
    db.Post.create(
    {
        character_name : req.body.character_name,
        character_descy : req.body.character_desc,
        class_name : req.body.class_name,
        character_image : req.body.character_image,
        strength_point : req.body.strength_point,
        speed_point : req.body.speed_point,
        skill_point : req.body.skill_point,
        ghost_hp : req.body.ghost_hp,
        skills : req.body.skills
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.put("/api/user/:username", function(req, res) {
    db.Post.update({
    {
        password : req.body.password,
        user_bio : req.body.user_bio,
        profile_image : req.body.profile_image
    },    
    where : {
        user_name : req.params.user_name
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
