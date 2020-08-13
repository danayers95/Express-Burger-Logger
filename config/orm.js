// imports connection.js into orm.js
const connection = require("../config/connection.js");

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    };
    console.log("connected as id " + connection.threadId);
});

const orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(burger_name, callback) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: function(burgerID, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

module.exports = orm;