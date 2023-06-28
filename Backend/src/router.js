const express = require("express");

const router = express.Router();

const UserControllers = require("./controllers/UserControllers");
const PriceControllers = require("./controllers/PriceControllers");

router.get("/user", UserControllers.browse);
router.get("/user/:id", UserControllers.read);
router.put("/user/:id", UserControllers.edit);
router.post("/user", UserControllers.add);
router.delete("/user/:id", UserControllers.destroy);

router.get("/price", PriceControllers.browse);
router.get("/price/:id", PriceControllers.read);
router.put("/price/:id", PriceControllers.edit);
router.post("/price", PriceControllers.add);
router.delete("/price/:id", PriceControllers.destroy);

module.exports = router;