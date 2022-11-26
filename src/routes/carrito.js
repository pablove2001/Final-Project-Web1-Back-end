const router = require("express").Router();

const controller = require("./../controllers/carrito");

router.get("/", controller.list);//GET Carrito
router.post("/",controller.create); //POST Añadir al carrito
router.put('/:id',controller.update); //PUT Aumentar cantidad de un producto
router.delete("/:id",controller.delete);// DELETE Borrar un producto de carrito 

module.exports = router;
