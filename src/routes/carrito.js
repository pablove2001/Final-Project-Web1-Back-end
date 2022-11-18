const router = require("express").Router();

const controller = require("./../controllers/carrito");

router.get("/", controller.list);


module.exports = router;
