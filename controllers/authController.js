const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyAuth = async (req, res) => {
  const { email, phone, name } = req.firebaseUser;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({
      name,
      email,
      phone,
      authProvider: email ? "google" : "phone"
    });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token, user });
};
