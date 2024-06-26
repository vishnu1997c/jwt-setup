const {UnauthenticatedError} = require("../errors");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError("No Token Provided");
    } 

    const token = authHeader.split(" ")[1];

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        const {id, username} = decode;
        req.user = {id, username};
        next();
    } catch (error) {
        throw new UnauthenticatedError("not auth");
    }

}

module.exports = authenticationMiddleware;