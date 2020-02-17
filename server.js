const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

//const router = require('./components/message/network');
const router = require("./network/routes");

db("mongodb://localhost:27017/telegram");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);

//enviamos el server de express
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
