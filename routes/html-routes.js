var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/"));
    });

    app.get("/characters", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/"));
    });

    app.get("/class", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/"));
    });

};
