var express = require("express");
var router = express.Router();
var salad = require("../models/salad.js");

router.get("/", function(req, res) {
    salad.select(function(data) {
        var hbsObject = {
            salad: data
        };
        res.render("index", hbsObject); //could also be { salad: data }
    });
});

router.post("/", function(req, res) {
    salad.insert(req.body.newTopping, function(data) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    salad.update(req.params.id, function(data) {
        res.status(200).end();
    });
});

module.exports = router;
