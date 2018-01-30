
var db = require("../models");
var passport = require("../config/passport");

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
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

