const router = require("express").Router();

const userRoutes = require("./user");
//const userRoutes = require("./api");


// User routes
router.use("/user", userRoutes);

module.exports = router;
