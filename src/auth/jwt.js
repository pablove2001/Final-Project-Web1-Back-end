const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(data) {
  return jwt.sign(data, process.env.SECRET, { expiresIn: "60m" });
}

function validateToken(req, res, next) {
  const accessToken = req.body.authorization;
  if (!accessToken) res.send("Access denied");
  jwt.verify(accessToken, process.env.SECRET, (err, data) => {
    if (err) {
      res.send("Access denied, token expired or incorrect");
    } else {
      console.log(data);
      next();
    }
  });
}

function accessTokenToId(accessToken) {
  if (!accessToken) return null;
  jwt.verify(accessToken, process.env.SECRET, (err, data) => {
    if (err) {
      return null;
    } else {
      return data._id;
    }
  });
}

module.exports = {
  generateAccessToken,
  validateToken,
  accessTokenToId,
};
