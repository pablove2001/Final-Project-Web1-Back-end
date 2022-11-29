const router = require("express").Router();

const controller = require("./../controllers/account");
const { validateToken } = require("../auth/jwt");

router.get("/", validateToken, controller.getAccount); // GET /admin/one
router.post("/signin", controller.signin); // POST /sign-in
router.post("/login", controller.login); // POST /log-in
router.delete("/delete", validateToken, controller.deleteOneAccount); // DELETE /delete
router.put("/newpassword", validateToken, controller.updatePassword); // PUT /:id
router.get("/direccion", validateToken, controller.getDireccion); // PUT
router.put("/direccion", validateToken, controller.updateDireccion); // PUT
router.get("/admin/all", validateToken, controller.list); // GET /admin/all

module.exports = router;
