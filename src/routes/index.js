const router = require("express").Router();

const routesAccount = require("./account");
const routesProductos = require("./productos");
const routesCarrito = require("./carrito");
const routesRutinas = require("./rutinas");

router.use("/account", routesAccount);
router.use("/productos", routesProductos);
router.use("/carrito", routesCarrito);
router.use("/rutinas", routesRutinas);


module.exports = router;
