const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Routes

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

// add a burger to the database
router.post("/api/burgers", (req, res) => {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        (result) => {
            res.json({ id: result.insertId });
        }
    );
});

// update burger by id to be devoured
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    
    burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete/devour your burger
router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export the router to server.js
module.exports = router;


/* router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
}); */

/* router.post("/burger/create", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/index");
    });
});
 */
/* module.exports = router; */