const router = require("express").Router();

const controller = require("./../controllers/carrito");
const { validateToken } = require("../auth/jwt");

router.get("/", validateToken, controller.getItems);
router.put("/", validateToken, controller.addItem);
router.delete("/", validateToken, controller.deleteOneItem);
router.delete("/all", validateToken, controller.deleteAll);

module.exports = router;
