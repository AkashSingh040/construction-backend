const admin = require("../config/firebaseAdmin");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("AUTH HEADER:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    console.log("DECODED TOKEN:", decoded);
    req.firebaseUser = decoded;
    next();
  } catch (err) {
    console.error("FIREBASE VERIFY ERROR:", err.message);
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};
