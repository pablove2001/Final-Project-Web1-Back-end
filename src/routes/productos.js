const router = require("express").Router();

const controller = require("./../controllers/productos");

router.get("/", controller.list); // GET /
router.post("/", controller.create); // POST /
router.get("/:id", controller.getItem); // GET /:id
router.put("/:id", controller.update); // GET /:id
router.delete("/:id", controller.deleteOne); // GET /:id

module.exports = router;
