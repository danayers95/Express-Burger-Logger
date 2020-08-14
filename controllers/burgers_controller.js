const express = require("express");
const router = express.Router();
const burger = require("../models/burgers.js");

// Routes

router.get("/", function (req, res) {
    res.redirect("/index");
});

router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/burger/create", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/index");
    });
});

module.exports = router;