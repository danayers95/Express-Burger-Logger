// Require express, express-handlebars and body-parser
const express = require("express");
const router = require("./controllers/burgers_controller.js");
const handlebars = require("express-handlebars");

// Calls express
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
app.engine(
    "handlebars", 
    handlebars({ 
        layoutsDir: __dirname + "/views/layouts",
    })
);
app.set("view engine", "handlebars");

app.use('/', router);

// Opens server on localhost 
app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on localhost: " + PORT);
});