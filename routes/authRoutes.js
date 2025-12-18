const router = require("express").Router();
const verifyFirebase = require("../middleware/verifyFirebase");
const { verifyAuth } = require("../controllers/authController");

router.post("/verify", verifyFirebase, verifyAuth);

module.exports = router;
