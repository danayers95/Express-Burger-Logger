//set up connection for mysql
const mysql = require("mysql");
const dotenv = require("dotenv").config();

// trying something out instead:
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3006,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db",
    });
};

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection; 