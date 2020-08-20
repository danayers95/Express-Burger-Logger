// dependencies for server file
const express = require("express");
const body_parser = require("body-parser");
const handlebars = require("express-handlebars");

// Calls express
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

/* app.use(express.urlencoded({ extended: true }));
app.use(express.json()); */

// set handlebars requirements
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

// Opens server on localhost 
app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on localhost: " + PORT);
});