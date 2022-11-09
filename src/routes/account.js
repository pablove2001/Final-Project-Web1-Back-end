const router = require("express").Router();

const controller = require("./../controllers/account");

router.get("/", controller.list);
router.post("/login", controller.list);

module.exports = router;
