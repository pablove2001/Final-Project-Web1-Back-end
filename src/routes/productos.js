const router = require("express").Router();

const controller = require("./../controllers/productos");
const { validateToken } = require("../auth/jwt");

router.get("/", controller.list); // GET /
router.post("/", validateToken, controller.create); // POST /
router.get("/:id", controller.getItem); // GET /:id
router.put("/:id", validateToken, controller.update); // PUT /:id
router.delete("/:id", validateToken, controller.deleteOne); // DELETE /:id

module.exports = router;
