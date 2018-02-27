const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const mongo = require("../../src/utils/mongo");

router.route("/Character/ratio/:ratio")
  .get(mongo.getCharacterByRatio(req.params.ratio));

router.route("/Character/:id/:params?")
  .post(mongo.createChar(req.params.id, req.params.params))
  .delete(mongo.deleteChar(req.params.id))
  .get(mongo.getCharacter(req.params.id));


router.route("/Characters")
  .get(mongo.getCharacters());

router.route("/User/:id/:params?")
  .delete(mongo.deleteUser(req.params.id))
  .post(mongo.createUser(req.params.params))
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

router.route("/Weapons/Start")
  .get(mongo.getStartWeapons());

router.route("/Weapons/Purchasable/:material/:maxcost")
  .get(mongo.getWeaponsPurchasable(req.params.material, req.params.maxcost));

router.route("/Weapons/:material")
  .get(mongo.getAllWeapons(req.params.material));
  
router.route("/Materials")
  .get(mongo.getAvailableMaterials());

router.route("/Material/exchange/:id/:curMat/:newMat/:amt)")
  .put(mongo.exchangeMaterial(req.params.id, req.params.curMat, req.params.newMat, req.params.amt));

router.route("/StatBuy/:id/:mat/:amt")
  .put(mongo.buyStats(req.params.id, req.params.mat, req.params.amt));

router.route("/Weapon/Buy/:id/:mat/:newWeap")
  .put(mongo.buyWeapon(req.params.id, req.params.mat, req.params.newWeap));

router.route("/battle/loot/:charwon/:charlost")
  .put(mongo.battleLoot(req.params.charwon, req.params.charlost));

router.route("/battle/userwin/:user")
  .put(mongo.playerWin(req.params.user));

router.route("/battle/userlose/:user")
  .put(mongo.playerLose(req.params.user));
  
router.route("/battle/charwin/:id")
  .put(mongo.charWin(req.params.id));

router.route("/battle/charlose/:id")
  .put(mongo.charLose(req.params.id));


// router.route("/battle/lose/:user/:charlost/:charwon")
//   .put(mongo.lose(req.params.user, req.params.charlost, req.params.charwon));


// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


module.exports = router;
