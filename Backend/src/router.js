const express = require("express");

const router = express.Router();

const AdminControllers = require("./controllers/AdminControllers");
const PriceControllers = require("./controllers/PriceControllers");

router.post("/admin", AdminControllers.add);

router.get("/price", PriceControllers.browse);
router.get("/price/:id", PriceControllers.read);
router.put("/price/:id", PriceControllers.edit);
router.post("/price", PriceControllers.add);
router.delete("/price/:id", PriceControllers.destroy);

module.exports = router;
