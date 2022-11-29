const router = require("express").Router();

const controller = require("./../controllers/account");

router.post("/signin", controller.signin); // POST /sign-in
router.post("/login", controller.login); // POST /log-in
router.get("/admin/all", controller.list); // GET /admin/all
router.get("/admin/one", controller.getAccount); // GET /admin/one
router.delete("/admin", controller.deleteOneAccount); // DELETE /admin
router.put("/newpassword", controller.updatePassword); // PUT /:id
router.get("/direccion", controller.getDireccion); // PUT
router.put("/direccion", controller.updateDireccion); // PUT

module.exports = router;
