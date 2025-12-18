const router = require("express").Router();
const adminOnly = require("../middleware/adminOnly");
const {
  getRequests,
  updateStatus,
  deleteRequest
} = require("../controllers/adminController");

router.get("/requests", adminOnly, getRequests);
router.patch("/requests/:id", adminOnly, updateStatus);
router.delete("/requests/:id", adminOnly, deleteRequest);

module.exports = router;
