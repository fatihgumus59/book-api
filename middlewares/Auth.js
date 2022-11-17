const Jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];

      if(token == null) {
        return res.status(401).json({message: 'You must login.'})
      }
  
      Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) {
          return res.status(403).json({message: err});
        } else {
          req.user = user;
          next();
        }
      });

    } catch (error) {
      res.status(401).json({  message: 'Not Authorized'});
    }
};

module.exports = {
    authenticateToken,
};
  