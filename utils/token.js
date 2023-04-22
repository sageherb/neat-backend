const jwt = require("jsonwebtoken");

const generateToken = (userId, expiresIn = "7d") => {
  const secret = process.env.JWT_SECRET;
  const payload = { userId };
  const options = { expiresIn };

  return jwt.sign(payload, secret, options);
};

module.exports = { generateToken };
