const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root000yes",
    database: "burgers_db"
});

// connect to mysql 

connection.connect(function(err) {
    if (err) throw err;
    startPrompt();
});



// opens the server that the application will be working on the local host
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({
    defaultlayout: "main"
}));

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT);
});