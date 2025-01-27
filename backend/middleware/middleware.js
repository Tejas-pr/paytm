const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwttoken = process.env.JWT_TOKEN;

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decode = jwt.verify(token, jwttoken);
        if(decode) {
            req.userid = decode.userid;
            next();
        } else {
            res.status(403).json({
                message: "invalid token!"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = {
    authmiddleware
}