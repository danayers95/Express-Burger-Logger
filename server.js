const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


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