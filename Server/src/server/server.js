const express = require("express");
const bodyParser = require("body-parser");

const server = express();

const cors = require("cors");
const routes = require("./router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
    next();
});

app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        // Send the error rather than to show it on the console
        res.status(401).send(err);
    } else {
        next(err);
    }
});
var port = process.env.PORT || 3333
app.use(express.json());
app.use(routes);
app.listen(port);
