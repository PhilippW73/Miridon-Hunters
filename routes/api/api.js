const router = require("express").Router();
const mongo = require("../../controllers/mongo");

router.route("/Character/ratio/:ratio")
  .get(mongo.getCharacterByRatio);

router.route("/Character/:id/:params?")
  .post(mongo.createChar)
  .delete(mongo.deleteChar)
  .get(mongo.getCharacter);


router.route("/Characters")
  .get(mongo.getCharacters);

router.route("/Characternames")
  .get(mongo.getCharacterNames);

router.route("/User/:id/:params?")
  .delete(mongo.deleteUser)
  .post(mongo.createUser)
  .put(mongo.updateUser)
  .get(mongo.getUser);

router.route("/Classes")
  .get(mongo.getClasses);

router.route("/Classnames")
  .get(mongo.getClassNames);
  
router.route("/Class/name/:name")
  .get(mongo.getClassByNames);

router.route("/ActionTypes")
  .get(mongo.getActionTypes);

router.route("/Actions/:id/:strength/:speed")
  .get(mongo.getActions);

router.route("/Weapons/Start")
  .get(mongo.getStartWeapons);

router.route("/Weapons/Purchasable/:material/:maxcost")
  .get(mongo.getWeaponsPurchasable);

router.route("/Weapons/:material")
  .get(mongo.getAllWeapons);
  
router.route("/Materials")
  .get(mongo.getAvailableMaterials);

router.route("/Material/exchange/:id/:curMat/:newMat/:amt)")
  .put(mongo.exchangeMaterial);

router.route("/StatBuy/:id/:mat/:amt")
  .put(mongo.buyStats);

router.route("/Weapon/Buy/:id/:mat/:newWeap")
  .put(mongo.buyWeapon);

router.route("/battle/loot/:charwon/:charlost")
  .put(mongo.battleLoot);

router.route("/battle/userwin/:user")
  .put(mongo.playerWin);

router.route("/battle/userlose/:user")
  .put(mongo.playerLose);
  
router.route("/battle/charwin/:id")
  .put(mongo.charWin);

router.route("/battle/charlose/:id")
  .put(mongo.charLose);


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
