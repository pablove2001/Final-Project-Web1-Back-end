const router = require("express").Router();

const controller = require("./../controllers/productos");

router.get("/", controller.list);

module.exports = router;
