const router = require("express").Router();

const routesAccount = require("./account");
const routesProductos = require("./productos");
const routesCarrito = require("./carrito");

router.use("/account", routesAccount);
router.use("/productos", routesProductos);
router.use("/carrito", routesCarrito);
    
module.exports = router;
