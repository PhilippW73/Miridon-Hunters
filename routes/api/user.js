const router = require("express").Router({mergeParams: true});
const userController = require("../../controllers/userController");


//Matches with "/api/user"
router.route("/")
  .get(userController.findOne)
  .post(userController.create)
  .put(userController.update);

//Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



module.exports = router;
