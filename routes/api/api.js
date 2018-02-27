const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const mongo = require("../../src/utils/mongo");

router.route("/Character/id/:id")
  .get(mongo.getCharacter(req.params.id));

router.route("/Character/ratio/:ratio")
  .get(mongo.getCharacterByRatio(req.params.ratio));

router.route("/Characters")
  .get(mongo.getCharacters());

router.route("/User/:id/:params?")
  .post(mongo.createUser)
  .put(mongo.updateUser(req.params.id, req.params.params))
  .get(mongo.getUser(req.params.id));

router.route("/Classes")
  .get(mongo.getClasses());

router.route("/Classnames")
  .get(mongo.getClassNames());
  
router.route("/Class/name/:name")
  .get(mongo.getClassByNames(req.params.name));

router.route("/ActionTypes")
  .get(mongo.getActionTypes());

router.route("/Actions/:id/:strength/:speed")
  .get(mongo.getActions(req.params.id, req.params.strength, req.params.speed));


// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


module.exports = router;
