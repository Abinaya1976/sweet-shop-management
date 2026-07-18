const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const authHeader = req.header("Authorization");

    console.log("Authorization Header:", authHeader);

    if (!authHeader) {

        return res.status(401).json({
            message: "No Authorization Header",
        });

    }

    try {

        const token = authHeader.replace("Bearer ", "");

        console.log("Extracted Token:", token);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("Decoded User:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).json({
            message: "Invalid Token",
        });

    }

};

module.exports = authMiddleware;