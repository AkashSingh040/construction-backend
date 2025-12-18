const router = require("express").Router();
const verifyJWT = require("../middleware/verifyJWT");
const {
  createRequest,
  getMyRequests
} = require("../controllers/requestController");

router.post("/", verifyJWT, createRequest);
router.get("/my", verifyJWT, getMyRequests);

module.exports = router;
