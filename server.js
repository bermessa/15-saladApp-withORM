// Sets up Node
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
var bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Sets up Express Engine Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/salad_controller.js");
app.use("/", routes);

app.listen(port, function() {
    console.log("listening on port", port);
});
