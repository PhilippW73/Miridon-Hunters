
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  app.post("/api/signup", function(req, res) {
    db.User.create(
    {
        email : req.body.email,
        password : req.body.password,
        username : req.body.username,
        user_bio : req.body.user_bio,
        profile_image : req.body.profile_image
    })
    .then(function() {
      res.redirect(307,"/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });

  });

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
        username: req.user.username
      });
    }
  });

};