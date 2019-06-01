// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
var express = require("express");
var burger = require("../models/burgers.js")

// 4. Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj)
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne("burger_name",  req.body.burger_name, function(data) {
        res.redirect("/");
    });
});

router.post("/burgers/:id", function (req, res) {
    var condition = "WHERE id = " + req.params.id;
    burger.updateOne(condition, function(data){
        res.redirect("/");
    });
});

module.exports = router;