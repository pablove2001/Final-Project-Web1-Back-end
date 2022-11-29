const router = require("express").Router();

const controller = require("./../controllers/carrito");

router.get("/", controller.getItems);
router.put("/", controller.addItem);
router.delete("/", controller.deleteOneItem);
router.delete("/all", controller.deleteAll);

module.exports = router;
