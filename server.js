
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// 

var app = express();

// For Chat
var server = require('http').createServer(app);
var socketIO = require('socket.io')(server);
require("./util/index_chat")(socketIO);

// 

var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/pagesController.js");

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
