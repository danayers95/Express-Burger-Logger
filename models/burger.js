const orm = require("../config/orm.js");

let burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", cols, vals, (res) => cb(res));
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => cb(res));
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
    },
    delete: (condition, cb) => {
        orm.delete("burgers", condition, (res) => {
            cb(res);
        });
    }
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