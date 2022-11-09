const router = require("express").Router();

const routesAccount = require("./account");
const routesProductos = require("./productos");

router.use("/account", routesAccount);
router.use("/productos", routesProductos);

module.exports = router;
