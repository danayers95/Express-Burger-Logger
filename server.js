// Require express, express-handlebars and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// Calls express
const app = express();

// Parse application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up handlebars
app.engine("handlebars", exphbs({defaultlayout: "main"}));
app.set("view engine", "handlebars");

const router = require("./controllers/burger_controller.js");
app.use("/", router);

// Opens server on localhost 
const port = process.env.PORT || 3000;
app.listen(port);