const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("cats", cols, vals, (res) => {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;







/* const burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger; */