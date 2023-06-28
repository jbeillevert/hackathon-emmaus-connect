const express = require("express");

const router = express.Router();

router.get("/user", utilisateurControllers.browse);
router.get("/user/:id", utilisateurControllers.read);
router.put("/user/:id", utilisateurControllers.edit);
router.post("/user", utilisateurControllers.add);
router.delete("/user/:id", utilisateurControllers.destroy);

module.exports = router;