const mysql = require("mysql");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: 3000,
    user: process.env.USER,
    password: process.env.DB_PASS, 
    database: "burgers_db",
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection; 