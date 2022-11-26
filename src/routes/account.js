const router = require("express").Router();

const controller = require("./../controllers/account");

router.post("/signin", controller.signin); // POST /sign-in
router.post("/login", controller.login); // POST /log-in
router.get("/admin/all", controller.list); // GET /admin/all
router.get("/admin/one", controller.getAccount); // GET /admin/one
router.delete("/admin", controller.deleteOneAccount); // DELETE /admin
// router.put("/admin/:id", controller.updateAccount); // PUT /:id

module.exports = router;
