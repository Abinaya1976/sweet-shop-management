const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from request header
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided.",
      });
    }

    // Remove "Bearer " from token
    const jwtToken = token.replace("Bearer ", "");

    // Verify token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Save user information
    req.user = decoded;

    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;