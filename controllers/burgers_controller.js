const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Routes

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", (req, res) => {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.name, req.body.devoured],
        (result) => {
            res.json({ id: result.insertID });
        }
    );
});

router.put("/api/cats/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update({ devoured: req.body.devoured }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export the routes for server.js
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