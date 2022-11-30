const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(data) {
  return jwt.sign(data, process.env.SECRET, { expiresIn: "60m" });
}

function validateToken(req, res, next) {
  const accessToken = req.headers.authorization;
  console.log('accessT',accessToken);
  console.log('Req:',req.headers);
  if (!accessToken){
    res.status(401).send("Access denied");
    return; 
  };
  jwt.verify(accessToken, process.env.SECRET, (err, data) => {
    if (err) {
      
      res.send("Access denied, token expired or incorrect");
    } else {
      req.body._id = data._id;
      next();
    }
  });
}

module.exports = {
  generateAccessToken,
  validateToken,
};
