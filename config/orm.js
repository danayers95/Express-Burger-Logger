// imports connection.js into orm.js
const connection = require("../config/connection.js");

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


let orm = {
    selectAll: (tableInput, cb) => {
        let query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";
        connection.query(query, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        let query = "UPDATE " + table;
        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;
        connection.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // to delete burger:
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;



// nope. didn't work.
/* connection.connect(function(err) {
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

module.exports = orm; */