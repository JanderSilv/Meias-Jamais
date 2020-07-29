const jwt = require("jsonwebtoken");

function tokenVerifier(req, res, next) {
    var token = req.headers["authorization"].split(" ")[1];
    console.log(token);

    if (!token)
        return res
            .status(401)
            .send({ auth: false, message: "No token provided." });

    jwt.verify(token, "teste", function (err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token."
            });
        req.id = decoded.id;
        next();
    });
}

module.exports = tokenVerifier;
