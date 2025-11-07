const jwt = require("jsonwebtoken");

const generateToken = () => {
  const token = jwt.sign({}, process.env.JWT_SECRET);
  return token;
};

module.exports = generateToken;