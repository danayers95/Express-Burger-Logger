// imports connection.js into orm.js
const connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

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

const orm = {
    all: function (tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (tables, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;




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