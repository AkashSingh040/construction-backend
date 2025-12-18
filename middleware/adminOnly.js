const verifyJWT = require("./verifyJWT");

module.exports = [
  verifyJWT,
  (req, res, next) => {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Admin only" });
    next();
  }
];
