const express = require("express");
const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("./middleware");

const AdminControllers = require("./src/controllers/AdminControllers");
const PriceControllers = require("./src/controllers/PriceControllers");

router.get("/admin", AdminControllers.browse);
router.get("/admin/:id", AdminControllers.read);
router.post("/admin", hashPassword, AdminControllers.add);
router.put("/admin/:id", AdminControllers.edit);
router.delete("/admin/:id", AdminControllers.destroy);
router.post(
  "/admin/login",
  AdminControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/price", PriceControllers.browse);
router.get("/price/:id", PriceControllers.read);
router.put("/price/:id", PriceControllers.edit);
router.post("/price", PriceControllers.add);
router.delete("/price/:id", PriceControllers.destroy);

module.exports = router;
