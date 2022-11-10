const router = require("express").Router();

const controller = require("./../controllers/rutinas");

router.get("/", controller.list);

module.exports = router;
